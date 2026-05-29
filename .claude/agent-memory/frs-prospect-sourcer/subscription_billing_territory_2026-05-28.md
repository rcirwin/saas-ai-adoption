---
name: subscription-billing-territory-2026-05-28
description: Learnings from 50-prospect subscription/billing/revenue-ops territory sourcing run on 2026-05-28; consolidation map, indie survivors, and disambiguation rules for future runs
metadata:
  type: project
---

50-prospect subscription/billing/revenue-ops territory dump (2026-05-28). 50 net-new of 50 hard-floor target.

**Why:** Caller assigned Batch K territory in 10-agent parallel campaign. Heavy consolidation in 2024-2026 made fitting prospects scarce — required deep verification per candidate.

**How to apply:** Reuse the consolidation map below before any future subscription/billing sourcing. Apply the disambiguation rule to all sheet.py update calls.

## Consolidation events 2024-2026 (auto-DQ in subscription/billing space)

- Stripe acquired Lemon Squeezy (Jul 2024) — sparked Polar.sh, Creem, Fungies wave; all but Fungies have taken funding
- Recharge acquired Skio for $105M cash (Apr 30, 2026) — Skio out, Recharge+Loop now only big independents on Shopify
- Yotpo Subscriptions sunsetting May 31, 2025 — created indie migration opportunity (Utterbond, Easy Subscriptions, Subi)
- DealHub acquired Subskribe (Nov 2025)
- Reepay + Sofacto + billwerk merged into Billwerk+ under PSG
- Awesome Motive bought Sandhills (WP Simple Pay, Easy Digital Downloads, AffiliateWP) — multi-product parent
- StellarWP/Liquid Web collapsed in 2025; consolidating to 4 products (Kadence/LearnDash/Events/Give) — anything else in that ecosystem is gone
- Caseproof bought AccessAlly (Apr 2024), WishList Member (May 2023) — but Caseproof itself remains bootstrapped indie under Blair Williams
- Subsplash → Roper Tech ($800M, Jul 2025)
- DanceStudio-Pro → Togetherwork
- PaySimple → EverCommerce (public)
- Easybill GmbH → LEA Partners (Dec 2024)
- Snipcart → Duda (2021)
- Tapfiliate → Admitad (Jul 2024)
- SaaSquatch → Impact Tech (Sep 2023)
- Glofox → ABC Fitness Solutions
- Cogsy → Mayple (2023, after $6M Accel)
- Memberful → Patreon (2018)
- Sleeknote → Drip (2022)
- ProfitWell → Paddle ($200M, 2022)
- Endorsal → 1-emp solo founder (DQ per solo rule)
- Encharge → exited 2024-2025

## Surviving indie bootstrapped subscription/billing players to remember

### Billing platforms
PayWhirl, Saaslogic, Tridens Monetization, MoonClerk, ChargeOver, FastBill, Pelcro (small seed only), Foxy.io, SendOwl, Rotessa, InvoiceBerry, Crater, Hiveage, Invoice Ninja, Bookipi (tiny seed only).

### Analytics
Putler, Crucible AI, Sublytics, GrowthOptix.

### Loyalty/rewards/coupons
Loyverse, Toki (small), Avada Commerce, Gleam, Boomerangme (small seed), Coupontools, Voucherify (over ICP $9.6M but pure indie).

### Membership
MemberPress (Caseproof parent — multi-product but indie founder-led), Paid Memberships Pro (Stranger Studios — multi-product indie), ClubExpress, WebinarGeek, PageFly (52 emp+Vietnam, borderline).

### Recurring/MoR/affiliate
Refgrow, Reditus, GrowSurf, Affilimate, Submarine/Disco Labs (Tractor RBF $250K only).

### Shopify subscriptions
Appstle, Recurpay, Subi (Subify), Easy Subscriptions, Awtomic (vertical wine club + bundles).

### Tax compliance
Quaderno (the only pure indie one — Numeral/Anrok/Sphere all VC-backed).

### Reviews/UGC
Junip (Smile.io alum), Fera, WiserReview (India).

### Email/cart/conversion
Spoks (Shopify flat-rate), Adoric, Bento (Jesse Hanley solo bootstrap).

## Disambiguation rule for sheet.py update (CRITICAL)

Single-clause `update --where 'id=X' --set ...` is dangerous if any past bulk-rename created multiple rows with the same id. ALWAYS pass disambiguating filters:
- For "mark this 2026-05-28 row as dup": `--where 'id=<id>' 'created_at=2026-05-28' 'source=<my-source>'`
- For "rename this specific company row back to its slug": `--where 'company=<exact-name>'`

If the script's where-clause doesn't disambiguate, you can rename N>1 rows by mistake. Recovery is painful. See `agents/sourcing-runs/2026-05-28-subscription-billing-territory.md` for the catastrophic incident (14 rows nuked, ~60 min recovery).

## In-flight duplicate trap

With 10 sourcer agents running concurrently in the same Sheet, **static dedup at run start undercounts**. Re-grep dedup cache after every batch of 5 appends. Hit 8 duplicates this run: rivo, repurpose-io, vendoo, cratejoy, bookwhen, pabbly, reditus, affilimate, booqable. Each took an update-rollback. Worth ~5 min per dup. Cost trades against the time to grep, so prefer the grep.

Going forward, consider modifying the sourcer prompt to:
1. Use `python3 scripts/sheet.py count prospects id=<slug>` before each append (1 read each, fast) instead of pre-cached set.
2. OR batch appends in groups of 5, fetch fresh prospects.json once per batch.

## ICP-edge calls made this run (for future calibration)

- **Voucherify** — $9.6M ARR (over $5M ceiling) but 100% bootstrapped, founder-led, EU-based, AI-positioned but not AI-native → added as Tier 2
- **PageFly** — 52 emp (over 50 ceiling) but Vietnam bootstrapped, founder Victor Bui → added as Tier 2
- **Avada Commerce** — 80 emp (over 50 ceiling) but Vietnam multi-app bootstrapper → added as Tier 2
- **Bookipi** — 120 emp + $1.6M seed (both over thresholds) but Sydney founder-led → added as Tier 2 with explicit note
- **Submarine/Disco Labs** — took $250K Tractor Ventures revenue-based financing (NOT pure equity raise) → still counts as bootstrapped per RBF norm
- **Caseproof (MemberPress parent)** — multi-product parent risk but founder Blair Williams runs 5 small WP plugins, no PE/VC → added with parent-risk note

## Slug conventions used

- `paid-memberships-pro` (kebab — multi-word company)
- `toki-loyalty` (added `-loyalty` because `toki` slug conflicts with possible future TOKI Tokyo company)
- `foxy-io` (kebab with hyphen, kept `-io` for disambiguation with possible "Foxy" baby gear brand)
- `crucible-ai` (kebab + ai for disambig)
- `heymantle` (NOT `mantle` — to disambig from potential future Mantle blockchain/L2)
- `tridens-monetization` (NOT just `tridens` — Tridens Technology has multiple products)
- `easy-subscriptions` (kebab)
- `invoice-ninja` (kebab)
- `avada-commerce` (kebab)
- `wiserreview`, `growsurf`, `groupapp` (no hyphens — original branding)
