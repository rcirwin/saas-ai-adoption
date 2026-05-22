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

- **Mode: EXPLORATION (even split).** Reason: zero scored sends (every `response_status` in `outreach_log` is blank).
- Split rule: `idx = (sum of ord(c) for c in prospect_id) % 3`, deterministic and even.
- Switches to **EXPLOITATION** (rank-and-pick by call rate, then reply rate) once every variant has at least 20 scored sends.

## Ranking (scored sends only)

A "scored send" = an actually-sent email (`status = sent`) with a non-blank `response_status`. Drafts, skips, bounces, and unsent rows never count. As of this run: 0 of 741 log rows have a non-blank `response_status`, and `led_to_call = TRUE` count is 0.

| Variant | Scored sends | Reply rate | Call rate |
|---|---|---|---|
| hyper-personalized-email | 0 | n/a | n/a |
| email-short-question | 0 | n/a | n/a |
| email-proof-led | 0 | n/a | n/a |

## LinkedIn channel selection (this run)

This run drafted `linkedin-dm` second-touch follow-ups only (no email). Because there are zero scored sends, the LinkedIn DM template falls back to the default DM body in `outreach.md`. Logged `template_used = linkedin-dm-broad` (second-touch, research_cache-personalized, follow-up to a sent `linkedin-connect`), consistent with the 2026-05-14 channel-tag convention so reply/call outcomes stay attributable per cohort. LinkedIn channels never enter the email A/B even-split; that split applies to the email channel only.

## Dependency: where outcome data comes from

Rankings stay empty until `response_status` / `led_to_call` get populated. The campaign sends email via **Outlook** (`ryan@futurereadystudio.com`); replies land there, **not** in the connected Gmail (`rcirwin11@gmail.com`, which is personal mail). LinkedIn connect/DM dispositions also need manual entry. Until an outcome source is wired up or outcomes are entered manually, the writer stays in EXPLORATION mode for email and falls back to defaults for LinkedIn.

That is the correct behavior for now: the even split spreads sends across all three email variants so the moment outcome data exists, the ranking becomes computable.

_Last updated: regenerated 2026-05-22 by outreach run (linkedin-dm second-touch batch). The writer overwrites this on its next run._
