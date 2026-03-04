---
description: Review recent code changes for quality, security, and conventions
allowed-tools: Read, Bash, Grep, Glob
---

# Code Review Command

Review the recent code changes in this project. Check for:

## Quality
- [ ] Functions have JSDoc comments
- [ ] No `var` usage (use `const` or `let`)
- [ ] Pure functions where possible
- [ ] Descriptive variable names

## Security
- [ ] No hardcoded credentials or API keys
- [ ] Input validation on user-facing functions
- [ ] No eval() or dynamic code execution

## Financial Accuracy
- [ ] Monetary values stored as integers (cents)
- [ ] Proper rounding for display (2 decimal places)
- [ ] Australian locale formatting
- [ ] GST calculations are correct (10%)

## Conventions
- [ ] Follows project structure in CLAUDE.md
- [ ] Conventional commit messages
- [ ] No console.log left in production code

Scope to review: $ARGUMENTS

Output a summary with ✅ passes, ⚠️ warnings, and 🔴 issues found.
