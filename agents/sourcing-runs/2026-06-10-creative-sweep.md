# Sourcing Run — Creative-Source Sweep — 2026-06-10

## Run metadata
- Source: creative-sweep (sources NOT in standard playbook)
- Territory: US/UK/CA horizontal bootstrapped B2B SaaS + AI-curious (non-AI-native) tools
- Target: 50 net-new qualified prospects
- Net-new qualified added: **9** (10 appended, but 1 was a missed-dedup duplicate — see Data Quality below)
- Candidates evaluated: ~120+
- Disqualified / skipped: ~95 (dedup, acquired, over-ICP, VC-heavy, AI-native, B2C, non-US-overlap, solo, too-small)
- Shortfall vs 50 target: **41**. Reported honestly per mandate — held quality over volume.
- Linear: SKIPPED (per instructions)
- Git: NOT committed/pushed (per instructions)
- Prospects tab: 1252 at run start → 1351 at run end (note: ~89 of the increase came from concurrent sourcers running in parallel; only 10 rows were appended by this run)

## Why the shortfall (important context)
The "creative source" ecosystem (Acquire.com, Practical Founders, SaaS Club, Starter Story, Failory, BareMetrics open-startups, MicroConf, Indie Hackers, build-in-public) is the SAME curated pool that prior FRS runs and the four concurrent sourcers have already mined heavily. With ~1250 existing rows, the dedup hit rate exceeded 60%, and of the remainder a very high share were:
- **Acquired** (The Receptionist→Sign In Solutions Jan 2026; ProSpend→ISH 2025; noCRM.io→Positive Group; Viima→HYPE; NapoleonCat→RTB House; Prerender→saas.group; Studio Ninja→ImageQuix; Idea Drop→Wazoku; Fomo→Relay Commerce; Pony Express/Taplio→lempire; Text Request→Commify; FirstPromoter→SpringWater; SocialBee→WebPros; Rewardful→saas.group; SatisMeter→Productboard; Timeular→TimeTac; Cushion→LendingClub/shut)
- **Over-ICP** (Salesmsg $10M+, Stukent $25.9M+PE, HappyFox $20M, Close $40M, Concord $38.7M raised, GoSquared $8M, Buzzsprout $5.6M, Knack $11.5M, Caspio $120M, Text Request $15M, Everflow $30M, Cledara $24.4M raised)
- **VC-heavy / DQ rule #6** (Coassemble $6.6M raised, ReturnLogic $18.8M, Softr $15.7M, Avoma $12M, Explo, Slite $15.4M)
- **AI-native positioning** (Whippy, TxtCart "AI-powered SMS", Scribie AI-first pivot, Blend, vidby, AiFA Labs)
- **Multi-product holding parent** (IPfolio→ipan Delegate Group; Document360→Kovai.co)

GetLatka company-name-first verification + "[name] acquired" precheck were the workhorses, consistent with memory. Generic listicle/comparison searches were low-yield; named-candidate verification was the only efficient path.

## Most productive creative sources
1. **Starter Story success-story pages** (disclosed annual revenue) — surfaced Third Wave Analytics, StayFi, PropertyData, Thexyz, Barn2, HMS/TimeControl, Songstats, Transistor. By far the best-calibrated for sub-$5M B2B with live revenue.
2. **GetLatka profiles** — confirmed ARR/employees/bootstrapped for nearly every candidate; caught over-ICP and acquisitions fast.
3. **Practical Founders podcast guest archive** — high signal but skews larger/acquired; surfaced Tallyfy, Huckabuy (most others over-ICP or acquired).
4. Acquire.com / MicroConf / Indie Hackers — homepages gated or listicle-only; low direct yield this run.

## Added prospects (9 genuine net-new) — id | company | category | arr | linkedin
1. third-wave-analytics | Third Wave Analytics | LIMS/laboratory software (Salesforce-based) | ~3.96M | linkedin: YES (Savitra Sharma, Founder/MD) — Starter Story
2. stayfi | StayFi | WiFi marketing for short-term rentals (B2B operators) | ~1.0M | linkedin: YES (Arthur Colker, Founder/CEO) — Starter Story
3. propertydata | PropertyData | UK property investment analytics | ~1.54M | linkedin: YES (Michael Dent, Founder) — Starter Story
4. thexyz | Thexyz | Business email hosting (privacy, Canada) | ~1.2M | linkedin: YES (Perry Toone, Founder) — Starter Story
5. huckabuy | Huckabuy | SEO / structured-data software (AI-curious bolt-on) | ~3.0M | linkedin: YES (Geoff Atkinson, Founder/CEO) — Practical Founders
6. barn2 | Barn2 Plugins | WordPress/WooCommerce plugins (B2B) | ~1.79M | linkedin: YES (Katie Keith, Co-Founder/CEO) — Starter Story
7. hms-software | HMS Software (TimeControl) | Enterprise timesheet/project mgmt (Canada) | ~2.7M | linkedin: YES (Chris Vandersluis, Founder/President) — Starter Story
8. songstats | Songstats | Music data analytics (B2B artists/labels) | ~1.74M | linkedin: YES (Oskar Eichler, Co-Founder/CEO) — Starter Story / analytics page
9. transistor | Transistor | Podcast hosting (B2B) | ~3.0M (est) | linkedin: YES (Justin Jackson, Co-Founder/CEO) — Starter Story

All 9 verified bootstrapped, $500K–$5M ARR, pre-2023 founding, 5–50 employees, not acquired, not AI-native, US/UK/Canada. All 9 have a verified contact LinkedIn URL.

## DATA QUALITY ISSUE — duplicate appended (action needed)
- **tallyfy** was appended by this run (id=tallyfy, source=creative-sweep) but a pre-existing `tallyfy` row (source=producthunt, created 2026-05-19) already existed. This is a missed dedup on my part — the slug WAS in the dedup set; a batched check.py call mis-reported it as NEW and I did not re-verify before appending.
- Result: the sheet now has **two** `tallyfy` rows (one at ~row 357, one at ~row 1341).
- Per append-only mandate I did not delete it. **Recommend a human delete the 2026-06-10 creative-sweep tallyfy row** (the older producthunt row, with any research/outreach history, should be kept).
- Net genuine new adds from this run = **9**, not 10.

## Notable skips (with reason)
1. The Receptionist — acquired by Sign In Solutions (Jan 2026)
2. ProSpend — acquired by ISH (2025)
3. noCRM.io — acquired by Positive Group
4. IPfolio — subsidiary of ipan Delegate Group (multi-product parent) + $4M
5. Salesmsg — over ICP ($10M+, 65 emp)
6. HappyFox — over ICP ($20M, 110+ emp)
7. Coassemble — $6.6M raised (DQ rule #6) + acquisition postponed
8. Studio Ninja — acquired by ImageQuix/Captura (2023)
9. Idea Drop — acquired by Wazoku (2023) + VC funded
10. Concord — $38.7M raised, Series B, 82-96 emp
11. GoSquared — over cap ($8M ARR)
12. Document360 — Kovai.co multi-product parent (BizTalk360, acquired Floik)

Other notable skips for territory-overlap discipline (clearly non-US/non-UK, deferred to the non-US sourcer): Snitcher (NL), Pallyy (AU, also solo/3-emp), Restworld (IT), Outvio (EE), Salonist (IN), Publer (AL, agency tool — left out to avoid overlap), Memtime (DE, Series A), Nuclino (DE, $598K/solo-ish).

AI-native DQs: Whippy, TxtCart (AI-first SMS positioning), Scribie (AI-first pivot), Blend, vidby, AiFA Labs.
