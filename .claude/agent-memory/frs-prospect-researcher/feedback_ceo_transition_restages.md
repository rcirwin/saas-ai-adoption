---
name: feedback-ceo-transition-restages
description: When a sheet note flags founder/CEO departure since prior research, prior outreach drafts are stale — re-research, update contact, regenerate drafts
metadata:
  type: feedback
---

When a prospects-row `notes` field flags a founder/CEO departure since the last research pass, treat as a forced re-research even when cache is fresh.

**Why:** BugHerd 2026-05-29 — Alan Downie left for Double Cat (indie games CEO). Prior 2026-05-19 outreach drafts were addressed "Hey Alan" with personalized hooks to his Medium essay. Stephen Neville (ex-CommonCode) is the current CEO under the Splitrock Studio rebrand (June 2025). Sending the Alan-drafts to Neville would burn the prospect.

**How to apply:**
1. When you see `notes` text like "X no longer at Y" / "X transitioned to Z" / "new CEO" → ignore the cache freshness check, force re-research.
2. Update `contact_name`, `contact_role`, `contact_linkedin` on the prospects row to the new operator.
3. Add a flag to the run summary's "needs sourcer follow-up" section so the outreach writer regenerates messages from scratch — don't reuse the stale drafts.
4. The cache `personalization_hooks` field should be rewritten around the new operator (e.g. Stephen Neville's ex-CommonCode agency background instead of Alan Downie's Medium essay).

Pair with [[memory_run_log]] BugHerd entry.
