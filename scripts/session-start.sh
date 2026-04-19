#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"

echo "[frs-session-start] Pulling latest from main..."
cd "$REPO_ROOT"

git fetch origin main 2>/dev/null || {
  echo "[frs-session-start] WARNING: git fetch failed (network?). Proceeding with local state."
}

if git show-ref --verify --quiet refs/remotes/origin/main; then
  git checkout main 2>/dev/null || true
  git merge origin/main --ff-only 2>/dev/null || {
    echo "[frs-session-start] WARNING: fast-forward merge failed. Local main may have diverged."
  }
fi

# Materialize service account credentials from base64 secret (cloud only).
# In Claude Code on web, set the project secret FRS_GOOGLE_CREDENTIALS_B64
# to the base64-encoded contents of the service account JSON file:
#   base64 -i ~/.frs/service-account.json | pbcopy
#
# Locally this is a no-op — FRS_GOOGLE_CREDENTIALS already points to the file.
if [ -n "${FRS_GOOGLE_CREDENTIALS_B64:-}" ]; then
  CREDS_PATH="/tmp/frs-service-account.json"
  echo "$FRS_GOOGLE_CREDENTIALS_B64" | base64 -d > "$CREDS_PATH"
  chmod 600 "$CREDS_PATH"
  export FRS_GOOGLE_CREDENTIALS="$CREDS_PATH"
  echo "[frs-session-start] Materialized service account credentials to $CREDS_PATH"
elif [ -z "${FRS_GOOGLE_CREDENTIALS:-}" ]; then
  echo "[frs-session-start] WARNING: Neither FRS_GOOGLE_CREDENTIALS_B64 nor FRS_GOOGLE_CREDENTIALS is set."
  echo "  Google Sheets MCP will not connect. See agents/SETUP.md."
fi

echo "[frs-session-start] Ready."
