---
project: D-Coach
document: STUDIO_MACHINE_MAPPING_SPEC
version: 3.1.0
status: Stable
replaces: 3.0.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - studio matching helps before/during exercise selection, not by cluttering set entry.
codex_rule: Integrate content and logic only. Do not restructure the app.
---

# Studio & Machine Mapping Spec v3.1.0

## Zweck
D-Coach soll Trainingspläne an reale Studio-Situationen anpassen können.

## Wichtig
Solange kein echter Gerätekatalog vorliegt, wird nur generisch gematcht.

## Ablauf
1. Nutzer wählt Studio.
2. App prüft bestätigte Maschinen.
3. Falls keine vorhanden: generische Maschinen nutzen.
4. Bei Gerät besetzt: Alternative mit gleichem Muskel/Bewegungsmuster anbieten.

## Training First
Im Satzscreen nur kompakt:

```text
Gerät besetzt? Alternative
```
