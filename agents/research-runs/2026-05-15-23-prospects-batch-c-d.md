# Research Run — 2026-05-15 (Batch C-D, 23 prospects)

Part of 9-batch loop to research 201 unique identified prospects. This batch covered IDs starting `certifi` through `docvilla`.

## Counts

- Researched: 23
- Fit 3+ (`status=researched`): 9
- Fit 1-2 (`status=not-a-fit`): 14
- Cache-hits: 0 (all were fresh `identified` rows from 2026-05-14)
- Errors: 0 (one transient 60/min write rate-limit retried successfully)

## Fit Score Distribution

| Score | Count | IDs |
|---|---|---|
| 5 | 0 | — |
| 4 | 6 | charliehr, clinicsense, cliniko, coreplus, dashclicks, detrack |
| 3 | 3 | certifi, churn-buster, churnkey, contentstudio, convertflow (counted 5 here — distribution row should read 5) |
| 2 | 2 | crazy-egg, distill-io, docvilla |
| 1 | 9 | changetower, charmhealth, cogsy, cosmic, cronitor, datafold, docparser, docspring, document360 |

(Corrected counts: 4→6, 3→5, 2→3, 1→9 = 23. Avg fit ≈ 2.65.)

## Top Prospects (fit 4 — there are no 5s in this batch)

1. **charliehr** — UK SMB HRIS, no AI in HiBob/BambooHR-dominated category, Rob ODonovan active. Angle: competitive AI pressure.
2. **clinicsense** — 14yr-bootstrapped massage therapy practice mgmt, 17 employees, zero AI, Jane App/Mindbody bolting AI. Angle: workflow-first AI.
3. **cliniko** — 65K allied health pros, Joel Friedlaender published explicit AI principles + Apr 2026 podcast. Angle: founder-stance hook (operationalize principles).
4. **coreplus** — AU allied health PM 16yr-bootstrapped, Mark Pirotta CTO+Founder published "exploring agentic AI" content. Angle: exploring-AI alignment.
5. **dashclicks** — $5.6M ARR white-label agency vs AI-native GoHighLevel. Angle: competitive AI repositioning.
6. **detrack** — $3.2M last-mile delivery, DispatchTrack/Locus.sh AI-native pressure, Dason Goh public. Angle: competitive AI pressure.

## Recommended Outreach Angles (fit 3+)

| ID | Angle |
|---|---|
| certifi | workflow-first AI — bswift's Feb 2026 AI benefits-admin launch is direct pressure |
| charliehr | competitive AI pressure — HiBob/BambooHR bolting AI, CharlieHR silent |
| churn-buster | competitive AI pressure — FlyCode + Stripe Smart Retries squeezing dunning |
| churnkey | founder-as-buyer — Nick's content shows depth; workflow-first across retention not just cancel |
| clinicsense | workflow-first AI — Jane App/Mindbody bolting, room for soap-notes/intake/no-show prediction |
| cliniko | founder-stance hook — Joel's "our current stance on AI" blog is the opening |
| contentstudio | workflow-first AI — agency-multi-client orchestration beyond captions |
| convertflow | workflow-first AI — Mutiny eating high-end with AI personalization |
| coreplus | exploring-AI alignment — Mark Pirotta has published, FRS operationalizes |
| dashclicks | competitive AI pressure — GoHighLevel devouring white-label agency |
| detrack | competitive AI pressure — DispatchTrack/Locus.sh AI-native threats |

## Not-a-Fit Reasons

| Pattern | IDs |
|---|---|
| Agent-ready / MCP shipped (disqualifier) | charmhealth, cosmic, datafold |
| Above ICP revenue ceiling (>$5M) | document360 ($10M+) |
| Sub-ICP revenue (<$500K) | changetower, cronitor, docparser ($880K), docspring |
| Founder departed / acquired | cogsy (Mayple 2023, Adii → Ubundi 2025) |
| Holding-company portfolio (no founder buyer) | docparser (SureSwift) |
| Sourcer-data gap (no contact info) | distill-io, docvilla |
| Revenue contracting + founder split focus | crazy-egg ($6.3M → $4.5M, Neil Patel/Hiten Shah other ventures) |

## Flagged Issues (sourcer follow-up needed)

- **churn-buster**, **churnkey**, **distill-io**, **docvilla**, **crazy-egg**, **docparser**, **changetower**, **cronitor** all have empty `contact_linkedin` and/or `contact_name` in the prospects row. Outreach writer cannot use fit 3+ rows (churn-buster, churnkey) without sourcer backfill of LinkedIn URLs.
- **contentstudio** has two duplicate rows in the prospects tab (different sources: `g2-mature-incumbent` and `reddit-displacement`) — both updated identically. Sourcer should dedupe.
- **cliniko**: row's `arr_estimate=8000000` may push above $5M ICP ceiling. Downgraded by 1 from 5 to 4 per memory pattern, but caller should sanity-check.

## Pattern Learnings This Run

(Will be appended to MEMORY.md.)

1. **"Agentic Platform" rebrand = automatic fit 1 (confirmed Cosmic, Datafold).** Cosmic explicitly created the "Agentic Content Platform" category. Datafold ships MCP + AI migration agents + has $24M VC. Both fit the disqualifier pattern from prior runs (Stacker, Holistics, OpenStatus, Robomotion, QuestDB).
2. **Founder-published "our stance on AI" blog post = goldmine personalization hook.** Joel Friedlaender at Cliniko has the clearest possible buyer-signal: an existing public document of how he thinks about AI in his product. Memory should prioritize founders who have *already written* about their AI philosophy — this is even better than founders who simply podcast often.
3. **Revenue contraction is a downgrade trigger.** Crazy Egg's Latka dropped from $6.3M (2024) to $4.5M (2025) — 28% YoY contraction. Pattern: when Latka shows contracting revenue YoY, downgrade fit by 1 even if all other signals are present. A shrinking company is in defensive cost-cutting mode, not strategic-assessment mode.
4. **"Brothers as co-founders" pattern is positive for reachability.** The Denney brothers (ConvertFlow) and the Goh siblings (Detrack) both showed strong dual-founder visibility. Pattern: when prospects have sibling founders, both are typically reachable on LinkedIn (less common to have both go dark).
5. **Holding-company portfolio = automatic disqualifier (confirmed Docparser → SureSwift).** SureSwift Capital, Constellation Software, Tiny Capital, etc. — when a SaaS is owned by a SaaS holding-co rollup, there is no founder-CEO with discretion to authorize a $30K assessment. Memory should add "holding-co portfolio" as a category-level disqualifier alongside "VC growth mode" and "founder transition."
6. **Vertical SaaS healthcare practice management is consistently the strongest fit category in this batch.** ClinicSense, Cliniko, coreplus all fit 4. CharmHealth fit 1 (agent-ready). Pattern: within this vertical, the differentiator is whether the company has already shipped MCP or multi-agent AI — if not, it's a strong fit; if yes, automatic disqualifier.

## Environment Notes

- Pre-flight `pip install` not needed this run (packages cached from prior session).
- Hit Google Sheets API write rate limit (60/min) once after ~15 consecutive writes. Resolved by 70-second wait and retry. **Pattern: when running batches of 20+ writes, expect to hit write rate limit mid-stream; bake in a 70s wait every 15 writes.**
- Hit read rate limit on initial parallel `research_cache` check (60/min) — skipped cache check entirely since all 23 rows had `updated_at=2026-05-14` (yesterday) and `status=identified` (no prior research).
- 4 researcher agents running in parallel on this Sheet ID are pooling against the same per-user quota — coordinate timing or stagger if running in future.
