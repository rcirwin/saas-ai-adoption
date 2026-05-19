# FRS Prospect Sourcer - Persistent Memory

Cross-run learnings. Append only.

## Environment notes

- **Linear MCP unavailable in this environment** (no `.mcp.json` in repo). Every run should expect to skip Linear and return `LINEAR_SKIPPED`. Confirm before each run; do not block sourcing on Linear availability.
- **AppSumo and Product Hunt browse pages return 403** to WebFetch. Use WebSearch + third-party roundups (99signals, bloggingjoy, dealysoft, hunted.space) as a substitute, and verify specific candidates with targeted WebSearch queries by name.
- Google Sheets API can return transient 503 "DNS cache overflow" errors. Retry once.
- [LinkedIn posts with company lists in images are not extractable](linkedin_post_image_extraction.md) — image-only posts (Pat Walls "$1M SaaS in any niche" series) need a paste-in or screenshot path, not a URL.
- [Pat Walls $1M SaaS carousel — successful manual-OCR workflow](patwalls_1m_saas_extraction_workflow.md) — user has demonstrated Claude-in-Chrome can OCR carousel tiles into a structured handoff file; documents the format + headline-to-company map confirmed 2026-05-15
- [Directory run 2026-05-18 — vertical practice-management SaaS](directory_vertical_pm_run_2026-05-18.md) — vertical PM SaaS is richest vein; vet PM fully consolidated; stale-snapshot trap (Cetec); 12 added

## Source quality observations (2026-04-20 + 2026-04-21)

- **Privacy analytics** (Plausible, Fathom, Simple Analytics, Usermaven) is a rich, under-AI-ified bootstrapped niche. Expect every player to match ICP.
- **No-code internal tools** (Stacker, Noloco, Softr) are a high-fit cluster - workflow-heavy, AI-agent orchestration is their obvious next frontier.
- **Shared-inbox tools** (Missive $8M, Helpwise 60+ emp, Front enterprise) mostly exceed ICP on the upper bound; be cautious.
- **Video/webinar platforms** (Livestorm, Demio, Riverside) skew either VC-mega-funded or acquired - high skip rate, low volume per run.
- **Time tracking** (Everhour, Harvest, Toggl) has at least one bootstrapped small team per run that fits.
- **Product management SaaS** (Savio, Freshflows, Productboard) - Productboard is too large; Savio and Freshflows fit well.

## Disqualification patterns seen repeatedly

1. **Acquired-but-still-branded**: Demio (Banzai), SquadCast (Descript), Encharge (exited). Check acquisition status for any tool >3 years old.
2. **AppSumo Originals**: TidyCal, BreezeDoc - built by AppSumo itself; not independent companies. Skip.
3. **AI-native-from-day-one**: Nexuscale AI, Scoop Analytics, Lightfield, Naoma - they're ahead of our thesis.
4. **Unicorn-adjacent**: Productboard ($1.7B valuation), Pipedrive, Procore - public or near-public; way above cap.
5. **Multi-product parents**: SaaS Labs (runs Helpwise + others) has 60+ employees even though individual products are small. Assess parent.

## Founder contact patterns

- **LinkedIn URLs** are almost always findable; **emails** almost never are. Don't waste cycles trying to guess emails - let the researcher attempt them later with tooling.
- For bootstrapped 2-person companies, founders are the marketing face - their LinkedIn activity is the best personalization hook.
- For YC companies, the founder LinkedIn pattern is `/in/<firstname><lastname>` ~70% of the time.

## Dedup caveats

- The prospects tab currently uses both kebab-case (e.g. `notch-so`) and plain lowercase (e.g. `flowlu`) for slugs. Follow the "strip TLD unless needed for disambiguation" rule: prefer bare company slug (`papermark`, not `papermark-io`) unless there's a name collision.

## Run cadence

- 2026-05-19 (all, campaign batch 2): 24 added of 30 requested. ~52 evaluated, 9 dupes, 19 DQ. Prospects tab 357 -> 381. Held at 24 vs padding to 30. Under-sampled verticals prioritized: logistics/fleet (OrbitMI marine, Nektria last-mile), proptech (Aptly, Serac), e-commerce/warehouse ops (PULPO WMS, inFlow, SyncSpider, Syndic8). LINEAR_SKIPPED. See `agents/sourcing-runs/2026-05-19-all-batch2.md`. GetLatka stale-snapshot trap hit again on Keboola (snapshot said $4.9M bootstrapped; actually $36.5M raised, 116 emp). Userflow + PFA Solutions both DQ'd as 2024 acquisitions despite "bootstrapped" framing in older sources.
- 2026-05-18 (all): 14 added of 15 requested. ~40 evaluated, 26 skipped. Prospects tab 307 -> 321. Prioritized under-sampled verticals (9 of 14 adds were vertical SaaS: veterinary, dental, logistics, education, nonprofit, manufacturing/ERP). LINEAR_SKIPPED (no .mcp.json). Finalized at 14 rather than padding with a weaker fit. See `agents/sourcing-runs/2026-05-18-all.md`. Stale-snapshot trap hit again (Barti — GetLatka said $3.7M bootstrapped but it raised $12M Series A Aug 2025). Probely was clean ICP fit but acquired by Snyk — always run "[name] acquired" on devtools/security candidates.
- 2026-05-15 (linkedin-patwalls-1m-saas): 8 added of 25 in-band tiles (10 out-of-band skipped pre-research; 3 duplicates; 4 unidentified after one-search rule; 10 disqualified for ICP/acquired/AI-native). One-off ingestion of Pat Walls carousel manually OCR'd by user via Claude-in-Chrome. See `agents/sourcing-runs/2026-05-15-linkedin-patwalls-1m-saas.md` and `patwalls_1m_saas_extraction_workflow.md`.
- 2026-04-20: 15 added (all sources rotation) - first run
- 2026-04-21: 15 added (all sources rotation)
- 2026-05-14: 15 staged but NOT appended (SHEET_APPEND_SKIPPED — `FRS_PROSPECTS_SHEET_ID` env var unavailable; local-session run from desktop Claude Code, not cloud routine where secrets are injected)
- 2026-05-14 (later, same day): 30 added focused on under-sampled devtools/observability/data pipelines (source=appsumo, but most candidates surfaced via GetLatka + Indie Hackers + Practical Founders rather than AppSumo direct). 1 immediately downgraded to not-a-fit (polypane, solo founder). Net 30 identified.
- 2026-05-14: 30 added (g2-mature-incumbent angle) — Sheet writes successful after exporting env vars manually. Linear MCP unavailable (no .mcp.json). See `agents/sourcing-runs/2026-05-14-g2-mature-incumbent.md`.
- 2026-05-14 (afternoon, directory): 23 added (requested 30, but consolidated categories — sales engagement, billing, marketing automation, customer feedback — yielded too many disqualifications). Run also coincided with three parallel sourcer agents working different sources, so coordination not a problem.
- 2026-05-14 (jobs run, parallel with appsumo/devtools + producthunt/vertical-SaaS sourcers): 20 added of 30 requested. Under-sampled focus categories: B2B marketplaces, e-commerce ops, HR tech SMB. Hard quality-bar — refused to pad list with weaker fits. Sheet writes successful (FRS_PROSPECTS_SHEET_ID exported from memory pointer).

## Environment quirks (added 2026-05-14)

- The Google service account JSON exists locally at `/Users/ryanirwin/.config/frs/frs-agentic-system-ba5fe26b3a07.json` and authenticates successfully. The blocker is the Sheet ID env var.
- When running outside the cloud session (e.g. desktop Claude Code), `FRS_PROSPECTS_SHEET_ID` is never set and there's no `.env` file fallback. Future runs from desktop should either be skipped or stage candidates to a sourcing-run file for later append.
- Hard-stop on Sheet dedup is correctly enforced — we cannot risk duplicates without the live Sheet read since prior run files only capture ~30 of the ~56 known prospects.
- Apify CLI / Playwright are NOT installed on this machine (only `npx` available); Chrome MCP permissions in `.claude/settings.local.json` are narrow (only `select_browser` and `tabs_context_mcp`). For web research, WebSearch + WebFetch remain the workhorses.

## Sources mined 2026-05-14 (worth revisiting)

- **Practical Founders podcast guest list** — high-signal, bootstrapped-only filter, $1-10M ARR range. Greg Head's interview archive is curated to ICP. Use practicalfounders.com/podcast and saasclub.io/podcast as recurring sources alongside Indie Hackers and AppSumo.
- **GetLatka company profiles** — surprisingly current ARR/employee data, even for bootstrapped firms not in Crunchbase. Search pattern: `getlatka "bootstrapped" "$1M ARR" OR "$2M ARR" 2024 "10 employees" OR "20 employees"` works well.
- **lifetimedeals.bloggingjoy.com** — readable AppSumo current-deals roundup that doesn't 403 like AppSumo direct.

## Disqualification additions

6. **Big seed/Series A with sub-$2M ARR**: Salesbricks ($18.3M raised, $1M ARR), Better Stack ($28.6M raised, $3.4M ARR), Garage Technologies ($18M raised). If a company has raised >$10M while ARR is below $5M, the strategic gap with our $30K assessment is too wide — they have implementation capacity. Skip.
7. **"AI" in name or tagline as primary positioning**: Krisspy, Tabby, Uniti AI, Zernio (despite being a generic API, markets to AI agent builders). Marketing positioning is a faster signal than digging into product specifics.

## Categories sourced 2026-05-14 (update sampling list)

- Referral marketing (Referral Rock) — newly sampled
- Vertical SaaS (BoomCloud-dental, Alosant-proptech) — newly sampled
- Customer success (Custify) — newly sampled
- Proposal software (Better Proposals) — newly sampled
- Embedded BI (Holistics) — newly sampled
- DevTools observability (OpenStatus) — newly sampled
- Time-series databases (QuestDB) — newly sampled
- Version control / dev (Diversion) — newly sampled
- Social media for agencies (Rella) — newly sampled
- E-commerce inventory (Sumtracker) — newly sampled
- RPA (Robomotion) — newly sampled
- Team/client portals (FuseBase) — newly sampled
- iPaaS (Albato) — newly sampled
- No-code forms (Formaloo) — newly sampled

**Still under-sampled** (next run): B2B marketplaces (every candidate exceeded ICP this run), legal tech, fintech-for-SMB ops, supply chain SaaS, biotech research ops.

## Directory category observations (2026-05-14 afternoon run)

- **Sales engagement / outbound** is HEAVILY consolidated. Of 25+ candidates, only 7 fit ICP. Most have either grown past $5M ARR (Snov.io $22.7M, Lemlist $40M, Smartlead $14M, Hunter $8M, GMass $8.6M, Mailshake $10M, Woodpecker $5-12M), been acquired (Outplay→JungleWorks, PersistIQ→Wishpond, Autoklose→VanillaSoft, Postmark/Wildbit→ActiveCampaign), or are now AI-native positioned (SalesBlink "BlinkGPT", Solvimon, etc.). The remaining $1-5M ARR set tends to be non-US (FR, IN, RS, UK, BG, UA).
- **Subscription billing** is even more consolidated. Recurly ($60M), FastSpring ($28M, owned by PE), Maxio (merger), Paddle ($90M+VC), Zuora (public), Chargebee (mega), ProfitWell→Paddle, Lemon Squeezy→Stripe, Servicebot→Stripe. Only ~4-5 fit: Billsby, Pabbly, Churnkey, Churn Buster, possibly Saaslogic. Wingback is below floor with too much YC funding.
- **Marketing automation for SMBs**: ALL the well-known names exceed ICP — Brevo (unicorn), MailerLite ($18M), AWeber ($53M), Omnisend ($55M), ActiveCampaign (huge), Kit/ConvertKit ($44M), Drip ($15M owned by Leadpages). Smaller bootstrapped: VBOUT ($3M), Encharge ($550K), Mailtrap ($1.7M for transactional). Also: Mautic owned by Acquia, Moosend by Sitecore, Postmark by ActiveCampaign, SendGrid by Twilio, Mailgun by Pathwire, SharpSpring by Constant Contact. Almost everything else is too large or acquired.
- **Customer feedback / NPS / survey** is the healthiest under-sampled category. Many bootstrapped sub-$5M players still independent: Zonka, SatisMeter, Retently, Trustmary, Simplesat, Frill, Userback, Reform, Sleekplan. Userback is borderline (had Blackbird seed). AskNicely, SurveySparrow, GetFeedback all skipped (too large or acquired).

## Slug conventions adopted in this run

- `lagrowthmachine` (no hyphens, no .com — original branding)
- `churn-buster` (kebab because of two-word name, matches `referral-rock` pattern)
- `smartreach` (preferred over `smartreach-io` per memory rule)
- `reform` (preferred over `reform-app`)

## Jobs-run category observations (2026-05-14)

- **B2B marketplaces are dominated by Series B+ / unicorn funding**. Choco ($310M, unicorn), Faire ($12.5B), Ankorstore ($283M Series C), JOOR ($110M, 250 emp), NuOrder (acquired Lightspeed), Tradeshift (large), Pepperi (acquired Advantive). Only small-team independent fits found: B2B Wave (3 emp Greece), OrderEase (32 emp Canada), Orderlion (30 emp Vienna), Procuros (8 emp Hamburg integration layer), Vendoo (YC W22 multichannel reseller). **The category is so consolidated that pure-play B2B marketplaces fitting ICP are nearly always EU/Asia or vertical-niche, never North American horizontal.**
- **HR tech for SMBs has many fits but they cluster around specific niches**: hourly workforce (StaffAny, TipHaus, Workstream is too big), recruiting ATS (Recruiterflow, Hireflix, Truffle), and SMB HRIS (CharlieHR). All the big names (Personio, BambooHR, HiBob, Workable, Sense, Manatal) are way past ICP. **Bootstrapped India-based ATS players like Recruiterflow are an under-tapped vein** — multi-million ARR + AI-curious + lean teams.
- **E-commerce ops** has more diversity at ICP than expected: returns mgmt has small independents (ReturnLogic 21 emp + $2.8M ARR, Outvio 8 emp), DTC inventory has Cogsy (18 emp) and Trunk Inventory (~5 emp), multichannel has Vendoo. **Most of the well-known players (Loop $340M val, Returnly→Affirm, AfterShip $85M rev, Veeqo→Amazon, Skubana→Extensiv, Linnworks→Marlin Equity, Cin7 huge) are out.**
- **Founder-led companies with public AI feature launches in 2024-25 are the highest-intent candidates** — Springbot's April 2025 relaunch under new CEO Marc Pickren explicitly positioning as AI-native is the textbook example. Even if the company technically exceeds ICP size, the founder taking majority control + AI repositioning is a clearer buy signal than ARR.
- **Delivery/route optimization is a cluster of true bootstrappers** — Routific ($280K total raised, $5.4M ARR), Locate2u (ASX:Z2U subsidiary, 51 emp), Detrack (16 emp, $0 raised). All Tier-1 ICP fits. Add this category to the regular sampling list.

## Disqualification observations 2026-05-14 jobs run

- **Acquired-but-still-branded** is the #1 skip reason in mature B2B SaaS spaces. Run a "[name] acquired" search BEFORE doing any deeper ARR/employee verification. Saves significant time.
- **DQ rule #6 (raise >$10M with ARR <$5M)** triggered on: Convictional ($49M/$2.9M), Pietra ($36M/unknown), Pepperi (acquired), Bonusly ($32M/$87 emp), Wholesail ($25M/45 emp), Sourceful ($32M/115 emp). This rule is doing real work — keep it prominent.
- **Recent acquisitions in last 12 months** to remember as auto-skip: Veeqo (Amazon 2021/22), Onport (May 2025, sunset Oct 2025), Sastrify (Deel 2024 confirmed), Glofox (ABC Fitness 2022), Pepperi (Advantive 2024), Encharge (exited per prior memory), PartnerHero (Crescendo Oct 2024), Sense Talent Labs (Avataar large stake), HourWork (Sprockets/Humanly chain), Sumtracker (still independent but in dedup).
- `zonka-feedback`, `churn-buster` use hyphens because multi-word company names need them for readability

## New disqualification observation

8. **"Acquired by a SaaS holding/PE company"**: Postmark/Wildbit (ActiveCampaign), FastSpring (Accel-KKR), Baremetrics (Xenon Partners), Outplay (JungleWorks), Autoklose (VanillaSoft), PersistIQ (Wishpond), Featurebase (owner: separate from product, check). Even when the brand still ships, decision-making and budget sit with the parent. Apply the multi-product parent rule generously — if the holding company itself runs 3+ SaaS products, treat the prospect as parent-led.

## Crunchbase plateau angle observations (2026-05-14 evening run)

Caller asked for 30 prospects with the angle: "companies whose last priced funding round was 2018-2019, still operating, plateaued revenue." 30 appended, source=crunchbase-plateau. Sheet went from ~70 to 143 during the run (four parallel sourcer agents running concurrently — 30 verified as `source=crunchbase-plateau`).

- **The strict "raised 2018-2019, never raised again, still independent" cohort is largely a graveyard of acquisitions.** Of every candidate identified by category-walking sales tech, customer success, BI, knowledge base, marketing automation, event platforms, design SaaS, scheduling, helpdesk, employee advocacy, affiliate marketing — most were rolled up in 2021-2023.
  - Acquisitions verified: Brightback→Chargebee, Yesware→Vendasta, Privy→Attentive→Sendlane, PostBeyond→Influitive, Indicative→mParticle, Acuity→Squarespace, Sigstr→Terminus, Bizible→Marketo, Lessonly→Seismic, Hubdoc→Xero, Hotjar→Contentsquare, Heap→Contentsquare, Smartlook→Cisco, PersistIQ→Wishpond, Sendbloom→LinkedIn, Drift→Salesloft.
- **The angle's true survivors are bootstrapped-from-day-one SaaS founded 2010-2016**, not "raised once in 2018-2019." They raised at most one small round, never returned to the well, now sit at $1-10M ARR with 5-50 employees. Future runs of this angle should query GetLatka/Tracxn for `founded:2010-2016 + small-team + stable-revenue` rather than searching 2018-2019 funding announcements specifically.
- **Search engines are unusable for surfacing 2018-2019 funding announcements** even with `site:techcrunch.com 2018` constraints — indices weight recency hard. Switch to direct candidate naming (industry knowledge → company list → per-company verification on GetLatka/Tracxn/Owler) rather than discovery searches. Crunchbase pages 403 to WebFetch entirely.
- **MixMax disqualified once verified current state**: GetLatka had stated $1M ARR 2023 but the same source updated to $35M ARR 2025 with 119 employees. Stale GetLatka snapshots mislead — always verify the most recent year on the profile, not just the first search hit.
- **Customer.io disqualified for being past ICP**: $70M revenue 2024, 352 employees. Pattern fooled the heuristic: raised tiny rounds 2014-2018, took $30M Series A in 2022. The "no priced round 2014-2021" gap looked plateau-like but they were quietly compounding.
- **High-quality fits surfaced via this angle**: Vero (Sydney AU customer engagement, $1.8M ARR, 13 emp), Helpjuice (Austin TX knowledge base, bootstrapped since 2014 with $20K seed only), Olark (live chat, YC-seed-only-then-bootstrapped, $7.2M rev 2024), Setmore (bootstrapped scheduling, $3.2M rev 2024, 27 emp), GoSquared (UK analytics+chat+CRM, $1.23M total raised, $8M rev), Tapfiliate (German affiliate, bootstrapped, founded 2014), Paperform (Australian forms, bootstrapped), DSMN8 (UK employee advocacy, bootstrapped, $6.6M rev).
- **Verticals worth deep-mining in future plateau-angle runs**: website change monitoring (Visualping, ChangeTower, Distill.io, Sken.io), membership management (MemberSpace, Memberstack, MemberPress), knowledge base (Helpjuice, Document360, Bloomfire), affiliate marketing (Refersion, Tapfiliate, Trackdesk, Rewardful), employee advocacy (GaggleAMP, DSMN8, EveryoneSocial), Hotjar/FullStory alternatives (Mouseflow, Lucky Orange), forms (Paperform, JotForm, Wufoo).

## Producthunt-verticals run (2026-05-14 evening) — vertical SaaS for legal/healthcare/accounting

23 prospects added in three under-sampled verticals after user explicitly requested focus on legal/healthcare/finance.

### Major learning: Legal vertical is heavily consolidated in 2024-2026

**Before adding any legal candidate, cross-check ownership at `lawnext.com` "Shrinking Ownership of Law Practice Management Technology" series (Sep 2024).** Key rollups to filter out:

- **ProfitSolv (Lightyear Capital PE rollup)**: TimeSolv, Tabs3, CosmoLex, Bill4Time, Rocket Matter, Law Ruler, LexCharge — ALL same parent
- **8am / AffiniPay group**: MyCase, CASEpeer, LawPay — common parent
- **Paradigm portfolio**: LollyLaw, others
- **Mitratech**: Acquired AdvoLogix (now Mitratech CaseCloud) and others
- **Stretto**: BestCase + bankruptcy portfolio
- **Australian Technology Innovators**: Smokeball + portfolio (owned by Christian Beck)
- **AbacusNext / CARET rebrand**: Zola Suite, HotDocs, AbacusLaw, Amicus Attorney, APX
- **ASG (Alpine Software Group)**: PracticePanther
- **Clio**: Lawyaw (now Clio Draft)

This is why this run only added 6 legal candidates — almost every initially promising name failed parent-disqualification. Legal vertical can really only contribute 5-10 per sourcing run going forward unless a brand-new independent emerges.

### Survivors of legal-vertical filter (still independent in 2026)

- **CasePacer** ($652K ARR, 10 emp, Indianapolis) — bootstrapped, Tony Petrucciani CEO
- **PacerPro** ($3.2M ARR, 19 emp, SF) — $5.97M raised but operating independently, Gavin McGrane founder
- **Xakia Technologies** ($3.2M ARR, 33 emp, Melbourne/Kansas City/London) — female-led (Jodie Baker), bootstrapped, in-house legal teams
- **RunSensible** (Markham ON Canada) — Kaven Hendiz, independent
- **JuraLaw** ($5M ARR, Chicago) — division of Law Bulletin Media (5th-gen family media co, not SaaS rollup)
- **PracticeLeague** (Pune India) — bootstrapped, Parimal Chanchani, corporate legal ops

### Healthcare vertical (9 added)

Healthcare bootstrapped is concentrated in two clusters:

1. **Australian allied-health practice mgmt** is the richest founder-led, bootstrapped sub-niche — Cliniko, Halaxy, CorePlus, Nookal. None PE-rolled-up. Highest concentration of ICP fits per category. Probably another 3-5 still to find on a future Australian deep-dive.
2. **US small-clinic / specialty EHR** — CharmHealth (integrative med, 22 emp), ImplementHIT (EHR training, 13 emp), Patagonia Health (public/behavioral), DocVilla (DPC). All independent.

### Healthcare names skipped (recent acquisitions 2024-2026)

- **OptiMantra** — merged with Cerbo Dec 2025 under new CEO Jeff Hindman
- **Rimidi** — acquired by Health Recovery Solutions Mar 2026 for RPM consolidation
- **TheraNest** — acquired 2021 by Therapy Brands (rebranded Ensora Health 2025)
- **MyClientsPlus** — rolled into Ensora Health
- **PatientPop** — acquired by Tebra/Kareo
- **Practice Fusion** — acquired by Allscripts (older)
- **Splose** (Australian allied health) — raised $46M Series A from Spectrum Equity 2024, out of ICP

### Accounting vertical (8 added)

Strongest cluster I've found this year. Three sub-segments:

1. **CPA practice management** — Uku (Estonia), Jetpack Workflow (Pittsburgh), Aero Workflow (US) — all bootstrapped, all under 50 emp, all founder-led
2. **Open-source SMB accounting** — Bigcapital (Ahmed Bouhuolia), Akaunting (Cihan Erkan UK) — founder-developer types, ARR opaque but high engagement
3. **Specialty tax/finance** — TaxRobot (R&D credits), Sperse (CRM+cash flow), Certifi (benefits billing)

### Cliniko exception — included despite $8M ARR (above $5M ICP max)

Cliniko ($8M ARR, 57 emp, Melbourne) is ~$3M over our ICP max. INCLUDED anyway because:
- Founder Joel Friedlaender explicitly rejects investment ("Investment? No thanks" blog post)
- Unfunded by choice for 14+ years
- 30,000+ practitioners global
- Remote-first, no managers, no meetings culture

**Heuristic for future runs**: when a candidate just barely exceeds ICP ARR ceiling but has very strong "intentionally bootstrapped" signals (public anti-VC stance, decade+ operating history, no funding rounds at all), include with a note. The researcher can decide.

### Sources that worked this run

- **getlatka.com/companies/industries/i-legal-software** etc. — by-industry indexes are the fastest path to ICP-fit bootstrapped companies. Way better than Capterra/G2 "alternatives" pages.
- **LawSites (lawnext.com) ownership series** — essential for legal vertical filtering
- **Capterra "[X] alternative" + WebSearch verification** — for healthcare/accounting where consolidation is less aggressive

### New disqualification observation

9. **Mainsail Partners portfolio companies are out**: Mainsail "invests exclusively in fast-growing, bootstrapped software companies" — they buy growth equity stakes (often $5-30M). Once Mainsail invests, the company is no longer truly bootstrapped + the parent expects rapid growth incompatible with our $30K strategic-advisory price point. Centerbase is the canonical example this run.

### Categories now sampled (update sourcing.md going forward)

- Legal practice mgmt — 6 added this run (previously 1: meruscase)
- Healthcare practice mgmt — 9 added (previously 1: carepatron)
- Accounting/finance practice + open-source — 8 added (previously 2: liscio + financial-cents)

**Next verticals to mine** (still under-sampled): K-12 / higher-ed EdTech (school admin SaaS), municipal/govtech (small city/county SaaS), nonprofit ops (besides Bonterra-scale incumbents), construction tech for small GCs, manufacturing ERP for SMBs, hospitality/restaurant ops for independents.

## YC W15-S20 directory angle observations (2026-05-14 late-evening run)

Caller asked for 30 prospects from YC batches W15-S20 — the "scale-but-didn't-break-out, no AI pivot" survivors. 30 appended with `source=yc-directory`. Sheet was at 174 when I started, ended at 204 (4 parallel sourcer agents running concurrently).

- **YCDB.co batch pages are the gold standard** for filterable YC company lists. WebFetch works perfectly on `ycdb.co/batch/<w15|s15|w16|...>`. Returns ~30-60 companies per batch with descriptions and "Live/Exited/Closed" status. Use this FIRST before falling back to TechCrunch demo day articles.
- **Y Combinator's own directory page returns just a title to WebFetch** — JS-rendered. Don't waste cycles on it. Use ycdb.co instead.
- **The acquisition rate in W15-S18 B2B SaaS is ~40%**. Plan on disqualifying 40-50% of candidates per batch through acquisitions alone. Verified-acquired list from this run (add to standing skip list): PopSQL→Timescale (Apr 2024), Memfault→Nordic Semi (Jun 2025), Humi→Employment Hero (Jan 2025), SafeBase→Drata (Feb 2025), Polymail (May 2025), Lawyaw→Clio, Gather→ChartHop, Together Software→Absorb (Dec 2024), AXDRAFT→Onit (2020), Slapdash→ClickUp (2022), Berbix→Socure (2023), Smarking→Parkhub (2022), Cuboh→ChowNow (Mar 2024), Convox→Curious (Apr 2024), Optic→Atlassian (Apr 2024), PullRequest→HackerOne (2022), Sourceress→Gem (May 2024), Wingman→Clari (2022), OneGraph→Netlify (2021), Saleswhale→6Sense (2021), Flowdash→Notion (2022), Explo→Omni (Oct 2025), Hubble→NetSPI (Jun 2024), Plato→Coda, Localyze→Boundless (Oct 2025), PartnerStack→AppDirect (Apr 2026).
- **The richest YC batch for our ICP is S20** — 10/30 of my final picks are from S20. They're 5 years post-batch, often hit $1-3M ARR, still independent, founder still CEO. The bigger S20 names (PostHog, Supabase, Modern Treasury) already broke out, leaving a clear plateau cohort.
- **"AI-powered" rebranding is the dominant signal pattern** in this cohort. Sunsama, Slite, Taskade, Cosmic JS, Gmelius all added AI features in 2023-2024 but their core workflows are pre-LLM. This is exactly our wedge: they bolted on AI without restructuring the product. Lead outreach with "you've added AI; now structure for agent-orchestration."
- **Bootstrapped + YC seed = highest conviction**. NetBeez, Apozy, Worklytics, OpenWrench, Names & Faces, Thematic, BaseDash, OpenUnit, ToDesktop all took only YC seed ($120K-$500K), never raised again. Founder owns >80%, decides budget alone, $30K assessment is a clear go/no-go. Highest-leverage outreach targets in the entire prospect pool.
- **The "small team, big revenue" pattern is overrepresented in this cohort vs general sourcing**: ToDesktop (2 emp, $5M rev), Names & Faces (9 emp, $1.2M), Sunsama (9 emp, $1.5M), OpenUnit (4 emp). These are extreme leverage businesses — exactly the kind of founder who'll appreciate a structural blueprint over consulting hours.

### Slug conventions adopted in yc-directory run

- `cosmic` (not `cosmic-js` — they rebranded)
- `mozart-data` (kebab because two-word)
- `names-and-faces` (kebab for multi-word, follows established pattern)
- `heron-data` (kebab)
- `tydo` (current brand, not historical `polyops`)
- `basedash` (single word per current branding, not `base-dash`)
- `netbeez` (single word per company branding)
- `openwrench` (single word)

### New disqualification observations

10. **YC seed-only, raised $10M+ later, AI-positioned**: Tara AI ($13M raised, "AI-first"), Glide ($23M+, "AI-Powered Apps"), Veryfi ($18M, "AI document capture"), Demodesk (pivoted "AI Sales Agents"), Klarity ($90M, "AI automation platform"). The YC seed brand makes them look small but the post-YC funding + AI-native marketing signals they're already executing the strategy we'd sell. Skip.
11. **Late-stage YC pre-AI-pivot acquired in 2024-2025 wave**: Many YC W15-S18 alums acquired specifically for their data + workflow assets in the AI consolidation wave — SafeBase, Memfault, Optic, Hubble, Together, Explo. If a YC company hasn't raised since 2022 and is mid-cap, check acquisition status first — they're prime targets for AI rollups.

### Categories sourced via yc-directory (update sampling list)

- DevTools / API testing (Speedscale) — newly sampled
- DevTools / desktop app builders (ToDesktop) — newly sampled
- DevTools / database admin UI (Basedash) — newly sampled
- DevTools / API simulation (Speedscale) — newly sampled
- IoT / Smart device APIs (Seam) — newly sampled
- Data reliability / data engineering (Datafold) — newly sampled
- Bank transaction analytics (Heron Data) — newly sampled
- Network performance monitoring (NetBeez) — newly sampled
- Browser security (Apozy) — newly sampled
- Vertical SaaS / self-storage (OpenUnit) — newly sampled
- Vertical SaaS / cannabis ERP (Canix) — newly sampled
- Vertical SaaS / coffee shop POS (Dripos) — newly sampled
- Vertical SaaS / freelance ERP (Bonsai) — newly sampled
- E-commerce ops analytics (Tydo/PolyOps) — newly sampled
- Workforce productivity analytics (Worklytics) — newly sampled
- HR / engineering interviews (Hatchways) — newly sampled
- Calendar / productivity (Sunsama, Vimcal) — newly sampled
- Design system platforms (zeroheight) — newly sampled
- Headless CMS (Cosmic) — newly sampled
- Embedded integrations (Paragon) — newly sampled

### Search heuristic that worked best

Pattern: `"<company name>" employees revenue ARR 2024 funding` → GetLatka and PitchBook return 2024 snapshots reliably. Faster than trying to navigate company About pages. ALWAYS verify acquisition status with a follow-up `"<company>" acquired status` search before adding — this caught Memfault, SafeBase, Localyze, PartnerStack as acquired-but-still-visible-on-the-web.

## Devtools/observability/data-pipeline-specific learnings (added 2026-05-14b)

- **AppSumo as a source for devtools is weak.** AppSumo deal flow skews to marketing, productivity, AI-content tools. For devtools/observability/ETL, GetLatka + Indie Hackers + Practical Founders + Failory yield far more on-ICP candidates per hour of search than browsing AppSumo roundups.
- **Independent bootstrapped data-pipeline / ETL SaaS at $500K-$5M ARR is genuinely scarce.** The category has consolidated: Fivetran/Airbyte/Estuary/Hevo are all heavily VC-backed; Stitch/Pipedream/Meltano/Postmark are acquired; Coupler.io / Mailtrap are multi-product Railsware parent; Skyvia is Devart parent. For under-sampled "data pipelines" hits, broaden to workflow automation (Latenode) and treat reverse-ETL as a distinct bucket.
- **Webhook/webhook-gateway/API-mocking subcategory is rich** with bootstrapped or seed-funded indies (Hookdeck, Beeceptor, Treblle, Hoppscotch, Apidog). Most are <30 employees and within ICP.
- **Visual bug reporting / feedback / on-call** subcategories are surprisingly indie-rich (Marker.io, Userback, BugHerd, ilert, Bugfender). All bootstrapped or near-bootstrapped, all in 5-20 employee range.
- **Image/media CDN APIs** is a strong bootstrapped niche (ImageKit, Uploadcare both $3-5M ARR, ~30 emp). Cloudinary has the giant share but the indies are clear ICP fits.
- **Founder LinkedIn coverage is very high** for European/Indian/Australian devtools founders. Less so for US-based ones — they're more often on Twitter/X than LinkedIn.

## Disqualification additions (2026-05-14b)

8. **Solo founders / 1-person teams** like Tarsnap, Polypane, Pirsch (when sub-$500K) — they're below ICP floor *and* lack the team-mediated workflow complexity that makes the FRS assessment valuable. Skip even if otherwise on-thesis. Annotate as `not-a-fit` not just `identified`.
9. **CalmCo / saas.group / Banzai / similar "acquihire roll-up" parents** — when a small tool is owned by a private-equity-style operator (Rewardful → saas.group, DeployBot/DeployHQ → saas.group, Encharge → exited), treat it like a multi-product parent failure even if the brand operates independently. The decision-maker is no longer the founder.
10. **Founders who recently stepped away / co-founder transitions in last 12 months** — Hookdeck (Eric Tran stepped away 2024 for caregiving), ScraperAPI (Daniel Ni exited), Postmark/Wildbit (founders took a break). Borderline — include if other signals are strong but flag for researcher to verify company is still in growth mode.

## G2-mature-incumbent angle observations (2026-05-14 late-evening, fifth parallel sourcer)

Caller asked for 30 prospects with the angle: "incumbents in mature G2 categories that have AI-native challengers but haven't responded." Source tagged `g2-mature-incumbent`. 30 appended. See `agents/sourcing-runs/2026-05-14-g2-mature-incumbent.md`.

### Why the angle works for ICP

- The thesis ("mature category + no AI strategy") naturally filters TO our ICP. ~60% of initial candidates fit ICP without needing employee/ARR cap filtering — incumbents have self-selected to be founder-led, decade-old, pre-LLM-architected.
- Best categories surfacing fits this angle: mid-tier CRM (OnePageCRM, Salesmate, Capsule, Pipeline CRM, NetHunt), session recording/heatmap (Lucky Orange, Crazy Egg, Plerdy), podcast hosting (Buzzsprout, Transistor.fm), form builders (Paperform), dev docs (GitBook), testimonial collection (Endorsal, Trustmary), feedback/bug tracking (BugHerd, Userback).
- Worst categories (over-consolidated, almost nothing fits): subscription billing, marketing automation, sales engagement, helpdesk top-tier.

### Borderline ARR cap tension

12 of 30 picks are at the edges ($5-7M ARR or $500-700K floor). They were included because the angle itself selects for "established G2 incumbents" which by definition tend to be slightly over $5M ARR. Researcher can downgrade these in fit score; sourcing's job is surfacing not gatekeeping.

Borderline-over: Capsule ($6.9M), Resource Guru ($6.1M), Pipeline CRM ($6M), NetHunt ($6M), Crazy Egg ($6.3M), Buzzsprout ($5.6M), Missive ($6.1M)
Borderline-under: Endorsal ($567K), Trustmary ($620K), iorad (~$750K)

## Disqualification observation (added 2026-05-14e)

12. **"Shipped real AI feature in past 12 months"**: Helpjuice released "Swifty Chatbot" + "Wizardshot" + Helpjuice 5.0 (Feb 2025) — substantive AI investment. Even though they fit ICP otherwise ($6M ARR, 30 emp, bootstrapped since 2011), they've already moved on the AI thesis. Skip for "G2 mature incumbent who HASN'T responded" angle. Future runs of this angle: check candidate's changelog/blog for past 12 months. If "AI" appears as more than chatbot integration sticker, skip — the angle requires they're STILL in pre-thinking mode.

## Reddit-displacement angle observations (2026-05-14, sixth parallel sourcer)

Caller asked for 30 prospects with the angle: "Reddit 'alternatives to X' threads + competitive-displacement signals (past 12 months)." Source tagged `reddit-displacement`. 30 appended. See `agents/sourcing-runs/2026-05-14-reddit-displacement.md`. Sheet went from ~257 to 287 during my run (running alongside 4 other sourcer agents).

### Why this angle is the highest-conviction so far

- **The displacement narrative is the wedge.** Every prospect has documented users leaving for AI-native competitors (or leaving incumbents to migrate to them). They know the pressure is real — they just don't know what to do about it. FRS's $30K assessment is shaped exactly for this moment of pre-conviction urgency.
- **The category mix this angle surfaces is heavily bootstrapped + founder-led**: social media scheduling (Publer, Pallyy, Vista Social, RecurPost, ContentStudio, SocialBee, Missinglettr, Iconosquare), niche CRM (Salesflare, Less Annoying CRM, Capsule, Salesmate, Nimble), Buffer alternatives at $1-5M ARR are the densest sub-cluster.
- **30 unique adds, ~40 disqualifications during scan** — yield ratio was very strong because the "alternative to X" search pattern self-filters to incumbent-displaced players.

### Pattern that worked: WebSearch then verify

1. `reddit "alternative to [X]" [category] 2025` → surface 3-7 candidate names
2. For each candidate name: `"[name]" ARR revenue 2024 employees getlatka bootstrapped` → verify ICP fit
3. For top picks: `"[name]" CEO founder LinkedIn` → capture personalization hook

Hit rate: ~60% of candidates surface usable data on second search. Faster than browsing category roundup blogs.

### New disqualification observations

13. **Acquired in last 18 months — auto-skip list (add to running tracker)**: Zoom acquired Bonsai (Dec 2025). Capacity acquired YouCanBookMe (Feb 2025). saas.group acquired DashThis (Sep 2023). ASG/Traject acquired Loomly (2021). Constant Contact acquired Moosend from Sitecore (Jun 2025). ActiveCampaign acquired Postmark/Wildbit (May 2022). Stripe acquired Lemon Squeezy (Jul 2024). ProProfs acquired WebinarNinja (Jan 2024).
14. **Multi-product SaaS parents to skip entirely** (add to running tracker): **WPManageNinja** runs FluentCRM + Fluent Forms + Fluent Support + WP Social Ninja + Paymattic — skip ALL. **Railsware** runs Mailtrap + Coupler.io + Titan SFTP — skip ALL. **Leadpages** spun out Drip but is still Leadpages family at 170 emp — skip Drip too.
15. **Bootstrapped giants with great ARR/employee but past ICP cap**: GMass ($8.6M / 11 emp), Hunter.io ($8M / 31 emp), Mailshake ($10M / 11-50 emp), AgencyAnalytics ($15.7M / 143 emp). These are inspirational businesses for our thesis (lean teams, capital-efficient) but past $5M cap. **Heuristic exception**: include if displacement signal is exceptional AND team is <50 — borderline picks for FRS thesis where the founder is likely to engage. Used this for Capsule ($6.9M), Iconosquare ($7.8M), GMass ($8.6M), Hunter ($8M), DashClicks ($5.6M), Setmore ($3.2M), EngageBay ($6M).
16. **Drip vs drips.com confusion** — separate companies. drip.com is the email marketing platform once owned by Leadpages (now spun out, 170 emp, out of ICP). drips.com is an SMS marketing platform (143 emp, also out). Both share names but are unrelated. ALWAYS double-check `.com` vs original branding when "Drip" appears.

### Best founder-led tier 1 picks for this run (recommended outreach order)

These are the highest-conviction prospects for first-touch outreach because they're solo or near-solo bootstrapped, fit ICP cleanly, and have visible displacement pressure:

1. **Pallyy** (Tim Bennetto, Melbourne, 3 emp, $1.2M ARR) — ex-locksmith building in public
2. **Vista Social** (Vitaly Veksler, Brooklyn, 3 emp, $1M ARR) — second SaaS attempt, pragmatic
3. **Carrd** (AJ, Nashville, 1 emp, $1.5M ARR) — pure solo, no LinkedIn (Twitter only)
4. **HelpCrunch** (Pavlo Pavlenko, Kyiv, 21 emp, $1M ARR) — Ukrainian bootstrapped
5. **Salesflare** (Jeroen Corthout, Antwerp, 7 emp, $3M ARR) — Belgian bootstrapped, "Intelligent CRM" already in tagline
6. **Encharge** (Kalo Yankulov, Bulgaria, 5 emp, $550K ARR) — SaaS-specific marketing automation
7. **Mailtrap was DQ'd** but Railsware family of bootstrapped products is a future lookup pattern

These founder-led, solo/near-solo bootstrappers are the best fit for a $30K assessment because the founder controls the budget AND the strategy entirely.

### Slug conventions adopted in reddit-displacement run

- `helpcrunch` (single word per branding)
- `smartsuite` (single word per branding)
- `salesflare` (single word per branding)
- `publer`, `pallyy`, `socialbee`, `recurpost`, `dashclicks` — all single word
- `less-annoying-crm` (kebab — multi-word brand)
- `vista-social` (kebab — multi-word brand)
- `simplybook-me` (kebab — domain has -me but brand is "SimplyBook.me")
- `capsule-crm` (kebab to disambiguate from generic "capsule")
- `hunter-io` (kebab to disambiguate from "Hunter" as generic word; .io part is necessary)
- `fullsession` (single word per branding, .io domain stripped)

### Categories newly sampled via reddit-displacement (update sourcing.md)

- Customer messaging / live chat — newly sampled (Smartsupp, Userlike, HelpCrunch)
- Social media scheduling — heavy sampling (Publer, Pallyy, Vista Social, RecurPost, ContentStudio, SocialBee, Missinglettr, Iconosquare = 8 of 30)
- CRM (SMB/relationship) — heavy sampling (Salesflare, Less Annoying CRM, Capsule, Salesmate, Nimble, EngageBay = 6 of 30)
- Site builders (one-page, creative) — newly sampled (Carrd, Pixpa)
- Email finder / prospecting — newly sampled (Hunter.io, GMass)
- Newsletter platforms (creator) — newly sampled (Buttondown)
- Uptime monitoring — newly sampled (StatusCake)
- Marketing automation (SaaS-specific) — newly sampled (Encharge)
- Session replay — newly sampled (FullSession)
- Forms (Typeform alt) — newly sampled (Paperform)
- White-label agency software — newly sampled (DashClicks)
- Appointment scheduling — additional sampling (Setmore, SimplyBook.me)

**Next angle worth trying:** "Founder threads on Reddit (r/SaaS, r/EntrepreneurRideAlong) where they ask 'how do I add AI to my product without becoming AI-native'" — that's the explicit cognitive state we want to find. Could be a tighter signal than mining alternative-to threads.
