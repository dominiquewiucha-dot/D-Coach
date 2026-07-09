---
project: D-Coach
document: TRAINING_DNA_INTEGRATION_TASK
version: 2.7.0
status: Stable
replaces: 2.6.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - personal analytics belongs to Coach Mode, not the workout screen.
codex_rule: Integrate content and analytics only. Do not restructure the app.
---

# Training DNA Integration Task v2.7.0

## Aufgaben

1. JSON-Dateien laden.
2. Helper für Mindestdaten prüfen.
3. Rep-Range-Buckets berechnen.
4. Exercise Affinity Score vorbereiten.
5. Stagnation Detection vorbereiten.
6. Muscle Coverage Consistency aus v2.3/v2.4 nutzen.
7. Timeline-Events generieren, falls Daten vorhanden.
8. Coach Memory im Coach Mode anzeigen.
9. Quick Training Mode unverändert lassen.

## Fallback

Wenn Daten fehlen:

```text
Noch nicht genug Daten.
```
