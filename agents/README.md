# Future Ready Studio — Agentic System

Claude Code routines for content generation and lead generation.

## Architecture: Hub-and-Spoke

You (the user) act as the coordinator. Slash commands route work to specialist subagents. Subagents run in isolated context, write outputs to files, return compact summaries.

## Structure

```
.claude/
  agents/              Subagent definitions (one specialist per file)
  commands/            Slash commands you invoke
agents/
  README.md            This file
  voice-guide.md       Voice, tone, and style reference
  pillars.md           Content pillars + angles
  icp.md               Ideal customer profile (Phase 3+)
  templates/           Outreach message templates (Phase 4)
  specs/               One-pager specs per Principle 1
  data/
    posts.json         Published post history (prevents repetition)
    prospects.json     Prospect DB (Phase 3+)
  drafts/              Drafted posts awaiting review
```

## Token Optimization Principles

1. **Model routing**: Haiku for extraction/routing, Sonnet for writing/reasoning, Opus only when genuinely needed.
2. **File-based I/O**: Subagents write to files, return paths + short summaries. Main context stays light.
3. **Minimum tools**: Each subagent gets 3-4 tools max.
4. **Structured outputs**: JSON or tight bullets, not prose.
5. **Lean reference files**: Agents grep/read only what they need.

## Linear Integration

Linear is a tool agents use — a task queue + audit log, not a spec tracker.
- Content Planner creates issues: "Draft Monday post about [topic]"
- Content Writer picks up draft issues, attaches output, marks done
- Prospect Sourcer creates research tasks for flagged leads

## Phase Plan

- **Phase 1** (live): Content Writer + `/draft-post`
- **Phase 2**: Content Planner + `/plan-week` + Linear integration
- **Phase 3**: Prospect Researcher + `/research`
- **Phase 4**: Prospect Sourcer + Outreach Writer + full pipeline
