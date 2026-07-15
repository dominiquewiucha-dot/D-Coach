const fs = require("fs");

const app = fs.readFileSync("app.js", "utf8");

[
  "trainingStartIntent: null",
  "function askTrainingSessionLocalDate()",
  "function buildTrainingStartIntent(",
  "function reviewMatchesTrainingStartIntent(",
  "function buildTrainingStartIntentMismatchError()",
  "trainingStartIntentId",
  "sessionLocalDate",
  "entryMode",
  "historical_entry",
  "localDateTimeIso(review.sessionLocalDate, \"18:00\")",
  "reviewMatchesTrainingStartIntent(review)",
  "state.trainingStartIntent = intent",
  "state.trainingStartIntent = null",
  "workoutCompletedAt(workout)",
  "journalEntryForDate(workout.sessionLocalDate || localIsoDate())"
].forEach((needle) => assert(app.includes(needle), `${needle} missing`));

assert(app.includes("const sessionLocalDate = askTrainingSessionLocalDate();"), "date selection must happen before warmup");
assert(app.indexOf("const sessionLocalDate = askTrainingSessionLocalDate();") < app.indexOf("const warmup = askWarmupBeforeWorkout();"), "warmup must not happen before locked date/intent");
assert(app.includes("const review = buildPreWorkoutReview(resolved, warmup, intent);"), "review must use locked intent");
assert(app.includes('startDay(resolved.dayId, { skipReview, source: options.source || "automatic_next_day" });'), "automatic flow must preserve resolved day id");
assert(app.includes('data-start-day-id="${htmlesc(resolved.dayId)}"'), "visible start button must carry stable day id");
assert(app.includes("selected > today"), "future training dates must be blocked");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("training day lock backdate tests passed");
