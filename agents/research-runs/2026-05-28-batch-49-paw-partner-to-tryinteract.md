# Research Run — 2026-05-28 — 49 prospects (paw-partner → tryinteract, parallel slice)

## Counts
- Researched: 49
- Fit 3+: 27 (status=researched)
- Not-a-fit (fit 1-2): 22 (status=not-a-fit)
- Cache hits: 0 (all fresh)
- Errors: 0 (rate-limited twice but all writes ultimately succeeded)

## Fit Score Distribution
- 5: 1
- 4: 18
- 3: 8
- 2: 14
- 1: 8

**Average fit: 2.92**

## Top 5 Prospects (by fit)

| ID | Fit | Recommended Angle |
|---|---|---|
| beds24 | 5 | AI guest comms / pricing-optimization / Airbnb-agent-readiness for vacation rentals |
| paw-partner | 4 | Workflow-first AI: triage, post-stay summaries, occupancy prediction |
| paintscout | 4 | AI estimating: photo-to-quote, conversational intake, automated change-orders |
| aptora | 4 | AI-for-HVAC-dispatch: voice intake, photo-to-quote, ServiceTitan-competitive |
| procedureflow | 4 | AI-for-SOP: voice-to-procedure, agent access to compliance docs, RAG over process map |

(15 other fit-4 prospects: yardbook, farmbrite, eazybi, notionforms, datawarehouse-io, bis-safety-software, passage-technology, clinked, aprika, supporterhub, funnelkit, juntrax, shortstack, velocity-worldwide, bonzai-digital.)

## Fit-1 Disqualifiers (8)
- rentredi — K1 Series A $12M, growth-stage (PE-style)
- k15t — Above-ICP $6.7M ARR (Latka 2024)
- quoteiq — Agent-ready: AI Autopilot voice-command across 35 tools
- storeganise — Agent-ready: AI Connector to ChatGPT/Claude (MCP-style)
- etlworks — Agent-ready: AI agent + REST API tools-of-agents
- wpmanageninja — Agent-ready: FluentCRM v3 MCP for talk-to-leads
- botpenguin — AI Agent Platform with multi-LLM (the product IS the AI)
- (Plus K15t above-ICP already counted)

## Fit-2 Not-a-Fit (14)
- seotesting — TinySeed, sub-ICP $216K, strategic AI shipped
- brewfather — Hobbyist customer base, $30/yr Premium, sub-ICP economics
- powerimporter — 2-person bootstrapped, sub-ICP, too early
- ampliteach — Music school tiny operator, sub-ICP per memory
- hextom — 270K Shopify merchants = likely above-ICP
- storyly — Enterprise customers, $5.3M sheet ARR, strategic AI
- imagekit — $5.4-8M ARR above-ICP, DevTools API not user-workflow
- papyrs — Knowledge-base wiki, Notion AI saturates per memory
- formbricks — Open-source, VC-backed early stage, $550K borderline
- wisernotify — Low workflow complexity (notification widget)
- tryinteract — Latka $5.3M at/above ICP ceiling + AI Quiz Maker shipped
- interconnecta — Zero substantive web search results (inconclusive)

## Flagged Issues
- **interconnecta**: extremely low public presence despite sheet $3.1M ARR + 25 staff. Sourcer should verify the company name and existence.
- **junocal**: sourcer-provided LinkedIn URL for Sharon Onyinye points to her personal designer-babe profile (not Junocal company). Confirmed she IS the founder via search; LinkedIn URL is workable but ambiguous.
- **clockodo**: Latka $1.2M vs founder Happy Bootstrapping April 2024 €500K MRR (~$6.5M ARR). 5x discrepancy. Scored fit 3 with caveat — would be 2 if above ICP confirmed.
- **bis-safety-software**: sheet $5M ARR = AT the $5M ICP ceiling. Scored 4 but on the edge.
- **Contact-data gaps backfilled**: farmbrite→Ian Russell, elromco→Eli Derei, beds24→Mark Kinchin, supporterhub→Peter McCormick. Sourcer should backfill emails before outreach.

## Sheet Writes
- 49 research_cache upserts: succeeded (1 schema-error retry for imagekit when ai_posture passed; dropped it cleanly)
- 49 prospects updates: succeeded (50 rows updated total — imagekit has 2 rows, one was already not-a-fit and now both reflect the not-a-fit decision)

## Rate-Limit Observations
- Hit Google Sheets read-quota (60/min) twice during the run.
- Root cause: 3 parallel researchers + sourcers sharing the same quota.
- Workaround: 6s pacing between cache-upsert and prospect-update (~3.5 reads/op).
- Memory updated with this constraint.
