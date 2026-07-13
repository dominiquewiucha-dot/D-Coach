const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "app.js"), "utf8");
const regions = JSON.parse(fs.readFileSync(path.join(root, "data", "premium_muscle_regions_v5.0.0.json"), "utf8")).regions;
const gradient = JSON.parse(fs.readFileSync(path.join(root, "data", "muscle_heatmap_gradient_v5.2.0.json"), "utf8")).stops;

const mappingIds = new Set(regions.map((region) => region.muscleId));
const expectedFront = [
  "mg_chest_clavicular",
  "mg_chest_sternal",
  "mg_chest_lower",
  "mg_front_delts",
  "mg_side_delts",
  "mg_biceps_long",
  "mg_brachialis",
  "mg_forearm_flexors",
  "mg_abs_upper",
  "mg_abs_lower",
  "mg_obliques",
  "mg_adductors",
  "mg_quads_rectus",
  "mg_quads_vastus_lateralis",
  "mg_quads_vastus_medialis",
  "mg_tibialis_anterior"
];
const expectedBack = [
  "mg_rear_delts",
  "mg_traps_upper",
  "mg_traps_mid",
  "mg_rhomboids",
  "mg_lats_upper",
  "mg_lats_lower",
  "mg_triceps_long",
  "mg_forearm_extensors",
  "mg_erectors_upper",
  "mg_erectors_lower",
  "mg_glutes_maximus",
  "mg_glutes_medius",
  "mg_hamstrings_biceps",
  "mg_hamstrings_inner",
  "mg_calves_gastrocnemius",
  "mg_soleus"
];

[...expectedFront, ...expectedBack].forEach((muscleId) => {
  assert(mappingIds.has(muscleId), `Missing premium muscle mapping for ${muscleId}`);
  assert(appSource.includes(`muscleId: "${muscleId}"`), `Missing SVG path definition for ${muscleId}`);
});

const pathIds = [...appSource.matchAll(/id: "([^"]+)"/g)]
  .map((match) => match[1])
  .filter((id) => /(left|right|abs_|traps|soleus|gastrocnemius|lat_|erectors|gluteus|hamstrings|tibialis)/.test(id));
assert.equal(new Set(pathIds).size, pathIds.length, "Muscle SVG path ids must be unique");

[
  ["chest_clavicular_left", "chest_clavicular_right", "mg_chest_clavicular"],
  ["front_delt_left", "front_delt_right", "mg_front_delts"],
  ["biceps_left", "biceps_right", "mg_biceps_long"],
  ["forearm_flexors_left", "forearm_flexors_right", "mg_forearm_flexors"],
  ["lat_upper_left", "lat_upper_right", "mg_lats_upper"],
  ["triceps_left", "triceps_right", "mg_triceps_long"],
  ["soleus_left", "soleus_right", "mg_soleus"]
].forEach(([left, right, muscleId]) => {
  assert(appSource.includes(`id: "${left}", muscleId: "${muscleId}"`), `${left} must target ${muscleId}`);
  assert(appSource.includes(`id: "${right}", muscleId: "${muscleId}"`), `${right} must target ${muscleId}`);
});

assert(appSource.includes('viewBox="0 0 220 520"'), "Front and back map must share one stable viewBox");
assert(appSource.includes('opacity = selected && !isSelected ? 0.3 : 1'), "Non-selected muscles must dim to 30 percent");
assert(appSource.includes('data-muscle-id="${htmlesc(region.muscleId)}"'), "SVG paths must expose data-muscle-id");

const blueLoadColors = gradient.filter((stop) => /#(?:2563EB|1D4ED8|60A5FA|3B82F6|1B263B)/i.test(stop.color));
assert.equal(blueLoadColors.length, 0, "Heatmap load colors must not be blue");
assert.equal(gradient[0].percent, 0);
assert.equal(gradient[0].color, "#2A2D34");

console.log("muscle map anatomy tests passed");
