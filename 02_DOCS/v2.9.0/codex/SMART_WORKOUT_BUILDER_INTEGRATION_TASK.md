---
project: D-Coach
document: SMART_WORKOUT_BUILDER_INTEGRATION_TASK
version: 2.9.0
status: Stable
replaces: 2.8.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - workout building happens before training, not during set entry.
codex_rule: Integrate content and logic only. Do not restructure the app.
---

# Smart Workout Builder Integration Task v2.9.0

## Aufgaben

1. JSON-Dateien laden.
2. Template-Auswahl Push/Pull/Legs ermöglichen.
3. Workout-Vorschlag aus Slots erzeugen.
4. Übungen über vorhandene Datenbank matchen.
5. LWS-/Avoid-Listen respektieren.
6. Zeitlimit durch optionale Übungen berücksichtigen.
7. Gerät-besetzt-Substitution anbieten.
8. Builder-Result vor Trainingsstart anzeigen.
9. Quick Training unverändert lassen.

## Fallback

Wenn keine passenden Übungen gefunden werden:

```text
Keine passende Übung gefunden. Bitte manuell auswählen.
```
