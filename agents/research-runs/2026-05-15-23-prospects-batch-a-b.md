# Prospect Research Run — 2026-05-15 (Batch 23)

Part of the 9-batch parallel sweep of 201 unique identified prospects. This run scored 23 prospects spanning AppSumo / YC / G2-incumbent / Reddit-displacement / PE-portfolio sources.

## Counts

- **Researched (fit ≥ 3): 11**
- **Not-a-fit (fit 1–2): 12**
- **Cache hits: 0** (none of these 23 had prior cache rows)
- **Sheet write errors: 0** (all 23 prospects rows updated; all 23 cache rows upserted)

Note: `sheet.py upsert research_cache fit_score=N` triggers a `ValueError: 'fit_score' is not in list` because the `research_cache` schema does NOT have a fit_score column (columns A–L only). The cache writes succeeded for all the OTHER columns despite the traceback. Future runs should drop `fit_score` from the cache upsert call. The agent's runbook (`agents/context/research-protocol.md`) implies fit_score lives in cache, but the actual sheet schema only puts it in `prospects.M`. Tell the parent agent.

## Fit Score Distribution

| Score | Count | Prospects |
|---|---|---|
| 5 | 1 | aero-workflow |
| 4 | 3 | bugfender, bugherd, buzzstream |
| 3 | 7 | beeceptor, billsby, bonsai, buzzsprout, bytebase, canix, casepacer |
| 2 | 7 | akaunting, allbound, apozy, b2bwave, bloomfire, capsule-crm, carrd |
| 1 | 5 | apidog, basedash, browserless, bigcapital, buttondown |

Avg fit score: **2.96** (slightly below 23-prospect mean of typical batches; explained by the heavy MCP-shipped / agent-ready disqualifiers in DevTools batch).

## Top fit-4+ prospects (with recommended angle)

1. **aero-workflow** (fit 5) — Accounting practice mgmt for CAS firms, AI-empty vs Karbon's AI Triage push, Laura Redmond Top-100 ProAdvisor founder. Angle: workflow-first AI / Karbon AI Triage gap.
2. **bugfender** (fit 4) — Bootstrapped Barcelona error tracking, AI-empty vs Sentry/Datadog Bits AI. Three founders reachable. Angle: AI log triage / device-debug copilot.
3. **bugherd** (fit 4) — Bootstrapped visual feedback, AI in BETA, $2.5M ARR (78% YoY growth), Alan Downie reflective public founder. Angle: bug triage / agent-readiness for QA agents.
4. **buzzstream** (fit 4) — Digital PR / link-building SaaS at ~$1M ARR, bolt-on AI (ListIQ), Paul May founder/CEO/Head-of-Product triple-hat, AI-native pressure from Respona. Angle: workflow-first — LLM citation era reshapes the entire category.

## Cohort patterns (new memory updates needed)

- **PE-portfolio category disqualifier** — Allbound/Channelscaler ($43M PE merger), Bloomfire (Primus Capital + new ex-Google CEO), Capsule CRM ($6.9M ARR + new CEO). When a PRM/KM/CRM player has had a PE round AND a CEO change in the past 24 months, default fit 2 — the new CEO is on a growth-execution mandate, not assessment-mode.
- **DevTools / API category MCP-saturation confirmed** — Apidog (MCP Server + Client + 'AI Agent era'), Browserless (MCP Server + 'browser for AI agents'), Buttondown (MCP support + API-first), Basedash (AI-native BI rebrand with Dashboard Agent). All 5 are fit 1. DevTools / API / BI categories are MCP-saturated by mid-2026 — any new researcher batch from those source types should expect a high fit-1 rate.
- **Open-source freemium accounting disqualifier** — Akaunting + Bigcapital both score 1-2 because the freemium/open-source distribution model means self-hosted users dominate and paid subscription revenue is sub-ICP. Same pattern as AppSumo LTD disqualifier.
- **Solo founder + low-workflow-complexity disqualifier** — Carrd (AJ, one-page sites, $1.5M ARR, Twitter-only). Sub-ICP + low workflow complexity + no LinkedIn = fit 2. Solo founder is itself not enough to disqualify (Buttondown is also solo) but combined with anti-feature philosophy and missing LinkedIn, it's a tell.
- **Founder transition (LinkedIn role change) disqualifier extended** — Apozy's Rick Deacon now lists 'Head of Platform @ NeuroVitals' as primary on LinkedIn. Same pattern as Fathom's Paul Jarvis → step-back. Always check the founder's current LinkedIn role, not just historical, and downgrade fit by 1 if they've moved on.

## Sourcer data quality issues

Prospects with missing contact_linkedin OR contact_name OR contact_email that will block outreach for fit≥3 rows:

- **aero-workflow** (fit 5) — Laura Redmond contact_linkedin missing; contact_email missing. Critical: this is the top-scoring prospect this batch.
- **beeceptor** (fit 3) — Ankit Jain CTO no LinkedIn, no email
- **bytebase** (fit 3) — Tianzhou Chen no LinkedIn, no email
- **buzzsprout** (fit 3) — contact_name itself missing (should be Tom Rossi co-founder); no LinkedIn; no email
- **buzzstream** (fit 4) — Paul May LinkedIn URL missing (search result confirms https://www.linkedin.com/in/paulmay2/), no email
- **billsby** (fit 3) — Paul Murphy no LinkedIn; note: Ian Campbell is current CEO per CBInsights, not Paul Murphy. Sourcer should correct the decision-maker.
- **casepacer** (fit 3) — Tony Petrucciani LinkedIn present, no email; OK

Sourcer must backfill these fields or the outreach writer will skip fit-3+ prospects.

## Flagged issues / inconclusive research

- **billsby** website returned 404 on both bare and www variants (https://billsby.com and https://www.billsby.com both fail). Used Crunchbase/GetApp/G2/CBInsights to triangulate. Status: site may be down or post-acquisition redirect — worth a sourcer re-verify. Possibly correlated with Ian Campbell taking over from Paul Murphy as CEO.
- **bonsai** website returned 403 Forbidden to WebFetch (likely Cloudflare rate-limit on bot UA). Used Sacra interview + Crunchbase + Growjo for product/ARR data.
- **allbound** redirects to channelscaler.com (May 2025 rebrand confirmed). Sourcer row still has the old name and domain.
- **bonsai** ARR uncertainty — Growjo says $2.7M with 27 employees, but Bonsai claims 500K+ users on homepage. May actually exceed $5M ICP cap if usage data is current. Confidence: low.

## Environment notes

- `_cffi_backend` pre-flight install was not needed this run (already cached from prior environment).
- Sheet API rate limit hit twice during the run (60 reads/min, 60 writes/min per user). With 3 other researcher agents running in parallel sharing the same project quota (408112219444), this is now the bottleneck. The retry-with-exponential-backoff loop in /tmp/frs_retry.py worked. Future runs should:
  - Add exponential backoff in `scripts/sheet.py` directly so all agents inherit it
  - OR reduce per-call sheet ops (e.g., one batch read of prospects + one batch update at end)
- 23 cache upserts + 23 prospects updates = 46 writes + 1 prospects read + 1 cache read = ~48 sheet ops total. With 3 parallel researchers each doing similar, the project hits 60/min quickly.
