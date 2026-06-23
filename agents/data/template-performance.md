# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-06-23 (frs-outreach-writer run).

- Policy mode: **EXPLORATION** (email A/B)
- Scored sends: **0** of 448 sent rows have a non-blank `response_status`.

## Why exploration persists

A scored send requires `status = sent` AND `response_status` non-blank. Every sent row still has a blank `response_status`, so there are **0 scored sends**. Until Ryan dispositions sent rows, template ranking cannot run and the email A/B stays in even-split exploration. This is the standing blocker (see MEMORY.md). Same-channel second-touch and best-template selection are blocked by the same gap.

## Email A/B variants (active set)

`MIN_SCORED_PER_VARIANT = 20`. Exploitation begins only when every variant clears it.

| Variant | Scored sends | Role | At threshold (20)? |
|---|---|---|---|
| `hyper-personalized-email` (control) | 0 | full mirror + 20-min ask | no |
| `email-short-question` | 0 | <90w, one question | no |
| `email-proof-led` | 0 | category insight first | no |

Assignment during exploration is deterministic and even: `idx = (sum of ord(c) for c in prospect_id) % 3`, so each prospect always lands on the same variant and the batch splits ~evenly for attribution.

## This run (2026-06-23) email assignment

- `email-short-question` (3): save-solutions-as, funnelkit, hypefury
- `email-proof-led` (5): thinkreservations, qebot, saturday-drive, shortstack, procedureflow
- `hyper-personalized-email` (2): dux-soup, juntrax

## LinkedIn channels

No scored sends, so LinkedIn uses the default template `linkedin-connect-default` from `outreach.md` for every (category, ai_posture). 5 connect drafts this run (barn2, hms-software, webappick, huckabuy, goflow).

## Ranking table

No scored sends. Ranking table is empty by definition. Populate `response_status` / `led_to_call` on sent rows to enable ranking and exploitation.
