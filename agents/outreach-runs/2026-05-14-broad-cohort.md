# Outreach Run: 2026-05-14 — Broad Cohort (Fit-≤2)

**Agent:** frs-outreach-writer
**Run date:** 2026-05-14
**Scope:** All 33 fit-≤2 prospects on the Sheet (18 fit-2 + 15 fit-1), reframed for peer/advisory/learning angles instead of standard FRS services pitch.
**Reason:** User directive — "AI-driven product strategy applies to all leads with reframed angle; draft outreach for everyone regardless of fit."

> This summary was reconstructed after the parent agent crashed with API 529 Overloaded near the end of its run. All 33 drafts and all 66 Sheet writes (33 outreach_log + 33 prospects updates) completed before the crash; only the run-summary file was lost and re-written here.

---

## Counts by disposition

| Disposition | Count |
|---|---|
| Drafted (linkedin-connect, broad framing) | **33** |
| Drafted with `CONTACT_BLOCKER: linkedin_url_missing` | 21 |
| Skipped | 0 |

## Template mix

| Template | Count |
|---|---|
| `linkedin-connect-broad-peer` | 29 |
| `linkedin-connect-broad-learning` | 4 |

## Channel tagging in `outreach_log`

All 33 entries logged with `channel=linkedin-connect-broad` so future template-performance analysis can A/B against today's morning v1 batch (standard `linkedin-connect`) and the dossier-informed batch (`linkedin-{connect,dm}-dossier`).

---

## Cohort breakdown

### Fit-2 (18 prospects — peer / advisory angles for AI-positioned founders)

activepieces, bannerbear, canny, customerly, diversion, fathom-analytics, fusebase, geekbot, heffl, liscio, loops, notch-so, papermark, reflag, senja, tally, thrivedesk, whalesync

Framing rationale: These are SaaS founders who have already shipped or are publicly positioning around AI. Standard FRS services pitch ("where AI fits in your workflow") would be tone-deaf. Peer / partnership / advisory angles open a relationship even when assessment services don't apply.

### Fit-1 (15 prospects — light learning angle for AI-native or past-ICP companies)

charla, crisp, flowlu, freshflows, holistics, honeybadger, mailersend, meruscase, ninjapipe, openstatus, plgos, questdb, robomotion, sociamonials, stacker

Framing rationale: AI-native or scale-past-ICP. Drafts skew to `linkedin-connect-broad-learning` template — "I work with bootstrapped SaaS at $1–5M ARR, would love to learn from your journey" — rather than a sales angle. Authentic relationship-building, not a forced services pitch.

---

## CONTACT_BLOCKER notes — 21 prospects need LinkedIn URL sourcing

The drafts carry a `CONTACT_BLOCKER: linkedin_url_missing` line in frontmatter. 6 of the 21 had the URL sitting in `prospects.notes` and were backfilled into `contact_linkedin` post-hoc:

| ID | Name | URL (backfilled) |
|---|---|---|
| diversion | Sasha Medvedovsky | `linkedin.com/in/sasha-medvedovsky-10b2381` |
| fusebase | Paul Sher | `linkedin.com/in/paul--sher` |
| heffl | Hadi Azeez | `linkedin.com/in/hadi-azeez-321322197` |
| holistics | Huy Nguyen | `linkedin.com/in/nvquanghuy` |
| openstatus | Thibault Le Ouay Ducasse | `linkedin.com/in/thibault-le-ouay-ducasse` |
| robomotion | Osman Mollahamut | `tr.linkedin.com/in/osman-mollahamut-673b7a144` |

The remaining 15 still need sourcing (decision-maker name is on the row, but no LinkedIn URL has been found yet — names in the draft frontmatter):

activepieces (Ashraf Samhouri), charla (no name), customerly (Luca Micheli), flowlu (Maxim Kamyshev), freshflows (Bhanu Prakash Valluri), honeybadger (Ben Curtis), loops (Chris Frantz), mailersend (Ignas Rubezius — GM-specific TBD), meruscase (Johnny Fuery), ninjapipe (Dinuka Jay), notch-so (Viktor Kessler), plgos (Shubham Nigam), sociamonials (Craig Sherman), thrivedesk (Parvez Akther), whalesync (Matthew Busel).

---

## Sheet writes

- `outreach_log` appends: **33/33** with `channel=linkedin-connect-broad` (29 peer + 4 learning)
- `prospects` updates (`last_outreach_date=2026-05-14`, `last_outreach_channel`, `follow_up_due=2026-05-21`): **33/33**
- LinkedIn URL backfills: **6** (above table)

---

## Action for human (Ryan)

1. Review the 33 broad-framing drafts at `agents/outreach-drafts/2026-05-14-<id>-linkedin-connect-v2.md`.
2. For the 15 still-blocked prospects, source LinkedIn URLs before sending (names are in each draft's frontmatter and on the Sheet `prospects.contact_name`).
3. Note the cohort framing is intentionally non-services. Don't be surprised if response rates here look different from the fit-≥4 dossier-informed drafts — these are relationship plays, not pipeline plays.

---

## Next follow-up window

- All 33 (channel = linkedin-connect-broad): `follow_up_due = 2026-05-21`
