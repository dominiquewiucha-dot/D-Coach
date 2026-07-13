---
project: D-Coach
document: PREMIUM_DESIGN_SYSTEM_SPEC
version: 5.1.0
status: Stable
replaces: 5.0.0
date: 2026-07-13
owner: ChatGPT
reference: D-Coach Screenshots 2026-07-13
core_principle: Premium UX without changing existing data or app architecture.
codex_rule: Integrate UI/UX only. Preserve all logic, routes, IDs, storage, imports and user data.
---

# Premium Design System Specification

## Current UI issues

The screenshots show a technically consistent dark interface, but too many sections share the same card shape, density and hierarchy. Long pages require excessive scrolling and feel like debug/admin views rather than a focused mobile product.

## Design direction

- Dark navy background.
- Strong D-Coach blue for actions and navigation.
- One hero section per screen.
- Compact metric tiles.
- Progressive disclosure for secondary details.
- Cards must have different visual roles.
- Touch targets at least 44 px.
- Body text should not be smaller than 14 px for important content.
- Long explanatory text is replaced by compact status chips plus an expandable explanation.

## Page identities

- Dashboard: current status and next action.
- Training: immediate session selection and start.
- Coach: analysis and recommendations.
- Plans: plan management.
- Exercises: fast search and filter.
- Weight: trend and entry.
- Journal: readiness and notes.

## Safe areas

All fixed bottom and top elements must use CSS environment variables and must not cover content.
