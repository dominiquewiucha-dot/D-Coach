---
project: D-Coach
document: PREMIUM_MUSCLE_MAP_ENGINE_SPEC
version: 5.2.0
status: Stable
replaces: 5.1.0
date: 2026-07-13
owner: ChatGPT
reference: D-Coach Screenshots 2026-07-13
core_principle: Premium UX without changing existing data or app architecture.
codex_rule: Integrate UI/UX only. Preserve all logic, routes, IDs, storage, imports and user data.
---

# Premium Muscle Map Engine

## Required body quality

- Head, neck, torso, arms and legs must have realistic athletic proportions.
- Front and rear silhouettes must be immediately recognizable.
- Left and right regions may share the same muscle ID but must remain separate clickable paths.
- Large muscle groups must be subdivided where meaningful:
  - upper/mid/lower chest,
  - front/side/rear delts,
  - upper/lower lats,
  - upper/mid traps,
  - rhomboids,
  - upper/lower erectors,
  - quad regions,
  - hamstring regions,
  - glute max/medius,
  - gastrocnemius/soleus.

## Detail sheet

When `Brust` is selected, show:

- week percentage,
- today's percentage,
- upper/mid/lower chest,
- primary exercise contribution,
- assistance contribution,
- trend,
- recommendation for the next plan,
- confidence and Why.

## Rendering

The body should use a dark neutral anatomical base. Only active muscles receive the heatmap gradient.
