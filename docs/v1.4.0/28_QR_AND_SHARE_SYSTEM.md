---
project: D-Coach
document: QR_AND_SHARE_SYSTEM
document_id: 28_QR_AND_SHARE_SYSTEM
version: 1.4.0
status: Stable
replaces: —
date: 2026-07-09
owner: ChatGPT
codex_rule: Codex must verify PROJECT_MEMORY.md before using this document.
---

# QR und Share System v1.4.0

## Ziel

Trainingspläne sollen per QR oder JSON geteilt werden können.

## QR MVP

QR enthält kompaktes Plan-JSON.

Wenn Plan zu groß:

```text
Plan ist zu groß für QR. Bitte JSON-Export verwenden.
```

## Plan-QR Schema

```json
{
  "type": "dcoach_plan",
  "version": "1.4.0",
  "plan": {}
}
```

## Import

1. QR scannen oder Text einfügen
2. JSON prüfen
3. Vorschau anzeigen
4. Import bestätigen
5. Plan speichern
6. optional aktivieren

## Changelog

### 1.4.0
- QR-Plan-System definiert.