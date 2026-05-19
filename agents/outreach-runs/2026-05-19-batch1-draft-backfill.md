# Outreach Run — 2026-05-19 (batch 1, draft-column backfill)

Batch 1 of several. Drafting for researched prospects missing `outreach_linkedin_draft` / `outreach_email_draft` Sheet columns.

NOTE: a separate parallel 2026-05-19 run (`agents/outreach-runs/2026-05-19.md`) drafted 15 first-touch connect-only prospects. That run also touched `paperless-pipeline` and `sweft`. This batch's versions of those two connect drafts (richer founder_perspective frontmatter) are the ones written to the Sheet and outreach_log. The two runs are otherwise disjoint.

## Counts

- Prospects drafted this run: 20
- Drafts written: 38 (linkedin-connect: 20, email: 18)
- Researched prospects missing a draft column before this run: 177
- Remaining after this run: 157

## Channels

- linkedin-connect: 20 (all prospects)
- email: 18 (paperless-pipeline and sweft have no `contact_email` on file, so no email draft)

## Template-used distribution (connect)

- ai-posture-none-gap: 7 (orderease, aero-workflow, returnlogic, setmore, charliehr, memberspace, implementhit, sweft)
- ai-posture-bolt-on-gap: 5 (folderly, skylead, outvio, vero, detrack)
- ai-posture-exploring-roadmap: 3 (uku, paperless-pipeline, coreplus)
- agent-ready-roadmap: 4 (lagrowthmachine, zonka-feedback, orderlion, xakia)

## Drafts (prospect, hook, file)

- orderease — 14yr vertical focus + G2 High Performer Fall 2025 — 2026-05-19-orderease-linkedin-connect.md / 2026-05-15-orderease-email.md
- uku — Jason Staats best-of-2026 pick vs AI-shipped Karbon/Financial Cents — 2026-05-19-uku-linkedin-connect.md / 2026-05-15-uku-email.md
- aero-workflow — Karbon AI Triage launch + accountant-founder angle — 2026-05-19-aero-workflow-linkedin-connect.md / 2026-05-15-aero-workflow-email.md
- paperless-pipeline — published "Building AI for Transaction Management" post — 2026-05-19-paperless-pipeline-linkedin-connect.md (connect only)
- sweft — ISNO origin story from Anthropologie days — 2026-05-19-sweft-linkedin-connect.md (connect only)
- lagrowthmachine — self-financed to 25K teams vs Clay agent orchestration — 2026-05-19-lagrowthmachine-linkedin-connect.md / 2026-05-15-lagrowthmachine-email.md
- folderly — Belkins-to-Folderly arc + AI-native bundling pressure — 2026-05-19-folderly-linkedin-connect.md / 2026-05-15-folderly-email.md
- skylead — $1M ARR Serbia bootstrap + smart sequences — 2026-05-19-skylead-linkedin-connect.md / 2026-05-15-skylead-email.md
- zonka-feedback — AI Feedback Intelligence early access — 2026-05-19-zonka-feedback-linkedin-connect.md / 2026-05-15-zonka-feedback-email.md
- outvio — Pursuit of Scrappiness episode + 4-pillar AI choice — 2026-05-19-outvio-linkedin-connect.md / 2026-05-15-outvio-email.md
- orderlion — 500+ EU suppliers + procurement agents as buyer interface — 2026-05-19-orderlion-linkedin-connect.md / 2026-05-15-orderlion-email.md
- vero — "built for the modern data stack" positioning — 2026-05-19-vero-linkedin-connect.md / 2026-05-15-vero-email.md
- returnlogic — $2.3M to $2.8M with Mercury + Beachwaver/Outdoor Research — 2026-05-19-returnlogic-linkedin-connect.md / 2026-05-15-returnlogic-email.md
- setmore — bootstrapped since 2011, Cal.com + SimplyBook squeeze — 2026-05-19-setmore-linkedin-connect.md / 2026-05-15-setmore-email.md
- charliehr — ProductsThatCount conversation + HiBob AI pressure — 2026-05-19-charliehr-linkedin-connect.md / 2026-05-15-charliehr-email.md
- detrack — APAC CIO Outlook "Powering Last Mile with AI" interview — 2026-05-19-detrack-linkedin-connect.md / 2026-05-15-detrack-email.md
- memberspace — SaaS Club episode on bootstrapping from Squarespace forums — 2026-05-19-memberspace-linkedin-connect.md / 2026-05-15-memberspace-email.md
- xakia — Xakia AI contract-review pilot 2026 + post-pilot roadmap — 2026-05-19-xakia-linkedin-connect.md / 2026-05-15-xakia-email.md
- implementhit — behavior-change PaaS in 2000+ hospitals, AI-empty niche — 2026-05-19-implementhit-linkedin-connect.md / 2026-05-15-implementhit-email.md
- coreplus — Mark's published agentic-AI-in-patient-care thesis — 2026-05-19-coreplus-linkedin-connect.md / 2026-05-15-coreplus-email.md

## Notes / Open Items

- 15 of 20 connect drafts were re-drafted today as 2026-05-19 versions because the 2026-05-15 connect drafts contained em dashes (hard-rule violation). The `supersedes:` frontmatter line points to the superseded file. The 2026-05-15 email drafts were all clean and are reused as-is.
- 5 connect drafts are net-new (paperless-pipeline, sweft, xakia, implementhit, coreplus had no prior connect draft).
- The prior 2026-05-15 run never wrote these prospects to the Sheet (hit the credentials-missing fallback). This run wrote all 38 outreach_log rows and all 20 prospect-row updates successfully.

## CONTACT_BLOCKER (Ryan to source personal LinkedIn URL at send-time)

- paperless-pipeline (Dane Maxwell) — only a company LinkedIn URL on file
- aero-workflow (Laura Redmond) — contact_linkedin blank on Sheet
- skylead (Kristian Zivkovic) — contact_linkedin blank on Sheet
- zonka-feedback (Rajiv Mehta) — contact_linkedin blank on Sheet

## Email-not-possible (no contact_email on Sheet — sourcer to backfill)

- paperless-pipeline, sweft

## DATA_QUALITY_FLAG (Sheet contact_name disagrees with research_cache)

- setmore — Sheet says "Sudheer Bandaru", research_cache + Latka confirm CEO is "Bryce Morrow". Draft uses Bryce Morrow.
- memberspace — Sheet says "Eric Turner", research_cache confirms founder is "Ward Sandler". Draft uses Ward Sandler.

## Sheet anomalies

- setmore and memberspace prospect updates each reported "updated 2 row(s)" — duplicate rows in the prospects tab. Behavior is correct (both rows updated); flagged for a future dedupe maintenance pass.
