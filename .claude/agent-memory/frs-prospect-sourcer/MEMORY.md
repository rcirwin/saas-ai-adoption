# FRS Prospect Sourcer - Persistent Memory

Cross-run learnings. Append only.

## Environment notes

- **Linear MCP unavailable in this environment** (no `.mcp.json` in repo). Every run should expect to skip Linear and return `LINEAR_SKIPPED`. Confirm before each run; do not block sourcing on Linear availability.
- **AppSumo and Product Hunt browse pages return 403** to WebFetch. Use WebSearch + third-party roundups (99signals, bloggingjoy, dealysoft, hunted.space) as a substitute, and verify specific candidates with targeted WebSearch queries by name.
- Google Sheets API can return transient 503 "DNS cache overflow" errors. Retry once.

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

- 2026-04-20: 15 added (all sources rotation) - first run
- 2026-04-21: 15 added (all sources rotation)
- 2026-05-14: 15 staged but NOT appended (SHEET_APPEND_SKIPPED — `FRS_PROSPECTS_SHEET_ID` env var unavailable; local-session run from desktop Claude Code, not cloud routine where secrets are injected)
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
