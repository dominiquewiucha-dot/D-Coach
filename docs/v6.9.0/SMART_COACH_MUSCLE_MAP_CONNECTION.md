---
project: D-Coach
version: 6.9.0
status: Planned
replaces: 6.8.0
recommended_mode: Hoch
date: 2026-07-13
execution_gate: Start only after v6.8 visual approval.
codex_rule: Integrate approved male MuscleMapJS model without restructuring the app.
resource_rule: Use Hoch and stop after tests, screenshots, commit and push.
---

# Smart Coach Verbindung

Datenfluss:

Workout History → Muscle Coverage → interne D-Coach-Muskel-ID → Adapter → visuelle Region.

Smart Coach darf niemals mit externen MuscleMapJS-IDs rechnen.

Sicherheits- und LWS-Regeln haben Vorrang vor Coverage-Optimierung.
