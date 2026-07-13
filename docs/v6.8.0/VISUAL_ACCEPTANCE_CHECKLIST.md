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

# Visuelle Abnahme

Codex muss Screenshots liefern:

1. Frontansicht bei 390 px.
2. Rückansicht bei 390 px.
3. Brust ausgewählt.
4. Lat ausgewählt.
5. aktuelle Map im Vergleich zum Prototyp.
6. Seite ganz unten mit stabiler Bottom Navigation.

## Nutzerentscheidung

### Freigabe

Nur bei sichtbarer qualitativer Verbesserung:

```text
v6.9 Production Muscle Map Integration
Modus: Hoch
```

### Keine Freigabe

- keine produktive Integration,
- alternatives Asset testen,
- keine weiteren Tokens für dieselbe ungeeignete Darstellung verschwenden.
