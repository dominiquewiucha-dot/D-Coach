---
project: D-Coach
document: PROJECT_MEMORY
document_id: PROJECT_MEMORY
version: 2.0.0
status: Stable
replaces: 1.4.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - complexity belongs in the engine, not on the workout screen.
codex_rule: Codex must verify PROJECT_MEMORY.md and MASTER_WORKFLOW.md before using this document.
---

# PROJECT_MEMORY – Foundation v2.0.0

Dieses Release setzt die neue Projektstruktur für D-Coach fest.

Es ersetzt nicht den App-Code und löscht keine bisherigen Daten.  
Es vereinheitlicht die Projektorganisation und setzt die wichtigste Produktregel fest:

> **Training First – die Komplexität gehört in die Engine, nicht auf den Trainingsbildschirm.**

---

## 1. Versionsstatus

```text
Aktuelle Foundation-Version: v2.0.0
Erwartete Vorgängerversion: v1.4.0 oder integrierte v1.x-Kette
Status: Stable
Datum: 2026-07-09
```

Codex muss prüfen:

- Sind v1.0.0 bis v1.4.0 vorhanden oder integriert?
- Ist `DCoach_FOUNDATION_MIGRATION_v2.0.0.md` berücksichtigt?
- Wurden Sprints 12–30 geprüft oder abgearbeitet?
- Gibt es lokale Nutzerdaten, die geschützt werden müssen?

Wenn v1.4.0 fehlt, muss Codex warnen, aber darf auf Nutzerbestätigung hin dieses Foundation-Release als neuen Organisationsstandard übernehmen.

---

## 2. Höchste Produktregel

```text
Design Principle 001:
Training First
```

Jede neue Funktion muss die Frage bestehen:

```text
Hilft diese Information dem Nutzer in den nächsten 5 Sekunden während des Trainings?
```

Wenn nein:

- nicht im Training-Screen anzeigen
- in Coach Mode, Detail Mode oder Einstellungen verschieben

---

## 3. App-Modi

D-Coach hat ab jetzt drei klare Modi:

### Quick Training Mode

Für das Training im Gym.

Nur:

- aktuelle Übung
- letzte Leistung
- heutige Satzfelder
- Satz speichern
- Timer
- nächste Übung
- Alternative bei Bedarf

### Detail Mode

Für Übungsinformationen.

Enthält:

- Zielmuskel
- Hilfsmuskulatur
- Ausführung
- Fehler
- Alternativen
- Verlauf
- Muskelbild

### Coach Mode

Für Auswertung nach dem Training.

Enthält:

- Fortschritt
- Volumen
- Muskelgruppen
- Recovery
- Gewichtstrend
- Empfehlungen
- Deload
- Plananpassung

---

## 4. Neue offizielle Projektstruktur

```text
00_PROJECT/
01_DATABASE/
02_DOCS/
03_CODEX/
04_ASSETS/
05_TESTS/
06_RELEASES/
07_DESIGN/
08_CONTRACTS/
09_MIGRATION/
```

---

## 5. Aktuelle offizielle Foundation-Dokumente

| Datei | Version | Zweck |
|---|---:|---|
| 00_PROJECT/PROJECT_MEMORY.md | 2.0.0 | Projektgedächtnis |
| 00_PROJECT/MASTER_WORKFLOW.md | 2.0.0 | verbindlicher Workflow |
| 00_PROJECT/VERSION.json | 2.0.0 | Maschinenlesbare Version |
| 00_PROJECT/CHANGELOG.md | 2.0.0 | Änderungslog |
| 00_PROJECT/ROADMAP.md | 2.0.0 | Roadmap |
| 07_DESIGN/DESIGN_CHARTER.md | 2.0.0 | Training First Charta |
| 07_DESIGN/TRAINING_MODE_UX.md | 2.0.0 | Trainingsbildschirm |
| 07_DESIGN/COACH_MODE_UX.md | 2.0.0 | Coach-Auswertung |
| 08_CONTRACTS/UI_VISIBILITY_CONTRACT.md | 2.0.0 | Was darf wann sichtbar sein |
| 03_CODEX/CODEX_START.md | 2.0.0 | Startanweisung |
| 03_CODEX/Sprint31_Foundation_Reorganization.md | 2.0.0 | Strukturmigration |
| 03_CODEX/Sprint32_Training_First_UI.md | 2.0.0 | Trainingsmodus vereinfachen |
| 03_CODEX/Sprint33_Coach_Mode_Separation.md | 2.0.0 | Auswertung auslagern |
| 05_TESTS/TRAINING_FIRST_QA.md | 2.0.0 | UX-Tests |

---

## 6. Codex Arbeitsgrenze

Codex darf nach diesem Release selbstständig:

- die Dokumentstruktur anlegen
- alte v1.x-Dokumente archivieren oder referenzieren
- Training-Screen vereinfachen
- Coach-/Detail-Bereiche trennen
- UI nach Training-First-Regeln prüfen
- Tests ergänzen

Codex darf nicht:

- Nutzerdaten löschen
- Trainingslogik frei erfinden
- Exercise-IDs ändern
- alte Workouts unlesbar machen
- während des Trainings komplexe Statistiken anzeigen

---

## 7. Stopppunkt

Nach Sprint 33 soll Codex stoppen und berichten:

- Welche Struktur wurde angelegt?
- Ist der Training-Screen vereinfacht?
- Welche Informationen wurden in Coach/Detail ausgelagert?
- Gibt es Risiken?
- Welche Daten fehlen?

---

## 8. Changelog

### 2.0.0
- Foundation-Struktur eingeführt.
- Training First als oberstes Prinzip definiert.
- Quick Training, Detail und Coach Mode getrennt.
- Sichtbarkeitsregeln eingeführt.
- Codex-Sprints 31–33 erstellt.