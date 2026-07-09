---
project: D-Coach
document: CODEX_START
version: 2.8.0
status: Stable
replaces: 2.7.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - progression decisions stay in Coach Mode, quick training stays fast.
codex_rule: Integrate content and logic only. Do not restructure the app.
---

# CODEX_START – Content Release v2.8.0 Adaptive Progression Engine

## Wichtig

Dieses Paket ist **kein Architektur-Update**.

## Aufgabe

Neue Dateien integrieren:

```text
database/adaptive_progression_schema_v2.8.0.json
database/adaptive_progression_rules_v2.8.0.json
database/progression_confidence_rules_v2.8.0.json
database/progression_texts_v2.8.0.json
database/progression_prediction_schema_v2.8.0.json
```

## Umsetzung

1. Dateien nach `/data/` kopieren oder laden.
2. Letzte vergleichbare Einheiten nutzen.
3. Progressionsentscheidung erzeugen.
4. Warum-Erklärung aus v2.5 wiederverwenden.
5. Confidence Score berechnen oder vorbereiten.
6. Prediction nur im Coach Mode anzeigen.
7. Quick Training Mode schlank halten.

## Nicht machen

- keine neue Architektur
- keine neue Ordnerstruktur
- keine Nutzerdaten löschen
- keine Maximalversuche empfehlen
- keine langen Erklärungen im Satzscreen

## Abnahmekriterien

- bei erreichter Zielwiederholung wird Progression vorgeschlagen
- bei Leistungsabfall wird Halten/Reduktion vorgeschlagen
- LWS-Regel verhindert aggressive Progression
- Warum-Erklärung vorhanden
- Quick Training bleibt minimal
