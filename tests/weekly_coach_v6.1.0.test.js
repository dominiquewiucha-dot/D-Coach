const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");

[
  "weekly_coach_schema_v6.1.0.json",
  "weekly_coach_rules_v6.1.0.json",
  "weekly_coach_texts_v6.1.0.json"
].forEach((file) => {
  const dataPath = path.join(root, "data", file);
  assert(fs.existsSync(dataPath), `${file} missing`);
  assert(app.includes(`./data/${file}`), `${file} not loaded in app.js`);
  assert(sw.includes(`./data/${file}`), `${file} not cached in sw.js`);
});

assert(app.includes("function weeklyCoachSummary()"), "weekly coach summary missing");
assert(app.includes("function renderWeeklyCoachCard()"), "weekly coach card missing");
assert(app.includes("legs_missing"), "legs missing rule missing");
assert(app.includes("lat_under_upper_back_over"), "lat rule missing");
assert(app.includes("triceps_under_front_delt_over"), "triceps rule missing");
assert(app.includes("hamstrings_under_quads_over"), "hamstrings rule missing");
assert(app.includes("requiresConfirmation: activeRules.length > 0"), "confirmation gate missing");
assert(app.includes("document.querySelectorAll(\"[data-confirm-plan-adjust]\")"), "all confirmation buttons must be bound");
assert(app.includes("${renderWeeklyCoachCard()}"), "weekly coach card is not rendered");

console.log("weekly coach v6.1.0 tests passed");
