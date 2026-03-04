# FinanceBot

Expense report generator for the Digital Department. A Node.js CLI tool that parses expense CSV files and generates categorised reports in text, HTML, or JSON format.

## Usage

```bash
# Install dependencies
npm install

# Generate text report
node src/index.js

# Generate HTML report
node src/index.js --format=html

# Generate JSON report
node src/index.js --format=json

# Filter by month
node src/index.js --month=2026-01
```

## Development

```bash
# Run tests
npm test

# Lint
npm run lint

# Format
npm run format
```

## Tech Stack

- Node.js 20+
- JavaScript (ES Modules)
- Vitest (testing)
- ESLint + Prettier (linting/formatting)
