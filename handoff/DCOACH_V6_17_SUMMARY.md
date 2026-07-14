# D-Coach v6.17.0 Release Candidate Summary

Base commit: e1cfbe0497a5812f1296bf44a689b456749644cc

Mode: Mittel

Implemented:

- App/cache bumped to `pwa-v68`
- backup format bumped to `6.17.0`
- storage schema remains `6.7.0`
- outcome eligibility guard
- strict recommendation/session comparator
- idempotent outcome evaluation key
- restore deduplication for outcomes
- structured outcome reason codes
- debug-only real device validation checklist
- local device validation report export
- backup/reset support for device validation reports

No v7 work was started.

Real iPhone/PWA tests are still blocked in Codex and are not marked as passed.
