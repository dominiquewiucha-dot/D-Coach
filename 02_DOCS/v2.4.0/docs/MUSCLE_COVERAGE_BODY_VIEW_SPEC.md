---
project: D-Coach
document: MUSCLE_COVERAGE_BODY_VIEW_SPEC
version: 2.4.0
status: Stable
replaces: 2.3.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - analysis belongs to Coach Mode, not the set-entry screen.
codex_rule: Integrate content only. Do not restructure the app.
---

# Muscle Coverage Body View v2.4.0

## Ziel

Die Muscle Coverage soll nicht nur als Liste sichtbar sein, sondern auch als Körperansicht.

Der Nutzer soll sehen können:

- welcher Muskel belastet wurde
- wie stark er heute belastet wurde
- wie stark er diese Woche belastet wurde
- welche Muskeln noch fehlen
- Details zu einem einzelnen Muskel per Tap

## Grundidee

Es gibt zwei synchronisierte Ansichten:

1. Körperansicht
2. Listenansicht

Wenn der Nutzer in der Liste auf einen Muskel tippt, wird dieser Muskel am Körper farblich hervorgehoben.

Wenn der Nutzer am Körper auf einen Muskel tippt, wird in der Liste dieser Muskel geöffnet.

---

# Ansichten

## 1. Heute

Zeigt Belastung aus der aktuellen Trainingseinheit.

Beispiel:

```text
Brust 46 %
Trizeps 32 %
Vordere Schulter 29 %
```

## 2. Woche

Standardansicht.

Zeigt Wochenabdeckung im Verhältnis zum Plan-Ziel.

Beispiel:

```text
Brust 66 %
Lat 61 %
Trizeps 52 %
Quadrizeps 0 %
```

## 3. Einzelansicht Muskel

Wenn der Nutzer auf "Brust" klickt:

```text
Brust

Diese Woche
66 %

Heute
46 %

Hauptübungen
Brustpresse Maschine
Schrägbank Brustpresse
Kabel-Flys

Hilfsbelastung durch
Schulterpresse 15 %

Status
Noch nicht vollständig ausgelastet
```

---

# Farbkonzept

D-Coach bleibt blau.

Keine grüne Hauptfarbe.

## Belastungsfarben

```text
0 %       #1B263B  sehr dunkel / nicht trainiert
1-39 %    #1E3A8A  dunkles Blau
40-69 %   #2563EB  Primärblau
70-100 %  #60A5FA  helles Blau
101-120 % #93C5FD  sehr helles Blau
>120 %    #F59E0B  Warn-Orange
```

## Bedeutung

- Grau/Dunkelblau = kaum belastet
- Blau = normal belastet
- Hellblau = Ziel erreicht
- Orange = deutlich über Ziel

Rot nur bei echten Fehlern, nicht bei Training.

---

# UI-Regel

Diese Ansicht gehört NICHT in den Quick Training Mode.

Sie gehört in:

- Coach Mode
- Dashboard
- Trainingszusammenfassung
- Muskelanalyse

Während der Satz-Eingabe bleibt der Bildschirm schlank.

---

# Interaktion

## Liste → Körper

Wenn Nutzer auf Muskel in Liste tippt:

1. Muskel wird selectedMuscleId
2. Körperansicht fokussiert diesen Muskel
3. Einzelkarte öffnet sich
4. alle anderen Muskeln werden abgedunkelt

## Körper → Liste

Wenn Nutzer auf Muskel am Körper tippt:

1. selectedMuscleId setzen
2. Liste zu diesem Muskel scrollen
3. Detailkarte öffnen

---

# Körperansicht

MVP:

- Frontansicht
- Rückansicht
- Umschalter Front / Rückseite
- ausgewählte Muskelgruppe hervorheben
- fehlende SVGs dürfen App nicht crashen

Später:

- Rotation
- Heatmap
- Animation

---

# Datenquelle

Die Körperansicht nutzt:

```text
muscle_coverage_result
muscle_visual_mapping
muscle_assets
```

---

# Akzeptanzkriterien

- Liste zeigt Muskelgruppen mit Prozentwert.
- Tippen auf Muskel in Liste hebt Muskel am Körper hervor.
- Tippen auf Muskel am Körper öffnet Einzelansicht.
- Front/Rücken-Umschalter funktioniert.
- Quick Training Screen bleibt unverändert.
- Blaue Farbskala wird genutzt.
- Fehlende SVGs führen nicht zum Absturz.
