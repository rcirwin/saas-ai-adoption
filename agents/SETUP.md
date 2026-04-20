# FRS Agentic System — Cloud Setup Guide

This repo runs as **cloud-only routines in Claude Code on the web**. All credentials and config live as Claude Code project secrets. No `~/.zshrc`, no local `.env`.

Sheet access is direct via the Google Sheets API (Python client) — not via an MCP server. Agents invoke `scripts/sheet.py` through Bash.

For the schedule and routine definitions, see `agents/CLOUD-ROUTINES.md`.

## 1. Google Sheets

Agents use a Google Sheet as the shared data layer so you can review, edit, and sort through a familiar UI.

### Step 1a: Create the Sheet

Create a new Google Sheet titled `FRS Agentic System`. It will have 6 tabs — those are created automatically by the bootstrap script in Step 1d. Tabs: `prospects`, `outreach_log`, `research_cache`, `config`, `posts`, `post_ideas`.

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
5. Open the service account → `Keys` tab → **Add Key** → **JSON**. Download the JSON.
6. Copy the `client_email` from the JSON (looks like `frs-sheets-access@<project>.iam.gserviceaccount.com`)
7. Open your Google Sheet → **Share** → paste the service account email → give **Editor** access

### Step 1c: Base64-encode the JSON for the project secret

The cloud sandbox is ephemeral — it has no persistent filesystem. We pass the service account JSON in as a base64 string that the SessionStart hook decodes to `/tmp/frs-service-account.json` on every boot.

On your local machine:

```bash
# macOS
base64 -i /path/to/service-account.json | pbcopy

# Linux
base64 -w0 /path/to/service-account.json
```

The output is the value for `FRS_GOOGLE_CREDENTIALS_B64` below.

### Step 1d: Bootstrap the Sheet tabs

Open your Sheet → Extensions → Apps Script → paste the contents of `scripts/sheet-bootstrap.gs` → Run. This creates all 6 tabs with the correct headers and seeds the `config` tab with defaults (`icp_arr_min`, `icp_arr_max`, `outreach_daily_cap`, `follow_up_cadence_days`, `research_staleness_days`).

## 2. Project Secrets (Claude Code web)

Go to your Claude Code web project → **Settings → Project Secrets** and add:

| Secret | Value |
|---|---|
| `FRS_GOOGLE_CREDENTIALS_B64` | The base64 string from Step 1c |
| `FRS_GOOGLE_CREDENTIALS` | `/tmp/frs-service-account.json` |
| `FRS_PROSPECTS_SHEET_ID` | Your Sheet ID from Step 1a |

Why two credential secrets?
- `FRS_GOOGLE_CREDENTIALS_B64` is the actual credential payload.
- `FRS_GOOGLE_CREDENTIALS` is the **path inside the sandbox** where the SessionStart hook writes the decoded JSON. Always `/tmp/frs-service-account.json`. `scripts/sheet.py` reads this env var to know where to load the key from.

The path is a constant string you set once — it never points to a file on your local machine.

Why the namespaced `FRS_*` prefix? If you run other Google-based systems with `GOOGLE_APPLICATION_CREDENTIALS` set, the namespaced var prevents collision.

## 3. Linear

Linear MCP is user-scoped in Claude Code (connected once at your Claude account level — not per project). No action if you already have it connected.

If not: in Claude Code web → Settings → MCP Servers → add Linear → authenticate.

Agents reference the **Future Ready Studio** Linear project/team.

## 4. How agents talk to the Sheet

Each Sheet-touching agent uses the Bash tool to invoke `scripts/sheet.py`. The CLI wraps the Google Sheets API with 6 commands:

```
python3 scripts/sheet.py read <tab> [col=val ...] [--limit N] [--json]
python3 scripts/sheet.py append <tab> <col=val> [<col=val> ...]
python3 scripts/sheet.py update <tab> --where <col>=<val> --set <col>=<val> [<col>=<val> ...]
python3 scripts/sheet.py upsert <tab> --key <col> <col=val> [<col=val> ...]
python3 scripts/sheet.py count <tab> [col=val ...]
python3 scripts/sheet.py tabs
```

Headers are read from row 1 of each tab, so schema is driven by the Sheet itself. The CLI validates column names against the header and errors loudly on typos.

## 5. Session Hooks

Two hooks in `.claude/settings.json` handle the cloud session lifecycle:

| Hook | Script | What it does |
|------|--------|-------------|
| `SessionStart` | `scripts/session-start.sh` | `git checkout main && git pull origin main`; decode `FRS_GOOGLE_CREDENTIALS_B64` → `/tmp/frs-service-account.json`; `pip install -r scripts/requirements.txt` (idempotent) |
| `Stop` | `scripts/session-stop.sh` | Auto-commit artifacts → push to `origin/main` with 4x exponential retry |

These run automatically — you don't invoke them. See `agents/CLOUD-ROUTINES.md` → "Push-to-main timing" for detail on what gets committed and when.

**Local interactive sessions on `claude/*` branches are preserved.** The SessionStart hook detects when you're on a `claude/*` branch and skips the main checkout. The Stop hook refuses to auto-push from any branch except main.

## 6. Per-Agent Env Var Reference

Every agent that touches the Sheet needs the two Google secrets. The hook materializes them before the agent boots.

| Agent | Sheet? | Linear? | Web? |
|-------|--------|---------|------|
| `frs-content-writer` | ✓ | — | — |
| `frs-content-planner` | ✓ | ✓ | — |
| `frs-prospect-sourcer` | ✓ | ✓ | ✓ |
| `frs-prospect-researcher` | ✓ | — | ✓ |
| `frs-outreach-writer` | ✓ | — | — |

- Sheet access: `FRS_GOOGLE_CREDENTIALS`, `FRS_GOOGLE_CREDENTIALS_B64`, `FRS_PROSPECTS_SHEET_ID`
- Linear: user-scoped MCP (no project secrets)
- Web: no secrets (WebSearch/WebFetch are built in)

## 7. Troubleshooting

**"Sheet not found"**
Verify `FRS_PROSPECTS_SHEET_ID` matches the actual Sheet ID and the service account email has Editor access.

**"Permission denied" on Sheet**
Go to Sheet → Share → add the service account email as Editor.

**"google-api-python-client not installed"**
The SessionStart hook runs `pip install -r scripts/requirements.txt` on every boot. If you see this error, pip either failed silently or the shell `pip3` isn't available. Check the session log for `[frs-session-start] WARNING: pip install failed.`

**"FRS_GOOGLE_CREDENTIALS not set or file missing"**
The SessionStart hook writes `/tmp/frs-service-account.json` from `FRS_GOOGLE_CREDENTIALS_B64`. If the file is missing, the B64 secret wasn't set or isn't valid base64. Check the session log for `[frs-session-start] Materialized service account credentials`.

**"Push failed on session stop"**
Stop hook retries 4x with exponential backoff. If main has branch protection blocking direct pushes, see `agents/CLOUD-ROUTINES.md` → "Troubleshooting".

**"Agent can't find the Sheet script"**
`scripts/sheet.py` must be in the repo at `scripts/sheet.py`. The agent calls it via `python3 scripts/sheet.py ...`. If the file is missing, re-pull main.

## 8. Never commit

- Service account JSON files (they're at `/tmp/` in the sandbox — sandbox dies at session end)
- Environment files (`.env`, `.env.local`)
- API keys in any form
