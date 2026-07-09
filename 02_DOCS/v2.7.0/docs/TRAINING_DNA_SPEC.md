---
project: D-Coach
document: TRAINING_DNA_SPEC
version: 2.7.0
status: Stable
replaces: 2.6.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - personal analytics belongs to Coach Mode, not the workout screen.
codex_rule: Integrate content and analytics only. Do not restructure the app.
---

# Training DNA Spec v2.7.0

## Zweck

D-Coach soll nach einiger Nutzung erkennen, wie der Nutzer trainiert.

## Beispiele

- bevorzugter Wiederholungsbereich
- durchschnittliche Satzpause
- Lieblingsübungen
- beste Übungskategorien
- häufig ausgelassene Split-Tage
- untertrainierte Muskelgruppen
- stagnierende Übungen

## Mindestdaten

Keine voreiligen Schlüsse.

Wenn zu wenig Daten vorhanden sind:

```text
Noch nicht genug Daten für eine belastbare Auswertung.
```

## UI

Training-DNA gehört in:

- Coach Mode
- Analytics
- Übungsdetails
- Timeline

Nicht in:

- Quick Training Mode
