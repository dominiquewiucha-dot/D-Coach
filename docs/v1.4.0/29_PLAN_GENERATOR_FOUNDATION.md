---
project: D-Coach
document: PLAN_GENERATOR_FOUNDATION
document_id: 29_PLAN_GENERATOR_FOUNDATION
version: 1.4.0
status: Stable
replaces: —
date: 2026-07-09
owner: ChatGPT
codex_rule: Codex must verify PROJECT_MEMORY.md before using this document.
---

# Plan Generator Foundation v1.4.0

## Ziel

Noch kein voller KI-Planer, aber eine Grundlage.

## Eingaben

- Ziel
- Tage pro Woche
- verfügbare Minuten
- LWS-Profil
- Equipment
- bevorzugter Split
- ausgeschlossene Übungen
- Favoriten

## Ausgabe

- Plan-Vorschlag
- Tage
- Übungen
- Sätze
- Wiederholungen
- Prioritäten

## MVP-Regel

Generator darf nur aus vorhandenen Übungen wählen.

Keine neuen Übungen erfinden.

## LWS-Regel

Bei aktivem LWS-Profil:

- keine `avoidInitially`
- `conditionallySuitable` nur mit Hinweis
- Maschinen und brustgestützte Varianten bevorzugen

## Changelog

### 1.4.0
- Plan-Generator-Grundlage definiert.