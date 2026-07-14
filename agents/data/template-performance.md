# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-07-14 (frs-outreach-writer run).

- Policy mode: **EXPLORATION**
- Total outreach_log rows: 2147
- Sent rows: 532
- **Scored sends (status=sent AND response_status non-blank): 0**

## Why exploration persists

A scored send requires `status = sent` AND a non-blank `response_status`. Today every `response_status` in `outreach_log` is blank, so there are **0 scored sends**. Ranking by reply/call rate is not yet possible. Email A/B assignment stays on the deterministic even-split; LinkedIn channels use the default template.

## Email A/B variants (active set) scored-send counts

`MIN_SCORED_PER_VARIANT = 20`. All three variants are below threshold, so exploration continues.

| Variant | Role | Scored sends | Reply rate | Call rate |
|---|---|---|---|---|
| hyper-personalized-email | control | 0 | n/a | n/a |
| email-short-question | challenger | 0 | n/a | n/a |
| email-proof-led | challenger | 0 | n/a | n/a |

## LinkedIn template ranking

No scored sends, so no (category, ai_posture) ranking is computable. LinkedIn channels fall back to the default connect template (`linkedin-connect-default`). This run: 15 of 15 drafts were `linkedin-connect-default`.

## Standing blocker

0 of 532 sent rows have a dispositioned `response_status`. Until the human backfills outcomes, template ranking and the EXPLORATION to EXPLOITATION transition remain blocked for every channel.
