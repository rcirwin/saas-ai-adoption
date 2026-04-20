# frs-content-writer — Test Runbook

Six test cases. Run in order. For each, record pass/fail against the listed criteria.

---

## Test 1: Valid pillar, no angle, default count

**Command**: `/frs-draft-post ai-agent-thesis`

**Pass criteria**:
- [ ] Exactly 1 draft file written to `agents/drafts/<today>-<slug>.md`
- [ ] File has frontmatter with `pillar: ai-agent-thesis`, `date_drafted`, `status: draft`, `length_tier`
- [ ] Summary returned is under 10 lines
- [ ] Summary contains the draft path and the hook (first line)
- [ ] Full draft text is NOT echoed into chat
- [ ] Hook passes one of the 4 tests from voice-guide.md (contrarian claim / specific observation / uncomfortable question / concrete stake)
- [ ] No banned words from voice-guide.md appear in the draft

---

## Test 2: Valid pillar with angle + count=3

**Command**: `/frs-draft-post contrarian-takes "AI roadmap decks are a wishlist not a strategy" 3`

**Pass criteria**:
- [ ] 3 draft files written, all dated today, all with unique slugs
- [ ] All 3 drafts use pillar `contrarian-takes` in frontmatter
- [ ] All 3 drafts have distinct hooks (no near-duplicate first lines)
- [ ] Angle is discernible in each draft (all 3 attack "AI roadmap as wishlist")
- [ ] Summary lists all 3 paths + 3 hooks

---

## Test 3: Invalid pillar

**Command**: `/frs-draft-post fake-pillar`

**Pass criteria**:
- [ ] Agent errors cleanly (does NOT write a draft)
- [ ] Error message includes the list of valid pillar IDs (pulled from `agents/pillars.md`, not hardcoded)
- [ ] Error message is under 5 lines

---

## Test 4: Dedup against recent posts

**Setup**: Seed the `posts` tab with 2 rows under pillar `workflow-first` dated within the last 30 days with distinctive hooks.

**Command**: `/frs-draft-post workflow-first`

**Pass criteria**:
- [ ] Draft's hook is distinct from both seeded hooks (not a near-paraphrase)
- [ ] Summary includes a `Repetition check` line referencing the seeded rows
- [ ] Agent noted the seeded angles so the new draft uses a different angle from pillars.md

---

## Test 5: Sheet MCP unavailable (graceful degradation)

**Setup**: Temporarily unset `FRS_PROSPECTS_SHEET_ID` OR revoke Sheet access to the service account.

**Command**: `/frs-draft-post pm-lessons`

**Pass criteria**:
- [ ] Agent still produces a draft (does NOT hard-fail)
- [ ] Summary contains a warning that dedup was skipped due to Sheet unavailability
- [ ] Draft file is still written correctly

**Teardown**: Restore env var / access.

---

## Test 6: Voice calibration (human oracle)

**Command**: `/frs-draft-post founders-dilemma "the pressure of a generational platform shift"`

**Pass criteria** (human judgment):
- [ ] Does the draft sound like Ryan's writing? (Compare against voice samples in `agents/voice-guide.md`)
- [ ] No filler openers ("In today's world", "Have you ever wondered", etc.)
- [ ] Uses contractions naturally
- [ ] Shows reasoning / backs up opinions
- [ ] Ends with a specific closing question (not generic "what do you think?")
- [ ] No banned words (leverage, synergy, game-changer, unlock, supercharge, revolutionize, cutting-edge, next-gen, ecosystem-as-filler, delve, nuanced-as-filler)

If Test 6 fails, give the agent feedback (it will update its memory). Re-run the same test. If it fails twice in a row after feedback, the fix probably belongs in `voice-guide.md`, not memory.

---

## Regression check list

After any of these, re-run the full runbook:
- Edits to `agents/voice-guide.md`
- Edits to `agents/pillars.md`
- Edits to `.claude/agents/frs-content-writer.md`
- Schema changes to the `posts` Sheet tab
