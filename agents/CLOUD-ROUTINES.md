# FRS Cloud Routines Setup

Everything you need to create scheduled sessions in Claude Code on the web for the 5-agent pipeline.

**This repo is designed for cloud-only operation.** All env vars live as Claude Code project secrets — no `~/.zshrc` required.

## Prerequisites

Before creating any routines, complete `agents/SETUP.md`. You need:

- Google Sheet created + bootstrapped (run `scripts/sheet-bootstrap.gs` once in Apps Script)
- Service account email shared as Editor on the Sheet
- 3 project secrets set in Claude Code web → Project → Settings → Secrets:
  - `FRS_GOOGLE_CREDENTIALS_B64` — base64 of the service account JSON
  - `FRS_GOOGLE_CREDENTIALS` — `/tmp/frs-service-account.json` (path the SessionStart hook writes to)
  - `FRS_PROSPECTS_SHEET_ID` — your Sheet ID
- `main` branch allows direct pushes (Stop hook pushes artifacts here — see "Push-to-main timing" below)

## Architecture Recap

One routine per agent. Each routine is a scheduled cloud session. Cron fires on whichever day(s) that agent should work.

```
Sun 9pm  ET  →  PLAN-WEEK          (content-planner)
Mon/Wed/Fri 6am ET  →  DRAFT-POST  (content-writer)
Tue 7am  ET  →  SOURCE-LEADS       (prospect-sourcer)
Tue-Fri 9am ET  →  RESEARCH        (prospect-researcher)
Tue-Fri 12pm ET →  DRAFT-OUTREACH  (outreach-writer)
```

Pipeline ordering matters:
- `plan-week` runs Sunday so the `draft-post` routine always has a plan to read on Monday.
- On Tuesdays: `source-leads` (7am) → fresh identified prospects → `research` (9am) → fresh researched → `draft-outreach` (12pm). The 2-hour gaps leave slack if a run overruns.

## Push-to-main timing

The `Stop` hook in `.claude/settings.json` runs **automatically when each session ends**. It:

1. Stages changes in `agents/drafts/`, `agents/plans/`, `agents/sourcing-runs/`, `agents/research-runs/`, `agents/outreach-runs/`, `agents/outreach-drafts/`, `.claude/agent-memory/`
2. Creates an auto-commit with a timestamped message
3. Pushes to `origin/main` (retries 4x with exponential backoff on network errors)

You do not configure push timing per-routine. The Stop hook handles it for all routines uniformly. The next routine that boots will `git pull origin main` via the SessionStart hook and pick up the previous routine's artifacts.

---

## 5 Scheduled Sessions to Create

In Claude Code web → **Scheduled Sessions → New Session**, fill the 4 fields below.

All sessions use `claude-opus-4-7`. (Switch research/sourcer to `claude-sonnet-4-6` after month 1 if you want to cut cost — see "Model choice" at the bottom.)

---

### 1. Weekly Content Planner

| Field | Value |
|---|---|
| **Name** | `FRS — Plan Week` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 1 * * 1` |
| **Meaning (UTC → ET)** | Mon 01:00 UTC = Sun 9pm ET (EDT) |
| **Instruction** | `/frs-plan-week` |

---

### 2. Draft Post (Mon/Wed/Fri)

| Field | Value |
|---|---|
| **Name** | `FRS — Draft Post` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 10 * * 1,3,5` |
| **Meaning (UTC → ET)** | Mon/Wed/Fri 10:00 UTC = Mon/Wed/Fri 6am ET (EDT) |

**Instruction:**

```
Determine today's day of week in ET. Read the current week's content plan — find the most recent agents/plans/<YYYY>-W<WW>.md file. Find the post scheduled for today. Then invoke the frs-content-writer subagent with the pillar and angle from that plan entry. If no post is scheduled for today, write a short note to agents/drafts/<date>-no-plan.md and exit. All drafting instructions live in .claude/agents/frs-content-writer.md.
```

---

### 3. Weekly Prospect Sourcer

| Field | Value |
|---|---|
| **Name** | `FRS — Source Leads` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 11 * * 2` |
| **Meaning (UTC → ET)** | Tue 11:00 UTC = Tue 7am ET (EDT) |
| **Instruction** | `/frs-source-leads all 15` |

---

### 4. Prospect Researcher (Tue–Fri)

| Field | Value |
|---|---|
| **Name** | `FRS — Research Prospects` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 13 * * 2-5` |
| **Meaning (UTC → ET)** | Tue–Fri 13:00 UTC = Tue–Fri 9am ET (EDT) |
| **Instruction** | `/frs-research all-identified 10` |

---

### 5. Outreach Writer (Tue–Fri)

| Field | Value |
|---|---|
| **Name** | `FRS — Draft Outreach` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 16 * * 2-5` |
| **Meaning (UTC → ET)** | Tue–Fri 16:00 UTC = Tue–Fri 12pm ET (EDT) |
| **Instruction** | `/frs-draft-outreach all-researched` |

---

## Cron Reference

Format: `minute hour day-of-month month day-of-week` (all UTC).

| Cron | Meaning (EDT / summer) |
|---|---|
| `0 1 * * 1` | Mon 1am UTC = Sun 9pm ET |
| `0 10 * * 1,3,5` | Mon/Wed/Fri 10am UTC = Mon/Wed/Fri 6am ET |
| `0 11 * * 2` | Tue 11am UTC = Tue 7am ET |
| `0 13 * * 2-5` | Tue-Fri 1pm UTC = Tue-Fri 9am ET |
| `0 16 * * 2-5` | Tue-Fri 4pm UTC = Tue-Fri 12pm ET |

Day-of-week: `0` = Sunday, `1` = Monday, … `6` = Saturday. Use commas for specific days (`1,3,5`), dashes for ranges (`2-5`).

## DST Adjustment

Cron is UTC; it does not shift with DST. The schedules above assume **EDT (summer, UTC−4)**. When EDT ends (first Sunday in November), add 1 hour to each UTC time to keep the same ET:

| EDT (summer) cron | EST (winter) cron |
|---|---|
| `0 1 * * 1` | `0 2 * * 1` |
| `0 10 * * 1,3,5` | `0 11 * * 1,3,5` |
| `0 11 * * 2` | `0 12 * * 2` |
| `0 13 * * 2-5` | `0 14 * * 2-5` |
| `0 16 * * 2-5` | `0 17 * * 2-5` |

Reverse when EDT resumes (second Sunday in March). Set a calendar reminder for both dates.

## Model Choice

All 5 sessions default to `claude-opus-4-7`. After 2–4 weeks of baseline runs, you can swap cost-sensitive routines to Sonnet 4.6:

| Session | Best model | Rationale |
|---|---|---|
| Plan Week | Opus 4.7 | Strategic judgment; 1x/week so cost is trivial |
| Draft Post | Opus 4.7 | Voice-sensitive; these become your actual posts |
| Source Leads | Opus 4.7 → Sonnet 4.6 OK | Pattern matching + web scraping; 1x/week |
| Research Prospects | Opus 4.7 → Sonnet 4.6 OK | Rubric-driven, runs 4x/week (cost adds up) |
| Draft Outreach | Opus 4.7 | Voice + personalization; high-leverage |

## Troubleshooting

**"Session ran but nothing changed"**
Session log → look for `[frs-session-start] Ready.` If you see `WARNING: Neither FRS_GOOGLE_CREDENTIALS_B64 nor FRS_GOOGLE_CREDENTIALS is set`, secrets aren't configured. Sheet MCP won't connect; agents with hard Sheet dependencies (sourcer, researcher, outreach) will fail fast.

**"Draft Post routine ran but no post was drafted"**
Check `agents/plans/` for the current week's plan file. If missing, the Plan Week session didn't run or failed. Look at the Plan Week session log in Claude Code web.

**"Researcher isn't processing prospects"**
Check the Sheet `prospects` tab — any rows with `status = identified`? If not, the sourcer didn't find qualified leads this week. Also check the sourcer's `agents/sourcing-runs/` summary.

**"Outreach writer finds no work"**
Check the Sheet `prospects` tab for rows with `status = researched` and `fit_score ≥ 3`. Researcher must complete before the outreach writer runs. 9am → 12pm gap exists for this.

**"Push failed on Stop hook"**
The Stop hook retries 4x with exponential backoff. If main has branch protection blocking direct pushes, either:
- (a) Disable protection on main, or
- (b) Edit `scripts/session-stop.sh` to push to a branch + open a PR via `gh`, or
- (c) Add a deploy key with bypass permissions.

The artifacts are still committed locally inside the sandbox, but they're lost when the sandbox dies if push fails.

**"DST changed and all my routines are off by an hour"**
See "DST Adjustment" above. You must manually shift every cron expression.

## Iteration loop

After each week of runs:

1. Review the summary files:
   - `agents/plans/<YYYY>-W<WW>.md`
   - `agents/sourcing-runs/<date>.md`
   - `agents/research-runs/<date>.md`
   - `agents/outreach-runs/<date>.md`
2. Fill engagement data on the `posts` Sheet tab (impressions, reactions, DMs, calls_booked). The planner weighs pillars by this.
3. Fill response data on the `outreach_log` Sheet tab (response_sentiment, led_to_call). The outreach writer picks the best template per category/posture.
4. Give each agent explicit feedback in an ad-hoc local session — they'll update `.claude/agent-memory/<agent>/MEMORY.md` and improve over time.

After 4 weeks you should see:
- Planner scheduling more posts in pillars that actually drive calls
- Outreach writer converging on the best template per (category, ai_posture)
- Researcher skipping prospect categories that historically score 1–2
