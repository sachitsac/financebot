---
description: Plan and implement a new feature for FinanceBot following our conventions
allowed-tools: Read, Write, Edit, Bash, Grep, Glob
---

# Add Feature Command

You are adding a new feature to FinanceBot. Follow these steps:

## 1. Understand
- Read CLAUDE.md for project conventions
- Read the existing code in src/ to understand patterns
- Ask clarifying questions if the feature is ambiguous

## 2. Plan
Before writing any code, output a brief plan:
- Which files need to change
- Any new files needed
- Edge cases to handle

## 3. Implement
- Follow existing code patterns (pure functions, JSDoc comments)
- All monetary values in cents internally
- Australian locale for display

## 4. Test
- Write tests alongside the implementation
- Run `npm test` to verify
- Run `npm run lint` to check formatting

## 5. Commit
- Use conventional commit format
- Keep commits small and focused

Feature to implement: $ARGUMENTS
