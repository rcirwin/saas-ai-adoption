# Prospect Research Run — 2026-05-28 (batch 1 of 2 parallel)

## Counts
- **Researched (fit 3+):** 21
- **Not-a-fit (fit 1–2):** 9
- **Cache hits applied:** 2 (salesflare, skylead — fresh 2026-05-15 cache, applied directly)
- **Re-researched (needs-re-research flag):** 6 (bugherd, bugfender, titlecapture, fitdegree, skusuite, govpilot)
- **New research:** 22
- **Errors / unable to score:** 0

## Distribution
- 1: 2 (cognito-forms, frase — both acquisition disqualifiers)
- 2: 7 (calconic, featurebase, featureos, saas-mantra, saleshandy, slab, vetblue)
- 3: 8 (affilimate, book-like-a-boss, convertcalculator, heepsy, mailbluster, skylead, smartrmail, streak)
- 4: 13 (bugfender, bugherd, fitdegree, getporter, govpilot, luckyorange, repairdesk, salesflare, skusuite, sortly, titlecapture, tito-tickets, userguiding)
- 5: 0

**Average fit score: 3.07**

## Top 5 fit-4 (best engagement candidates)
1. **sortly** — Inventory mgmt SaaS, $3.1M ARR 2024 (Latka), bootstrapped, Dhanush Balachandran founder/CEO active, AI-empty vs agentic commerce ops emerging. Both FRS angles fit. Angle: workflow-first AI for SMB inventory ops.
2. **getporter** — Tattoo studio all-in-one SaaS, $2.7M ARR 2024 (Latka), 26 emp Venice CA, Zack Neff + Mathew Lefkofsky founders, AI-empty in workflow-heavy vertical. Angle: workflow-first AI for tattoo-studio ops (AI consent gen, AI design briefs, no-show prediction).
3. **userguiding** — Onboarding/adoption platform, $3.3M ARR 2024 (Latka), bootstrapped, Osman Koc highly public. AI Assistant bolt-on but Pendo/Userpilot push AI copilots. Angle: workflow-first AI onboarding + agent-readiness.
4. **govpilot** — GovTech municipal OS, ~$3.5M ARR sheet est, 45 emp, Michael Bonner CEO reachable, 125+ municipal-process modules, exploring AI (Vertex). Angle: workflow-first AI for civic services.
5. **tito-tickets** — Bootstrapped Irish event ticketing ~$3M ARR sheet, AI-empty vs AI-native Luma, Paul Campbell highly visible podcast guest (Code-with-Jason, IndieRails). Angle: workflow-first AI for event organizers.

## Notes on disqualifications

### Acquired (fit 1)
- **cognito-forms** — Acquired by Inverness Graham PE on May 12, 2025 (holding-co disqualifier).
- **frase** — Acquired by CopySmith Oct 2022 + now AI-native (80+ skill agent, agentic SEO/GEO).

### Above ICP / category-compressed (fit 2)
- **saleshandy** — Founder LinkedIn '$5M ARR' claim + 138 emp = above ICP ceiling; AI strategic.
- **slab** — Knowledge-base wiki AI-empty vs Notion AI dominance (most AI-compressed B2B SaaS category).
- **vetblue** — $6M 2026 revenue just over ICP + no public founder/CEO identifiable.

### Sub-ICP / wrong model (fit 2)
- **featurebase** — Latka 2024 $54.5K revenue well below ICP floor (still strong growth — revisit 12-18 months).
- **featureos** — Latka 2021 $63K + parent-co Skcript dilutes founder ownership.
- **saas-mantra** — LTD/lifetime-deal marketplace ($2.8M ARR) — meta-commerce model, low workflow complexity, wrong ICP.
- **calconic** — No Latka coverage = sub-ICP signal; calc-builder being absorbed by AI form platforms.

## Strategic-AI / partial closure (fit 3)
- **smartrmail** — AI deeply shipped (newsletter gen, setup, recs); Klaviyo pace-setter; ARR uncertain.
- **streak** — ARR discrepancy ($3.7M Latka vs founder 8-figure claim); AI strategic; agent-readiness gap.
- **affilimate** — Amplify AI shipped (strategic-bolt-on); no Latka coverage = sub-ICP revenue risk.

## Patterns observed (memory candidates)

1. **Cache hits from 2026-05-15 batch still applied cleanly** — 2 prospects (salesflare, skylead) had fresh sub-90-day cache and the upsert/update flow worked without re-research. Per protocol, that's the staleness-window saving.
2. **`needs-re-research` status flag triggers re-research even when cache is fresh** — 6 prospects had fresh cache (2026-05-15 to 2026-05-19) and were marked `needs-re-research`. Re-researched all 6 cleanly; no significant changes in scoring (all held at fit 4).
3. **PE-acquired form/calc tools = automatic disqualifier** — Cognito Forms acquired by Inverness Graham PE May 2025. Add Inverness Graham to the PE-acquirer list alongside Cordance/SureSwift/Constellation. Always check Crunchbase for acquisition on form/builder tools >5yrs old.
4. **"M&A offer raised" on Latka is a yellow flag, not red** — ConvertCalculator raised an M&A offer April 2025 (Latka noted) — that's *receiving* an offer, not closing. Score 3 with caveat rather than 1 disqualifier. If a follow-up "acquired by" appears, downgrade.
5. **Knowledge-base wiki category is the most AI-compressed B2B SaaS niche** — Slab is the textbook case: VC-funded, customer-logo wall (Asana/Ashby/Fivetran), AI-empty in a category where Notion AI defines the experience. Add knowledge-base wiki as a near-automatic fit 2 unless the prospect has a clear differentiated wedge.
6. **LTD/marketplace business model = wrong ICP regardless of ARR** — SaaS Mantra has $2.8M ARR (in band) but the marketplace business model has low workflow complexity and serves price-sensitive indie hackers. Memory pattern (AppSumo/LTD = sub-ICP customer base) extends to LTD-marketplace operators themselves: even if THEY are $2-3M ARR, the workflow surface is wrong for FRS.
7. **No founder/CEO identifiable = severe scoring penalty** — VetBlue has no public founder identity, despite a 17-year operating history. Combined with above-ICP revenue, this disqualifies. Pattern: when no founder name surfaces across Crunchbase + LinkedIn + website + Latka, score down by at least 1 regardless of other signals.
8. **"AI-empty in fully AI-saturated category" is the consistent fit-4 signal** — Lucky Orange (vs Hotjar AI/Clarity), MailBluster (vs Mailchimp/Klaviyo AI), Book Like A Boss (vs Calendly Copilot), Sortly (vs Linnworks AI / agentic commerce ops), Tito (vs Luma) all follow the same pattern. When prospect is in ICP + zero AI + AI-native peer exists = fit 3-4. The presence of a public founder pushes 3→4.

## Sheet writes
- 30 cache upserts (8 updates to existing rows, 22 new appends)
- 30 prospects updates (2 had duplicate rows — touched both)
- Pacing: ~3s between writes, 30s pauses every 5 writes. No rate-limit errors.

## Schema note
- `research_cache` tab has 12 columns: `prospect_id, researched_at, sources_checked, product_summary, workflow_complexity, ai_features_observed, agent_readiness, competitive_landscape, pain_signals, personalization_hooks, fit_assessment, recommended_angle`.
- `fit_score` is NOT a cache column. On upsert into a NEW row, passing `fit_score=N` raises `ValueError: 'fit_score' is not in list`. On UPDATE of an existing row it's silently dropped.
- All prior memory references to `fit_score` in cache upserts only worked because the rows already existed.

## Duplicates flagged for sourcer
The following prospect_ids have duplicate rows in the prospects tab (parallel sourcers appending):
- **salesflare**: 2 rows (one researched 2026-05-22, one identified 2026-05-28)
- **skylead**: 2 rows

Updates applied to all matching rows. Sourcer should de-dupe.

## Contact-data gaps
Of 30 prospects, contact_name was populated for 21 (after my backfills). Contact_email remained blank for nearly all — sourcer must backfill emails for the 21 researched-fit prospects before outreach writer can use them. LinkedIn URLs not backfilled (would need per-prospect URL lookup).
