---
project: D-Coach
version: 6.9.0
status: Planned
replaces: 6.8.0
recommended_mode: Hoch
date: 2026-07-13
execution_gate: Start only after v6.8 visual approval.
codex_rule: Integrate approved male MuscleMapJS model without restructuring the app.
resource_rule: Use Hoch and stop after tests, screenshots, commit and push.
---

# Fallback und Rollback

Feature Flag:

```ts
useProductionMuscleMap: true
```

Fallback-Reihenfolge:

1. Production Muscle Map
2. Legacy Muscle Map
3. Muskelgruppenliste

Bei kritischem Fehler Feature Flag deaktivieren. Keine Datenmigration oder Rückmigration nötig.
