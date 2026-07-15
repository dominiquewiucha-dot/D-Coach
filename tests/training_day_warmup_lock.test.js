const fs = require("fs");

const app = fs.readFileSync("app.js", "utf8");

[
  "trainingStartIntent: null",
  "function buildTrainingStartIntent(",
  "function reviewMatchesTrainingStartIntent(",
  "function buildTrainingStartIntentMismatchError()",
  "trainingStartIntentId",
  "reviewMatchesTrainingStartIntent(review)",
  "state.trainingStartIntent = intent",
  "state.trainingStartIntent = null",
  "const review = buildPreWorkoutReview(resolved, warmup, intent);",
  'startDay(resolved.dayId, { skipReview, source: options.source || "automatic_next_day" });',
  'data-start-day-id="${htmlesc(resolved.dayId)}"'
].forEach((needle) => assert(app.includes(needle), `${needle} missing`));

assert(!app.includes("function askTrainingSessionLocalDate()"), "bugfix-only package must not add training date selection");
assert(!app.includes("historical_entry"), "bugfix-only package must not add backdating mode");
assert(!app.includes("sessionLocalDate"), "bugfix-only package must not add session local date storage");

const intentIndex = app.indexOf("const intent = buildTrainingStartIntent(resolved, source);");
const warmupIndex = app.indexOf("const warmup = askWarmupBeforeWorkout();");
assert(intentIndex > -1 && warmupIndex > -1 && intentIndex < warmupIndex, "selected day intent must be locked before warmup");

assert(app.includes("review.planId === intent.planId"), "review must match selected plan");
assert(app.includes("review.dayId === intent.dayId"), "review must match selected day");
assert(app.includes("JSON.stringify(reviewExerciseIds) === JSON.stringify(intent.exerciseIds)"), "review exercises must match selected day");
assert(app.includes("Der gewählte Trainingstag hat sich während des Startvorgangs verändert."), "integrity error message missing");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("training day warmup lock tests passed");
