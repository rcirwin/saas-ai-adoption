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

### 2026-05-13 — DRY_RUN (post-batch cooldown, not starvation)
- Queue empty (0 identified prospects). 56 prospects total: 29 researched, 27 not-a-fit, 0 identified.
- **The 05-12 batch (14 prospects: zenmaid, emailoctopus, castos, referralcandy, carepatron, tettra, meruscase, mailersend, bannerbear, canny, crisp, customerly, loops, honeybadger) was sourced AND researched the same day, but no artifact file or git commit was produced by that run.** Sheet rows show updated_at=2026-05-12 with fit scores populated. Headless / direct-to-Sheet researcher runs are now a thing. Today is empty because that batch cleared yesterday.
- **Pattern: empty queue after a same-day sourced + scored batch is NORMAL cooldown, not a sourcing stall.** Distinguish this from the 05-06 / 05-07 / 05-08 cluster (which had no recent batch). When evaluating "is the pipeline starving?", check if the most recent batch was processed within the staleness window — if yes, empty queue today is fine.
- **05-12 batch top hits to remember**: zenmaid (5) and emailoctopus (5) are the new fit-5 entries. Both are bootstrapped public-founder SaaS in workflow-heavy categories (maid service ops; email marketing) — fits the established fit-5 pattern (vertical SaaS + AI-empty peer set + bootstrapped reachable founder).
- Caller asked for push to branch `claude/charming-lovelace-sAFwM` (not `main`). Outreach Writer per its spec reads from `main`. Flagging in returned summary so caller can merge or re-run from main.
- Pre-flight `pip install --user cffi cryptography` ran cleanly. Standard fresh-container behavior continues; keep pre-flight.
- No new scoring patterns this run (no prospects researched).
