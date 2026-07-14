# v6.17.2 Root Cause

## Scroll-Problem

Die Muscle Map hatte interaktive SVG/Canvas-Flächen, die Pointer-Gesten zu stark als Tap behandelten. Dadurch konnte ein vertikaler Scroll auf iPhone-ähnlichen Touch-Flächen hängen bleiben oder direkt als Muskel-Auswahl interpretiert werden.

Fix:

- Pointerdown verhindert kein Scrollen mehr.
- Pointermove markiert Bewegungen ab 10px als Scroll-Geste.
- Pointerup nach Scroll stoppt die Tap-Auswertung.
- Canvas und Map-Flächen verwenden `touch-action: pan-y pinch-zoom`.

## Bauch-Fehler

Bauch/Obliques konnten über sekundäre Rollen oder Stabilisatorrollen in die Coverage rutschen, obwohl in der Session keine Bauchübung ausgeführt wurde.

Fix:

- Stabilisatorbeiträge bleiben stark reduziert.
- Bauch und Obliques werden als sekundäre/stabilisierende Zielregionen für die Premium-Coverage ignoriert.
- Premium-Subregionen werden nur aus direkter Primärlogik oder gültigen sekundären Regionen aufgebaut.

## Brust-Fehler

Brust wurde an manchen Stellen als allgemeine Gruppe und an anderen Stellen als Subregion behandelt. Dadurch konnten Dashboard, Muscle Map und Session Coach unterschiedliche Zahlen zeigen.

Fix:

- `canonicalizeMuscleGroup()` normalisiert Gruppen wie `chest`, `middle_chest`, `mg_chest_sternal` auf `mg_chest`.
- `canonicalizeMuscleRegionId()` normalisiert Subregionen wie `upper_chest` auf `mg_chest_clavicular`.
- Alle Coverage-Views nutzen `getCanonicalMuscleCoverage()`.
