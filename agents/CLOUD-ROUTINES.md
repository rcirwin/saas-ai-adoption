# FRS Cloud Routines Setup

Everything you need to create scheduled sessions in Claude Code on the web for the full 5-agent pipeline.

## Prerequisites

Before creating any routines, complete `agents/SETUP.md` through Step 3 (Session Hooks). You need:
- Google Sheet created + bootstrapped with 6 tabs (run `scripts/sheet-bootstrap.gs`)
- 3 project secrets set in Claude Code web:
  - `FRS_GOOGLE_CREDENTIALS_B64` (base64 of service account JSON)
  - `FRS_GOOGLE_CREDENTIALS` = `/tmp/frs-service-account.json`
  - `FRS_PROSPECTS_SHEET_ID` = your Sheet ID
- `main` branch push allowed (Stop hook pushes directly)

## Schedule Overview

All times ET, converted to UTC for cron. Assumes EDT (summer DST, UTC-4). Switch to UTC-5 in winter.

```
Week shape:
Sun 9pm    PLANNER                      (content: next week's plan)
Mon 6am    WRITER (Monday's post)
Tue 6am    WRITER (no; Tue is sourcing day)
Tue 7am    SOURCER                      (pipeline: 15 new leads)
Tue 9am    RESEARCHER                   (pipeline: research fresh identified)
Tue 12pm   OUTREACH WRITER              (pipeline: draft messages for researched)
Wed 6am    WRITER (Wednesday's post)
Wed 9am    RESEARCHER
Wed 12pm   OUTREACH WRITER
Thu 9am    RESEARCHER
Thu 12pm   OUTREACH WRITER
Fri 6am    WRITER (Friday's post)
Fri 9am    RESEARCHER
Fri 12pm   OUTREACH WRITER
```

---

## 7 Scheduled Sessions to Create

For each session, in Claude Code web: **Scheduled Sessions → New Session**. Fill the 4 fields from the tables below.

All sessions use model `claude-opus-4-7` (per Ryan's preference for quality over cost; swap to `claude-sonnet-4-6` later if you want to reduce spend on lower-stakes routines like research).

---

### 1. Weekly Content Planner

| Field | Value |
|---|---|
| **Name** | `FRS — Plan Week` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 1 * * 1` |
| **Meaning** | Monday 01:00 UTC = Sunday 9pm ET (EDT) |

**Instruction:**
```
/frs-plan-week
```

---

### 2. Monday Content Draft

| Field | Value |
|---|---|
| **Name** | `FRS — Draft Monday Post` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 10 * * 1` |
| **Meaning** | Monday 10:00 UTC = Monday 6am ET |

**Instruction:**
```
Read the current week's content plan from agents/plans/ — find the most recent W<WW>.md file. Find the post scheduled for today (Monday). Then invoke the frs-content-writer subagent with the pillar and angle from that plan entry. All drafting instructions are in .claude/agents/frs-content-writer.md.
```

---

### 3. Weekly Prospect Sourcer

| Field | Value |
|---|---|
| **Name** | `FRS — Source Leads` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 11 * * 2` |
| **Meaning** | Tuesday 11:00 UTC = Tuesday 7am ET |

**Instruction:**
```
/frs-source-leads all 15
```

---

### 4. Tue/Wed/Thu/Fri Prospect Researcher

| Field | Value |
|---|---|
| **Name** | `FRS — Research Prospects` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 13 * * 2-5` |
| **Meaning** | Tue–Fri 13:00 UTC = Tue–Fri 9am ET |

**Instruction:**
```
/frs-research all-identified 10
```

---

### 5. Wednesday Content Draft

| Field | Value |
|---|---|
| **Name** | `FRS — Draft Wednesday Post` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 10 * * 3` |
| **Meaning** | Wednesday 10:00 UTC = Wednesday 6am ET |

**Instruction:**
```
Read the current week's content plan from agents/plans/ — find the most recent W<WW>.md file. Find the post scheduled for today (Wednesday). Then invoke the frs-content-writer subagent with the pillar and angle from that plan entry. All drafting instructions are in .claude/agents/frs-content-writer.md.
```

---

### 6. Tue/Wed/Thu/Fri Outreach Writer

| Field | Value |
|---|---|
| **Name** | `FRS — Draft Outreach` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 16 * * 2-5` |
| **Meaning** | Tue–Fri 16:00 UTC = Tue–Fri 12pm ET |

**Instruction:**
```
/frs-draft-outreach all-researched
```

---

### 7. Friday Content Draft

| Field | Value |
|---|---|
| **Name** | `FRS — Draft Friday Post` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 10 * * 5` |
| **Meaning** | Friday 10:00 UTC = Friday 6am ET |

**Instruction:**
```
Read the current week's content plan from agents/plans/ — find the most recent W<WW>.md file. Find the post scheduled for today (Friday). Then invoke the frs-content-writer subagent with the pillar and angle from that plan entry. All drafting instructions are in .claude/agents/frs-content-writer.md.
```

---

## Cron Reference

Format: `minute hour day-of-month month day-of-week` (all UTC).

| Cron | Meaning |
|---|---|
| `0 1 * * 1` | Monday 1am UTC (= Sun 9pm ET) |
| `0 10 * * 1` | Monday 10am UTC (= Mon 6am ET) |
| `0 10 * * 3` | Wednesday 10am UTC (= Wed 6am ET) |
| `0 10 * * 5` | Friday 10am UTC (= Fri 6am ET) |
| `0 11 * * 2` | Tuesday 11am UTC (= Tue 7am ET) |
| `0 13 * * 2-5` | Tue-Fri 1pm UTC (= Tue-Fri 9am ET) |
| `0 16 * * 2-5` | Tue-Fri 4pm UTC (= Tue-Fri 12pm ET) |

Day-of-week: `0` = Sunday, `1` = Monday, ..., `6` = Saturday.

## DST Adjustment

The schedules above target EDT (summer). When daylight saving ends (first Sunday in November), add 1 hour to every UTC time to keep the same ET:
- `0 10 * * 1` → `0 11 * * 1`
- `0 11 * * 2` → `0 12 * * 2`
- etc.

Reverse when DST begins again (second Sunday in March).

## Model Choice Rationale

All 7 sessions use `claude-opus-4-7` by default. Where you can save tokens without quality loss:

| Session | Best model | Why |
|---|---|---|
| Plan Week | Opus 4.7 | Strategic judgment about pillar weights; 1x/week so cost is low |
| Draft Mon/Wed/Fri | Opus 4.7 | Voice-sensitive; these are your actual posts, don't cheap out |
| Source Leads | **Sonnet 4.6** (OK) | Mostly pattern matching + web scraping; 1x/week |
| Research Prospects | **Sonnet 4.6** (OK) | Rubric-driven, runs 4x/week so cost adds up |
| Draft Outreach | Opus 4.7 | Voice + personalization; cold outreach is high-leverage |

For month 1, run all on Opus to establish baseline quality. Switch sourcer and researcher to Sonnet after you've validated output.

## Troubleshooting

**"Session ran but nothing changed"**: Check the session log. The SessionStart hook writes to stdout — look for `[frs-session-start] Ready.` If you see credential warnings, secrets aren't set.

**"Content writer couldn't find today's plan"**: The plan file `agents/plans/<YYYY>-W<WW>.md` may not exist yet. The Plan Week session creates it — make sure that session runs before the draft sessions (Sunday 9pm ET, before Monday 6am ET).

**"Researcher isn't processing prospects"**: Check `prospects` tab — are there rows with `status = identified`? If not, the sourcer hasn't run or didn't find any qualified leads this week.

**"Outreach writer finds no work"**: Check `prospects` tab — are there rows with `status = researched`? The researcher must complete before the outreach writer runs on the same day. The 9am → 12pm gap is for this.

**"Push failed on Stop hook"**: The Stop hook retries 4 times with exponential backoff. If main branch has protection that blocks direct pushes, either (a) disable the protection, (b) change the hook to push to a branch + open a PR, or (c) use a deploy key with bypass permissions.

**"DST wrong"**: See DST Adjustment above. Cloud scheduled sessions don't auto-adjust for timezone changes.

## Iteration

After the first full week of runs:
1. Review each run's summary file (in `agents/plans/`, `agents/sourcing-runs/`, `agents/research-runs/`, `agents/outreach-runs/`)
2. Fill in engagement data on the `posts` Sheet tab so the planner can weight pillars
3. Fill in response data on the `outreach_log` Sheet tab so the outreach writer learns templates
4. Give each agent explicit feedback — they'll update their `MEMORY.md` files and improve

After 4 weeks, you should see:
- Planner scheduling more of the pillars that actually drive calls
- Outreach writer converging on the best template per category
- Researcher skipping prospects that historically score low in certain categories
