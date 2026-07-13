---
project: D-Coach
version: 6.8.0
status: Planned
replaces: 6.7.0
recommended_mode: Mittel
date: 2026-07-13
owner: ChatGPT
execution_gate: Start only after v6.7.0 is integrated, tested, committed and pushed.
codex_rule: Prototype only. Do not replace the production Muscle Map before visual approval.
resource_rule: Use the lowest sufficient mode and stop after the defined checkpoint.
---

# Tests

## Funktional

- männliche Vorderansicht lädt,
- männliche Rückansicht lädt,
- Front/Back-Wechsel funktioniert,
- Muskel kann gewählt werden,
- beide Seiten werden gemeinsam markiert,
- Detailkarte wird aktualisiert,
- Fallback funktioniert,
- Komponente räumt Event Listener beim Unmount auf.

## Responsive

Testen bei:

- 320 px,
- 375 px,
- 390 px,
- 430 px,
- 768 px.

## Visuell

- Körper ist als männlicher Mensch erkennbar,
- keine Körperteile abgeschnitten,
- Heatmap zeigt klar Gelb, Orange, Rot und Dunkelrot,
- Bottom Navigation bleibt beim Scrollen unten,
- finaler Inhalt wird nicht von der Navigation überdeckt.

## Regression

- v6.1 Weekly Coach,
- v6.2 Session Coach,
- v6.3 Coach Feedback,
- v6.4 Plateau Coach,
- v6.5 Deload Coach,
- v6.6 Mesocycle Coach,
- v6.7 Release Candidate,
- Training,
- Offline-Start,
- Backup/Restore.
