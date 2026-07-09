---
project: D-Coach
document: CODEX_START
version: 2.5.0
status: Stable
replaces: 2.4.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - intelligence works in the background.
codex_rule: Integrate content and logic only. Do not restructure the app.
---

# CODEX_START – Content Release v2.5.0 Performance & Coach Engine

## Wichtig

Dieses Paket ist **kein Architektur-Update**.

## Aufgabe

Neue Dateien integrieren:

```text
database/performance_score_rules_v2.5.0.json
database/coach_decision_rules_v2.5.0.json
database/personal_record_rules_v2.5.0.json
database/smart_notes_rules_v2.5.0.json
database/confidence_score_rules_v2.5.0.json
database/why_explanation_schema_v2.5.0.json
```

## Umsetzung

1. Dateien nach `/data/` kopieren oder laden.
2. Performance-Vergleich je Übung ergänzen.
3. Personal Records erkennen.
4. Smart Notes nach Training erzeugen.
5. Coach-Empfehlungen mit Warum-Erklärung vorbereiten.
6. Confidence Score nur im Coach-Kontext anzeigen.
7. Quick Training Mode schlank halten.

## Nicht machen

- keine neue Architektur
- keine neue Ordnerstruktur
- keine Nutzerdaten löschen
- keine Pop-up-Flut im Satzscreen
- keine Maximalversuche empfehlen

## Abnahmekriterien

- Fortschritt gegenüber letzter Einheit erkennbar
- PRs werden erkannt
- Smart Notes nach Training
- Coach-Empfehlungen haben Warum-Erklärung
- Quick Training Screen bleibt schlank
