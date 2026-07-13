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

# MuscleMapJS Prototype Specification

## Prototyp-Route

Bevorzugt:

```text
/debug/muscle-map-prototype
```

Eine bestehende Debug-Struktur verwenden, falls vorhanden. Die Route darf nicht in der normalen Bottom Navigation erscheinen.

## Darstellung

Pflicht:

- männliches Modell,
- Vorderansicht,
- Rückansicht,
- Körperhöhe auf Smartphones mindestens 380 px,
- empfohlen 430–520 px,
- keine abgeschnittenen Gliedmaßen,
- keine horizontale Scrollleiste.

## Heatmap

```text
0 %          #263241
1–35 %       Gelb
36–70 %      Gelb-Orange
71–100 %     Orange
101–130 %    Rot
über 130 %   Dunkelrot
```

Die restliche App bleibt blau.

## Auswahl

- Klick auf Region wählt D-Coach-Muskel.
- Beide Körperseiten desselben Muskels werden gemeinsam markiert.
- Gewählte Region erhält helle Kontur und kleinen Glow.
- Andere Regionen werden auf ungefähr 30 % Deckkraft reduziert.
- Detailkarte zeigt Today, Week, Month, Quell-ID und D-Coach-ID.

## Vergleich

Auf Mobilgeräten als Umschalter:

```text
Aktuelle Map | MuscleMapJS
```

Nicht beide Ansichten erzwungen nebeneinander darstellen.

## Bottom Navigation

Die Navigation muss während des Scrollens fest am unteren Viewport bleiben. Sie darf nicht Teil eines transformierten oder scrollbaren Containers sein und keinen Inhalt überdecken.
