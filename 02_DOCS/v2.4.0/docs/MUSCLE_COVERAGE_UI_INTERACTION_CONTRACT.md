---
project: D-Coach
document: MUSCLE_COVERAGE_UI_INTERACTION_CONTRACT
version: 2.4.0
status: Stable
replaces: 2.3.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - analysis belongs to Coach Mode, not the set-entry screen.
codex_rule: Integrate content only. Do not restructure the app.
---

# Muscle Coverage UI Interaction Contract v2.4.0

## Zweck

Dieses Dokument beschreibt, wie Liste und Körperansicht verbunden werden.

---

# State

```js
selectedMuscleId: string | null
coverageMode: "today" | "week" | "trend"
bodyView: "front" | "back"
```

---

# Events

## onMuscleListClick(muscleId)

```js
selectedMuscleId = muscleId
openMuscleDetail(muscleId)
highlightBodyMuscle(muscleId)
```

## onBodyMuscleClick(muscleId)

```js
selectedMuscleId = muscleId
scrollListToMuscle(muscleId)
openMuscleDetail(muscleId)
```

## onCoverageModeChange(mode)

```js
coverageMode = mode
recalculateCoverage(mode)
```

---

# UI Verhalten

## Kein Muskel ausgewählt

- alle Muskeln nach Belastung einfärben
- Liste nach Prozent sortieren oder nach Muskelgruppe gruppieren

## Muskel ausgewählt

- gewählter Muskel leuchtet
- andere Muskeln 30–40 % dunkler
- Detailkarte zeigt Zahlen und beteiligte Übungen

## Muskel ohne Daten

- sehr dunkel darstellen
- Text: "Noch nicht belastet"

---

# Quick Training Mode

Nicht verwenden.

Nur Coach/Dashboard/Analyse.

---

# Codex-Regel

Wenn SVG-Klickflächen fehlen, MVP mit Liste zuerst bauen.

Körperansicht darf zunächst über Overlay-SVG oder einfache klickbare Bereiche laufen.

App darf nicht blockieren, wenn Body Map noch nicht perfekt ist.
