---
project: D-Coach
document: PERSONAL_LAYER_SPEC
version: 2.2.0
status: Stable
replaces: 2.1.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - personalization works in the background, not as screen clutter.
codex_rule: Integrate content only. Do not restructure the app.
---

# Personal Layer Spec v2.2.0

## Zweck

Die persönliche Schicht individualisiert D-Coach, ohne die allgemeine Knowledge Base zu verändern.

## Prinzip

Allgemeine Daten bleiben allgemein. Persönliche Regeln werden darübergelegt.

## Beispiel

Eine Übung kann allgemein gut sein.

Für ein LWS-Profil kann sie trotzdem:

- niedriger gerankt
- mit Hinweis versehen
- durch Alternative ersetzt

werden.

## Training First

Im Training nur kompakt anzeigen:

```text
LWS-Hinweis: Alternative empfohlen.
```

Ausführliche Begründung gehört in Coach Mode oder Übungsdetails.
