#!/usr/bin/env bash
# Copy the FGSE reference-datasets README from Curnagl into the repository and
# push it when it changed. The Shared datasets page is generated from it.
#
# Run on main, from any machine that can ssh to Curnagl:
#   scripts/sync-reference-readme.sh                 # uses host "curnagl"
#   scripts/sync-reference-readme.sh user@curnagl    # other ssh host or alias
#   scripts/sync-reference-readme.sh user@curnagl:/reference/FGSE/README_FGSE.md
set -euo pipefail
cd "$(dirname "$0")/.."

SRC="${1:-curnagl}"
[[ "$SRC" == *:* ]] || SRC="$SRC:/reference/FGSE/README_FGSE.md"

scp -q "$SRC" reference/README_FGSE.md

if git diff --quiet -- reference/README_FGSE.md; then
  echo "README unchanged, nothing to do"
  exit 0
fi

git add reference/README_FGSE.md
git commit -q -m "Update the FGSE reference datasets list from Curnagl"
git push -q
echo "README updated and pushed. The site redeploys in a few minutes."
