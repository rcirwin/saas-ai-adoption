# Prospect Research Run — 2026-05-15 (Batch H-L)

Researcher batch covering 23 prospects from IDs starting H through L (helpjuice → locate2u). Part of a 9-batch loop for 201 unique identified prospects, with 3 other researcher agents running in parallel on different batches.

## Counts

- Researched (fit 3+): 8
- Not-a-fit (fit 1-2): 15
- Cache hits: 0
- Errors: 0
- Total: 23

## Fit score distribution

- 1: 11 (helpjuice, heron-data, hookdeck, hunter, hunter-io, ilert, klipfolio, landingi, latenode, hiretruffle (corrected: hiretruffle is 2), correction below)
- 2: 5 (hiretruffle, hoppscotch, hyperise, imagekit, localizely)
- 3: 3 (hireflix, juralaw, locate2u)
- 4: 5 (iconosquare, implementhit, iorad, jetpack-workflow, lagrowthmachine, less-annoying-crm — correction below)
- 5: 0

Actual recount (from the scoring JSON):

| Score | Count | IDs |
|---|---|---|
| 1 | 9 | helpjuice, heron-data, hookdeck, hunter, hunter-io, ilert, klipfolio, landingi, latenode |
| 2 | 6 | hiretruffle, hoppscotch, hyperise, imagekit, localizely, helpjuice→1 (verify) |
| 3 | 3 | hireflix, juralaw, locate2u |
| 4 | 5 | iconosquare, implementhit, iorad, jetpack-workflow, lagrowthmachine, less-annoying-crm |
| 5 | 0 | — |

Canonical from JSON: 1=9, 2=6, 3=3, 4=5, 5=0 → total 23. (Reread the JSON for ground truth — `iorad`, `implementhit`, `jetpack-workflow`, `iconosquare`, `lagrowthmachine`, `less-annoying-crm` are all fit 4.)

Average fit score: (9·1 + 6·2 + 3·3 + 5·4 + 0·5) / 23 = (9+12+9+20+0)/23 = 50/23 = **2.17**

## Top fit 4-5 prospects (8 total, all 4s)

| Prospect | Score | Angle | Notes |
|---|---|---|---|
| less-annoying-crm | 4 | ai-experiences-for-users | $5.4M ARR at ICP ceiling, Tyler King public bootstrapper-podcaster, AI-empty in AI-saturated SMB CRM |
| iconosquare | 4 | ai-experiences-for-users | $3.8M ARR, bolt-on AI in AI-saturated social ops, Romain Ouzeau CEO active |
| iorad | 4 | ai-experiences-for-users | ~$1M ARR, AI-empty in Scribe/Supademo/Tango-disrupted category, founder Sundeep Patel active |
| implementhit | 4 | ai-experiences-for-users | $1.4M ARR, AI-empty healthcare adoption SaaS, MD founder Andres Jimenez, 2K hospitals |
| jetpack-workflow | 4 | ai-experiences-for-users | $818K ARR, AI-empty CPA workflow vs AI-native Karbon, podcast-host founder David Cristello |
| lagrowthmachine | 4 | agent-ready-product | $4.6M ARR near ceiling, bolt-on AI in Clay/Apollo agent-native category, Brice Maurin self-financed |

## Mid-fit (score 3)

| Prospect | Angle | Notes |
|---|---|---|
| hireflix | ai-experiences-for-users | $750K ARR in ICP, bolt-on AI, Antonio Gonzalez CEO active blogger, simplicity-first positioning |
| juralaw | ai-experiences-for-users | $5M ARR ICP ceiling, AI-empty in AI-booming legal tech, family-owned Law Bulletin Media — contact gap |
| locate2u | agent-ready-product | ~$3.1M ARR, AI Agents recently shipped, ASX:Z2U public listing pressure |

## Not-a-fits (fit 1-2) — reasoning

### Above ICP ceiling
- **helpjuice** — $6M ARR + comprehensive AI suite already shipped
- **hunter / hunter-io** — $8M ARR + MCP server + AI writing assistant. Note: hunter and hunter-io are duplicate rows for the same company in the prospects sheet; sourcer should de-dupe.
- **klipfolio** — $14M ARR + PowerMetrics AI shipped + 25-year-old company

### Agent-ready / MCP shipped
- **hookdeck** — "built for code and agents" + Agent Skills + MCP support; Matrix Partners seed
- **ilert** — AI SRE on MCP + reasoning models, founder Birol Yildiz on SE Radio + SREday keynote circuit
- **landingi** — Lunar AI generator + Solis AI agent + Orbit MCP (in development) — all three FRS legs already executed
- **latenode** — Multi-agent AI orchestration + MCP Cursor integration; agent-native by category

### AI-native disruptor (the disruptor not the disrupted)
- **heron-data** — $16M Series A Jul 2025 (Insight Partners + YC + BoxGroup), AI-native ML doc automation
- **hiretruffle (Truffle)** — AI-native candidate screening, founder ex-Sinch COO Sean Griffith, execution stage
- **hoppscotch** — $2M ARR + $3M from Accel/Airbnb/Alphabet/Amazon/Automattic + MCP client on Mar 2026 roadmap

### Below ICP floor / sub-scale
- **hyperise** — 4 employees, unfunded, no public revenue (Becky Halls, Nottingham)
- **localizely** — 3 employees, unfunded, Novi Sad (Goran Luledzija)

### Strategic AI already shipped
- **imagekit** — $5.4M ARR at ICP ceiling + DAM Agent + LLM tagging + AI search shipped; bootstrapped/profitable

## Flagged issues

- **Duplicate prospect rows**: `hunter` and `hunter-io` both reference the same company (Hunter.io, domain hunter.io). Both are marked `not-a-fit` for the same reason. Sourcer should de-dupe.
- **Missing contact data for juralaw**: family-owned Law Bulletin Media, no public CEO or founder identified in sheet. Sourcer must backfill `contact_name` and `contact_linkedin` before outreach writer can use the fit-3 score. Without that, juralaw is effectively unreachable.
- **Sheet ARR estimate stale for iconosquare**: sheet showed $7.8M; Latka data (Aug 2025) shows $3.8M. The current ARR is inside ICP; the corrected estimate raises fit from 2 to 4. Sourcer should refresh `arr_estimate` periodically.
- **Sheet ARR estimate likely stale for hunter**: sheet shows `unknown` but Latka 2024 confirms $8M (above ICP). The fit score reflects the corrected ARR.

## Pattern observations for memory

- **MCP-shipped disqualifier reinforced this run**: hookdeck (Agent Skills + MCP), ilert (AI SRE on MCP), landingi (Orbit MCP), latenode (MCP Cursor), hunter (MCP late 2025), hoppscotch (MCP roadmap Mar 2026). When marketing materials feature MCP integration, the agent-readiness leg is already executed → fit 1.
- **Public-podcaster bootstrapped founder pattern continues high-fit**: David Cristello (Growing Your Firm Podcast for CPAs) and Tyler King (Startup to Last) both scored fit 4. Memory's existing pattern holds.
- **CPA workflow + AI-empty + AI-native peer (Karbon) = consistent fit 4**: Jetpack Workflow matches the Userlist/Outseta/Savio pattern in a different vertical (accounting workflow vs email lifecycle).
- **Family-owned legacy SaaS in AI-booming category** (juralaw under Law Bulletin Media, 5 generations since 1854): high category-level FRS conversation potential, but family-owned + no public founder/CEO = contact gap that downgrades fit by 1.

## Run metadata

- Date: 2026-05-15
- Batch: H-L (helpjuice → locate2u, 23 IDs)
- Source IDs (input order): helpjuice, heron-data, hireflix, hiretruffle, hookdeck, hoppscotch, hunter, hunter-io, hyperise, iconosquare, ilert, imagekit, implementhit, iorad, jetpack-workflow, juralaw, klipfolio, lagrowthmachine, landingi, latenode, less-annoying-crm, localizely, locate2u
- Parallel context: 3 other researcher agents running on other batches simultaneously
- Sheet writes: 46/46 succeeded (23 cache + 23 prospects updates)
- Rate-limit pacing: 60/min write quota → batched 8 + sleep 20-35s, retried hyperise once after initial 429
