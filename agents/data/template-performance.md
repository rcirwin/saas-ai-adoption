# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-07-31 (frs-outreach-writer run).

- Total `outreach_log` rows: 2312 (pre-run)
- Rows with `status = sent`: 532
- **Scored sends** (status=sent AND response_status non-blank): **0**
- Policy mode: **EXPLORATION**

## Why EXPLORATION

A scored send requires `status = sent` AND a non-blank `response_status`. All 532 sent rows still have a blank `response_status`, so there are **zero scored sends**. Template ranking (reply_rate, call_rate) is not computable, and the EXPLORATION -> EXPLOITATION switch is blocked until Ryan backfills `response_status` on the sent cohort. Standing blocker since early May.

## Email A/B variant counts (MIN_SCORED_PER_VARIANT = 20)

| Variant | Role | Drafted rows | Sent rows | Scored sends | Reply rate | Call rate |
|---|---|---|---|---|---|---|
| hyper-personalized-email | control | 302 | 187 | 0 | n/a | n/a |
| email-short-question | test (brevity) | 106 | 0 | 0 | n/a | n/a |
| email-proof-led | test (credibility-first) | 104 | 0 | 0 | n/a | n/a |

All three variants are at 0 scored sends, below the 20 threshold, so email assignment stays in **exploration**: each prospect is assigned deterministically and evenly via `idx = (sum of ord(c) for c in prospect_id) % 3`.

## Two blockers, not one

**Blocker 1 (standing, ~14 weeks): disposition backfill.** 532 rows are `sent`, zero have a `response_status`. Nothing is rankable until this is filled.

**Blocker 2 (found 2026-07-28, still true): the challenger arms have never been sent.** `email-short-question` and `email-proof-led` have now been assigned to 210 drafts between them and not one has ever reached `status = sent`. Every sent email to date used the control. A complete `response_status` backfill would therefore score only `hyper-personalized-email` and still produce no structural A/B read.

The ask to Ryan is two-part:
1. Disposition the 532 sent rows.
2. Actually send some `email-short-question` and `email-proof-led` drafts so both challenger arms carry data.

## This run's email assignments (15 emails)

| Variant | Count | Prospects |
|---|---|---|
| email-short-question | 7 | magicbell, mailmonitor, mailreach, mailtrack, marvia, onedirectory, open-badge-factory |
| hyper-personalized-email | 4 | lyssna, magoosh, memtime, officely |
| email-proof-led | 4 | mailercloud, mango-practice, ohmylead, oneup |

The split is uneven because assignment is deterministic per `prospect_id`, not randomized. That is intentional: the same prospect always lands on the same variant, so outcomes stay attributable across re-drafts. Evenness emerges across runs, not inside one alphabetically clustered batch. This batch skewed toward the short-question arm, which is the arm most starved of sends, so it is a useful skew if Ryan sends them.

## LinkedIn template ranking

Not computable (0 scored sends). Falling back to the default observation-first connect template for all LinkedIn channels regardless of (category, ai_posture). 0 LinkedIn drafts this run: every eligible prospect in the queue had its LinkedIn channel already touched, so all 15 drafts are parallel-channel emails.

## Ranking table

Empty. No scored sends to rank. No template bias applied this run.

## Reported inconsistency (re-flag, 7th consecutive run)

The `## LinkedIn Connection Request` section of `agents/templates/outreach.md` still hard-rules "always name Future Ready Studio" and "always include the AI-readiness assessments clause". That contradicts the 2026-06-23 human correction (observation-first, mirror first, no FRS naming in cold connects), which every run since 2026-06-24 has followed. Needs reconciliation in the template file.
