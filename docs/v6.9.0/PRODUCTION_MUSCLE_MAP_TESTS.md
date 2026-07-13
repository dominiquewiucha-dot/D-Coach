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

# Tests

## Funktional

- Front/Back
- Muskelwahl
- bilaterale Auswahl
- Detailkarte
- Today/Week/Month
- Smart-Coach-Zuordnung
- Fallback
- Feature Flag

## Responsive

320, 375, 390, 430 und 768 px.

## Regression

Weekly Coach, Session Coach, Feedback, Plateau, Deload, Mesocycle, Training, Pläne, Übungen, Gewicht, Journal, Offline, Backup/Restore.

## Performance

- kein mehrfaches Initialisieren,
- kein Listener-Leak,
- sauberes Unmount,
- keine unnötigen Neurenderings.
