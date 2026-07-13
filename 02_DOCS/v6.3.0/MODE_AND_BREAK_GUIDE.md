---
project: D-Coach
document: MODE_AND_BREAK_GUIDE
version: 6.3.0
status: Stable
replaces: 6.2.0
date: 2026-07-13
owner: ChatGPT
core_principle: Training First - Smart Coach works locally and explainably.
codex_rule: Integrate only. Do not restructure the app.
resource_rule: Use the lowest sufficient mode and stop after the defined checkpoint.
---

# Modus- und Break-Empfehlung

## Empfohlener Modus

**Mittel**

## Erwarteter Aufwand

ca. 1–2 Stunden, 4–8 geänderte Dateien

## Pflicht-Workflow

1. Aktuelle Repository-Version prüfen.
2. Prüfen, ob v6.2.0 vollständig integriert und committed ist.
3. Nur dieses Paket bearbeiten.
4. Build und Tests ausführen.
5. Git Commit und Push.
6. Kurzbericht ausgeben.
7. **STOPPEN. Keine Folgeversion beginnen.**

## Codex muss nach Abschluss melden

- verwendeter Modus,
- geänderte Dateien,
- erfolgreiche Tests,
- Commit-Hash,
- Push-Status,
- Empfehlung für den nächsten Modus.

## Regel zur Token-Effizienz

- **Luna:** Texte, Labels, kleine CSS-Korrekturen.
- **Mittel:** einzelne Komponenten, JSON, Regeln, kleine Features.
- **Hoch:** mehrere Komponenten, komplexe Logik, größere UI-Flows.
- **Terra:** nur grundlegende Architektur oder sehr große Refactorings.

Terra darf für dieses Paket nur genutzt werden, wenn Codex einen konkreten technischen Grund nennt.
