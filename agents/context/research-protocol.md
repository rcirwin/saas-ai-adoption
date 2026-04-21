# Prospect Research Protocol

What `frs-prospect-researcher` reads to decide how to score fit and what to capture.

## Goal

For each prospect, produce enough insight that the outreach writer can send a message that is specific, credible, and hits a real pain point. If research doesn't surface a genuine angle, the prospect gets flagged and we skip outreach — a generic message damages the brand.

## Sources (in priority order)

1. **Company website** — product pages, pricing, customers, about page, blog (last 6 months)
2. **LinkedIn company page** — employee count, recent posts, team growth signals
3. **Product Hunt / AppSumo launch posts** — comments reveal real user pain (gold mine)
4. **G2 / Capterra reviews** — sort by "most critical", read the 3-star reviews for friction signals
5. **Founder's LinkedIn + recent posts** — what they're talking about publicly
6. **Recent news / funding** — Crunchbase, TechCrunch mentions (if any)
7. **Job postings** — what roles they're hiring tells you what problems they have

Don't exhaust all sources for every prospect. Stop when you have enough signal for a confident fit score. Budget: ~5 minutes of research per prospect.

## What to Capture (per prospect)

Write these to the `research_cache` tab:

- **product_summary**: 2 sentences on what they do + who they sell to
- **workflow_complexity**: `low` / `medium` / `high` — how many steps does a typical user flow take
- **ai_features_observed**: what AI they already have (list specific features, not marketing)
- **agent_readiness**: `none` / `low` / `medium` / `high` — from an agent's perspective, can it use this product?
- **competitive_landscape**: who competes, is anyone in the space AI-native
- **pain_signals**: specific friction (from reviews, comments, job posts). Semicolon-list.
- **personalization_hooks**: things to reference in outreach (recent launch, blog post, hire, review). Semicolon-list.
- **fit_assessment**: 1-paragraph on why they are/aren't a fit
- **recommended_angle**: which pillar/objection angle to lead with in outreach

## Fit Scoring Rubric (1–5, written to `prospects.fit_score`)

- **5** — Perfect fit. ARR in range, workflow-heavy, exposed to AI disruption, founder active on LinkedIn, clear personalization hooks, no AI-native competitor has them boxed in
- **4** — Strong fit. Most of the above, minor uncertainty on ARR or founder reachability
- **3** — Plausible fit. Could be a good client but evidence is thin — needs a warm angle or wait-and-see
- **2** — Weak fit. Wrong stage, no clear workflow complexity, or AI-native competitors already dominating
- **1** — Not a fit. Outside ICP, B2C, already solved, or founder unreachable

Anyone scoring 3+ moves to the outreach stage. 1–2 gets `status: not-a-fit`.

## AI Posture Classification (written to `prospects.ai_posture`)

- **none** — no AI features, no AI mentions on site
- **exploring** — has a "we're exploring AI" blog post or hired someone recently
- **bolt-on** — has chatbot or generic AI features that feel tacked on
- **strategic** — real product changes driven by AI, workflow-first
- **agent-ready** — API-first, clear surface for agents to interact with

Target: `none`, `exploring`, `bolt-on`. Those are where we can add the most value.

Avoid: `strategic` and `agent-ready` unless there's a specific gap (e.g., they're strategic on one product but have a new line that isn't).

## Cache Discipline

- Before researching, check `research_cache` tab by `prospect_id`. If a row exists and `researched_at` is within the staleness window (default 90 days from `config.research_staleness_days`), skip research and move the prospect straight to outreach-ready
- After researching, always write to `research_cache` even if the prospect turns out not to be a fit (prevents re-research)

## Output

Update `prospects` tab columns L–P (`ai_posture`, `fit_score`, `fit_notes`, `research_summary`, `status`) for each prospect. Change `status` from `identified` to `researched` (or `not-a-fit`).

Write research details to `research_cache` tab.

## What Not to Do

- Don't make up information. If the website doesn't say something, say "unknown" or leave blank
- Don't rely on LinkedIn headline marketing — check the actual product
- Don't score 5 if you had to stretch to find hooks
- Don't spend more than 10 minutes on any single prospect. If it takes longer, score 2 and move on
