# Sourcing Run — 2026-05-15 — LinkedIn / Pat Walls "$1M SaaS in any niche"

## Run metadata

- **Date:** 2026-05-15
- **Source:** `linkedin-patwalls-1m-saas` (Pat Walls LinkedIn carousel, manually OCR'd via Claude in Chrome)
- **Source URL:** https://www.linkedin.com/posts/patrickwalls_proof-that-you-can-build-a-1m-saas-in-any-activity-7441998114892398592-XiGf
- **Input file:** `agents/sourcing-runs/inputs/2026-05-15-patwalls-extracted-tiles.md`
- **Tiles extracted:** 35 (7×5 grid)
- **Tiles in-band ($500K-$5M ARR):** 25
- **Tiles out-of-band (skipped per user instruction):** 10
- **Identified (after web verification):** 21 of 25 in-band tiles
- **Unidentified:** 4 in-band tiles
- **Qualified after ICP + DQ rules:** 8
- **Duplicates with existing prospects:** 3 (ZenMaid, Snappa, Carrd)
- **Written to Sheet:** 8
- **Linear issues created:** 0 (LINEAR_SKIPPED — MCP unavailable in this environment per memory)
- **Sheet rows before:** 287
- **Sheet rows after:** 295

## Pre-flight: env vars

Exported per `frs_sheet_env.md` memory pointer:
- `FRS_GOOGLE_CREDENTIALS=/Users/ryanirwin/.config/frs/frs-agentic-system-ba5fe26b3a07.json`
- `FRS_PROSPECTS_SHEET_ID=1zgHoABX-oQ9pTHONFnnGBYGvuwMEGZ3S-JDIZY4y3go`

All 8 appends succeeded on first try.

## Tile-by-tile disposition

### Out-of-band (skipped without research per user instruction)

| # | Niche | Pat's ARR | Likely company |
|---|---|---|---|
| 4 | Luggage | $300K | Bounce |
| 6 | Prayer | $400K | Hallow (actually $60M ARR now — out of band by 100x) |
| 8 | Meal Prepping | $11M | Galley Solutions ($3.8M actual, $20M raised — DQ anyway) |
| 9 | Bachelorette Parties | $6M | Bach |
| 12 | Email Productivity | $360K | Mailbrew / Shortwave |
| 15 | Honeymoon Funds | $300K | Honeyfund |
| 19 | Research | $18M | UserInterviews |
| 20 | Property Managers | $12M | TenantCloud (also already in `prospects`) |
| 29 | Video Calls | $5.8M | Fathom / Otter / Fireflies |
| 32 | Podcasters | $200K | Podcastle / Castmagic / Capsho |

### In-band but disqualified

| # | Tile | Pat's ARR | Identified | Reason skipped |
|---|---|---|---|---|
| 1 | Gyms | $3.6M | Unable to confirm — PushPress ($15M, 57-101 emp, VC), Trainerize (ABC Financial/Thoma Bravo acquired, $20M+ ARR), GymMaster (no public data) | Most likely candidates all out of ICP or acquired; logo "P…Fitness" too vague for safe assignment. UNIDENTIFIED. |
| 2 | Graphic Designers | $650K | Snappa | Duplicate — already in `prospects` |
| 5 | Maid Services | $500K | ZenMaid | Duplicate — already in `prospects` |
| 7 | Scheduling | $2.1M | Could not narrow — When I Work, Connecteam, Sling all candidates | UNIDENTIFIED (one-search rule). Pink/purple bg + "Master Your Team's Time" not unique enough. |
| 14 | Medical Clerks | $1.2M | AdviNOW Medical | DQ rule #6: $22M raised + AI-native positioning ("AI-powered platform with AR/chart scribing"). DQ rule #7: "AI" in primary positioning. |
| 16 | User Onboarding | $2.4M | Userflow (most likely match, "champions" framing) | Acquired by Beamer Feb 2024 for $60M — parent now decision-maker. Alternative candidates (Userpilot $9.5M+, Userlane $12.2M, Chameleon $12.2M, Appcues large) all out of ICP. |
| 17 | Employee Training | $2M | Trainual | Out of ICP — $32.6M revenue 2024, 126 emp, raised $6.75M Series A. |
| 18 | Pets | $1M | Time To Pet (most likely — "village" branding adjacent) | Acquired by DaySmart Software Feb 2024. Adjacent candidate Gingr also acquired by DaySmart. UNIDENTIFIED for an alternative. |
| 21 | Field Sales Reps | $3.6M | Badger Maps (confirmed by tagline match) | Out of ICP — $10M revenue 2025 per GetLatka, 60 emp. (Was $3.3M in 2023; Pat's tile was accurate at time of screenshot.) Bootstrapped though — worth a researcher revisit if ICP ceiling expands. |
| 22 | Wellness Coaches | $1M | Practice.do (most likely match — green badge, "run your health & wellness business" exact-match on customer page) | SHUT DOWN November 3, 2025. Alternative Profi: also being acquired and winding down. Healthie: $13.7M revenue + $40M raised — out of ICP. |
| 23 | Legal Fees | $4.5M | UNIDENTIFIED — "Roster, Invoice, Collect" subheader + "Grow faster" CTA didn't uniquely match LawPay, Clio Grow, Smokeball, Bonsai, or PracticePanther. One-search rule triggered. |
| 26 | E-Sports | $3.6M | ggCircuit | Acquired by Esports Entertainment Group. Parent is decision-maker. |
| 30 | Building Websites | $1.2M | Carrd | Duplicate — already in `prospects` |
| 31 | Data Protection | $4M | HYCU | Out of ICP — $140M raised, headquartered Boston, enterprise data protection. |
| 33 | Payments | $800K | Forwardly (most likely — "Embedded Invoicing & Bill Pay for Vertical SaaS" matches exactly) | DQ rule #7: "AI-native accounts payable" primary positioning. CEO Nick Chandi. |
| 34 | Digital Fraud Detection | $3.6M | Hawk:AI or Sardine | Hawk:AI — major fintech enterprise vendor; Sardine — $1.3T payments screened, 400+ enterprise customers, both far out of ICP and AI-native positioning. |
| 35 | QR Codes | $3.6M | Uniqode (formerly Beaconstac) | Out of ICP — $10M+ ARR 2023 per Crunchbase, $25M raised. |

### In-band, qualified, written to Sheet

| # | Tile | Slug | Company | Pat's ARR | Verified rev | Emp | Founder | ICP fit |
|---|---|---|---|---|---|---|---|---|
| 3 | Hiring | `tecla` | TECLA | $1.2M | $2.4M ARR (2022, likely higher 2024) | 50 | Gino Ferrand | Bootstrapped from $10K, 12 yrs operating, LATAM dev marketplace. Recently markets as "AI talent" but core business is staffing, not AI-native product. Tier 1 fit. |
| 10 | Finance Templates | `projectionhub` | ProjectionHub | $500K | $500K-730K ARR 2023-25 | 8 | Adam Hoeksema (co-founder w/ brother Brandon) | Bootstrapped 2012. CPA-template marketplace + custom services. At floor of ICP. |
| 11 | Restaurant Menus | `musthavemenus` | MustHaveMenus | $3.6M | $3M revenue 2026 | 22-28 | Jim Williams (Founder & CEO) | 100% bootstrapped post-2014. Founded 2007. Serial founder also did Sharefaith. Ashland OR. Tier 1 fit. |
| 13 | Tutors | `tutorcruncher` | TutorCruncher | $1.2M | $3.1M revenue 2024 | 32 | Malachy Guinness (Co-Founder) | Bootstrapped ($0 raised), founded 2013, 13-year-old. London. Tier 1 fit. |
| 24 | Biotech LIMS | `qbench` | QBench | $4M | $1.8-4M ARR | 30 | Nicholas Evans (CEO; founder name not confirmed) | Bootstrapped ($0 raised). Founded 2015. #1 rated LIMS G2. Newark DE. Tier 1 fit. |
| 25 | Real Estate Title | `titlecapture` | TitleCapture | $4M | $5.6M revenue 2024 | ~20 | Alex Samant (Co-Founder & CEO, 50/50 w/ Kethe Cicconi) | Slightly over ICP ceiling ($5.6M vs $5M). INCLUDED per memory rule: "when a candidate just barely exceeds ICP ARR ceiling but has very strong intentionally bootstrapped signals (public anti-VC stance, decade+ operating history, no funding rounds at all), include with a note." 100% bootstrapped, $0 raised, 11 years operating. Researcher to confirm. |
| 27 | ISP Billing | `powercode-isp` | Powercode | $3M | $3M (Owler, "$1-10M range" Crunchbase) | 20 | Not publicly named on site — note for researcher | Bootstrapped, not VC-backed (per powercode.com About page). Founded 2002. Random Lake WI. Long-tenure vertical SaaS. Tier 1 fit. Slug uses `-isp` to disambiguate from Ukrainian Powercode Group consultancy. |
| 28 | Email Templates | `stripo` | Stripo | $4.8M | $3.7-4M ARR | 70 | Dmytro Kudrenko (Founder & CEO) | Bootstrapped Ukrainian. 1M+ users. Founded by experienced ex-outsourcing crew. Tier 1 fit. |

## Notable disqualification themes from this run

1. **Acquired-by-vertical-software-holding pattern hit hard**: Trainerize (ABC Financial/Thoma Bravo), Time To Pet (DaySmart), Gingr (DaySmart), ggCircuit (Esports Entertainment), Userflow (Beamer). DaySmart in particular has been rolling up pet-care SaaS — a category-level skip signal.
2. **AppSumo-tier $500K-$5M ARR niche SaaS that hit $10M+** in 2024-25 is more common than expected — PushPress, Trainual, Badger Maps, Healthie, Userpilot, Userlane, Chameleon all crossed into "too big for our ICP" recently. Pat's tile data was accurate at time of screenshot; current state is the disqualifier.
3. **"AI-native rewrites" in B2B SaaS are accelerating**: AdviNOW, Forwardly, Hawk:AI, Sardine all reposition primary marketing around AI. Per memory rule #7, that's a fast DQ.
4. **One-search rule** correctly held: refused to guess for tiles 1 (Gyms logo), 7 (Scheduling), 18 (Pets — Time To Pet alternative), 23 (Legal Fees) when first searches were ambiguous. Better to leave 4 unidentified than to write low-confidence rows.

## Categories surfaced (next-run sampling weight)

This run was a one-off ingestion of a specific external list, not a category scan. No category-weight adjustments warranted. The 8 prospects span vertical SaaS (restaurant, tutoring, lab, title, ISP), email tooling, finance templates, and LATAM dev marketplace — broad spread.

## Linear

No issues created. Linear MCP is not configured in this environment (`.mcp.json` absent). Per memory, this is expected for local desktop sessions. The 8 new rows in `prospects` are visible to the next agent (researcher) via Sheet status filter `status=identified`.

## Sheet writes (verification)

8 appends confirmed via `scripts/sheet.py append prospects` exit code 0 + "appended 1 row to prospects" stdout. Sheet ID `1zgHoABX-oQ9pTHONFnnGBYGvuwMEGZ3S-JDIZY4y3go`, tab `prospects`. Row count moved from 287 → 295.
