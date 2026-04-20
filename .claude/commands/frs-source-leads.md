---
description: Source new B2B SaaS prospects into the CRM pipeline
argument-hint: [source] [count] [csv_path]
---

Invoke the `frs-prospect-sourcer` subagent with: $ARGUMENTS

The subagent reads `agents/context/sourcing.md`, the `prospects` and `config` Sheet tabs, and the provided sources on its own. All sourcing, qualification, and Linear-issue-creation logic lives in `.claude/agents/frs-prospect-sourcer.md` — edit there, not here.

When the subagent returns, echo the sourcing summary file path and the count breakdown. Do not paste the full prospect list.
