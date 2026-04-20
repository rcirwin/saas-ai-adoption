# FRS Agentic System — Shared Rules

All Claude Code sessions in this repo (scheduled routines, manual cloud sessions, local desktop) automatically read this file on startup. It holds rules every agent in the FRS system must follow, so we don't duplicate them across 5 agent definitions.

If an individual agent definition contradicts a rule here, this file wins — flag the contradiction back to the caller.

## What this system is

Ryan Irwin runs Future Ready Studio, a $30K AI assessment for B2B SaaS companies at $500K–$5M ARR. This repo contains 5 agents that run as scheduled cloud routines:

- `frs-content-planner` — plans a week of LinkedIn content
- `frs-content-writer` — drafts individual LinkedIn posts
- `frs-prospect-sourcer` — finds new B2B SaaS prospects
- `frs-prospect-researcher` — scores prospect fit and AI posture
- `frs-outreach-writer` — drafts personalized cold outreach

Agents share state via Google Sheets (CRM + engagement data) and git (drafts, plans, memory).

## Data surfaces (where things live)

| Surface | What | How |
|---|---|---|
| Google Sheet (6 tabs) | Prospects, outreach log, research cache, config, posts, post ideas | `python3 scripts/sheet.py` |
| Linear | Task queue (research issues, content issues) | Linear MCP (user-scoped) |
| `agents/drafts/` | LinkedIn post drafts | Written by content-writer |
| `agents/plans/` | Weekly content plans | Written by content-planner |
| `agents/sourcing-runs/` | Sourcing run summaries | Written by prospect-sourcer |
| `agents/research-runs/` | Research run summaries | Written by prospect-researcher |
| `agents/outreach-drafts/` | Outreach message drafts | Written by outreach-writer |
| `agents/outreach-runs/` | Outreach run summaries | Written by outreach-writer |
| `.claude/agent-memory/<agent>/MEMORY.md` | Per-agent private learnings | Read + written by that agent |
| `.claude/agent-memory/shared/MEMORY.md` | Cross-agent learnings | Read by all agents; written when a learning applies system-wide |

## MANDATORY: Commit and push at end of every agent run

Every agent produces artifacts that other agents depend on. The sourcer's prospects feed the researcher 2 hours later. The researcher's scores feed the outreach writer 3 hours later. The planner's plan feeds the writer on Monday morning. If one agent's output isn't on `main` before the next one fires, the pipeline breaks.

**Every agent, as its final step, MUST:**

1. `git add` the directories it wrote to (specific to the agent — see each agent's definition) plus `.claude/agent-memory/`
2. `git commit -m "[<agent-role>] <one-line summary>"` with a descriptive tag: `[planner]`, `[writer]`, `[sourcer]`, `[researcher]`, `[outreach]`
3. `git push origin main` — if this fails, retry up to 4 times with exponential backoff (2s, 4s, 8s, 16s)
4. Report the commit SHA in the return summary

The Stop hook at `scripts/session-stop.sh` is a safety net that does this automatically at session end, but agents should not rely on it — commit and push explicitly so the state is durable before the session closes.

## Memory discipline

Each agent reads both:
- Its private memory at `.claude/agent-memory/<agent-name>/MEMORY.md` (for agent-specific preferences)
- The shared memory at `.claude/agent-memory/shared/MEMORY.md` (for cross-cutting learnings)

When an agent learns something:
- **If the learning only affects this agent** (e.g., "Ryan prefers shorter hooks") → write to private MEMORY.md
- **If the learning affects other agents** (e.g., "Category X prospects rarely convert — everyone should deprioritize") → write to shared MEMORY.md AND inform downstream agents via the run summary

Memory entries are **patterns**, not individual data points. Don't record "we scored Acme 4/5" — record "companies with signal Y tend to score 4+". Keep entries terse; bullet lists, not prose.

## Pipeline status flow (prospects)

The `status` column in the prospects tab moves one direction:

```
identified → researched → outreach-sent → connected → call-scheduled
           → call-completed → proposal-sent → closed-won / closed-lost
```

Only humans move status past `outreach-sent`. Agents only write: `identified` (sourcer), `researched` or `not-a-fit` (researcher). Outreach writer does NOT change status — the human marks `outreach-sent` when they actually send.

## Data-integrity rules

- **Never overwrite an existing prospect row.** Check dedup first; if the company exists, update specific columns, don't re-append.
- **Never invent numbers.** If ARR is unknown, write "unknown" — don't guess.
- **Never fabricate personalization hooks.** If research has none, skip the prospect for outreach rather than writing generic.
- **Column ownership:**
  - Sourcer owns contact columns (A–K): id, company, website, category, source, contact info
  - Researcher owns research columns (L–P): ai_posture, fit_score, fit_notes, research_summary, status transition (identified → researched/not-a-fit)
  - Outreach writer owns outreach columns (Q–U): last_outreach_date, last_outreach_channel, follow_up_due, status (stays `researched`; human transitions to `outreach-sent`)
  - `updated_at` (V): whoever touched the row last updates it

## Token discipline

- Read only the files you need for the current task. Don't preload unrelated context.
- Use `sheet.py read <tab> <filter=val>` with filters. Never fetch whole tabs if you can avoid it.
- Return summaries under 20 lines. The artifact files are the real output; the return value is a pointer.
- Never echo full drafts, full research findings, or full prospect lists into chat.

## When something fails

- Missing required context file → error out with the expected path, don't try to proceed from partial state
- `sheet.py` read fails → depends on the agent's role; see each agent's definition for whether it's a hard-fail or a graceful fallback
- `sheet.py` write fails → log to the run summary under `MANUAL_ENTRIES_NEEDED` and continue; don't abort the whole run on one bad write
- Linear fails → write local artifacts anyway; return with `LINEAR_SKIPPED: <reason>`
- Push fails after 4 retries → artifacts are committed locally; report the commit SHA so the human can push manually or the next session's SessionStart hook will pull the divergent state
