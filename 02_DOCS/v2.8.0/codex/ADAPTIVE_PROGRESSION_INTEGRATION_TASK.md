---
project: D-Coach
document: ADAPTIVE_PROGRESSION_INTEGRATION_TASK
version: 2.8.0
status: Stable
replaces: 2.7.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - progression decisions stay in Coach Mode, quick training stays fast.
codex_rule: Integrate content and logic only. Do not restructure the app.
---

# Adaptive Progression Integration Task v2.8.0

## Aufgaben

1. JSON-Dateien laden.
2. Comparable Session Finder nutzen/erstellen.
3. Progressionsregeln auswerten.
4. Decision Output erzeugen.
5. Confidence Score aus v2.8 nutzen.
6. Warum-Erklärung aus v2.5-Schema erzeugen.
7. Quick Text nach Übung oder im Coach anzeigen.
8. Details nur Coach Mode.

## Fallback

Wenn zu wenig Daten:

```text
Noch nicht genug Daten für eine sichere Progression.
```
