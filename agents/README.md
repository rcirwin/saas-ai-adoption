# Future Ready Studio — Agentic System

Claude Code routines for content generation and lead generation. All agents prefixed with `frs-`.

## Architecture

You (the user) act as coordinator. Slash commands (`/frs-*`) route work to specialist subagents. Subagents run in isolated context, write outputs to files, return compact summaries.

Agents communicate through **shared surfaces**, not direct messages:

```
┌─────────────────────────────────────────────────────────┐
│                    YOU (Coordinator)                      │
│          /frs-draft-post  /frs-plan-week  /frs-research  │
└────────┬──────────────┬──────────────────┬───────────────┘
         │              │                  │
    ┌────▼────┐   ┌─────▼─────┐    ┌──────▼──────┐
    │ Content │   │  Content  │    │  Prospect   │
    │ Writer  │   │  Planner  │    │ Researcher  │
    └────┬────┘   └─────┬─────┘    └──────┬──────┘
         │              │                  │
    ┌────▼──────────────▼──────────────────▼──────┐
    │           SHARED SURFACES                    │
    │                                              │
    │  Context Files    agents/context/*.md         │
    │  Data Files       agents/data/*.json         │
    │  Agent Memory     .claude/agent-memory/frs-* │
    │  Linear           Task queue + audit log     │
    │  Git              Audit trail of all changes │
    └──────────────────────────────────────────────┘
```

## Structure

```
.claude/
  agents/
    frs-content-writer.md     Drafts LinkedIn posts
    frs-content-planner.md    Plans weekly content (Phase 2)
    frs-prospect-researcher.md Researches companies (Phase 3)
    frs-prospect-sourcer.md   Finds new leads (Phase 4)
    frs-outreach-writer.md    Personalizes outreach (Phase 4)
  commands/
    frs-draft-post.md         /frs-draft-post <pillar> [angle]
    frs-plan-week.md          /frs-plan-week (Phase 2)
    frs-research.md           /frs-research <company> (Phase 3)
    frs-personalize.md        /frs-personalize <prospect> (Phase 4)
  agent-memory/
    frs-content-writer/       Persistent learning (auto-managed)
    frs-content-planner/      (Phase 2+)

agents/
  README.md                   This file
  voice-guide.md              Voice, tone, hook rules
  pillars.md                  6 content pillars + angles
  context/
    business.md               Business context (all agents read)
    objections.md             Objection handling reference
  templates/
    outreach.md               Outreach message templates
  specs/
    content-writer.md         One-pager spec per Principle 1
  data/
    posts.json                Published post history
    prospects.json            Prospect CRM
    outreach-log.json         Outreach activity log
    research-cache.json       Research results cache
  drafts/
    <date>-<slug>.md          Drafted posts awaiting review
```

## How Agents Communicate

| Surface | What | Read by | Written by |
|---------|------|---------|-----------|
| Context files | Business knowledge, objections, ICP | All agents | Human (stable reference) |
| Data files | Prospects, posts, outreach, research | All agents | All agents (structured JSON) |
| Agent memory | Learned preferences, corrections | Each agent (own) | Each agent (own) |
| Linear | Task queue + status tracking | All agents | Planner, Sourcer |
| Git | Audit trail | Human (review) | Agents commit after writes |

### Data Flow Example

```
Content Planner reads posts.json
  → creates Linear issue "Draft Wednesday post: workflow-first, agent X"
  → Content Writer picks up issue
  → reads voice-guide.md + pillars.md + posts.json (for dedup)
  → writes draft to agents/drafts/
  → returns path + hook
  → user reviews, edits, publishes
  → user (or agent) updates posts.json with published entry
```

## Token Optimization

All agents run on **Opus 4.7**. Token efficiency comes from system design:

1. **File-based I/O**: Write to files, return paths + short summaries. Main context stays light.
2. **Minimum tools**: 3-4 tools per agent (reduces decision overhead).
3. **Structured outputs**: JSON or tight bullets, not prose.
4. **Lean reference files**: Agents grep/read only relevant sections.
5. **Subagent isolation**: Heavy work in subagent context, discarded after.
6. **Persistent memory**: Corrections accumulate in agent memory, not repeated in prompts.
7. **Cache-friendly paths**: Stable file paths activate prompt caching across runs.

## Phase Plan

- **Phase 1** (live): `frs-content-writer` + `/frs-draft-post`
- **Phase 2**: `frs-content-planner` + `/frs-plan-week` + Linear integration
- **Phase 3**: `frs-prospect-researcher` + `/frs-research`
- **Phase 4**: `frs-prospect-sourcer` + `frs-outreach-writer` + full pipeline

## Future: Google Sheets CRM

Currently `agents/data/prospects.json` is the CRM (git-tracked, all agents have access). To migrate to Google Sheets later: add a Google Sheets MCP server to agent `mcpServers` field. No agent logic changes needed — just swap Read/Write calls for Sheet API calls.
