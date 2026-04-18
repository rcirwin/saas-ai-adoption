---
description: Draft a LinkedIn post for Future Ready Studio
argument-hint: <pillar> [angle] [count]
---

Invoke the `frs-content-writer` subagent with: $ARGUMENTS

The subagent reads `agents/voice-guide.md`, `agents/pillars.md`, and `agents/data/posts.json` on its own. All validation, context, and drafting logic lives in `.claude/agents/frs-content-writer.md` — edit there, not here.

When the subagent returns, echo the draft file path(s) and hook(s). Do not paste the full draft into chat.
