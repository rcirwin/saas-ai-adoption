# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-06-26 (frs-outreach-writer run).

## Policy Mode: EXPLORATION

Scored sends (status = sent AND response_status non-blank): **0 of 463 sent rows** (1889 total log rows).

No row in `outreach_log` has a dispositioned `response_status` yet, so there are zero scored sends. Template ranking is impossible and the email A/B set stays in EXPLORATION mode (deterministic even-split, `idx = sum(ord(c) for c in prospect_id) % 3`). This is the standing blocker: until `response_status` is backfilled on the sent cohort, no template can be ranked and the system cannot move to EXPLOITATION.

## Email A/B Variant Scored-Send Counts (MIN_SCORED_PER_VARIANT = 20)

| Variant | Scored sends | At threshold? |
|---|---|---|
| hyper-personalized-email (control) | 0 | no |
| email-short-question | 0 | no |
| email-proof-led | 0 | no |

All three active variants are below the 20-scored-send threshold, so exploration continues.

## Ranking Table

No scored sends, so no reply_rate or call_rate can be computed for any (template_used, category, ai_posture) cell. LinkedIn channels fall back to `linkedin-connect-default`. Email channels use the deterministic even-split assignment.

## This Run's Email A/B Assignment (2026-06-26)

| prospect_id | variant assigned |
|---|---|
| geti-solutions | email-proof-led |
| glasscubes | hyper-personalized-email |
| gleam | email-proof-led |
| groupapp | email-proof-led |
| heatmap | email-short-question |
| hellotax | email-short-question |
| hirebook | email-proof-led |
| hurdlr | hyper-personalized-email |
| icypeas | hyper-personalized-email |
| inboxally | hyper-personalized-email |
| invoiceberry | email-short-question |
