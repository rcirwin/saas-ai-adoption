# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-07-28 (frs-outreach-writer run).

- Total `outreach_log` rows: 2267 (pre-run)
- Rows with `status = sent`: 532
- **Scored sends** (status=sent AND response_status non-blank): **0**
- Policy mode: **EXPLORATION**

## Why EXPLORATION

A scored send requires `status = sent` AND a non-blank `response_status`. All 532 sent rows still have a blank `response_status`, so there are **zero scored sends**. Template ranking (reply_rate, call_rate) is not computable, and the EXPLORATION -> EXPLOITATION switch is blocked until Ryan backfills `response_status` on the sent cohort. Standing blocker since early May.

## Email A/B variant scored-send counts (MIN_SCORED_PER_VARIANT = 20)

| Variant | Role | Sent rows | Scored sends | Reply rate | Call rate |
|---|---|---|---|---|---|
| hyper-personalized-email | control | 187 | 0 | n/a | n/a |
| email-short-question | test | 0 | 0 | n/a | n/a |
| email-proof-led | test | 0 | 0 | n/a | n/a |

All three variants are at 0 scored sends, below the 20 threshold, so email assignment stays in **exploration**: each prospect is assigned deterministically and evenly via `idx = (sum of ord(c) for c in prospect_id) % 3`.

Second-order blocker worth naming: the two challenger variants have been *drafted* many times but have **zero rows that ever reached `status = sent`**. Even a full disposition backfill on the sent cohort would only score the control. Getting `email-short-question` and `email-proof-led` actually sent is a prerequisite for any structural A/B read.

This run's email assignments (10 emails): docsautomator -> hyper-personalized-email; elromco -> hyper-personalized-email; emailable -> hyper-personalized-email; digitalchalk -> email-short-question; edsby -> email-short-question; ega-futura -> email-short-question; diigo -> email-proof-led; docuclipper -> email-proof-led; eighty6 -> email-proof-led; elfsight -> email-proof-led. Distribution 3 hyper / 3 short-question / 4 proof-led (deterministic per policy).

## LinkedIn template ranking

Not computable (0 scored sends). Falling back to the default observation-first connect template for all LinkedIn channels regardless of (category, ai_posture). 5 linkedin-connect drafted this run.

## Ranking table

Empty. No scored sends to rank. No template bias applied this run.

## Reported inconsistency (re-flag)

The `## LinkedIn Connection Request` section of `agents/templates/outreach.md` still hard-rules "always name Future Ready Studio" and "always include the AI-readiness assessments clause". That contradicts the 2026-06-23 human correction (observation-first, mirror first, no FRS naming in cold connects), which every run since 2026-06-24 has followed. Needs reconciliation in the template file.
