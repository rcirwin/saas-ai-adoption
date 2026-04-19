# frs-content-planner — Test Runbook

Five test cases. Run in order. For each, record pass/fail against the listed criteria.

---

## Test 1: Empty state (no prior posts, empty backlog)

**Setup**: Empty `posts` tab. Empty `post_ideas` tab.

**Command**: `/frs-plan-week`

**Pass criteria**:
- [ ] Plan file written to `agents/plans/<YYYY>-W<WW>.md` for the upcoming week (next Monday)
- [ ] 3 posts planned (default count)
- [ ] Posts span different pillars (no pillar repeats twice in a row)
- [ ] 3 rows appended to `post_ideas` tab with `status: scheduled`
- [ ] 3 Linear issues created in team `RyanIrwin`, project `Future Ready Studio`, with `content` label
- [ ] Each Linear issue has the target date as its due date
- [ ] Each `post_ideas` row has its `linear_issue` column populated with the correct key
- [ ] Summary references the cadence guidance fallback (since no engagement data was available)

---

## Test 2: Engagement-weighted planning

**Setup**: Seed `posts` tab with:
- 3 posts in `contrarian-takes` over last 28 days — each with `calls_booked: 1`
- 3 posts in `behind-the-process` over last 28 days — each with `impressions: 5000`, `calls_booked: 0`
- 2 posts in `ai-agent-thesis` over last 28 days — each with `dms_received: 2`

**Command**: `/frs-plan-week 2026-04-20 5`

**Pass criteria**:
- [ ] 5 posts planned
- [ ] `contrarian-takes` gets more slots than `behind-the-process` (because it drove calls)
- [ ] `ai-agent-thesis` gets at least one slot (DMs count)
- [ ] `behind-the-process` gets at most 1 slot (vanity metrics don't win)
- [ ] Summary line explicitly states the weighting used (e.g. "weighted by calls_booked > dms > reactions")

---

## Test 3: Backlog promotion

**Setup**: Seed `post_ideas` tab with 2 rows: `status: backlog`, pillars `workflow-first` and `pm-lessons`, created within the last 14 days.

**Command**: `/frs-plan-week`

**Pass criteria**:
- [ ] At least one of the backlog items is promoted (`status` updated from `backlog` to `scheduled`)
- [ ] Summary includes `Backlog items promoted: <count>`
- [ ] Promoted items get Linear issues created for them (not duplicated)
- [ ] `linear_issue` column populated on promoted rows

---

## Test 4: Cadence discipline

**Setup**: Seed `posts` tab with a post published 2 days ago in `founders-dilemma`.

**Command**: `/frs-plan-week`

**Pass criteria**:
- [ ] The week's plan does not open with `founders-dilemma` (breaks back-to-back)
- [ ] No angle from `founders-dilemma` posted in the last 60 days is reused
- [ ] Default cadence from `pillars.md` is followed (Mon = thesis/contrarian, Wed = pm-lessons/dilemma, Fri = workflow/process) unless engagement weighting overrides

---

## Test 5: Linear MCP unavailable (graceful degradation)

**Setup**: Temporarily disable Linear MCP.

**Command**: `/frs-plan-week`

**Pass criteria**:
- [ ] Plan file still written
- [ ] `post_ideas` rows still appended (with `linear_issue` blank)
- [ ] Summary contains `LINEAR_SKIPPED: <reason>` so the human knows to create issues manually
- [ ] Agent does NOT crash or leave the Sheet in an inconsistent state

**Teardown**: Re-enable Linear MCP.

---

## Regression check list

After any of these, re-run the full runbook:
- Edits to `agents/pillars.md` (cadence or angles)
- Edits to `.claude/agents/frs-content-planner.md`
- Schema changes to `posts` or `post_ideas` Sheet tabs
- Linear project/team/label configuration changes
