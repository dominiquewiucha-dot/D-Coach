---
project: D-Coach
document: PERSONAL_LAYER_INTEGRATION_TASK
version: 2.2.0
status: Stable
replaces: 2.1.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - personalization works in the background, not as screen clutter.
codex_rule: Integrate content only. Do not restructure the app.
---

# Personal Layer Integration Task v2.2.0

## Ziel

Codex integriert persönliche Regeln ohne Architekturänderung.

## Aufgaben

1. Profil-Schema laden.
2. Seed-Profil optional importieren.
3. Profileinstellungen in bestehende Settings integrieren oder als eigenes Objekt speichern.
4. Personalisierungsregeln bei Alternativen nutzen.
5. AvoidExerciseIds beim Plan/Alternative-Ranking berücksichtigen.
6. PreferredExerciseIds höher ranken.
7. Quick Training Mode als Standard respektieren.
8. LWS-Hinweise kompakt halten.

## Fallback

Wenn keine persönliche Schicht geladen ist:

- App nutzt allgemeine Regeln
- keine Fehler anzeigen
