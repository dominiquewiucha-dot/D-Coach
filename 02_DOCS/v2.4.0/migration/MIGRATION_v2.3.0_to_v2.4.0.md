---
project: D-Coach
document: MIGRATION_v2.3.0_to_v2.4.0
version: 2.4.0
status: Stable
replaces: 2.3.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - analysis belongs to Coach Mode, not the set-entry screen.
codex_rule: Integrate content only. Do not restructure the app.
---

# Migration v2.3.0 → v2.4.0

## Zweck

Muscle Coverage um Körperansicht und Einzelmuskel-Interaktion erweitern.

## Keine Strukturmigration

Dieses Release ist Content + UI-Regeln.

## Dateien

Nach `/data/` übernehmen:

```text
muscle_coverage_visual_mapping_v2.4.0.json
muscle_coverage_detail_schema_v2.4.0.json
muscle_coverage_coach_texts_v2.4.0.json
```

## Test

- Coach Mode öffnen
- Muscle Coverage Week öffnen
- Muskel in Liste antippen
- Körperansicht hebt Muskel hervor
- Einzelansicht zeigt Zahlen
- Quick Training Mode prüfen
