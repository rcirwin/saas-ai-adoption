# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-06-11 (frs-outreach-writer run).

## Policy Mode: EXPLORATION

Scored sends to date: **0** (a scored send = `status=sent` AND `response_status` non-blank).
All 388 `sent` rows in `outreach_log` still have blank `response_status`, so no template bias is possible. Channel defaults apply.

## Email A/B Variant Scored-Send Counts

`MIN_SCORED_PER_VARIANT = 20`. Exploration continues until every active variant clears 20 scored sends.

| Variant | Scored sends | Status |
|---|---|---|
| hyper-personalized-email (control) | 0 | below threshold |
| email-short-question | 0 | below threshold |
| email-proof-led | 0 | below threshold |

Since all three are below 20, email assignment uses the deterministic even-split:
`idx = (sum of ord(c) for c in prospect_id) % 3`, then `active_variants[idx]`.

## LinkedIn Channel Selection

No scored sends → highest-call_rate lookup is null → fall back to default templates:
- `linkedin-connect` → `linkedin-connect-default`
- `linkedin-dm` → `linkedin-dm-default`

## Ranking Table

Empty. Zero scored sends means `reply_rate` and `call_rate` are undefined for every (template, category, ai_posture) cell. No ranking is possible until Ryan backfills `response_status` on the sent cohort.
