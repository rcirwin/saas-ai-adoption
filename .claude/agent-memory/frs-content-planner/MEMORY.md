# frs-content-planner — persistent learnings

Append-only patterns observed across runs. Not per-week notes.

## Patterns

- While the `posts` tab is empty (no engagement data yet), default to maximum pillar variety: rotate across all 6 pillars before repeating any single pillar. W17 used (ai-agent-thesis, pm-lessons, workflow-first); W18 used the other three (contrarian-takes, founders-dilemma, behind-the-process). Keep this 2-week full-rotation pattern until real engagement signals are available.
- After completing a 2-week full 6-pillar rotation with no engagement data, restart the cycle by mirroring the prior W17-style mix with fresh, non-repeating angles. W19 mirrored W17's pillar mix (ai-agent-thesis, pm-lessons, workflow-first) with all-new angles. The next "even" week (W20-style) should mirror W18's mix (contrarian-takes, founders-dilemma, behind-the-process) with fresh angles. Continue this 2-week alternation until engagement data unlocks signal-weighted planning.
- Linear MCP is not always configured in the run environment. When unavailable, write the plan + leave `post_ideas.linear_issue` empty, and include a "Linear issues to create (manual)" section in the plan file with full title/description/due-date for each issue so the human can paste them in.
- The `content` label was reported as missing in the RyanIrwin Linear workspace in W17. Until confirmed otherwise, instruct the human to create issues without the label or create the label once.
- `scripts/sheet.py` has historically needed `SSL_CERT_FILE` patching for `httplib2` in sandboxed envs (per W17 notes). Additionally, sandboxed envs may be missing `cffi` (`ModuleNotFoundError: _cffi_backend`) — a `pip install cffi` resolves it. If a sheet read/write fails, check both.
- Always check `post_ideas` for any rows already scheduled for the target week before appending. Partial prior runs may have written rows without creating Linear issues; promote those rather than duplicating.
- 60-day angle-repeat rule: cross-check planned angles against the full `post_ideas` tab (not just `posts`), since `posts` may stay empty for a long time while `post_ideas` accumulates the actual rotation history.
