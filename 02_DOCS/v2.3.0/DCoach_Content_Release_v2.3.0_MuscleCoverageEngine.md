# D-Coach Content Release v2.3.0 – Muscle Coverage Engine

> **Version:** 2.3.0  
> **Typ:** Inhalts-Release (keine Architekturänderung)

## Ziel

Dieses Release führt die **Muscle Coverage Engine** ein.

Sie ersetzt komplizierte Fatigue-Anzeigen durch eine verständliche Prozentdarstellung.

Der Nutzer soll jederzeit erkennen:

- Welche Muskelgruppen heute belastet wurden.
- Welche Muskelgruppen diese Woche ausreichend trainiert wurden.
- Welche Muskelgruppen noch fehlen.

---

# Codex-Regel

**Keine Architektur ändern.**

Nur folgende Module ergänzen:

- Muscle Coverage Engine
- Muscle Coverage Datenmodell
- Coverage-Auswertung
- UI für Today / Week / Trend

---

# Grundprinzip

Jede Übung besitzt bereits ein Muskel-Mapping.

Beispiel:

Brustpresse

- Brust = 100 %
- Trizeps = 35 %
- Vordere Schulter = 20 %

Butterfly

- Brust = 100 %
- Schulter = 5 %

Schulterdrücken

- Vordere Schulter = 100 %
- Trizeps = 45 %
- Brust = 15 %

Diese Werte werden automatisch addiert.

Der Benutzer muss nichts eingeben.

---

# Zielsystem

Jeder Trainingsplan definiert automatisch das Wochenziel.

## Beispiel

3er Split

Brust = 100 %

Lat = 100 %

Quadrizeps = 100 %

Hamstrings = 100 %

Bizeps = 100 %

Trizeps = 100 %

Schulter = 100 %

Gluteus = 100 %

---

# Auswertung

## Heute

Zeigt ausschließlich die heutige Belastung.

Beispiel

Brust 46 %

Trizeps 32 %

Schulter 29 %

---

## Woche (Standard)

Beispiel

Brust 92 %

Lat 101 %

Bizeps 76 %

Quadrizeps 0 %

Hamstrings 0 %

Noch nicht trainierte Muskelgruppen werden hervorgehoben.

---

## Trend

Zeigt die letzten 8 Wochen.

Nur eine einfache Verlaufsgrafik.

Keine komplizierten Diagramme.

---

# Coach-Regeln

Wenn Muskelgruppe >120 %

→ Hinweis

"Diese Muskelgruppe wurde diese Woche bereits überdurchschnittlich belastet."

Wenn Muskelgruppe <70 % und Wochenziel fast erreicht

→ Hinweis

"Diese Muskelgruppe wurde diese Woche wenig trainiert."

Wenn Muskelgruppe 0 %

→ Hinweis

"Noch nicht trainiert."

---

# Trainingsmodus

Während des Trainings

NICHT anzeigen.

Nur nach Training oder im Dashboard.

---

# Dashboard

Neue Karte

Muscle Coverage

mit drei Buttons

- Heute
- Woche
- Trend

---

# Berechnung

Die Berechnung erfolgt ausschließlich automatisch aus

- Übungsmapping
- Satzzahl
- Wiederholungen
- Gewicht (optional als Gewichtung)
- Zielmuskel
- Hilfsmuskeln

Keine Benutzereingaben erforderlich.

---

# Akzeptanzkriterien

- bestehende Trainingshistorie bleibt unverändert
- keine Architekturänderung
- Prozentwerte werden automatisch berechnet
- Today / Week / Trend verfügbar
- Quick Training Screen bleibt unverändert
- Coach nutzt Coverage für Empfehlungen
