# Research Run — 2026-05-15 (Wave 2, batch returnlogic→speedscale)

## Counts
- Total prospects: 23
- Researched (fit 3+): 9
- Not-a-fit (fit 1-2): 14
- Cache hits applied: 3 (salesmate, skylead, smartreach)
- Fresh research: 20
- Errors / write failures: 0
- Sheet write totals: 43 (20 cache upserts + 23 prospects updates)

## Fit Score Distribution
- 5: 0
- 4: 4 (returnlogic, salesflare, sematext, setmore)
- 3: 6 (routific, runsensible, sendspark, simplesat, simplybook-me, smarterqueue, smartsupp, socialbee — actually 8 — see top list)
- 2: 3 (sleekplan, snappa, sourcify)
- 1: 6 (satismeter, seam, slite, smartsuite, speedscale, salesmate)

Avg fit score: ~2.7

## Top 5 by Fit Score
| ID | Score | Recommended Angle |
|---|---|---|
| returnlogic | 4 | AI-for-users workflow audit; AI-empty in AI-saturated returns category, Loop/AfterShip threats |
| salesflare | 4 | Agent-readiness — Salesflare as agent-orchestratable CRM (vs Attio AI-native) |
| sematext | 4 | AI-for-users workflow-first AI in observability (vs Datadog Bits AI) |
| setmore | 4 | AI-for-users workflow-first AI booking (vs SimplyBook/Motion/Reclaim) |
| skylead | 4 | Workflow-first AI sequence intelligence beyond personalization (cache-hit) |

## Other Fit-3 Researched
- routific (3): agent-readiness — drivers orchestrating routing engine through NL agents
- runsensible (3): AI-for-users — workflow-first AI to outflank Clio Duo
- sendspark (3): agent-readiness — be invokable from sales-orchestration agents
- simplesat (3): AI-for-users — workflow-first AI to capture Delighted sunset migration
- simplybook-me (3): agent-readiness — beyond voice booking, invokable by scheduling agents
- smarterqueue (3): workflow-first AI — content-recycling intelligence vs caption-gen parity
- smartreach (3): agent-readiness + workflow-friction audit on existing AI (cache-hit)
- smartsupp (3): agent-readiness — Mira as orchestratable vs destination chatbot
- socialbee (3): agent-readiness — SocialBee as orchestratable in marketing-agent stack

## Not-a-fit Reasoning
- **satismeter (1)** — DISQUALIFIER: acquired by Productboard May 2022, not an independent SaaS. Sourcer should remove from queue.
- **seam (1)** — Seam IS the agent-readiness API for IoT (1000+ devices, 25M ops/mo) — they're the disruptor not the disrupted.
- **slite (1)** — MCP server shipped (api.slite.com/mcp) + Super agent integration + Ask AI = agent-ready disqualifier per memory.
- **smartsuite (1)** — AI-native rebrand (AI Agents, Agent Studio, Field Agents) + Feb 2025 $13M Series A ($38M total) = double disqualifier per memory patterns.
- **speedscale (1)** — Explicitly MCP-native and MCP-ready; feeds production traffic to Claude Code/Cursor/Copilot. They're the disruptor.
- **salesmate (1)** — MCP server + Skara enterprise AI agent platform shipped (cache-hit; agent-ready disqualifier).
- **sleekplan (2)** — 5-person team + AppSumo LTD presence = likely sub-ICP ARR floor; Sleek Intelligence already shipped.
- **snappa (2)** — ICP $3.2M but Canva Magic Studio dominance + founder running goodmetrics.io side project (attention split).
- **sourcify (2)** — Nathan Resnick transitioned to Board Member; sheet contact is not the operating CEO. Memory: founder-transition downgrade.

## Memory Pattern Validations (this batch)

1. **MCP-shipped fast disqualifier** — confirmed AGAIN this batch on Slite (api.slite.com/mcp), Speedscale ("MCP-native" positioning), and the cached Salesmate. 3 of 23 = 13% MCP-disqualifier rate, consistent with memory.

2. **AI-native rebrand + Series A growth-mode double disqualifier** — SmartSuite is the textbook case this batch: rebranded as "AI-native work platform" with Agent Studio + $13M Feb 2025 Series A. Per memory both patterns combine.

3. **Acquired-SaaS disqualifier** (NEW PATTERN) — SatisMeter acquired by Productboard May 2022 surfaced as identified prospect. The sourcer should add an "acquired by..." check before promoting prospects. Recommend memory entry: **when prospect is acquired subsidiary of a larger SaaS company, it's a disqualifier (decisions made at parent level) — flag for sourcer to remove.**

4. **Founder-transition downgrade** — Sourcify's Nathan Resnick now Board Member (sheet correctly flagged). Per memory 'founder retirement / transition in progress = downgrade by 1'. Applied — sheet contact is no longer operating decision-maker.

5. **AI-empty in AI-saturated workflow-heavy category = fit 4** — confirmed on returnlogic (vs Loop/AfterShip), sematext (vs Datadog Bits AI/Splunk/New Relic Grok), setmore (vs SimplyBook AI Voice/Motion/Reclaim). Strongest predictive pattern remains accurate.

6. **Bootstrapped + active-publisher founder = strong fit signal** — confirmed on salesflare (Jeroen Corthout multi-podcast + published 8-AI-CRMs comparison himself), smarterqueue (Claude Schneider Cambridge background, bootstrapped story blog, "following AI progress for over a decade" statement).

7. **Comprehensive AI suite shipped in last 6mo = downgrade to 3** — confirmed on socialbee (Copilot AI, Engage Copilot, Autopilot), smartsupp (Mira AI with stock-aware May 2025 update), salesflare (timeline summaries + next-step suggestions + Q&A).

8. **YC + agent-ready disruptor = fit 1** — Seam (YC S20 with 1000+ device IoT API), Speedscale (YC with MCP-native), Slite (YC alum with MCP). Pattern: YC alums in workflow categories that have shipped MCP/agent-native are textbook score-1.

9. **Sheet founder-data integrity issues** — setmore listed as 'Sudheer Bandaru' but actual founder/CEO is Bryce Morrow (per Latka, CBInsights, memory note). Sheet `notes` already flagged this. Sourcer should backfill.

10. **Salesmate appears 3x in sheet** as duplicate rows from different source tags (directory, g2-mature-incumbent, reddit-displacement). Updated all 3 to the same status — but sourcer should consolidate to a single row.

## Flagged Issues for Caller / Sourcer

1. **Sourcer data integrity**:
   - `setmore` contact_name is wrong ('Sudheer Bandaru'); correct: Bryce Morrow per Latka/CBInsights.
   - `salesmate` appears as 3 duplicate rows from different sources — consolidate.
   - `setmore` appears as 2 duplicate rows; consolidate.
   - `satismeter` should be removed entirely — acquired by Productboard 2022.

2. **Contact data gaps blocking outreach** for fit-3+ rows that need backfill before outreach writer can draft:
   - `returnlogic` (fit 4) — has Peter Sobotta LinkedIn; missing email.
   - `salesflare` (fit 4) — has Jeroen Corthout LinkedIn; missing email.
   - `sematext` (fit 4) — has Otis Gospodnetic LinkedIn; missing email.
   - `setmore` (fit 4) — WRONG founder name; missing LinkedIn for correct founder Bryce Morrow.
   - `runsensible` (fit 3) — has founder name; missing LinkedIn and email.
   - `setmore` (fit 4) — missing LinkedIn on the correct CEO Bryce Morrow.

3. **No errors during sheet writes** — 90s pause every 10 writes pacing held cleanly.

4. **No fit-5 this batch** — typical for wave 2 (deeper into the alphabet, more dupes and acquired/mcp-shipped companies).
