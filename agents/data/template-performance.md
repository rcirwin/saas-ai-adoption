# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-06-30 (frs-outreach-writer run).

**Policy mode:** EXPLORATION

## Scored-send accounting

A scored send = `outreach_log` row where `status = sent` AND `response_status` is non-blank.

- Total log rows: 1959
- Sent rows: 492
- **Scored sends: 0** (every `response_status` is blank)

Because there are zero scored sends, no template ranking is possible. The email A/B set stays in EXPLORATION mode (even-split assignment), and the LinkedIn channels fall back to the default template. This is the standing blocker: until the human backfills `response_status` on the sent rows, EXPLOITATION cannot begin.

## Email A/B variants (active set)

`MIN_SCORED_PER_VARIANT = 20`. EXPLORATION continues while any variant is under threshold.

| Variant | Scored sends | Status |
|---|---|---|
| hyper-personalized-email (control) | 0 | under threshold |
| email-short-question | 0 | under threshold |
| email-proof-led | 0 | under threshold |

Assignment during EXPLORATION: `idx = (sum of ord(c) for c in prospect_id) % 3` -> `active_variants[idx]`. Deterministic and reproducible per prospect; splits each batch roughly evenly so future outcomes are attributable per variant.

This run's split (14 emails): 9 proof-led, 4 short-question, 1 hyper-personalized.

## Ranking table

Empty. No scored sends to group by (template_used, category, ai_posture). reply_rate and call_rate are undefined for every cell.

## LinkedIn channels

Highest call_rate template per (category, ai_posture) is undefined (no scored sends), so LinkedIn channels use the default template from `outreach.md` (`linkedin-connect-default`).

## What unblocks ranking

The human dispositioning `response_status` (accepted / replied / no-response / declined) on any meaningful slice of the 492 sent rows. Once each active email variant reaches 20 scored sends, the policy flips to EXPLOITATION and picks the highest call_rate variant per (category, ai_posture).
