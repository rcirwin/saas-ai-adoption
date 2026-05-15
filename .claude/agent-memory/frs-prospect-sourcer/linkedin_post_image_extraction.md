---
name: LinkedIn posts with company lists in images are not extractable
description: When a caller asks to mine companies from a LinkedIn post, check whether the names live in the post body vs. in image attachments — images cannot be OCR'd by available tooling
type: feedback
---

LinkedIn posts where the company list lives in **image attachments** (screenshots of revenue dashboards, company logo grids, carousel slides) cannot be extracted by WebFetch, WebSearch, or the r.jina.ai proxy. Examples confirmed 2026-05-15:

- Pat Walls posts in the "$1M SaaS in any niche" / "proof that you can build" series (activity-7441998114892398592, activity-7252334756351082498) — body says "4 of 100s of examples" or "proof that..." then references image carousels with company names
- StarterStory.com landing pages for the companion 52-company reports — gated behind member auth

**Why:** The post body and meta are visible via r.jina.ai but image OCR isn't part of WebFetch's pipeline. Authenticated LinkedIn scraping is also not available in this environment.

**How to apply:**
1. Before promising extraction from a LinkedIn URL, run a quick r.jina.ai fetch first to see if the named companies are in the post text or just in image attachments.
2. If image-only, return a DRY_RUN summary explaining the blocker and ask the user to paste the names directly OR provide a local screenshot path that Read can OCR via the multimodal model.
3. Do NOT fabricate a niche-SaaS list as a stand-in — the user wanted those specific companies, not a generic micro-SaaS roundup.
4. As a fallback offer, suggest substituting an `appsumo` or `producthunt` rotation framed as "diverse-niche micro-SaaS at ~$1M ARR" — sources we can reach reliably.

**Related infrastructure gap:** if image-OCR'd LinkedIn extraction becomes a recurring need, a Playwright + auth cookie scraper or a paid LinkedIn scraping API (Apify, PhantomBuster) would close it. Neither is configured today.
