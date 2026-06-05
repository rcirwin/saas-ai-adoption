# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-06-05 (frs-outreach-writer run).

- Policy mode: **EXPLORATION**
- Reason: 0 scored sends across the entire log. A scored send = `status = sent` AND non-blank `response_status`. Of 344 `sent` rows, 0 carry a `response_status`. Ranking is impossible; all selection falls back to defaults.

## Scored-send counts per active email variant (A/B set)

| Variant | Scored sends | Threshold (MIN_SCORED_PER_VARIANT) |
|---|---|---|
| hyper-personalized-email (control) | 0 | 20 |
| email-short-question | 0 | 20 |
| email-proof-led | 0 | 20 |

All variants below threshold, so email assignment stays on the deterministic even-split (`idx = sum(ord(c) for c in prospect_id) % 3`). No email channel was drafted this run (the eligible cohort had email already sent; the untouched channel was LinkedIn).

## LinkedIn channel selection

No scored sends for any (category, ai_posture) cell, so LinkedIn falls back to the default template `linkedin-connect-default` from `outreach.md`. All 15 drafts this run used `linkedin-connect-default`.

## Ranking table

Empty. No `(template_used, category, ai_posture)` group has any scored send. reply_rate and call_rate are undefined everywhere.

## When this changes

The first time Ryan backfills `response_status` on any of the 344 sent rows, this snapshot gains a real ranking and exploitation becomes possible once a variant crosses 20 scored sends.
