# Prospect CRM — Google Sheet Schema

Single source of truth for the prospect CRM lives in Google Sheets. This file documents the structure so all FRS agents read/write consistent data.

Set `FRS_PROSPECTS_SHEET_ID` in your environment. See `agents/SETUP.md`.

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
| E | `template_used` | string | path to template or `custom` | outreach-writer |
| F | `message_ref` | string | path to draft file or message ID | outreach-writer |
| G | `personalization_notes` | string | what was customized | outreach-writer |
| H | `status` | string | drafted / pending-review / approved / sent / declined-to-send | outreach-writer + human |
| I | `response_status` | string | pending / accepted / replied / no-response / declined | human |
| J | `response_date` | date | date of response | human |

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

## How Agents Interact With the Sheet

Agents use the `google-sheets` MCP server (see `agents/SETUP.md`) with these operations:

- **Read rows**: query by column filter (e.g., `status = identified`)
- **Append row**: sourcer inserts new prospects
- **Update row**: researcher/outreach-writer update specific columns
- **Read by ID**: lookup a prospect by column A

Each agent declares `mcpServers: [google-sheets]` in its frontmatter and uses the Sheet ID from `FRS_PROSPECTS_SHEET_ID`.

## Initial Sheet Creation

To create the Sheet from this schema:
1. Create a new Google Sheet titled `FRS Prospect CRM`
2. Create four tabs named exactly: `prospects`, `outreach_log`, `research_cache`, `config`
3. Add headers to row 1 of each tab matching the column keys above
4. Share with the service account email (see `SETUP.md`)
5. Copy the Sheet ID into `FRS_PROSPECTS_SHEET_ID` env var
