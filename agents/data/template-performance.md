# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-08-06 (frs-outreach-writer run).

- Total `outreach_log` rows: 2357 (pre-run)
- Rows with `status = sent`: 532
- **Scored sends** (status=sent AND response_status non-blank): **0**
- Policy mode: **EXPLORATION**

## Why EXPLORATION

A scored send requires `status = sent` AND a non-blank `response_status`. All 532 sent rows still have a blank `response_status`, so there are **zero scored sends**. Template ranking (reply_rate, call_rate) is not computable, and the EXPLORATION to EXPLOITATION switch is blocked until Ryan backfills `response_status` on the sent cohort. Standing blocker since early May.

## Email A/B variant counts (MIN_SCORED_PER_VARIANT = 20)

| Variant | Role | Drafted rows | Sent rows | Scored sends | Reply rate | Call rate |
|---|---|---|---|---|---|---|
| hyper-personalized-email | control | 114 | 187 | 0 | n/a | n/a |
| email-short-question | test (brevity) | 115 | 0 | 0 | n/a | n/a |
| email-proof-led | test (credibility-first) | 118 | 0 | 0 | n/a | n/a |

All three variants are at 0 scored sends, below the 20 threshold, so email assignment stays in **exploration**: each prospect is assigned deterministically and evenly via `idx = (sum of ord(c) for c in prospect_id) % 3`.

## Two blockers, not one

**Blocker 1 (standing, ~15 weeks): disposition backfill.** 532 rows are `sent`, zero have a `response_status`. Nothing is rankable until this is filled.

**Blocker 2 (found 2026-07-28, still true): the challenger arms have never been sent.** `email-short-question` and `email-proof-led` now carry 233 drafted rows between them and not one has ever reached `status = sent`. Every sent email to date used the control. A complete `response_status` backfill would therefore score only `hyper-personalized-email` and still produce no structural A/B read.

The ask to Ryan is two-part:
1. Disposition the 532 sent rows.
2. Actually send some `email-short-question` and `email-proof-led` drafts so both challenger arms carry data.

## This run's email assignments (12 emails)

| Variant | Count | Prospects |
|---|---|---|
| hyper-personalized-email | 6 | saasjet, schoolcues, shakebugs, skrapp, smartjobboard, spotlightr |
| email-proof-led | 4 | skyprep, smtp2go, sorryapp, spinify |
| email-short-question | 2 | rotessa, shoppad |

The split is deterministic per `prospect_id`, not randomized, so the same prospect always lands on the same variant and outcomes stay attributable across re-drafts. 6 of the 12 emails this run land on a challenger arm, which is the side starved of sends.

## LinkedIn template ranking

Not computable (0 scored sends). Falling back to the default observation-first connect template for all LinkedIn channels regardless of (category, ai_posture). 3 LinkedIn connect drafts this run, all `linkedin-connect-observation-first`, all to truly-never-touched fit-3 prospects whose `contact_email` is blank.

## Ranking table

Empty. No scored sends to rank. No template bias applied this run.

## Reported inconsistency (re-flag, 10th consecutive run)

The `## LinkedIn Connection Request` section of `agents/templates/outreach.md` still hard-rules "always name Future Ready Studio" and "always include the AI-readiness assessments clause". That contradicts the 2026-06-23 human correction (observation-first, mirror first, no FRS naming in cold connects), which every run since 2026-06-24 has followed, including the 3 connects drafted today. Needs reconciliation in the template file.
