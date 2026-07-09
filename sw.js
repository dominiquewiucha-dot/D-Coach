const CACHE_NAME = "dcoach-pwa-v13";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./seed_training_database.json",
  "./data/muscles.json",
  "./data/exercise_muscle_mapping.json",
  "./data/equipment_v1.1.0.json",
  "./data/exercises_extended_v1.1.0.json",
  "./data/alternative_rules_v1.1.0.json",
  "./data/statistics_rules_v1.1.0.json",
  "./data/training_plans_library_v1.1.0.json",
  "./data/equipment_v1.2.0.json",
  "./data/exercises_large_v1.2.0.json",
  "./data/muscle_mapping_large_v1.2.0.json",
  "./data/training_plans_full_v1.2.0.json",
  "./data/progression_rules_v1.2.0.json",
  "./data/recovery_rules_v1.2.0.json",
  "./data/journal_schema_v1.2.0.json",
  "./data/import_export_schema_v1.2.0.json",
  "./data/machine_settings_schema_v1.2.0.json",
  "./assets/icon.svg",
  "./assets/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match("./index.html")))
  );
});
