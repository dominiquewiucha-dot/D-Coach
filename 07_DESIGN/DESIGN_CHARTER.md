---
project: D-Coach
document: DESIGN_CHARTER
document_id: DESIGN_CHARTER
version: 2.0.0
status: Stable
replaces: 1.4.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - complexity belongs in the engine, not on the workout screen.
codex_rule: Codex must verify PROJECT_MEMORY.md and MASTER_WORKFLOW.md before using this document.
---

# DESIGN_CHARTER – Training First

## Oberstes Prinzip

> Die Komplexität gehört in die Engine – nicht auf den Trainingsbildschirm.

---

## Prinzip 001 – Training First

Im Training zählt nur, was innerhalb der nächsten 5 Sekunden hilft.

Erlaubt:

- Übung erkennen
- letzten Wert sehen
- heutigen Satz eintragen
- Timer sehen
- nächste Übung erreichen

Nicht erlaubt:

- lange Texte
- komplexe Diagramme
- Wochenstatistiken
- Muskelvolumen-Analyse
- Debug-Infos
- Coach-Engine-Erklärungen

---

## Prinzip 002 – One-Hand Rule

Alle Hauptaktionen im Training müssen mit einer Hand erreichbar sein.

Hauptaktionen:

- Satz speichern
- Gewicht ändern
- Wiederholungen ändern
- nächste Übung
- Pause starten/stoppen

---

## Prinzip 003 – Three-Tap Rule

Häufige Aktionen dürfen maximal drei Taps brauchen.

Beispiele:

- Satz speichern: 1 Tap
- Gewicht ändern: 1–2 Taps
- Alternative wählen: maximal 3 Taps
- Training beenden: maximal 3 Taps

---

## Prinzip 004 – Coach Later

Auswertungen und Empfehlungen erscheinen nach dem Training oder im Coach Mode.

Nicht während des Satzes.

---

## Prinzip 005 – Detail on Demand

Details sind verfügbar, aber nicht im Weg.

Technik, Muskelbilder, Fehler und Alternativen sind per Tap erreichbar.

---

## Prinzip 006 – Muscle Memory UI

Der Trainingsbildschirm bleibt immer gleich aufgebaut.

Nutzer soll nicht suchen müssen.

---

## Changelog

### 2.0.0
- Design Charta eingeführt.