---
project: D-Coach
document: SMART_WORKOUT_BUILDER_SPEC
version: 2.9.0
status: Stable
replaces: 2.8.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - workout building happens before training, not during set entry.
codex_rule: Integrate content and logic only. Do not restructure the app.
---

# Smart Workout Builder Spec v2.9.0

## Zweck

D-Coach soll einen Trainingstag sinnvoll vorbereiten oder anpassen.

## Wichtig

Der Builder arbeitet vor dem Training.

Während des Trainings soll er nur helfen, wenn:

- Gerät besetzt
- Übung unpassend
- Zeit knapp

## Keine Geräte erfinden

Wenn Speed Fitness aktiv ist, aber kein exakter Gerätekatalog vorhanden ist:

- generische Maschinen/Kabel-Alternativen nutzen
- keine konkreten Herstellergeräte behaupten

## Priorität

1. Sicherheit / LWS-Profil
2. Hauptmuskeln des Tages
3. Zeitlimit
4. persönliche Historie
5. Muscle Coverage
6. Exercise Rating

## Training First

Im Satzscreen maximal:

```text
Gerät besetzt? Alternative
```

Keine komplexe Planung.
