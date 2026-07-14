# D-Coach v6.17.2 Handoff

Status: umgesetzt und lokal verifiziert.

## Versionen

- App: pwa-v70
- Backup-Format: 6.17.2
- Cache: dcoach-pwa-v70
- Storage-Zielversion bleibt: 6.7.0
- Muscle Mapping: muscle-mapping-v3

## Umgesetzt

- Muscle Map blockiert vertikales Scrollen nicht mehr durch aggressive Pointer-Events.
- Touch-Gesten unterscheiden jetzt Tap und Scroll.
- MuscleMapJS-Canvas verwendet `touch-action: pan-y pinch-zoom`.
- Coverage-Berechnung wurde auf eine zentrale Canonical-Coverage-API umgestellt.
- Brust-Aliase werden sauber auf Brust-Gruppe und Brust-Subregionen verteilt.
- Bauch/Obliques werden nicht mehr durch Stabilisator- oder Hilfsrollen falsch hochgerechnet.
- Production-Muscle-Map zeigt "Muskelabdeckung" statt Coach-Konfidenz.
- Diagnose-Export `DCoach_v6.17.2_MuscleCoverage_Diagnostics.json` wurde ergänzt.

## Validierung

- `node --check app.js`: bestanden
- `node --check production/production-muscle-map.js`: bestanden
- Alle vorhandenen Tests: bestanden
- Neuer Test: `tests/v6_17_2_musclemap_scroll_coverage.test.js`: bestanden
- Browser-Screenshots: `design-screenshots/v6.17.2/`

## Manuelle iPhone-Prüfung

Nicht auf echtem iPhone ausgeführt. Geprüft wurde per Playwright/Edge mit mobilem 390px-Viewport.

## Nicht begonnen

- Kein v7-Feature.
- Keine Änderung an Storage-Schlüsseln.
- Keine Änderung an Import/Export-Struktur außer Backup-Version.
