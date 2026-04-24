# frs-outreach-writer — Persistent Memory

## Heuristics Confirmed

- **Don't DM before connecting**: for LinkedIn cold outreach, always open with `linkedin-connect` template even when `fit_score >= 4`. The DM template activates only after connection is accepted. Applied on 2026-04-21 run — 7 high-fit prospects downgraded from linkedin-dm to linkedin-connect.
- **300-char limit is tight**: LinkedIn connection notes allow ~300 chars. Always verify with Python `len()` before saving — visible character count in markdown can under-count em-dashes and apostrophes. On 2026-04-21, 3 drafts needed re-tightening after first pass.
- **"Directionally" is a signature word**: Ryan's actual vocabulary. Works well as a softening lead-in before contrasting the prospect's choice against a category trend. Used in 5 of 8 drafts on 2026-04-21.
- **"No pitch, just curious" is the default closer**: respects cold-outreach etiquette and matches Ryan's understated voice better than a direct CTA in a connection request.
- **Check for same-day prior run before redoing work**: before doing anything, read `agents/outreach-runs/<today>.md` if it exists. If an earlier run covered the same queue state, don't regenerate — just verify nothing changed, and avoid overwriting a prior summary with an identical one. Observed 2026-04-24: a dry-run summary already existed; re-running produced identical state (queue unchanged, same 10 in-cadence + 6 contact-blocked).

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
- When `outreach_log` is empty, template performance analysis is null — fall back to the default template per channel. No bias.
- When `outreach_log` has only `drafted` rows (no `response_status` yet), template performance is still effectively null — fall back to defaults. Observed 2026-04-24: 10 drafted rows, zero response data, no template bias possible.

## Voice Reminders

- Banned: `leverage`, `synergy`, `game-changer`, `unlock`, `supercharge`, `revolutionize`, `cutting-edge`, `ecosystem` (unless literal), `delve`.
- Preferred hedges: `directionally`, `one of many signals`, `more so`, `hard to say without seeing it in action`.
- Em-dash-heavy rhythm works — matches Ryan's Slack voice.
