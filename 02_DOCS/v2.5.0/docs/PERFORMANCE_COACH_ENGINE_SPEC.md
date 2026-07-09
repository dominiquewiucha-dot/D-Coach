---
project: D-Coach
document: PERFORMANCE_COACH_ENGINE_SPEC
version: 2.5.0
status: Stable
replaces: 2.4.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - intelligence works in the background.
codex_rule: Integrate content and logic only. Do not restructure the app.
---

# Performance & Coach Engine Spec v2.5.0

## Zweck

D-Coach soll aus Trainingsdaten verständliche Empfehlungen erzeugen.

## Fortschritt liegt vor, wenn

- mehr Wiederholungen bei gleichem Gewicht
- mehr Gewicht bei ähnlichen Wiederholungen
- höheres Übungsvolumen
- bessere Zielerreichung
- optional bessere RIR-Angabe

## Nicht als Fortschritt werten

- Schmerzen
- erzwungene Maximalversuche
- deutlicher Wiederholungsabfall trotz mehr Gewicht

## Warum-Button

Jede Empfehlung soll erklärbar sein:

```text
Warum?

✓ Zielwiederholungen zweimal erreicht
✓ Leistung stabil
✓ LWS-Profil spricht nicht dagegen
```

## Training First

Keine großen Auswertungen im Satzscreen.
