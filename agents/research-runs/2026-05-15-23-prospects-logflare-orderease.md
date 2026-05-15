# Prospect Research Run — 2026-05-15

Batch: logflare → orderease (wave 2 of 9-batch loop)

## Counts

- Researched (status=researched, fit ≥3): 8
- Not-a-fit (fit ≤2): 15
- Cache hits applied: 1 (mailmeteor)
- Errors: 0
- Total writes: 23 cache + 23 prospects updates = 46 sheet ops, all clean

## Fit Distribution

- 5: 1 (orderease)
- 4: 4 (lucky-orange, mangools, memberspace, nookal, onepagecrm) — actually 5 (see below)
- 3: 2 (memberstack, openwrench)
- 2: 5 (missinglettr, missive, names-and-faces, nethunt-crm, nimble)
- 1: 10 (logflare, mailmeteor, mailshake, mailtrap, marker-io, mouseflow, mozart-data, netbeez, olark, openunit)

Avg fit score: 2.30

## Top fit 4–5

| ID | Score | Recommended Angle |
|---|---|---|
| orderease | 5 | vertical-workflow - AI inside B2B wholesale order flow |
| lucky-orange | 4 | workflow-first - AI that acts not suggests |
| mangools | 4 | category-disruption - SEO workflow reshape |
| memberspace | 4 | workflow-first - retention and content recommendations as AI |
| nookal | 4 | vertical-workflow - AI in allied health beyond the scribe |
| onepagecrm | 4 | workflow-first - AI inside the Action Stream methodology |

## Notable Patterns Confirmed This Batch

1. **MCP-shipped disqualifier extended** (4 hits this batch): mailtrap, marker-io, missive, netbeez. NetBeez shipped a 32-tool MCP server — most comprehensive seen in any batch. Marker.io shipped "Let AI fix your bugs" MCP.

2. **Acquisition / founder-departed disqualifier** (3 hits): logflare (→ Supabase 2021), mouseflow (→ Offspring Capital PE Aug 2025), olark (M&A offer April 2025). All fit 1.

3. **Holding-co rollup disqualifier** (2 hits): mailshake (Ramp Ventures), mailtrap (Railsware). Both fit 1.

4. **Above-ICP-cap cluster**: missive ($8M), mouseflow ($7.5M), olark ($7.2M), nethunt-crm ($6M), nimble ($5.7M), mailshake ($10M). 6 prospects with ARR above the $5M ceiling.

5. **Comprehensive AI suite recently launched** (downgrade pattern): Nimble 2025 (April 2025 Prospector + Email Marketing + Workflows + AI agents roadmap). Fit 2 not 4.

6. **VC growth-mode disqualifier**: mozart-data ($21M raised vs $2.9M ARR = 7x ratio).

7. **Strong fit pattern reconfirmed**: AI-empty + bootstrapped + workflow-heavy vertical + AI-pressured category =
   - orderease (B2B wholesale)
   - memberspace (membership/community ecosystem)
   - onepagecrm (CRM with bootstrapper anti-VC stance)
   All scored 4–5.

8. **Vertical healthcare practice mgmt = consistent fit 4**: nookal joins Cliniko/coreplus/ClinicSense from earlier batches. Differentiator: has the company shipped MCP/agents? No → fit 4; yes → fit 1.

## Flagged Issues

- **Duplicate prospect row**: `memberspace` appears twice in prospects sheet (g2-mature-incumbent / Ward Sandler + crunchbase-plateau / Eric Turner — Eric Turner is incorrect). Updated both rows with same scoring. Sourcer should dedupe.
- **Contact-data gaps on fit-3+ rows** that block outreach:
  - mangools (fit 4): contact_linkedin empty — Peter Hrbacik is at sk.linkedin.com/in/peter-hrbacik-47b0864
  - memberspace (fit 4): contact_linkedin empty — Ward Sandler at /in/wardsandler/
  - nookal (fit 4): contact_linkedin empty — Darren Rieck cofounder
  - openwrench (fit 3): contact is CTO Vignesh; CEO Matt Velker may be better decision-maker
  - orderease (fit 5!): contact_email empty — TOP SCORER, sourcer should backfill email
- **Memberstack contact** (Duncan Hamra) is one of two cofounders — Tyler Bell is co-founder, may also be relevant.

## Environment

- All 46 sheet writes succeeded. Used 90s+5-write pacing pattern from prior batches; no 429s observed.
- `research_cache` `fit_score` column bug avoided: per memory note, dropped `fit_score` from cache upsert calls. All cache writes returned clean (no traceback).

## Next Step for Outreach Writer

8 prospects ready for outreach this batch. Top conversion bets: orderease (5), then onepagecrm + nookal + memberspace + lucky-orange + mangools (4 each). Backfill contact_linkedin and contact_email on top scorers before drafting.
