# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-07-24 (frs-outreach-writer run).

- Total `outreach_log` rows: 2252 (pre-run)
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

This run's email assignments (10 emails): cloudamqp -> hyper-personalized-email; coupontools -> hyper-personalized-email; culcha -> hyper-personalized-email; content-snare -> email-short-question; designmodo-postcards -> email-short-question; cloudpano -> email-proof-led; condens -> email-proof-led; dash-app -> email-proof-led; datagma -> email-proof-led; devsamurai -> email-proof-led. Distribution 3 hyper / 2 short-question / 5 proof-led (deterministic per policy).

## LinkedIn template ranking

Not computable (0 scored sends). Falling back to the default observation-first connect template for all LinkedIn channels regardless of (category, ai_posture). 5 linkedin-connect drafted this run.

## Ranking table

Empty. No scored sends to rank. No template bias applied this run.
