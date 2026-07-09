---
project: D-Coach
document: STORAGE_AND_MIGRATION
document_id: 27_STORAGE_AND_MIGRATION
version: 1.4.0
status: Stable
replaces: —
date: 2026-07-09
owner: ChatGPT
codex_rule: Codex must verify PROJECT_MEMORY.md before using this document.
---

# Storage und Migration v1.4.0

## Ziel

Lokale Nutzerdaten müssen geschützt werden.

## MVP

Wenn aktuell localStorage genutzt wird, darf das bleiben.

## Nächster Schritt

Storage-Service kapseln:

```js
storage.get(key)
storage.set(key, value)
storage.exportBackup()
storage.importBackup(data)
```

## Datenversion

Jeder Datensatz bekommt optional:

```text
schemaVersion
createdAt
updatedAt
```

## Migration

Vor jeder Migration:

1. Backup anbieten
2. Daten prüfen
3. Migration durchführen
4. Erfolg bestätigen
5. Fallback behalten

## IndexedDB

IndexedDB erst dann erzwingen, wenn:

- Datenmenge groß wird
- localStorage unübersichtlich wird
- Backup/Restore funktioniert

## Changelog

### 1.4.0
- Storage-Service und Migrationsregeln definiert.