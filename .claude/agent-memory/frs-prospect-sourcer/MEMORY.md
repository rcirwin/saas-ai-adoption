# FRS Prospect Sourcer - Persistent Memory

Cross-run learnings. Append only.

## Environment notes

- **Linear MCP unavailable in this environment** (no `.mcp.json` in repo). Every run should expect to skip Linear and return `LINEAR_SKIPPED`. Confirm before each run; do not block sourcing on Linear availability.
- **AppSumo and Product Hunt browse pages return 403** to WebFetch. Use WebSearch + third-party roundups (99signals, bloggingjoy, dealysoft, hunted.space) as a substitute, and verify specific candidates with targeted WebSearch queries by name.
- **Market Clarity (mktclarity.com) also returns 403** to WebFetch as of 2026-05-12. Use WebSearch with site filter instead, or rely on getlatka.com (which exposes ARR/employee data directly in WebSearch snippets).
- Google Sheets API can return transient 503 "DNS cache overflow" errors. Retry once with 3-8s sleep.

## Source quality observations (2026-04-20 + 2026-04-21 + 2026-05-12)

- **Privacy analytics** (Plausible, Fathom, Simple Analytics, Usermaven) is a rich, under-AI-ified bootstrapped niche. Expect every player to match ICP.
- **No-code internal tools** (Stacker, Noloco, Softr) are a high-fit cluster - workflow-heavy, AI-agent orchestration is their obvious next frontier.
- **Shared-inbox tools** (Missive $8M, Helpwise 60+ emp, Front enterprise) mostly exceed ICP on the upper bound; be cautious.
- **Video/webinar platforms** (Livestorm, Demio, Riverside) skew either VC-mega-funded or acquired - high skip rate, low volume per run.
- **Time tracking** (Everhour, Harvest, Toggl) has at least one bootstrapped small team per run that fits, but Toggl itself ($32.8M, 146 emp) is well above cap.
- **Product management SaaS** (Savio, Freshflows, Productboard) - Productboard is too large; Savio and Freshflows fit well.
- **Vertical SaaS for healthcare** (Carepatron $4.3M/39 emp) and **legal** (MerusCase $3M/17 emp) BOTH fit ICP cleanly - newly seeded 2026-05-12, expect more here.
- **Knowledge base SaaS** (Tettra $3.2M/11 emp fits; Slite $5.5M/39 emp slightly above + $15M VC) - sub-$5M players are the right call.
- **Devtools/error tracking & APIs** (Honeybadger, Bannerbear, MailerSend, Loops) - rich bootstrapped pool. Devtools founders are technical and often resonate with agent-readiness framing.
- **Bootstrapped customer support** (Crisp $1.4M, Customerly $993K) fits but category is approaching saturation per prior runs - prioritize unique angles.

## Disqualification patterns seen repeatedly

1. **Acquired-but-still-branded**: Demio (Banzai), SquadCast (Descript), Encharge (exited), Baremetrics (Xenon Partners 2020), FareHarbor (Booking.com 2018), SparkLoop (ConvertKit 2023), CastorDoc (Coalesce 2025), Userflow (Beamer). **Check acquisition status for any tool >3 years old** as standard.
2. **AppSumo Originals**: TidyCal, BreezeDoc - built by AppSumo itself; not independent companies. Skip.
3. **AI-native-from-day-one**: Nexuscale AI, Scoop Analytics, Lightfield, Naoma, Sourcetable - they're ahead of our thesis.
4. **Unicorn-adjacent**: Productboard ($1.7B valuation), Pipedrive, Procore - public or near-public; way above cap.
5. **Multi-product parents**: SaaS Labs (runs Helpwise + others) has 60+ employees even though individual products are small. Assess parent.
6. **Above-$5M-marginal**: Friendbuy $5.8M, Cognito Forms $5.1M, Slite $5.5M, Lemlist $10M, Wisepops $10M, Inflectra $12M. Be strict on $5M ceiling.
7. **Below-$500K-floor**: ConfigCat $317K, ServGrow $316K, Featurebase $54K, Hyperping $144K. Pre-revenue or too small.
8. **Headcount disqualifications**: Jane App (600 emp), TaxDome (215-350 emp), Toggl (146 emp), Tidio (174 emp), Smokeball (143 emp). When public reviews/customer counts are huge, headcount usually mirrors.

## Founder contact patterns

- **LinkedIn URLs** are almost always findable; **emails** almost never are. Don't waste cycles trying to guess emails - let the researcher attempt them later with tooling.
- For bootstrapped 2-person companies, founders are the marketing face - their LinkedIn activity is the best personalization hook.
- For YC companies, the founder LinkedIn pattern is `/in/<firstname><lastname>` ~70% of the time.
- **getlatka.com** consistently surfaces founder name + revenue + employees in WebSearch snippets - high-signal source for verifying bootstrapped status and size.

## Dedup caveats

- The prospects tab currently uses both kebab-case (e.g. `notch-so`) and plain lowercase (e.g. `flowlu`) for slugs. Follow the "strip TLD unless needed for disambiguation" rule: prefer bare company slug (`papermark`, not `papermark-io`) unless there's a name collision.
- Always re-fetch prospects tab fresh at the start of every run; the dedup cache stays stale across days.

## Run cadence

- 2026-04-20: 15 added (all sources rotation) - first run
- 2026-04-21: 15 added (all sources rotation) - second run
- 2026-05-12: 14 added (all sources rotation, prioritized under-sampled categories: vertical SaaS healthcare/legal, devtools, knowledge base, e-commerce ops). 1 short of target due to strict adherence to $5M ARR ceiling and dedup checks.
