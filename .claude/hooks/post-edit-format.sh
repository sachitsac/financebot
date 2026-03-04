#!/bin/bash
# Post-edit hook: auto-format JS files after every edit
# Reads JSON from stdin, extracts the file path using jq

set -euo pipefail

input=$(cat)
file_path=$(echo "$input" | jq -r '.tool_input.file_path // .tool_input.path // ""')

# Only format JavaScript files
if echo "$file_path" | grep -qE '\.(js|json)$'; then
  npx prettier --write "$file_path" 2>/dev/null || true
  echo "✨ Auto-formatted: $file_path"
fi

exit 0
