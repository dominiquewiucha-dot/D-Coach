# v6.17.2 Manuelle iPhone-Tests

Noch offen, weil kein echtes iPhone-Testlauf in Codex ausgeführt wurde.

## Zu prüfen

- Dashboard -> Tracking -> Muskelmapping öffnen.
- Ohne vorheriges Antippen direkt auf der Muskelkarte vertikal scrollen.
- Vorderseite und Rückseite wechseln.
- Muskel antippen: Auswahl öffnet Details, Scrollen darf nicht als Tap gewertet werden.
- Bottom Navigation bleibt am unteren Viewport.
- Bauch bleibt bei Push-Training ohne Bauchübung bei 0%.
- Brust zeigt nach Brustübungen Werte in Dashboard und Muscle Map.

## Erwartung nach Fix

- Scrollen funktioniert sofort.
- Kein Inhalt wird dauerhaft durch die Bottom Navigation unbedienbar.
- Brust/Bauch-Werte entsprechen der Canonical-Coverage-Probe.
