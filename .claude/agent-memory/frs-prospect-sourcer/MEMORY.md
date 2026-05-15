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
