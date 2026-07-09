# D-Coach Storage v1.2.0

Status: Sprint 12

## Current source of truth

The PWA still stores user data in `localStorage`. IndexedDB is only prepared and is not used as the active data source yet.

## localStorage keys

| Key | Type | Content |
| --- | --- | --- |
| `dcoach.sessions` | JSON array | Completed training sessions |
| `dcoach.weights` | JSON array | Bodyweight entries |
| `dcoach.journalEntries` | JSON array | Recovery journal entries |
| `dcoach.machineSettings` | JSON array | Exercise machine settings |
| `dcoach.activePlanName` | string | Active training plan name |
| `dcoach.archivedPlanNames` | JSON array | Archived plan names |
| `dcoach.deletedPlanNames` | JSON array | Hidden/deleted plan names |
| `dcoach.activeWorkoutDraft` | JSON object | Current unfinished workout |
| `dcoach.lastBackupAt` | ISO string | Last backup export timestamp |
| `dcoach.storageVersion` | string | Current local storage schema version |
| `dcoach.migrationLog` | JSON array | Versioned, non-destructive migration events |
| `dcoach.indexedDbReady` | boolean string | Whether IndexedDB stores were prepared |

## Migration rule

Sprint 12 migrations are metadata-only. They must not delete, overwrite, or move user data.

Before any later real migration, the app offers a backup export in settings.

## IndexedDB preparation

The app can create a `DCoachLocal` IndexedDB database with these object stores:

- `sessions`
- `weights`
- `journalEntries`
- `machineSettings`
- `meta`

No data is copied automatically in Sprint 12.
