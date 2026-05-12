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
- **Note (2026-04-21):** AppSumo browse pages return 403 to WebFetch. Use WebSearch + third-party roundups (99signals, lifetimedeals.bloggingjoy, dealysoft) instead, then verify each candidate with targeted name searches.

### 2. Product Hunt archives (high signal)
- Why: Same ARR range, typically workflow/productivity SaaS
- Where: https://www.producthunt.com/topics/saas (browse by past month, past year)
- What to capture: product name, maker name + handle, website, launch date
- **Note (2026-04-21):** Product Hunt also returns 403 to WebFetch. Use hunted.space and indie-hacker recap blogs, then verify specific candidates.

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

### 7. Bootstrapped-founder roundups (supplementary; high signal)
Added 2026-04-21. Useful when AppSumo / ProductHunt are blocked.
- IndieHackers interviews (https://www.indiehackers.com/)
- GetLatka company profiles (revenue/employee proxies) — high signal, surfaces in WebSearch snippets directly
- Starter Story interviews
- Bootstrappers.com, SaaSMag, SaasClub podcast episode archives
- Market Clarity "Top 30 Indie SaaS" and "Top 33 B2B SaaS" lists (mktclarity.com returns 403 to WebFetch as of 2026-05-12; use WebSearch with site filter)
- TheRecursive regional bootstrapper features
These confirm revenue and employee counts that WebFetch on the company site cannot.

## Disqualification Rules

Skip companies that match any of these:
- Public companies or anyone with >$50M ARR (too large for our ICP)
- Employee count >100 (signal for >$5M ARR)
- B2C (direct-to-consumer apps)
- Dev agencies or consultancies (service businesses, not SaaS)
- Companies already AI-native from day one (e.g. Jasper, Copy.ai, Runway) — they're ahead of us on this
- Companies where Ryan has a prior relationship that should be warm-introed not cold (check notes in `prospects` tab)
- Already in the `prospects` tab (dedup by `id` which is the company slug)
- **Acquired and merged into a parent** (e.g. Demio/Banzai, SquadCast/Descript, Baremetrics/Xenon, FareHarbor/Booking, SparkLoop/ConvertKit, CastorDoc/Coalesce) — parent company is the decision-maker now
- **AppSumo Originals** (e.g. TidyCal, BreezeDoc) — built by AppSumo itself, not independent companies
- **Multi-product SaaS parents** where the parent org exceeds ICP even if one product is small (e.g. SaaS Labs which owns Helpwise + others)
- **Strict $5M ceiling**: $5.1M-$10M companies are NOT borderline — they are out of ICP. Apply rigorously.
- **Below $500K floor**: pre-revenue or hobby-scale companies (ConfigCat $317K, ServGrow $316K) are out — researcher cost > expected value.

## Quality Over Volume

Better to source 10 well-qualified leads than 50 noisy ones. The researcher spends real tokens on each. Every disqualification you apply at sourcing saves downstream work.

## Weekly Quota

Default: 15–20 new prospects per sourcer run. Config tunable via `config.outreach_daily_cap * 5` roughly (one week of outreach).

If the caller overrides with a count arg, respect it up to 30. Refuse requests for more than 30 in one run — batch instead.

## Sourcing History (rolling pointer)

Detailed per-run notes live in `agents/sourcing-runs/<YYYY-MM-DD>-<source>.md`. Headline counts only here:

| Date | Source | Added | Skipped |
|------|--------|-------|---------|
| 2026-04-20 | all | 15 | 11 |
| 2026-04-21 | all | 15 | 10 |
| 2026-05-12 | all | 14 | 20 |

## Categories Already Well-Sampled (reduce weight in future runs)

Tracking so we don't keep returning to the same category repeatedly:

- Privacy analytics (Plausible, Fathom, Simple Analytics, Usermaven) — 4 added
- CRM / project management (Flowlu, Heffl, NinjaPipe, Dubsado) — 4 added
- Field service / property mgmt (Kickserv, JobTread, TenantCloud) — 3 added
- Scheduling / calendar (SavvyCal, Paperbell) — 2 added
- Customer support / helpdesk (Charla, ThriveDesk, Crisp, Customerly) — 4 added
- No-code tools (Tally, Noloco, Stacker) — 3 added
- Document automation (Docupilot, Papermark) — 2 added
- Email marketing / messaging (MailerSend, Loops, EmailOctopus, Customerly) — 4 added (2026-05-12)
- Product feedback / voice-of-customer (Savio, Canny) — 2 added
- Devtools (Bannerbear, Honeybadger, MailerSend, Loops) — 4 added (2026-05-12)
- Vertical SaaS healthcare (Carepatron) — 1 added (2026-05-12)
- Vertical SaaS legal (MerusCase) — 1 added (2026-05-12)
- Vertical SaaS cleaning/maid (ZenMaid) — 1 added (2026-05-12)
- Knowledge base (Tettra) — 1 added (2026-05-12)
- Podcast/creator (Castos) — 1 added (2026-05-12)
- Referral/e-commerce (ReferralCandy) — 1 added (2026-05-12)

**Under-sampled** (prioritize next run): observability proper (Datadog-alts at sub-ICP), data pipelines/ETL bootstrapped (most are VC-funded), vertical SaaS for finance/accounting (TaxDome too big; Karbon VC-funded — need to find sub-$5M), B2B marketplaces, vertical SaaS for construction/real-estate/manufacturing, HR-tech for SMB.
