#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

# Only auto-commit artifacts produced by agents — never code or config.
ARTIFACT_PATHS=(
  "agents/drafts/"
  "agents/plans/"
  ".claude/agent-memory/"
)

CHANGED=false

for path in "${ARTIFACT_PATHS[@]}"; do
  if [ -d "$REPO_ROOT/$path" ]; then
    git add "$REPO_ROOT/$path" 2>/dev/null || true
  fi
done

if ! git diff --cached --quiet 2>/dev/null; then
  CHANGED=true

  TIMESTAMP=$(date -u +"%Y-%m-%d %H:%M UTC")
  SUMMARY=$(git diff --cached --stat | tail -1)

  git commit -m "$(cat <<EOF
[auto] Agent artifacts — $TIMESTAMP

$SUMMARY

Auto-committed by session-stop hook. Review at your convenience.
EOF
  )"

  echo "[frs-session-stop] Committed agent artifacts."
else
  echo "[frs-session-stop] No agent artifacts to commit."
fi

if [ "$CHANGED" = true ]; then
  RETRIES=0
  MAX_RETRIES=4
  DELAY=2

  while [ $RETRIES -lt $MAX_RETRIES ]; do
    if git push origin main 2>/dev/null; then
      echo "[frs-session-stop] Pushed to main."
      exit 0
    fi
    RETRIES=$((RETRIES + 1))
    echo "[frs-session-stop] Push failed (attempt $RETRIES/$MAX_RETRIES). Retrying in ${DELAY}s..."
    sleep $DELAY
    DELAY=$((DELAY * 2))
  done

  echo "[frs-session-stop] ERROR: Push failed after $MAX_RETRIES attempts. Artifacts are committed locally but NOT on remote."
fi
