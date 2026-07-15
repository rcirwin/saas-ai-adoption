# Template Performance Snapshot

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

- **Last updated:** 2026-07-15 (frs-outreach-writer run)
- **Policy mode:** EXPLORATION (email A/B)
- **Total outreach_log rows:** 2162
- **Rows with status = sent:** 532
- **Scored sends (status = sent AND response_status non-blank):** 0

## Why exploration is still active

A scored send requires `status = sent` AND a non-blank `response_status`. Every `response_status` in the log is currently blank, so there are **0 scored sends**. Ranking (reply_rate / call_rate) and the exploration to exploitation flip are both blocked until the human dispositions sent rows. `MIN_SCORED_PER_VARIANT = 20`; all active variants sit at 0.

## Email A/B variants (active set)

| Variant | Role | Scored sends | Status |
|---|---|---|---|
| `hyper-personalized-email` | control | 0 | below MIN (20) |
| `email-short-question` | brevity + curiosity | 0 | below MIN (20) |
| `email-proof-led` | credibility first | 0 | below MIN (20) |

Assignment during exploration is deterministic and even: `idx = (sum of ord(c) for c in prospect_id) % 3`.

### This run's email assignment (12 emails)

- hyper-personalized-email (3): beds24, fastbill, lifterlms
- email-short-question (7): clockwork-recruiting, foxy-io, libraryworld, monkeypod, paykickstart, showit, abara-lms
- email-proof-led (2): profitbooks, smarterselect

## LinkedIn channel selection

Highest `call_rate` template for (category, ai_posture), else the default from `outreach.md`. With 0 scored sends there is no ranking signal, so LinkedIn connects use the default observation-first connect template (per the 2026-06-23 human correction: observation-first, no FRS naming, identity-by-focus close).

## Ranking table

Empty. Zero scored sends means no (template, category, ai_posture) cell has a computable reply_rate or call_rate yet.

## Standing blocker

0 of 532 sent rows have been dispositioned. Template ranking and the exploration to exploitation transition remain blocked until the human fills `response_status` / `led_to_call` on sent rows.
