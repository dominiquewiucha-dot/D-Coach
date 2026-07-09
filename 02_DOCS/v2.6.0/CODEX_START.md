---
project: D-Coach
document: CODEX_START
version: 2.6.0
status: Stable
replaces: 2.5.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - ratings guide decisions in the background.
codex_rule: Integrate content and logic only. Do not restructure the app.
---

# CODEX_START – Content Release v2.6.0 Exercise Rating Engine

## Aufgabe
Diese Dateien integrieren:

```text
database/exercise_rating_schema_v2.6.0.json
database/exercise_rating_rules_v2.6.0.json
database/exercise_ratings_seed_v2.6.0.json
database/alternative_explanation_rules_v2.6.0.json
```

## Umsetzung
1. Dateien nach `/data/` kopieren oder laden.
2. Ratings per exerciseId verknüpfen.
3. Fallback, wenn Rating fehlt.
4. Alternative-Ranking optional erweitern.
5. Übungsdetails um Rating-Sektion ergänzen.
6. Coach-Erklärung bei Alternative ergänzen.
7. Quick Training Mode unverändert lassen.

## Nicht machen
- keine Architekturänderung
- keine Ordnerstruktur ändern
- keine Ratings im Satzscreen
