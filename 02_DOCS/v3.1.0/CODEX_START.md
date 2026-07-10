---
project: D-Coach
document: CODEX_START
version: 3.1.0
status: Stable
replaces: 3.0.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - studio matching helps before/during exercise selection, not by cluttering set entry.
codex_rule: Integrate content and logic only. Do not restructure the app.
---

# CODEX_START – Content Release v3.1.0 Studio & Machine Mapping

## Aufgabe
Neue Dateien integrieren:

```text
database/machine_catalog_schema_v3.1.0.json
database/studio_profile_schema_v3.1.0.json
database/generic_machine_catalog_v3.1.0.json
database/studio_speed_fitness_seed_v3.1.0.json
database/machine_matching_rules_v3.1.0.json
database/machine_mapping_texts_v3.1.0.json
```

## Umsetzung
1. Daten nach `/data/` übernehmen.
2. Studio-Profil Speed Fitness als unbestätigt laden.
3. Generische Maschinen für Matching nutzen.
4. Nutzer kann Geräte später bestätigen.
5. Gerät-besetzt-Alternative mit v2.9 verbinden.
6. Keine Hersteller/Modelle anzeigen, wenn nicht bestätigt.
7. Quick Training nur kompakt erweitern: Gerät besetzt? Alternative.

## Nicht machen
- keine Architekturänderung
- keine konkreten Speed-Fitness-Geräte erfinden
- keine Nutzerdaten löschen
