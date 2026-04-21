# frs-outreach-writer — Test Runbook

Six test cases. Run in order.

---

## Test 1: Single prospect draft

**Setup**: 
- `prospects` row: `id: outreach-test-co`, `status: researched`, `fit_score: 4`, `contact_email: founder@example.com`, `contact_linkedin: https://...`
- `research_cache` row with `personalization_hooks: "launched v2 last week; blog post on retention"` and `recommended_angle: workflow-first`

**Command**: `/frs-draft-outreach outreach-test-co`

**Pass criteria**:
- [ ] 1 draft file written to `agents/outreach-drafts/<today>-outreach-test-co-<channel>.md`
- [ ] Draft has frontmatter with `prospect_id`, `channel`, `template_used`, `angle`, `hook_source`
- [ ] Hook (first line) references ONE of the `personalization_hooks` specifically
- [ ] No banned words from `voice-guide.md`
- [ ] `outreach_log` tab has new row with `status: drafted`
- [ ] `prospects` row updated: `last_outreach_date = today`, `follow_up_due = today + 7`, status UNCHANGED (still `researched`)

---

## Test 2: Channel auto-selection

**Setup**: Two prospects:
- `id: has-email-co`, `contact_email: <set>`, `contact_linkedin: <set>`, `fit_score: 4`
- `id: no-email-co`, `contact_email: <blank>`, `contact_linkedin: <set>`, `fit_score: 4`

**Command**: `/frs-draft-outreach all-researched`

**Pass criteria**:
- [ ] `has-email-co` drafted as channel `email`
- [ ] `no-email-co` drafted as channel `linkedin-dm` (fit_score ≥ 4)
- [ ] Channel choice reflected in both the draft file and `outreach_log` row

---

## Test 3: Low fit score → linkedin-connect

**Setup**: Prospect `id: low-fit-co`, `fit_score: 3`, `contact_email: blank`, `contact_linkedin: <set>`.

**Command**: `/frs-draft-outreach low-fit-co`

**Pass criteria**:
- [ ] Channel chosen is `linkedin-connect` (low-touch, fit < 4)
- [ ] Draft is under 300 characters (LinkedIn connect limit)
- [ ] Ask is for connection, not a meeting

---

## Test 4: No personalization hooks available

**Setup**: Prospect `id: no-hooks-co`, `status: researched`, but `research_cache` row has empty `personalization_hooks`.

**Command**: `/frs-draft-outreach no-hooks-co`

**Pass criteria**:
- [ ] Agent does NOT draft
- [ ] Summary includes `no-hooks-co` in skipped list with reason `no-personalization-hooks`
- [ ] Flagged for re-research in the summary
- [ ] Agent never fabricates a generic hook

---

## Test 5: Template performance analysis

**Setup**: `outreach_log` tab has 20+ rows over the last 90 days with mixed `template_used`, `angle`, `category`, `response_status`, `led_to_call`.

**Command**: `/frs-draft-outreach all-researched 5`

**Pass criteria**:
- [ ] Returned summary shows "Top templates used" reflecting historical performance
- [ ] Chosen templates for each prospect align with best-performing template for their (category, ai_posture)
- [ ] If a category has no history, default template from `outreach.md` is used

---

## Test 6: Follow-up cadence

**Setup**: Prospect `id: recent-outreach-co`, `status: researched`, `last_outreach_date: today - 3` (within 7-day cadence).

**Command**: `/frs-draft-outreach all-researched`

**Pass criteria**:
- [ ] `recent-outreach-co` is SKIPPED (still within cadence)
- [ ] Summary notes it as skipped with reason `within-cadence`

---

## Regression check list

- Edits to `agents/templates/outreach.md`
- Edits to `agents/voice-guide.md` (voice applies to outreach too)
- Edits to `.claude/agents/frs-outreach-writer.md`
- Schema changes to `outreach_log` tab
- Changes to `config.outreach_daily_cap` or `config.follow_up_cadence_days`
