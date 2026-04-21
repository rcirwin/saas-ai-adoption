# frs-prospect-sourcer — Test Runbook

Five test cases. Run in order.

---

## Test 1: Basic source run (AppSumo)

**Command**: `/frs-source-leads appsumo 5`

**Pass criteria**:
- [ ] Exactly 5 new rows appended to `prospects` tab (or fewer if fewer qualified leads)
- [ ] All new rows have `status: identified`, `source: appsumo`, `created_at` = today
- [ ] All new rows have unique `id` values (no duplicates within run)
- [ ] 5 Linear issues created in team `RyanIrwin` with label `prospect-research`
- [ ] Summary file at `agents/sourcing-runs/<today>-appsumo.md`
- [ ] Returned summary ≤ 20 lines

---

## Test 2: Dedup against existing prospects

**Setup**: Seed `prospects` tab with a row for a company that's actively launching on Product Hunt right now (e.g., `id: beehiiv`, category: marketing).

**Command**: `/frs-source-leads producthunt 10`

**Pass criteria**:
- [ ] The seeded company is NOT re-added
- [ ] Returned summary shows `skipped` count includes dedup rejections

---

## Test 3: Disqualification rules

**Command**: `/frs-source-leads directory 10`

**Pass criteria**:
- [ ] No companies added with employee_count > 100
- [ ] No B2C or service businesses added
- [ ] No companies with clearly >$50M ARR (check against known public SaaS like Atlassian, Salesforce — none should appear)
- [ ] At least one skip is noted with reason `>employee_cap` or `not-ICP`

---

## Test 4: CSV-based source

**Setup**: Create a CSV at `/tmp/linkedin-export.csv` with 5 rows in LinkedIn Sales Nav export format.

**Command**: `/frs-source-leads linkedin-csv 5 /tmp/linkedin-export.csv`

**Pass criteria**:
- [ ] All 5 CSV rows processed
- [ ] Qualified rows added to `prospects` tab with `source: linkedin`
- [ ] Missing required CSV columns → agent errors cleanly, does not partially write

---

## Test 5: Sheet MCP unavailable

**Setup**: Unset `FRS_PROSPECTS_SHEET_ID`.

**Command**: `/frs-source-leads appsumo 5`

**Pass criteria**:
- [ ] Agent HARD-FAILS with explicit error (sourcer must not proceed without dedup access)
- [ ] No prospects written, no Linear issues created
- [ ] Error message references the missing env var

**Teardown**: Restore env var.

---

## Regression check list

- Edits to `agents/context/sourcing.md`
- Edits to `.claude/agents/frs-prospect-sourcer.md`
- Schema changes to `prospects` tab
- Changes to Linear project/team/label config
