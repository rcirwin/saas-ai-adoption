---
name: intl-bootstrapped-topup-2026-06-10
description: 2026-06-10 intl-bootstrapped TOP-UP run — 38/38 added in fresh non-US regions (NL/DE/Nordics/BE/CH/AT/Croatia/Greece/Hungary/Slovakia/Latvia/Lithuania/India/Vietnam/Israel/Japan/SA/Colombia) after a same-day 50-prospect intl run
metadata:
  type: project
---

# Intl-bootstrapped TOP-UP run 2026-06-10 — 38/38 added

Top-up after the same-day 50-prospect intl-bootstrapped run. Target 38 net-new, hit 38. Prospects tab 1481→1519. See `agents/sourcing-runs/2026-06-10-intl-bootstrapped-topup.md`.

**Why:** the earlier same-day batch had leaked 21 exact-slug duplicates, so a TWO-LAYER dedup was mandated: (1) full prospects read into id+name set at start, (2) per-candidate `count prospects id=<slug>` immediately before EVERY append. Layer 2 caught 24 already-present slugs this run (mailbutler, livespace, saleshandy, adversus, clockster, m2north, swordfish, ubidots, b2chat, treblle, contactpigeon, talentlyft, trackingplan, invopop, nailted, sumtracker, propworx, callbi, mysheq, eazybi, sellfy, desktime, dux-software, wispro, +regcheq/geti/instacrops/cardda/encuadrado/befective/hippobuild/visionect/quant-retail/tridens). The guard is essential — do not skip it.

**Fresh-region strategy that worked:** earlier run mined Eastern-EU/Ukraine/Estonia/Philippines/Bangladesh/Egypt/Spain/France/Turkey/LATAM, so this top-up deliberately worked DIFFERENT geographies. Richest FRESH veins:
- **Croatia** (6 added: GIS Cloud, Orioly, Kliker, Jenz, MyRent, Rentlio) — data/analytics + vertical-ops bootstrappers, mostly Zagreb/Zadar.
- **Greece** (Tekmon, tgndata, Intale) — price-intelligence + retail-BI + no-code-QHSE, all bootstrapped/modest.
- **Latvia** (SkyBill, ATOM Mobility) + **Slovakia** (ContracTool, Pygmalios) + **Lithuania** (Portal365) — Baltic bootstrapped vertical/analytics.
- **Netherlands** (SpinOffice, SuperSaaS, Notificare, Relatics, Shoxl, Vurbis) — old profitable bootstrappers (SuperSaaS 2007, Vurbis 2001, Relatics 2003).
- **Belgium** (Billit, RESPONSUM, Prezly) — e-invoicing/GDPR/PR, modest-VC-or-bootstrapped.
- **Switzerland** (Int4 SAP-testing, SwissMadeMarketing SEO) + **Germany** (Swaarm, IMG.LY creative-SDK).
- Singletons: Norway (RAYVN), Finland (Showell, Futures Platform), South Africa (Flowgear iPaaS), Vietnam (LitCommerce, Subiz), Israel non-AI (Orcanos QMS, Arbox), Spain (TEIMAS), Denmark (PatentRenewal), Colombia (QSystems).

**DQ patterns that recurred (check FIRST):**
- **GetLatka $5M-cap stale trap** ([[getlatka_5m_cap_stale_snapshot_trap]]): Analyse2 (card $4M→$42.9M), Prefixbox ($4.6M→$8M), Swat.io ($5M→€7.3M), Good Sign ($4.8M→$10.5M). Cards at/near $5M MUST be per-company revenue-verified.
- Recent acquisitions/PE rollups (Nordics-heavy): Minuba(Solar stake), MyExpatTaxes→Synacti, RateBoard→Zucchetti, Stardekk→Lighthouse, CleanManager→zvoove, Big Red Cloud→Ishikawa, Pulseway→Kaseya, CRM-service→Monterro, Veset→PLAY, Fairwalter→W&W, Wheelsys→Halcyon PE, Virtusize(2018), Wispro→IXC.
- Rule #6 / over-funded-vs-revenue: Nordsense $10.49M, Conjura €15M, Neticle $3.71M+50emp, Treblle $7M@$1.7M ARR, Good Sign $10M Bocap.
- AI-native / AI-forward positioning: Colocio, TestResults.io, Propel PRM(+Signal AI), Quickchat, Cradle, Langdock, Blazeup, Polaris, Halosis, DailyBot.
- YC-recent + founded 2021-2022 (lean "ahead of us"): StafBook(W22), Invopop(W23), Proglix(W23), Trackingplan(YC).
- Multi-venture holding parent: 3cket (Paulo Silver runs 9 ventures). Acquirer/roll-up: Viveo Health (bought 3 cos), Webropol (rolling up survey cos), Mangools (itrinity $25M).
- Under $500K floor / 2-person: Quantifly $330K, HorusSoftware 2-emp, several Mexico small-cap.
- US-HQ now (out of non-US territory): Wakeupsales (San Jose), Ubidots (Boston).

**Verification gotchas:**
- 27/38 LinkedIn verified and captured in-row; 11 left literal `unknown` (never guessed). 3 of those 11 (Prezly/Gijs Nelissen, Portal365/Adel Salah `/in/adel-salah-42aa9165`, Rentlio/Marko Misulic `/in/markomisulic`) had founder verified AFTER append — APPEND-ONLY rule blocked updating the row. Next time: verify founder BEFORE the append so the URL lands in the row.
- GetLatka `&page=2` pagination does NOT work via WebFetch — only top 10 per cap tier fetchable; rotate countries/cap tiers instead.

**Related:** [[intl_bootstrapped_run_2026-06-10]], [[getlatka_country_pages_workhorse]], [[getlatka_5m_cap_stale_snapshot_trap]], [[ai_native_rebrand_wave_mena_2025]]
