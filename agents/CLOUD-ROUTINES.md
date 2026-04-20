# FRS Cloud Routines Setup

5 scheduled sessions to create in Claude Code on the web.

All agent logic lives in `.claude/agents/*.md` and `CLAUDE.md` at the repo root — these are auto-loaded when a session starts and are the single source of truth for how each agent operates (including the mandatory commit-and-push to `main` at the end of every run).

Routine instructions below are intentionally thin: they just dispatch to a subagent. Update the agent `.md` files to change behavior — no need to edit scheduled routines again.

## Prerequisites

- Complete `agents/SETUP.md` (create Sheet, bootstrap tabs, share service account, set 3 project secrets)
- `main` branch allows direct pushes
- Linear MCP connected at your Claude account level

---

## 1. Weekly Content Planner

| Field | Value |
|---|---|
| **Name** | `FRS — Plan Week` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 1 * * 1` |
| **UTC → ET** | Mon 01:00 UTC = Sun 9pm ET (EDT) |

**Instruction (copy/paste):**

```
/frs-plan-week

Plan 3 posts for this coming week. Follow the steps in .claude/agents/frs-content-planner.md — especially the final commit-and-push to main so the Draft Post routine can read the plan.
```

---

## 2. Draft Post (Mon/Wed/Fri)

| Field | Value |
|---|---|
| **Name** | `FRS — Draft Post` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 10 * * 1,3,5` |
| **UTC → ET** | Mon/Wed/Fri 10:00 UTC = Mon/Wed/Fri 6am ET (EDT) |

**Instruction (copy/paste):**

```
Determine today's date (ET). Find the current week's plan at agents/plans/<YYYY>-W<WW>.md and look up the row scheduled for today.

If a post is scheduled for today, invoke /frs-draft-post with the pillar ID and angle from that row. Follow .claude/agents/frs-content-writer.md — especially the final commit-and-push to main.

If no post is scheduled, write a 2-line note to agents/drafts/<YYYY-MM-DD>-no-plan.md, commit it, push, and exit.
```

---

## 3. Weekly Prospect Sourcer

| Field | Value |
|---|---|
| **Name** | `FRS — Source Leads` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 11 * * 2` |
| **UTC → ET** | Tue 11:00 UTC = Tue 7am ET (EDT) |

**Instruction (copy/paste):**

```
/frs-source-leads all 15

Source up to 15 new prospects rotating across all configured sources (and any other creative lead sources the agent finds). Follow .claude/agents/frs-prospect-sourcer.md — especially the final commit-and-push to main so the Researcher (runs 2h later) sees the new rows.
```

---

## 4. Prospect Researcher (Tue–Fri)

| Field | Value |
|---|---|
| **Name** | `FRS — Research Prospects` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 13 * * 2-5` |
| **UTC → ET** | Tue–Fri 13:00 UTC = Tue–Fri 9am ET (EDT) |

**Instruction (copy/paste):**

```
/frs-research all-identified 10

Research up to 10 prospects with status=identified and score fit 1–5. Follow .claude/agents/frs-prospect-researcher.md — especially the final commit-and-push to main so the Outreach Writer (runs 3h later) sees the scored rows.
```

---

## 5. Outreach Writer (Tue–Fri)

| Field | Value |
|---|---|
| **Name** | `FRS — Draft Outreach` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 16 * * 2-5` |
| **UTC → ET** | Tue–Fri 16:00 UTC = Tue–Fri 12pm ET (EDT) |

**Instruction (copy/paste):**

```
/frs-draft-outreach all-researched

Draft personalized outreach for researched prospects that are ready for first-touch or follow-up. Follow .claude/agents/frs-outreach-writer.md — especially the final commit-and-push to main so drafts land in the repo for Ryan's review.
```

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

Day-of-week: `0` = Sunday, `1` = Monday, … `6` = Saturday.

## DST Adjustment

Cron is UTC. When EDT ends (first Sunday in November), add 1 hour to each UTC time to keep the same ET hour:

| EDT (summer) cron | EST (winter) cron |
|---|---|
| `0 1 * * 1` | `0 2 * * 1` |
| `0 10 * * 1,3,5` | `0 11 * * 1,3,5` |
| `0 11 * * 2` | `0 12 * * 2` |
| `0 13 * * 2-5` | `0 14 * * 2-5` |
| `0 16 * * 2-5` | `0 17 * * 2-5` |

Reverse when EDT resumes (second Sunday in March). Set calendar reminders for both dates — scheduled sessions do not auto-adjust for DST.

## Troubleshooting

**"Session ran but nothing happened"**
Session log → look for `[frs-session-start] Ready.` If you see the credentials warning, your secrets aren't configured.

**"google-api-python-client not installed"**
The SessionStart hook runs `pip install -r scripts/requirements.txt` on every boot. If it fails, check the session log for `WARNING: pip install failed`.

**"Draft Post routine ran but no post was drafted"**
Check `agents/plans/` for the current week's plan file. If missing, the Plan Week session didn't run or its push failed. Check the Plan Week session log.

**"Researcher isn't processing prospects"**
Check the Sheet `prospects` tab — any rows with `status=identified`? If not, the sourcer didn't find qualified leads or its push failed.

**"Outreach writer finds no work"**
Check `prospects` for rows with `status=researched`. Researcher must complete and push before outreach runs.

**"Push failed"**
Each agent retries 4x with exponential backoff. If main has branch protection, either (a) disable the protection, (b) add a deploy key with bypass, or (c) edit the agent `.md` files to push to a branch + open a PR via `gh`.

## Iteration loop

After each week:
1. Review summary files in `agents/plans/`, `agents/sourcing-runs/`, `agents/research-runs/`, `agents/outreach-runs/`
2. Fill engagement data on the `posts` Sheet tab — planner uses this next Sunday
3. Fill response data on the `outreach_log` Sheet tab — outreach writer uses this to pick winning templates
4. In an ad-hoc session, give agents feedback. They update `.claude/agent-memory/<agent>/MEMORY.md` and improve over time.
