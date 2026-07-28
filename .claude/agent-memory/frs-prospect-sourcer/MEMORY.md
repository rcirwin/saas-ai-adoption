# FRS Prospect Sourcer - Persistent Memory

Cross-run learnings. Append only.

## Environment notes

- **Linear MCP unavailable in this environment** (no `.mcp.json` in repo). Every run should expect to skip Linear and return `LINEAR_SKIPPED`. Confirm before each run; do not block sourcing on Linear availability.
- **AppSumo and Product Hunt browse pages return 403** to WebFetch. Use WebSearch + third-party roundups (99signals, bloggingjoy, dealysoft, hunted.space) as a substitute, and verify specific candidates with targeted WebSearch queries by name.
- Google Sheets API can return transient 503 "DNS cache overflow" errors. Retry once.
- [LinkedIn posts with company lists in images are not extractable](linkedin_post_image_extraction.md) — image-only posts (Pat Walls "$1M SaaS in any niche" series) need a paste-in or screenshot path, not a URL.
- [Pat Walls $1M SaaS carousel — successful manual-OCR workflow](patwalls_1m_saas_extraction_workflow.md) — user has demonstrated Claude-in-Chrome can OCR carousel tiles into a structured handoff file; documents the format + headline-to-company map confirmed 2026-05-15
- [Directory run 2026-05-18 — vertical practice-management SaaS](directory_vertical_pm_run_2026-05-18.md) — vertical PM SaaS is richest vein; vet PM fully consolidated; stale-snapshot trap (Cetec); 12 added
- [Devtools/data-infra run 2026-06-10 — 50 prospects](devtools_data_infra_run_2026-06-10.md) — error-monitoring/uptime/DB-tooling/feature-flags/data-integration veins; lane heavily VC+acquisition-consolidated at top; clean fits = solo/2-founder indie + EU/India bootstrappers; ~95 DQ
- [Plateaued horizontal SaaS run 2026-05-28](plateaued_horizontal_run_2026-05-28.md) — 50 net-new plateaued horizontal tools (CRM/forms/scheduling/wiki/social/PM); 9 "AI-native rebrand" DQ; 3 in-flight dups; GetLatka category pages workhorse
- [Marketplace residents run 2026-05-28 — 50 prospects across 12 marketplaces](marketplace_residents_run_2026-05-28.md) — Atlassian heavily Appfire-rolled-up; WP ecosystem owned by Awesome Motive/StellarWP/WPMU; Vietnamese Shopify + Bangladesh WP rich indie veins; female-founded Atlassian rare; Pipedrive under-explored
- [Email infrastructure run 2026-05-28 — 50 prospects in deliverability/verification/parsing/auth/warmup](email_infrastructure_run_2026-05-28.md) — DMARC + email verification highest fit rates; France/Ukraine/India bootstrapped clusters; AI-readiness pitch lands existentially in this space; many acquired/PE-rolled-up to DQ first; Sheets rate-limit at 60 reads/min
- [GetLatka country pages workhorse](getlatka_country_pages_workhorse.md) — `?cap=small` / `?cap=mid` on GetLatka country pages is the highest-yield source for LATAM/MENA/SA bootstrapped sourcing; top 10 per tier visible without paywall
- [GetLatka $5M-cap stale-snapshot trap](getlatka_5m_cap_stale_snapshot_trap.md) — GetLatka cards CAP displayed ARR at "$5M"; several were $7-43M (Analyse2, Prefixbox, Swat.io, Good Sign). Always per-company verify most-recent-year revenue before adding any ~$5M card; `&page=2` pagination does not work via WebFetch
- [Intl-bootstrapped TOP-UP run 2026-06-10 — 38/38 added, fresh regions](intl_bootstrapped_topup_2026-06-10.md) — Croatia/Greece/Latvia/Slovakia mid+small tiers are FRESH high-yield bootstrapped veins (data/analytics/vertical-ops); Nordics mid-cap heavily acquired/PE-rolled at top; 24 per-candidate-guard dedup catches (earlier same-day run had leaked 21 dups); 27/38 LinkedIn verified, 11 unknown; append-only rule cost 3 post-append-verified URLs — verify founder BEFORE append next time
- [AI-native rebrand wave MENA 2025](ai_native_rebrand_wave_mena_2025.md) — 60% of "promising" MENA/Saudi candidates have rebranded as AI-powered/AI-driven (Sadq, Penny, Alaan, Treble, Colocio); filter pre-2023 founding + under $5M ARR + non-AI tagline
- [Indie Chrome extension run 2026-05-28 — 50 prospects across 11 sub-categories](indie_chrome_extension_run_2026-05-28.md) — email/Gmail extensions + web scrapers + notes/clipper + tab managers richest; YC+$10M+ chrome wave (Axiom, Bardeen, Tactiq, PixieBrix, Requestly) all DQ rule #6; ~25% candidates DQ for "AI-native" rebrand; `update --where id=X` renames ALL matching rows if duplicates exist (gotcha)
- [EdTech run 2026-05-28 — 50 prospects across 11 EdTech sub-categories](edtech_run_2026-05-28.md) — K-12 SIS heavily consolidated under Jonas/Community Brands/PowerSchool; bootstrapped corp L&D + India/Brazil/EU vertical SaaS rich veins; library SaaS sleepy bootstrapped; tutoring/music school SaaS mostly rolled up except Port 443; hard floor 50/50 hit
- [E-commerce/retail-ops run 2026-06-10 — 49 prospects](ecommerce_retail_ops_run_2026-06-10.md) — most-consolidated territory yet; clean vein = bootstrapped ex-seller multichannel-ops tools (Ordoro/Etail/SkuNexus/Zentail/GoDataFeed/GeekSeller/Megaventory/ZhenHub); DQ multi-product Shopify-app holdings (CWILL/Shop Circle/HulkApps/Avada/The4) + AI-rebrands + $500K floor under-shooters
- [HR/people/talent ops run 2026-05-28 — 53 prospects across 21 sub-categories](hr_people_talent_run_2026-05-28.md) — bootstrapped EU/India/Bangladesh recruiting/ATS rich vein; PCRecruiter/ActionHRM/Workzoom (1990s-2000s founder-owned), Tability/Weekdone/Hirebook (OKR SMB), Vacation Tracker/Timetastic/Buddy Punch/Beebole/TimeCamp (bootstrapped PTO/time tracking), Adaface/Vervoe/CodeSubmit/Bryq (skill assessment); ~30 DQ for acquisitions in last 24mo (Sapling→Kallidus, WorkBright→Arcoro, Boundless→Payoneer, Trustcruit→Jobylon, Pingboard/Officevibe→Workleap, Xref→SEEK); 3 in-flight DQ after stale GetLatka snapshots (Akrivia $3.7M→$21.1M); GetLatka company-name-first verification + `[name] acquired` precheck saves cycles
- [Content/asset/media management run 2026-05-28 — 50 prospects across 15+ sub-categories](content_asset_media_territory_2026-05-28.md) — DAM/PIM/CMS/proofing/video/translation/virtual tour all hit; Netherlands DAM cluster (Storyteq, Marvia, Pics.io), Australia/NZ proofing (PageProof, GoVisually, Aproove, Filestage, Boords), bootstrapped indie translation (Locize Switzerland, Tolgee Czech, SimpleLocalize Poland), virtual tour SaaS fresh vein (CloudPano, EyeSpy360, Kuula); Tiugo Technologies + saas.group multi-product holdings — auto-DQ; 2 in-flight dups (usersnap acquired saas.group + spotlightr-vooplayer same-product); TMS/Melograno parent caught Trafft already in → Amelia + wpDataTables DELETED
- [Customer feedback/VoC/user-research run 2026-05-28 — 33 prospects of 50 hard floor](customer_feedback_voc_run_2026-05-28.md) — heaviest-consolidated territory mined to date in 2026; 3 rollup waves (Contentsquare absorbed Hotjar/Heap/Loris; Qualtrics absorbed Forsta+InMoment+Press Ganey $6.75B Oct 2025; Cisco/SAP/etc opportunistic); EU bootstrapped survey/research cluster (Condens, UXtweak, Survalyzer, Survio, Userbrain, Riddle, Feedier, Feedbackly, Pointerpro, Mopinion, Useberry) is the cleanest vein; AI-native rebrand wave hit 13+ candidates (Kraftful, Notably, Birdie, Productlane); held quality over padding to 50 — recommend dropping hard floor to 30 for this category; consider relaxing solo-founder DQ rule (SurveyPlanet JR Wurster, FeatureUpvote Steve McLeod) for genuinely high-ARR solo plays in feedback space
- [Creative-source sweep run 2026-06-10 — 9 net-new of 50 target (big shortfall, quality held)](creative_sweep_run_2026-06-10.md) — Acquire.com/Practical Founders/SaaS Club/Starter Story/MicroConf pool is heavily pre-mined (>60% dedup, rest mostly acquired/over-ICP/VC/AI-native); Starter Story category pages + GetLatka best; named-candidate verification only efficient path; batched check.py dedup-miss created a tallyfy duplicate (verify single-id before each append)
- [Vertical-SaaS run 2026-06-10 — 50/50 added](vertical_saas_run_2026-06-10.md) — niche-retail/service verticals (print/sign/jewelry/consignment/repair/gun/catering/childcare) richest bootstrapped vein; field-service a graveyard; Fullsteam/Vehlo roll-up watch; dedup-checker key-drift bug created campium+propet dups (replaced w/ thorovet+commit-swimming)
- [Vertical-SaaS TOP-UP run 2026-06-10 — 23 net-new of 38 target](vertical_saas_topup_2026-06-10.md) — fresh field-service/back-office verticals; GetLatka by-industry indexes the workhorse (courier-software index = 8 sub-$5M no-funding hits); courier/freight/logistics-ops clean vein vs trades-dispatch graveyard; niche back-office (HOA/self-storage/janitorial/scrap/pharmacy/dental-lab/museum) survives bootstrapped; ALWAYS verify GetLatka "no-funding" via acquired/funding (stale: Cordic→CabFusion, QuikStor, OpenCampground); held $500K floor, did NOT pad to 38; per-candidate guard caught 1 concurrent-sourcer dup (paw-partner)
- [Intl-bootstrapped run 2026-06-10 — 50/50 added across 18 non-US countries](intl_bootstrapped_run_2026-06-10.md) — GetLatka country-page `?cap=small/mid` + per-company name-verify is the workhorse for non-US bootstrapped; Ukraine data/SEO + Eastern-EU workflow/PM + Estonia profitable + Philippines vertical + Bangladesh WP + Egypt ERP richest veins; DQ-first checks: public-listed hiding as "bootstrapped" (TextMagic/iPresso/Safeture on local Nasdaqs), rule#6, recent acquisitions, multi-product parents (Startise), B2C creep, dev-agency/nonprofit/accelerator non-SaaS; 39/50 LinkedIn verified, 11 left literal `unknown` (never guessed); France/India/Germany GetLatka pages timeout on WebFetch
- [Subscription/billing/revenue-ops run 2026-05-28 — 50 prospects across 9+ sub-categories](subscription_billing_territory_2026-05-28.md) — heavy 2024-2026 consolidation (Recharge+Skio $105M, Stripe+LSqz, Yotpo-subs sunset, Awesome Motive+Sandhills, StellarWP collapse); Polar/Lago/Hyperline/Schematic/Sequence all VC-DQ; surviving bootstrappers cluster around (1) Indie devs in low-cost markets (India: Pabbly/Putler/WiserReview/Salonist/Recurpay; Vietnam: PageFly/Avada/Subi; Eastern EU: Voucherify/Tridens), (2) ex-engineer solo-bootstrap (Foxy/SendOwl/MoonClerk/ChargeOver), (3) Caseproof/Stranger Studios indie multi-product, (4) Shopify subscription post-Yotpo migration wave (Subi/Easy-Subscriptions/Awtomic/Utterbond). 8 in-flight dups from concurrent sourcers (rivo, repurpose-io, vendoo, cratejoy, bookwhen, pabbly, reditus, affilimate, booqable). One catastrophic single-clause update incident nuked 14 rows; recovery took 60+ min. Disambiguation rule documented.

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

- 2026-05-28 (50-prospect deep-dive across 8+ sources): **50 net new added of 50 required (hard floor)**. ~150+ candidates evaluated, ~70+ DQ. Prospects tab 437 -> 489. LINEAR_SKIPPED. See `agents/sourcing-runs/2026-05-28-50-prospect-deep-dive.md`. Source mix: getlatka-bootstrapped 14, indie-niche-saas 9, g2-veteran-* 8, vertical 7, others 12. Key learnings: (1) Indie podcast-creator tools (Alitu, Podpage, Captivate) form tight ICP cluster — all bootstrapped, $1-5M ARR, niche under AI-native threat. (2) WordPress-adjacent paid SaaS (WP Fusion, LifterLMS) is clean Profile A vein — engineers since 2014-2015, ~10 employees, $500K-$2M ARR. (3) EU bootstrapped clusters under-leveraged: Belgium (Salesflare, Customerly, Tally already), Estonia (Featurebase), Netherlands (Booqable, ConvertCalculator), Germany (Smoobu, Affilimate), Spain (Heepsy, Mailsuite/Mailtrack). (4) Family-owned vertical SaaS (Akada since 1994, BNTouch since 2004) under-sampled and high-fit. (5) GetLatka remains fastest ARR+team+funding verification — name candidate then search. (6) DQ rule #6 (>$10M raised + <$5M ARR) hit Tonkean, Loops.so, Vimcal, Slite, Tella. (7) Multi-product holding parent DQ caught Awesome Motive, StellarWP/Liquid Web, SaaS Labs, Togetherwork, EverCommerce. (8) **Two accidental in-flight duplicates** created via append-then-realize-existing — marked DELETED-DUP-DO-NOT-USE; going forward check dedup cache against company name AND id. (9) `$` shell-escape gotcha hit every batch — always append with placeholder then `update --set 'notes=...'` with single-quoted final text.
- 2026-05-19 (all, campaign batch 5): 30 added of 30 requested. ~55 evaluated, 1 dupe (uku), ~24 DQ. Prospects tab 402 -> 432. Campaign complete (100-lead target met). LINEAR_SKIPPED. See `agents/sourcing-runs/2026-05-19-all-batch5.md`. Key learnings: (1) Niche vertical practice-management SaaS is the richest under-mined vein — equine (BarnManager, Stable Secretary), funeral homes (Osiris), optometry (Eye Cloud Pro), dental (Oryx, iDentalSoft), speech therapy (ClinicNote), chiropractic (ECLIPSE), hospice (Hospice Tools) all produced clean founder-built bootstrapped sub-$5M fits. (2) Field-service software is heavily PE/holding-company consolidated — pool (Wise→Forterro), pest control (Fieldster→Teamfront), solar (SolarNexus→Solo), golf (Club Caddie→Jonas/Constellation), janitorial (Janitorial Manager under Double A Solutions multi-product parent). Towbook is a rare independent bootstrapper. Run "[name] acquired" + check for multi-product holding parents BEFORE qualifying any field-service candidate. (3) Govtech beyond municipal-ERP is consolidated (iWorQ over cap, GeoCivix→CivicPlus, permitting fully rolled up); parks-rec (MyRec.com) is the exception. (4) Religious/community org software has genuine independents — Flocknote (ESOP, no VC), ChurchTrac (no VC but $8M over cap). (5) Brewery/winery is a healthy cluster — Breww, BrewPlanner, VinesOS all independent. (6) Solo-founder companies (Yardbook, PantrySoft, Sparkie) DQ'd per memory rule. (7) AMS consolidated under Community Brands but Novi AMS + StarChapter remain independent.
- 2026-05-19 (all, campaign batch 4): 14 added of 30 requested. ~46 evaluated, 1 dupe, ~31 DQ. Prospects tab 388 -> 402. Held hard at 14 verified fits — caller-requested fresh verticals (legal/insurtech/construction/govtech/agtech/events/restaurant/manufacturing/GRC/HR/marketing-ops) are heavily consolidated. LINEAR_SKIPPED. See `agents/sourcing-runs/2026-05-19-all-batch4.md`. Key learnings: (1) Govtech is a NEW productive vein — bootstrapped sub-$5M fits like GovPilot ($0 funding, $3.5M) and Citizenserve (no funding, since 2002) exist alongside the usual mega-players (OpenGov $128M, GovOS 176 emp). (2) Events tech is fully consolidated above ICP or acquired (Swoogo, Hubilo→Brandlive, Attendease→Tripleseat, Eventzilla→Zoho) — skip category in future. (3) Legal tech still the most consolidated vertical; LeanLaw is a rare independent survivor. (4) Construction field/estimating has true bootstrappers (SiteMax, Contractor Foreman, Clear Estimates) but also heavy VC (FieldPulse $79M, Buildxact $33M, Fulcrum $18.8M). (5) DQ rule #6 (>$10M raised, <$5M ARR) hit Govly ($13.1M/$2.1M) and several manufacturing/restaurant players — still doing real work.
- 2026-05-19 (all, campaign batch 3): 7 added of 30 requested. ~28 evaluated, 4 dupes, ~17 DQ. Prospects tab 381 -> 388. Held hard at 7 verified fits rather than padding — target categories were heavily consolidated. LINEAR_SKIPPED. See `agents/sourcing-runs/2026-05-19-all-batch3.md`. Hospitality PMS cluster (Cloudbeds/Mews/Hostaway/Lodgify/Hospitable) is fully consolidated above ICP — skip category in future. "AI-native/AI-first" recruiting positioning (JuggleHire, Recruit CRM) is now a fast DQ signal. Practical Founders podcast guest archive remains highest-yield ICP-aligned source (surfaced BoosterHub + InsuredMine). Generic "bootstrapped SaaS for X" discovery searches return mostly listicles — naming specific companies then verifying per-company is far more efficient.
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

## Run cadence (continued)

- 2026-05-26 (all, rotation): 15 added of up to 30. ~35 evaluated, 8 dupes-detected-pre-add (hostme, aero-workflow, insuredmine, little-green-light, boosterhub, synder, tally, vimcal), ~12 DQ during search. Prospects tab 422 -> 437. LINEAR_SKIPPED. See `agents/sourcing-runs/2026-05-26-all.md`. Sources: practical-founders podcast (3), directory walks via GetLatka + G2 (12). Held at 15 vs padding to 30 since later candidates were uniformly over ICP. Categories newly sampled: subscription ecommerce (Cratejoy, Subbly), web data / data marketplace (Datarade, Coresignal), restaurant reservation (Resmio), nonprofit donor CRM (DonorDock), church management (ChMeetings), email productivity (Mailbutler), ecommerce iPaaS (APIWORX), no-code database (Stackby), construction PM (Linarc, Knowify), membership/association EU (VeryConnect).

## Disqualification additions (2026-05-26)

17. **"Bootstrapped to $10M+ but past 50 emp"**: Even with a strong narrative (TalkingParents, Boomerang/Baydin, Donorbox), if BOTH ARR and emp signals exceed ICP, skip. The Cliniko heuristic exception requires under-50-emp with strong "no investment by choice" signal. TalkingParents at $10M/65 emp fails this.

18. **WordPress plugin multi-product parents**: BuddyBoss → Awesome Motive Jul 2024. Awesome Motive runs WPBeginner + OptinMonster + WPForms + MonsterInsights + many more — treat as DQ #8 parent. Same pattern: saas.group, Banzai. Run "[name] acquired by" search for any WordPress plugin company > 5 years old.

19. **Service businesses framed as SaaS**: Founders Workshop (Vincent Serpico) is a software-dev AGENCY despite being Practical Founders podcast adjacent. Fraction (Praveen Ghanta) is a fractional ENGINEERING MARKETPLACE — high ARR ($10M) but not a SaaS product. Skip both per existing rule (dev agencies/consultancies and marketplaces aren't SaaS).

20. **GetLatka founder-mismatch trap**: 2026-05-26 run had multiple GetLatka entries with incorrect founder attribution (e.g., "Tyler Wright" attributed to ResNexus; actual founder is James Mayfield. "Lukas Sruoga" attributed to Coresignal; actual is unclear, possibly Andrius Žiūznys or different name). ALWAYS cross-reference founder identity via:
    (a) Company About page
    (b) LinkedIn search "Founder + [company name]"
    (c) Practical Founders podcast page if applicable
    Before recording contact_name in sheet.

## Source quality observations (2026-05-26)

- **Subscription ecommerce platform** category — under-sampled. Cratejoy ($4.1M / 15 emp / Amir Elaguizy / Y Combinator S13 originally) and Subbly ($1.4M / 17 emp / Stefan Pretty Scotland) both clean fits. Recharge is over ICP. Look at Bold Subscriptions, Submetrics, ReCharge alternatives in future runs.

- **Web data / data API** category — Datarade ($2.1M / 27 emp / Berlin / $1.23M raised) and Coresignal ($5.7M / 32 emp / Lithuania / $0 raised) are both fits. Apify is now $25M ARR / 160 emp — past ICP. The category has compressed in 2024-2025 with most providers either growing past $10M or getting acquired.

- **Restaurant reservation** beyond consolidated giants — Resmio (Berlin, $1.3M / 38 emp / $1M raised) is the rare independent. Most others are acquired (Tock→Amex, Resy→Amex, SevenRooms→DoorDash $1.2B). Hostme was already in our prospects list.

- **Membership/association software** — VeryConnect (Glasgow, $3.8M ARR / 33 emp / Kyle White / $0 raised) is a clean fit beyond what we already have (Novi AMS, StarChapter). Springly/AssoConnect raised $7.7M Series A — borderline. MemberClicks is part of Momentive Software — DQ.

- **Construction PM** — Linarc (San Jose, $8M / 25 emp / Shanthi Rajan / $0 raised) is a fresh independent. Tradify was acquired by The Access Group Oct 2024 (confirmed acquisition status that previous memory entries hadn't captured yet). Knowify is borderline ($6M / 19 emp / $8.45M raised — fails DQ #6 narrowly with ARR $6M vs threshold check).

- **Church management software** — ChMeetings (Jios Apps Inc, USA-based but team has international religious-ministry roots) is the under-sampled clean fit. Tithe.ly acquired Breeze ChMS Mar 2021 and is now $16M ARR (over ICP). Servant Keeper acquired by Faithlife (parent). ChurchTrac already in dedup. ChMeetings has 7K+ churches and seems genuinely independent — worth researcher's deeper dig to confirm.

## Slug conventions adopted in this run

- `apiworx` (no hyphens, all-caps branding maintained as company name but slug is lowercase)
- `donordock` (single word per branding)
- `linarc` (single word)
- `veryconnect` (single word per branding)
- `datarade` (single word, kept .ai out of slug per memory rule)
- `craftybase` (single word per branding)
- `chmeetings` (single word per branding)
- `coresignal` (single word per branding)
- `hostfully` (single word per branding)
- `cratejoy` (single word per branding)
- `subbly` (single word per branding, .co stripped)
- `resmio` (single word per branding)
- `knowify` (single word per branding)
- `stackby` (single word per branding)
- `mailbutler` (single word per branding, .io stripped)

## Categories now sampled — update sourcing.md going forward

- Subscription ecommerce platform — 2 added this run (Cratejoy, Subbly; previously only had Sumtracker for adjacent SMB ecommerce inventory)
- Membership / association SaaS EU — 1 added (VeryConnect; previously Novi AMS, StarChapter were US-only)
- Web data / data API marketplace — 2 added (Datarade, Coresignal)
- Restaurant reservation — 1 added (Resmio; previously only hostme in dedup)
- Nonprofit donor CRM — 1 added (DonorDock; previously flocknote, giveffect were religious/community-adjacent)
- Church management — 1 added (ChMeetings; previously flocknote was the main one)
- Manufacturing for DTC makers — 1 added (Craftybase; previously Sumtracker for SMB ecommerce inventory but this is craft-specific)
- Vacation rental / STR PMS — 1 added (Hostfully; previously hostme was the closest)
- Construction PM with workflow heavy — 2 added (Linarc, Knowify; previously contractor-foreman, sitemax, jobtread; this fills a gap)
- Email productivity extension — 1 added (Mailbutler; previously mailmeteor, mailersend for sending, but no inbox-augmentation)
- Ecommerce integration / iPaaS — 1 added (APIWORX; previously albato, syncspider, latenode covered iPaaS but not ecommerce-specific)
- No-code database / Airtable alt — 1 added (Stackby; previously noloco, stacker, fusebase for no-code but not pure-database)

**Next under-sampled to mine**: K-12/private school SIS beyond what's in dedup (Sycamore-class incumbents are PE; founder-led indies exist), salon/spa booking (Mindbody alternatives), childcare SaaS (independents beyond Brightwheel), salon/spa booking, agtech beyond Cropin-scale incumbents, dental practice management beyond Oryx/iDentalSoft (already in dedup), veterinary practice management beyond shepherd-vet (already in dedup), HR tech for SMB beyond charliehr (already in dedup), B2B marketplaces (still consolidated heavily).

## Run cadence (continued) — 2026-06-02 (all rotation)

- 2026-06-02 (all, rotation): **8 added of ~15**. ~12 DQ during scan; 3 dups (storeganise, stora, 6storage — self-storage fully mined). Prospects tab 1235 -> 1243 (1224 -> 1232 unique ids). LINEAR_SKIPPED (no .mcp.json). See `agents/sourcing-runs/2026-06-02-all.md`. Held at 8 high-quality fits vs padding — remaining candidates in target veins were over-cap, VC-heavy, or acquired. Source tag on rows = `directory`. Adds: irancho (Brazil ranch ERP $3.5M/38emp, founder now CTO), farmqa (Fargo crop scouting $1.9M/17emp bootstrapped), rezgo (Vancouver tour booking ~$6.2M, Cliniko-exception, female founder since 2005), kennelbooker (Dublin kennel, no funding), bookeo (Sydney booking, bootstrapped since 2010, female co-founder, ARR borderline), dr-dispatch (Springfield MO trucking TMS since 1993), hirehop (London equipment rental, indie), caterzen (Nashville catering, $30K-bootstrapped founder Michael Attias).

### Key learnings 2026-06-02
1. **GetLatka AND Tracxn now 403 to WebFetch** (new — previously only AppSumo/PH). GetLatka country/industry/company pages all blocked direct. WORKAROUND: GetLatka revenue/team snippets still surface inside WebSearch result summaries, so `[company] revenue employees getlatka 2024` queries remain usable indirectly. Per-company WebSearch verification (`[name] founder revenue employees funding acquired`) is the only reliable workhorse now.
2. **Agtech (farm/ranch management) is a fresh, healthy bootstrapped vein** — under-sampled before this run. $1.5-3.5M bootstrapped indies persist: FarmQA (US, Howard Dahl, only $250K seed), iRancho (Brazil, Thiago Parente, ~$5M debt+CVC). Category compresses fast above $5M or rebrands AI-native (Trellis→BlueCircle.ai — DQ). Brazil agtech (Banco do Brasil / BB Ventures CVC ecosystem) is a fresh sub-vein.
3. **Tour & activity booking** consolidates hard (Resova→Clubspeed 2022, FareHarbor→Booking Holdings, Conservis-style rollups). Survivors are intentionally-bootstrapped independents: Rezgo (2005, June Ohashi) + Bookeo (2010, Mariana Freitas) — both female-founded, subscription/commission-free models. Worth a future female-founder-angle deep dive.
4. **Pet boarding/kennel** (distinct from grooming) has clean indies — KennelBooker (Dublin, no funding). Grooming side is VC-heavy (MoeGo $40M). ProPet/Paw Partner already in pool.
5. **Trucking SMB TMS**: Dr Dispatch (since 1993, Rick Holland) is a true bootstrapper; Truckbase is VC (Trucks VC). Always run acquisition+funding check first.
6. **Equipment rental** mostly large/PE (Point of Rental, Texada, EZO $29M, TSD $19M, Twice). HireHop (London) is the rare affordable indie. **Catering** is a tiny category (~15 companies, $59M combined) — CaterZen the clean founder-led indie ($30K bootstrap).
7. **Self-storage is now FULLY mined** — Storeganise, Stora, 6Storage all already in pool. Drop from future sampling.
8. DQ patterns reconfirmed: saas.group acquisition (CleanCloud→sek.io/saas.group), Clubspeed rollup (Resova), Telus/Rabobank (Conservis), AI-native rebrand (Trellis→BlueCircle.ai), DQ#6 (Barn2Door $16M/$3.1M, AgriDigital VC).

### Next under-sampled to mine (updated)
- Still-fresh veins NOT yet exhausted: agtech beyond this run (livestock/dairy mgmt, irrigation, vineyard — Brazil/AU/NZ/India clusters), tour-operator female-founder angle, niche field-data/inspection (home/commercial inspection indies under $5M — Spectora is over cap but smaller indies exist), waste/recycling hauler software, parking/valet software, dance/martial-arts beyond martialytics, pool/spa beyond pool-brain.
- AVOID (mined out / consolidated): self-storage (done), customer feedback/VoC (done 2026-05-28), subscription/billing (done), salon/spa booking (Mangomint VC, GlossGenius VC, Vagaro/Fresha huge — almost nothing indie left), childcare (Brightwheel/Lillio/Famly all VC or large).

## Run cadence (continued) — 2026-06-09 (all rotation)

- 2026-06-09 (all, rotation): **9 added of ~15**. ~11 DQ during scan; 3 in-pool dups (lawnpro-software, towbook, punchpass, sprout-studio, studio-ninja — niche service-trade SaaS partially mined already). Prospects tab 1243 -> 1252. LINEAR_SKIPPED (no .mcp.json). See `agents/sourcing-runs/2026-06-09-all.md`. Source tag on rows = `directory`. Held at 9 quality fits vs padding. Adds: starlight-software (Denver waste/recycling hauler SaaS, $4.1M/~32emp, Bill Bradley founder runs 5280 Waste, ~$1.1M unattributed only), innovint (Portland winery OS, $3.1M/34emp, Ashley Leonard female founder NO VC), vts-systems (Magnolia TX towing/storage, $3M/~15emp, Pestell father-son since 2002 self-funded), classjuggler (San Ramon class/studio mgmt, ~30emp 11-50, Jon Koerber CEO, no funding), pool-service-software/PSS (Fort Lauderdale pool ops, 1-10emp, Gustavo Velez CEO), cloudspot (Irvine photographer biz platform, $1.2M/11emp, Gavin Wade, only $400K raised since 2014), cleanguru (janitorial bidding/CleanBid, ~10emp, Dan Liebrecht ex-janitorial-owner bootstrapped), argos-software (Fresno agribusiness/3PL ERP ABECAS, $5.6M/24emp, founded 1979 family-owned no funding — Cliniko exception borderline over cap), datawing (Hove UK funeral/cremation/cemetery SaaS, 24yrs, Datawing Ltd #07650812).

### Key learnings 2026-06-09
1. **Waste/recycling hauler software is a fresh, healthy vein** — Starlight (Denver, $4.1M, founder Bill Bradley still runs the 35-truck hauling co 5280 Waste — textbook founder-operator) is the clean fit. DQ the VC entrants: TrashLab (Harlem Capital seed $3-4M raised on $1.5M ARR, AI-positioned, DQ#6). Trash Flow (1985) + WAM Software (35yrs) are older privately-owned — worth a future check (couldn't confirm SaaS vs on-prem). CRO Software, Routeware over-cap/PE.
2. **Towing/vehicle-storage SaaS** — VTS Systems (Magnolia TX, Pestell father-son since 2002, $3M, self-funded) clean. Autura/Omadi → Traxero rollup (DQ). Towbook already in pool. Distinct from trucking TMS (Dr Dispatch, mined 06-02).
3. **Winery/vineyard ops** — InnoVint (Portland, Ashley Leonard, $3.1M/34emp, NO funding) is the standout clean female-founder bootstrapped fit. vintrace/eVineyard, Process2Wine, Amphora, vinCreative, 360Winery not yet verified — winery vein has more to mine (category ~$68.5M combined / 12 companies per GetLatka).
4. **Photographer business platforms** — CloudSpot (Gavin Wade, $1.2M, only $400K raised) clean. Sprout Studio + Studio Ninja already in pool. Picsello, Pixsoffice, CloudSpot's space has indies; Pixieset is the big one. Sprout/Studio-Ninja dedup means this vein is partially mined.
5. **Class/studio/activity mgmt (dance/gym/swim/music)** — ClassJuggler (San Ramon, Jon Koerber, no funding, 11-50) clean. iClassPro, Jackrabbit, Pike13, Jumbula NOT yet verified (some likely PE/large). Punchpass + Martialytics + Gymdesk already handled (Gymdesk now PE — Five Elms 2024, DQ). Vein has more to verify.
6. **Niche service-trade SaaS DQ patterns this run**: Gymdesk → Five Elms PE majority (2024, $32.5M exit). Herdwatch → Renatus+ISIF, 80+emp, roll-up (4 acquisitions). Palmtech + Inspection Support Network → Porch (multi-product parent). Urable → Fullsteam (2025). Granum (LMN/SingleOps/Greenius) roll-up. POOL360 → PoolCorp. Tekmetric/Shopmonkey/AutoLeap all VC-heavy ($79M+) — **auto-repair/tire-shop vein is VC-saturated, skip in future.**
7. **Janitorial/cleaning ops** — CleanGuru/CleanBid (Dan Liebrecht, ex-owner, bootstrapped) clean. Janitorial Manager → Double A Solutions multi-product parent (memory DQ, reconfirmed). JanBid is one-time-license (not SaaS). Swept not verified. Small vein.
8. **Funeral/cemetery/bereavement SaaS** — fragmented, mostly tiny/opaque ARR. Datawing/Life Events (UK, 24yrs) included as established indie. Sacred Grounds (Nick Jain solo, $49/mo) too early — held off. Osiris already in pool. EDGE IT/Epitaph, Tribute Tech (consolidator) not verified. Low-confidence vein — researcher must confirm scale on funeral picks.

### Next under-sampled to mine (updated 2026-06-09)
- Still-fresh / partially-mined (more to find): winery/vineyard ops (Process2Wine, Amphora, vinCreative, 360Winery unverified), class/studio mgmt (iClassPro, Jackrabbit, Pike13, Jumbula, Pembee unverified — vet for PE first), waste-hauler (Trash Flow, WAM Software — confirm SaaS), commercial/home inspection indies under $5M (Spectora over cap; smaller indies exist beyond Palmtech/ISN-Porch), beekeeping/aquaculture/greenhouse agtech (BeeGuard, BeeKeepPal, Navfarm small — ARR opaque).
- AVOID (mined out / consolidated): self-storage (done), customer feedback/VoC (done), subscription/billing (done), salon/spa booking, childcare, **auto-repair/tire-shop (NEW — VC-saturated: Tekmetric $79M, Shopmonkey, AutoLeap)**, parking/valet (CVPS/FlashParking/AVPMi mostly agency-built or established — no clean indie surfaced this run).


## Run cadence (continued) — 2026-06-16 (all rotation)

- 2026-06-16 (all, rotation): **7 added of 15 default**. ~9 DQ during scan; 2 in-pool dups (scrapright, catalogit). Prospects tab 1487 -> 1494 unique ids. LINEAR_SKIPPED (no .mcp.json, reconfirmed). See `agents/sourcing-runs/2026-06-16-all.md`. Source tag on rows = `directory`. Held at 7 quality fits vs padding. Adds: vincreative (Brisbane AU winery DtC, ~11emp, CEO Mike Whitehouse/Aspedia), jumbula (class registration mgmt, founder Jalal Feghhi, bootstrapped, founded 2013), trash-flow (Ivy Computer waste hauler, Waterbury Center VT, George Pierce President, ~50emp since 1986), wam-software (Reno NV waste hauler billing, 11-50emp, no funding since 1985), cattleytics (Ontario dairy herd mgmt, Dr Shari van de Pol female founder, ~$1.4M ARR profitable no-VC since 2014), boatyard (marina/boatyard service platform, Ben Clawson, ~$2.5M/21-50emp, only $120K raised since 2014), turf-assistant (golf turf maintenance, independent — NOT the acquired taskTracker).

### Environment fix 2026-06-16
- **`scripts/sheet.py` crashed on first call: `ModuleNotFoundError: No module named '_cffi_backend'`** (cryptography 41.0.7 imports cffi which was missing from the image). Fix: `pip3 install cffi` (installs cffi 2.0.0 + pycparser 3.0). After that, reads/appends all succeed. If a future run hits this, install cffi first — do NOT treat it as a hard-stop Sheet-access failure.

### Key learnings 2026-06-16
1. **Waste-hauler "confirm SaaS" follow-up from 06-09 resolved: BOTH Trash Flow + WAM Software are clean adds.** Trash Flow = product of Ivy Computer Inc (Waterbury Center VT, founder/President George Pierce, ~50 emp, since 1986, 1000+ installs, explicitly offers SaaS pricing). WAM Software = Reno NV, 11-50 emp, no funding, since 1985. Both privately-owned established indies — not acquired, not PE. Waste-hauler vein now has starlight-software (06-09) + trash-flow + wam-software + scrapright (dup). ReMatter/ScrapWare/Scrap Dragon/CRO/Routeware still unverified — CRO/Routeware over-cap/PE.
2. **Winery vein: vinCreative added (was "not yet verified" on 06-09).** Brisbane AU, ~11 emp, CEO Mike Whitehouse, run by Aspedia Australia, DtC-focused (CRM+ecommerce+wine-club+POS). **eVineyard ACQUIRED by vintrace Dec 2025 — DQ; vintrace is now actively consolidating the vineyard/winery vein.** Watch vintrace/Encompass Technologies as the winery roll-up parent going forward.
3. **Class/studio mgmt vein: Jumbula added (clean bootstrapped, founder Jalal Feghhi 2013).** iClassPro ($5.7M/51-96emp) and Jackrabbit Technologies ($13.5M/112-128emp) are BOTH bootstrapped but BOTH over ICP caps — DQ. classjuggler already in pool (06-09). Pike13/Pembee still unverified.
4. **NEW fresh vein — marina/boatyard mgmt.** Boatyard (Ben Clawson, founded 2014, ~$2.5M ARR, 21-50 emp, only $120K raised) is the clean indie. DockMaster (40yr, 1000+ marinas — verify scale), Dockwa (VC), Molo, Harbour Assist, Marina Master (Slovenia) unverified. Worth a future deeper marina dig.
5. **NEW fresh vein — dairy/livestock herd mgmt.** CATTLEytics (Dr Shari van de Pol — comp-eng + large-animal vet, female founder, ~$1.4M ARR, profitable Dec 2025, no-VC/grants-only, founded 2014) is the standout. DQ patterns: Farmeron -> acquired by Virtus Nutrition 2016; MilkStraw AI -> AI-native (name+positioning, founded 2023, DQ#7); Herdwatch -> roll-up. VAS (Valley Ag Software) is the large incumbent. Beef/cattle side (FarmKeep, MilkingCloud) unverified.
6. **Golf turf maintenance — caution: Clubessential/Xplor is consolidating.** ASB taskTracker ACQUIRED by Clubessential May 2024 (now Xplor Golf & Club portfolio w/ foreUP, BlueGolf). Turf Assistant (added) appears independent — competitor of the acquired taskTracker, built by golf-industry pros. Always run "[name] acquired Clubessential/Xplor" on any golf-vertical candidate.
7. **DQ-first verification keeps paying off:** running "[name] acquired" / "[name] funding" BEFORE recording saved 3 bad adds this run (taskTracker->Clubessential, eVineyard->vintrace, Farmeron->Virtus). Verify founder/acquisition BEFORE append.

### Next under-sampled to mine (updated 2026-06-16)
- Still-fresh / partially-mined: marina/boatyard (DockMaster, Molo, Harbour Assist, Marina Master unverified), dairy/cattle herd (FarmKeep, MilkingCloud, beef-side unverified), commercial/home inspection indies under $5M (GoAudits, Property Inspect, Inspect2go unverified; InspectorData AI-native/solo — held), aquaculture (KAMAHU too small at 3 emp; AquaManager/AquaTracker same team unverified), beekeeping/greenhouse-horticulture agtech (HortiBench, ET Grow, Mprise Agriware unverified — ARR opaque), scrap/recycling beyond waste-hauler (ReMatter, ScrapWare, Scrap Dragon unverified).
- AVOID (mined out / consolidated): self-storage, customer feedback/VoC, subscription/billing, salon/spa booking, childcare, auto-repair/tire-shop (VC-saturated), parking/valet (reconfirmed 06-16: FlashParking/Parking Base enterprise, Peek-class VC — no clean indie), pest control (NEW — PestRoutes $10.8M/120emp over cap, rest VC/consolidated), winery/vineyard now actively rolling up under vintrace (eVineyard acquired) — verify acquisition first.

## Run cadence (continued) — 2026-06-23 (all rotation)

- 2026-06-23 (all, rotation): **5 added of 15 default**. ~16 DQ during scan; 1 in-pool dup (teesom, caught at final dedup check). Prospects tab 1494 -> 1499 unique ids. LINEAR_SKIPPED (no Linear MCP tools exposed in session; no .mcp.json — reconfirmed). cffi already present this session (no ModuleNotFoundError). See `agents/sourcing-runs/2026-06-23-all.md`. Source tag on rows = `directory`. Held at 5 quality fits vs padding — the fresh veins flagged on 06-16 (marina, inspection, aquaculture, beekeeping) turned out heavily consolidated/over-cap/below-floor. Adds: picas (The Picas Group/Innovative Software Solutions, Grand Rapids MI greenhouse/horticulture ERP, 1991, ~34emp, no funding), marina-master (IRM Ltd, Ljubljana Slovenia marina-resort mgmt, family-owned since 1992, no funding — the lone clean marina indie), cattlemax (Cattlesoft, College Station TX, Terrell+Penny Miller since 1999, $1M ARR/9emp GetLatka, never raised), embtrak (Greenville SC, Donald Brown president/founder, embroidery/screen-print shop mgmt since 1992, no funding), marteye (Galway Ireland, Mark McGann+Ciaran Feeney+Aaron Signorelli, livestock auction/mart live-stream + sale mgmt, 2020, no funding, €150M+ handled, 70+ marts).

### Key learnings 2026-06-23
1. **Marina/boatyard vein (06-16 "fresh") is actually heavily consolidated** — DockMaster->Valsoft(2017), Molo->Storable(2021), Harbour Assist->ClearCourse, Dockwa->Wanderlust-multi-product(+borderline $5.5M/47emp), aquaManager->Ocean14 PE minority(Nov 2024). Marina Master (IRM Ltd Slovenia, family-owned since 1992) is the ONLY clean independent. Downgrade marina from "fresh" to "consolidated — only Marina Master left."
2. **Prospeo "[X] Holdings" revenue figures are INFLATED rollups — always trust GetLatka per-company snapshot.** CattleMax: Prospeo said "Cattlesoft Holdings $12.7M" (would have wrongly DQ'd as over-cap); GetLatka per-company showed true $1M ARR / 9 emp. CattleMax is a clean $1M fit. Founder Terrell Miller also runs adjacent AgriCommerce ag-ecommerce sites (CattleTags/CattleScales/CattleDNA) — these are founder-owned adjacent properties, NOT a SaaS roll-up parent, so not a DQ#8 trigger.
3. **NEW fresh vein — apparel-decoration (screen-print/embroidery) shop mgmt.** EmbTrak (Greenville SC, Donald Brown, since 1992, no funding) clean. Teesom (Chris+Lincoln Waldick, owned by Abaco Business Investments LLC since 2022 — small family distributor, would've been clean) ALREADY IN POOL. shopVOX->Fullsteam(Aug 2025 — Fullsteam roll-up reconfirmed). Printavo/DecoNetwork/InkSoft/OnSite unverified (vet for VC/scale). More to mine.
4. **NEW fresh vein — livestock auction/mart software** (distinct from herd mgmt). MartEye (Galway, 2020, bootstrapped, subscription) clean — NOT AI-native, real workflow SaaS. Older privately-owned indies unverified: Sale Time Systems (1988), US Livestock Systems, ViewTrak, Amstar — confirm SaaS-vs-onprem + scale on a future check.
5. **Horticulture/greenhouse ERP** — Picas Group (Grand Rapids MI, 1991, ~34emp, no funding) clean. SBI Software (Portland OR, Aaron Allison, 2000, no funding) DQ'd on Tracxn 187-emp count — bootstrapped does NOT imply small; always check emp count even for unfunded firms.
6. **Restoration/mitigation contractor software is VC/consolidated — AVOID.** Albi (Series B Frontier Growth), Encircle ($9.9M over cap), iRestore->Urbint(2022). 
7. **Commercial/home inspection (06-16 "fresh") mostly over-cap or multi-product parent.** GoAudits $20.8M over cap; Property Inspect = built by Radweb (Steve Rad) which also runs InventoryBase = multi-product parent DQ#8. Downgrade inspection vein.
8. **Cattle herd-mgmt DQ reconfirmed**: PLA->Zoetis+$12M raised; Cattler $2M VC + AI-positioned; Herdly AI-native(DQ#7); Ranchr/Cattly/FarmKeep/HiveTracks likely sub-$500K floor (solo/small mobile apps, opaque ARR — held, did not guess).

### Next under-sampled to mine (updated 2026-06-23)
- Still-fresh / partially-mined: apparel-decoration shop mgmt (Printavo, DecoNetwork, InkSoft, OnSite, ProfitMaker unverified — vet VC/scale first), livestock auction/mart (Sale Time Systems, US Livestock Systems, ViewTrak, Amstar — confirm SaaS + scale), horticulture/greenhouse beyond Picas/SBI (Growflo UK, smaller nursery ERPs).
- AVOID (mined out / consolidated): marina/boatyard (NOW consolidated — only Marina Master left), self-storage, customer feedback/VoC, subscription/billing, salon/spa, childcare, auto-repair/tire-shop, parking/valet, pest control, restoration/mitigation (NEW), commercial/home inspection (NEW — over-cap or multi-product parent), aquaculture (AquaManager->Ocean14 PE; rest tiny), winery/vineyard (vintrace rolling up).

## Run cadence (continued) — 2026-06-30 (all rotation)

- 2026-06-30 (all, rotation): **7 added of 15 default**. ~16 DQ during scan; 4 in-pool/same-parent dups (elromco, teachworks already in pool; printavo+inksoft same Inktavo PE parent; fastmanager = same JCW Software parent as in-pool teesom). Prospects tab 1499 -> 1506 unique ids. LINEAR_SKIPPED (no .mcp.json, no Linear MCP tools — reconfirmed). cffi present after `pip3 install cffi` at session start. See `agents/sourcing-runs/2026-06-30-all.md`. Source tag on rows = `directory`. Held at 7 quality fits vs padding. Adds: moveitpro (Orlando moving-co software, Jason Bergenske self-funded $700K/5yr, ~$5M ARR/35emp/800 customers, sold family moving biz 2020 to focus — textbook founder-operator), fast-weigh/Fastweigh (Knoxville TN bulk-material scale ticketing, TAC Insight LLC, Armando Mendiola 1988 → son Mike Mendiola + Steve Rasmussen cloud-rebuilt post-2014, self-funded, rebranded "Fastweigh" Jun 2026, new CEO Caitlin Pomeroy Nov 2025 but founders active), drive-scout (CA driving-school mgmt, exclusive DSAC provider, independent — founder unverified so contact left blank per rule 20), deconetwork (Brisbane AU apparel-decoration shop mgmt, CEO Adam Pentland, 10-50emp, no funding), managepetro (N. Vancouver BC fuel/propane delivery ERP, Ali Tavanayan CEO/founder since 2016, NewVenturesBC Top25), dancecomp-genie (Coquitlam BC dance/cheer competition+studio mgmt, Inchol Solutions, Elliot Malman CEO, ~70% NA event-producer share, 11-50emp, no funding), linentech (Myrtle Beach SC commercial-laundry mgmt, Adnan "Danny" Hassan CEO/founder since 2015, ~20emp, unfunded, 250+ laundries).

### Key learnings 2026-06-30
1. **06-23 "fresh" veins mostly DQ'd**: apparel-decoration now consolidated (Inktavo PE roll-up = Printavo+InkSoft+GraphicsFlow+SignTracker+Clarity, merged w/ OrderMyGear Oct 2025; ShopWorks→Fullsteam Apr 2022; FastManager=same JCW parent as in-pool teesom). Livestock-auction (Sale Time, US Livestock Systems, Amstar, saleG8/MYCO) = opaque ARR, likely sub-$500K floor or on-prem license — held all. ViewTrak→TrustBIX (public). Horticulture: Growflo's parent Output Digital is a Belfast dev AGENCY (DQ-leaning). DecoNetwork (AU) the lone clean apparel-decoration net-new — vein now nearly mined out.
2. **NEW productive vein — bulk-material/delivery-logistics vertical SaaS** (scale ticketing + fuel/moving delivery). Founder-operator pattern dominates the clean fits: MoveitPro (Bergenske, ran the family moving co), Fastweigh (Mendiola family, scale houses), ManagePetro (Tavanayan, ex-CTO of a fuel-services co). DQ-first caught the consolidators: SMSTurbo/CIS→Valsoft, Trux→AMCS, SmartMoving→Mainsail $41.5M, LinenMaster→Mainsail+$16M+TEXO merger.
3. **Mainsail Partners rule #9 reconfirmed twice this run** (SmartMoving, LinenMaster) — always run "[name] Mainsail" on any "bootstrapped"-framed vertical SaaS in the $3-6M band. Mainsail loves exactly this profile.
4. **Same-parent dedup beyond id-match**: FastManager looked clean & net-new by slug, but its parent JCW Software also runs Teesom which is already in pool → skip (don't add a second product from a 2-product founder shop already represented). Check whether a candidate's parent already has a product in the pool.
5. **Fuel/propane delivery ERP is a fresh vein with more to verify**: ManagePetro added; FuelMor (Kelly Engel, ex-Shasta Gas Propane, productized 2020) held as likely-near-floor. Unverified next: ADD Systems, Red River Software, FleetPanda, BizSpeed. Worth a future dig.
6. **Dance/cheer COMPETITION mgmt is distinct from studio CLASS mgmt** (latter mined: classjuggler, jumbula, punchpass, martialytics). DanceComp Genie/Inchol added; CheerComp Genie is same parent. Comp-central (dancecompcentral.com) unverified.
7. **GetLatka/Tracxn/Crunchbase still 403 to WebFetch** — per-company WebSearch verification (`[name] founder revenue employees funding acquired`) remains the only workhorse; revenue snippets surface in WebSearch summaries. Worked cleanly all run.

### Next under-sampled to mine (updated 2026-06-30)
- Still-fresh / partially-mined: fuel/propane delivery ERP (ADD Systems, Red River, FleetPanda, BizSpeed unverified), bulk-material scale ticketing modern-cloud challengers (CloudAgg, awsys.com unverified — confirm scale), dance/cheer comp mgmt (Comp Central unverified), pet-crematory SaaS (Beloved Pet Software clean-but-tiny; Angelpaw over-cap).
- AVOID (mined out / consolidated): apparel-decoration shop mgmt (NEW — Inktavo PE roll-up + ShopWorks→Fullsteam; only DecoNetwork left), livestock-auction (opaque/sub-floor/on-prem or ViewTrak→TrustBIX), commercial laundry (LinenMaster→Mainsail/TEXO; only LinenTech indie), plus all prior: self-storage, customer feedback/VoC, subscription/billing, salon/spa, childcare, auto-repair/tire-shop, parking/valet, pest control, restoration/mitigation, commercial/home inspection, aquaculture, marina/boatyard, winery/vineyard (vintrace rolling up).

## Run cadence (continued) — 2026-07-07 (all rotation)

- 2026-07-07 (all, rotation): **6 added of 15 default**. ~22 DQ during scan; 0 in-pool dups (all 6 ids net-new on first check). Prospects tab 1538 -> 1544 unique ids. LINEAR_SKIPPED (no Linear MCP tools exposed in session — reconfirmed). Needed `pip3 install cffi` at session start (ModuleNotFoundError `_cffi_backend`, cffi 2.1.0 installed). See `agents/sourcing-runs/2026-07-07-all.md`. Source tag on rows = `directory`. Held at 6 quality fits vs padding. Adds: bizspeed (Alpharetta GA petroleum/fuel delivery dispatch SaaS goRoam, Chris Henry CEO/co-founder + Doug Hollowell COO, ~$3.8M/11-18emp, privately held not acquired), food-corridor (Fort Collins CO shared commercial-kitchen mgmt, Ashley Colpaart female PhD founder, $1.3M ARR/12emp, only $555K seed 2018 never raised again), blueprint-oms (Toronto audiology/hearing-clinic practice mgmt, Aleem Sunderji founder since 2005, no funding, 19 countries, NOT owned by Demant), busypaws (Canada pet-care-facility mgmt dog daycare/boarding/training/grooming, bootstrapped since 2020 client-funded, co-founders Nathan+Lauren, ARR unknown-flagged), reiter-software (Grand Junction CO used-cooking-oil/grease-trap route ERP "COST", Kristof Reiter founder since 2007, adjacent Trading/Consulting = same-industry founder-owned not roll-up), inflatableoffice (Akron OH inflatable/party-rental mgmt SaaS, owner Timothy Beck, ~2000 rental biz, rev ~$5.2M borderline-over-cap Cliniko-exception small team ~20).

### Key learnings 2026-07-07
1. **Fuel/propane delivery ERP (flagged 06-30) partially productive — now mostly exhausted.** BizSpeed (Alpharetta, ~$3.8M, privately held, Chris Henry) = the clean add. DQ-first killed the rest: ADD Systems (150+ emp over-cap), Red River Software (Cultura/Constellation Software public parent), Blue Cow Software (→PDI Technologies acquired), FleetPanda (VC, ex-Amazon/Salesforce team), Cargas Energy (Cargas Systems ESOP + MS-Dynamics consulting multi-product), FuelMor (launched 2017, likely near-floor). Fuel vein now near-mined.
2. **NEW fresh vein — shared/commissary kitchen management.** The Food Corridor (Ashley Colpaart, $1.3M/12emp, $555K-seed-only) clean. Spacebring (coworking+kitchen, verify), Food Corridor is the standout. Ghost/cloud-kitchen software adjacent (Spacebring) worth a future check.
3. **NEW fresh vein — audiology/hearing-clinic practice mgmt.** Blueprint OMS (Aleem Sunderji, Toronto, since 2005, no funding, 19 countries) clean. DQ: Sycle (8,000 clinics, large/consolidated), Auditdata (Danish, part of hearing-industry group). amplifyOMS (Dusty Potter, practice-owner-built) newer/smaller — future check. Blueprint NOT owned by Demant (integration partner only — don't false-DQ).
4. **NEW productive vein — auto-glass / auto-recycling / salvage-yard vertical.** BUT heavily consolidating: Mainstreet Computers/Glas-Avenue → Convenient Brands (multi-product auto SaaS parent, DQ); CRUSH Software (self-service auto-recycling, founders Gerontis+Mantas since 2010) ACQUIRED/recapitalized Oct 2025 by ownership group (family offices of Tom Klauer Jr + Kendig Kneen, new CEO Ryan Paterson, +$3M) — DQ. YardSmart + AutoRecycler.io newer indie entrants (verify floor/scale on a future dig).
5. **Party/event/inflatable rental — Goodshuffle is VC ($10.7M), InflatableOffice is the bootstrapped indie.** InflatableOffice (Timothy Beck, Akron OH, ~$5.2M, ~2000 biz) added under Cliniko exception (borderline just-over-cap, small founder-owned team). Rentopian (custom-priced, verify), Jupiter Peak (ski/bike rental, likely near-floor). Party-rental clean-indie count is low — mostly one bootstrapped survivor per sub-niche.
6. **DQ-first "[name] acquired/funding/Mainsail/Constellation" precheck saved 5+ bad adds this run**: ServiceMonster→Teamfront, Docket→ServiceCore(Mainsail), ServeManager→InfoTrack/Lawgical, Flight Schedule Pro→Mainsail($61.9M), The Receptionist→Sign In Solutions(Jan 2026), Cropster→Verdane, Moraware($13M/25emp over-cap), Magic Touch($7-10M over-cap). Constellation/Cultura + Mainsail + Teamfront + ServiceCore + Convenient Brands + Verdane are the active vertical-SaaS roll-up parents in these niches.
7. **Reiter Software pattern — founder-owned adjacent same-industry properties are NOT a DQ#8 multi-product-parent trigger** (reconfirms CattleMax precedent 06-23). Reiter runs Software(COST)+Trading+Consulting all serving UCO/grease-trap collectors — one founder's industry ecosystem, not a SaaS roll-up. But it does mean the SaaS-specific ARR is likely a fraction of the group — flagged for researcher.
8. **Thin/dead veins this run (no clean surviving indie — AVOID going forward):** snow removal (multi-industry FSM only: Jobber/GorillaDesk/WorkWave), locksmith (same), trophy/awards (ShopWorks→Fullsteam + web-to-print dev-agency parents), notary ($39/mo solo tools, near-floor), tattoo studio (Porter already in pool as getporter; rest Mangomint/GlossGenius/Square/Fresha VC), pet-crematory (Beloved Pet tiny; rest opaque/on-prem), junk removal (Docket/ServiceCore + multi-industry FSM), vending (Cantaloupe public + 365 Retail Markets consolidated + hardware), car wash (DRB-owned Washify/Patheon + Rinsed VC), machine-shop/job-shop ERP (ECI JobBOSS/E2 + Global Shop large + StartProto VC), pottery studio (Kiln Fire/Classly near-floor), dog-training CRM (PetPocketbook likely solo/near-floor).

### Next under-sampled to mine (updated 2026-07-07)
- Still-fresh / partially-mined: shared/commissary/ghost-kitchen mgmt (Spacebring unverified), audiology beyond Blueprint (amplifyOMS newer), auto-recycling/salvage-yard indies (YardSmart, AutoRecycler.io, SalvageSoftware/The Yard Manager — verify floor + acquisition), bulk-material scale ticketing modern-cloud (CloudAgg, awsys unverified — still not checked), fuel/propane FuelMor + Cargas (near-floor/ESOP borderline).
- AVOID (mined out / consolidated / this run's dead veins added): fuel/propane ERP (now near-mined — only BizSpeed clean), snow removal, locksmith, trophy/awards, notary, tattoo studio, pet-crematory, junk removal, vending, car wash, machine-shop ERP, pottery studio, dog-training CRM, auto-glass (Convenient Brands rolling up), plus all prior: apparel-decoration (Inktavo), livestock-auction, commercial laundry, self-storage, customer feedback/VoC, subscription/billing, salon/spa, childcare, auto-repair/tire-shop, parking/valet, pest control, restoration/mitigation, commercial/home inspection, aquaculture, marina/boatyard, winery/vineyard.
- Active roll-up parents to precheck against (2026): Mainsail Partners, Constellation Software/Cultura, Teamfront, ServiceCore, Convenient Brands, Verdane, Fullsteam, Valsoft, Inktavo, vintrace, Xplor/Clubessential.

## Run cadence (continued) — 2026-07-14 (all rotation)

- 2026-07-14 (all, rotation + creative fresh-vein sweep): **8 added of 15 default**. ~18 DQ during scan; 1 in-pool dup (theralytics). Prospects tab 1512 -> 1520 unique ids. LINEAR_SKIPPED (no Linear MCP tools exposed in session — reconfirmed). Needed `pip3 install cffi` at session start (ModuleNotFoundError `_cffi_backend`, cffi 2.1.0). See `agents/sourcing-runs/2026-07-14-all.md`. Source tag on rows = `directory`. Held at 8 quality fits vs padding. Adds: arbornote (tree care/arborist, bootstrapped since 2001 no funding, Hank Ortiz, commercial/HOA/municipal), yardsmart (auto salvage-yard, Troy Webber 3rd-gen junkyard owner Richmond VA, 1-10emp, launched Dec 2022 founder-operator — ARR near floor flagged), tobi-cloud (NEMT, Hudson OH, 2nd-gen NEMT operators Gil Amado+Mark Ilacqua, CEO Yasir Drabu, <10emp, $2M seed 2021), routegenie (NEMT, Buffalo NY, 41emp, $1-5M, bootstrapped 10yrs then first seed 2025 Mid Oaks), fflboss (firearm/FFL bound-book compliance SaaS, TAD Software, 3 FFL-dealer founders, thousands of dealers, bootstrapped — contact blank), ritam (portable-restroom/septic route SaaS Summit Array, since 1981 40+yrs 500+ businesses no funding indie — contact blank), cleavr (meat-processing/butcher mobile-first workflow SaaS, FRESH vein, founder likely Yanis Vasilevskis — identity cleavr.com vs cleaverapp.com to confirm), roverpass (campground/RV reservation, Austin TX, 31emp, ~$5.2M borderline-over-cap Cliniko-exception, ~$2M ATX Ventures, CEO Michelle Smith, has marketplace/OTA side).

### Key learnings 2026-07-14
1. **NEW productive vein — NEMT (non-emergency medical transport) dispatch/billing SaaS.** Founder-operator pattern dominates clean fits: Tobi Cloud (2nd-gen fleet operators) + RouteGenie (20yr medical-mobility experience, bootstrapped 10yrs). DQ watch: NEMT Cloud Dispatch = product of Hybrid IT Services (parent = IT-services shop, DQ#8); RouteGenie's 2025 Mid Oaks seed is a yellow flag (Mid Oaks is a private holding/PE firm — verify it's not a control stake). More to mine: Bambi, Kabimo, WellRyde, Traumasoft (verify VC/scale).
2. **NEW fresh vein — meat-processing / butcher-shop workflow SaaS.** Cleavr (cleavr.com, mobile-first, animal drop-off→cut→package→pickup, tiered subs) is the clean net-new; identity ambiguity vs cleaverapp.com — researcher confirm. infoTouch MeatOS, Custom Meat Solutions (cutmoremeat), Forkto (traceability) unverified. Aptean = large ERP (over cap). Genuinely under-mined.
3. **NEW fresh vein — auto salvage-yard / self-service recycling SaaS.** YardSmart (Troy Webber, founder-operator junkyard owner, since Dec 2022) clean but young (ARR near floor). AutoRecycler.io/Ario unverified. (Distinct from 2026-07-07 CRUSH auto-recycling which was recapitalized/DQ.)
4. **Portable-restroom/septic route SaaS — top consolidated, one clean established indie.** ServiceCore→Mainsail $54M (rule #9), FieldRoutes→ServiceTitan $16.4M — both DQ. Ritam Technologies (Summit Array, since 1981, 500+ businesses, no funding) is THE clean independent. PumpDocket bootstrapped but launched 2026 (under floor). PumperPRO/Septic BizMan/Basestation unverified.
5. **Firearm/FFL compliance SaaS** — FFL Boss (TAD Software, 3 FFL-dealer founders, bootstrapped) clean. Orchid = advisory+POS attorney-led (verify scale, likely over/advisory). FFLAssist (Gary Wolf), Rapid Gun Systems, FastBound unverified. Compliance/bound-book is on-thesis workflow-heavy vertical.
6. **Tree-care/arborist** — ArborNote (since 2001, no funding, Hank Ortiz) clean. ArboStar ($10.1M/47emp bootstrapped) 2x over cap DQ. SingleOps→Granum/FTV $74M+ roll-up DQ.
7. **DEAD/consolidated veins this run (AVOID going forward):** animal-shelter mgmt (nonprofit 501c3 RescueGroups / open-source Animal Shelter Manager / side-project Doobert — no B2B-SaaS indie), dive-shop (DiveShop360 acquiring/consolidating, EVE acquired), fire-protection inspection (Inspect Point→Mainsail $28M, BuildOps/Uptick VC), FEC/trampoline-park (CenterEdge likely over-cap, Party Center→Fullsteam), O&P practice mgmt (Nymbl $11.5M/68emp+Frontier Growth, OPIE 80emp+Futura multi-product), agritourism/farm-ticketing (horizontal ticketing or free/ad-model — Passage/Checkfront/TicketSpice-Webconnex, no clean vertical indie), pawn-shop (Bravo/PawnMaster 4000+ stores likely over-cap + consolidated), CSA/farm-share (Harvie closed, Local Line took Chipotle VC).
8. **DQ-first "[name] Mainsail/acquired/funding" precheck reconfirmed** — Mainsail Partners hit twice this run (ServiceCore, Inspect Point). Active roll-up parents this run: Mainsail, ServiceTitan (FieldRoutes), Fullsteam (Party Center), Granum/FTV (SingleOps), Frontier Growth (Nymbl).

### Next under-sampled to mine (updated 2026-07-14)
- Still-fresh / partially-mined: NEMT dispatch beyond Tobi/RouteGenie (Bambi, Kabimo, WellRyde, Traumasoft — verify VC/scale), meat-processing SaaS (infoTouch MeatOS, Forkto, Custom Meat Solutions unverified), auto salvage-yard (AutoRecycler.io/Ario, The Yard Manager unverified), firearm/FFL (FFLAssist, Rapid Gun Systems, FastBound unverified), portable-restroom indies (PumperPRO, Septic BizMan, Basestation unverified), plus prior open: shared/commissary-kitchen (Spacebring), audiology (amplifyOMS).
- AVOID (added this run): animal-shelter mgmt, dive-shop, fire-protection inspection, FEC/trampoline-park, O&P practice mgmt, agritourism/farm-ticketing, pawn-shop, CSA/farm-share — plus all prior AVOID list (fuel/propane ERP near-mined, snow removal, locksmith, trophy/awards, notary, tattoo, pet-crematory, junk removal, vending, car wash, machine-shop ERP, pottery, dog-training CRM, auto-glass, apparel-decoration, livestock-auction, commercial laundry, self-storage, customer feedback/VoC, subscription/billing, salon/spa, childcare, auto-repair/tire-shop, parking/valet, pest control, restoration/mitigation, commercial/home inspection, aquaculture, marina/boatyard, winery/vineyard).

## Run cadence (continued) — 2026-07-21 (all rotation)

- 2026-07-21 (all, rotation + creative fresh-vein sweep): **7 added of 15 default**. ~13 DQ during scan; 3 dedup/dup catches (ordant + nutriadmin + aestheticspro all already IN POOL — caught at per-candidate check). Prospects tab 1520 -> 1527 unique ids (1552 -> 1559 rows). LINEAR_SKIPPED (no Linear MCP tools exposed — reconfirmed). Needed `pip3 install cffi` at session start (ModuleNotFoundError `_cffi_backend`). See `agents/sourcing-runs/2026-07-21-all.md`. Source tag on rows = `directory`. Held at 7 quality fits vs padding. Adds: fastbound (FastBound, Folsom CA firearms/FFL bound-book compliance, Jarad Haselton co-founder, since 2010 no-funding ~20emp $1.8-3.9M — DISTINCT from in-pool fflboss), spacebring (ex-Andcards coworking-space mgmt, Ukrainian founders Igor Dzhebyan CEO + Rostyslav Khanas CTO, since 2017, 500+ spaces/55 countries, accelerator/grant-only no-VC), rx4route (pharmacy delivery route SaaS, ex-driver founder Erkin Sattarov, ~6emp no-funding 3000+ pharmacies — sister co Rx2Go is delivery-service NOT roll-up), firm360 (Firm Software LLC accounting-practice-mgmt for CPA firms, Brandon Gray ex-firm-partner founder, Goldsboro NC since 2019 11-50emp), actionflow (ActionFlow countertop-fabrication, Reese Watt ex-actuary/ex-Hallmark-Stone programmer, St Louis since 2012 bootstrapped 100+ shops), stonegrid (StoneGrid stone-fabricator ERP, Raj Katta co-founder + Mickey Gault operator origin, independent), roastertools (RoasterTools coffee-roaster ops, Jon Ewalt founder, Portland OR since 2015 ~$237K accelerator+debt — ARR opaque flagged).

### Key learnings 2026-07-21
1. **NEW fresh healthy vein — stone/countertop fabrication ERP.** Founder-operator pattern: ActionFlow (Reese Watt, ex-Hallmark Stone) + StoneGrid (Mickey Gault's NC shops). Moraware DQ (over cap $13M/25emp, memory 07-07). Still to verify: Stone Profit Systems, Stonify (stonify.io), Stone Project (stoneproject.app). Real workflow-heavy vertical — good FRS thesis fit.
2. **Firearm/FFL compliance — FastBound clean, DISTINCT from in-pool FFL Boss (fflboss, added 07-14).** Two separate FFL bound-book vendors; check id-match doesn't false-DQ a distinct competitor in same niche. FastBound bootstrapped since 2010, ~$1.8-3.9M.
3. **07-14 flagged NEMT vein consolidating/VC — Bambi ($4.75M raised, founded 2022, AI-first → DQ#6/#7); Traumasoft has Serent Capital (growth PE → DQ#9 pattern). Confirm PE before adding any "bootstrapped"-framed NEMT.**
4. **Serent Capital is an active vertical-SaaS growth-PE roll-up parent** (hit twice this run: Traumasoft + ManageAmerica). Add to precheck list alongside Mainsail/Frontier Growth/Fullsteam/Valsoft. Frontier Growth also reconfirmed (commonsku, prior Nymbl).
5. **amplifyOMS (audiology, 07-14 flagged) = $330K/3emp → below floor.** NutriAdmin (dietitian) = $217K → below floor AND already in pool. Nutrition/audiology micro-SaaS mostly sub-floor solo shops.
6. **Sign/print-shop MIS mostly consolidated/over-cap**: shopVOX→Fullsteam, CoreBridge $5.6M/52emp over BOTH caps (rule#17 skip), Ordant clean bootstrapped BUT already in pool. EstiMate/InfoFlo Print/Hexicom unverified — thin remainder.
7. **Distillery vein consolidating under FIVE x 5** (absorbed Whiskey Systems); Barrel Clarity pre-revenue. Coffee-roasting: RoasterTools indie survivor (Cropster→Verdane DQ, memory). Craftybase already in pool.
8. **Per-candidate dedup guard earned its keep again** — ordant/nutriadmin/aestheticspro all looked net-new by name/thesis but were IN POOL; caught before append. Always run the id check immediately before append, not just at batch start.

### Next under-sampled to mine (updated 2026-07-21)
- Still-fresh / partially-mined: stone/countertop fabrication remainder (Stone Profit Systems, Stonify, Stone Project — verify scale/funding), meat-processing SaaS (infoTouch MeatOS, Forkto UK, Custom Meat Solutions unverified), auto salvage-yard (AutoRecycler.io/Ario unverified), portable-restroom indies (PumperPRO, Septic BizMan unverified), independent-pharmacy POS/mgmt (distinct from delivery), plus prior open: NEMT beyond Tobi/RouteGenie (Kabimo/WellRyde — verify VC), firearm/FFL (FFLAssist, Rapid Gun Systems).
- AVOID (this run reconfirmed): distillery (FIVE x 5 rolling up), promo-products (commonsku PE/over-cap), charter-bus (Transit Technologies rolling up busHive), manufactured-housing (Serent PE), sign/print MIS (Fullsteam + over-cap), plus all prior AVOID list.
- Active roll-up parents (2026): Serent Capital (NEW — Traumasoft, ManageAmerica), Frontier Growth (commonsku, Nymbl), Mainsail, Constellation/Cultura, Fullsteam (shopVOX), Valsoft, Transit Technologies (busHive), FIVE x 5 (Whiskey Systems), RedSail (RxMile), Teamfront, ServiceCore, Convenient Brands, Verdane, Inktavo, vintrace, Xplor/Clubessential.

## Run cadence (continued) — 2026-07-28 (all rotation)

- 2026-07-28 (all, rotation + creative fresh-vein sweep): **12 added of 15 default**. ~19 DQ during scan; 2 in-pool dedup catches (empowermx, datascan). Prospects tab 1559 -> 1571 rows (1527 -> 1539 unique ids). LINEAR_SKIPPED (no `.mcp.json`, no Linear MCP tools exposed — reconfirmed; note the session's MCP preamble advertises github + Linear servers but NO tools are actually exposed, so don't take the preamble as evidence Linear is available). Needed `pip3 install cffi` at session start (ModuleNotFoundError `_cffi_backend`, cffi 2.1.0). See `agents/sourcing-runs/2026-07-28-all.md`. Source tag on rows = `directory`. Held at 12 quality fits vs padding. Adds: curbside-laundries (Long Beach CA laundromat wash-dry-fold + pickup/delivery SaaS, Aaron + Matt Simmons grew family laundromat to $1.5M on own platform, 500+ laundromats licensed), escape-room-master (Waukesha WI, ~$4M rev on 2 emp, Nate Shane owns 4 escape rooms + the software co), bakesmart (Indianapolis bakery mgmt since 2005, never raised, 2nd-gen bakery veteran "Mike"), infotouch (San Antonio specialty retail POS since 1986 incl. MeatOS butcher vertical, ~$4.8-6M/18-25emp, CEO Harry Nass, Cliniko-exception borderline), assignr (US referee/umpire assigning since 2009, 900+ orgs, founder unverified so contact blank), backflow-solutions/BSI Online (Alsip IL, Michael Eisenhauer co-authored IL backflow regs, son Doug president, patented 2008, family-owned not PE), sportskey (Dublin IE sports-facility booking, Craig Bewley, ~8-22emp, unfunded), ezshred (Chesterland OH document-destruction ops software built 2000 inside a shredding company, 300+ clients, NOT in Routeware roll-up), tally-io (cloud sawmill/forestry ERP designed by a 4th-gen sawmill owner, founder name unpublished so contact blank), ecosconnect (backflow test-report submission, founder ran a backflow testing co from 2002, co-founded 2014), cybake (York UK bakery ERP since 1998, Jane Tyler still director + MAJORITY SHAREHOLDER, ~34-40emp, no institutional funding), golf-oclock (Montreal indoor-golf/sim booking, Alexandre Martin + JC Delage founder-operators, 200+ venues NA+EU).

### Key learnings 2026-07-28

1. **Acquisition precheck killed the run's two best-looking adds at the last step — run it BEFORE writing the row, always.** Rock Gym Pro (Andy Laakmann, 2 emp, dominant NA climbing-gym share, "small and nimble" on its own About page) was **acquired by Togetherwork in Jan 2018** and the marketing copy still reads independent. BestRx (40-yr family firm, Yogesh -> Hemal Desai) was **acquired by RedSail Mar 2025**. Neither surfaces as acquired on a generic `[name] founder employees revenue` query — only on an explicit `"[name]" acquired 2025 2026` query. **Add Togetherwork to the roll-up precheck list.**
2. **NEW fresh vein — water/backflow cross-connection compliance.** Two clean independents: Backflow Solutions/BSI Online (Alsip IL, patented, family-owned) + EcosConnect (founder ran a backflow testing business from 2002). Pattern: the founder ran a backflow *testing* company first. Top of category is PE — Brycer/The Compliance Engine (TA Associates), SwiftComply ($9.7M raised, 50 emp, rolling up ComplianceGo + CloudCompli + NPDESPro). Unverified next: HydroCorp/HydroSoft, VEPO CrossConnex.
3. **NEW fresh vein — bakery ERP, genuinely un-consolidated.** BakeSmart (Indianapolis, since 2005, never raised) + Cybake (York UK 1998, founder Jane Tyler still majority shareholder, 34-40 emp, no institutional money). Craftybase already in pool. Unverified: Streamline, Bakery Cloud, AU players.
4. **NEW fresh vein — sawmill / forestry ERP.** Tally-I/O ("designed by a 4th-generation sawmill owner") is the clean indie; Epicor LumberTrack, ECI, DMSi own the top. Log accounting + scaling + grading is exactly the workflow-heavy data-model the FRS thesis targets.
5. **Recreation-facility ops = extreme-leverage 2-person businesses.** Escape Room Master is ~$4M revenue on 2 employees; Golf O'Clock runs 200+ venues. Both founded by people who ran the venue first. This sub-pattern (operator-turned-vendor in leisure/attraction) is worth a dedicated future sweep: axe throwing, bowling, trampoline (FEC already AVOID), mini-golf, paintball, karting.
6. **Founder-owned adjacent same-industry properties are still NOT a DQ#8 trigger** (reconfirms Reiter 07-07 + CattleMax 06-23): Nate Shane owns 4 escape rooms AND the software company; the Simmons brothers own laundromats AND Curbside. One founder's industry ecosystem != SaaS roll-up parent. But it does mean SaaS-specific ARR is a fraction of group revenue — flag for researcher.
7. **WebFetch returned HTTP 403 on EVERY url this session**, including plain marketing/About pages (assignr.com/about, rockgympro.com/about, curbsidelaundries.com/team, managealltech.com). Not just the usual GetLatka/Crunchbase/AppSumo blocks. WebSearch summaries were the only usable channel all run — budget for ~2 searches per candidate.
8. **Dev-agency parent DQ hit again**: LiftKeeper (elevator service software, founder Ted Szabo actually came from the elevator industry — otherwise a perfect fit) is a product of Advanced Business Technologies, a "full service software development company" since 1990. Same shape as Growflo/Output Digital (06-30). Always check whether a niche vertical product is a side-product of a dev shop.
9. **Independent-pharmacy management is now CLOSED.** RedSail (Francisco Partners + Leonard Green) has absorbed BestRx, PrimeRx/Micro Merchant, Liberty, PioneerRx, RxMile — DOJ reviewed the PrimeRx deal in late 2025 and it closed Feb 2026. Datascan (Minassian family, "oldest independently owned pharmacy software vendor") is already in pool; SRS Pharmacy Systems is $13.2M over cap. Nothing left.
10. **Practical Founders 2026 guest list is now low-yield for sourcing** — of the named 2026 guests, IPfolio (acquired Clarivate), TaskRay (sold 2021 to search fund), INNERGY (Mainsail 51%/$44M), EmpowerMX (already in pool) all failed. Greg Head's recent cohort skews to founders who already exited or took growth equity. Use it for thesis color, not lead volume.

### Next under-sampled to mine (updated 2026-07-28)
- Still-fresh / partially-mined: water/backflow compliance remainder (HydroCorp/HydroSoft, VEPO CrossConnex), bakery ERP remainder (Streamline, Bakery Cloud, AU/NZ), sawmill/forestry beyond Tally-I/O (Forestry Systems Inc, Yardmaster), leisure/attraction operator-turned-vendor sweep (axe throwing, bowling, mini-golf, paintball, karting), Wakesys (cable-park/FEC booking — held this run on likely-sub-floor ARR, re-check), Station Boss (fire/EMS, independently owned but founder + scale unverifiable), meat-processing remainder (Forkto UK, Custom Meat Solutions), plus prior open: stone/countertop remainder (Stonify, Stone Project), auto salvage-yard (AutoRecycler.io/Ario — EZer LLC, founder still unidentified), portable-restroom indies (PumperPRO, Septic BizMan), NEMT (Kabimo, WellRyde), firearm/FFL (FFLAssist, Rapid Gun Systems).
- AVOID (added this run): climbing-gym mgmt (Rock Gym Pro -> Togetherwork), independent-pharmacy mgmt (RedSail closed the category), dry-clean/commercial-laundry POS (SPOT consolidating via Fabricare; CleanCloud -> saas.group), fire/EMS RMS (ESO/First Due large; EPR -> Frontier Growth; Aladtec -> TCP; Emergency Reporting -> Vector), elevator service software (FIELDBOSS Dynamics-based, AuditMate VC, LiftKeeper dev-agency parent), medical/lab courier routing (CXT/nuVizz/Onfleet/OptimoRoute, no sub-$5M indie), ice rink/arena (Frontline -> EZFacility/Jonas) — plus all prior AVOID list.
- Active roll-up parents (2026, updated): **Togetherwork (NEW)**, **RedSail/Francisco Partners+Leonard Green (NEW)**, **Routeware (NEW)**, **SwiftComply (NEW)**, **TA Associates (NEW)**, **Recur (NEW)**, Serent Capital, Frontier Growth, Mainsail, Constellation/Cultura, Fullsteam, Valsoft, Transit Technologies, FIVE x 5, Teamfront, ServiceCore, Convenient Brands, Verdane, Inktavo, vintrace, Xplor/Clubessential, Jonas/EZFacility.
