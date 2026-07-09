---
project: D-Coach
document: MIGRATION_2_0_TO_2_1
version: 2.1.0
status: Stable
replaces: 2.0.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - content grows, workout screen stays simple.
codex_rule: Integrate content only. Do not restructure the app.
---

# Migration v2.0.0 → v2.1.0

## Zweck

Neue Inhaltsdaten hinzufügen.

## Keine Strukturmigration

Dieses Release ist nur Content.

## Dateien

Nach `/data/` übernehmen:

```text
exercise_core_v2.1.0.json
exercise_muscle_mapping_v2.1.0.json
exercise_alternatives_v2.1.0.json
```

## Test

- App starten
- Übungsdatenbank öffnen
- Übung auswählen
- Zielmuskel prüfen
- Alternative anzeigen
- Training starten
- Satz speichern
- alte Historie prüfen
