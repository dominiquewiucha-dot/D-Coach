---
project: D-Coach
document: CODEX_START
version: 2.4.0
status: Stable
replaces: 2.3.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - analysis belongs to Coach Mode, not the set-entry screen.
codex_rule: Integrate content only. Do not restructure the app.
---

# CODEX_START – Content Release v2.4.0 Muscle Coverage Body View

## Wichtig

Dieses Paket ist **kein Architektur-Update**.

Codex soll nur die Muscle-Coverage-Analyse visuell erweitern.

## Aufgabe

Neue Inhalte integrieren:

```text
database/muscle_coverage_visual_mapping_v2.4.0.json
database/muscle_coverage_detail_schema_v2.4.0.json
database/muscle_coverage_coach_texts_v2.4.0.json
docs/MUSCLE_COVERAGE_BODY_VIEW_SPEC.md
docs/MUSCLE_COVERAGE_UI_INTERACTION_CONTRACT.md
```

## Umsetzung

1. Daten nach `/data/` kopieren oder laden.
2. Muscle Coverage Liste behalten.
3. Körperansicht ergänzen.
4. Klick auf Muskel in Liste setzt `selectedMuscleId`.
5. Körperansicht hebt `selectedMuscleId` hervor.
6. Klick auf Muskel im Körper öffnet Einzelansicht.
7. Quick Training Mode bleibt unverändert.

## Nicht machen

- keine neue Architektur
- keine neue Ordnerstruktur
- keine großen Charts im Training
- keine grüne Hauptfarbe
- keine Pflichtanzeige im Satztracking

## Akzeptanzkriterien

- Muskel in Liste anklickbar
- Körperansicht zeigt Hervorhebung
- Einzelansicht zeigt Today / Week / Übungen
- Front/Rücken-Umschalter
- Blaues Farbsystem
- Fallback bei fehlenden SVGs
