#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")

# Safety: only auto-commit + push when on main. Cloud scheduled sessions land
# on main via the SessionStart hook. Local dev on claude/* branches is skipped
# so we don't push half-finished work.
if [[ "$CURRENT_BRANCH" != "main" ]]; then
  echo "[frs-session-stop] On branch '$CURRENT_BRANCH' (not main) — skipping auto-commit/push."
  exit 0
fi

# Only auto-commit artifacts produced by agents — never code or config.
ARTIFACT_PATHS=(
  "agents/drafts/"
  "agents/plans/"
  "agents/sourcing-runs/"
  "agents/research-runs/"
  "agents/outreach-runs/"
  "agents/outreach-drafts/"
  ".claude/agent-memory/"
)

for path in "${ARTIFACT_PATHS[@]}"; do
  if [ -d "$REPO_ROOT/$path" ]; then
    git add "$REPO_ROOT/$path" 2>/dev/null || true
  fi
done

if git diff --cached --quiet 2>/dev/null; then
  echo "[frs-session-stop] No agent artifacts to commit."
  exit 0
fi

TIMESTAMP=$(date -u +"%Y-%m-%d %H:%M UTC")
SUMMARY=$(git diff --cached --stat | tail -1)

git commit -m "$(cat <<EOF
[auto] Agent artifacts — $TIMESTAMP

$SUMMARY

Auto-committed by session-stop hook. Review at your convenience.
EOF
)"

echo "[frs-session-stop] Committed agent artifacts."

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
exit 1
