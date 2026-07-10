---
project: D-Coach
document: MUSCLE_MAP_UI_FLOW
version: 3.0.0
status: Stable
replaces: 2.9.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - muscle map belongs to Coach/Dashboard/Analysis, not the set-entry screen.
codex_rule: Integrate content and UI behavior only. Do not restructure the app.
---

# Muscle Map UI Flow v3.0.0

## Liste → Körper
Nutzer tippt auf Muskel in Liste → selectedMuscleId → Muskel am Körper leuchtet → Detailkarte öffnet.

## Körper → Liste
Nutzer tippt auf Muskel im SVG → selectedMuscleId → Liste scrollt → Detailkarte öffnet.

## Kein Muskel ausgewählt
Alle Muskeln nach Coverage einfärben.

## Muskel ausgewählt
Ausgewählter Muskel hell, andere gedimmt.
