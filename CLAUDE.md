# FinanceBot — Expense Report Generator

## What This Project Does
A Node.js CLI tool that parses expense CSV files and generates categorised reports.
Built for the Digital Department as an internal productivity tool.

## Tech Stack
- **Runtime**: Node.js 20+
- **Language**: JavaScript (ES Modules)
- **Testing**: Vitest
- **Linting**: ESLint + Prettier

## Project Structure
```
financebot/
├── CLAUDE.md          ← You are here
├── .claude/           ← Claude Code configuration
│   ├── settings.json  ← Hooks (deterministic guardrails)
│   ├── commands/      ← Slash commands (/command-name)
│   └── skills/        ← Auto-discovered knowledge
├── src/
│   ├── index.js       ← CLI entry point
│   ├── parser.js      ← CSV parsing logic
│   └── reporter.js    ← Report generation (text, HTML, JSON)
├── data/
│   └── expenses.csv   ← Sample expense data
└── package.json
```

## Commands
- `node src/index.js` — Generate text report
- `node src/index.js --format=html` — Generate HTML report
- `node src/index.js --format=json` — Generate JSON report
- `node src/index.js --month=2026-01` — Filter by month
- `npm test` — Run tests
- `npm run lint` — Lint code

## Code Conventions
- Use `const` over `let`, never `var`
- Pure functions where possible
- All monetary values in cents (integers), display as dollars
- Australian locale for currency formatting (AUD)
- Descriptive variable names, no abbreviations
- Every function must have a JSDoc comment

## Git
- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`
- Never commit directly to main
