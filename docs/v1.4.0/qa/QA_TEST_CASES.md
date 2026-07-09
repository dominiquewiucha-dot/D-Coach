---
project: D-Coach
document: QA_TEST_CASES
document_id: QA_TEST_CASES
version: 1.4.0
status: Stable
replaces: —
date: 2026-07-09
owner: ChatGPT
codex_rule: Codex must verify PROJECT_MEMORY.md before using this document.
---

# QA Test Cases v1.4.0

## Test 1 – Training speichern

1. App öffnen.
2. Training starten.
3. Satzwerte eintragen.
4. Training beenden.
5. App neu laden.
6. Letzte Leistung prüfen.

Erwartung: Letzte Leistung sichtbar.

## Test 2 – Backup

1. Testdaten erzeugen.
2. Backup exportieren.
3. Backup-Datei prüfen.
4. Import-Vorschau öffnen.

Erwartung: Keine Daten werden ohne Bestätigung überschrieben.

## Test 3 – QR Plan

1. kleinen Plan exportieren.
2. QR/Text erzeugen.
3. Import-Vorschau öffnen.
4. Plan speichern.

Erwartung: Plan erscheint in Bibliothek.

## Test 4 – Offline

1. App laden.
2. Netzwerk deaktivieren.
3. App neu öffnen.
4. Training öffnen.

Erwartung: App bleibt nutzbar.

## Changelog

### 1.4.0
- QA-Testfälle ergänzt.