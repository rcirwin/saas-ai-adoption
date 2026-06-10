---
name: getlatka-5m-cap-stale-snapshot-trap
description: GetLatka country-page cards cap displayed ARR at "$5M" — several such cards are actually $7M-$43M companies; always cross-check most-recent-year revenue per-company before adding any card showing exactly $5M
metadata:
  type: reference
---

# GetLatka "$5M" cards are a stale/capped-display trap

On GetLatka country pages (`?cap=mid`, `?cap=xlarge`), the displayed ARR is **capped at "$5M"** for the public view. A card showing exactly `$5M` is NOT confirmation the company is at/under the ICP $5M ceiling — it can be a $7M-$43M company whose real number is hidden.

**Confirmed over-cap companies that showed "$5M" (or stale lower) on GetLatka, 2026-06-10 run:**
- Analyse2 (FI) — card $4M, actual $42.9M revenue 2026
- Prefixbox (HU) — card $4.6M, actual $8M revenue 2026
- Swat.io (AT) — card $5M, actual €7.3M (~$8M)
- Good Sign (FI) — card $4.8M, actual $10.5M revenue 2026
- (earlier runs) Shepherd CMMS $3.4M→$5.2M, Datawiz $4.5M→$5.9M, Akrivia $3.7M→$21.1M, Keboola $4.9M→$36.5M

**How to apply:** For ANY GetLatka card at or near $5M, run a per-company `"<name>" revenue ARR 2026` / `"<name>" funding employees` search and read the MOST RECENT year before appending. Treat the GetLatka number as a floor, not a ceiling.

**Also:** GetLatka WebFetch pagination (`&page=2`) does NOT work — only the top 10 per cap tier is fetchable. To go deeper, switch countries or cap tiers, not pages.

**Related:** [[getlatka_country_pages_workhorse]], [[intl_bootstrapped_run_2026-06-10]]
