# Pat Walls "$1M SaaS in ANY category" — Tile Extraction

**Source post:** https://www.linkedin.com/posts/patrickwalls_proof-that-you-can-build-a-1m-saas-in-any-activity-7441998114892398592-XiGf
**Extraction method:** Claude in Chrome — fetched the LinkedIn carousel image (800x1000 JPEG), upscaled in a DOM overlay, zoomed each tile to read headlines + logos.
**Grid:** 7 rows × 5 cols = 35 tiles. Each tile = a SaaS landing-page screenshot + niche label + revenue.

## Conventions
- `headline` = the marketing headline visible in the landing page screenshot. Quoted verbatim where legible; useful as a unique search string to identify the company.
- `logo_read` = what the small logo in the tile reads (high/medium/low confidence; null if unreadable).
- `guess` = my best company-name guess (verify by web search on the headline).

## Tiles

### Row 1
| # | Niche | ARR | Headline | Logo read | Guess |
|---|---|---|---|---|---|
| 1 | Gyms | $3.6M | "Unlock the Power of Your Fitness Business" | "P…Fitness" (low) | TruCoach / Trainerize / PushPress — search headline |
| 2 | Graphic Designers | $650K | "Create online graphics in a snap" | **snappa** (high) | **Snappa** |
| 3 | Hiring | $1.2M | "Hire Our Vetted Elite Latin American Remote Developers" | (washed out) | Lemon.io / TECLA / Plane — search headline |
| 4 | Luggage | $300K | "Luggage storage near you" | **bounce** (high) | **Bounce (usebounce.com)** |
| 5 | Maid Services | $500K | "Automate, simplify, and grow your maid service" | **ZenMaid** (high — also in body) | **ZenMaid** |

### Row 2
| # | Niche | ARR | Headline | Logo read | Guess |
|---|---|---|---|---|---|
| 6 | Prayer | $400K | "Find God's Peace in Prayer" — CTA "Try Hallow for Free" | (CTA text) | **Hallow** |
| 7 | Scheduling | $2.1M | "Master Your Team's Time" — pink/purple bg | (low) | When I Work / Connecteam / Sling — search headline |
| 8 | Meal Prepping | $11M | "Kitchen Software Made Simple" | (low) | **Galley Solutions** (high prior) |
| 9 | Bachelorette Parties | $6M | "Your Bachelorette is waiting" | **bach** (high, top-right) | **Bach (bach.co)** |
| 10 | Finance Templates | $500K | "Financial projection templates and custom CPA support for raising capital and business planning" | (low) | **ProjectionHub** |

### Row 3
| # | Niche | ARR | Headline | Logo read | Guess |
|---|---|---|---|---|---|
| 11 | Restaurant Menus | $3.6M | "Elevate Your Menus, Advance Your Restaurant" | (low) | UpMenu / MustHaveMenus — search headline |
| 12 | Email Productivity | $360K | "Make your inbox yours." — purple bg with illustration | (low) | Mailbrew / Shortwave — search headline |
| 13 | Tutors | $1.2M | "One platform to manage and grow your tutoring business" | (low) | Teachworks / TutorBird / Oases — search headline |
| 14 | Medical Clerks | $1.2M | "Reclaim 56% Of Your Time" — header logo says "AdviNOW" | **AdviNOW** (high) | **AdviNOW Medical** |
| 15 | Honeymoon Funds | $300K | "Bye-bye, Tacky Registries" | (low) | **Honeyfund** |

### Row 4
| # | Niche | ARR | Headline | Logo read | Guess |
|---|---|---|---|---|---|
| 16 | User Onboarding | $2.4M | "The Easiest Way to Turn Your Users Into Champions" | (low — light blue logo) | Userflow / Userpilot / Appcues — search headline |
| 17 | Employee Training | $2M | "Easily systemize and scale the way you work" — purple bg | (low) | **Trainual** (high prior) |
| 18 | Pets | $1M | "It takes a village to raise a pet" | (low) | Pawp / Petfolk / BabelBark — search headline |
| 19 | Research | $18M | "Learn What People Want" — woman silhouette | (low) | **UserInterviews** (high prior — also matches ARR scale) |
| 20 | Property Managers | $12M | "Everything You Need to Manage Your Properties" | **TenantCloud** (high) | **TenantCloud** |

### Row 5
| # | Niche | ARR | Headline | Logo read | Guess |
|---|---|---|---|---|---|
| 21 | Field Sales Reps | $3.6M | "The #1 Route Planner for Field Sales and Service" | (low — dark bg, orange accent) | **Badger Maps** (high — they own that tagline) |
| 22 | Wellness Coaches | $1M | "run your health & wellness business" — green badge | (low) | **Practice (practice.do)** / Healthie / Profi — search headline |
| 23 | Legal Fees | $4.5M | "Grow faster" (large CTA) — "Roster, Invoice, Collect" subhead | (low) | LawPay / Clio Grow / Smokeball — search headline |
| 24 | Biotech | $4M | "Modernize Your Lab with the #1 Rated LIMS" | (low) | LabWare / Benchling / SciNote / Labguru — search headline |
| 25 | Real Estate Agents | $4M | "Grow Your Title Company" | (low) | Qualia / Endpoint — search headline. (Note: label says "Real Estate Agents" but copy says "Title Company") |

### Row 6
| # | Niche | ARR | Headline | Logo read | Guess |
|---|---|---|---|---|---|
| 26 | E-Sports | $3.6M | "Experience World-Class Software, Services, and Support for Your Esports Venue" | (low) | **GGCircuit** (high prior) |
| 27 | Internet Service Providers | $3M | "ISP Billing & Network Management System" | (low) | **Sonar** / **Powercode** — search headline |
| 28 | Email Templates | $4.8M | "Drag-n-drop and HTML email template builder" | (low) | **BEE (beefree.io)** / Stripo — search headline |
| 29 | Video Calls | $5.8M | "Automate your meeting notes" — green accent | (low) | **Fathom** / Otter / Fireflies / tldv — search headline |
| 30 | Building Websites | $1.2M | (Card UI screenshot) | **Carrd** (high — visible as text-logo) | **Carrd** |

### Row 7
| # | Niche | ARR | Headline | Logo read | Guess |
|---|---|---|---|---|---|
| 31 | Data Protection | $4M | "Data anywhere. Protected everywhere." — purple bg | "HY[…]" (low) | HYAS / Hyperproof — search headline |
| 32 | Podcasters | $200K | "Automate Your Podcast Production & Promotion" | (low) | Podcastle / Castmagic / Capsho — search headline |
| 33 | Payments | $800K | "Embedded Invoicing & Bill Pay for Vertical SaaS" | (low) | **Forwardly** / Tabs / Routable — search headline |
| 34 | Digital Fraud Detection | $3.6M | "AI-based Risk Detection and Automation for AML and Fraud" | (low) | Hawk:AI / Sardine / Unit21 — search headline |
| 35 | QR Codes | $3.6M | (QR code grid screenshot) | (low) | Uniqode (Beaconstac) / QR Code Generator — search headline |

## Confidence summary
- **High-confidence identifications (10):** Snappa, Bounce, ZenMaid, Hallow, Bach, AdviNOW, Honeyfund, TenantCloud, Carrd, Badger Maps
- **Medium-confidence (5):** Galley Solutions, Trainual, UserInterviews, ProjectionHub, GGCircuit
- **Needs web-search confirmation (20):** all rows with "search headline" notes

## Notes for the sourcer
1. Dedupe each entry against the existing `prospects` Sheet tab before writing.
2. Use the verbatim headlines as Google queries to confirm company identity — they're long enough to be unique.
3. Apply the standard $500K–$5M ARR filter. Tiles where Pat Walls' stated revenue is outside this band (Luggage $300K, Prayer $400K, Email Productivity $360K, Honeymoon Funds $300K, Research $18M, Property Managers $12M, Bachelorette Parties $6M, Video Calls $5.8M, Meal Prepping $11M, Podcasters $200K) should be marked as out-of-band and skipped, not researched.
4. Pat's revenue figures are anecdotal screenshots, not audited — treat as a rough band, then the researcher confirms current ARR.
