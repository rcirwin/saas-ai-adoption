---
description: Draft personalized outreach messages for researched prospects
argument-hint: [prospect_id | all-researched] [channel] [limit]
---

Invoke the `frs-outreach-writer` subagent with: $ARGUMENTS

The subagent reads `agents/templates/outreach.md`, `agents/voice-guide.md`, the `prospects`, `research_cache`, and `outreach_log` Sheet tabs on its own. All templating, personalization, and logging logic lives in `.claude/agents/frs-outreach-writer.md` — edit there, not here.

When the subagent returns, echo the outreach run summary file path and the draft paths. Do not paste the full message text.
