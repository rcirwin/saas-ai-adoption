# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-06-16 (frs-outreach-writer run).

- Policy mode: **EXPLORATION** (active)
- Scored sends (status=sent AND response_status non-blank): **0 of 1722 log rows**
- Sent rows (status=sent, response_status still blank): 418

## Why exploration persists

Ranking requires scored sends. A scored send needs `status = sent` AND a non-blank `response_status`. Today every `response_status` is blank, so there are zero scored sends and no template can be ranked. All channels fall back to defaults and the email A/B set runs an even deterministic split.

## Email A/B variant scored-send counts

`MIN_SCORED_PER_VARIANT = 20`. Exploration continues until every variant clears 20 scored sends.

| Variant | Role | Scored sends |
|---|---|---|
| `hyper-personalized-email` | control | 0 |
| `email-short-question` | challenger | 0 |
| `email-proof-led` | challenger | 0 |

All three are below threshold, so the writer assigns variants by the deterministic even-split rule
`idx = (sum(ord(c) for c in prospect_id)) % 3`.

## LinkedIn channel selection

No scored data, so `linkedin-connect` uses `linkedin-connect-default` from `outreach.md` for every prospect.

## Ranking table

Not computable. Zero scored sends. Backfilling `response_status` on the 418 sent rows would make this table usable for the first time.
