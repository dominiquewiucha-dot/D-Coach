const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");

[
  "plateau_coach_schema_v6.4.0.json",
  "plateau_detection_rules_v6.4.0.json",
  "plateau_action_rules_v6.4.0.json",
  "deload_coach_schema_v6.5.0.json",
  "deload_detection_rules_v6.5.0.json",
  "deload_prescription_rules_v6.5.0.json"
].forEach((file) => {
  assert(fs.existsSync(path.join(root, "data", file)), `${file} missing`);
  assert(app.includes(`./data/${file}`), `${file} not loaded`);
  assert(sw.includes(`./data/${file}`), `${file} not cached`);
});

assert(app.includes("function plateauSummary()"), "plateau summary missing");
assert(app.includes("history.length < 4"), "false plateau guard missing");
assert(app.includes("history.length >= 6 && stable"), "6-session plateau rule missing");
assert(app.includes("data-confirm-plan-adjust"), "plan changes must stay confirm-only");
assert(app.includes("function deloadCoachSummary()"), "deload summary missing");
assert(app.includes("Einzelner schlechter Tag reicht nicht fuer Deload."), "single bad day guard missing");
assert(app.includes('recovery.jointFlags.includes("LWS") ? "exercise_deload"'), "LWS exercise deload missing");

console.log("plateau/deload v6.4-v6.5 tests passed");
