# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-06-18 (frs-outreach-writer run).

**Policy mode:** EXPLORATION

## Scored sends

A scored send = `status = sent` AND `response_status` non-blank.

- Total log rows: 1786
- Sent rows: 442
- **Scored sends: 0** (every `response_status` is blank)

With zero scored sends, no reply_rate or call_rate can be computed. Template ranking is impossible. All channels fall back to defaults, and the email A/B set stays in exploration (even split).

## Email A/B variants (active set)

`MIN_SCORED_PER_VARIANT = 20`. Every active variant is below threshold, so exploration continues: each prospect is assigned a variant deterministically by `idx = sum(ord(c) for c in prospect_id) % 3` (reproducible, ~even split).

| Variant | Role | Scored sends |
|---|---|---|
| hyper-personalized-email | control | 0 |
| email-short-question | challenger | 0 |
| email-proof-led | challenger | 0 |

This run's 13 emails split: 6 email-short-question, 6 email-proof-led, 1 hyper-personalized-email.

## LinkedIn channels

No scored sends, so the highest-call-rate lookup is null. Falls back to `linkedin-connect-default` from `outreach.md` for all (category, ai_posture) cells.

## Ranking table

Not computable until `response_status` is backfilled on the 442 sent rows. This remains the single standing blocker on template-performance learning for the project.
