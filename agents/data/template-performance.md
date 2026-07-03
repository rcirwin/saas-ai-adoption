# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-07-03 (frs-outreach-writer run).

## Policy mode: EXPLORATION

Email A/B assignment is deterministic even-split (`idx = sum(ord(c) for c in prospect_id) % 3`) until every active variant clears `MIN_SCORED_PER_VARIANT = 20` scored sends.

A **scored send** = `status = sent` AND non-blank `response_status`. Drafts, skips, bounces, and unsent rows never count.

- Scored sends: **0** of 512 `sent` rows (2056 total log rows after this run).
- Every `response_status` is blank. Zero attributable signal.
- STANDING BLOCKER: template ranking and the EXPLORATION to EXPLOITATION switch stay blocked until Ryan dispositions sent rows with `response_status`.

## Active email variants (A/B set)

| Variant | Scored sends | Reply rate | Call rate |
|---|---|---|---|
| hyper-personalized-email (control) | 0 | n/a | n/a |
| email-short-question | 0 | n/a | n/a |
| email-proof-led | 0 | n/a | n/a |

## This run's email variant split (13 emails, deterministic even-split)

- email-short-question (8): mailosaur, reach-reporting, moonclerk, learn-it-live, junip, signaturely, salonist, timekeeper-uk
- hyper-personalized-email (3): sharetribe, workamajig, uxtweak
- email-proof-led (2): mergify, vivahr

## LinkedIn channels

Highest-call_rate template per (category, ai_posture) is unavailable (0 scored sends). Falls back to the default connect template from `outreach.md`, using the observation-first ordering (per the 2026-06-23 human correction: cold connect leads with the mirror observation, not FRS identity).

## Ranking table

No ranking possible. 0 scored sends across all (template_used, category, ai_posture) cells.
