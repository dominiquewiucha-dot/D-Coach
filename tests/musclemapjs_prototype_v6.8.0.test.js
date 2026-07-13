const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const readJson = (file) => JSON.parse(read(file));

const app = read("app.js");
assert(app.includes("debug-muscle-map-prototype"), "debug route must be wired in app.js");
assert(app.includes("renderMuscleMapJsPrototypeScreen"), "prototype screen renderer must exist");
assert(app.includes("mountMuscleMapJsPrototype"), "prototype module mount must be called");

const thirdParty = read("THIRD_PARTY_LICENSES.md");
assert(thirdParty.includes("MuscleMapJS"), "third-party license file must mention MuscleMapJS");
assert(thirdParty.includes("04a9862dd3238bd713a7fa73501da04783f70225"), "pinned MuscleMapJS commit must be documented");

const sourceMuscles = read("vendor/MuscleMapJS/src/core/muscles.ts");
const adapter = readJson("data/musclemapjs_dcoach_adapter_seed_v6.8.0.json");
const heatmap = readJson("data/musclemapjs_heatmap_v6.8.0.json");
const coverage = readJson("data/musclemapjs_test_coverage_v6.8.0.json").coverage;

for (const row of adapter.mappings) {
  assert(sourceMuscles.includes(`'${row.sourceMuscleId}'`), `unknown MuscleMapJS source id: ${row.sourceMuscleId}`);
  assert(/^mg_/.test(row.dcoachMuscleId), `D-Coach muscle id must start with mg_: ${row.dcoachMuscleId}`);
}

const mappedDcoachIds = new Set(adapter.mappings.map((row) => row.dcoachMuscleId));
const acceptedVirtualIds = new Set(["mg_lats"]);
for (const id of Object.keys(coverage)) {
  assert(mappedDcoachIds.has(id) || acceptedVirtualIds.has(id), `coverage id is not mapped: ${id}`);
}

assert.deepStrictEqual(
  heatmap.stops.map((stop) => stop.color),
  ["#263241", "#FACC15", "#FB923C", "#F97316", "#EF4444", "#991B1B"],
  "v6.8 heatmap must use neutral/yellow/orange/red colors only"
);

const prototype = read("prototype/musclemapjs-prototype.js");
assert(prototype.includes("MuscleMapJS liefert keine separate Latissimus-ID"), "lat fallback must be visible in the prototype");
assert(prototype.includes("map.select(selectedSource)"), "selected source must be highlighted through the widget selection API");
assert(prototype.includes("dcoachMuscleMapJsPrototype"), "debug selection API must be exposed for visual QA");
assert(prototype.includes("prototypeSelect"), "URL based visual QA selection must be supported");

console.log("musclemapjs_prototype_v6.8.0 ok");
