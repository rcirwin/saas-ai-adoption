# Email Template Performance & A/B Policy

Derived snapshot. **Source of truth is the `outreach_log` Sheet tab.** The outreach writer overwrites this file at the end of every run (step 5 of `.claude/agents/frs-outreach-writer.md`). Do not hand-edit the ranking table; it is regenerated each run.

Last updated: 2026-07-21 (frs-outreach-writer run).

- Policy mode: **EXPLORATION** (email A/B)
- Reason: a scored send = a row with `status = sent` AND non-blank `response_status`. Today there are **0 scored sends** across all 532 sent rows (every `response_status` is blank). Every active email variant is below `MIN_SCORED_PER_VARIANT = 20`, so exploration continues and email variants are assigned by even deterministic split `idx = sum(ord(c) for c in prospect_id) % 3`.

## Standing blocker

Template ranking and the EXPLORATION -> EXPLOITATION transition are blocked until a human dispositions sent rows (fills `response_status` / `led_to_call`). 0 of 532 sent rows are dispositioned. Until then no `reply_rate` or `call_rate` can be computed, so email selection stays exploration and LinkedIn selection stays default-template.

## Active email variants (A/B set)

| Variant (`template_used`) | Scored sends | Sent rows | Total log rows |
|---|---|---|---|
| hyper-personalized-email (control) | 0 | 187 | 284 |
| email-short-question | 0 | 0 | 86 |
| email-proof-led | 0 | 0 | 87 |

All three are below the 20 scored-send threshold. No variant can be ranked yet. This run added 6 email drafts (2 short-question, 1 hyper, 2 proof-led... see run summary), all `status: drafted`, none scored.

## Ranking table

Empty by design. `reply_rate` and `call_rate` are undefined while scored sends = 0. Once a human begins dispositioning sent rows, this table will populate grouped by (`template_used`, `category`, `ai_posture`).

## LinkedIn channels

No scored data, so LinkedIn connect selection uses the default template from `outreach.md`, applied observation-first per the 2026-06-23 human correction (see inconsistency note below).

## Reported inconsistency (re-flagged)

`agents/templates/outreach.md` still hard-rules the LinkedIn connect template to "always name Future Ready Studio" and "always include the AI-readiness assessments clause." This contradicts the 2026-06-23 human correction captured in agent memory (observation-first connect, mirror first, no FRS naming), which every run since 2026-06-24 has followed. Flagged for template reconciliation.
