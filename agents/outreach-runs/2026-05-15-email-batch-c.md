# Outreach Run, 2026-05-15 (email batch C, 23 prospects)

## Summary

- **Channel**: email only (locked by user prompt)
- **Drafts written**: 23 / 23 (100%)
- **Skipped**: 0
- **Cohort**: fit-3+ prospects from cross-batch reassignment, parallel-agent batch C
- **Workflow**: hyper-personalization, founder_perspective synthesis applied per updated agent definition

## Channel + Template Distribution

| channel | count | template |
|---|---|---|
| email | 23 | cold-email-v3-hyper (custom per prospect) |

All drafts used the hyper-personalization workflow:
- 4-dimension founder_perspective synthesis in frontmatter (product strategy, AI posture, concerns, industry-AI view)
- Subject line specific to the prospect (no generic "AI strategy" subjects)
- Body mirrors the founder's own framing back at them
- 100-200 word target (per agent definition's <200 word email cap)
- Pre-write self-check passed: no em/en dashes, no hyphen-with-spaces, no banned words

## Drafts

### Cohort A: dossier-informed (11 prospects)

These prospects have a 2026-05-14 dossier at `agents/dossiers/2026-05-14-<id>.md`. Founder_perspective synthesized from dossier + research_cache.

| prospect | fit | posture | hook | path |
|---|---|---|---|---|
| emailoctopus | 5 | none | "Jake your Head of AI" hire + Feb 2026 AI-as-companion blog | `agents/outreach-drafts/2026-05-15-emailoctopus-email.md` |
| financial-cents | 5 | exploring | Inc 5000 2025 + "automation that actually saves time" Apr post + CTO buyer | `agents/outreach-drafts/2026-05-15-financial-cents-email.md` |
| referral-rock | 5 | exploring | Practical Founders ep 174 + "AI as level-up not replacement" | `agents/outreach-drafts/2026-05-15-referral-rock-email.md` |
| savio | 5 | none | revenue-weighted prioritization is the human-judgment layer AI tools miss | `agents/outreach-drafts/2026-05-15-savio-email.md` |
| userlist | 5 | none | "How AI SaaS Companies Do Email Marketing" lens flip | `agents/outreach-drafts/2026-05-15-userlist-email.md` |
| zenmaid | 5 | none | "non-technical is a limiting belief in 2026" + "Max" AI co-founder | `agents/outreach-drafts/2026-05-15-zenmaid-email.md` |
| betterproposals | 4 | none | "AI With Common Sense" + 12,000-companies-screwing-up-deals quote | `agents/outreach-drafts/2026-05-15-betterproposals-email.md` |
| castos | 4 | bolt-on | Rogue Startups peer + YouTube republishing 2026 bet | `agents/outreach-drafts/2026-05-15-castos-email.md` |
| docupilot | 4 | bolt-on | Apr 21 eSignature unification + /ai-info page LLM-channel play | `agents/outreach-drafts/2026-05-15-docupilot-email.md` |
| dubsado | 4 | none | Dubsado 3.0 node-based Flow builder + /llm-info page | `agents/outreach-drafts/2026-05-15-dubsado-email.md` |
| everhour | 4 | exploring | Everhour AI auto-logging shipped + 100% bootstrapped 15-person team | `agents/outreach-drafts/2026-05-15-everhour-email.md` |

### Cohort B: research_cache-only (12 prospects, no dossier)

Founder_perspective synthesized from research_cache + prospect.notes + business context. No web top-up needed — cache rows had ≥3 lines of pain_signals + personalization_hooks.

| prospect | fit | posture | hook | path |
|---|---|---|---|---|
| aero-workflow | 5 | none | Karbon AI Triage launch as competitive pressure + Laura's LinkedIn AI commentary | `agents/outreach-drafts/2026-05-15-aero-workflow-email.md` |
| orderease | 5 | none | 70% fewer touches + email order entry (AI-shaped feature without the AI badge) | `agents/outreach-drafts/2026-05-15-orderease-email.md` |
| uku | 5 | exploring | Uku's published vision statement on AI handling routine work | `agents/outreach-drafts/2026-05-15-uku-email.md` |
| bugfender | 4 | none | device-centric debugging depth vs. Datadog AI copilot | `agents/outreach-drafts/2026-05-15-bugfender-email.md` |
| bugherd | 4 | bolt-on | "The startup that refuses to die" + BugHerd AI in beta | `agents/outreach-drafts/2026-05-15-bugherd-email.md` |
| buzzstream | 4 | bolt-on | ListIQ + 628-email AI summary blog + AI Overviews category shift | `agents/outreach-drafts/2026-05-15-buzzstream-email.md` |
| charliehr | 4 | none | HiBob AI poaching + 4-co-founder UK SMB HRIS | `agents/outreach-drafts/2026-05-15-charliehr-email.md` |
| clinicsense | 4 | none | No-Show Guard + AI scribe category-shift (Heidi/Freed) | `agents/outreach-drafts/2026-05-15-clinicsense-email.md` |
| cliniko | 4 | exploring | Joel's published "our current stance on AI" blog | `agents/outreach-drafts/2026-05-15-cliniko-email.md` |
| coreplus | 4 | exploring | Mark's "exploring agentic AI in patient-centred care" content | `agents/outreach-drafts/2026-05-15-coreplus-email.md` |
| dashclicks | 4 | bolt-on | GoHighLevel AI-native pressure + DashClicks fulfillment moat | `agents/outreach-drafts/2026-05-15-dashclicks-email.md` |
| detrack | 4 | bolt-on | George AI module + APAC CIO "Powering Last Mile with AI" interview | `agents/outreach-drafts/2026-05-15-detrack-email.md` |

## Self-Check Results

All 23 drafts passed the pre-write self-check:
- Em dash (`—`): not present
- En dash (`–`): not present
- Hyphen-with-spaces (` - `): not present
- Banned words (`leverage`, `synergy`, `game-changer`, `unlock`, `supercharge`, `revolutionize`, `cutting-edge`, `next-gen`, `delve`, `nuanced`): not present
- Word count: each body 100-200 words excluding signature

Five drafts required a second pass to remove "leverage" used as noun (`referral-rock`, `userlist`, `zenmaid`, `coreplus`, `everhour`). Voice-guide bans it as a verb but the agent definition's self-check is stricter. Replaced with `winning move`, `internal-ops compounding`, `compounding question`, `highest-impact one`, `operator-side layer`.

## Sheet Writes

All 23 outreach_log appends and 23 prospects updates succeeded. Paced at 2s between writes (4s per prospect) to stay under the 60/min API limit with 4 parallel agents running.

Note: bugherd's prospects update returned "updated 2 rows" because there are two duplicate `bugherd` rows in the prospects tab. Both got the same email subject + body. Data-quality issue surfaced for the sourcer/researcher, not blocking.

## Notes / Open Items

- **Parallel-agent coordination**: 4 other agents drafting on separate batches today. No filename collisions observed (checked `2026-05-15-*-email.md` before each write).
- **research_cache freshness**: 12 prospects without a 2026-05-14 dossier relied on research_cache. All cache rows were rich enough (>3 lines of pain_signals + personalization_hooks) that no web top-up was triggered. Token discipline held within budget.
- **Subject-line specificity**: all 23 subjects name a specific competitor, founder quote, or product feature. No generic "AI strategy" or "AI agents" subject lines.
- **Hook distinctness**: each draft's hook is unique within this run. Cross-checked against prior LinkedIn drafts for the same prospect (where present) to ensure email hook differs from connect-note hook.
- **Dossier-informed cohort had richer founder_perspective synthesis**: where dossiers existed, the AI posture and concerns lines quote founder statements verbatim. For cohort B (no dossier), posture is inferred from product behavior, which is slightly weaker but still concrete.

## Follow-up Window

Next follow-up due: 2026-05-22 (today + 7 day cadence_days)

## Memory Updates

- Hyper-personalization workflow (4-dimension founder_perspective in frontmatter) ran cleanly across 23 prospects in one session
- "leverage" as a noun must also be avoided per the agent definition's stricter self-check (voice-guide says "as verb" but the substring check in step 6e doesn't distinguish)
- Paced sheet writes (4s/prospect) worked with 4 parallel agents — no rate-limit errors
- Dossier presence is the main predictor of founder_perspective synthesis quality. 11/23 had dossiers, 12/23 didn't. The 12 still produced fit-for-purpose drafts, but the dossier-informed ones are more direct in mirroring founder language back.
