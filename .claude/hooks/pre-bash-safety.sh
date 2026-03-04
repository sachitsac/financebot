#!/bin/bash
# Pre-bash safety hook: blocks dangerous commands
# Reads JSON from stdin, extracts the command using jq

set -euo pipefail

input=$(cat)
cmd=$(echo "$input" | jq -r '.tool_input.command // ""')

# Block rm -rf on project root or important dirs
if echo "$cmd" | grep -qE 'rm -rf (\.|/|src|data)'; then
  echo "🛑 Dangerous delete blocked. Cannot rm -rf project directories." >&2
  exit 2
fi

# Block npm publish (we don't want accidental publishes)
if echo "$cmd" | grep -qE 'npm publish'; then
  echo "🛑 npm publish blocked. Use the release pipeline instead." >&2
  exit 2
fi

exit 0
