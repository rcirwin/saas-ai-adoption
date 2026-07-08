# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-07-08 (frs-outreach-writer run).

- Policy mode: **EXPLORATION** (email A/B)
- Scored sends (status=sent AND response_status non-blank): **0** of 528 sent rows / 2098 total log rows

## Email A/B variant status

`MIN_SCORED_PER_VARIANT = 20`. Exploration persists until every active variant clears it.

| Variant | Scored sends | Threshold met? |
|---|---|---|
| hyper-personalized-email (control) | 0 | no |
| email-short-question | 0 | no |
| email-proof-led | 0 | no |

Assignment during exploration is deterministic even-split: `idx = (sum of ord(c) for c in prospect_id) % 3`, giving each prospect a reproducible variant so future outcomes stay attributable. This run's 13 emails split 4 hyper / 6 short-question / 3 proof-led.

## Ranking table

Ranking is blocked. With 0 scored sends, no (template, category, ai_posture) reply_rate or call_rate can be computed. LinkedIn channels fall back to the default connect template; email uses the exploration even-split above.

## Standing blocker

Template ranking and the EXPLORATION to EXPLOITATION transition remain blocked until the human dispositions `response_status` on sent rows. 528 sent rows currently carry blank `response_status`. Until at least one sent row is scored, every run stays in exploration and no template can be ranked.
