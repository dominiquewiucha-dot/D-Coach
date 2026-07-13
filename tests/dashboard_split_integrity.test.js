const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");

assert(app.includes("function canonicalizeMuscleId(id)"), "muscle canonicalization missing");
assert(app.includes('mg_chest_sternal: "mg_chest"'), "sternal chest must aggregate to chest");
assert(app.includes('mg_chest_clavicular: "mg_chest"'), "clavicular chest must aggregate to chest");
assert(app.includes("canonicalizeMuscleId(mapping.primaryMuscle)"), "primary muscle target canonicalization missing");
assert(app.includes("muscleId = canonicalizeMuscleId(muscleId);"), "coverage aggregation canonicalization missing");
assert(app.includes("function nextPlanDayAfterLastSession"), "next split day helper missing");
assert(app.includes("plan.days[(index + 1) % plan.days.length]"), "next day must follow last completed day");
assert(!app.includes("const nextDay = plan?.days?.[0]?.name || \"-\";"), "dashboard must not hard-code first plan day");
assert(app.includes("Prioritaeten dieser Woche"), "dashboard status label must clarify priority meaning");
assert(app.includes("Brust wurde heute bereits belastet"), "dashboard must explain trained chest coverage");
assert(app.includes("currentUserSettings().debugMode ? `<p"), "internal dashboard rule id must be debug-only");
assert(app.includes("currentUserSettings().debugMode ? `<li>Regel"), "weekly coach rule id must be debug-only");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("dashboard split integrity tests passed");
