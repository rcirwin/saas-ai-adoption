---
prospect_id: mergify
channel: email
template_used: email-proof-led
angle: Merge/CI queue becomes the agent-callable orchestration layer
date_drafted: 2026-07-03
status: drafted
contact: Julien Danjou (CEO / Co-founder), julien@mergify.com
hook_source: dev-tooling winners make the merge workflow agent-callable, not add an AI reviewer
founder_perspective:
  product_strategy: PR automation for GitHub: merge queue, conditional rules, CI optimization
  ai_posture: Category heavily AI (Copilot, Graphite, Aviator); Mergify's own AI depth unclear
  concerns: Julien's 'Code Review Bottleneck Is You' (Sep 2025); reviewer throughput
  industry_ai_view: As agents write more code, value moves to trustworthy merge/CI orchestration agents can call
mirror_choice: industry_ai_view via category insight: winners make the merge workflow agent-callable. Distinct from the sent connect, which mirrored his blog + deterministic-vs-Copilot
prior_touch: linkedin-connect SENT 2026-06-05 (mirrored 'Code Review Bottleneck' blog + deterministic vs Graphite/Copilot)
hook_distinct_from_prior: yes
---

Subject: what changed when dev-tooling got the sequence right

Julien,

The dev-tooling teams pulling ahead right now aren't the ones adding another AI reviewer. They're the ones making the merge workflow itself something an agent can call, so a coding agent can open, gate, and land a PR without a human babysitting the queue.

Mergify already owns that queue and the conditional rules underneath it. As Copilot and Graphite push more of the writing to agents, the merge and CI orchestration layer is the piece those agents still need a trustworthy home for.

If useful, I can share the directional read on where I'd start making that surface agent-callable for Mergify, no commitment. Open to a short call or just trading notes here.

Ryan Irwin
Founder, Future Ready Studio
