# Prospect Research Run — 2026-05-15 (Batch S–U, wave 2 of 9)

23 prospects in alphabetical range spendflo → ui-bakery. Wave-2 parallel run alongside 3 other researcher agents on different ranges. Pacing: 1 op / 3s with 5-write batches.

## Counts

- Researched: 23
- Fit ≥3 (status=researched): 8
- Fit 1–2 (status=not-a-fit): 15
- Cache hits: 0 (first-time research for all 23)
- Errors / aborted: 0

## Fit score distribution

| Score | Count | IDs |
|---|---|---|
| 5 | 0 | — |
| 4 | 4 | statuscake, sunsama, sweetprocess, taxrobot, transistor-fm |
| 3 | 3 | staffany, swayable, tableplus, trustmary |
| 2 | 7 | sperse, springbot, tapfiliate, tiphaus, todesktop, trunkinventory |
| 1 | 8 | spendflo, splitbee, taskade, testsigma, thematic, treblle, tydo, ui-bakery |

(transistor-fm/statuscake/sunsama/sweetprocess/taxrobot = 5 fit-4. Adjusting: 4 fit-4 — taxrobot counted, total 5. Recount below.)

Recount:

- 4: statuscake, sunsama, sweetprocess, taxrobot, transistor-fm → **5**
- 3: staffany, swayable, tableplus, trustmary → **4**
- 2: sperse, springbot, tapfiliate, tiphaus, todesktop, trunkinventory → **6**
- 1: spendflo, splitbee, taskade, testsigma, thematic, treblle, tydo, ui-bakery → **8**

Total: 23. Avg fit: (5*4 + 4*3 + 6*2 + 8*1) / 23 = (20+12+12+8)/23 = 52/23 = **2.26**.

## Top fit-4 prospects (no fit-5 this batch)

| ID | Angle | Founder hook |
|---|---|---|
| transistor-fm | ai-vs-deliberate-podcasting-reshape | Justin Jackson speaking on "Video and AI: is podcasting cooked?" Mar 2026 + prototyped with Claude Code |
| sunsama | workflow-first-ai-vs-deliberate-planning | Ashutosh Priyadarshy YC W19, publicly writes on AI-vs-deliberate-work tradeoff |
| sweetprocess | workflow-first-from-document-to-execute | Owen McGab Enaohwo, podcasting-active CEO; AI in SOPs is bolt-on doc-gen only |
| statuscake | workflow-first-monitoring-alert-fatigue | James Barnes, bootstrapped since 2012, 120K customers, every peer has shipped AI |
| taxrobot | workflow-first-vertical-cpa-rd-credit | Uche Okoroha; 111% YoY to \$1.2M; CPA vertical AI gap |

## Flagged issues for sourcer / outreach writer

### Wrong/stale contact data
- **tapfiliate**: sheet contact_name "Christof Hellmis" is now CPO at McMakler GMBH — NOT at Tapfiliate. Actual founder per Latka 2018 is Thomas Van. Sourcer should backfill correct contact.
- **trunkinventory**: contact_name is just "James" (no surname); LinkedIn missing.
- **trustmary** (duplicate row): one row has no contact_name; the canonical row has Johannes Karjula.

### Duplicate rows in prospects tab
- **sunsama** has 2 rows (same created_at, same contact, different category strings: "Productivity / Task Management" vs "task-management-daily-planner"). Both updated.
- **trustmary** has 2 rows (different category strings: "customer-feedback" vs "testimonial-collection"; different ARR estimates 2000000 vs 620000; one has blank contact). Both updated.

### ARR discrepancies (sheet vs Latka)
- **statuscake**: sheet \$3.9M vs Latka Sep 2025 \$880K. Significant. Latka may be undercounting given 120K+ customers and 14 years bootstrapped — sheet number may be more accurate.
- **tapfiliate**: sheet "unknown" vs Latka 2018 \$960K (stale by ~7 years).

### Inconclusive / soft scoring
- **tableplus**: solo-founder bootstrapped with no public ARR; Crunchbase/Latka 404. Score 3 based on category + solo-founder capacity ceiling.
- **trunkinventory**: no Latka entry. Scored 2 on workflow-surface-thinness rather than ARR.

## Pattern confirmations / new patterns

1. **Agent-native disqualifier confirmed for 8 of 23** (35% of this batch) — Spendflo (Flo AI + Contract/Payables/Procurement Analyst agents + outcome-based pricing), Taskade (500K+ agents + MCP support), Testsigma (Atto AI Agents suite), Thematic (Theming + Scoring agents, YC, PhD-AI CEO), Treblle (Agentic AI PR-based agents), Tydo (.ai rebrand + Learns/Answers/Actions), UI Bakery (AI Development Agent + MCP connector), Splitbee (sunset). MCP-or-agents-in-the-marketing is the cleanest fit-1 signal yet.

2. **PE-portfolio + new majority CEO pattern reconfirmed** (Springbot — Marc Pickren took majority Apr 2025 + Identity Matrix AI acquisition Sep 2025 + Q1 2026 public offering plan = execution mode, not assessment mode). Memory: any PE-recapitalization + new CEO within 24 months = automatic fit 2.

3. **Founder-departed disqualifier (Tapfiliate / Christof Hellmis at McMakler now)** — same Apozy/Rick Deacon pattern. The sourcer-supplied contact field is the wrong founder. Memory note: always verify the LinkedIn role CURRENT line, not bio. Downgrade by 1 if founder is at a different company.

4. **Highest-tier personalization hook found yet (Transistor.fm / Justin Jackson)** — speaking at Podcast Show London March 2026 on "Video and AI: is podcasting cooked?" AND publicly prototyped with Claude Code. This is the exact FRS thesis framing, by name, from the founder. Open outreach with this verbatim. Same pattern level as Joel Friedlaender's "stance on AI" post for Cliniko.

5. **"Solo-founder bandwidth caps fit at 3"** — TablePlus (Henry/Huy Pham), even with 100K+ users at Microsoft/Facebook/AWS/Tesla customers, can't reasonably engage in a \$30K assessment without disruption. Same logic as Carrd. Add: solo-founder + bootstrapped + workflow-medium = ceiling of fit 3.

6. **"Comprehensive AI suite shipped in last 6 months" downgrade confirmed** (Swayable / James Slezak ARF board appointment Mar 2026 + AI for creative testing already deeply public + "AI Native" positioning). Strategic posture with the big bets made = downgrade from 4 to 3.

7. **"Above ICP cap" cluster** — spendflo (\$15.2M), testsigma (\$8.2M), tiphaus (\$5.6M), staffany ($5.1M just at), todesktop ($5M just at), tydo ($5M just at). Confirms ICP-cap discipline; the just-at-cap scores get downgraded by 1.

## Memory updates queued

See MEMORY.md run-log entry for 2026-05-15 batch S–U.

## Sheet writes

- 23 cache rows written (no fit_score column attempted, per schema correction from wave-1 memory note — clean run, no tracebacks)
- 25 prospect-row updates (23 unique IDs; sunsama and trustmary each updated 2 rows due to duplicate-row issue)
- 48 sheet writes total, paced at ~3s/op with no rate-limit retries

## Environment

- FRS_GOOGLE_CREDENTIALS and FRS_PROSPECTS_SHEET_ID exported explicitly in every Bash session (per memory).
- Cffi pre-flight not needed this run.
- 3 other researchers running in parallel — no 429s encountered with current 3s pacing.
