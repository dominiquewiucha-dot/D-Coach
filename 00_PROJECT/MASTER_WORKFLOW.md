---
project: D-Coach
document: MASTER_WORKFLOW
document_id: MASTER_WORKFLOW
version: 2.0.0
status: Stable
replaces: 1.4.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - complexity belongs in the engine, not on the workout screen.
codex_rule: Codex must verify PROJECT_MEMORY.md and MASTER_WORKFLOW.md before using this document.
---

# MASTER_WORKFLOW – D-Coach v2.0.0

Dieses Dokument ist ab Foundation v2.0.0 verbindlich.

---

## 1. Pflichtreihenfolge für Codex

Vor jeder Arbeit:

1. `00_PROJECT/PROJECT_MEMORY.md`
2. `00_PROJECT/MASTER_WORKFLOW.md`
3. `03_CODEX/CODEX_START.md`
4. relevante Sprint-Datei
5. relevante Contract-Datei
6. relevante Design-Datei

---

## 2. Entwicklungsprinzip

```text
Komplexe Logik im Hintergrund.
Einfache Bedienung im Training.
```

Codex muss neue Funktionen immer zuerst einem Modus zuordnen:

- Quick Training Mode
- Detail Mode
- Coach Mode
- Settings/Admin

Wenn eine Funktion nicht eindeutig zugeordnet werden kann, muss Codex fragen oder sie in Coach/Detail verschieben, nicht in den Training-Screen.

---

## 3. Sprint-Regel

Codex arbeitet Sprint für Sprint.

Aktuell freigegeben:

```text
Sprint 31 – Foundation Reorganization
Sprint 32 – Training First UI
Sprint 33 – Coach Mode Separation
```

Nach Sprint 33 stoppen und Bericht erstellen.

---

## 4. Datenregel

Nutzerdaten sind wichtiger als neue Features.

Nie löschen:

- Workouts
- Sets
- Gewichte
- Bodyweight
- Journal
- Custom Exercises
- Machine Settings
- Plan History

---

## 5. UI-Regel

Wenn eine Information während des Satzes nicht sofort hilft, gehört sie nicht in den Training-Screen.

---

## 6. Changelog

### 2.0.0
- Neuer Master Workflow eingeführt.
- Training First als feste Arbeitsregel ergänzt.