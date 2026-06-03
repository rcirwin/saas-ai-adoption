# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-06-03 (frs-outreach-writer run).

- Policy mode: **EXPLORATION**
- Total `outreach_log` rows: 1428 (1413 before this run + 15 email appends)
- Sent rows: 315
- **Scored sends (status=sent AND response_status non-blank): 0**

Because there are zero scored sends, no reply_rate or call_rate can be computed for any (template, category, ai_posture) cell. LinkedIn channels fall back to the default template. Email channel uses the deterministic even-split A/B assignment.

## Email A/B Variants (scored-send counts)

`MIN_SCORED_PER_VARIANT = 20`. Exploration stays active until every active variant clears 20 scored sends.

| Variant | Role | Scored sends |
|---|---|---|
| hyper-personalized-email | control | 0 |
| email-short-question | challenger | 0 |
| email-proof-led | challenger | 0 |

All three are at 0 scored sends, below the 20 threshold, so **exploration persists**: each email prospect is assigned a variant deterministically and evenly via `idx = (sum of ord(c) for c in prospect_id) % 3`.

## This run's email variant assignment (2026-06-03, 15 emails)

| Variant | Count | Prospects |
|---|---|---|
| hyper-personalized-email | 5 | donordock, veryconnect, linarc, bookwhen, emailjs |
| email-short-question | 4 | apiworx, beae, glockapps, hexygen |
| email-proof-led | 6 | actonic, akada-software, captainverify, emaillistverify, keepa, mibex |

## Ranking table

Not computable. Zero scored sends means no template can be ranked by reply_rate or call_rate yet. When Ryan backfills `response_status` on the 315 sent rows, this table becomes usable for the first time in the project.

## Note

The challenger email variants (email-short-question, email-proof-led) have been drafted/sent across multiple batches but still have zero dispositioned outcomes. The single most valuable unblock for template optimization is dispositioning the sent cohort.
