# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-06-10 (frs-outreach-writer run).

- Policy mode: **EXPLORATION**
- Scored sends (status=sent AND response_status non-blank): **0 of 388 sent rows**

Because zero sends have been scored, no template ranking is possible. All LinkedIn channels fall back to `linkedin-connect-default`, and the email A/B set runs in even-split exploration mode.

## Email A/B variant scored-send counts (MIN_SCORED_PER_VARIANT = 20)

| Variant | Scored sends | Status |
|---|---|---|
| hyper-personalized-email (control) | 0 | below threshold |
| email-short-question | 0 | below threshold |
| email-proof-led | 0 | below threshold |

All three variants are below the 20-scored-send threshold, so exploration (deterministic even split via `idx = sum(ord(c) for c in prospect_id) % 3`) continues for every email.

## This run's email variant assignment (2026-06-10)

15 emails drafted, split: 4 hyper-personalized-email / 5 email-short-question / 6 email-proof-led.

## Ranking table

No scored data. Ranking unavailable. LinkedIn channels use `linkedin-connect-default`; email uses the even-split assignment.

## Note

`outreach_log` now holds 388 `sent` rows and 1008 `drafted` rows, none with `response_status` populated. Template-performance bias becomes possible the moment Ryan backfills `response_status` on any sent cohort.
