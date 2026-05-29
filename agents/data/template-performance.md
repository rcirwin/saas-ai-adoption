# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

## Active email variants (A/B set)

| Variant ID | Lever tested | Structure | Length |
|---|---|---|---|
| `hyper-personalized-email` | control (incumbent) | mirror hook + tension bridge + 20-min call ask | 130 to 190 words |
| `email-short-question` | brevity + curiosity | mirror observation + one genuine question, no pitch, no ask | under 90 words |
| `email-proof-led` | credibility first | real proof or insight first, then a soft ask | 110 to 170 words |

Variant bodies live in `agents/templates/outreach.md`.

## Current policy

- **Mode: EXPLORATION (even split).** Reason: zero scored sends (every `response_status` in `outreach_log` is still blank across 863 log rows).
- Split rule: `idx = (sum of ord(c) for c in prospect_id) % 3`, deterministic and even.
- Switches to **EXPLOITATION** (rank-and-pick by call rate, then reply rate) once every variant has at least 20 scored sends.

## Ranking (scored sends only)

A "scored send" = an actually-sent email (`status = sent`) with a non-blank `response_status`. Drafts, skips, bounces, and unsent rows never count.

| Variant | Scored sends | Reply rate | Call rate |
|---|---|---|---|
| hyper-personalized-email | 0 | n/a | n/a |
| email-short-question | 0 | n/a | n/a |
| email-proof-led | 0 | n/a | n/a |

## Variant assignment this run (2026-05-29)

No email drafts this run. All 15 drafts were `linkedin-connect` (none of the 15 top-fit never-touched prospects had a `contact_email`), so the email A/B set was not exercised. The even-split assignment function is unchanged and remains ready for the next email-bearing run.

## LinkedIn template ranking

No scored sends, so ranking is null. LinkedIn channels use `linkedin-connect-default` from `outreach.md` for all (category, ai_posture) cells. All 15 drafts this run used `linkedin-connect-default`.

## Dependency: where outcome data comes from

Rankings stay empty until `response_status` / `led_to_call` get populated for sent emails. The campaign sends via **Outlook** (`ryan@futurereadystudio.com`); replies land there, **not** in the connected Gmail (`rcirwin11@gmail.com`, which is personal mail). Until an Outlook reply source is wired up, or outcomes are entered manually, the writer stays in EXPLORATION mode and splits evenly.

That is the correct behavior for now: the even split spreads sends across all three variants so that the moment outcome data exists, the ranking becomes computable.

## Run-level state, 2026-05-29

- `outreach_log` rows total pre-run: 863
- Rows with non-blank `response_status` pre-run: 0
- Sent rows pre-run: 176 (none dispositioned with a `response_status`)
- All three email variants remain at 0 scored sends. EXPLORATION mode persists.
- This run added 15 `linkedin-connect` drafts (first-touch on top-15-by-fit never-touched prospects). No `email` drafts this run.

_Last updated by writer: 2026-05-29._
