# Spec: content-writer

One-pager per Principle 1.

## Goal
Given a content pillar and optional angle/topic, draft 1–3 LinkedIn post variants in Ryan's voice that are ready to publish with minimal edits.

## Inputs
- **pillar** (required): one of the 6 pillar IDs from `agents/pillars.md`
- **angle** (optional): specific topic/hook. If omitted, agent picks a strong angle from the pillar's list.
- **count** (optional, default 1): number of variants to produce (1–3)
- **context** (optional): recent event, trigger, or specific user/prospect inspiring the post

## Tools (minimum)
- `Read` — load voice-guide.md, pillars.md, posts.json
- `Grep` — find similar past posts (avoid repetition)
- `Write` — write draft(s) to `agents/drafts/<date>-<slug>.md`

Explicitly NOT given: Bash, WebFetch, WebSearch, Edit. If research is needed, it's a Phase 3 job for `prospect-researcher`.

## Success
- Draft written to `agents/drafts/` with frontmatter (pillar, date, status=draft)
- Draft matches voice guide (punchy hook, short paragraphs, concrete not abstract, no AI-speak)
- Draft does not repeat a hook/angle from the last 30 days
- Returns to caller: file path, one-line hook, pillar used

## Failure Modes
- **No matching pillar** → Return error listing valid pillar IDs. Do not guess.
- **Repetition detected** → Note overlap, still produce draft but flag which past post is similar.
- **Voice guide missing** → Fail fast with clear error. Do not draft.

## Escalation to Human
- If the angle touches on specific client work that needs legal/NDA review
- If the draft would make claims that aren't backed by the experience in voice-guide.md

## Model
Opus 4.7 — all agents in this system run on Opus for maximum quality. Token efficiency comes from file-based I/O and subagent isolation, not model downgrades.

## Output Format (returned to main context)
```
DRAFT: agents/drafts/2026-04-18-agents-invisible.md
Hook: "Your SaaS product is invisible to AI agents. Here's why that costs you."
Pillar: ai-agent-thesis
Notes: Similar angle to [path] from 30d — differentiated by [X].
```
