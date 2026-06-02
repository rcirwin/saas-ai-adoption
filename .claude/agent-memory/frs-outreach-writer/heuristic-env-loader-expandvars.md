---
name: heuristic-env-loader-expandvars
description: When loading ~/.config/frs/env from Python (not bash source), expand $HOME/$VAR in values or sheet.py auth fails
metadata:
  type: feedback
---

When a single Python subprocess script drives sheet.py writes, it must load credentials from `~/.config/frs/env`. If you parse that file with a naive `k,v = line.split("=",1)` you keep the literal string `$HOME` in the value, and sheet.py then fails every call with `ERROR: FRS_GOOGLE_CREDENTIALS not set or file missing: $HOME/.config/frs/...`.

The env file contains: `FRS_GOOGLE_CREDENTIALS="$HOME/.config/frs/frs-agentic-system-...json"`.

**Why:** bash `source ~/.config/frs/env` expands `$HOME` automatically; a Python split does not. The Read-time prospect/research reads in earlier steps use bash `source` and work fine, which masks the problem until the Python write script runs.

**How to apply:** TWO operations in this order on each value: (1) strip surrounding quotes `v.strip().strip('"').strip("'")`, THEN (2) `os.path.expandvars(v)`, then `os.environ[k]=v`. The order matters and BOTH are required: the env value is literally `"$HOME/.config/frs/...json"` with surrounding double-quotes AND a literal $HOME. If you expandvars without stripping quotes, the resolved path keeps the quotes (`"/Users/.../...json"`) and sheet.py reports file-missing; if you strip quotes without expandvars, the literal `$HOME` survives and it reports not-set. Either omission fails identically-looking auth errors.

Observed 2026-06-02 batch07: first write pass failed 25/25 (missing expandvars), wrote ZERO rows, fixed by adding expandvars. Re-confirmed 2026-06-02 batch14: first write pass failed 16/16 because expandvars was applied but surrounding quotes were NOT stripped (resolved path kept the literal quotes); wrote ZERO rows (clean failure, no garbage), fixed by adding the quote-strip before expandvars. This is the recommended pattern per [[heuristic-python-subprocess-sheet-writes]] (drive writes from one Python subprocess with absolute interpreter path) but that pattern requires this env quote-strip + expansion fix to actually authenticate.
