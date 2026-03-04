const fs = require("fs");

/**
 * Parse a CSV file of expenses into structured objects
 * @param {string} filePath - Path to the CSV file
 * @returns {Array<{date: string, description: string, amount: number, category: string, employee: string}>}
 */
function parseExpenses(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.trim().split("\n");
  const headers = lines[0].split(",");

  return lines.slice(1).map((line) => {
    const values = line.split(",");
    return {
      date: values[0],
      description: values[1],
      amount: parseFloat(values[2]),
      category: values[3] || "Uncategorised",
      employee: values[4],
    };
  });
}

/**
 * Group expenses by category with totals
 * @param {Array} expenses - Parsed expense objects
 * @returns {Object} Categories mapped to {total, count, expenses}
 */
function groupByCategory(expenses) {
  return expenses.reduce((groups, expense) => {
    const cat = expense.category;
    if (!groups[cat]) {
      groups[cat] = { total: 0, count: 0, expenses: [] };
    }
    groups[cat].total += expense.amount;
    groups[cat].count += 1;
    groups[cat].expenses.push(expense);
    return groups;
  }, {});
}

/**
 * Filter expenses by month (YYYY-MM format)
 * @param {Array} expenses - Parsed expense objects
 * @param {string|undefined} month - Month filter in YYYY-MM format
 * @returns {Array} Filtered expenses
 */
function filterByMonth(expenses, month) {
  if (!month) return expenses;
  return expenses.filter((e) => e.date.startsWith(month));
}

/**
 * Calculate grand total across all categories
 * @param {Object} groups - Grouped expense categories
 * @returns {number} Grand total
 */
function grandTotal(groups) {
  return Object.values(groups).reduce((sum, cat) => sum + cat.total, 0);
}

module.exports = { parseExpenses, groupByCategory, filterByMonth, grandTotal };
