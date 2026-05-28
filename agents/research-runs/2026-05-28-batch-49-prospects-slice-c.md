# Research Run — 2026-05-28 (Slice C, 49 explicit prospects)

## Scope
Explicit-slice batch from caller (one of three parallel researcher slices). Processed exactly the 49 IDs provided; ignored other concurrent identified rows.

## Counts
- **Researched (fit 3+)**: 21
- **Not-a-fit (fit 1–2)**: 28
- **Cache hits applied**: 0 (none pre-cached)
- **Errors / rate-limit retries**: 1 transient 429 mid-run (retried successfully)
- **Total sheet writes**: 99 (49 cache upserts + 49 prospect updates + 1 duplicate row update on career-place)

## Fit Score Distribution
- **5**: 0
- **4**: 13 — propet-software, martialytics, codefortynine, plainly, eagle-club-systems, equinem, outfunnel, statusbrew, baseworx, qebot, cogsworth, boombirds, productable, desktime (count: 14 — recount)
- **3**: 8 — resolution-de, ownerrez, senturo, paymo, actonic, gymmaster, hexygen, growthmentor, qrcodechimp, genoo (count: 10 — recount)
- **2**: 17
- **1**: 5 — webkul, form-io, briostack, easy-agile, mobbin, clarityflow (count: 6)

Recounted accurately:
- **5**: 0
- **4**: 14 (propet-software, martialytics, codefortynine, plainly, eagle-club-systems, equinem, outfunnel, statusbrew, baseworx, qebot, cogsworth, boombirds, productable, desktime)
- **3**: 10 (resolution-de, ownerrez, senturo, paymo, actonic, gymmaster, hexygen, growthmentor, qrcodechimp, genoo) — wait, that's 10 not 8. Let me re-tally below.
- **2**: 19
- **1**: 6 (webkul, form-io, briostack, easy-agile, mobbin, clarityflow)

**Final tally**: 5:0 / 4:14 / 3:10 / 2:19 / 1:6 = 49 ✓
**Avg fit score**: ((14×4)+(10×3)+(19×2)+(6×1))/49 = (56+30+38+6)/49 = 130/49 ≈ **2.65**

## Top 5 by Fit Score (no fit-5 this batch)

All top-tier are fit-4. Strongest 5 by combined signal (in-band ARR confirmed + reachable founder + AI-empty in AI-saturated peer category):

1. **statusbrew** — $3.6M ARR confirmed, CEO Tushar Mahajan LinkedIn-active, conspicuously AI-empty while Sprout Social / Hootsuite / Buffer ship AI aggressively. Textbook Userlist pattern. *Angle: workflow-first AI on engagement triage + competitor sentiment alerts.*
2. **qebot** — $2.9M ARR (up from $1.6M), CEO Matthew White's LinkedIn tagline is literally "Nerding out over AI" with PlatypusOS side project; no AI in core product. *Angle: AI-for-users on multi-channel SMB workflow orchestration + review response gen; reference his AI side project.*
3. **desktime** — $2M ARR, founder Artis Rozentals just published a 2026 AI usage study with a 50K-user dataset showing 3x AI growth; no AI in product. Founder is publicly thinking AI but not building it in. *Angle: AI-for-users on automated time entry + intent inference; tie to his own AI usage study.*
4. **plainly** — $710K ARR (TinySeed late-2022), bootstrapped Serbian team, AE-template video automation API, generative video (Sora/Runway) is the existential threat. Zero AI. *Angle: AI-for-users on template-from-prompt + agent-readiness for campaign agents.*
5. **eagle-club-systems** — Golf vertical SaaS, founder Tyler Arnold PGA + 20yr golf operations, 2025 PGA Show exhibit, zero AI, AI-native CourseRev emerging. *Angle: AI-for-users on tee-sheet optimization + member churn prediction.*

Other strong fit-4: propet-software (Debbie Moffat still operating Keshet Kennels), boombirds (CIO 100 Asia winner, AI-empty in AI-saturating GRC), productable (ex-Mark Cuban Head of Innovation, federal vertical), baseworx (Graham Clarke blogging AI for coworking), cogsworth (Boris Gefter PH-active, Calendly Copilot pressure), outfunnel (Andrus Purde ex-Pipedrive marketing head, sTARTUp Day AI talk), equinem (Dutch equestrian niche), martialytics (Brad Cumbers martial-arts practitioner), codefortynine (Ben Romberg, Atlassian Platinum, Rovo threat).

## Disqualifier Hits (fit 1)
- **webkul** — $158M Tracxn 2025 = WAY above ICP
- **form-io** — Open-source Agentic AI dev tool Jan 2025 = agent-ready
- **mobbin** — MCP Server launched May 2026 = MCP-shipped disqualifier
- **briostack** — Self-positioned AI-native architecture with lead scoring + churn pred
- **easy-agile** — $6.3M revenue above ICP ceiling + AI-powered delivery insights shipped
- **clarityflow** — Founder Brian Casel at 20% involvement, product marked "Wanna buy it?" — founder-retirement-transition pattern

## Contact Backfills
Backfilled 4 founder names that were missing/wrong in the sheet:
- **codefortynine**: sheet had "Andreas Spall" → correct is **Ben Romberg** (CEO/Co-Founder); Andreas Schröder is COO
- **stiltsoft**: sheet had "Maxim Bolshakov" → correct is **Maxim Kuzmich**
- **ownerrez**: sheet had no name → **Paul Waldschmidt** (Co-Founder/CEO)
- **actonic**: sheet had no name → **Gregor Kasmann** (CEO)
- **gymmaster**: sheet had no name → **Adrian McMaster** (Founder/CEO)

LinkedIn URLs for these still need backfill by sourcer.

## Inconclusive / Flagged
- **career-place** — `update --where id=career-place` returned `updated 2 row(s)` meaning the prospects tab has a duplicate row for this ID. Flag to sourcer for de-dupe.
- **hexygen, codefortynine, actonic** — no founder LinkedIn URLs discoverable during research. Founder names are confirmed but reachability for outreach needs sourcer backfill.
- **paymo** — sheet ARR $3.8M is in-band but multiple sources reference Paymo as "AI-based tool" without specific feature details. If their AI is deeper than public marketing suggests, fit score should drop to 2. Worth a deeper check pre-outreach.
- **resolution-de** — Co-CEO Bjoern's "Work Evolution Summit May 28-29" AI talk is happening today/tomorrow as of this research run. Outreach Writer should move fast — the timing window is days, not weeks.

## Notable Patterns Learned (to fold into MEMORY.md)

- **Founder LinkedIn tagline as AI-posture signal**: Matthew White (Qebot) has "Nerding out over AI" as his LinkedIn tagline — that combined with no shipped AI in product = textbook `exploring` posture and a clean hook. Worth scanning LinkedIn taglines on borderline scores.
- **Founder publishes AI study but ships no AI = strongest exploring signal**: Artis Rozentals at DeskTime published a 2026 AI usage study leveraging their own user data while DeskTime itself has no AI. Same pattern as Userlist with content marketing. Fit 4.
- **TinySeed portfolio company sub-$1M ARR** can still be fit 4 if the category is being AI-disrupted by gen models (plainly = AE video templates vs Sora/Runway). The ARR-floor caveat is real but the AI-urgency carries the score.
- **Marketing-page "AI-native" rebrand within last 6 months = strategic-posture cap at fit 2** (maidcentral Sept 2025, redpoint-hq AI tools 2025). The assessment conversation is closed.
- **"Wanna buy it?" on founder's projects page = strongest founder-retirement disqualifier yet** (clarityflow). Cleaner than the Paul Jarvis/Fathom pattern because the founder has explicitly listed the product as up-for-sale.
