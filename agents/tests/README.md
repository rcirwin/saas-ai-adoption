# FRS Agent Test Runbooks

Manual test suites for each FRS agent. These are runbooks, not automated tests — you execute the commands, inspect the outputs, and verify pass criteria by hand.

Rationale: Claude Code agents are non-deterministic. Traditional assertion-based tests are brittle for voice/quality/strategy outputs. A runbook gives you a consistent surface to catch regressions in behavior (tool usage, error handling, output shape) even when the exact text varies.

## How to run

1. Pick the agent you want to test
2. Open its runbook (e.g. `content-writer.md`)
3. Run each test case in order
4. For each case, record pass/fail against the listed criteria
5. If any fail, edit the agent definition (`.claude/agents/frs-<name>.md`) and re-run

## Cadence

- **Before pushing changes** to an agent or its context files → run the full runbook for that agent
- **Monthly** → run all runbooks as a regression check
- **After voice/pillar edits** → at minimum re-run content-writer test 1 (voice calibration)

## What pass means

Each test has explicit pass criteria. If any criterion fails, the test fails. Note that "voice sounds like Ryan" is subjective — for voice tests, the human is the oracle.
