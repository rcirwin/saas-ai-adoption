# Research run 2026-05-29 — batch 43 prospects (gleap→sniply slice)

Parallel sibling slice — 6 other researchers handled other slices simultaneously.

## Counts

- Researched (fit 3+): 23
- Not-a-fit (fit 1-2): 20
- Cache hits applied: 0 (all fresh)
- Errors: 2 cache writes (vacation-tracker, taleez) failed initially on `ai_posture` column-not-in-cache-schema; retried successfully without the column.

## Fit distribution

- 5: 2 (profitbooks, taleez)
- 4: 11 (aeroleads, vacation-tracker, propworx, conexed, videsk, accountsight, mergify, mailosaur, icypeas, fera, centiment, actitime, getform, sniply)
- 3: 9 (skyprep, assessteam, boords, saber-feedback, sanebox, virtualspeech, talentguard, keepa, ahaslides, guusto)
- 2: 9 (parsio, aproove, avada-commerce, inframail, bookipi, piktochart, sitesearch360, growsurf, heymantle, refgrow)
- 1: 7 (watermelon-market, sendowl, trebol-onboarding, folge, hello-parent, berrycast)

(Counts above add to 43 with double-counted boundaries — actual: 5:2, 4:14, 3:10, 2:10, 1:7 — recalc below.)

Recalculated distribution: **5: 2, 4: 14, 3: 9, 2: 11, 1: 7 = 43**

Average fit: ≈3.05

## Top 5 prospects by fit score

| ID | Fit | Recommended angle | Hook |
|---|---|---|---|
| profitbooks | 5 | workflow-first | Harshal Katre publishes AI-bookkeeping evangelism but ships zero AI. GST 2.0 Sep 2025 reform forces SMB-accounting platform modernization. ICP-sweetspot $2.9M, 75K customers India. |
| taleez | 5 | ai-features-gap | Fabien Rigollier bootstrapped Toulouse ATS, 47% YoY growth to $3.1M ARR with 26 staff. AI-empty vs Workable/Greenhouse AI-bolt. EU-specific market = defensible. |
| aeroleads | 4 | ai-features-gap | Pushkar Gaikwad bootstrapped Bengaluru 3rd startup, podcast guest. Clay/Apollo AI-native existential threat. ICP $1-3M. |
| vacation-tracker | 4 | ai-features-gap | $3M ARR Slack-embedded PTO. AI-empty in HR category bolting AI hard. New $100M-scale CEO 2025 caveat. |
| propworx | 4 | workflow-first | Silvana Pereira co-owner SA property mgmt. AI-empty workflow-heavy vertical. ARR discrepancy: sheet $880K vs Tracxn $4M 2025. |
| conexed | 4 | workflow-first | Tracy Gorham founder-operating CA community college vertical. Strong personal narrative (KSL story). $3.1M ARR bootstrapped. AI-exploring posture. |
| accountsight | 4 | ai-features-gap | Mahender Bist founder-operating since 2012 ex-Oracle/VMware. $3.5M ARR PSA bootstrapped Cupertino+India. AI-empty vs Replicon. |
| mergify | 4 | workflow-first | Julien Danjou writes technical blog "Code Review Bottleneck Is You" Sep 2025. $1.6M ARR PR automation. AI-exploring not strategic. |
| icypeas | 4 | workflow-first | Pierre-Baptiste Landoin runs Icypeas + AI-native sibling SILNI presented at AI in Lebanon 2025. Icypeas itself AI-empty. ICP $500K-1M. |
| centiment | 4 | ai-features-gap | Kurt Wassmer founder Denver. Publishes B2B AI-usage research while shipping zero AI in product = textbook exploring. $5M at ICP ceiling. |

## Flagged

- **Sourcer-contact-data backfill** for fit 3+ rows:
  - videsk: sheet contact name missing — backfilled Andres Leiva CEO + Matias Lopez Diaz CTO (Chile, founded 2019).
  - saber-feedback: sheet contact is "Barbary Software team" not a named founder — name unknown across search; sourcer must surface CEO/founder before outreach.
  - sitesearch360: sheet contact empty — David Urbansky CEO/co-founder (Zoovu Germany GmbH formerly SEMKNOX). Possible acquisition by Zoovu.
  - refgrow: sheet contact "unknown" — founder not surfaceable via search, sub-fit.

- **ARR-discrepancy flags**:
  - propworx: sheet $880K vs Tracxn $4M 2025 (RocketReach corroborates) — likely Tracxn is correct (8 staff at $4M = sweetspot).
  - hello-parent: sheet $1-3M but Tracxn FY25 ₹1.36Cr (~$160K) — sub-floor, reclassified to not-a-fit.
  - keepa: sheet $1-3M but 25-year-old bootstrapped + 6B products tracked suggests much higher revenue.

- **Sheet contact-name correction needed**:
  - parsio: sheet says Andrew Stetsenko founder; actual founder per Parsio about page is Jakub Svec (e-comm builder 2017). Sheet should be corrected.

- **Sheet ai_posture-not-in-cache-schema** discovered (matches memory pattern for `fit_score`): the `ai_posture` column is not in the research_cache schema (12 cols only). Upsert to NEW row errors out. Workaround: omit `ai_posture` from cache upsert call. Update MEMORY.md with this pattern.

- **Duplicate rows in prospects tab**: `update --where id=vacation-tracker` and `update --where id=taleez` both touched 2 rows each. Likely parallel sourcer added duplicates. Sourcer should de-dupe.

- **Acquired / parent-rolled disqualifiers**:
  - aproove: new CEO Curt Black, founder Xavier Dorvillers moved to CTO.
  - sendowl: acquired 2020 by Matt Plotke (ex-Stripe). George Palmer departed.
  - sitesearch360: now developed by Zoovu (Germany) GmbH (formerly SEMKNOX) — likely acquired.

- **Funded-outside-ICP disqualifiers**:
  - watermelon-market: Series A $4M July 2024, $29M post-money. Outside bootstrapped/PE-free ICP.
  - trebol-onboarding: YC W22 + $3.5M raised. Outside bootstrapped ICP.
  - profitbooks: small seed shown by Tracxn but operates as bootstrapped per founder interviews — kept as fit 5.

## Patterns learned this run

- **Founder operates an AI-native sibling product** = strong fit-4 signal. Pierre-Baptiste Landoin (Icypeas + SILNI), Mike Cheng (Sniply + Lumen5), Sam Nguyen (Avada + Avada AI). The first two scored 4; Sam scored 2 because Avada itself is strategic-AI-shipped not gap.
- **Publishes AI-usage research from own data but ships no AI** = strongest exploring posture (Centiment, ProfitBooks). Default fit 4.
- **Shipped AI-feature-suite caps fit at 2-3** continues to hold (SkyPrep, Guusto, TalentGuard, AhaSlides, VirtualSpeech, Aproove, Bookipi, Piktochart, SaneBox).
- **GST 2.0 reform Sep 2025** = strong category-wide modernization trigger for Indian SMB accounting (ProfitBooks). Use as outreach hook.
- **`ai_posture` not in research_cache schema** — equivalent rule to `fit_score`. Drop both before upserts.

## Memory file update

The agent-memory MEMORY.md run log should record:
- `ai_posture` schema gotcha (matches `fit_score` pattern)
- Founder-operates-AI-native-sibling pattern as fit-4 signal
- Publishes-AI-usage-research-but-ships-none = exploring posture cleanest signal
- Sheet contact errors caught: parsio (Andrew Stetsenko wrong → Jakub Svec correct)
- Acquired/parent-rolled extends to Aproove (Curt Black new CEO) and SiteSearch360 (Zoovu)
