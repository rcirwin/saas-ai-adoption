# frs-prospect-researcher — Persistent Learnings

Append-only observations. Caller or outreach writer can flag mis-scoring; reflect those here.

## Patterns Learned

### Source-based heuristics
- **AppSumo / LTD-heavy source** → almost always sub-$500K ARR. Default fit 1–2 unless contact data confirms ICP. The LTD business model signals a price-sensitive SMB customer base that does not fit $30K engagement.
- **Y Combinator + agent-ready stance** (e.g. Activepieces, PLG OS) → they are the disruptor, not the disrupted. Score 1–2 — no gap to fill.
- **ProductHunt launches at pre-seed / seed** with funding <$2M → usually sub-ICP ARR. Note for 12-month revisit.
- **Bootstrapped founders with public revenue milestones on LinkedIn** (Marko Saric, Jane Portman, Geoff Roberts, Mike Kulakov) → high fit signal. Reachability and personalization hooks are strong.

### AI posture scoring
- **`none` posture in a category peers are actively AI-bolting** (Userlist, Savio, Outseta, Dubsado, Everhour vs Timely) → highest fit. These are the "we need to figure out what AI to build" prospects.
- **`bolt-on` posture on real workflow-heavy products** (Docupilot, Kickserv, Noloco, Simple Analytics, TenantCloud/Cloudia) → fit 3–4. Room to re-architect AI around workflow vs feature bolt-on.
- **`strategic` posture with agent-readiness gap** → fit 3. We can add value on the agent surface even if AI-features are sorted.
- **`agent-ready` posture** (Papermark, Tally w/ MCP, Activepieces, PLG OS, Stacker post-rebrand) → fit 1–2. Ahead of curve, not the target.

### Founder reachability signals
- Founders who podcast / blog / post LinkedIn regularly (UI Breakfast, Makerpad, Indie Hackers features) score +1 on fit because hooks are abundant and response-rate is higher.
- Founders with prior exit or recognizable prior company (Derrick Reimer ex-Drip, Laura Roeder ex-MeetEdgar, Mark DeHaan ex-Rentler) score +1 on hook strength.

### Category-level warnings
- **Customer support AI** (helpdesk, chatbots) is crowded with well-funded AI-native competitors (Fin, Decagon). Score harshly — incumbents like ThriveDesk/Charla don't move.
- **Privacy-first analytics** is a strong category target (small team, workflow-exposed, AI-posture usually exploring or bolt-on). BUT: bootstrapped 2-person privacy analytics companies (Fathom, Plausible) can quietly grow past the $5M ICP ceiling with tiny teams. Employee count is a misleading ICP proxy in this category — always check revenue first.
- **Email/lifecycle marketing for SaaS** is an AI-gap category — peers like Customer.io/HubSpot push AI hard, leaving Userlist-style bootstrapped SaaS exposed.
- **Construction/FSM** — workflow-heavy but the industry adopts slowly; founders reachable but conversion may be long.
- **Property management SaaS** (TenantCloud, Buildium, AppFolio) — workflow-heavy vertical with multi-million ARR mid-market players that are bolting on thin GPT wrappers (Cloudia-style listing generators). Treat similar to construction/FSM: high-fit for assessment but longer sales cycles. AI bolt-on leaves big workflow-redesign space.
- **Time tracking embedded in PM tools** — Everhour-style bootstrapped tools are exposed because (a) Timely is AI-native, (b) the PM platforms they embed into are adding their own AI. Both FRS angles (AI-for-users + agent-readiness) apply naturally.
- **Product Management SaaS** (Freshflows, Productboard, Canny, Aha!) — AI-native roadmap copilots dominate category discussion; sub-ICP bootstrapped entrants can't catch up without capital. Score low unless ARR clearly inside range.

### Disqualifying signals
- **Full AI-native rebrand** (domain change to .ai, prompt-to-app UX as landing page, "AI-native platform" positioning) is the clearest disqualifying signal. Stacker's 2025 rebrand to stacker.ai with prompt-to-app launch is textbook agent-ready = fit 1.
- **a16z Series A + AI pivot** → almost always above ICP and pushing for implementation not assessment. Fit 1.
- **Founder retirement / transition in progress** (Paul Jarvis from Fathom Apr 2026) → buyer is distracted, decision-making fragmented, timing poor. Downgrade fit by 1.

## Open Questions / Flags
- Many prospects (ninjapipe, heffl, flowlu, sociamonials, guideflow, plgos, charla, activepieces, thrivedesk, docupilot, dubsado, paperbell, kickserv, jobtread) came in without contact data. Sourcer must backfill contact_name / contact_linkedin before outreach writer can use the scored rows. Even fit 4–5 prospects are unreachable without those fields.
- freshflows and stacker from 2026-04-22 run also came in without contact data. Moot since both scored fit 1, but note the pattern: G2Capterra and JobBoards sources tend to arrive without contacts.

## Run Log

### 2026-04-29 — DRY_RUN
- Queue empty (0 identified prospects). 30 prospects total: 16 researched, 14 not-a-fit, 0 identified.
- Sourcer hasn't run since the 2026-04-22 batch.
- Env hiccup: `scripts/sheet.py` failed at import time with `ModuleNotFoundError: _cffi_backend`. Fixed by `pip install --user cffi cryptography`. If this recurs in future runs, repeat the install before retrying sheet ops.

### 2026-04-30 — DRY_RUN
- Queue still empty (0 identified prospects). 30 prospects total: 16 researched, 14 not-a-fit, 0 identified. Two consecutive empty runs (04-29, 04-30) — sourcing pipeline appears stalled.
- Env hiccup recurred (`ModuleNotFoundError: _cffi_backend`). Fixed again with `pip install --user cffi cryptography`. Treat as a standing pre-flight: run that install first if `sheet.py` errors on import.
- No memory pattern updates this run (no new prospects to learn from).

### 2026-05-05 — additions from 12-prospect run
- **Explicit anti-AI founder stance in AI-saturated category = high fit signal.** Better Proposals (Adam Hempenstall publicly bans AI for customer comms in a category where PandaDoc/Proposify push AI hard) is a textbook FRS conversation: not "add AI" but "where would AI add real workflow value vs gimmicks." Conviction stance produces engagement, not avoidance. Score 4 even if ARR is uncertain.
- **Vertical SaaS serving fragmented ops customers + AI-empty peer set + bootstrapped public founder = consistent 4-5.** Pattern across telecom ISP (Splynx), WP agency (WP Umbrella), accounting practice mgmt (Financial Cents). When none of the peers have moved on AI and the founder publicly tells the bootstrapped journey, hooks and engagement both score high.
- **MCP server shipped is a fast disqualifier.** Geekbot just shipped Geekbot MCP for AI-powered rollups — that's the agent-readiness leg of the FRS thesis already executed. Pair it with the existing AI-language analysis and there's no gap. Add MCP-shipped to the agent-ready disqualifier list alongside ".ai rebrand" and "prompt-to-app UX."
- **Vendor-rebranded devtools at seed stage are 2s, not 4s.** Reflag rebranded from Bucket with $5.7M seed; founder is highly visible but the company is in product-positioning mode, not ICP-fit for a $30K assessment. Pattern: if a YC-grad / VC-funded devtool relaunched in the past 12 months, default fit 2 regardless of founder reachability.
- **AI-bolt-on category laggard underneath an AI-native well-funded competitor = textbook fit 4.** Refiner (auto-tag AI) underneath Sprig (AI-native, well-funded) is the same pattern as Userlist under Customer.io. The "what AI to build that isn't just feature-list-matching" conversation is the most natural FRS opener.
- **getlatka public revenue numbers are a research shortcut.** Survicate ($4.4M Dec 2025), Refiner ($1.2M 2024), Whalesync ($405K June 2024), Geekbot ($1M+), eWebinar ($5M now per founder), WP Umbrella ($1.3M public yearly review), Financial Cents (~$3.9M growjo), Senja ($800K) all surfaced cleanly via getlatka or founder yearly-review blog posts. Always check Latka first when ARR is the deciding factor.

## Run Log

### 2026-05-05 — 12 prospects
- 7 researched (fit 3+), 5 not-a-fit. Avg fit 3.08.
- Top: financial-cents (5), splynx/betterproposals/wp-umbrella/refiner (4), ewebinar/survicate (3).
- All 12 prospects had contact_name + contact_linkedin populated by sourcer (only Refiner, Financial Cents, and Whalesync missing email; LinkedIn present for Refiner and Financial Cents was missing — note: financial-cents and refiner both have empty contact_linkedin, sourcer should backfill before outreach).
- No environment hiccups this run; the cffi pre-flight install from prior runs was apparently already in effect.

### 2026-05-06 — DRY_RUN
- Queue empty (0 identified prospects). 42 prospects total: 23 researched, 19 not-a-fit, 0 identified.
- Third empty run after the 05-05 batch of 12. Sourcing has not produced new identified rows in the past day. Outreach Writer (3h downstream) will see no new scored prospects from this run.
- Env hiccup recurred for the third time: `ModuleNotFoundError: _cffi_backend` on `sheet.py` import; fixed again with `pip install --user cffi cryptography`. The fix doesn't persist across runs in this environment — keep treating it as a pre-flight.
- No new patterns to record (no prospects researched).

### 2026-05-07 — DRY_RUN
- Queue still empty (0 identified prospects). 42 prospects total: 23 researched, 19 not-a-fit, 0 identified — unchanged since 05-06.
- Two consecutive DRY_RUNs (05-06, 05-07) following the productive 05-05 run. Sourcer has not produced new `identified` rows in the 48h since the 12-prospect batch was cleared.
- Pre-flight env install (`pip install --user cffi cryptography`) ran clean — already satisfied. No `_cffi_backend` error this cycle. Note: prior runs treated this as a per-run hiccup; this run shows it can be a no-op when packages are still cached. Keep running it pre-flight, but don't assume the error will always recur.
- No memory pattern updates (no new scored prospects). If 05-08 is also DRY, raise with caller — outreach pipeline will starve.

### 2026-05-08 — DRY_RUN (escalation threshold)
- Queue still empty (0 identified prospects). 42 prospects total: 23 researched, 19 not-a-fit, 0 identified — unchanged since 05-06.
- **Third consecutive DRY_RUN (05-06, 05-07, 05-08).** This is the threshold flagged in the 05-07 note. Sourcer has not produced new `identified` rows in 72h since the 05-05 batch of 12. Outreach Writer (3h downstream) has nothing new to draft against — pipeline is officially starving.
- Pre-flight `pip install --user cffi cryptography` installed fresh (cffi-2.0.0, pycparser-3.0) — looks like a fresh container this run. Worked cleanly. Keep pre-flight in place.
- **Pattern: when DRY runs cluster (3+ in a row), the bottleneck is upstream sourcing, not researcher.** Stop treating DRY_RUNs as routine after day 2; surface them as pipeline alerts in the returned summary.
- No scoring patterns updated (no new prospects).

### 2026-05-14 — 14 new prospects (post-sourcing batch)
- 8 researched (fit 3+), 6 not-a-fit. Avg fit 2.86. Distribution 1:4 / 2:2 / 3:4 / 4:3 / 5:1.
- Top: referral-rock (5), formaloo / rella / alosant (4).
- **Agent-ready disqualifier extended**: 4 of 14 prospects in this batch shipped explicit agent-native products and got fit 1 — Robomotion (Agentic Automation Platform rebrand + Agent Hub), Holistics (MCP server + Agentic AI), QuestDB ("QuestDB for AI Agents" top homepage product line), OpenStatus (MCP server + Slack agent Feb 2026). When the marketing landing page leads with agent capabilities or MCP, treat as automatic fit 1 — no FRS gap to fill.
- **`getlatka` revenue lookups remain the single highest-leverage research action.** Confirmed cleanly this run: Formaloo $1.6M (2024), Referral Rock $1.8M (2024), Diversion $2.3M (2024), Custify $2.7M (2024), QuestDB $3M (2024), Holistics $5M (2024), Sumtracker $990K (2024). Always run Latka first when ARR is the deciding factor.
- **VC-funded growth-mode disqualifier confirmed** (Diversion). $2.3M ARR is technically in ICP band, but $12M raised + 20% MoM growth means engineering deployment mode, not pause-for-assessment mode. Pattern: when funding > 3-4x ARR AND growth is monthly-double-digit, the $30K assessment is wrong timing. Memory previously had this pattern as "a16z Series A + AI pivot" but it applies broadly to any aggressive VC raise at sub-$5M ARR.
- **Vertical SaaS post-Series A note**: Alosant (April LaMon, master-planned communities, $4.1M revenue, Series A Sep 2024 led by Greg Avis ex-Summit). Scored fit 4 not 5 because Series A introduces board pressure to deploy on growth not exploration. Pattern: Series A in the past 12 months for a previously-bootstrapped vertical SaaS = downgrade fit by 1 even if every other signal is strong. Boards push for visible velocity, not strategic clarity.
- **"Just shipped a comprehensive AI suite" caveat**: Custify launched CustifyAI Nov 22 2025 (playbooks, summaries, churn risk, sentiment, chatbot, AI text assistant). Scored fit 3 not 4 because they've already made the big strategic AI bets. Pattern: when a strategic-posture prospect launched a comprehensive AI suite within the last 6 months, downgrade to 3 — angle must be "next-level agent-readiness" not "what AI to build."
- **Bootstrapped + public-podcasting founder pattern confirmed twice this run** — Josh Ho (Referral Rock, SaaS Club + Indie Bites + Practical Founders, plus explicit "AI is internal not core product" stance) and Natalie Barbu (Rella, Practical Founders + QuickBooks I Run This + 380K social audience). Both scored top of their fit tier. This is the highest-fit pattern in the memory — when you find it, score aggressively.
- Environment note: `FRS_GOOGLE_CREDENTIALS` and `FRS_PROSPECTS_SHEET_ID` are persisted in `~/.zshrc` per user but did NOT inherit into the first `sheet.py` call this session. Set explicitly with `export` in every Bash call. Persistence in .zshrc only helps interactive shells.

### 2026-05-15 — 23 prospects (batch D–H of 9-batch loop)
- 7 researched (fit 3+), 16 not-a-fit. Avg fit 2.09. Distribution 1:6 / 2:11 / 3:4 / 4:2 / 5:0.
- Top: folderly (4), geckoboard (4). Then eventcube/eventee/fullsession/gaggleamp (3).
- **Disqualifier confirmations**: MCP-shipped on flagsmith + gitbook (both fit 1); founder-transition on encharge (sold 2024), getstencil (Namecheap acquisition), hatchways (founder pivoted to Bento, product dormant); VC-funded-growth-mode on dripos ($11M Series A 2024).
- **Comprehensive-AI-suite-in-last-6-months downgrade applied** to fullsession (Lift AI March 2026), halaxy (700 clinical tools 2025), gmelius (Meli + Automation Agents), helpcrunch (AI chatbot + Editor + KB). All scored 2-3 instead of 4.
- **Above-ICP-cap cluster**: dsmn8 ($6.6M), engagebay ($6M), gmass ($8.6M), gosquared ($8M) all scored 2. Pattern: bootstrapped tools that scale past $5M ceiling lose FRS engagement window because the buyer has already chosen their AI direction.
- **New pattern: employee-advocacy category** — DSMN8 and GaggleAMP are mirror-image $5-6M bootstrapped tools with bolt-on AI Copy Variations / Content Assistant. Neither addresses low-participation workflow underneath. Would be 4s if ARR were lower; both got 2-3.
- **Sourcer-data integrity issues** in this batch: 5 of 23 had wrong/missing founder data. easil (Lisa Smith → actual Annette McDonald), eventcube (Bilal Tahir → actual Wil Troup + Kieran Alington), frill (Khosro Ezaz Nikpay → actual Mike Hill), endorsal (blank → Dean Walton), geckoboard (blank → Paul Joyce). Outreach writer should backfill before drafting.
- **getlatka revenue lookups** confirmed reliable again — surfaced clean ARR for dsmn8, engagebay, frill, folderly, geckoboard, gitbook, gmass, gmelius, gosquared, endorsal, eventcube-absent, gaggleamp, flagsmith. Always Latka first.
- **GitBook agent-ready confirmation**: shipped GitBook Agent + MCP server + AI Assistant + AI Linting and positions docs as "the knowledge layer for AI." Textbook agent-ready fit 1, alongside Flagsmith with its own MCP server.
- Environment: one transient 429 rate-limit hit on formspree prospect-row update during the batch (3 parallel researcher agents sharing 60 req/min quota). 30-second backoff + retry succeeded. Throttling at 1.2s between operations kept the rest of the batch clean.

### 2026-05-15 — 23 prospects (batch C-D, parallel run, IDs certifi→docvilla)
- 9 researched (fit 3+), 14 not-a-fit. Avg fit 2.65. Distribution 1:9 / 2:3 / 3:5 / 4:6 / 5:0.
- Top fit 4 (no fit 5 this run): charliehr, clinicsense, cliniko, coreplus, dashclicks, detrack.
- **Founder-published "our stance on AI" blog = highest-quality personalization hook found yet.** Joel Friedlaender (Cliniko) has an *existing public document* of how he thinks about AI in his product. This is the strongest possible founder-stance signal — better than podcasts, better than LinkedIn frequency. Memory pattern: when researching a fit-4 candidate, search `"<company>" "stance on AI"` or `"<founder>" AI principles` — if such a post exists, automatically score +1 and lead outreach with this exact reference.
- **Revenue contraction (Latka YoY decline) = automatic downgrade by 1.** Confirmed Crazy Egg dropping from $6.3M (2024) to $4.5M (2025) per Latka — 28% YoY contraction. Even though both numbers land in ICP, a shrinking company is in defensive cost-cutting not strategic-assessment mode.
- **Holding-company portfolio = automatic disqualifier (confirmed Docparser → SureSwift Capital).** Founder Moritz Dausinger departed at 2018 acquisition. No founder buyer = no FRS conversation. Pattern: SaaS holding-co rollups (SureSwift, Constellation Software, Tiny Capital, Awesome Motive, Saas.group) = automatic fit 1.
- **"Agentic [Category] Platform" rebrand pattern extended.** Cosmic explicitly created the "Agentic Content Platform" category for its 4 AI agents (Code/Team/Computer Use/Content). Same disqualifier pattern as Stacker (Agentic Apps), Holistics (Agentic AI), Robomotion (Agentic Automation), Activepieces (Agentic). When the marketing landing page leads with "Agentic [Category]" — fit 1.
- **Brothers/siblings as co-founders = positive reachability signal.** Denney brothers (ConvertFlow), Goh siblings (Detrack), Patel/Shah pair (Crazy Egg). When both still on LinkedIn, hooks compound.
- **Vertical SaaS healthcare practice mgmt strongest fit category this batch.** ClinicSense, Cliniko, coreplus all fit 4. CharmHealth fit 1 (agent-ready). Differentiator within vertical: has the company shipped MCP/multi-agent yet? No → strong fit; yes → automatic fit 1.
- **Founder-departure-plus-acquisition disqualifier** (Cogsy → Mayple 2023, Adii Pienaar → Automattic 2024 → Ubundi 2025). Pattern: when founder's LinkedIn shows current role at a different company, check for acquisition; if both founder-departure AND acquisition exist, automatic fit 1.
- **Datafold confirmed agent-ready disqualifier** — MCP server live + AI migration agents + AI in CI + Gleb publishing about "agentic data engineering boom" + $24M total raised. Matches prior pattern (Stacker, Cosmic, Datafold all VC-funded plus agent-ready).
- **Document360 above-ICP-ceiling disqualifier confirmed at $10M ARR end-2024** — Kovai.co overall $20M+ revenue, 300+ employees, Eddy AI + Ask Eddy already strategic. Pattern: when Latka or yourstory shows ARR ≥$10M, automatic fit 1 even if AI posture would otherwise be appealing.
- **Env note**: Google Sheets API write rate limit (60/min) hit at ~15 consecutive writes. Resolved with 70s wait. Pattern: in batches of 20+ writes, plan a 70-second pause after every 15 writes. Read limit (60/min) hit when 4 parallel researcher agents share the same FRS_PROSPECTS_SHEET_ID — coordinate or stagger parallel runs.
- **Contact-data gap continues**: churn-buster, churnkey, distill-io, docvilla, docparser, changetower, cronitor came in with empty contact_linkedin and/or contact_name. Even fit 3+ rows (churn-buster, churnkey) unreachable without sourcer backfill. **contentstudio has duplicate rows in prospects tab** (g2-mature-incumbent + reddit-displacement sources) — sourcer should dedupe.

### 2026-05-14 — Full CRM re-enrichment (56 prospects, user-directed)
- User requested deep re-research of ALL 56 leads (not just `status=identified`) with richer fields: product_state, managed/maintenance status, est_revenue, decision_maker contact, AI posture details. Bypass standard 25-limit and `force=true` applied to all.
- All 56 prospects updated (cache + prospects rows). Fit dist: 1:11 / 2:16 / 3:8 / 4:15 / 5:6. Avg ~2.85.
- New patterns / confirmations:
  - **Founder transition disqualifier** — applied to Fathom (Paul Jarvis stepping back Apr 2026): downgrade by 1 even if other signals are strong. Decision-making is distracted during founder change.
  - **AppSumo LTD source = consistent fit 1-2 default** confirmed across NinjaPipe, Heffl, Flowlu, Sociamonials, Charla, ThriveDesk, Senja. The LTD pricing model itself signals sub-ICP ARR.
  - **MCP-shipped disqualifier** extended: NinjaPipe (AI MCP), Flowlu (MCP Server with 427 tools), MailerSend (MCP server NEW), Reflag (MCP), Geekbot (Geekbot MCP). When a prospect ships an MCP server, they have already executed the agent-readiness leg of the FRS thesis. Fast disqualifier.
  - **Latka revenue updates are the highest-leverage research move** when ARR is the deciding factor. Confirmed numbers this run: Papermark $4.1M, Userlist $1M, ZenMaid $2.6M (doubled YoY), Activepieces $1.7M, Refiner $1.2M, eWebinar $5M (per founder), Survicate $4.4M, JobTread $4.36M (ZoomInfo), Senja $800K, Whalesync $405K.
  - **Founder-led + AI-saturated category + bootstrapped + workflow-heavy = consistent 4-5** — pattern reinforced across Userlist (Jane Portman), Outseta (Geoff Roberts), Savio (Ryan Stocker), ZenMaid (Amar Ghose), Financial Cents (Abdullah Almsaeed), EmailOctopus (Jonathan Bull), Better Proposals (Adam Hempenstall), Paperbell (Laura Roeder), Dubsado (Becca Berg).
  - **JobTread upgraded 3→4** — confirmed Deloitte #6 Tech Fast 500, $4.36M revenue, EY Entrepreneur 2025, founder Eric Fortenberry public. AI Connector is bolt-on. Construction vertical pattern works.
  - **Plausible downgraded 5→4** — 18K paying subscribers may push above ICP ceiling at 10-person team. Privacy-analytics ARR ceiling warning from prior memory applied.
  - **Vertical SaaS at >100K customers (e.g. Carepatron 100K clinicians)** may exceed ICP even when AI posture is strategic. Watch absolute customer counts vs ICP ARR ceiling, not just employee count.
- Sourcer-data gap: contact_name and contact_linkedin were missing on prospects 1-15 (the original AppSumo batch from April). This run identified 14 of 15 founders via web research and wrote them into the prospects.notes column under `decision_maker=`. Sourcer should backfill columns H/J properly for the outreach writer to use them.
- Env note: `pip` is not in PATH on this machine (zsh). Use `python3 -m pip install --user --break-system-packages -r scripts/requirements.txt`. Sheet ID also not in env — located via `google.cloud Drive API .files().list()` filtering for spreadsheet mimeType.
