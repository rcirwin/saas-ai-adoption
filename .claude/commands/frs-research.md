---
description: Research identified prospects and score fit for Future Ready Studio
argument-hint: [prospect_id | all-identified] [limit]
---

Invoke the `frs-prospect-researcher` subagent with: $ARGUMENTS

The subagent reads `agents/context/research-protocol.md`, the `prospects` and `research_cache` Sheet tabs, and external sources on its own. All research, scoring, and Sheet-update logic lives in `.claude/agents/frs-prospect-researcher.md` — edit there, not here.

When the subagent returns, echo the research run summary file path and the fit score distribution. Do not paste the full research details.
