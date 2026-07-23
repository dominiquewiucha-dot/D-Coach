const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");

[
  "extraWorkout",
  "function startGuidedExtraWorkout()",
  "function renderGuidedExtraWorkoutPanel()",
  "function extraWorkoutCandidates(muscleId, setCount = 3)",
  "function startExtraWorkoutFromSelection()",
  "function activateExtraWorkoutMuscle(muscleId)",
  "data-start-extra-workout",
  "data-extra-select-exercise",
  "data-start-extra-workout-session",
  "Andere Übung auswählen"
].forEach((needle) => assert(app.includes(needle), `${needle} missing`));

assert(app.includes('sessionType: "extra_workout"'), "extra workouts must be marked as separate session type");
assert(app.includes('planId: workout.sessionType === "extra_workout" ? ""'), "extra workouts must not attach to a plan id");
assert(app.includes("navigateTo(\"training\", { resetSelection: false })"), "extra workout must open the training mask");
assert(app.includes("state.coverageMode = \"week\""), "guided extra workout must use weekly coverage");
assert(app.includes("extraWorkoutHelperLoadText"), "helper muscle load must be shown");
assert(app.includes("projection.currentPercent"), "projection must show current coverage");
assert(app.includes("projection.projectedPercent"), "projection must show expected coverage");

console.log("guided extra workout tests passed");
