---
project: D-Coach
document: PREMIUM_MUSCLE_MAP_ENGINE_TASK
version: 5.2.0
status: Stable
replaces: 5.1.0
date: 2026-07-13
owner: ChatGPT
reference: D-Coach Screenshots 2026-07-13
core_principle: Premium UX without changing existing data or app architecture.
codex_rule: Integrate UI/UX only. Preserve all logic, routes, IDs, storage, imports and user data.
---

# Integration Task

1. Create a dedicated Muscle Map route/screen.
2. Render a large front/back SVG inline so paths remain clickable.
3. Bind each path through `data-muscle-id`.
4. Apply interpolated heatmap colors from the coverage percentage.
5. Link list and body selection.
6. Add accessible labels and keyboard/touch support.
7. Add fallback list if SVG fails.
8. Do not render the body smaller than the specified minimum height on phones.
