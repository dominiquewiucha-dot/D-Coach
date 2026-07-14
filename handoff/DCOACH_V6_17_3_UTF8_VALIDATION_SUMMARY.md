# D-Coach v6.17.3 UTF-8 Validation Handoff

Status: umgesetzt und lokal verifiziert.

## Versionen

- Ausgangscommit: b452c44cb3bb5aa923f478fb3029877219e40924
- App: pwa-v71
- Cache: dcoach-pwa-v71
- Backup-Format: 6.17.2
- Storage-Migration: keine

## Root Cause

In `app.js` waren sichtbare deutsche Texte teils als Mojibake gespeichert, z. B. `PlÃ¤ne`, `Ãœbungen`, `Â·`, und teils als ASCII-Ersatzschreibweise, z. B. `Uebungen`, `Geraete`, `fuer`, `Zurueck`.

## Ergebnis

- Mojibake-Codepoints in `app.js`: 109 vorher, 0 nachher
- bekannte ASCII-UI-Treffer in `app.js`: 361 vorher, 0 nachher
- Technische IDs, Storage Keys, Routen und Schemafelder wurden nicht umbenannt.
- Backup-Format bleibt unverändert bei 6.17.2.

## Geänderte Bereiche

- Navigation und Bottom Navigation
- Daily Check-in
- Training und Session Coach
- Coach Dashboard
- Pläne
- Tracking/Profile Shortcuts
- Scanner/Geräte
- Backup/Restore/Reset
- Debug- und Diagnose-Texte

## Tests

- `node --check app.js`: bestanden
- `node --check production/production-muscle-map.js`: bestanden
- komplette Testsuite: bestanden
- neuer Test: `tests/v6_17_3_utf8_localization.test.js`
- `git diff --check`: bestanden

## Screenshots

Screenshots liegen unter `design-screenshots/v6.17.3/`.

## Offene Risiken

- Kein echter iPhone/Safari-Gerätetest ausgeführt.
- Einige Kacheln umbrechen optisch unschön auf 390px, z. B. lange Wörter in Tracking-Kacheln. Das ist ein Layout-Thema, nicht Teil dieses UTF-8-Fixes.
