---
project: D-Coach
document: PLATFORM_ARCHITECTURE
document_id: 26_PLATFORM_ARCHITECTURE
version: 1.4.0
status: Stable
replaces: —
date: 2026-07-09
owner: ChatGPT
codex_rule: Codex must verify PROJECT_MEMORY.md before using this document.
---

# Platform Architecture v1.4.0

## Ziel

D-Coach soll langfristig als Plattform funktionieren.

Die PWA ist die erste Oberfläche.  
Die Knowledge Base ist der fachliche Kern.

## Schichten

```text
UI Layer
Application Logic
Storage Layer
Knowledge Base
Import/Export Layer
PWA/Offline Layer
```

## Prinzip

Die App soll später problemlos erweitert werden können um:

- größere Knowledge Base
- Plan Generator
- QR Sharing
- bessere Statistiken
- Gerätekatalog
- Cloud optional
- native Apps optional

## Changelog

### 1.4.0
- Plattform-Architektur definiert.