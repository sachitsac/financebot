#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const {
  parseExpenses,
  groupByCategory,
  filterByMonth,
  grandTotal,
} = require("./parser");
const {
  generateTextReport,
  generateHTMLReport,
  generateJSONReport,
} = require("./reporter");

const args = process.argv.slice(2);

if (args.includes("--help")) {
  console.log(`
📊 FinanceBot — Expense Report Generator
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Usage: node src/index.js [options]

Options:
  --month=YYYY-MM   Filter expenses by month
  --format=FORMAT   Output format: text (default), html, json
  --help            Show this help message

Examples:
  node src/index.js                          # All expenses, text format
  node src/index.js --month=2026-01          # January only
  node src/index.js --format=html            # HTML report
  node src/index.js --month=2026-02 --format=json  # Feb, JSON
`);
  process.exit(0);
}

const monthArg = args
  .find((a) => a.startsWith("--month="))
  ?.split("=")[1];
const formatArg =
  args.find((a) => a.startsWith("--format="))?.split("=")[1] || "text";

const dataFile = path.join(__dirname, "../data/expenses.csv");

if (!fs.existsSync(dataFile)) {
  console.error("❌ No expense data found at data/expenses.csv");
  process.exit(1);
}

console.log(`\n🔍 Loading expenses from ${dataFile}...`);
const allExpenses = parseExpenses(dataFile);
const expenses = filterByMonth(allExpenses, monthArg);

console.log(
  `✅ Found ${expenses.length} expenses${monthArg ? ` for ${monthArg}` : ""}\n`,
);

const groups = groupByCategory(expenses);
const total = grandTotal(groups);

if (formatArg === "html") {
  const html = generateHTMLReport(groups, monthArg, total);
  const outFile = `report${monthArg ? "-" + monthArg : ""}.html`;
  fs.writeFileSync(outFile, html);
  console.log(`📄 HTML report saved to ${outFile}`);
} else if (formatArg === "json") {
  const json = generateJSONReport(groups, monthArg, total);
  const outFile = `report${monthArg ? "-" + monthArg : ""}.json`;
  fs.writeFileSync(outFile, json);
  console.log(`📄 JSON report saved to ${outFile}`);
} else {
  console.log(generateTextReport(groups, monthArg, total));
}
