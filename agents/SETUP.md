# FRS Agentic System — Setup Guide

One-time setup for API keys, MCP servers, and environment variables. Follow this before running any agents for the first time.

## 1. Google Sheets CRM

FRS agents use a Google Sheet as the prospect CRM so you can review, edit, and sort prospects through a familiar UI.

### Step 1a: Create the Sheet

Create a new Google Sheet titled `FRS Prospect CRM` with the structure defined in `agents/data/prospects-sheet-schema.md`.

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

Add these to your shell profile (`~/.zshrc`, `~/.bashrc`, or `.env` if using direnv):

```bash
export GOOGLE_APPLICATION_CREDENTIALS="$HOME/.frs/service-account.json"
export FRS_PROSPECTS_SHEET_ID="<your_sheet_id_here>"
```

Reload your shell (`source ~/.zshrc` or restart your terminal).

### Step 1d: Verify

The MCP server will connect automatically when Claude Code starts. To test:

```bash
claude mcp list
```

You should see `google-sheets` listed and connected.

## 2. Linear (already configured)

Linear MCP is already connected via Claude Code. Agents reference the **Future Ready Studio** project.

No action needed — but if agents can't see Linear, verify in Claude Code settings that the Linear MCP is enabled for this project.

## 3. Secrets Handling

**Never commit**:
- Service account JSON files
- Environment files (`.env`, `.env.local`)
- API keys in any form

Verify `.gitignore` covers these (see `/.gitignore`).

## 4. Per-Agent Env Var Reference

| Agent | Needs | Env Var |
|-------|-------|---------|
| `frs-content-writer` | None | — |
| `frs-content-planner` | Linear access | (configured in Claude Code) |
| `frs-prospect-sourcer` | Sheets, Linear | `FRS_PROSPECTS_SHEET_ID`, `GOOGLE_APPLICATION_CREDENTIALS` |
| `frs-prospect-researcher` | Sheets, web | `FRS_PROSPECTS_SHEET_ID`, `GOOGLE_APPLICATION_CREDENTIALS` |
| `frs-outreach-writer` | Sheets | `FRS_PROSPECTS_SHEET_ID`, `GOOGLE_APPLICATION_CREDENTIALS` |

## 5. Troubleshooting

**"Sheet not found"**: Verify `FRS_PROSPECTS_SHEET_ID` matches the actual Sheet ID, and the service account email has Editor access.

**"Permission denied"**: The service account needs Editor access to the Sheet. Go to Share → add the service account email.

**"MCP server not connected"**: Run `claude mcp list` to see connection status. Check that `GOOGLE_APPLICATION_CREDENTIALS` points to a valid JSON file.

**Agents can't see the Sheet**: Each agent that needs Sheet access must declare `mcpServers: [google-sheets]` in its frontmatter. Check the agent definition.
