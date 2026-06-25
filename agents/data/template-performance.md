# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-06-25 (frs-outreach-writer run).

## Policy Mode: EXPLORATION

A scored send = `status = sent` AND non-blank `response_status`. Ranking counts scored sends only.

**Scored sends across all variants: 0 of 448 sent rows.** Every `response_status` is still blank, so there is zero attributable signal. The standing blocker persists: until the human dispositions sent rows, template ranking and the move to EXPLOITATION stay blocked.

### Email A/B variant scored-send counts (MIN_SCORED_PER_VARIANT = 20)

| Variant | Scored sends | Status |
|---|---|---|
| hyper-personalized-email (control) | 0 | below threshold |
| email-short-question | 0 | below threshold |
| email-proof-led | 0 | below threshold |

Because at least one active variant is below 20 scored sends, the writer stays in **EXPLORATION**: each emailed prospect is assigned a variant deterministically and evenly via `idx = (sum of ord(c) for c in prospect_id) % 3`, so future outcomes stay attributable per variant.

This run's email A/B split (9 emails, even by construction):
- hyper-personalized-email: nocrm, productable, ticketnology
- email-short-question: testimonial-to, schedulista, paywhirl
- email-proof-led: velocity-worldwide, saaslogic, quaderno

### LinkedIn channel selection

No scored sends, so LinkedIn channels fall back to the default template from `outreach.md` (`linkedin-connect-default`). All 6 connect drafts this run used it.

## Ranking table

| template_used | category | ai_posture | scored | reply_rate | call_rate |
|---|---|---|---|---|---|
| (none) | (all) | (all) | 0 | n/a | n/a |

No ranking is computable until sent rows are dispositioned with `response_status` and `led_to_call`.

## Action for the human

Backfill `response_status` (accepted / replied / no-response / bounced) and `led_to_call` on the 448 `status = sent` rows in `outreach_log`. That unblocks variant ranking and the move from EXPLORATION to EXPLOITATION.
