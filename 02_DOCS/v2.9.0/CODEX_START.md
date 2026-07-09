---
project: D-Coach
document: CODEX_START
version: 2.9.0
status: Stable
replaces: 2.8.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - workout building happens before training, not during set entry.
codex_rule: Integrate content and logic only. Do not restructure the app.
---

# CODEX_START – Content Release v2.9.0 Smart Workout Builder

## Wichtig

Dieses Paket ist **kein Architektur-Update**.

## Aufgabe

Neue Dateien integrieren:

```text
database/smart_workout_builder_schema_v2.9.0.json
database/smart_workout_builder_rules_v2.9.0.json
database/smart_workout_day_templates_v2.9.0.json
database/smart_substitution_rules_v2.9.0.json
database/smart_workout_builder_texts_v2.9.0.json
```

## Umsetzung

1. Dateien nach `/data/` kopieren oder laden.
2. Builder nur vor Trainingsstart / im Coach Mode anbieten.
3. Quick Training Mode bleibt Durchführung, nicht Planung.
4. Day Templates für Push/Pull/Legs bereitstellen.
5. 60-Minuten-Limit berücksichtigen.
6. LWS-Profil berücksichtigen.
7. Gerät-besetzt-Alternative ermöglichen.
8. Keine echten Studio-Geräte erfinden.

## Nicht machen

- keine neue Architektur
- keine neue Ordnerstruktur
- keine Nutzerdaten löschen
- keine Planung während Satz-Eingabe erzwingen
- keine Geräte behaupten, die nicht hinterlegt sind

## Abnahmekriterien

- Push/Pull/Legs kann aus Template vorbereitet werden
- Zeitlimit entfernt optionale Übungen
- LWS-Profil bevorzugt sichere Alternativen
- Gerät-besetzt zeigt Alternativen
- Quick Training bleibt schlank
