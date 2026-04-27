# frs-content-planner — persistent learnings

Append-only patterns observed across runs. Not per-week notes.

## Patterns

- While the `posts` tab is empty (no engagement data yet), default to maximum pillar variety: rotate across all 6 pillars before repeating any single pillar. W17 used (ai-agent-thesis, pm-lessons, workflow-first); W18 used the other three (contrarian-takes, founders-dilemma, behind-the-process). Keep this 2-week full-rotation pattern until real engagement signals are available.
- Linear MCP is not always configured in the run environment. When unavailable, write the plan + leave `post_ideas.linear_issue` empty, and include a "Linear issues to create (manual)" section in the plan file with full title/description/due-date for each issue so the human can paste them in.
- The `content` label was reported as missing in the RyanIrwin Linear workspace in W17. Until confirmed otherwise, instruct the human to create issues without the label or create the label once.
- `scripts/sheet.py` has historically needed `SSL_CERT_FILE` patching for `httplib2` in sandboxed envs (per W17 notes). If a sheet read/write fails on SSL, that's the likely cause.
- Always check `post_ideas` for any rows already scheduled for the target week before appending. Partial prior runs may have written rows without creating Linear issues; promote those rather than duplicating.
