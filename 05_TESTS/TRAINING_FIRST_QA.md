---
project: D-Coach
document: TRAINING_FIRST_QA
document_id: TRAINING_FIRST_QA
version: 2.0.0
status: Stable
replaces: 1.4.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - complexity belongs in the engine, not on the workout screen.
codex_rule: Codex must verify PROJECT_MEMORY.md and MASTER_WORKFLOW.md before using this document.
---

# TRAINING_FIRST_QA

## Test 1 – Satz in 5 Sekunden

1. Training öffnen
2. Satzgewicht prüfen
3. Wiederholungen eintragen
4. Satz speichern

Erwartung:

- keine Suche nötig
- keine Statistik im Weg
- kein Scrollzwang bei Standardansicht

## Test 2 – Keine Informationsflut

Training-Screen prüfen.

Nicht sichtbar:

- große Charts
- volle Muskelkarten
- lange Techniktexte
- Debug
- Backup
- Plan-Generator

## Test 3 – Detail on Demand

Übung antippen.

Erwartung:

- Details sind erreichbar
- Training-Screen bleibt trotzdem simpel

## Test 4 – Coach Later

Training beenden.

Erwartung:

- Auswertung erscheint nach dem Training
- nicht während Satz-Eingabe

## Changelog

### 2.0.0
- QA-Regeln für Training First ergänzt.