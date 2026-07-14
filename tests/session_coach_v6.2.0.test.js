const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");

[
  "session_coach_schema_v6.2.0.json",
  "session_coach_rules_v6.2.0.json",
  "session_coach_texts_v6.2.0.json"
].forEach((file) => {
  assert(fs.existsSync(path.join(root, "data", file)), `${file} missing`);
  assert(app.includes(`./data/${file}`), `${file} not loaded`);
  assert(sw.includes(`./data/${file}`), `${file} not cached`);
});

assert(app.includes("function renderSessionCoachPreWorkoutCard(day)"), "pre-workout card missing");
assert(app.includes("function renderSessionCoachDuringCard(workout, entry, exercise)"), "during-workout card missing");
assert(app.includes("function renderSessionCoachAfterCard(session)"), "post-workout card missing");
assert(app.includes('data-session-coach-stage="beforeWorkout"'), "beforeWorkout stage missing");
assert(app.includes('data-session-coach-stage="duringWorkout"'), "duringWorkout stage missing");
assert(app.includes('data-session-coach-stage="afterWorkout"'), "afterWorkout stage missing");
assert(app.includes("planOptimizerSummary()"), "v4.2 plan simulation not reused");
assert(app.includes("Zeit knapp"), "time guard copy missing");
assert(app.includes("Prognose und tatsächliche Belastung"), "post-workout comparison missing");

console.log("session coach v6.2.0 tests passed");
