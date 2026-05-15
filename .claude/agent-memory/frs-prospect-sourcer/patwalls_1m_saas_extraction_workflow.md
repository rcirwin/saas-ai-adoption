---
name: Pat Walls $1M SaaS carousel — successful manual-OCR workflow
description: When LinkedIn carousel images can't be OCR'd by tooling, the user (Ryan) has demonstrated Claude-in-Chrome can OCR them tile-by-tile and produce a structured input file. Document the handoff format.
type: reference
---

On 2026-05-15 the user solved the prior blocker (image-only LinkedIn posts not extractable) by using Claude in Chrome to:
1. Fetch the LinkedIn carousel image
2. Upscale it via DOM overlay
3. OCR each tile by hand with confidence scoring

The resulting structured handoff file lives at:
`agents/sourcing-runs/inputs/2026-05-15-patwalls-extracted-tiles.md`

**Format the user uses for these handoffs:**
- Markdown table per row of the carousel grid
- Columns: # | Niche | ARR | Headline (verbatim quoted) | Logo read (with confidence) | Guess
- Confidence summary at bottom: high / medium / needs-search counts
- Notes section calling out which tiles are out-of-band per ICP and should be skipped pre-research

**My job when handed this input:**
1. For high-confidence guesses, verify with a single web search on the verbatim headline.
2. For medium/low confidence, do one Google search on the verbatim headline.
3. If one search doesn't resolve → mark unidentified, skip. Do NOT pad.
4. Apply ICP filter ($500K-$5M ARR) BEFORE researching — out-of-band tiles get listed in the summary but never get a Sheet row.
5. Dedupe against existing `prospects` slugs (the input file may include companies we've already sourced).
6. Add `source=linkedin-patwalls-1m-saas` (or similar specific source tag) so we can track per-source quality later.

**Useful headline-to-company mapping** confirmed in the 2026-05-15 run (saves future search rounds):

| Verbatim headline | Company |
|---|---|
| "Modernize Your Lab with the #1 Rated LIMS" | QBench |
| "Drag-n-drop and HTML email template builder" | Stripo or Beefree |
| "The #1 Route Planner for Field Sales and Service" | Badger Maps |
| "World-Class Software, Services, and Support for Your Esports Venue" | ggCircuit |
| "Data anywhere. Protected everywhere." | HYCU |
| "Embedded Invoicing & Bill Pay for Vertical SaaS" | Forwardly |
| "AI-based Risk Detection and Automation for AML and Fraud" | Hawk:AI or Sardine |
| "Hire Our Vetted Elite Latin American Remote Developers" | TECLA (Gino Ferrand) |
| "Elevate Your Menus, Advance Your Restaurant" | MustHaveMenus (Jim Williams) |
| "One platform to manage and grow your tutoring business" | TutorCruncher (Malachy Guinness) |
| "Grow Your Title Company" | TitleCapture (Alex Samant) |
| "ISP Billing & Network Management System" | Sonar Software OR Powercode |
| "Financial projection templates and custom CPA support" | ProjectionHub (Adam Hoeksema) |

**Categories where the $1M-SaaS tile pattern recurred — usually too-large or acquired now:**
- gym management (PushPress $15M, Trainerize ABC-acquired)
- employee training (Trainual $32M)
- user onboarding (Userflow Beamer-acquired, Userlane/Chameleon $12M each)
- video/notes (Fathom too big)
- pets (Time To Pet + Gingr both DaySmart-acquired)
- QR codes (Uniqode $10M+ ARR)

**Categories that consistently surfaced ICP fits from Pat's selection:**
- Vertical SaaS for specialty professional services (restaurants, tutoring, title, lab)
- Bootstrapped finance/business templates (ProjectionHub)
- Long-tenure infrastructure tools where founders intentionally stayed independent (Powercode, Stripo)
- LATAM dev marketplaces (TECLA)
