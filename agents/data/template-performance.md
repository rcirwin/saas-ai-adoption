# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-06-24 (frs-outreach-writer run).

## Policy Mode: EXPLORATION

Scored sends = rows where `status = sent` AND `response_status` is non-blank.

**Scored sends: 0 of 448 sent rows.** Every `response_status` is still blank, so there are zero scored sends. Template ranking by reply/call rate is not yet possible.

Because no active email variant has reached `MIN_SCORED_PER_VARIANT = 20` scored sends (all sit at 0), the email channel stays in **exploration**: each prospect is assigned a variant deterministically and evenly via `idx = (sum of ord(c) for c in prospect_id) % 3`, which splits the batch roughly evenly and keeps assignment reproducible per prospect.

LinkedIn channels use `linkedin-connect-default` (the template from `outreach.md`, observation-first ordering per the 2026-06-23 voice update), since there is no call_rate signal to rank against.

## Active Email Variants (A/B set)

| Variant | Scored sends | Role |
|---|---|---|
| hyper-personalized-email (control) | 0 | full structure: mirror hook, tension bridge, 20-min call ask |
| email-short-question | 0 | under 90 words, one genuine question, no offer |
| email-proof-led | 0 | proof or category insight first, then soft low-commitment ask |

## This run's email assignment (2026-06-24)

12 parallel-channel emails: 5 hyper-personalized (dux-software, easy-subscriptions, fera, float-cash-flow, getform), 3 short-question (dmarc-advisor, easy-lms, eddy-hr), 4 proof-led (desktime, dreamclass, encuadrado, findthatlead).

## Ranking Table

Not computable. All variants have 0 scored sends. No (template, category, ai_posture) cell has any disposition data.

## Standing Blocker

Template ranking, exploitation-mode variant selection, and same-channel second-touch are all blocked until the human backfills `response_status` on the 448 sent rows in `outreach_log`. Until then every run stays in exploration, and second-touch relies on the parallel-channel mechanic (drafting an untouched channel family rather than re-touching a sent one).
