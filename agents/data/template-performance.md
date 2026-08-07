# Template Performance Snapshot

Derived snapshot. Source of truth is the `outreach_log` Sheet tab.
Last regenerated: 2026-08-07 (frs-outreach-writer run).

## Policy mode: EXPLORATION

`MIN_SCORED_PER_VARIANT = 20`. Every active email variant is below threshold, so
each prospect is assigned a variant deterministically and evenly:
`idx = sum(ord(c) for c in prospect_id) % 3`.

## Scored sends

A scored send requires `status = sent` AND a non-blank `response_status`.

| Metric | Value |
|---|---|
| Total `outreach_log` rows | 2,372 |
| Rows with `status = sent` | 532 |
| Rows with non-blank `response_status` | **0** |
| **Scored sends** | **0** |

**STANDING BLOCKER (unchanged since first run).** All 2,372 rows have a blank
`response_status`. Zero scored sends means no reply rate, no call rate, and no
ranking is computable. Exploration cannot end until Ryan dispositions sent rows.

## Active email variants

| Variant | Role | Drafted (all time) | Sent | Scored |
|---|---|---|---|---|
| `hyper-personalized-email` | control | 323 | 187 | 0 |
| `email-short-question` | challenger | 124 | 0 | 0 |
| `email-proof-led` | challenger | 130 | 0 | 0 |

**SECOND-ORDER BLOCKER (unchanged).** Both challengers have been drafted many
times and have never had a single row reach `status = sent`. Even a full
`response_status` backfill would score only the control and produce no A/B read.
Getting challenger drafts actually sent is a prerequisite ahead of disposition
backfill.

## Ranking table

Not computable. Requires at least one scored send per (template, category,
ai_posture) cell.

## LinkedIn channels

No scored sends either. LinkedIn selection continues to fall back to the default
template in `agents/templates/outreach.md`. No connects were drafted this run:
both first-touch buckets (`tn_with_contact`, `parallel_connect`) were empty.

## This run's assignment (2026-08-07, 15 email drafts)

- `hyper-personalized-email` 7: swordfish-software, talentguard, talentlyft,
  thecustomerfactor, tinypng, ubidots, unlayer
- `email-proof-led` 4: survalyzer, surveylab, survio, timecamp
- `email-short-question` 4: sublytics, surpass-software, surveyplanet, trackjs

8 of 15 landed on a challenger arm, which is the send-starved side.
