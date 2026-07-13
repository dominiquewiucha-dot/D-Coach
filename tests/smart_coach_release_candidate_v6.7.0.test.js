const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");

[
  "smart_coach_fallback_rules_v6.7.0.json",
  "smart_coach_quality_metrics_v6.7.0.json",
  "smart_coach_release_gate_v6.7.0.json"
].forEach((file) => {
  assert(fs.existsSync(path.join(root, "data", file)), `${file} missing`);
  assert(app.includes(`./data/${file}`), `${file} not loaded`);
  assert(sw.includes(`./data/${file}`), `${file} not cached`);
});

assert(app.includes("function smartCoachRecommendationSafe()"), "safe fallback wrapper missing");
assert(app.includes("fallback_calculation_error"), "calculation fallback missing");
assert(app.includes("function smartCoachQualitySummary()"), "quality metrics missing");
assert(app.includes("function smartCoachReleaseGateSummary()"), "release gate missing");
assert(app.includes("safety overrides progression"), "safety gate missing");
assert(app.includes("backup includes feedback"), "backup feedback gate missing");
assert(app.includes("Privat: lokale Metriken, keine externe API."), "local-only privacy copy missing");
const appVersion = app.match(/const APP_VERSION = "pwa-v(\d+)"/)?.[1];
const cacheVersion = sw.match(/const CACHE_NAME = "dcoach-pwa-v(\d+)"/)?.[1];
assert(Number(appVersion) >= 49, "app version not bumped");
assert(Number(cacheVersion) >= 49, "cache version not bumped");

console.log("smart coach release candidate v6.7.0 tests passed");
