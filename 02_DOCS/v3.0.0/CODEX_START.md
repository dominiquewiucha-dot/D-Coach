---
project: D-Coach
document: CODEX_START
version: 3.0.0
status: Stable
replaces: 2.9.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - muscle map belongs to Coach/Dashboard/Analysis, not the set-entry screen.
codex_rule: Integrate content and UI behavior only. Do not restructure the app.
---

# CODEX_START – Content Release v3.0.0 Interactive Muscle Map

## Wichtig
Dieses Paket kommt nach v2.9 und ist **kein Architektur-Update**.

## Aufgabe
Neue Dateien integrieren:

```text
database/interactive_muscle_map_schema_v3.0.0.json
database/muscle_map_visual_config_v3.0.0.json
database/muscle_map_regions_v3.0.0.json
database/muscle_detail_card_schema_v3.0.0.json
database/muscle_map_texts_v3.0.0.json
assets/muscle_maps/muscle_map_front_v3.0.0.svg
assets/muscle_maps/muscle_map_back_v3.0.0.svg
```

## Umsetzung
1. Daten und SVGs übernehmen.
2. Muscle Coverage aus v2.3/v2.4 verwenden.
3. Ansicht im Coach/Dashboard/Analyse-Bereich ergänzen.
4. Liste der Muskeln anzeigen.
5. Klick auf Muskel in Liste setzt selectedMuscleId.
6. Körperkarte hebt selectedMuscleId hervor.
7. Klick auf SVG-Muskel öffnet Detailkarte.
8. Front/Rücken-Umschalter einbauen.
9. Today/Week/Month/Trend vorbereiten.

## Nicht machen
- keine Architekturänderung
- keine Muskelkarte im Satzscreen
- keine grüne Hauptfarbe
- keine Nutzerdaten löschen
