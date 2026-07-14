# D-Coach v6.17 Device Test Status

Codex created a debug-only device validation checklist under Tracking > Debug > Geraetepruefung v6.17.

Codex did not run real iPhone/PWA tests. Status is blocked, not passed.

Required real-device checks:

- Bottom Navigation fixed and safe area correct
- Dashboard, Coach and Tracking navigation
- Muscle Map starts at top and does not jump
- keyboard/focus for check-in, workout inputs and coach feedback
- check-in skip/complete starts training exactly once
- warm-up, timer, previous exercise and draft resume
- scanner permission, cancel, manual code and mapping entries
- offline PWA restart and update to pwa-v68
- Coach history, conflicts and quality flags readable
- outcome only for applied recommendations
- no duplicate outcome evaluation

The export button creates `DCoach_v6.17_DeviceValidation_Report.json`.
