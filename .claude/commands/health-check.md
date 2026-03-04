---
description: Run a full project health check — tests, lint, and dependency audit
allowed-tools: Bash
---

# Health Check Command

Run a full project health check. Execute these in order and report results:

1. **Dependencies**: `npm audit --audit-level=moderate`
2. **Lint**: `npm run lint`
3. **Tests**: `npm test`
4. **Build check**: `node src/index.js --help` (verify it runs)

Output a dashboard-style summary:

```
🏥 FinanceBot Health Check
━━━━━━━━━━━━━━━━━━━━━━━━
Dependencies:  ✅ / ⚠️ / 🔴
Lint:          ✅ / ⚠️ / 🔴  
Tests:         ✅ (X passed) / 🔴 (X failed)
Runtime:       ✅ / 🔴
━━━━━━━━━━━━━━━━━━━━━━━━
Overall:       ✅ Healthy / ⚠️ Needs attention / 🔴 Broken
```
