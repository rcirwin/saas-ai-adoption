---
name: creative-sweep-run-2026-06-10
description: Creative-source sweep run — 9 net-new, 41 short of 50; creative-source pool is heavily pre-mined; batched check.py dedup-miss caused a duplicate
metadata:
  type: project
---

Creative-source sweep (Acquire.com / Practical Founders / SaaS Club / Starter Story / MicroConf / Indie Hackers / BareMetrics), US/UK/CA horizontal + AI-curious, 2026-06-10. Added **9 genuine net-new** of 50 target (huge shortfall, held quality).

**Why:** The "creative/indie disclosed-revenue" ecosystem is the SAME pool prior FRS runs + the four concurrent sourcers already mined. With ~1250 existing rows, dedup hit rate >60%, and of the rest an unusually high share were acquired (2024-2026 consolidation wave), over-ICP, VC-heavy (DQ rule #6), AI-native-rebranded, or multi-product-parent-owned. Genuine net-new bootstrapped US/UK $500K-$5M survivors are now scarce here.

**How to apply:**
- Starter Story success-story category pages (analytics-tool, software-business, saas-company, software-company) are the single best-calibrated creative source for sub-$5M B2B with LIVE disclosed revenue — mine these first next time. GetLatka confirms ARR/employees/bootstrapped/acquired fast.
- Practical Founders + SaaS Club archives skew LARGER and more acquired than ICP — low yield, deprioritize.
- Named-candidate verification (name the company, then search "[name] employees revenue acquired" + GetLatka) is the ONLY efficient path; generic listicle/"best X software" and "bootstrapped SaaS for Y" searches return comparison fluff with no financials — stop using them.
- Run "[name] acquired" + check for multi-product holding parent BEFORE qualifying. 2024-2026 was a heavy roll-up window.

**The 9 added (all verified LinkedIn, bootstrapped, not-acquired, not-AI-native):** third-wave-analytics (LIMS/Salesforce), stayfi (STR wifi mktg), propertydata (UK property analytics), thexyz (email hosting CA), huckabuy (SEO, AI-curious bolt-on), barn2 (WP/WooCommerce plugins UK), hms-software (TimeControl timesheets CA), songstats (music analytics), transistor (podcast hosting).

**DEDUP-MISS INCIDENT (process fix):** I appended `tallyfy` which already existed (producthunt, 2026-05-19). The slug WAS in my dedup set, but a multi-arg `check.py` call mis-reported it as NEW and I appended without re-verifying that single candidate. Created a true duplicate (append-only, couldn't delete; flagged for human cleanup in the run file). **Fix: before EVERY append, run check.py on that ONE id alone and read the result line, don't trust a batched check buried among many args.** See [[plateaued_horizontal_run_2026-05-28]] (single-clause update incident) for related care-around-write lessons.

**Concurrent-sourcer note:** prospects tab went 1252→1351 during the run; ~89 of that was the other four sourcers. Dedup snapshot taken once at start will go stale fast when sourcers run in parallel — expect a few collisions and verify per-append.
