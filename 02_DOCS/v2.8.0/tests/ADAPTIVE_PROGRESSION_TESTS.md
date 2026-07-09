---
project: D-Coach
document: ADAPTIVE_PROGRESSION_TESTS
version: 2.8.0
status: Stable
replaces: 2.7.0
date: 2026-07-09
owner: ChatGPT
core_principle: Training First - progression decisions stay in Coach Mode, quick training stays fast.
codex_rule: Integrate content and logic only. Do not restructure the app.
---

# Adaptive Progression Tests v2.8.0

## Test 1 – Ziel erreicht

60 kg × 12 / 12 / 12 bei Ziel 8-12.

Erwartung:
increase_weight oder kleine Steigerung prüfen.

## Test 2 – Drop-Off

60 kg × 12 / 10 / 8.

Erwartung:
hold_weight.

## Test 3 – Recovery schlecht

Ziel erreicht, Readiness rot.

Erwartung:
hold_weight, keine aggressive Progression.

## Test 4 – LWS-Konflikt

Deadlift + LWS Profil.

Erwartung:
change_exercise / Alternative.

## Test 5 – Quick Training

Erwartung:
keine langen Erklärungen im Satzscreen.
