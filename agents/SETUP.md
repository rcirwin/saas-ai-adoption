# FRS Agentic System — Setup Guide

Setup for API keys, MCP servers, and environment variables. Two paths: **local** (Claude Code desktop) or **cloud** (Claude Code on the web for scheduled/off-hours runs).

## 1. Google Sheets

FRS agents use a Google Sheet as the shared data layer (CRM + content history) so you can review, edit, and sort through a familiar UI.

### Step 1a: Create the Sheet

Create a new Google Sheet titled `FRS Agentic System` with 6 tabs matching the structure in `agents/data/prospects-sheet-schema.md`:
- `prospects`, `outreach_log`, `research_cache`, `config`, `posts`, `post_ideas`

Copy the Sheet ID from the URL:
```
https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit
                                          ↑
                                this part
```

### Step 1b: Create a Google Cloud Service Account

1. Go to https://console.cloud.google.com/ → create or select a project (e.g., `frs-agents`)
2. Enable the **Google Sheets API** for the project
3. Go to `IAM & Admin` → `Service Accounts` → **Create Service Account**
4. Give it a name like `frs-sheets-access`. Skip role assignments (not needed for Sheets access via sharing).
5. Open the service account → `Keys` tab → **Add Key** → **JSON**. Download the JSON file.
6. Save the JSON file somewhere outside the repo. Recommended: `~/.frs/service-account.json`
7. Copy the `client_email` from the JSON file (looks like `frs-sheets-access@<project>.iam.gserviceaccount.com`)
8. Open your Google Sheet → **Share** → paste the service account email → give **Editor** access

### Step 1c: Set Environment Variables

#### Local (desktop Claude Code)

Add to your shell profile (`~/.zshrc`):

```bash
export FRS_GOOGLE_CREDENTIALS="$HOME/.frs/service-account.json"
export FRS_PROSPECTS_SHEET_ID="<your_sheet_id_here>"
```

Reload your shell (`source ~/.zshrc`).

**Why `FRS_GOOGLE_CREDENTIALS` and not `GOOGLE_APPLICATION_CREDENTIALS`?**

Most Google SDKs auto-read the standard `GOOGLE_APPLICATION_CREDENTIALS` variable. If you already have another agentic system that sets it, adding a second export would collide.

FRS uses a namespaced variable. The `.mcp.json` maps it into the MCP subprocess as `GOOGLE_APPLICATION_CREDENTIALS`, so only the FRS Google Sheets MCP sees it. Both coexist:

```bash
# Other system (unchanged)
export GOOGLE_APPLICATION_CREDENTIALS="$HOME/.other-system/creds.json"

# FRS (scoped to this project via .mcp.json)
export FRS_GOOGLE_CREDENTIALS="$HOME/.frs/service-account.json"
export FRS_PROSPECTS_SHEET_ID="<your_sheet_id_here>"
```

#### Cloud (Claude Code on the web)

In the cloud sandbox, there's no `~/.frs/` directory. Instead:

1. Base64-encode your service account JSON:
   ```bash
   base64 -i ~/.frs/service-account.json | pbcopy
   ```
2. In your Claude Code web project settings, add these **project secrets**:
   - `FRS_GOOGLE_CREDENTIALS_B64` = the base64 string you just copied
   - `FRS_GOOGLE_CREDENTIALS` = `/tmp/frs-service-account.json`
   - `FRS_PROSPECTS_SHEET_ID` = your Sheet ID
3. The `SessionStart` hook (`scripts/session-start.sh`) will automatically decode the base64 secret and write it to `/tmp/frs-service-account.json` on every session boot.

You do NOT need to modify `.mcp.json` — it already references `${FRS_GOOGLE_CREDENTIALS}`, which works in both environments.

### Step 1d: Verify

The MCP server will connect automatically when Claude Code starts. To test:

```bash
claude mcp list
```

You should see `google-sheets` listed and connected.

## 2. Linear (already configured)

Linear MCP is already connected via Claude Code. Agents reference the **Future Ready Studio** project.

No action needed — but if agents can't see Linear, verify in Claude Code settings that the Linear MCP is enabled for this project.

## 3. Session Hooks (cloud runs)

Two hooks in `.claude/settings.json` handle the cloud lifecycle:

| Hook | Script | What it does |
|------|--------|-------------|
| `SessionStart` | `scripts/session-start.sh` | `git pull origin main`, materialize creds from `FRS_GOOGLE_CREDENTIALS_B64`, verify env |
| `Stop` | `scripts/session-stop.sh` | Auto-commit artifacts in `agents/drafts/`, `agents/plans/`, `.claude/agent-memory/` → push to main |

These hooks also work on desktop (harmless no-ops for the cred bootstrap if `FRS_GOOGLE_CREDENTIALS_B64` isn't set).

### Scheduling off-hours runs

Use Claude Code on the web's scheduled sessions. See **`agents/CLOUD-ROUTINES.md`** for the full 7-session schedule covering:

- **Content pipeline**: Plan Week (Sun 9pm ET) → Draft Mon/Wed/Fri (6am ET)
- **Lead-gen pipeline**: Source (Tue 7am ET) → Research (Tue-Fri 9am ET) → Outreach (Tue-Fri 12pm ET)

Each session: boots → SessionStart pulls latest main → agent runs → Stop commits artifacts → pushes to main → sandbox dies. Next session picks up where the previous left off because memory + context are all in git.

## 4. Secrets Handling

**Never commit**:
- Service account JSON files
- Environment files (`.env`, `.env.local`)
- API keys in any form

Verify `.gitignore` covers these (see `/.gitignore`).

## 5. Per-Agent Env Var Reference

| Agent | Needs | Env Var |
|-------|-------|---------|
| `frs-content-writer` | Sheets (dedup + engagement) | `FRS_PROSPECTS_SHEET_ID`, `FRS_GOOGLE_CREDENTIALS` |
| `frs-content-planner` | Sheets, Linear | `FRS_PROSPECTS_SHEET_ID`, `FRS_GOOGLE_CREDENTIALS` |
| `frs-prospect-sourcer` | Sheets, Linear | `FRS_PROSPECTS_SHEET_ID`, `FRS_GOOGLE_CREDENTIALS` |
| `frs-prospect-researcher` | Sheets, web | `FRS_PROSPECTS_SHEET_ID`, `FRS_GOOGLE_CREDENTIALS` |
| `frs-outreach-writer` | Sheets | `FRS_PROSPECTS_SHEET_ID`, `FRS_GOOGLE_CREDENTIALS` |

For cloud, add `FRS_GOOGLE_CREDENTIALS_B64` to project secrets (see Step 1c above).

## 6. Troubleshooting

**"Sheet not found"**: Verify `FRS_PROSPECTS_SHEET_ID` matches the actual Sheet ID, and the service account email has Editor access.

**"Permission denied"**: The service account needs Editor access to the Sheet. Go to Share → add the service account email.

**"MCP server not connected"**: Run `claude mcp list` to see connection status. Check that `FRS_GOOGLE_CREDENTIALS` points to a valid JSON file and that the path is absolute (no `~`).

**"Auth error but my other Google agent still works"**: That's the point — `FRS_GOOGLE_CREDENTIALS` is isolated to this repo's `.mcp.json`. If it's unset, check `echo $FRS_GOOGLE_CREDENTIALS` in the same shell you launched Claude Code from.

**"Creds not materialized" (cloud)**: Check that `FRS_GOOGLE_CREDENTIALS_B64` is set as a project secret. Run `echo $FRS_GOOGLE_CREDENTIALS_B64 | head -c 20` to verify it exists. The SessionStart hook will log a warning if it's missing.

**"Push failed on session stop"**: The stop hook retries 4 times with exponential backoff. If it still fails, artifacts are committed locally but not pushed. Next session's `git pull` will pick them up, but you may need to resolve a conflict if two sessions ran concurrently.

**Agents can't see the Sheet**: Each agent that needs Sheet access must declare `mcpServers: [google-sheets]` in its frontmatter. Check the agent definition.
