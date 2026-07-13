const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const readJson = (file) => JSON.parse(read(file));

const app = read("app.js");
const sw = read("sw.js");
const production = read("production/production-muscle-map.js");
const config = readJson("data/production_muscle_map_config_v6.9.0.json");
const adapter = readJson("data/musclemapjs_dcoach_adapter_seed_v6.8.0.json");
const releaseGate = readJson("production/production_muscle_map_release_gate_v6.9.0.json");

[
  "production_muscle_map_config_v6.9.0.json",
  "production_muscle_map_adapter_rules_v6.9.0.json",
  "production_muscle_detail_schema_v6.9.0.json",
  "production_muscle_map_release_gate_v6.9.0.json",
  "production-muscle-map.js"
].forEach((file) => {
  assert(sw.includes(file), `${file} must be cached for offline use`);
});

assert.strictEqual(config.enabledByDefault, true, "production map should be enabled by default");
assert.strictEqual(config.featureFlag, "useProductionMuscleMap", "feature flag name changed");
assert(app.includes("function productionMuscleMapEnabled()"), "feature flag gate missing");
assert(app.includes("forceLegacyMuscleMap"), "explicit fallback QA parameter missing");
assert(app.includes("renderProductionMuscleMap"), "production renderer missing");
assert(app.includes("renderPremiumMuscleSvg(view, items, regions)"), "legacy SVG fallback missing");
assert(app.includes("productionCoverageItemsForMode"), "period adapter missing");
assert(app.includes("premiumTrendCoverageItems"), "trend mode adapter missing");
assert(app.includes("smartCoachRecommendationSafe()"), "smart coach connection missing");
assert(production.includes("never persist external IDs") === false, "production module should not persist policy text instead of logic");
assert(production.includes("dcoach-production-muscle-select"), "selection event must return D-Coach IDs");
assert(production.includes("console.warn(`D-Coach MuscleMap: unmapped"), "unmapped regions must be logged");
assert(adapter.mappings.length >= 20, "adapter seed too small for production use");
assert(releaseGate.required.includes("fallback works"), "release gate must require fallback");

console.log("production muscle map v6.9.0 tests passed");
