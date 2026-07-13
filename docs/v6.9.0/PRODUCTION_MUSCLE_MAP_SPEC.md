---
project: D-Coach
version: 6.9.0
status: Planned
replaces: 6.8.0
recommended_mode: Hoch
date: 2026-07-13
execution_gate: Start only after v6.8 visual approval.
codex_rule: Integrate approved male MuscleMapJS model without restructuring the app.
resource_rule: Use Hoch and stop after tests, screenshots, commit and push.
---

# Production Muscle Map Specification

## Screen-Reihenfolge

1. Zeitraum
2. Front/Back
3. große Körperdarstellung
4. Gesamt-Coverage
5. ausgewählter Muskel
6. Detailkarte
7. Muskelgruppenliste
8. Smart-Coach-Empfehlung

## Darstellung

- männlicher Körper,
- Smartphone-Höhe 430–520 px, nie unter 380 px,
- keine abgeschnittenen Körperteile,
- keine horizontale Scrollleiste,
- Bottom Navigation überdeckt nichts.

## Heatmap

- 0 %: dunkles neutrales Grau
- 1–35 %: Gelb
- 36–70 %: Gelb-Orange
- 71–100 %: Orange
- 101–130 %: Rot
- >130 %: Dunkelrot

## Auswahl

- beide Körperseiten gemeinsam,
- helle Kontur,
- subtiler Glow,
- andere Regionen abdunkeln.

## Detailansicht

- Today, Week, Month, Trend
- Zielbereich
- Hauptübungen
- Hilfsmuskeln
- Coach-Empfehlung
- Why
- Confidence
- Risikohinweise
