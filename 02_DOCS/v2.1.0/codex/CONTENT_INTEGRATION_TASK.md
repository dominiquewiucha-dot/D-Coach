---
project: D-Coach
document: CONTENT_INTEGRATION_TASK
version: 2.1.0
status: Stable
replaces: 2.0.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - content grows, workout screen stays simple.
codex_rule: Integrate content only. Do not restructure the app.
---

# Content Integration Task v2.1.0

## Ziel

Codex integriert neue Trainingsdaten ohne Architekturänderung.

## Reihenfolge

1. Backup-Funktion prüfen.
2. JSON-Dateien laden.
3. Merge-Funktion für Exercises erweitern.
4. Mapping-Funktion auf v2.1.0 Daten anwenden.
5. Alternative-Regeln in Detail Mode und optional Training Mode verfügbar machen.
6. Quick Training Mode nicht überladen.
7. Tests durchführen.

## Merge-Regel

Gleiche Exercise-ID bedeutet: bestehende Übung erweitern, nicht ersetzen.

## Fallback

Wenn v2.1.0 Datei fehlt:

- alte Daten nutzen
- Console-Warnung
- App läuft weiter
