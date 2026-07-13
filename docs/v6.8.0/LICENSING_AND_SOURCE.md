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

# Lizenz- und Quellenprüfung

## Erwartete Quelle

Repository:

```text
abdofallah/MuscleMapJS
```

## Erwartete Lizenz

MIT.

## Pflichtprüfung durch Codex

1. `LICENSE` im tatsächlich verwendeten Commit öffnen.
2. Copyright-Inhaber und Lizenztext prüfen.
3. Commit oder Tag dokumentieren.
4. Lizenzhinweis in `THIRD_PARTY_LICENSES.md` übernehmen.
5. Keine Lizenzdatei entfernen.
6. Keine Bibliotheksdateien ohne Lizenzhinweis verteilen.

Bei fehlender oder widersprüchlicher Lizenz:

**STOPPEN.**

## Einbindung

Bevorzugt:

- Git-Submodule oder
- lokal vendorte Quelle mit festgehaltenem Commit.

Keine unversionierte Remote-Laufzeitabhängigkeit.
