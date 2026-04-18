# Future Ready Studio — Agentic System

Claude Code routines for content generation and lead generation. All agents and commands prefixed with `frs-`.

**First-time setup**: read `agents/SETUP.md` — requires Google Sheets API credentials.

## Architecture

You (the user) coordinate. Thin slash commands (`/frs-*`) dispatch work to specialist subagents. Subagents run in isolated context, read shared context files, write outputs to files or the CRM Sheet, return compact summaries.

Agents communicate through **shared surfaces**, never directly:

```
┌───────────────────────────────────────────────────────────────┐
│                       YOU (coordinator)                        │
│     /frs-draft-post  /frs-plan-week  /frs-research  ...        │
└─────────┬─────────────┬──────────────┬────────────────────────┘
          │             │              │
     ┌────▼───┐  ┌──────▼─────┐  ┌─────▼──────┐
     │Content │  │  Content   │  │  Prospect  │
     │ Writer │  │  Planner   │  │ Researcher │
     └────┬───┘  └──────┬─────┘  └─────┬──────┘
          │             │              │
     ┌────▼─────────────▼──────────────▼─────────────────┐
     │              SHARED SURFACES                       │
     │                                                    │
     │  Context files    agents/context/*.md              │
     │  Voice + pillars  agents/voice-guide.md, pillars.md│
     │  Drafts           agents/drafts/                   │
     │  Post history     agents/data/posts.json           │
     │  Prospect CRM     Google Sheet (via MCP)           │
     │  Agent memory     .claude/agent-memory/frs-*       │
     │  Linear           Task queue + audit log           │
     │  Git              Change history                   │
     └────────────────────────────────────────────────────┘
```

## Modularity Principle

Slash commands are **thin dispatchers**. They invoke the subagent and nothing more. All logic lives in:

1. The **agent definition** (`.claude/agents/frs-*.md`) — steps, rules, error handling
2. The **context files** (`agents/**/*.md`) — pillars, voice, business, objections, templates

To change how an agent behaves: edit the agent or the context file. Don't edit slash commands.

## Structure

```
.claude/
  agents/
    frs-content-writer.md          Drafts LinkedIn posts
    frs-content-planner.md         Phase 2
    frs-prospect-researcher.md     Phase 3
    frs-prospect-sourcer.md        Phase 4
    frs-outreach-writer.md         Phase 4
  commands/
    frs-draft-post.md              /frs-draft-post (thin dispatcher)
    frs-plan-week.md               Phase 2
    frs-research.md                Phase 3
    frs-personalize.md             Phase 4
  agent-memory/                     Per-agent persistent learning
    frs-content-writer/
      MEMORY.md

agents/
  README.md                        This file
  SETUP.md                         One-time setup (API keys, env vars)
  voice-guide.md                   Ryan's voice (calibrated from real writing)
  pillars.md                       6 content pillars + angles
  context/
    business.md                    Offer, ICP, positioning
    objections.md                  12 buyer objections → responses
  templates/
    outreach.md                    Connection, DM, email templates
  specs/
    content-writer.md              One-pager spec
  data/
    posts.json                     Published post history
    prospects-sheet-schema.md      Google Sheet structure (CRM lives in Sheets)
  drafts/
    <date>-<slug>.md               Drafted posts awaiting review

.mcp.json                          MCP server config (Google Sheets, etc.)
```

## Where Each Thing Lives (single source of truth)

| What | File |
|------|------|
| Voice, tone, hook rules | `agents/voice-guide.md` |
| Content pillars + angles | `agents/pillars.md` |
| Business offer, ICP | `agents/context/business.md` |
| Objection handling | `agents/context/objections.md` |
| Outreach templates | `agents/templates/outreach.md` |
| Prospect CRM | Google Sheet (see `prospects-sheet-schema.md`) |
| Post history | `agents/data/posts.json` |
| Agent learnings | `.claude/agent-memory/frs-<agent>/MEMORY.md` |
| Env vars / API keys | `agents/SETUP.md` |

## How Agents Communicate

| Surface | What | Read by | Written by |
|---------|------|---------|-----------|
| Context files | Voice, pillars, business, objections | All agents | Human |
| Google Sheet | Prospect CRM (read/write) | All agents | All agents |
| posts.json | Published post history | Content agents | Content Writer + human |
| Agent memory | Learned preferences (per agent) | Own agent only | Own agent only |
| Linear | Task queue | All agents | Planner + Sourcer |
| Git | Change audit trail | Human | Agents commit after writes |

## Token Optimization

All agents run on **Opus 4.7**. Efficiency comes from system design:

1. **Thin dispatchers** — commands have no logic, just invoke agents
2. **File-based I/O** — agents write to files/Sheet, return paths + short summaries
3. **Minimum tools** — 3-4 tools per agent
4. **Context caching** — stable file paths = prompt cache hits across runs
5. **Subagent isolation** — heavy work in discardable context
6. **Persistent memory** — corrections accumulate, not repeated in prompts
7. **Single source of truth** — no duplicated lists that force agents to reconcile

## Phase Plan

- **Phase 1** (live): `frs-content-writer` + `/frs-draft-post`
- **Phase 2**: `frs-content-planner` + `/frs-plan-week` + Linear integration
- **Phase 3**: `frs-prospect-researcher` + `/frs-research` + Google Sheets
- **Phase 4**: `frs-prospect-sourcer` + `frs-outreach-writer` + full pipeline
