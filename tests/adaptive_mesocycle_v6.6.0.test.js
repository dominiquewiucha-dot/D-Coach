const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");

[
  "mesocycle_schema_v6.6.0.json",
  "adaptive_mesocycle_rules_v6.6.0.json",
  "mesocycle_progression_rules_v6.6.0.json"
].forEach((file) => {
  assert(fs.existsSync(path.join(root, "data", file)), `${file} missing`);
  assert(app.includes(`./data/${file}`), `${file} not loaded`);
  assert(sw.includes(`./data/${file}`), `${file} not cached`);
});

assert(app.includes("function adaptiveMesocycleSummary()"), "adaptive mesocycle summary missing");
assert(app.includes("function renderAdaptiveMesocycleCard()"), "adaptive mesocycle card missing");
assert(app.includes("weeklyVolumeTargets"), "weekly volume targets missing");
assert(app.includes("weak_point_focus"), "weak point focus rule missing");
assert(app.includes("early_deload"), "early deload rule missing");
assert(app.includes("data-confirm-plan-adjust"), "plan changes must require confirmation");

console.log("adaptive mesocycle v6.6.0 tests passed");
