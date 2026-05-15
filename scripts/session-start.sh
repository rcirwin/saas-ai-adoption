#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")

# Preserve local dev work: if interactively on a claude/* feature branch,
# skip the checkout-main-and-pull step so the user's in-progress work isn't
# yanked. Cloud scheduled sessions always boot on main (default branch), so
# they proceed through this block normally.
if [[ "$CURRENT_BRANCH" == claude/* ]]; then
  echo "[frs-session-start] On dev branch '$CURRENT_BRANCH' — skipping main pull."
else
  echo "[frs-session-start] Pulling latest from main..."

  git fetch origin main 2>/dev/null || {
    echo "[frs-session-start] WARNING: git fetch failed (network?). Proceeding with local state."
  }

  if git show-ref --verify --quiet refs/remotes/origin/main; then
    git checkout main 2>/dev/null || true
    git merge origin/main --ff-only 2>/dev/null || {
      echo "[frs-session-start] WARNING: fast-forward merge failed. Local main may have diverged."
    }
  fi
fi

# Load local desktop env file if present (FRS_GOOGLE_CREDENTIALS path +
# FRS_PROSPECTS_SHEET_ID). Cloud sessions skip this and use the B64 secret
# block below. Hook spawn doesn't inherit interactive-shell env, so .zshrc
# exports alone won't reach scripts/sheet.py — this file is the bridge.
if [ -f "$HOME/.config/frs/env" ]; then
  set -a
  # shellcheck disable=SC1091
  source "$HOME/.config/frs/env"
  set +a
fi

# Materialize service account credentials from base64 secret (cloud only).
# Set FRS_GOOGLE_CREDENTIALS_B64 as a Claude Code project secret:
#   base64 -w0 /path/to/service-account.json   # Linux
#   base64 -i /path/to/service-account.json | pbcopy   # macOS
if [ -n "${FRS_GOOGLE_CREDENTIALS_B64:-}" ]; then
  CREDS_PATH="/tmp/frs-service-account.json"
  echo "$FRS_GOOGLE_CREDENTIALS_B64" | base64 -d > "$CREDS_PATH"
  chmod 600 "$CREDS_PATH"
  export FRS_GOOGLE_CREDENTIALS="$CREDS_PATH"
  echo "[frs-session-start] Materialized service account credentials to $CREDS_PATH"
elif [ -z "${FRS_GOOGLE_CREDENTIALS:-}" ]; then
  echo "[frs-session-start] WARNING: Neither FRS_GOOGLE_CREDENTIALS_B64 nor FRS_GOOGLE_CREDENTIALS is set."
  echo "  scripts/sheet.py will not authenticate. See agents/SETUP.md."
fi

# Install Python deps for scripts/sheet.py (Google Sheets API client).
# Idempotent: pip is fast when packages are already installed.
if command -v pip3 >/dev/null 2>&1 && [ -f "$REPO_ROOT/scripts/requirements.txt" ]; then
  pip3 install --quiet --disable-pip-version-check -r "$REPO_ROOT/scripts/requirements.txt" 2>/dev/null || {
    echo "[frs-session-start] WARNING: pip install failed. scripts/sheet.py may not work."
  }
fi

echo "[frs-session-start] Ready."
