# Prospect Research Run — 2026-05-28 (Explicit Slice: 49 Prospects)

Run mode: caller-supplied explicit ID list (49). Three parallel researcher slices handled the rest of the queue; new background sourcers were appending more identified rows concurrently — ignored per instruction.

## Counts

- Researched (fit ≥ 3): 33 unique prospects (34 row updates incl. one plerdy duplicate)
- Not-a-fit (fit ≤ 2): 16
- Cache hits applied (no re-research): 1 (plerdy; cache from 2026-05-15)
- Errors / inconclusive: 0 hard failures. One sheet ID rename mid-run (`pickyassist` → `picky-assist`) caused 2 wasted writes — recovered. Two upserts of soft-quota retries (single retry after wait).

Average fit score: 3.04

## Fit Distribution

- 5: 1 (showit)
- 4: 17 (trackdesk, ticketnology, thinkreservations, statusgator, softcomply, schedulista, save-solutions-as, saturday-drive, reftab, pool-office-manager, nocrm, hypefury, dux-soup, debugbear, brandchamp, appointedd, [pool-office-manager dupe-check verified])
- 3: 17 (tutorware, thundertix, stablebuzz, plerdy, picky-assist, onedirectory, ohmylead, noterro, loop-subscriptions, loft47, localyser, essium, equinegenie, elfsight, crystal-pm, bit-dealership)
- 2: 10 (workiom, slp-now, searchanise, projectbalm, marsello, instatus, groomsoft, globo-io, flowmapp, activetrail)
- 1: 6 (upraizal, senuto, exchange-leads, empowermx, apsona, apinizer)

## Top 5 by Fit Score + Recommended Angle

1. **showit** (5) — Bootstrapped no-code site builder for photographers ($4.6M ARR 2024, Practical Founders #101). Todd Watson operating, Gilbert AZ, 31 emp, zero VC, zero AI. Squarespace AI Intelligence + Wix Studio AI + Framer AI-first existential threat. Angle: **workflow-first** — AI design generation + photographer-niche automation. *All 5-criteria met: in-band ARR, workflow-heavy, AI-exposure, podcast-active founder, multiple hooks.*
2. **trackdesk** (4) — Prague affiliate-tracking infrastructure ($2.4M ARR Sep 2025, 22 emp). Martin Demiger operating + blogging. 70+ features shipped 2025. Bolt-on AI reporting. Anura fraud partnership. Angle: **workflow-first** (AI fraud detection deepening, partner discovery, attribution).
3. **ticketnology** (4) — Bootstrapped season-ticket SaaS ($2M ARR, 4 FT). Morgan Katz solo female founder + Practical Founders #77 + sports practitioner (Live Nation/Royals). Zero AI vs SeatGeek Enterprise AI/Logitix. Angle: **workflow-first** — ticket distribution + group-buy optimization + premium-experience renewal.
4. **thinkreservations** (4) — Boutique hotel/B&B PMS ($3-5M ARR, 30 emp). Richard Aday ex-Amazon SDE founder. Just won TravelTech 2026 PMS-of-the-Year (May 2026). ThinkMessenger + TakeUp AI integration. Angle: **agent-ready** — integrated agent surface across the Think* product family.
5. **statusgator** (4) — TinySeed status-page aggregator ($1.5M ARR, 8 emp). Colin Bartlett active blogger (caught Jan 2025 ChatGPT outage). Bolt-on AI severity ranking. Atlassian Statuspage AI Insights threat. Angle: **agent-ready** — incident triage + automated Slack/Jira routing + runbook execution.

## Flagged / Manual Followups

- **plerdy duplicate**: two rows exist (researched 2026-05-19 + identified 2026-05-28). Both updated to fit 3. Sourcer should de-dupe.
- **pickyassist → picky-assist ID rename**: sourcer changed the canonical ID mid-run. Wrote cache rows under both IDs (pickyassist + picky-assist). Sourcer may want to merge.
- **Contact-data gaps on fit-3+ rows** (sourcer backfill needed before outreach writer can use):
  - crystal-pm (no founder name)
  - tutorware (no LinkedIn)
  - stablebuzz (no LinkedIn)
  - reftab (no email)
  - statusgator (no email)
  - localyser (no email)
  - equinegenie (no LinkedIn)
  - noterro (no LinkedIn)
  - softcomply (no LinkedIn, no email)
  - debugbear (no email)
  - thundertix (no LinkedIn for Dawn Green)
  - thinkreservations (no LinkedIn for Richard Aday)
  - bit-dealership (no LinkedIn for Edward MacFawn — added contact_name during research)
  - saturday-drive (no LinkedIn)
  - hypefury (no email)
  - elfsight (Andrei Mochalov surface name added but no LinkedIn)
  - ohmylead (no email)
- **Above-ICP-ceiling disqualifiers**: marsello ($6M+ implied), activetrail ($6.8M sheet 2024). loop-subscriptions trending fast (3x in 2025, $50M target) and picky-assist at ceiling ($5.2M).
- **MCP-shipped disqualifier extensions** (memory pattern reconfirmed): apinizer (Jul 2025 MCP preview), senuto (Claude MCP server + 5-LLM Content Writer + AI Overviews Auditor). apsona shipped Salesforce Agentforce integration = agent-ready disqualifier.
- **Acquired disqualifier**: empowermx (acquired by IFS 2025 for AI synergies). Extend the prior PE-acquirer disqualifier list with IFS in aviation MRO vertical.
- **Defunct disqualifier**: upraizal.com 302-redirects to HugeDomains for-sale listing. Per memory rule.
- **Founder-departed disqualifier**: exchange-leads (Shawn Finder moved to VanillaSoft post-Autoklose-acquisition 2020).

## New Patterns Worth Adding to Memory

1. **Photographer/designer niche website-builder is a strong fit category** — Showit's score 5 confirms: bootstrapped vertical SaaS at ICP ceiling, podcast-active founder, zero AI in a category being existentially threatened by Squarespace/Wix/Framer AI is the cleanest 5-trigger seen all month.
2. **"Comprehensive AI suite shipped" cap-at-3 rule reconfirmed**: thundertix (event-desc + social + cohort insights), pickyassist (chatbots + intent + smart replies), essium (XENQU chatbots + ML), crystal-pm (AI Scribe + AI scheduler), noterro (tagging + charting + intake summaries). All capped at 3.
3. **MCP-server-shipped is now the most reliable agent-ready disqualifier** — extends the memory list with apinizer + senuto. When the product page mentions MCP server or Claude integration via API, it's an automatic fit 1.
4. **"AI Calling coming soon" / "AI features early 2025" = exploring posture, fit 3-4 if other signals strong** — ohmylead (fit 3 from team-size cap) and nocrm (fit 4 from in-band ARR + ICP fit) are the two examples this run. Public AI-roadmap announcements without shipped product are the cleanest exploring signal and frequently the best timing for FRS engagement.
5. **40-year-old SaaS with founder-departed-but-current-operator-active = fit 3 ceiling** — bit-dealership (Edward MacFawn took ownership 2005 from original 1985 founder). Operator still engages but origin-story hooks are weaker. Pair with existing founder-retirement memory rule.
6. **Practitioner-founder + Practical Founders Podcast is a high-fit signal pair** — Todd Watson (#101) = fit 5; Morgan Katz (#77) = fit 4; Dinakara Nagalla (acquired). Memory should formalize: PFP guests are a sub-population disproportionately likely to score 4+.

## Sheet write summary

- 49 cache rows upserted (+1 picky-assist canonical) = 50 cache writes
- 49 prospects rows updated (+1 retry on pickyassist→picky-assist) = 50 prospect writes
- 4 sheet `read` calls for queue/cache + 1 retry after quota
- Quota was hit once at write 17 — recovered via 70s wait
- Mid-run sourcer ID rename caused one write to land on a stale-ID row (followup retry worked)

Run wall clock: ~75 minutes including waits.
