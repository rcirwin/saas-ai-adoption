# Outreach Run — 2026-05-15 (Email batch — 23 fit-3+ prospects)

## Summary
- **Channel:** email (only — LinkedIn channels handled by other agents)
- **Drafts written:** 23 / 23
- **Outreach_log rows appended:** 23 / 23
- **Prospects rows updated:** 23 / 23 (last_outreach_date, last_outreach_channel, follow_up_due, outreach_email_subject, outreach_email_draft, updated_at)
- **Follow-up window:** 2026-05-22

## Channel mix
- email: 23 (all)

## Template / angle distribution
All 23 use `cold-email-v2` (hyper-personalized founder_perspective synthesis).

| Angle archetype | Count | Examples |
|---|---|---|
| Post-shipped-AI roadmap (2nd / 3rd AI feature) | 5 | tenantcloud, xakia, carepatron, buzzsprout, simple-analytics |
| Greenfield / design-window | 3 | splynx (eSIM), boomcloud (Outreach), casepacer (CP Assist) |
| Category-reshape positioning | 6 | albato, billsby, vero, sunsama, statuscake, transistor-fm |
| Workflow / execution layer | 4 | sweetprocess, beeceptor, bytebase, zonka-feedback |
| Validation / early-access | 1 | zonka-feedback |
| User-requested AI prioritization | 2 | bonsai, taxrobot |
| Post-acquisition integration story | 1 | canix |
| Partnership / audience pivot (re-score down) | 1 | wp-umbrella |
| Sequence-intelligence vs personalization | 1 | skylead |

## Hyper-personalization notes

**With dossiers (4):**
- simple-analytics — dossier said sweet-spot SERVICES, lead with privacy + AI tension; email distinct from same-day DM v2 (DM v2 took internal AI ops angle; email takes customer-facing brand framing)
- splynx — dossier said excellent sweet-spot SERVICES; email distinct from same-day DM v2 (DM v2 named WhatsApp-AI narrow scope; email leans on eSIM as greenfield design moment)
- tenantcloud — dossier said strong sweet-spot SERVICES; email distinct from same-day DM v2 (DM v2 used May maintenance post; email frames post-Cloudia roadmap question)
- wp-umbrella — dossier flagged re-score DOWN (services), PIVOT to partnership; email continues partnership pivot a layer deeper (workshop / co-authored content / referral channel shape)

**Without dossiers (19):** founder_perspective synthesized from Sheet fit_notes + research_cache + public signals (LinkedIn posts, podcast appearances, marketing language, recent product launches, public quotes). All 19 captured in `founder_perspective:` frontmatter.

## Subject lines (all 23)
1. simple-analytics — "Privacy-first AI is its own playbook"
2. skylead — "Sequence intelligence vs another icebreaker"
3. splynx — "eSIM is the one product where AI design is free"
4. statuscake — "Alert noise + 120K customers"
5. sunsama — "Deliberate planning as the AI-era moat"
6. sweetprocess — "From documented SOPs to executed ones"
7. taxrobot — "taxrobot.ai vs shipped AI features"
8. tenantcloud — "After Cloudia, the second AI feature is the harder one"
9. transistor-fm — "'Is podcasting cooked' + the second-order questions"
10. vero — "Data-native is the precondition for real AI"
11. wp-umbrella — "Your agencies are answering the AI question their clients are asking"
12. xakia — "After contract review, the second AI feature"
13. zonka-feedback — "Early-access is the right time to validate"
14. albato — "'Did Albato disappear' + the iPaaS reshape"
15. beeceptor — "MCP for mocks + the Apidog move"
16. billsby — "Stripe Billing AI vs mid-market billing strategy"
17. bonsai — "User-requested AI + the vertical ERP thesis"
18. boomcloud — "BoomCloud Outreach + the AI design window"
19. buzzsprout — "After CoHost AI, the agent-readiness question"
20. bytebase — "Bytebase as the safety layer for AI coding agents"
21. canix — "Post-Trym, the AI question is integration-shaped"
22. carepatron — "AI Scribe is one feature. The platform is wider."
23. casepacer — "CP Assist is one design decision, not a roadmap"

## Voice / formatting checks
- Em-dash check: 0 / 23 drafts contain `—`
- En-dash check: 0 / 23 drafts contain `–`
- Word count band (150–200 in body): 23 / 23 (all between 153 and 194 words excluding subject + signature)
- Banned words audit: passed (no leverage / synergy / game-changer / unlock / supercharge / revolutionize / cutting-edge / next-gen / delve)

## Skipped
None. All 23 target IDs drafted.

## Operational notes
- First batch run hit Google Sheets API 429 quota (8 outreach_log appends + 9 prospect updates failed). Retry script with exponential backoff (3s, 6s, 12s, 24s, 48s) + 1s pacing recovered all 17 failed writes on first retry attempt. Worth noting in memory: with 5 agents writing the sheet in parallel, per-second quota is the bottleneck. Backoff + pacing fully solves it.
- The 4 dossier-prospects (simple-analytics, splynx, tenantcloud, wp-umbrella) already had same-day LinkedIn drafts. Email hooks cross-checked against the LinkedIn-DM-v2 hooks and confirmed distinct. `hook_distinct_from_v1: yes` flag in each frontmatter.
- The 19 non-dossier prospects had no prior same-day touch. Standard hyper-personalization workflow applied (founder_perspective synthesis from Sheet + research_cache).

## Files
- 23 draft files at `agents/outreach-drafts/2026-05-15-<id>-email.md`
- This summary at `agents/outreach-runs/2026-05-15-email-batch3-23prospects.md`
