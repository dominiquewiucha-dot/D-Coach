---
project: D-Coach
document: UI_VISIBILITY_CONTRACT
document_id: UI_VISIBILITY_CONTRACT
version: 2.0.0
status: Stable
replaces: 1.4.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - complexity belongs in the engine, not on the workout screen.
codex_rule: Codex must verify PROJECT_MEMORY.md and MASTER_WORKFLOW.md before using this document.
---

# UI_VISIBILITY_CONTRACT

Dieses Dokument regelt, welche Informationen in welchem App-Modus sichtbar sein dürfen.

---

## Quick Training Mode

Darf zeigen:

- aktuelle Übung
- aktueller Satz
- letzte Leistung
- heutiges Gewicht
- heutige Wiederholungen
- Timer
- nächste Übung
- kompakter LWS-Hinweis
- Alternative-Button

Darf NICHT zeigen:

- Wochenvolumen
- volle Statistik
- Muskelkarten als Standard
- lange Techniktexte
- Debug
- Export/Backup
- Plan-Generator
- vollständiges Journal

---

## Detail Mode

Darf zeigen:

- Muskelkarten
- Technik
- Fehler
- Alternativen
- Verlauf
- vollständige Übungsdaten

---

## Coach Mode

Darf zeigen:

- Zusammenfassung
- Fortschritt
- Volumen
- Recovery
- Empfehlungen
- Trends
- Charts

---

## Settings/Admin

Darf zeigen:

- Debug
- Backup
- Import/Export
- Versionen
- Cache
- Datenbanken

---

## Changelog

### 2.0.0
- Sichtbarkeitsvertrag eingeführt.