#!/bin/bash
# Pre-edit branch guard: blocks edits on main branch
# Uses JSON permissionDecision output (more reliable than exit 2 for Edit/Write)

set -euo pipefail

# Read the JSON input from stdin (required even if we don't use it)
input=$(cat)

# Check current branch
current_branch=$(git branch --show-current 2>/dev/null || echo "unknown")

if [ "$current_branch" = "main" ] || [ "$current_branch" = "master" ]; then
  # Output JSON to stdout with permissionDecision: deny
  # This is the reliable way to block Edit/Write tools
  cat <<EOF
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "🛑 Cannot edit files on the main branch. Create a feature branch first: git checkout -b feat/your-feature"
  }
}
EOF
  exit 0
fi

# Allow the edit
exit 0
