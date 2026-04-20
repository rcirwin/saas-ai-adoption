# Prospect Sourcing Strategy

## Goal

Source 15 new B2B SaaS prospects per sourcing run. Rotate across 4 sources (~3–4 per source) to maintain pipeline diversity.

## Sources

### 1. AppSumo Launches (last 12 months)
- Browse `appsumo.com/collections/new/` and recent deal pages
- Focus on B2B tools with active user communities
- Good signal: bootstrapped founders, small teams, AppSumo Originals that need AI differentiation

### 2. Product Hunt SaaS Archives
- Browse `producthunt.com/topics/saas` and monthly "best of" pages
- Look for tools with 100–500 upvotes that haven't gone AI-native
- Target: launched in last 12 months, B2B category, active maker engagement

### 3. Job Boards with AI Hiring Signals
- Scan Hacker News "Who is Hiring?" (monthly thread), Wellfound, LinkedIn
- Signal: job postings mentioning "add AI features", "integrate LLMs", "ML engineer" at non-AI companies
- Small teams (5–50) posting their first AI/ML role = prime prospect

### 4. G2 / Capterra Category Pages
- Browse high-performer and momentum-leader quadrants in niche categories
- Target: small vendors with strong reviews but no AI features listed
- Categories: field service, scheduling, proposal management, document automation, invoicing, coaching software

## Disqualification Rules (apply in order, cheap first)

1. **Dedup** — Skip if already in CRM (`prospects` sheet)
2. **B2C or services** — Skip design agencies, consumer apps, freelancer marketplaces
3. **Size** — Skip if >$50M ARR or >100 employees
4. **AI-native** — Skip if AI is the core product (not an enhancement opportunity)

## Data to Collect Per Prospect

| Field | Source |
|-------|--------|
| id (slug) | Derived from company name |
| company | Official name |
| website | Homepage URL |
| category | Software category (CRM, helpdesk, etc.) |
| source | AppSumo / ProductHunt / JobBoard / G2Capterra |
| status | `identified` |
| est_arr | Estimate from Latka, Tracxn, or public signals |
| employees | From Crunchbase, LinkedIn, Tracxn |
| contact_name | Founder/CEO if discoverable |
| contact_email | If publicly available |
| notes | Key qualification signals |

## Sheet Schema

Prospects are stored in the `prospects` Google Sheet tab with columns:
`id, company, website, category, source, status, est_arr, employees, contact_name, contact_email, notes, created_at, updated_at`
