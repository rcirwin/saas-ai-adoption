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

### 2026-05-15 — Batch H-L (23 prospects, helpjuice→locate2u)
- Researched 23, fit 3+: 8, not-a-fit: 15, cache hits: 0. Avg fit 2.17. Distribution 1:9 / 2:6 / 3:3 / 4:5 / 5:0.
- Top fit-4 (no 5s this batch): less-annoying-crm, iconosquare, iorad, implementhit, jetpack-workflow, lagrowthmachine + helpjuice excluded (fit 1, above ICP).
- All 46 sheet writes succeeded (23 cache + 23 prospects updates). Hit Google API write quota at write 17/46 — fixed with 90s pause + batch sizes of 5 between sleeps.
- New patterns / confirmations:
  - **MCP-shipped disqualifier extended** to: hookdeck (Agent Skills + MCP), ilert (AI SRE on MCP + reasoning models), landingi (Orbit MCP server in development), latenode (MCP Cursor integration), hunter/hunter-io (MCP server late 2025), hoppscotch (MCP client roadmap Mar 2026). The marketing-page MCP signal is the most reliable agent-ready disqualifier — even "MCP coming soon / on roadmap" is sufficient.
  - **CPA workflow + AI-empty + AI-native peer (Karbon AI Coworker) = consistent fit 4** — Jetpack Workflow ($818K ARR) matches the Userlist/Outseta pattern in accounting vertical. Karbon and Financial Cents have shipped AI; Jetpack hasn't. Strong FRS conversation.
  - **Founder-podcast-host pattern reconfirmed**: David Cristello (Growing Your Firm Podcast for CPAs) and Tyler King (Startup to Last) both scored fit 4. Memory's pattern continues to predict well.
  - **Family-owned legacy SaaS in AI-booming category** (juralaw under Law Bulletin Media, 5 generations since 1854) — high category-level FRS potential, but family-owned + no public CEO/founder = severe contact gap that downgrades fit by 1. Add this as a contact-availability heuristic.
  - **Duplicate prospect rows**: hunter and hunter-io are both Hunter.io (domain hunter.io). Sourcer should de-dupe. The behavior in scoring: write both as not-a-fit but flag in the run summary. Sheet-cleanup work for the sourcer.
  - **Stale sheet ARR estimates matter**: iconosquare's sheet ARR was $7.8M (above ICP → fit 2); Latka Aug 2025 shows $3.8M (in ICP → fit 4). The 2x difference flipped the score 2 points. When sheet ARR contradicts product/team size signals, always re-verify with Latka first.
  - **Hireflix-style "deliberately simple" positioning** in AI-saturated category = mid-fit (3 not 4) — founder may resist the deeper AI conversation because the brand is "we focus on one thing." Different from "AI-empty" where founder is open to AI but hasn't built it; "deliberately-simple" founders may have ideologically rejected AI complexity. Future: don't score 4 unless the founder has signaled openness.
- Env note: Both `FRS_GOOGLE_CREDENTIALS` and `FRS_PROSPECTS_SHEET_ID` must be exported in the bash session before any sheet.py call — they don't inherit reliably. Path: `/Users/ryanirwin/.config/frs/frs-agentic-system-ba5fe26b3a07.json`. Sheet ID: `1zgHoABX-oQ9pTHONFnnGBYGvuwMEGZ3S-JDIZY4y3go`.
- Rate-limit note: With 4 researchers running in parallel, the Sheets API per-user write quota (60/min) is the bottleneck. Pace writes at ~1 every 3s with 35s pauses every 5 writes. Reads are also limited to 60/min — bulk-reading the whole prospects/research_cache sheets and filtering in Python is much more efficient than per-ID reads.

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

### 2026-05-15 — 23 prospects (batch A–B, parallel run, IDs aero-workflow→casepacer)
- 11 researched (fit 3+), 12 not-a-fit. Avg fit 2.96. Distribution 1:5 / 2:7 / 3:7 / 4:3 / 5:1.
- Top: aero-workflow (5), bugfender + bugherd + buzzstream (4).
- **Critical sheet schema bug**: `research_cache` has NO `fit_score` column (header is A–L: prospect_id, researched_at, sources_checked, product_summary, workflow_complexity, ai_features_observed, agent_readiness, competitive_landscape, pain_signals, personalization_hooks, fit_assessment, recommended_angle). The agent definition's step 8 instructs us to pass `fit_score=<1-5>` to the upsert, which triggers `ValueError: 'fit_score' is not in list` and a non-zero exit, BUT the upsert still writes the other columns before failing. Net effect: cache rows are correct, but every upsert prints a traceback. **Fix forward**: drop `fit_score` from the cache upsert call. Sheet schema doc in `agents/data/prospects-sheet-schema.md` is correct; the agent definition is the source of the bug. Flag for caller.
- **PE-portfolio + new CEO disqualifier**: pattern emerged this batch across allbound ($43M Invictus → Channelscaler May 2025), bloomfire (Primus Capital → ex-Google Philip Brittan Mar 2025), capsule-crm (founder Stockdill → ex-Findologic Ledgerwood Jan 2023). PE-backed + CEO change in past 24mo = automatic fit 2. New CEO is in growth-execution mandate, not assessment-mode.
- **DevTools/API/BI MCP-saturation cluster**: 5 of 23 = fit 1 from this cluster. Apidog (MCP Server + Client), Browserless (MCP + AI-agents landing), Buttondown (MCP + API-first + anti-AI principled stance), Basedash (AI-native BI rebrand + Dashboard Agent). When sourcer pulls AppSumo/YC in DevTools/BI categories, expect 30%+ fit-1 rate from this disqualifier.
- **Founder LinkedIn role-change disqualifier extended (Apozy)** — Rick Deacon's current LinkedIn primary is 'Head of Platform @ NeuroVitals'. Same Fathom/Paul Jarvis pattern. **Add step to runbook**: always check the founder's CURRENT LinkedIn role line, not just the historical bio. If they've transitioned to another company, downgrade fit by 1.
- **Solo founder + Twitter-only + anti-feature + sub-ICP = fit 2 stack (Carrd)**. Solo alone isn't disqualifying (Buttondown), but solo + Twitter-only (no LinkedIn) + explicit anti-feature philosophy + 1-page-site (low workflow complexity) makes the $30K engagement disproportionate.
- **Open-source freemium accounting auto-disqualifier confirmed**: Akaunting + Bigcapital both fit 1-2. The self-host-free + paid-cloud model means revenue is sub-ICP even when downloads are huge (Akaunting 300K+ users). Same pattern as AppSumo LTD.
- **Aero Workflow = highest-fit pattern repeated**: workflow-heavy vertical SaaS (CAS accounting firms) + AI-empty + AI-saturated category (Karbon AI Triage) + bootstrapped + founder Laura Redmond is Intuit Top 100 ProAdvisor + publishes regularly. Same Financial Cents pattern from prior memory. When all 5 of these hit, score 5.
- **Buzzstream = textbook FRS conversation**: link-building category being reshaped by LLM citations + AI Overviews → the workflow itself is changing, not just whether to add AI to it. Paul May triple-hatted founder reachable. This is the cleanest "FRS angle that's not just AI bolt-on" of the batch.
- **Sheet API rate-limit**: with 4 researchers running in parallel sharing project quota (408112219444 @ 60/min), hit 429 twice this run. /tmp/frs_retry.py exponential-backoff helper resolved both. Recommend `scripts/sheet.py` add native backoff so all agents inherit.
- **Website-unreachable rate this run**: billsby.com 404 (bare + www both) — possibly post-acquisition; bonsai (hellobonsai.com) 403 (Cloudflare bot block). Used getlatka/crunchbase/sacra/growjo to triangulate. Pattern: when WebFetch fails on the primary domain, getlatka.com is the highest-leverage fallback.
- **Sourcer contact-data gaps on fit-3+ rows** that block outreach: aero-workflow (no LinkedIn, no email — TOP scoring this batch!), beeceptor (CTO Ankit Jain no LinkedIn/email), bytebase (Tianzhou Chen no LinkedIn/email), buzzsprout (no contact_name at all — should be Tom Rossi), buzzstream (no LinkedIn — Paul May confirmed at /paulmay2/), billsby (wrong decision_maker — should be Ian Campbell per CBInsights, not Paul Murphy).

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

### 2026-05-15 — 25 prospects (sales-engagement / feedback / wholesale batch)
- 11 researched (fit 3+), 14 not-a-fit. Avg fit 2.24. Distribution 1:11 / 2:3 / 3:5 / 4:6 / 5:0.
- Top fit-4 cohort: skylead, zonka-feedback, simplesat, orderease, vero, tiphaus.
- Five prospects deferred (returnlogic, recruiterflow, spendflo, setmore, trunkinventory) due to 25-cap. Next run should target those first.
- **Acquired-in-last-24-months disqualifier**: VBOUT (ThriveCart Feb 2026), SatisMeter (Productboard May 2022). Pattern confirmed: founder decision authority + AI roadmap freedom both collapse post-acquisition. Mailtrap is part-of-Railsware (\$17-20M parent) which is a related but weaker version — Mailtrap product itself was further disqualified by MCP shipping.
- **MCP-shipped disqualifier hardened**: 3 fresh confirmations this run — Salesmate (MCP + Skara enterprise agent platform), Mailtrap (MCP + "Email API for AI Agents" landing), Userback (Userback MCP). Pattern is now unambiguous: any MCP server in product = fit 1.
- **B2C-leaning prosumer SaaS at ICP-band revenue is fit 2 not 4**: Vendoo (\$5M revenue from individual resellers @ \$19.99-\$69.99/mo) and Mailmeteor (\$10-50/mo Gmail extension to 7M mostly-free users) both look ICP-ish on revenue but B2C customer base undermines the FRS workflow-research value (personas aren't B2B SaaS, customer interviews harder, decision-maker isn't paying for workflow assessment). New rule: check customer-type (B2B vs B2C/prosumer) before scoring above 2.
- **Active acquisition/transition window**: Springbot (new majority owner Jan 2025 + Identity Matrix acq Sept 2025) — extension of the founder-transition disqualifier. When strategy is being actively rewritten by new ownership in the past 12 months, the \$30K assessment is wrong timing. Defer 6-12 months. Score 2 not 4.
- **Vertical SaaS + AI-empty peer set pattern = consistent fit 4** confirmed three more times: Simplesat (MSP-CSAT, only AI summarization), OrderEase (B2B wholesale, no AI), TipHaus (restaurant tip distribution, AI posture none). Plus near-pattern Vero (data-native product email vs AI-investing Customer.io). This is now the most reliable fit-4 indicator after "bootstrapped + AI-saturated category + workflow-heavy."
- **WebFetch is dead for prospect company sites this session**: every direct WebFetch to mailmeteor.com / smartreach.io / skylead.io / salesmate.io / etc returned HTTP 403. Likely user-agent bot blocking. Always fall back to WebSearch + Latka/Tracxn/Crunchbase. Budget 2-3 WebSearch queries per prospect.
- **Sheet has duplicate prospect rows**: salesmate (3 rows), userback (3 rows), trustmary (2), encharge (2), setmore (2), memberspace (2), paperform (3), sunsama (2), contentstudio (2), helpcrunch (2), bugherd (2), capsule-crm (2). `sheet.py update --where id=X` correctly updates all duplicates so data stays consistent, but sourcer should de-dupe. Flag to caller.
- **No environment hiccups this run** — Python deps already satisfied, FRS env vars working without manual export. Pre-flight pip install was a no-op.
- **getlatka revenue lookups remain the highest-leverage research action** — clean hits this run for smartreach (\$4.1M), salesmate (\$3.3M), pabbly (\$3M / ₹25.4Cr), mailtrap (\$1.7M), zonka-feedback (\$3.4M), retently (\$1.7M), userback (\$1.3M), simplesat (\$2.6M), springbot (\$3M), vendoo (\$5M), reform (\$750K).
