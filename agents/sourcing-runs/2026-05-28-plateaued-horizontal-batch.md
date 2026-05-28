# Sourcing Run: Plateaued Horizontal SaaS Batch — 2026-05-28

## Run metadata
- Date: 2026-05-28
- Source: `plateaued-horizontal-2026-05-28`
- Caller-requested floor: **50 net-new** (hard floor)
- Net new added: **50**
- Candidates evaluated: ~180
- Disqualified: ~75 (acquired, AI-native rebrands, multi-product parents, vertical, raised >$10M)
- In-flight duplicates marked DELETED: 3 (ruler-analytics, cyfe, ditto — see notes)
- Linear issues created: 0 (LINEAR_SKIPPED — no .mcp.json in env)
- Prospects sheet before run: 489
- Prospects sheet after run: 539 (489 + 50)

## Caller territory: horizontal SaaS that peaked 5-10 years ago

Per caller instructions, strictly horizontal tools (no vertical industry SaaS, no Shopify/HubSpot/Slack ecosystem add-ons, no geographic indie roundups). Era filter: founded 2014-2019 ideally, exceptions for older plateaued tools.

## Category distribution (50 prospects)

| Category | Count |
|---|---|
| CRM (small business horizontal) | 7 |
| Calendar / Scheduling | 4 |
| Form Builder | 3 |
| Internal Wiki / Knowledge Base / Intranet | 4 |
| Social Media Management | 3 |
| Project Management / PSA | 3 |
| Time Tracking | 2 |
| Marketing Automation / Affiliate / Lead Gen | 5 |
| Analytics / Dashboards / Heatmaps | 4 |
| Survey / Feedback / Testimonial | 4 |
| Support / Communications / Client Portal | 2 |
| LMS / Course / Training | 2 |
| Other (workflow, ERP, API, accounting) | 7 |

## Geographic distribution

| Region | Count |
|---|---|
| North America (US, Canada) | 18 |
| Europe (UK, France, Germany, Spain, Netherlands, Belgium, Poland, Norway, Estonia, Bulgaria, Serbia) | 18 |
| India / South Asia | 7 |
| Asia / Pacific (Singapore, Australia, NZ, Taiwan, HK) | 5 |
| Middle East / Africa (UAE, Israel, Turkey) | 2 |

## Profile mix

- **Pure indie-bootstrapped (no funding raised)**: 38
- **Lightly funded ($150K-$1M total) then bootstrapped**: 8
- **Bootstrapped through profit, employee-owned**: 4

## All 50 company slugs (compact list)

`slab, book-like-a-boss, instatus, inspectlet, quire, clockodo, paymo, forms-app, brandchamp, form-io, perfectforms, avidian, reviewpush, upraizal, appointedd, statusbrew, clinked, mobbin, easyfeedback, save-solutions-as, exchange-leads, supporterhub, epicflow, essium, qebot, yunbit, dux-soup, juntrax, cogsworth, wiztopic, hypefury, papyrs, dealsignal, salesagility, apinizer, shortstack, ohmylead, interconnecta, genoo, onedirectory, procedureflow, cd2-learning, nocrm, velocity-worldwide, teamwave, workiom, productable, career-place, valora-digital, testimonial-to`

## In-flight duplicates marked DELETED

3 rows were appended then discovered to be already-present prospects from prior runs. They have been marked with `id=DELETED-DUP-DO-NOT-USE-*` so future dedup logic ignores them:

1. **ruler-analytics** — already added 2026-05-19 via directory run
2. **cyfe** — already-acquired (Cyfe acquired 2018, marked DQ retroactively)
3. **ditto** — discovered post-append to have raised $12.2M Series A from Craft Ventures (memory rule #6 DQ)

These accidental dupes happened because the dedup cache was checked at run start but not re-checked after every append. Memory update: check dedup against company name AND id, especially for similar slugs (e.g., `ruler-analytics` vs `ruleranalytics`).

## Major DQ patterns observed (rules applied)

1. **Acquired and rolled into parent** (~12 hits): Mouseflow, Tettra, Smartlook, Stackify, Sendible, Loomly, Cogsworth (no — was OK), Cyfe, Re:amaze (GoDaddy), Hubilo (Brandlive)
2. **Multi-product parent** (~8 hits): RightInbox/Ramp Ventures, Brainstorm Force/FunnelKit, QualityUnit/Post Affiliate Pro, REVE Group/REVE Chat, Outdo Inc (4 verticals)
3. **AI-native rebrand / DQ rule #7** (~9 hits): Groove HQ ("AI-Native"), Vervoe (AI assessment), Tarifica (AI pricing intel), Xtracta (AI doc extraction), Spiral (Conversational AI), Customerly drift, Deeper Signals (AI assessment)
4. **Raised >$10M with ARR <$5M / DQ rule #6** (~10 hits): Ditto ($12M Series A), Attio ($52M Series B), Slite ($15M), Mixmax ($22M), Whatagraph ($9.6M), Rollstack ($26M), Hubilo ($152M), Tella ($3.5M raised), Superlist ($13.8M)
5. **Vertical industry SaaS** (per user's filter, ~15 hits): ConexED (education), Booking Ninjas (hospitality), BrokerLift (insurance), Cliengo (LATAM CRM-but-conversational-AI), Branch8 (e-commerce APAC), Capture2 (govt contracts), AgileBio (LIMS), NetDirector (healthcare), Fieldhub (field service), Wagetap (consumer fintech), Stably (crypto), Canopy Analytics (real estate), CodersLink (talent agency), Whippy AI, Save Solutions (close call — kept since it's general accounting/recon)

## Profile A (most aligned to thesis) – top 12

These best match Future Ready Studio's "founder built solid horizontal tool, market is shifting under them, plateaued ARR" thesis:

1. **Slab** — knowledge base, $3M, founded 2016, single Series A then plateaued. Notion/AI threat
2. **PerfectForms** — form builder/workflow, $3M, founded 2001, single decade of slow growth
3. **Inspectlet** — session recording, $3M, founded 2011, plateaued in shadow of Hotjar/FullStory
4. **noCRM** — French CRM, $2.8M, founded 2014, simple-CRM market consolidated upward
5. **Quire** — Taiwan PM tool, $4.6M, founded 2014, ClickUp/Asana ecosystem pressure
6. **Dux-Soup** — LinkedIn outreach, $4.5M, founded 2013, AI-SDR market displacing legacy automation
7. **ShortStack** — social contests, $1.5M, founded 2010, original lead-gen contest builder
8. **Boomerang for Gmail** — close call but skipped — exact profile but $8M cap edge
9. **clockodo** — time tracking, $1.2M, founded 2011 Germany, classic plateaued European tool
10. **Statusbrew** — social media mgmt, $3.6M, founded 2011 India, sandwiched between Buffer and Hootsuite
11. **CD2 Learning** — LMS, $2.6M, founded 2008, family-built LMS in legacy market
12. **Wiztopic** — internal comms, $3.1M, founded 2014 Paris, AI-driven comms threat exact

## Profile B (interesting wedge plays) – top 8

These are smaller / less obvious but offer good AI-readiness conversation angles:

- **OneDirectory** — Microsoft 365 employee directory, $1M, founded 2011 South Africa
- **Apinizer** — API management, $1.1M, founded 2016 Turkey
- **Hypefury** — Twitter scheduler, $1.2M, founded 2019 (NL/Belgium)
- **Cogsworth** — booking, $2M, founded 2017 Australia, solo-ish team
- **Papyrs** — internal wiki for SMB, $1.3M, founded 2011 Netherlands
- **SalesAgility/SuiteCRM** — open-source CRM, $2M employee-owned, Scotland
- **Mobbin** — design ref library, $1.6M, founded 2018 Singapore — under-served by AI-shift talk
- **Testimonial.to** — testimonial collection, $2.4M, founded 2020 by solo engineer-founder Damon Chen

## Memory updates queued

- DQ pattern: "AI-native rebrand of legacy SaaS" is now widespread — Groove HQ, Vervoe, Tarifica, Xtracta, Spiral all positioned as "AI-driven" in 2024-25. Skip if their tagline leads with AI even if their underlying product is unchanged.
- Multi-product parent rule #8 hit Outdo Inc (4 verticals: Tech/Cart/Creative/Digital) and RightInbox (Ramp Ventures: Mailshake/VoilaNorbert/Shift) — apply liberally.
- Dedup against company name + slug variants (e.g., `forms-app` vs `forms.app` vs `formsapp`) at append time, not just at run start.
- GetLatka is workhorse for plateaued horizontal SaaS in 2024 — direct company-name search after broad category exploration is more efficient than `site:` queries.
