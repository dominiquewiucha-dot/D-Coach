# D-Coach v6.15.1 ChatGPT Handoff

Status: remediation complete, v6.16 not started
Pre-repair commit: f35a404
Post-repair commit: see git commit created after this handoff
App version: pwa-v66
Backup format: 6.15.1
Storage version: 6.7.0
Service worker cache: dcoach-pwa-v66

## Repaired Findings

### Critical: Backup import protected local workout draft

Root cause:
Backup import assigned `backup.activeWorkoutDraft || null`, so a backup without a draft could delete a local open workout.

Change:
Added `isValidActiveWorkoutDraft()` and `mergeBackupActiveWorkoutDraft()`. Local valid draft wins by default. A backup draft is imported only when no valid local draft exists.

### Critical: Full reset warning matched destructive scope

Root cause:
The old confirmation text only named training and weight data, while implementation deleted more categories.

Change:
Added `FULL_RESET_CONFIRMATION_TEXT`, `handleFullAppReset()` and `resetAllLocalAppData()`. Reset now requires explicit `LOESCHEN` plus a second confirmation. `BACKUP` exports data and does not reset.

### High: Skipped check-in no longer blocks training

Root cause:
`startTrainingFlow()` accepted only `completed` daily check-ins.

Change:
`completed` and `skipped` both count as done for the current local day. Training-start initiated check-ins now set `resumeAction: "start_training"`.

### High: Check-in from training resumes training once

Root cause:
Completing a check-in launched from `Training starten` returned to Dashboard.

Change:
Added `createTrainingResumeCheckinDraft()` and `consumeDailyCheckinResumeAction()`. Completing or skipping that check-in resumes `startTrainingFlow()` exactly once.

### High: All scanner mapping open buttons are bound

Root cause:
Only the first `[data-open-scanned-exercise]` was bound with `querySelector`.

Change:
Switched to `querySelectorAll`. Each mapping opens its own exercise, preserves workout draft and warns if the exercise no longer exists.

### Medium: Dead Dashboard code removed

Root cause:
The old Dashboard return block remained after the compact Dashboard return.

Change:
Removed the unreachable old return block.

### Medium: Backup version corrected

Root cause:
Backups still reported `6.11.0`.

Change:
Added `BACKUP_FORMAT_VERSION = "6.15.1"` and export now uses it.

## Test Summary

Automated:
- `node --check app.js`: passed
- all `tests/*.test.js`: passed
- new `tests/v6_15_1_audit_remediation.test.js`: passed

Manual iPhone/PWA:
- blocked in Codex environment because the in-app browser could not attach a local tab.
- manual steps are provided in `DCOACH_V6_15_MANUAL_TESTS.md`.

## Storage/Migration

No destructive migration.
No stable storage keys renamed.
Storage version remains `6.7.0`.

## v6.16 Gate

v6.16 should remain blocked until ChatGPT reviews this handoff and the user explicitly approves v6.16.
