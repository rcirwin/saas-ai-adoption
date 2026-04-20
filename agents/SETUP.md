# FRS Agentic System — Cloud Setup Guide

This repo runs as **cloud-only routines in Claude Code on the web**. All credentials and config live as Claude Code project secrets. No `~/.zshrc`, no local `.env`.

For the schedule and routine definitions, see `agents/CLOUD-ROUTINES.md`.

## 1. Google Sheets (CRM + content history)

Agents use a Google Sheet as the shared data layer so you can review, edit, and sort through a familiar UI.

### Step 1a: Create the Sheet

Create a new Google Sheet titled `FRS Agentic System` with 6 tabs (they'll be auto-created by the bootstrap script in Step 1d). Tabs: `prospects`, `outreach_log`, `research_cache`, `config`, `posts`, `post_ideas`.

Copy the Sheet ID from the URL:

```
https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit
                                          ↑
                                    this is what you need
```

### Step 1b: Create a Google Cloud Service Account

1. https://console.cloud.google.com/ → create or select a project (e.g., `frs-agents`)
2. Enable the **Google Sheets API** for the project
3. `IAM & Admin` → `Service Accounts` → **Create Service Account**
4. Name it `frs-sheets-access`. Skip role assignments (not needed for Sheets access via sharing).
5. Open the service account → `Keys` tab → **Add Key** → **JSON**. Download the JSON file.
6. Copy the `client_email` from the JSON (looks like `frs-sheets-access@<project>.iam.gserviceaccount.com`)
7. Open your Google Sheet → **Share** → paste the service account email → give **Editor** access

### Step 1c: Base64-encode the JSON for the project secret

The cloud sandbox is ephemeral — it has no persistent filesystem. We pass the service account JSON in as a base64 string that the SessionStart hook materializes to `/tmp/frs-service-account.json` on every boot.

On your local machine:

```bash
# macOS
base64 -i /path/to/service-account.json | pbcopy

# Linux
base64 -w0 /path/to/service-account.json
```

The output is the value for `FRS_GOOGLE_CREDENTIALS_B64` below.

### Step 1d: Bootstrap the Sheet tabs

Open your Sheet → Extensions → Apps Script → paste the contents of `scripts/sheet-bootstrap.gs` → Run. This creates all 6 tabs with the correct headers and seeds the `config` tab with defaults.

## 2. Project Secrets (Claude Code web)

Go to your Claude Code web project → **Settings → Project Secrets** and add:

| Secret | Value |
|---|---|
| `FRS_GOOGLE_CREDENTIALS_B64` | The base64 string from Step 1c |
| `FRS_GOOGLE_CREDENTIALS` | `/tmp/frs-service-account.json` |
| `FRS_PROSPECTS_SHEET_ID` | Your Sheet ID from Step 1a |

These are available to every scheduled session and every ad-hoc cloud session in this project.

**Why the namespaced `FRS_GOOGLE_CREDENTIALS` instead of the standard `GOOGLE_APPLICATION_CREDENTIALS`?**
If you run other agentic systems with Google credentials, they often use the standard variable name. The namespaced var prevents collision. The `.mcp.json` maps `FRS_GOOGLE_CREDENTIALS` into the MCP subprocess as `GOOGLE_APPLICATION_CREDENTIALS`, so only the FRS Google Sheets MCP sees it.

## 3. Linear

Linear MCP is user-scoped in Claude Code (connected once at your Claude account level — not per project). No action if you already have it connected.

If not: in Claude Code web → Settings → MCP Servers → add Linear → authenticate.

Agents reference the **Future Ready Studio** Linear project/team.

## 4. Session Hooks

Two hooks in `.claude/settings.json` handle the cloud session lifecycle:

| Hook | Script | What it does |
|------|--------|-------------|
| `SessionStart` | `scripts/session-start.sh` | `git checkout main && git pull origin main`; decode `FRS_GOOGLE_CREDENTIALS_B64` → `/tmp/frs-service-account.json`; verify env |
| `Stop` | `scripts/session-stop.sh` | Auto-commit artifacts → push to `origin/main` with 4x exponential retry |

These run automatically — you don't invoke them. See `agents/CLOUD-ROUTINES.md` → "Push-to-main timing" for detail on what gets committed and when.

**Local interactive sessions on `claude/*` branches are preserved.** The SessionStart hook detects when you're on a `claude/*` branch and skips the main checkout so your in-progress work isn't disrupted.

## 5. Per-Agent Env Var Reference

Every agent with Sheet access needs the same two secrets. The hook materializes them before the agent boots.

| Agent | Sheet? | Linear? | Web? |
|-------|--------|---------|------|
| `frs-content-writer` | ✓ | — | — |
| `frs-content-planner` | ✓ | ✓ | — |
| `frs-prospect-sourcer` | ✓ | ✓ | ✓ |
| `frs-prospect-researcher` | ✓ | — | ✓ |
| `frs-outreach-writer` | ✓ | — | — |

Sheet access: `FRS_GOOGLE_CREDENTIALS`, `FRS_GOOGLE_CREDENTIALS_B64`, `FRS_PROSPECTS_SHEET_ID`
Linear: user-scoped MCP (no project secrets)
Web: no secrets (WebSearch/WebFetch are built in)

## 6. Troubleshooting

**"Sheet not found"**
Verify `FRS_PROSPECTS_SHEET_ID` matches the actual Sheet ID and the service account email has Editor access.

**"Permission denied" on Sheet**
Go to Sheet → Share → add the service account email as Editor.

**"MCP server not connected"**
Check the session log. If `FRS_GOOGLE_CREDENTIALS` isn't set or the file at that path doesn't exist, the MCP server will fail to start. Confirm `FRS_GOOGLE_CREDENTIALS_B64` is set as a project secret and is valid base64.

**"Creds not materialized" (cloud)**
Look for `[frs-session-start] Materialized service account credentials to /tmp/frs-service-account.json` in the session log. If missing, `FRS_GOOGLE_CREDENTIALS_B64` is unset or empty.

**"Push failed on session stop"**
The Stop hook retries 4x with exponential backoff. If main has branch protection blocking direct pushes, see `agents/CLOUD-ROUTINES.md` → "Troubleshooting" for the three workarounds.

**"Agent can't see the Sheet"**
The agent's frontmatter must declare `mcpServers: [google-sheets]`. Check `.claude/agents/<agent>.md`.

## 7. Never commit

- Service account JSON files (they're at `/tmp/` in the sandbox — sandbox dies at session end)
- Environment files (`.env`, `.env.local`)
- API keys in any form

The `.gitignore` already excludes `/tmp/` indirectly (it's outside the repo), but double-check if you ever add local setup.
