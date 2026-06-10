# Research Run — 2026-06-10 (DRY_RUN, queue-pollution blocked)

## Result: DRY_RUN — 0 prospects researched

`all-identified` returned **39 `status=identified` rows, 0 of them researchable.**
Every single identified row is a sourcer-flagged `DELETED`-prefixed / `DELETED-DUP` duplicate
row (notes say ignore/skip/remove; `company_name` is null on all 39). The researcher correctly
excluded all of them and performed no research.

## Counts
- Researched: 0
- Not-a-fit: 0
- Cache-hits: 0
- Errors: 0
- Identified rows seen: 39 (all DELETED-prefixed, all excluded)
- Researchable (non-DELETED) rows: 0

## Fit score distribution
- (none — no prospects researched)

## Top 5 prospects by fit score
- (none)

## Flagged issues / PIPELINE ALERT

### THIRD consecutive run blocked by the SAME 39-row pollution
- 2026-06-09, 2026-06-10 (run #1), and this run (2026-06-10 #2) all blocked by an identical
  39-row block of `DELETED`-prefixed duplicate rows. **Count unchanged across all three runs**
  -> the sourcer has not hard-deleted. This is now a standing pipeline alert, not a one-off.
- Outreach Writer (runs ~3h later) will starve again: no new `researched` rows produced for a
  third straight run.

### Repeat-offender id collisions (sourcer must hard-delete + resolve)
- `DELETED-DUP-DO-NOT-USE-referralcandy-2` appears ~7 times, each wrapping a DIFFERENT real
  company (marker.io / a Ukrainian bootstrapper / Lahore-founded social tool / Lebanese-American
  NY / Hyderabad Sreedhar / Vilnius Lithuanian / California-HQ Ukrainian). Single id, many distinct
  companies — a hard id-collision bug in the sourcer.
- `DELETED-DUP-DO-NOT-USE-linkinize` appears x2.
- Bare `DELETED-DUP-DO-NOT-USE` (wraps wp-fusion).

### Flagged rows wrap real, potentially in-ICP companies
Several DELETED rows reference real companies that MIGHT be worth sourcing as clean rows
(canny / paperform / referralcandy / rivo / cratejoy / repurpose.io / vendoo / pabbly / bookwhen /
booqable / reditus / affilimate / survicate / refiner). The researcher does NOT resurrect flagged
rows. If any are wanted, the sourcer must hard-delete the polluted rows and re-create them as
clean `status=identified` rows with populated `company_name`.

## Required sourcer action (escalate)
1. Hard-delete all 39 `DELETED`-prefixed rows from the `prospects` tab.
2. Resolve the `-referralcandy-2` and `-linkinize` id collisions (multiple companies under one id).
3. Re-create any genuinely wanted companies as clean `identified` rows.

## Environment
- Fresh container: `pip install --user cffi cryptography` pre-flight ran (pycparser already
  satisfied). Creds via `FRS_GOOGLE_CREDENTIALS_B64` base64 -> `/tmp/frs-service-account.json`,
  exported as `FRS_GOOGLE_CREDENTIALS`. `FRS_PROSPECTS_SHEET_ID` present. No sheet writes this run.
