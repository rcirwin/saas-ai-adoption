# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-06-02 (frs-outreach-writer run).

## Active email variants (A/B set)

- `hyper-personalized-email` (control)
- `email-short-question`
- `email-proof-led`

## Policy Mode: EXPLORATION

A scored send = an `outreach_log` row where `status = sent` AND `response_status` is non-blank.

- Total `outreach_log` rows: 1320
- `sent` rows: 301
- **Scored sends: 0** (no `response_status` dispositioned yet)

Because zero variants have reached `MIN_SCORED_PER_VARIANT = 20` scored sends, the
email channel stays in **exploration**: each prospect is assigned a variant
deterministically and evenly via `idx = (sum of ord(c) for c in prospect_id) % 3`.

LinkedIn channels fall back to the default template per `outreach.md` (no
performance signal exists to rank against).

## Active Email Variants. Sent + Scored Send Counts

| Variant | Sent | Scored sends | Status |
|---|---|---|---|
| `hyper-personalized-email` (control) | 187 | 0 | below MIN_SCORED (20) |
| `email-short-question` | 0 | 0 | below MIN_SCORED (20) |
| `email-proof-led` | 0 | 0 | below MIN_SCORED (20) |

Note: all 187 historical email sends used the control variant (sent before the
even-split A/B policy took hold). The two challenger variants have not been sent
yet, so accumulating scored sends on them is the priority during exploration.

## Ranking Table

No scored sends exist, so reply_rate and call_rate are undefined for every
(template_used, category, ai_posture) cell. Ranking is not yet possible.
Falling back to even-split exploration (email) and default templates (LinkedIn).

## Note

301 sent rows are accumulating but none carry a `response_status`. When Ryan
backfills dispositions on the sent cohort, template-performance ranking becomes
usable for the first time and the email channel can flip to exploitation.
