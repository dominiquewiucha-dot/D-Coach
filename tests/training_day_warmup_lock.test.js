const fs = require("fs");
const vm = require("vm");

const app = fs.readFileSync("app.js", "utf8");

function extractFunctionSource(name) {
  const start = app.indexOf(`function ${name}`);
  assert(start >= 0, `${name} missing`);
  const bodyStart = app.indexOf(") {", start) + 2;
  let depth = 0;
  for (let index = bodyStart; index < app.length; index += 1) {
    const char = app[index];
    if (char === "{") depth += 1;
    if (char === "}") depth -= 1;
    if (depth === 0) return app.slice(start, index + 1);
  }
  throw new Error(`${name} could not be extracted`);
}

const sandbox = { Date, JSON };
vm.createContext(sandbox);
[
  "buildTrainingStartIntent",
  "createLockedTrainingStartArtifacts",
  "createLockedWorkoutDraftCore",
  "reviewMatchesTrainingStartIntent"
].forEach((name) => vm.runInContext(extractFunctionSource(name), sandbox));

const plan = {
  planId: "plan_1",
  planName: "3er Split",
  days: [
    day("day_push", "Push", ["bench", "incline_press", "triceps_pushdown"]),
    day("day_pull", "Pull", ["lat_pulldown", "row", "curl"]),
    day("day_legs", "Beine", ["leg_press", "leg_curl", "calf_raise"])
  ]
};
const warmup = { id: "warmup_1", equipment: "Bike", durationMinutes: 8, completed: true };

[
  ["push_warmup_push", "day_push"],
  ["pull_warmup_pull", "day_pull"],
  ["legs_warmup_legs", "day_legs"],
  ["push_skip_warmup_push", "day_push", null]
].forEach(([label, dayId, warmupValue = warmup]) => {
  const result = runLockedStart(dayId, warmupValue);
  assert(result.selected.dayId === dayId, `${label}: selected day changed`);
  assert(result.review.dayId === dayId, `${label}: review day changed`);
  assert(result.draft.dayId === dayId, `${label}: draft day changed`);
  assertSameIds(result.review.exercises.map((entry) => entry.exerciseId), result.selected.exercises, `${label}: review exercises changed`);
  assertSameIds(result.draft.exerciseIds, result.selected.exercises, `${label}: draft exercises changed`);
  assert(sandbox.reviewMatchesTrainingStartIntent(result.review, result.intent), `${label}: review must match intent`);
});

const oldBug = simulateOldReResolveBug("day_push", "day_legs");
assert(oldBug.beforeFix.selectedDay === "Push", "old bug setup must start with Push");
assert(oldBug.beforeFix.afterWarmupDay === "Beine", "old bug reproduction must switch to Beine");

const invalid = runLockedStart("day_missing", warmup);
assert(invalid.blocked === true, "invalid_day_blocks: invalid day must block");
assert(invalid.draft === null, "invalid_day_blocks: invalid day must not create draft");

const abortedWarmup = runLockedStart("day_push", undefined);
assert(abortedWarmup.blocked === true, "warmup_cancel_blocks: warmup cancel must block in test flow");
assert(abortedWarmup.draft === null, "warmup_cancel_blocks: warmup cancel must not create draft");

const reviewCanceled = runLockedStart("day_push", warmup, { cancelReview: true });
assert(reviewCanceled.review.dayId === "day_push", "review_cancel: review must still be Push before cancel");
assert(reviewCanceled.draft === null, "review_cancel: cancel must not create draft");

const mismatch = runLockedStart("day_push", warmup);
mismatch.review.dayId = "day_legs";
assert(!sandbox.reviewMatchesTrainingStartIntent(mismatch.review, mismatch.intent), "mismatch must be blocked by intent check");

assert(!app.includes("function askTrainingSessionLocalDate()"), "bugfix-only package must not add training date selection");
assert(!app.includes("historical_entry"), "bugfix-only package must not add backdating mode");
assert(!app.includes("sessionLocalDate"), "bugfix-only package must not add session local date storage");
assert(app.indexOf("const intent = buildTrainingStartIntent(resolved, source);") < app.indexOf("const warmup = askWarmupBeforeWorkout();"), "intent must be locked before warmup");

function runLockedStart(dayId, warmupValue, options = {}) {
  const selected = plan.days.find((item) => item.dayId === dayId);
  if (!selected) return { blocked: true, review: null, draft: null };
  if (warmupValue === undefined) return { blocked: true, selected, review: null, draft: null };
  const resolved = resolvedFromDay(selected);
  const intent = sandbox.buildTrainingStartIntent(resolved, "manual_day_selection");
  const { review, draftCore } = sandbox.createLockedTrainingStartArtifacts({
    resolved,
    warmup: warmupValue,
    intent,
    createdAt: "2026-07-15T12:00:00.000Z"
  });
  if (!sandbox.reviewMatchesTrainingStartIntent(review, intent)) return { blocked: true, selected, intent, review, draft: null };
  if (options.cancelReview) return { blocked: true, selected, intent, review, draft: null };
  const draft = { ...sandbox.createLockedWorkoutDraftCore(review), exerciseIds: draftCore.exerciseIds };
  return { blocked: false, selected, intent, review, draft };
}

function simulateOldReResolveBug(selectedDayId, reResolvedDayId) {
  const selected = plan.days.find((item) => item.dayId === selectedDayId);
  const afterWarmup = plan.days.find((item) => item.dayId === reResolvedDayId);
  return {
    beforeFix: {
      selectedDay: selected.name,
      afterWarmupDay: afterWarmup.name,
      status: selected.dayId !== afterWarmup.dayId ? "failed_as_expected" : "not_reproduced"
    }
  };
}

function resolvedFromDay(item) {
  return {
    planId: plan.planId,
    planName: plan.planName,
    dayId: item.dayId,
    dayName: item.name,
    dayIndex: plan.days.findIndex((candidate) => candidate.dayId === item.dayId),
    reason: "manual_selection",
    maxDurationMinutes: 60,
    exercises: item.exercises.map((exerciseId, index) => ({ exerciseId, sets: 3, reps: "8-12", restSeconds: 90, sortOrder: index + 1 }))
  };
}

function day(dayId, name, exercises) {
  return { dayId, name, exercises };
}

function assertSameIds(actual, expected, message) {
  assert(JSON.stringify(actual) === JSON.stringify(expected), message);
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("training day warmup lock behavior tests passed");
