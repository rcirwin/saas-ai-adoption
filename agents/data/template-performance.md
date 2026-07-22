# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-07-22 (frs-outreach-writer run).

- Total `outreach_log` rows: 2222
- Rows with `status = sent`: 532
- **Scored sends** (status=sent AND response_status non-blank): **0**
- Policy mode: **EXPLORATION**

## Why EXPLORATION

A scored send requires `status = sent` AND a non-blank `response_status`. All 532 sent rows still have a blank `response_status`, so there are **zero scored sends**. Template ranking (reply_rate, call_rate) is not computable, and the EXPLORATION -> EXPLOITATION switch is blocked until Ryan backfills `response_status` on the sent cohort. Standing blocker since early May.

## Email A/B variant scored-send counts (MIN_SCORED_PER_VARIANT = 20)

| Variant | Role | Scored sends | Reply rate | Call rate |
|---|---|---|---|---|
| hyper-personalized-email | control | 0 | n/a | n/a |
| email-short-question | test | 0 | n/a | n/a |
| email-proof-led | test | 0 | n/a | n/a |

All three variants are at 0 scored sends, below the 20 threshold, so email assignment stays in **exploration**: each prospect is assigned deterministically and evenly via `idx = (sum of ord(c) for c in prospect_id) % 3`.

This run's email assignments: boomerangme -> hyper-personalized-email; boords -> email-short-question; brandkit -> email-short-question; brilliant-directories -> hyper-personalized-email; bryq -> email-proof-led; buddy-punch -> email-short-question. Distribution 2 hyper / 3 short-question / 1 proof-led (deterministic).

## LinkedIn template ranking

Not computable (0 scored sends). Falling back to the default observation-first connect template for all LinkedIn channels regardless of (category, ai_posture).

## Ranking table

Empty. No scored sends to rank. No template bias applied this run.
