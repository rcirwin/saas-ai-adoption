# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-06-17 (frs-outreach-writer run).

- Policy mode: **EXPLORATION**
- Scored sends (status=sent AND response_status non-blank): **0** of 433 sent rows / 1758 total log rows

## Email A/B (active variants)

`MIN_SCORED_PER_VARIANT = 20`. Exploration persists until every active variant clears the threshold.

| Variant | Role | Scored sends |
|---|---|---|
| hyper-personalized-email | control | 0 |
| email-short-question | challenger | 0 |
| email-proof-led | challenger | 0 |

Mode is EXPLORATION because all three variants have fewer than 20 scored sends. Email assignment is deterministic and evenly split: `idx = (sum of ord(c) for c in prospect_id) % 3`.

This run assigned 2 emails, both landed on `hyper-personalized-email` (idx 0):
- wp-fusion -> hyper-personalized-email
- scoutforpets -> hyper-personalized-email

## Ranking table

No scored sends exist, so reply_rate and call_rate are undefined for every (template, category, ai_posture) cell. No exploitation ranking is possible.

## LinkedIn channels

No scored sends, so all LinkedIn channels fall back to the default template `linkedin-connect` from `outreach.md`. This run drafted 13 linkedin-connect with that default.

## Standing blocker

Template ranking and same-channel second-touch remain blocked until the human dispositions `outreach_log` rows (fills `response_status` and `led_to_call`). All 433 sent rows are blank. Until then every run stays in exploration and second touches are limited to untouched parallel channels.
