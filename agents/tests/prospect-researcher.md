# frs-prospect-researcher — Test Runbook

Five test cases. Run in order.

---

## Test 1: Single prospect research

**Setup**: Seed `prospects` tab with 1 row: `id: test-analytics-co`, `company: Test Analytics Co`, `website: <real B2B SaaS URL>`, `status: identified`.

**Command**: `/frs-research test-analytics-co`

**Pass criteria**:
- [ ] `prospects` row updated: `ai_posture`, `fit_score` (1–5), `fit_notes`, `research_summary`, `status` (`researched` or `not-a-fit`), `updated_at`
- [ ] `research_cache` tab has new row with all fields: `product_summary`, `workflow_complexity`, `ai_features_observed`, `agent_readiness`, `competitive_landscape`, `pain_signals`, `personalization_hooks`, `fit_assessment`, `recommended_angle`, `sources_checked`
- [ ] Contact info columns (H–K) are UNCHANGED
- [ ] Summary file at `agents/research-runs/<today>-1-prospects.md`

---

## Test 2: Batch research all identified

**Setup**: Seed `prospects` tab with 8 rows, all `status: identified`.

**Command**: `/frs-research all-identified 5`

**Pass criteria**:
- [ ] Exactly 5 prospects researched (respects limit)
- [ ] Researched prospects sorted by `created_at` ascending (oldest first)
- [ ] Remaining 3 rows untouched
- [ ] Fit score distribution shown in returned summary

---

## Test 3: Cache hit (fresh research)

**Setup**: 
- Prospect `id: cache-test-co` with `status: identified`
- `research_cache` row for `cache-test-co` with `researched_at = today - 30` (within staleness window)

**Command**: `/frs-research cache-test-co`

**Pass criteria**:
- [ ] Agent does NOT fetch any external URLs (cache hit)
- [ ] `prospects` row updated from cache values
- [ ] `research_cache` row unchanged
- [ ] Returned summary increments `cache-hits` counter

---

## Test 4: Stale cache (re-research)

**Setup**:
- Prospect `id: stale-test-co` with `status: identified`
- `research_cache` row for `stale-test-co` with `researched_at = today - 120` (outside 90-day staleness)

**Command**: `/frs-research stale-test-co`

**Pass criteria**:
- [ ] Agent fetches fresh sources
- [ ] `research_cache` row updated with new `researched_at`
- [ ] `prospects` row updated with potentially new fit_score

---

## Test 5: Not-a-fit outcome

**Setup**: Seed a prospect clearly outside ICP (e.g., a B2C consumer app, or a public company site).

**Command**: `/frs-research <that-id>`

**Pass criteria**:
- [ ] `fit_score` is 1 or 2
- [ ] `prospects.status` set to `not-a-fit`
- [ ] `research_cache` row still written (prevents re-research)
- [ ] Agent does NOT fabricate pain_signals or personalization_hooks

---

## Regression check list

- Edits to `agents/context/research-protocol.md`
- Edits to `.claude/agents/frs-prospect-researcher.md`
- Schema changes to `prospects` or `research_cache` tabs
- Changes to `config.research_staleness_days`
