# D-Coach v6.15 Audit Report

Stand: 2026-07-14
Branch: master
Commit: f35a404
App-Version: pwa-v65
Storage-Version: 6.7.0
Service Worker Cache: dcoach-pwa-v65

## Scope

Break 1 nach v6.15: Audit und Findings, keine Reparaturen.

Geprueft:
- Repository-Status, Versionen, Service Worker, Tests
- Navigation: Training | Coach | D | Plaene | Tracking
- Daily Check-in, Dashboard, Training, Warm-up, Timer, Draft, Abschluss
- Coach, Vorschlag pruefen, Apply/Reject/Undo
- Tracking, Gewicht, Journal, Trainingshistorie, Muskelmapping, Uebungen, Geraete
- Life-Fitness-Scanner, Backup/Restore, Reset, Offline/PWA

Nicht voll visuell geprueft:
- iPhone-Screenshots/Browser-Interaktion. Der In-App-Browser konnte in dieser Umgebung keinen lokalen Tab attachen.

## Teststatus

Ausgefuehrt:
- `node --check app.js`
- alle `tests/*.test.js`

Ergebnis:
- Alle Tests bestanden.

## Findings

### Critical 1: Backup-Import kann lokalen Trainingsentwurf loeschen

Datei: `app.js`
Zeile: 7909

Aktuell:
```js
storage.activeWorkoutDraft = backup.activeWorkoutDraft || null;
```

Problem:
Wenn lokal ein offenes Training existiert und ein Backup ohne `activeWorkoutDraft` importiert wird, wird der lokale Entwurf geloescht. Das widerspricht dem Merge-Verhalten des Imports und kann ein nicht gespeichertes Training verlieren.

Betroffene Funktion:
- Backup/Restore
- Workout Draft
- Trainingsintegritaet

Empfohlene Reparatur:
Nur importierten Draft uebernehmen, wenn er existiert und gueltig ist. Lokalen Draft ansonsten behalten. Bei Konflikt Nutzer fragen oder lokalen Draft priorisieren.

### Critical 2: Reset-Bestaetigung untertreibt Datenverlust

Datei: `app.js`
Zeilen: 8469-8476

Aktuell bestaetigt der Dialog nur:
```text
Alle Trainings- und Gewichtsdaten loeschen?
```

Tatsaechlich geloescht werden auch:
- Journal
- Geraeteeinstellungen
- eigene Plaene
- eigene Uebungen
- persoenliche Daten
- offene Trainingsentwuerfe

Problem:
Der Nutzer kann nicht korrekt einschaetzen, welche Daten geloescht werden. Das ist Datenverlust durch falsche Bestaetigung.

Empfohlene Reparatur:
Dialogtext vollstaendig machen oder Reset in getrennte Aktionen aufteilen. Optional Backup-Pflicht vor Reset.

### High 1: Training Start Flow blockiert nach uebersprungenem Check-in

Datei: `app.js`
Zeilen: 1849, 6538-6544

Problem:
`skipDailyCheckin()` speichert den Tagesstatus als `skipped`, aber `startTrainingFlow()` akzeptiert nur `completed`.

Folge:
Nach "Fuer heute ueberspringen" kann "Training starten" den Check-in erneut oeffnen, statt zum Plan/Draft/Warm-up weiterzugehen.

Betroffene Funktion:
- Daily Check-in
- Training starten
- Tagesworkflow

Empfohlene Reparatur:
`skipped` fuer den Training-Start als erledigten Tagesstatus behandeln oder dem Nutzer eine explizite "trotzdem trainieren"-Option geben.

### High 2: Mehrere gespeicherte Geraetezuordnungen sind nicht alle oeffnbar

Datei: `app.js`
Zeilen: 7528, 7605, 8398

Problem:
`data-open-scanned-exercise` wird mehrfach gerendert, aber nur mit `querySelector` fuer das erste Element gebunden.

Folge:
Bei mehreren gespeicherten Life-Fitness-Zuordnungen ist nur ein Eintrag direkt oeffnbar. Das bricht den Geraete-/Scanner-Workflow teilweise.

Empfohlene Reparatur:
Auf `querySelectorAll("[data-open-scanned-exercise]")` wechseln und alle Buttons binden.

### Medium 1: Dashboard enthaelt unerreichbaren Alt-Return

Datei: `app.js`
Ab `renderDashboard()`

Problem:
Nach dem neuen kompakten Dashboard-Return existiert noch der alte Dashboard-Return im selben Funktionskoerper. Er ist nicht erreichbar, bleibt aber wartungsgefaehrlich.

Folge:
Kein aktueller Nutzerfehler, aber hohes Risiko fuer spaetere falsche Aenderungen und Tests, die alte Strings noch finden.

Empfohlene Reparatur:
Unerreichbaren alten Block entfernen, nachdem Break 2 die Critical/High-Fixes erledigt.

### Medium 2: Backup-Version ist veraltet

Datei: `app.js`
Zeile: 7804

Aktuell:
```js
backupVersion: "6.11.0"
```

Problem:
Backups aus pwa-v65 melden weiterhin Backup-Version 6.11.0, obwohl Daily Check-ins, Scanner-Zuordnungen, Coach-Proposals und v6.14-Daten laengst enthalten sind.

Folge:
Handoff/Support/Restore-Analyse kann falsche Version annehmen.

Empfohlene Reparatur:
Backup-Version auf aktuelle App- oder Schema-Version anheben, ohne alte Backups abzulehnen.

### UX 1: Training startet nach abgeschlossenem Check-in nicht automatisch weiter

Datei: `app.js`
Zeilen: 1864-1870, 6538-6565

Problem:
Wenn der Nutzer aus "Training starten" in den Check-in geschickt wird und diesen abschliesst, landet er wieder auf dem Dashboard. Der Startflow merkt sich nicht, dass danach Training weitergehen sollte.

Folge:
Nutzer muss erneut "Training starten" druecken. Kein Datenverlust, aber unnötiger Bruch im Hauptworkflow.

Empfohlene Reparatur:
Quelle `training` im Daily-Check-in-Draft auswerten und nach Abschluss automatisch `startTrainingFlow()` fortsetzen.

## Funktionsinventar Kurzstatus

OK:
- Bottom Navigation Reihenfolge und Labels
- Service Worker Version pwa-v65
- Test-Suite
- Workout Draft Persistenz bei Satz-/Feld-Eingaben
- Abschluss speichert Sessions und loescht Draft
- Coach Proposal Apply/Reject/Undo vorhanden
- Muskelmapping-Route und Scroll-Fixes testabgedeckt
- Backup enthaelt neue v6.13/v6.14-Datenfelder

Risiko:
- Backup-Import bei offenem Training
- Reset-App-Dialog
- Check-in Skip im Training-Startflow
- Scanner-Mapping-Liste mit nur erstem Open-Handler
- Unerreichbarer Dashboard-Altcode

## Break-1-Entscheidung

Critical/High Findings vorhanden.

Naechster Schritt nach Freigabe:
Break 2 ausfuehren und nur Critical/High reparieren:
1. Backup-Import Draft nicht loeschen
2. Reset-Dialog korrekt und sicher machen
3. Training Start Flow mit skipped Check-in reparieren
4. Alle `data-open-scanned-exercise` Buttons binden

v6.16 bleibt blockiert, bis v6.15 inklusive Handoff abgeschlossen ist.
