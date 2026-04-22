# FRS Google Sheet Schema

Single source of truth for CRM + content history lives in Google Sheets. This file documents the structure so all FRS agents read/write consistent data.

Set `FRS_PROSPECTS_SHEET_ID` in your environment (the same Sheet hosts both CRM and content tabs). See `agents/SETUP.md`.

**Tabs**:
- `prospects`, `outreach_log`, `research_cache`, `config` — lead generation CRM
- `posts`, `post_ideas` — content history and backlog

## Sheet 1: `prospects`

Primary CRM table. One row per prospect.

| Column | Key | Type | Values / Example | Written by |
|--------|-----|------|------------------|-----------|
| A | `id` | string | `acme-analytics` (company slug) | sourcer |
| B | `company` | string | `Acme Analytics` | sourcer |
| C | `website` | URL | `https://acme-analytics.com` | sourcer |
| D | `category` | string | analytics / CRM / devtools / workflow / marketplace / other | sourcer |
| E | `arr_estimate` | string | `<500K` / `500K-1M` / `1M-3M` / `3M-5M` / `5M+` / `unknown` | sourcer |
| F | `employee_count` | number | `42` | sourcer |
| G | `source` | string | appsumo / producthunt / linkedin / referral / inbound / job-board-signal / conference | sourcer |
| H | `contact_name` | string | `Jane Doe` | sourcer |
| I | `contact_role` | string | CEO / CTO / VP Product / CPO | sourcer |
| J | `contact_linkedin` | URL | `https://linkedin.com/in/janedoe` | sourcer |
| K | `contact_email` | string (may be empty) | `jane@acme-analytics.com` | sourcer |
| L | `ai_posture` | string | none / exploring / bolt-on / strategic / agent-ready | researcher |
| M | `fit_score` | number 1–5 | `4` (5=perfect fit) | researcher |
| N | `fit_notes` | string | why this score | researcher |
| O | `status` | string | identified / researched / outreach-sent / connected / call-scheduled / call-completed / proposal-sent / closed-won / closed-lost / not-a-fit | any |
| P | `research_summary` | string | written after research completes | researcher |
| Q | `last_outreach_date` | date | `2026-04-18` | outreach-writer |
| R | `last_outreach_channel` | string | linkedin-connect / linkedin-dm / email / referral | outreach-writer |
| S | `follow_up_due` | date | `2026-04-25` | outreach-writer |
| T | `notes` | string | free-form human notes | any + human |
| U | `created_at` | date | `2026-04-18` | sourcer |
| V | `updated_at` | date | `2026-04-18` | any (on write) |

**Primary key**: column A (`id`). Agents dedupe on this before inserting.

## Sheet 2: `outreach_log`

Every outreach attempt logged as a row. Immutable append-only log.

| Column | Key | Type | Values / Example | Written by |
|--------|-----|------|------------------|-----------|
| A | `log_id` | string | `2026-04-18-acme-analytics-linkedin-connect` | outreach-writer |
| B | `prospect_id` | string | matches `prospects.id` | outreach-writer |
| C | `date` | date | `2026-04-18` | outreach-writer |
| D | `channel` | string | linkedin-connect / linkedin-dm / email / referral | outreach-writer |
| E | `template_used` | string | template ID from `agents/templates/outreach.md` or `custom` | outreach-writer |
| F | `angle` | string | which objection/hook angle led the message (e.g. `price-anchor`, `agent-readiness`) | outreach-writer |
| G | `message_ref` | string | path to draft file or message ID | outreach-writer |
| H | `personalization_notes` | string | what was customized | outreach-writer |
| I | `status` | string | drafted / pending-review / approved / sent / declined-to-send | outreach-writer + human |
| J | `response_status` | string | pending / accepted / replied / no-response / declined | human |
| K | `response_date` | date | date of response | human |
| L | `response_sentiment` | string | positive / neutral / negative | human |
| M | `led_to_call` | boolean | `TRUE` if this outreach resulted in a booked call | human |
| N | `message_text` | string | full message body (copy-paste ready) | outreach-writer |

**Template performance**: outreach-writer reads this tab before drafting. It groups by `template_used` + `angle` and computes reply-rate and call-rate to pick the best-performing template for the prospect's `ai_posture`/`category`. Template IDs must be stable strings so aggregation works.

## Sheet 3: `research_cache`

Cached research results. Prevents re-researching companies.

| Column | Key | Type | Values / Example | Written by |
|--------|-----|------|------------------|-----------|
| A | `prospect_id` | string | matches `prospects.id` | researcher |
| B | `researched_at` | date | `2026-04-18` | researcher |
| C | `sources_checked` | comma list | `website, linkedin, g2, producthunt` | researcher |
| D | `product_summary` | string | what the product does, who it serves | researcher |
| E | `workflow_complexity` | string | low / medium / high | researcher |
| F | `ai_features_observed` | string | what AI they have (if any) | researcher |
| G | `agent_readiness` | string | none / low / medium / high | researcher |
| H | `competitive_landscape` | string | who competes, who's AI-native | researcher |
| I | `pain_signals` | semicolon list | specific friction signals | researcher |
| J | `personalization_hooks` | semicolon list | things to reference in outreach | researcher |
| K | `fit_assessment` | string | why they are/aren't a fit | researcher |
| L | `recommended_angle` | string | which outreach angle to lead with | researcher |

## Sheet 4: `config` (optional)

Single-row config that agents can read for global settings without hardcoding.

| Key | Value | Example |
|-----|-------|---------|
| `icp_arr_min` | number | `500000` |
| `icp_arr_max` | number | `5000000` |
| `outreach_daily_cap` | number | `15` |
| `follow_up_cadence_days` | number | `7` |
| `research_staleness_days` | number | `90` |

## Sheet 5: `posts`

Published LinkedIn post history. Replaces `agents/data/posts.json` so you can review/edit posts in the Sheets UI. Content Writer reads this for dedup; Content Planner reads it for cadence + engagement signals.

| Column | Key | Type | Values / Example | Written by |
|--------|-----|------|------------------|-----------|
| A | `id` | string | `2026-04-18-agent-thesis-window-closing` | content-writer (on publish) |
| B | `date` | date | `2026-04-18` | content-writer / human |
| C | `pillar` | string | pillar ID from `pillars.md` | content-writer |
| D | `angle` | string | short description of the angle | content-writer |
| E | `hook` | string | first line of the published post | content-writer |
| F | `length_tier` | string | short / medium / long | content-writer |
| G | `url` | URL | LinkedIn post URL once published | human |
| H | `impressions` | number | from LinkedIn analytics | human |
| I | `reactions` | number | from LinkedIn analytics | human |
| J | `comments` | number | from LinkedIn analytics | human |
| K | `reposts` | number | from LinkedIn analytics | human |
| L | `profile_clicks` | number | from LinkedIn analytics | human |
| M | `dms_received` | number | inbound DMs attributable to the post | human |
| N | `calls_booked` | number | discovery calls attributable to the post | human |
| O | `notes` | string | post-publish observations | human |

**Engagement feedback loop**: Content Planner reads this tab to:
1. Weight pillars by engagement (impressions, reactions, and DMs — the latter matters most for lead gen)
2. Detect saturated angles (avoid repeating an angle if a recent post on it flopped)
3. Propose next week's pillars proportional to what's actually converting

**Dedup**: Content Writer reads this tab at draft time and checks the last 30 days for the same pillar to avoid repeat hooks/angles.

## Sheet 6: `post_ideas`

Backlog of post ideas surfaced by Content Planner, converted to Linear issues when scheduled.

| Column | Key | Type | Values / Example | Written by |
|--------|-----|------|------------------|-----------|
| A | `idea_id` | string | `2026-04-19-contrarian-ai-roadmap-wishlist` | content-planner |
| B | `created_at` | date | `2026-04-19` | content-planner |
| C | `pillar` | string | pillar ID | content-planner |
| D | `angle` | string | one-line angle description | content-planner |
| E | `trigger` | string | what inspired this idea (event, conversation, reply) | content-planner + human |
| F | `priority` | string | low / medium / high | content-planner |
| G | `status` | string | backlog / scheduled / drafted / published / retired | content-planner + human |
| H | `linear_issue` | string | Linear issue key (e.g. `RYA-42`) once scheduled | content-planner |
| I | `scheduled_date` | date | target publish date when scheduled | content-planner |
| J | `notes` | string | free-form | any |

## How Agents Interact With the Sheet

Agents use the `google-sheets` MCP server (see `agents/SETUP.md`) with these operations:

- **Read rows**: query by column filter (e.g., `status = identified`)
- **Append row**: sourcer inserts new prospects; planner inserts post ideas
- **Update row**: researcher/outreach-writer/human update specific columns
- **Read by ID**: lookup a prospect or post by column A

Each agent declares `mcpServers: [google-sheets]` in its frontmatter and uses the Sheet ID from `FRS_PROSPECTS_SHEET_ID`.

## Initial Sheet Creation

To create the Sheet from this schema:
1. Create a new Google Sheet titled `FRS Agentic System`
2. Create six tabs named exactly: `prospects`, `outreach_log`, `research_cache`, `config`, `posts`, `post_ideas`
3. Add headers to row 1 of each tab matching the column keys above
4. Share with the service account email (see `SETUP.md`)
5. Copy the Sheet ID into `FRS_PROSPECTS_SHEET_ID` env var
