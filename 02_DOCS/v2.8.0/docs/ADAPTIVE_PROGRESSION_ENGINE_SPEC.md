---
project: D-Coach
document: ADAPTIVE_PROGRESSION_ENGINE_SPEC
version: 2.8.0
status: Stable
replaces: 2.7.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - progression decisions stay in Coach Mode, quick training stays fast.
codex_rule: Integrate content and logic only. Do not restructure the app.
---

# Adaptive Progression Engine Spec v2.8.0

## Zweck

D-Coach entscheidet nicht starr, sondern situationsabhängig.

## Mögliche Entscheidungen

- Gewicht erhöhen
- Wiederholungen erhöhen
- Gewicht halten
- Gewicht reduzieren
- Satz hinzufügen
- Satz entfernen
- Übung wechseln
- Deload prüfen

## Grundregel

Muskelaufbau/Wiedereinstieg:

1. Technik
2. Zielwiederholungen
3. konstante Progression
4. kleine Steigerungen

Nicht:

- Maximalversuche
- aggressive Sprünge
- Progression trotz Warnsignalen

## Training First

Im Training nur kompakt:

```text
Nächstes Mal +2,5 kg prüfen.
```

Details in Coach Mode.
