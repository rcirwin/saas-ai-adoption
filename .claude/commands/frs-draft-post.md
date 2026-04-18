---
description: Draft a LinkedIn post for Future Ready Studio in Ryan's voice
argument-hint: <pillar-id> [angle] [count=1]
---

Draft a LinkedIn post using the `frs-content-writer` subagent.

User invoked: `/frs-draft-post $ARGUMENTS`

Parse the arguments:
- First token = pillar id (required). Valid ids: `ai-agent-thesis`, `workflow-first`, `pm-lessons`, `contrarian-takes`, `founders-dilemma`, `behind-the-process`
- Remaining text (if any) = angle/topic hint
- If the user wrote `count=2` or `count=3`, extract it; default to 1
- If no pillar was provided, ask the user which pillar and stop

Invoke the `frs-content-writer` subagent. Pass the pillar, angle, and count explicitly — the subagent has isolated context and will not see this conversation.

When the subagent returns:
- Echo the file path(s) and hook(s) to the user
- Ask if they'd like edits, another variant, or to mark it ready-to-publish
- Do NOT paste the full draft into chat — the user can open the file

Token discipline: do not re-read the voice guide, pillars, or posts.json yourself. The subagent handles all of that.
