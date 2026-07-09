---
project: D-Coach
document: CODEX_START
version: 2.7.0
status: Stable
replaces: 2.6.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - personal analytics belongs to Coach Mode, not the workout screen.
codex_rule: Integrate content and analytics only. Do not restructure the app.
---

# CODEX_START – Content Release v2.7.0 Training DNA

## Wichtig

Dieses Paket ist **kein Architektur-Update**.

## Aufgabe

Neue Dateien integrieren:

```text
database/training_dna_schema_v2.7.0.json
database/personal_analytics_rules_v2.7.0.json
database/training_dna_texts_v2.7.0.json
database/personal_performance_timeline_schema_v2.7.0.json
database/coach_memory_rules_v2.7.0.json
```

## Umsetzung

1. Dateien nach `/data/` kopieren oder laden.
2. Training-DNA Auswertungen nur berechnen, wenn genug Daten vorhanden sind.
3. Coach Mode / Analytics um Training-DNA erweitern.
4. Timeline-Events optional vorbereiten.
5. Coach Memory in Übungsdetails oder Coach Mode anzeigen.
6. Quick Training Mode nicht erweitern.

## Nicht machen

- keine neue Architektur
- keine neue Ordnerstruktur
- keine Daten löschen
- keine Analytics im Satzscreen
- keine übertriebenen Aussagen bei wenig Daten

## Abnahmekriterien

- bei wenig Daten wird sauber "Noch nicht genug Daten" angezeigt
- bei ausreichend Daten werden Muster erkannt
- Training-DNA erscheint nur in Coach/Analytics
- Quick Training bleibt unverändert
