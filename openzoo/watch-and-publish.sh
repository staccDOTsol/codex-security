#!/usr/bin/env bash
# Publish live stats from THIS machine, on a loop.
#
# The hosted-runner cron cannot do this: a GitHub runner reaches neither a proxy
# on 127.0.0.1 nor a scan directory on your laptop. Run this beside the scan.
#
#   ./openzoo/watch-and-publish.sh /Users/you/security/run8 [interval_seconds]
set -euo pipefail

OUT_DIR="${1:?usage: watch-and-publish.sh <scan-output-dir> [interval_seconds]}"
INTERVAL="${2:-900}"
REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$REPO"
echo "publishing every ${INTERVAL}s from ${OUT_DIR}"

while true; do
  # exit 78 is the publisher saying "nothing to publish" — a normal state early
  # in a run, not a reason to stop the loop or commit blanks.
  if node openzoo/publish-stats.mjs --out-dir "$OUT_DIR"; then
    git add STATS.md openzoo/stats.svg
    # --quiet exits 1 when something IS staged, so invert it rather than let
    # `set -e` kill the loop on a no-change pass.
    if ! git diff --cached --quiet; then
      git commit -q -m "stats: $(date -u '+%Y-%m-%dT%H:%M:%SZ') live run"
      git push -q origin HEAD && echo "  pushed $(date '+%H:%M:%S')"
    else
      echo "  no change $(date '+%H:%M:%S')"
    fi
  fi
  sleep "$INTERVAL"
done
