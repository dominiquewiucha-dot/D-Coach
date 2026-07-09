---
project: D-Coach
document: TRAINING_MODE_UX
document_id: TRAINING_MODE_UX
version: 2.0.0
status: Stable
replaces: 1.4.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - complexity belongs in the engine, not on the workout screen.
codex_rule: Codex must verify PROJECT_MEMORY.md and MASTER_WORKFLOW.md before using this document.
---

# TRAINING_MODE_UX – Quick Training Mode

## Ziel

Der Nutzer soll im Gym in wenigen Sekunden einen Satz eintragen können.

---

## Erlaubte Inhalte im Training-Screen

### Immer sichtbar

1. Trainingsfortschritt
2. aktuelle Übung
3. Ziel-Wiederholungen
4. letzte Leistung
5. heutige Satzfelder
6. Satz speichern
7. Pause/Timer
8. nächste Übung

### Nur bei Bedarf sichtbar

- LWS-Hinweis
- Alternative anzeigen
- Notizfeld
- Übung überspringen
- Training beenden

---

## Nicht im Training-Screen

- große Muskelkarten
- lange Techniktexte
- Wochenstatistik
- Coach-Analyse
- Plan-Generator
- Debug-Panel
- Backup/Export
- vollständige Historie
- umfangreiche Charts

---

## Layout-Vorschlag

```text
[Push · Übung 2/6]

Schrägbank Brustpresse
Brust · Trizeps · Schulter

Letztes Mal:
60 kg × 10 / 9 / 8

Heute:
Satz 1   60 kg   10   [✓]
Satz 2   60 kg   __   [ ]
Satz 3   60 kg   __   [ ]

[ Satz speichern ]

Pause 01:30

[Alternative]          [Nächste Übung]
```

---

## Eingabe-Regeln

- Gewicht mit Plus/Minus und direkter Eingabe
- Wiederholungen große Zahlenfelder
- letzte Gewichte vorbefüllen
- keine Pflichtfelder außer Gewicht/Reps für abgeschlossene Sätze
- RIR optional und einklappbar

---

## Changelog

### 2.0.0
- Quick Training Mode spezifiziert.