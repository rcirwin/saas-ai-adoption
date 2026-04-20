# Prospect Sourcing — Sources, Rules, Signals

What `frs-prospect-sourcer` reads to decide where to look and what qualifies.

## Ideal Customer Profile (ICP)

From `agents/context/business.md`:
- **Stage**: B2B SaaS, $500K–$5M ARR
- **Team size**: 5–50 employees typically
- **Category**: data-heavy SaaS with workflow complexity (analytics, CRM, devtools, workflow, marketplace, vertical SaaS)
- **Signal**: exposed to AI disruption, not yet strategic about it

ICP config lives in the `config` Sheet tab (`icp_arr_min`, `icp_arr_max`). Read those at runtime rather than hardcoding.

## Sources (ranked by signal quality)

### 1. AppSumo launches (high signal)
- Why: Founders who launch on AppSumo are usually <$5M ARR, often solo/small team, actively looking for growth
- Where: https://appsumo.com/browse/ (filter: SaaS, launched in last 12 months)
- What to capture: company name, website, founder name (from launch page), category

### 2. Product Hunt archives (high signal)
- Why: Same ARR range, typically workflow/productivity SaaS
- Where: https://www.producthunt.com/topics/saas (browse by past month, past year)
- What to capture: product name, maker name + handle, website, launch date

### 3. Job boards — AI/ML roles at B2B SaaS (medium-high signal; intent signal)
- Why: Companies hiring for AI roles are actively worried about AI adoption — warm intent
- Where: LinkedIn Jobs, Indeed, Wellfound (formerly AngelList), We Work Remotely
- Query: `"Head of AI" OR "VP AI" OR "AI product manager"` + `"B2B SaaS"` or `"Series A"` + posted in last 30 days
- What to capture: company name, website, role being hired, posting date (intent recency)

### 4. LinkedIn Sales Navigator (medium signal; requires manual input)
- Why: Best for targeted hunts by persona
- How: Ryan runs searches in LinkedIn Sales Nav manually, exports list, drops as CSV
- Sourcer reads the CSV path from the invocation args
- What to capture: all columns from the export

### 5. SaaS directories (lower signal; volume)
- Where: G2, Capterra, TrustRadius — category pages
- Why: Good for category scans, but noisy (lots of >$5M ARR companies mixed in)
- What to capture: product name, website, category, review count (proxy for scale)

### 6. Conference attendee lists (high signal; when available)
- SaaStock, SaaS Connect, Web Summit SaaS track, ProductCon, Mindset
- Ryan provides the list as a CSV or URL when available

## Disqualification Rules

Skip companies that match any of these:
- Public companies or anyone with >$50M ARR (too large for our ICP)
- Employee count >100 (signal for >$5M ARR)
- B2C (direct-to-consumer apps)
- Dev agencies or consultancies (service businesses, not SaaS)
- Companies already AI-native from day one (e.g. Jasper, Copy.ai, Runway) — they're ahead of us on this
- Companies where Ryan has a prior relationship that should be warm-introed not cold (check notes in `prospects` tab)
- Already in the `prospects` tab (dedup by `id` which is the company slug)

## Quality Over Volume

Better to source 10 well-qualified leads than 50 noisy ones. The researcher spends real tokens on each. Every disqualification you apply at sourcing saves downstream work.

## Weekly Quota

Default: 15–20 new prospects per sourcer run. Config tunable via `config.outreach_daily_cap * 5` roughly (one week of outreach).

If the caller overrides with a count arg, respect it up to 30. Refuse requests for more than 30 in one run — batch instead.
