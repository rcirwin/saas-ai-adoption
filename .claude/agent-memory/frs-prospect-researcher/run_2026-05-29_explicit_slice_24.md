---
name: run-2026-05-29-explicit-slice-24
description: Run notes for 2026-05-29 explicit slice of 24 (myemailverifier through poptin)
metadata:
  type: project
---

# 2026-05-29 — explicit-slice 24 (myemailverifier→poptin)

See agents/research-runs/2026-05-29-explicit-slice-24-prospects.md.

24 researched / 0 cache hits / avg 2.42 / dist 1:6 2:8 3:5 4:4 5:1.

## Top fit-5: clockwork-recruiting
**Why:** $2.8M Latka, 15yrs bootstrapped, founder Christian Spletzer still CEO, EXPLICIT public statement from Clockwork rep: "We want to keep our focus specifically on the ATS project management side of executive search. We see ourselves as a project management tool that partners with AI providers, not an AI platform." Limited "Cai" features only. Bullhorn (AI-native), Loxo (AI-shipped), Mercor existential pressure.
**How to apply:** When a founder or company rep PUBLICLY STATES "we partner with AI providers, not build AI" — this is the cleanest fit-5 trigger possible. Watch for this exact phrasing or equivalents ("we integrate with AI tools", "AI is a partner not a product") in interviews and review sites.

## New patterns confirmed
- **B2C personal finance = wrong-ICP filter** (pocketsmith $2.8M in-band ARR but B2C → fit 1). FRS targets B2B SaaS. Even bootstrapped ICP-ARR consumer finance doesn't qualify.
- **Multi-product founder (portfolio operator) = attention-split signal** (Gal Dubinski / Premio / 6+ products). Default fit 2 unless one product clearly dominates focus.
- **"AI-Powered" self-positioning + 3+ shipped features = strategic cap at 3** (eyvo, cloudpano, wiserreview, billbjorn). Reconfirmed.
- **Agent-ready disqualifier extended**: growthoptix's "FAI" Financial AI agent + teamflect's "AI teammate that takes action" + obsidian-skills repo for Claude. All auto-fit 1-2.
- **Acquired-2024 disqualifier**: Hi5 Technologies (Gary Willmott exited 2024 after scaling to 60K users). Add to acquired list alongside Hi5.

## Contact-data corrections during run
- **contractor-compliance**: Sheet contact "Mike Mannarino" is WRONG. Actual CEO is **Mark Bania** per getlatka.com/companies/contractor-compliance + Lighter Capital success story. **Corrected this run.** Pattern: when no public results surface for sheet's contact name + the company is real and active, search by company name alone and trust Latka/Crunchbase first.
- **chargeover**: Sheet has 2 duplicate rows (Keith Palmer + Ryan Bantz). Bantz is CEO, Palmer is CTO per multiple sources. Both rows updated.
- **myemailverifier + browserflow**: Sheet has generic "Team / Founder" placeholders. Not pursued (fit 2 and fit 1 respectively).

## Schema reminder
`research_cache` does NOT have `ai_posture` column. Passing `ai_posture=X` to cache upsert raises ValueError on NEW row inserts (hard error); silently dropped on UPDATE. Pattern from earlier runs reconfirmed. Cache columns: prospect_id, researched_at, sources_checked, product_summary, workflow_complexity, ai_features_observed, agent_readiness, competitive_landscape, pain_signals, personalization_hooks, fit_assessment, recommended_angle. `ai_posture` lives only on prospects tab.

## Rate-limit
Hit 60-read-per-minute cap once early in run (during initial sheet reads). `until` loop pattern recovered cleanly. With parallel sourcer + 4 parallel researchers, 6-8s pacing between writes is safe.
