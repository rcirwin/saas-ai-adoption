# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-07-17 (frs-outreach-writer run).

- Policy mode: **EXPLORATION** (email A/B even-split)
- Scored sends (status=sent AND response_status non-blank): **0 of 532 sent rows** (2192 total log rows)

## Why exploration persists

Every active email variant has fewer than `MIN_SCORED_PER_VARIANT` (20) scored sends. All variants have **zero** scored sends because `response_status` is blank on all 532 sent rows. Until Ryan dispositions sent rows (accepted / replied / led_to_call), template ranking is impossible and the run stays in exploration: emails are assigned deterministically and evenly via `idx = (sum of ord(c) for c in prospect_id) % 3`.

## Active email variants (the A/B set) — scored-send counts

| Variant | Role | Scored sends | Reply rate | Call rate |
|---|---|---|---|---|
| `hyper-personalized-email` | control | 0 | n/a | n/a |
| `email-short-question` | brevity + curiosity | 0 | n/a | n/a |
| `email-proof-led` | credibility first | 0 | n/a | n/a |

## LinkedIn channels

No scored sends, so `best_template(category, ai_posture)` falls back to the default `linkedin-connect` template from `outreach.md` (observation-first ordering per the 2026-06-23 human correction; no FRS naming in the cold connect).

## This run's email A/B assignment (7 emails, even-split)

| Prospect | Variant (idx=sum(ord)%3) |
|---|---|
| akita | hyper-personalized-email |
| almabase | hyper-personalized-email |
| apimio | hyper-personalized-email |
| apploye | hyper-personalized-email |
| appbot | email-short-question |
| anymailfinder | email-proof-led |
| appstle | email-proof-led |

## Standing blocker

Template ranking + the EXPLORATION -> EXPLOITATION transition remain blocked until `response_status` is backfilled on the sent cohort. Flagged every run since the email A/B went live.
