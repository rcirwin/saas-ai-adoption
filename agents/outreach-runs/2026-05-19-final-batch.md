# Outreach Run 2026-05-19 (final drafting batch)

Final batch. Processed every `status=researched` prospect still missing `outreach_linkedin_draft` or `outreach_email_draft`/`outreach_email_subject`.

## Counts

- Drafts written: 14
  - linkedin-connect: 5
  - email: 9
- outreach_log appends: 14/14 OK
- prospects row updates: 14/14 OK (2s pacing, 5x exponential backoff, zero retries needed)
- Researched prospects (207 total) still missing a draft column after run: 0

## Template distribution

- linkedin-connect-broad: 5
- email-peer-reframe: 7 (fit-2 prospects with AI already shipped)
- email-cold-standard: 2 (fit-5 prospects, standard FRS framing)

## LinkedIn connect drafts (was missing outreach_linkedin_draft; email columns already populated, untouched)

| id | fit | posture | hook |
|----|-----|---------|------|
| socialbee | 3 | strategic | Copilot is comprehensive, so the open question is agent-readiness not more features |
| simplybook-me | 3 | bolt-on | AI Voice Booking shipped; can external scheduling agents invoke it |
| pixpa | 3 | bolt-on | Squarespace AI matches no-code; moat is the photographer workflow |
| smartsupp | 3 | bolt-on | Mira shipped; orchestratable agent vs destination chatbot |
| fullsession | 3 | strategic | Lift AI shipped; agent-consumability of replay data is the gap |

## Email drafts (was missing outreach_email_subject/outreach_email_draft; LinkedIn column already populated, untouched)

| id | fit | posture | angle |
|----|-----|---------|-------|
| jobtread | 2 | bolt-on | AI Connector shipped; peer note on what contractors actually delegate |
| outseta | 2 | none(MCP shipped) | Agent Toolkit MCP shipped; peer note on agent-native all-in-one stacks |
| noloco | 2 | bolt-on | Nola AI + n8n shipped; peer note on the prompt-to-app squeeze |
| refiner | 2 | bolt-on | MCP server shipped; peer note on what data feeds the agent |
| formaloo | 2 | bolt-on | 4.0 AI-era rebuild; peer note on retention vs feature list |
| rella | 2 | bolt-on | ELLA for agency teams; workflow-AI vs brand-voice parity |
| alosant | 2 | bolt-on | DataBridgeAI post-Series A; workflow AI across fragmented stakeholders |
| paperless-pipeline | 5 | exploring | Published exploring-AI post; FRS lands at the which-feature-first decision |
| sweft | 5 | none | ISNO is a sequencing failure; workflow audit maps where AI fits |

## Notes

- The 7 fit-2 prospects have already shipped AI (some shipped MCP servers). Per memory heuristic, emails use a peer / comparing-notes reframe, not a services pitch. Email hooks cross-checked against the existing LinkedIn drafts to stay distinct (`hook_distinct_from_v1: yes` on all 7).
- The 2 fit-5 prospects (paperless-pipeline, sweft) get the standard FRS cold-email framing with the discovery-call CTA.
- CONTACT_BLOCKER: fullsession has no LinkedIn URL on file (connect draft written for the prospect row anyway; Ryan sources URL at send-time). paperless-pipeline and sweft have no contact_email; email subject + body written to the prospect row per instructions.
- All 14 bodies passed the em/en dash, hyphen-with-spaces, and banned-word self-check. LinkedIn drafts all under 300 chars (fullsession and pixpa needed one tightening pass). Email bodies all under 200 words.

## Skipped

None. Every eligible prospect was drafted.
