---
name: feedback-contact-backfill-corrections
description: Sheet contact_name corrections caught during 2026-05-29 backfill — Krock.io founder is Alex Tahanchin not Petro Kuzmenko; Coupontools CEO is Tom Hendrix not Tom Pieters; Nektria CEO is David Costa not Victor Tejedo (Tejedo is co-founder/partner); HeroCoders co-CEO is Jacek Jaroczynski (sheet was blank); PawPartner CEO is Austin Hess (last name found via about page).
metadata:
  type: feedback
---

During the 2026-05-29 contact-backfill run, four sheet `contact_name` errors were caught and corrected. Pattern: sourcer often grabs the first-listed founder/board member, not the current operating CEO.

**Corrections made:**
- `krock-io`: sheet said "Petro Kuzmenko" → corrected to "Alex Tahanchin" (Founder & CEO). Petro doesn't appear in any Krock-related source; possibly confused with a different employee.
- `coupontools`: sheet said "Tom Pieters" → corrected to "Tom Hendrix" (CEO). Tom Pieters is a different person at ArcelorMittal Belgium.
- `nektria`: sheet had "Victor Tejedo" (Co-Founder/Partner) → updated to "David Costa" (CEO). Victor is still a co-founder but David is the operating CEO. For founder-active outreach, Costa is the better target.
- `herocoders`: sheet had blank name → filled with "Jacek Jaroczynski" (Co-Founder & Co-CEO). Founded by Pawel Niewiadomski + Jacek Jaroczynski (Gdansk, Poland).
- `paw-partner`: sheet had "Austin" (first name only) → enriched contact_email with last name Hess found via about page. Personal LinkedIn for Austin Hess not findable; used company LinkedIn URL instead.

**Why:** Stale or low-fidelity sourcer data → outreach goes to wrong person → reply rate hit. Investing 1-2 search-results-worth of verification time per backfill catches ~10% error rate.

**How to apply:** During any contact backfill, treat sheet's `contact_name` as a hypothesis to verify, not ground truth. Cross-check against Crunchbase, current LinkedIn, and company /about page. If two sources disagree, the company's own /about page wins.

Related: [[run_2026-05-28_slice_c]] (codefortynine/stiltsoft same pattern).
