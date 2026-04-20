# Future Ready Studio — Agentic System

Claude Code routines for content generation and lead generation. All agents and commands prefixed with `frs-`.

**First-time setup**: read `agents/SETUP.md` — requires Google Sheets API credentials.

## Architecture

You (the user) coordinate. Thin slash commands (`/frs-*`) dispatch work to specialist subagents. Subagents run in isolated context, read shared context files, write outputs to files or the Google Sheet, return compact summaries.

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
     │  Context files   agents/context/*.md               │
     │  Voice + pillars agents/voice-guide.md, pillars.md │
     │  Drafts          agents/drafts/                    │
     │  Plans           agents/plans/                     │
     │  Google Sheet    6 tabs (CRM + content)            │
     │  Agent memory    .claude/agent-memory/frs-*        │
     │  Linear          Task queue + audit log            │
     │  Git             Change history                    │
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
    frs-content-writer.md          Drafts LinkedIn posts (live)
    frs-content-planner.md         Plans weekly content + Linear (live)
    frs-prospect-sourcer.md        Sources new leads (live)
    frs-prospect-researcher.md     Researches leads + scores fit (live)
    frs-outreach-writer.md         Drafts personalized outreach (live)
  commands/
    frs-draft-post.md              /frs-draft-post
    frs-plan-week.md               /frs-plan-week
    frs-source-leads.md            /frs-source-leads
    frs-research.md                /frs-research
    frs-draft-outreach.md          /frs-draft-outreach
  agent-memory/                     Per-agent persistent learning
    frs-<agent>/MEMORY.md

agents/
  README.md                        This file
  SETUP.md                         One-time setup (API keys, env vars)
  voice-guide.md                   Ryan's voice (calibrated from real writing)
  pillars.md                       6 content pillars + angles
  context/
    business.md                    Offer, ICP, positioning
    objections.md                  12 buyer objections → responses
    sourcing.md                    Sources + disqualification rules
    research-protocol.md           Research sources + fit scoring rubric
  templates/
    outreach.md                    Connection, DM, email templates
  specs/
    content-writer.md              One-pager spec
  tests/
    README.md                      How to run agent runbooks
    content-writer.md              6-case runbook
    content-planner.md             5-case runbook
    prospect-sourcer.md            5-case runbook
    prospect-researcher.md         5-case runbook
    outreach-writer.md             6-case runbook
  data/
    prospects-sheet-schema.md      Google Sheet structure (6 tabs)
  drafts/                          LinkedIn post drafts
  plans/                           Weekly content plans
  sourcing-runs/                   Sourcer run summaries
  research-runs/                   Researcher run summaries
  outreach-drafts/                 Outreach message drafts
  outreach-runs/                   Outreach writer run summaries

scripts/
  session-start.sh                 SessionStart hook (pull + cred bootstrap)
  session-stop.sh                  Stop hook (auto-commit + push main)
  sheet-bootstrap.gs               One-click Apps Script for Sheet setup

.claude/settings.json              Hook configuration
.mcp.json                          MCP server config (Google Sheets)
```

## Where Each Thing Lives (single source of truth)

| What | File / Surface |
|------|----------------|
| Voice, tone, hook rules | `agents/voice-guide.md` |
| Content pillars + angles | `agents/pillars.md` |
| Business offer, ICP | `agents/context/business.md` |
| Objection handling | `agents/context/objections.md` |
| Outreach templates | `agents/templates/outreach.md` |
| Prospect CRM | Google Sheet tabs: `prospects`, `outreach_log`, `research_cache`, `config` |
| Post history + engagement | Google Sheet tab: `posts` |
| Content idea backlog | Google Sheet tab: `post_ideas` |
| Sheet schema reference | `agents/data/prospects-sheet-schema.md` |
| Agent learnings | `.claude/agent-memory/frs-<agent>/MEMORY.md` |
| Agent test runbooks | `agents/tests/<agent>.md` |
| Env vars / API keys | `agents/SETUP.md` |

## How Agents Communicate

| Surface | What | Read by | Written by |
|---------|------|---------|-----------|
| Context files | Voice, pillars, business, objections | All agents | Human |
| Google Sheet | CRM + post history + ideas backlog | All agents | All agents + human |
| Agent memory | Learned preferences (per agent) | Own agent only | Own agent only |
| Linear | Task queue (content + prospects) | Planner, Sourcer | Planner, Sourcer |
| Git | Change audit trail | Human | Agents commit after writes |

## Engagement Feedback Loop

This is how signal flows from published content back into planning:

1. You publish a post that `frs-content-writer` drafted
2. You manually fill in the `posts` tab engagement columns (impressions, DMs, calls booked) over the following days
3. Next time you run `/frs-plan-week`, `frs-content-planner` reads the last 28 days of `posts` and weights pillars by outcome (calls > DMs > clicks > reactions > impressions)
4. Over time, pillars that drive actual leads get more slots; pillars that only drive vanity metrics get fewer

## Template Performance Loop

Same pattern for outreach:

1. `frs-outreach-writer` drafts a message using a template ID and angle
2. It logs `template_used` + `angle` to the `outreach_log` tab
3. You fill in `response_status`, `response_sentiment`, `led_to_call` as replies come in
4. On the next draft, the outreach-writer aggregates by (template × angle × prospect category) to pick the highest-performing combo for the prospect it's targeting

## Token Optimization

All agents run on **Opus 4.7**. Efficiency comes from system design:

1. **Thin dispatchers** — commands have no logic, just invoke agents
2. **File/Sheet-based I/O** — agents write artifacts, return paths + short summaries
3. **Minimum tools** — 3-4 native tools per agent + only the MCP servers they need
4. **Context caching** — stable file paths = prompt cache hits across runs
5. **Subagent isolation** — heavy work in discardable context
6. **Persistent memory** — corrections accumulate, not repeated in prompts
7. **Single source of truth** — no duplicated lists that force agents to reconcile
8. **Filtered Sheet queries** — never fetch whole tabs; always filter by column

## Cloud Sessions (off-hours / scheduled runs)

The system works on both local (desktop) and cloud (Claude Code on the web). Cloud sessions are ephemeral — sandboxes die after each run — so two hooks keep state in sync:

```
┌─────────────────────────────────────────────────────────┐
│                    CLOUD SESSION                         │
│                                                          │
│  SessionStart hook                                       │
│  ├── git pull origin main (get latest context + memory)  │
│  └── decode FRS_GOOGLE_CREDENTIALS_B64 → /tmp/creds.json │
│                                                          │
│  ┌────────────────────┐                                  │
│  │  Agent runs         │                                 │
│  │  (draft, plan, etc) │                                 │
│  └────────┬───────────┘                                  │
│           │                                              │
│  Stop hook                                               │
│  ├── git add agents/drafts/ agents/plans/ .claude/memory │
│  ├── git commit (auto-message)                           │
│  └── git push origin main                                │
│                                                          │
│  Sandbox destroyed                                       │
└─────────────────────────────────────────────────────────┘
```

**Scheduling**: Use Claude Code on the web's scheduled sessions:
- Sunday 8pm → `/frs-plan-week` → plan for the week + Linear issues
- Mon/Wed/Fri 6am → `/frs-draft-post <pillar>` → drafts ready for morning review

Each session is self-contained. Memory + drafts + plans persist via git, engagement data lives in Google Sheets. No state is lost when sandboxes die.

See `agents/SETUP.md` § 3 for full cloud setup.

## Structure

```
scripts/
  session-start.sh                 SessionStart hook (pull + cred bootstrap)
  session-stop.sh                  Stop hook (auto-commit artifacts + push main)
```

## Token Optimization

All agents run on **Opus 4.7**. Efficiency comes from system design:

1. **Thin dispatchers** — commands have no logic, just invoke agents
2. **File/Sheet-based I/O** — agents write artifacts, return paths + short summaries
3. **Minimum tools** — 3-4 native tools per agent + only the MCP servers they need
4. **Context caching** — stable file paths = prompt cache hits across runs
5. **Subagent isolation** — heavy work in discardable context
6. **Persistent memory** — corrections accumulate, not repeated in prompts
7. **Single source of truth** — no duplicated lists that force agents to reconcile
8. **Filtered Sheet queries** — never fetch whole tabs; always filter by column
9. **Scheduled cloud sessions** — off-hours runs use separate token budgets, keep daytime usage light

## Full Lead-Gen Pipeline

```
┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│   SOURCER        │ ───→ │   RESEARCHER     │ ───→ │ OUTREACH WRITER  │
│                  │      │                  │      │                  │
│ Tue 7am ET       │      │ Tue-Fri 9am ET   │      │ Tue-Fri 12pm ET  │
│                  │      │                  │      │                  │
│ AppSumo / PH /   │      │ Website /        │      │ Templates +      │
│ jobs / directory │      │ LinkedIn / G2 /  │      │ research hooks / │
│                  │      │ funding news     │      │ objection map    │
│                  │      │                  │      │                  │
│ status:          │      │ status:          │      │ status: drafted  │
│ identified       │      │ researched /     │      │ (human sends)    │
│                  │      │ not-a-fit        │      │                  │
└──────────────────┘      └──────────────────┘      └──────────────────┘
         │                         │                         │
         └─────────────────────────┴─────────────────────────┘
                                   ▼
                          Google Sheet (CRM)
                     prospects + research_cache
                        + outreach_log tabs
```

Status flows one direction: `identified` → `researched` → `outreach-sent` → `connected` → `call-scheduled` → `call-completed` → `proposal-sent` → `closed-won` / `closed-lost`. Only humans move status past `outreach-sent`.

## Phase Plan

- **Phase 1** (live): `frs-content-writer` + `/frs-draft-post`
- **Phase 2** (live): `frs-content-planner` + `/frs-plan-week` + Linear integration + cloud hooks
- **Phase 3** (live): `frs-prospect-sourcer` + `frs-prospect-researcher` + `/frs-source-leads` + `/frs-research`
- **Phase 4** (live): `frs-outreach-writer` + `/frs-draft-outreach` + template performance tracking
