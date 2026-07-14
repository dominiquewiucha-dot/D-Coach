# D-Coach v6.16.0 Summary

Base commit: 71d8ee33d84cee715c037ada8df33e3c493cf5f2

Implemented:

- App/cache bumped to `pwa-v67`
- backup format bumped to `6.16.0`
- storage schema kept at `6.7.0` because migration is additive
- v6.15.1 regression guards preserved
- deterministic offline coach data-quality model
- deterministic confidence calibration with evidence caps
- hard gates for unsafe or invalid plan proposals
- recommendation history
- outcome evaluation after due comparable sessions
- slow context learning with +/-0.03 maximum adjustment
- contextual feedback storage
- conflict resolver and time-budget guard
- Coach UI sections for calibration, history, outcomes, conflicts and context feedback
- backup/import/reset includes the new coach learning keys

Manual iPhone/PWA testing is not marked as passed in Codex. It still needs real-device verification after GitHub Pages deployment.

v7 was not started.
