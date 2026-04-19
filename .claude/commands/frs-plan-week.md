---
description: Plan a week of LinkedIn content for Future Ready Studio
argument-hint: [week_start] [count] [focus]
---

Invoke the `frs-content-planner` subagent with: $ARGUMENTS

The subagent reads `agents/pillars.md`, the `posts` + `post_ideas` tabs of the FRS Google Sheet, and Linear on its own. All planning, weighting, and Linear-issue-creation logic lives in `.claude/agents/frs-content-planner.md` — edit there, not here.

When the subagent returns, echo the plan file path and Linear issue keys. Do not paste the full plan.
