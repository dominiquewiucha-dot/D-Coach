# D-Coach v6.15.1 Manual Tests

Status in Codex: blocked for visual iPhone/PWA because local browser tab attach failed.

Run these on iPhone/PWA after GitHub Pages deploys.

## 1. Check-in skipped continues training

1. Open app.
2. Tap `Training starten`.
3. If daily check-in opens, tap `Fuer heute ueberspringen`.
4. Expected: training flow continues to draft/plan/warm-up without asking the same check-in again.

## 2. Check-in completed continues training

1. Open app on a fresh local day or clear today's check-in in test data.
2. Tap `Training starten`.
3. Complete daily check-in.
4. Expected: training flow continues automatically once.

## 3. Normal check-in does not start training

1. Open check-in from Dashboard/Journal.
2. Complete it.
3. Expected: app returns to Dashboard, no automatic workout start.

## 4. Scanner mappings

1. Create or restore at least three Life-Fitness mappings.
2. Open Tracking > Geraete.
3. Tap first, middle and last mapping row.
4. Expected: each opens its own exercise.

## 5. Backup import with local workout draft

1. Start a workout and enter one set value.
2. Leave workout unfinished.
3. Import a backup without active workout draft.
4. Expected: open workout draft remains.

## 6. Reset dialog

1. Open Tracking > Backup/Settings area.
2. Tap App-Daten zuruecksetzen.
3. Leave `ABBRECHEN`.
4. Expected: nothing is deleted.
5. Repeat and type `BACKUP`.
6. Expected: backup downloads and no reset happens.
7. Repeat and type `LOESCHEN`, then cancel second confirmation.
8. Expected: nothing is deleted.

## 7. Offline/PWA

1. Open installed PWA.
2. Turn on airplane mode.
3. Reload/open app.
4. Expected: app shell loads, bottom nav remains fixed, no content hidden by safe area.
