---
project: D-Coach
document: PERFORMANCE_COACH_INTEGRATION_TASK
version: 2.5.0
status: Stable
replaces: 2.4.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - intelligence works in the background.
codex_rule: Integrate content and logic only. Do not restructure the app.
---

# Performance Coach Integration Task v2.5.0

## Aufgaben

1. JSON-Dateien laden.
2. Letzte vergleichbare Einheit je Exercise-ID finden.
3. Performance-Differenz berechnen.
4. PRs prüfen.
5. Coach-Decision aus Regeln ableiten.
6. Why-Explanation erzeugen.
7. Smart Notes nach Training erzeugen.
8. Confidence Score vorbereiten.
9. UI nur Coach Mode / Zusammenfassung erweitern.

## Fallback

Wenn keine Historie existiert:

```text
Noch keine Vergleichsdaten vorhanden.
```
