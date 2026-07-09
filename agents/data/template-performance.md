# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-07-09 (frs-outreach-writer run).

## Policy mode: EXPLORATION

Email A/B even-split is still active. Exploitation unlocks only once EVERY active variant has >= 20 scored sends.

Scored send = a row where `status = sent` AND `response_status` is non-blank. Drafts, skips, bounces and unsent rows never count.

- Total `outreach_log` rows: 2115
- Sent rows: 530
- **Scored sends: 0** (every `response_status` is still blank)

With zero scored sends, template ranking is impossible.

- **Email channel:** even-split exploration across the three active variants, assigned deterministically per prospect via `idx = (sum of ord(c) for c in prospect_id) % 3`.
- **LinkedIn channels:** default template from `outreach.md` (observation-first connect note per the 2026-06-23 correction: mirror observation first, identity-by-focus, no FRS naming, close on "Would value comparing notes.").

## Active email variants (A/B set) — scored-send counts

| Variant | Role | Scored sends | Needs (MIN_SCORED_PER_VARIANT=20) |
|---|---|---|---|
| `hyper-personalized-email` | control | 0 | 20 more |
| `email-short-question` | brevity | 0 | 20 more |
| `email-proof-led` | credibility-first | 0 | 20 more |

## Ranking table

Not computable. 0 scored sends across all (template, category, ai_posture) cells.

## Standing blocker

0 of 530 sent rows have `response_status` filled. Until Ryan dispositions sent rows (accepted / replied / no-response), template performance ranking and the EXPLORATION -> EXPLOITATION transition remain blocked. Standing blocker for ~10+ weeks.

## This run (2026-07-09)

15 `linkedin-connect` first-touch drafts (truly-never-touched cohort, all connect-only: LinkedIn present, no `contact_email`). No emails drafted this run, so no A/B assignment was exercised.
