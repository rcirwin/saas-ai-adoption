# frs-outreach-writer — Persistent Memory

## Heuristics Confirmed

- **Don't DM before connecting**: for LinkedIn cold outreach, always open with `linkedin-connect` template even when `fit_score >= 4`. The DM template activates only after connection is accepted. Applied on 2026-04-21 run — 7 high-fit prospects downgraded from linkedin-dm to linkedin-connect.
- **300-char limit is tight**: LinkedIn connection notes allow ~300 chars. Always verify with Python `len()` before saving — visible character count in markdown can under-count em-dashes and apostrophes. On 2026-04-21, 3 drafts needed re-tightening after first pass.
- **"Directionally" is a signature word**: Ryan's actual vocabulary. Works well as a softening lead-in before contrasting the prospect's choice against a category trend. Used in 5 of 8 drafts on 2026-04-21.
- **"No pitch, just curious" is the default closer**: respects cold-outreach etiquette and matches Ryan's understated voice better than a direct CTA in a connection request.
- **Check for same-day prior run before redoing work**: before doing anything, read `agents/outreach-runs/<today>.md` if it exists. If an earlier run covered the same queue state, don't regenerate — just verify nothing changed, and avoid overwriting a prior summary with an identical one. Observed 2026-04-24: a dry-run summary already existed; re-running produced identical state (queue unchanged, same 10 in-cadence + 6 contact-blocked). Re-confirmed 2026-04-28: morning dry-run captured the disposition-data block; afternoon re-run found identical state, did not overwrite, did not regenerate. Re-confirmed 2026-04-29 (second pass same day): morning summary already documented the cadence-flip + disposition block; afternoon re-run verified outreach_log unchanged (10 drafted, 0 with response_status), preserved existing summary, no regeneration. Re-confirmed 2026-05-01 (second pass same day): existing summary already captured the seventh-consecutive-no-op disposition block; later re-run verified state identical (16 researched / 10 drafted / 0 dispositioned), preserved existing summary verbatim.
- **Disposition data is a hard prerequisite for second-touch**: `outreach_log` rows with `status: drafted` and blank `response_status` cannot be advanced. The agent has no way to distinguish "sent + pending" from "sent + accepted" from "never sent". On cadence-boundary day, this blocks every channel: linkedin-dm needs accept, new linkedin-connect would duplicate, email needs `contact_email`, referral needs a path. Until Ryan dispositions the log, every subsequent run on the same batch is a no-op. Surface this blocker early in the summary. Re-confirmed 2026-04-29: cadence window flipped on the 2026-04-21 batch (8 prospects past `follow_up_due`), every one is disposition-blocked. Sixth consecutive no-op run (counting both 2026-04-29 passes). 2026-05-01 morning: seventh consecutive no-op. 2026-05-01 second pass: eighth consecutive no-op. The 2026-04-21 batch is now 10 days past first touch and the 2026-04-23 batch is 8 days past — pure inertia from missing dispositions.
- **Cadence-flip day still produces a no-op without disposition data**: 2026-04-29 was the first day the 2026-04-21 connect batch became technically eligible for second-touch. Without `response_status` data, even fully-eligible prospects can't be advanced — the agent cannot pick a channel without knowing whether the connect was accepted. Treat the cadence flip date as a reminder to nudge Ryan for dispositions, not as a drafting trigger. Re-confirmed 2026-05-01: it's now 3+ days past the cadence flip on the larger batch; still no dispositions, still no actionable channel.
- **Environment fix — cffi missing on fresh shells**: `scripts/sheet.py` fails with `ModuleNotFoundError: No module named '_cffi_backend'` because `cryptography` (a transitive of `google-auth`) needs cffi. Run `pip install --quiet cffi` once per fresh environment before invoking sheet.py. Observed and fixed 2026-04-29. Re-applied 2026-05-01 (both passes) — fresh shell each time.
- **Beware of session-stop auto-commit hook during merge conflicts**: a session-stop hook auto-commits dirty working trees. If a cherry-pick or rebase leaves conflict markers in files, the hook will commit those markers. Always resolve conflicts and complete the rebase/cherry-pick before any natural pause. Observed 2026-04-29 second pass — auto-commit f0947c7 captured conflict markers; followed up with a fix commit.
- **No-op runs should still update memory and commit**: even when no drafts are written, append a note to MEMORY.md recording the no-op + reason (so the streak is visible) and commit so the streak is durable in git history. Don't touch the existing run summary file if state is identical.

## Angle → Posture Mapping

| `ai_posture` | Preferred angle |
|---|---|
| `none` | `ai-posture-none-gap` — contrast with a category peer that added AI, frame their no-AI stance as deliberate |
| `exploring` | `ai-posture-exploring-roadmap` — cite the specific AI feature they shipped, nod to next-layer questions |
| `bolt-on` | `ai-posture-bolt-on-gap` — name the feature, pivot to the deeper agent-era shift |
| `strategic` | `agent-ready-roadmap` — skip "you need AI", go straight to agent-readiness as the next gap. Pre-empts "we already have AI" objection. |
| `agent-ready` | skip — flag as peer/not-a-fit |

## Hook Sources That Work

- Podcast signatures (UI Breakfast for Jane Portman)
- Named founder arcs (Drip-to-SavvyCal, ContentStudio-to-Usermaven)
- Specific product launches / features (Usermaven 2.0, Nola AI, free plan launches)
- Revenue / bootstrap milestones (500K, 2M ARR)
- Contrarian positioning statements (Outseta "contrarian way", Plausible privacy-first)

## Anti-Patterns to Avoid

- Generic hooks like "your product looks interesting" — always cite a specific launch, post, or positioning statement from research.
- Reusing the same competitive-pressure comparison across multiple prospects in one run. Each hook should be unique.
- Soft sell language ("would love to chat", "let me know if interested") — use Ryan's direct-but-warm voice: "No pitch, just curious how you're thinking about it."
- Starting with "I" — start with "Hey <name>" and put the hook (specific observation) in line 2.

## Data-Quality Signals

- On 2026-04-21, 6 of 15 researched prospects had zero contact info. Pipe back to sourcer: re-run contact discovery on `paperbell`, `guideflow`, `docupilot`, `dubsado`, `kickserv`, `jobtread`.
- Same 6 remain contact-blocked as of 2026-04-24 — sourcer unblock still outstanding. Paperbell (Laura Roeder, ex-MeetEdgar) is the highest-value unblock given its fit_score 4 and strong founder hook.
- Same 6 still contact-blocked as of 2026-04-28 — third consecutive run flagging this. Sourcer dependency is now the longest-running open blocker.
- Same 6 still contact-blocked as of 2026-04-29 — fourth consecutive run flagging this. Paperbell still the highest-value unblock.
- Same 6 still contact-blocked as of 2026-04-29 (second pass) — fifth consecutive run flagging this. No movement.
- Same 6 still contact-blocked as of 2026-05-01 — sixth consecutive run flagging this. No movement; sourcer dependency is now ~10 days old.
- Same 6 still contact-blocked as of 2026-05-01 (second pass) — seventh consecutive run flagging this. Paperbell remains the highest-value unblock.
- When `outreach_log` is empty, template performance analysis is null — fall back to the default template per channel. No bias.
- When `outreach_log` has only `drafted` rows (no `response_status` yet), template performance is still effectively null — fall back to defaults. Observed 2026-04-24 (10 drafted rows) and 2026-04-28 (10 drafted rows, unchanged) and 2026-04-29 (10 drafted rows, unchanged) and 2026-04-29 second pass (10 drafted rows, unchanged) and 2026-05-01 morning (10 drafted, unchanged) and 2026-05-01 second pass (10 drafted, unchanged) — zero response data, no template bias possible.

## Voice Reminders

- Banned: `leverage`, `synergy`, `game-changer`, `unlock`, `supercharge`, `revolutionize`, `cutting-edge`, `ecosystem` (unless literal), `delve`.
- Preferred hedges: `directionally`, `one of many signals`, `more so`, `hard to say without seeing it in action`.
- Em-dash-heavy rhythm works — matches Ryan's Slack voice.
