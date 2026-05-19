# Research Run — 2026-05-19 — 15 prospects (batch 2)

Batch 2 of the large sourcing backlog. 15 prospects with `status=identified` researched, sorted by `created_at` ascending (all 2026-05-19).

## Counts

- Researched: 15
- Moved to `researched` (fit 3+): 8
- Moved to `not-a-fit` (fit 1-2): 7
- Cache hits: 0
- Errors: 0 (Openbay, uptain websites returned 403; Rackwise timed out — all triangulated via getlatka/Crunchbase/Tracxn)

## Fit Score Distribution

- 5: 1 (sweft)
- 4: 2 (clerky, k16-solutions)
- 3: 5 (vacation-tracker, reviewshake, ruler-analytics, e-cargoware, shipsaving)
- 2: 3 (openbay, certes-networks, uptain)
- 1: 4 (wordlift, rackwise, webpresented, docuseal)

Avg fit score: 2.73

## Top 5 by Fit Score

1. **sweft** (5) — Bootstrapped retail launch-workflow SaaS ~$1.2M ARR, dead-center ICP, zero AI, highly workflow-heavy (cross-departmental orchestration). Founder Michael Robinson ex-Anthropologie domain expert with strong public origin story. Angle: AI-experiences-for-users — AI to predict launch bottlenecks and auto-route handoffs.
2. **clerky** (4) — Startup legal-doc SaaS ~$2.7M ARR, AI-empty in a category facing generative-AI disruption. Founder Darby Wong active, YC Spring 2026 visiting partner. Angle: AI-experiences-for-users — safely accelerate doc generation/review.
3. **k16-solutions** (4) — Higher-ed data/migration SaaS ~$3.3M ARR, workflow-heavy LMS migration/archiving, only light AI. Angle: AI-experiences-for-users — automate migration mapping + data-quality detection; data-readiness deliverable resonates.
4. **ruler-analytics** (3) — Data-heavy marketing-attribution SaaS ~$3M ARR; early AI Agent reads as bolt-on. Angle: turn the analyst/media-planner agent into a workflow that acts.
5. **e-cargoware** (3) — Air-cargo vertical SaaS ~$2.9M ARR, reachable founder; already shipped comprehensive AI suite (FR8CoPilot, docAI) so capped at 3. Angle: agent-readiness depth.

## Flagged Issues / Notes

- **Acquisition disqualifier hit**: `webpresented` acquired by Cordance holding company (Aug 2023) → not-a-fit per holding-co pattern. (`stratodesk` / `the-bot-platform` flagged by sourcer were NOT in this batch.)
- **Contact backfills made during research**: clerky (Darby Wong + LinkedIn), sweft (Michael Robinson + LinkedIn), wordlift (Andrea Volpini + LinkedIn), k16-solutions (Dr. Thomas Waite, CEO — sheet contact_name was blank), ruler-analytics (Ian Leadbetter, CEO), uptain (Julian Craemer, CEO), e-cargoware (Ramesh Darbha + LinkedIn + email).
- **Contact gaps remaining on fit-3+ rows**: vacation-tracker (no LinkedIn/email — COO Lav Crnobrnja in sheet), reviewshake (Philip Kallberg, no LinkedIn/email), k16-solutions (no LinkedIn/email for Dr. Thomas Waite), shipsaving (Yiling Luo, no LinkedIn/email). Sourcer should backfill before outreach.
- **Websites unreachable**: openbay.com (403), uptain.de (403), rackwise.com (timeout). All triangulated via getlatka/Crunchbase/Tracxn; scores confident.
- **Schema note**: `research_cache` tab has no `ai_posture` column — upsert silently drops the arg. `ai_posture` lives only on the `prospects` tab. No `fit_score` column on cache either (omitted from upsert per known schema).
- 82 prospects with `status=identified` remain unprocessed after this run.
