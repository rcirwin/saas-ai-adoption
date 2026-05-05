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

## Source quality observations (2026-05-05)

- **GetLatka and IndieHackers founder interviews are the highest-signal source** when AppSumo/PH return 403. They give verified ARR, employee counts, and bootstrapped status in one stop. Use these first.
- **Devtools / async productivity** category (Geekbot, Reflag, WP Umbrella) yielded 3 strong fits. Bootstrapped Slack-bot / WordPress-mgmt / feature-flag SaaS at $1M-$3M ARR is consistently in ICP.
- **Vertical SaaS for finance/accounting** (Liscio, Financial Cents, TaxDome, Karbon) splits cleanly: Liscio + Financial Cents fit; TaxDome (260+ emp) and Karbon (115+ emp, $99.8M raised) are above cap. Always check team size first for this vertical - it scales fast.
- **Customer feedback / survey** category (Refiner $1.2M ARR / 6 emp, Survicate small-team) fits well. Featurebase is sub-ICP at $54.5K ARR - skip until they grow.
- **Sales enablement / proposals / testimonials** (Better Proposals $990K, Senja $1M) - bootstrapped 2-10 emp teams hitting $1M ARR is the sweet spot here.

## Disqualification patterns seen repeatedly

1. **Acquired-but-still-branded**: Demio (Banzai), SquadCast (Descript), Encharge (exited), Splitbee (Vercel 2022), Reform.app (FunnelEnvy 2023). Check acquisition status for any tool >3 years old.
2. **AppSumo Originals**: TidyCal, BreezeDoc - built by AppSumo itself; not independent companies. Skip.
3. **AI-native-from-day-one**: Nexuscale AI, Scoop Analytics, Lightfield, Naoma - they're ahead of our thesis.
4. **Unicorn-adjacent**: Productboard ($1.7B valuation), Pipedrive, Procore - public or near-public; way above cap.
5. **Multi-product parents**: SaaS Labs (runs Helpwise + others) has 60+ employees even though individual products are small. Assess parent. Same with WPManageNinja (Fluent Forms + FluentCRM + ~120 emp).
6. **Recently raised Series A pushing them past ICP**: Anchor ($20M Jan 2025), GrowthBook ($22.6M June 2025), Estuary ($17M Series A Nov 2025). Even if previously bootstrapped, post-Series-A they scale headcount fast and push past ICP within 12 months. Check Crunchbase funding rounds before adding.
7. **Self-hosted vs SaaS**: FluentCRM is self-hosted WordPress plugin - not SaaS. Always confirm hosted vs self-hosted.
8. **Sub-ICP floor**: Featurebase ($54.5K ARR), Buttondown ($392K) - too small, revisit in 12mo. Hard floor at $500K.
9. **PE-funded after bootstrap**: Hubstaff bootstrapped to $22M ARR then took PE - now over cap. Check for PE/late-stage events.

## Founder contact patterns

- **LinkedIn URLs** are almost always findable; **emails** almost never are. Don't waste cycles trying to guess emails - let the researcher attempt them later with tooling.
- For bootstrapped 2-person companies, founders are the marketing face - their LinkedIn activity is the best personalization hook.
- For YC companies, the founder LinkedIn pattern is `/in/<firstname><lastname>` ~70% of the time.
- For European founders (Estonian, Polish, Danish, French): LinkedIn URL often contains a country prefix (`dk.linkedin.com`, `ee.linkedin.com`). Save the full URL as found, don't normalize.

## Dedup caveats

- The prospects tab currently uses both kebab-case (e.g. `notch-so`) and plain lowercase (e.g. `flowlu`) for slugs. Follow the "strip TLD unless needed for disambiguation" rule: prefer bare company slug (`papermark`, not `papermark-io`) unless there's a name collision.
- For multi-word company names, use kebab-case: `wp-umbrella`, `financial-cents`, `better-proposals` -> stored as `betterproposals` (joined to one word in prior runs - inconsistent, follow established pattern when possible).

## Run cadence

- 2026-04-20: 15 added (all sources rotation) - first run
- 2026-04-21: 15 added (all sources rotation) - second run
- 2026-05-05: 12 added (all sources rotation) - prioritized under-sampled devtools, vertical-finance, customer-feedback, data-sync. Skipped 18 candidates (mostly above-ICP scaling, sub-ICP floor, acquired).
