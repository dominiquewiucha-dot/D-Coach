---
project: D-Coach
document: PREMIUM_DESIGN_SYSTEM_INTEGRATION_TASK
version: 5.1.0
status: Stable
replaces: 5.0.0
date: 2026-07-13
owner: ChatGPT
reference: D-Coach Screenshots 2026-07-13
core_principle: Premium UX without changing existing data or app architecture.
codex_rule: Integrate UI/UX only. Preserve all logic, routes, IDs, storage, imports and user data.
---

# Integration Task

1. Add shared CSS variables for colors, radius, spacing and typography.
2. Refactor duplicated card styles into reusable classes.
3. Add bottom-page padding equal to navigation height plus safe-area inset.
4. Replace the current bottom-nav overflow with a five-tab + More pattern if needed.
5. Add collapsed/expanded states to secondary dashboard sections.
6. Test on widths 320, 375, 390, 430 and 768 px.
7. Preserve offline operation and current navigation logic.
