---
name: plateaued-horizontal-run-2026-05-28
description: Run notes for 50-prospect plateaued-horizontal batch. Captures category breakdown, DQ patterns hit, and dedup gotchas. Use as reference when caller wants similar "horizontal SaaS that peaked 5-10 years ago" hunts.
metadata:
  type: project
---

# Plateaued Horizontal SaaS run — 2026-05-28

50 net-new added, 3 in-flight dups marked DELETED. Prospects sheet 489 → 539. LINEAR_SKIPPED.

## Why this run worked

- Caller pre-segmented the prospects pipeline into 3 parallel batches (horizontal, vertical, ecosystem) — eliminated cross-contamination
- Era filter ("founded 2014-2019 ideally") matched well to GetLatka's bootstrapped database
- Strict horizontal-only filter forced explicit DQ of every vertical SaaS I'd otherwise have grabbed (BookingNinjas hospitality, BrokerLift insurance, AgileBio LIMS, Capture2 government contracts, FieldHub field service)

## DQ patterns hit hardest

1. **"AI-native rebrand" of legacy tools** (~9 hits) — Groove HQ now says "AI-Native B2B Support", Tarifica says "AI-Driven Telecom Pricing Intelligence", Xtracta is "AI-powered document data extraction", Spiral is "Conversational Intelligence", Vervoe is "AI-powered skills assessment", Deeper Signals is "AI assessment". DQ rule #7 application: if the homepage/tagline leads with AI even if the product was built 5+ years ago, they have already pivoted. Skip.

2. **Multi-product parent** (~8 hits) — Outdo Inc has 4 verticals (Tech/Cart/Creative/Digital), Ramp Ventures owns RightInbox + Mailshake + VoilaNorbert + Shift, QualityUnit owns Post Affiliate Pro + others, REVE Group has 11 business verticals including REVE Chat, Brainstorm Force owns Astra + Spectra + WooFunnels (FunnelKit). Always check the parent before approving.

3. **Acquired but still branded** (~12 hits) — Mouseflow (Aug 2025), Tettra (GSoft Oct 2023), Smartlook (Cisco 2023), Stackify (Netreo 2021), Sendible (ASG/Traject), Loomly (Traject 2021), Re:amaze (GoDaddy), Hubilo (Brandlive Sep 2025), Userflow (acquired). Run "[name] acquired" before deeper verification.

4. **DQ rule #6 (raised >$10M with ARR <$5M)** (~10 hits) — Ditto ($12.2M Series A), Attio ($52M Series B!!! despite GetLatka calling it "bootstrapped" since $1.8M ARR), Slite ($15M), Mixmax ($22M), Whatagraph ($9.6M), Rollstack ($26M), Superlist ($13.8M), Hubilo ($152M then bankruptcy), Tella ($3.5M raised but only 3 emp).

## Dedup gotchas (lessons for future runs)

Created 3 accidental in-flight duplicates that had to be marked DELETED:
1. **ruler-analytics** (existing slug from 2026-05-19 directory run) — dedup cache had it but ran in-batch verify query after appending
2. **cyfe** (had been acquired in 2018 — should have been DQ'd not added) — pulled trigger too fast on $504K ARR data without checking acquisition
3. **ditto** (raised $12.2M Series A while GetLatka still called "bootstrapped") — DQ rule #6 missed in flight

**New rule**: For each candidate, verify acquisition status AND funding round status AGAIN at append time, not just at category search time. The lag between source publishing and append can be months.

## High-yield exploration approaches

- **GetLatka category pages** — `industries/i-social-media-suites` etc. — directly list all 100+ companies with revenue + employees, includes 2024 data
- **`site:getlatka.com bootstrapped 2024 "$X person" team`** queries — surface specific bootstrapped companies in revenue band by team size, very efficient
- **GetLatka company page direct verification** is faster than 2-3 broader searches per candidate

## Categories where horizontal SaaS is now thin

- **Sales engagement / outbound** — consolidated upward (Outreach $300M, Apollo, etc.) OR pivoted AI-first (SalesBlink, every cold-email tool 2023-2024)
- **A/B testing** — VWO+AB Tasty merged $100M+ ARR, very few small independents
- **Subscription billing** — Stripe consolidating (Lemon Squeezy acquired 2024), Paddle massive, fewer indie tools
- **Email marketing for SMB** — Brevo, MailerLite, AWeber etc. all huge; small independents tend to be either AI-cold-email pivots (DQ) or non-US (Sender, Hookle, EmailOctopus already in pipeline)
- **Helpdesk** — Groove HQ went AI-native, Help Scout raised, Hiver raised $46M, very few indie left

## Categories where horizontal SaaS is still rich

- **Internal wiki / employee directory / intranet** (Papyrs, OneDirectory, SupporterHub, Tettra acquired so vacuum, etc.)
- **Knowledge management / SOPs** (ProcedureFlow, etc.)
- **Smaller European bootstrapped tools** (Statusbrew India, Clinked UK, Cogsworth AU, easyfeedback DE)
- **Form builders** — still many independents at $1-5M ARR (forms.app, Form.io, PerfectForms)
- **Time tracking / PSA** — Paymo, clockodo, Productive (over cap), Juntrax all independent
- **Testimonial / social proof** — Senja, Testimonial.to, Trustmary (in pipeline) — small space, lots of bootstrappers
