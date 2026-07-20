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

const exercises = {
  ex_chest_press_machine: { id: "ex_chest_press_machine", displayName: "Brustpresse Maschine" },
  ex_incline_chest_press_machine: { id: "ex_incline_chest_press_machine", displayName: "Schraegbank Brustpresse Maschine" },
  ex_cable_flys: { id: "ex_cable_flys", displayName: "Kabel-Flys" },
  ex_shoulder_press: { id: "ex_shoulder_press", displayName: "Schulterpresse" },
  ex_lateral_raise: { id: "ex_lateral_raise", displayName: "Seitheben" },
  ex_triceps_pushdown: { id: "ex_triceps_pushdown", displayName: "Trizepsdruecken" },
  ex_dumbbell_chest_press: { id: "ex_dumbbell_chest_press", displayName: "Kurzhantel Bankdruecken" }
};

const sandbox = {
  JSON,
  Date,
  Map,
  exerciseById: (id) => exercises[id] || null
};
vm.createContext(sandbox);
[
  "cloneWorkoutDraft",
  "entryHasRecordedTrainingData",
  "emptySetsForReplacement",
  "getPlannedExerciseId",
  "canonicalExerciseId",
  "getOccupiedExerciseIds",
  "replacementCandidateId",
  "filterUniqueExerciseAlternatives",
  "exerciseExistsInDatabase",
  "selectedExerciseFromDatabase",
  "planExerciseIdsForDraftDay",
  "preservedSetChecksum",
  "validateReplacementCandidate",
  "validateDraftExerciseReplacement",
  "replaceExerciseInActiveWorkout",
  "replaceDraftExercise"
].forEach((name) => vm.runInContext(extractFunctionSource(name), sandbox));

const originalDraft = syntheticDraft();
const candidates = [
  { exercise: exercises.ex_cable_flys },
  { exercise: exercises.ex_dumbbell_chest_press },
  { exercise: exercises.ex_chest_press_machine }
];

const filtered = sandbox.filterUniqueExerciseAlternatives({
  draft: originalDraft,
  replacementIndex: 0,
  candidates
});
assert(filtered.map((item) => item.exercise.id).includes("ex_dumbbell_chest_press"), "unique replacement must stay visible");
assert(!filtered.map((item) => item.exercise.id).includes("ex_cable_flys"), "occupied exercise must not be suggested");
assert(!filtered.map((item) => item.exercise.id).includes("ex_chest_press_machine"), "current exercise must not be suggested");

const duplicateResult = sandbox.replaceDraftExercise({
  draft: originalDraft,
  entryIndex: 0,
  replacementExerciseId: "ex_cable_flys",
  confirmStartedReplacement: () => true
});
assert(!duplicateResult.ok, "manual duplicate selection must be blocked");
assert(duplicateResult.reason === "duplicate_exercise_in_workout", "duplicate reason missing");
assert(JSON.stringify(duplicateResult.originalDraft) === JSON.stringify(originalDraft), "duplicate must leave draft unchanged");

const uniqueResult = sandbox.replaceDraftExercise({
  draft: originalDraft,
  entryIndex: 0,
  replacementExerciseId: "ex_dumbbell_chest_press",
  confirmStartedReplacement: () => true
});
assert(uniqueResult.ok, "unique replacement must succeed");
assert(uniqueResult.draft.entries.length === originalDraft.entries.length, "replacement must not add entries");
assert(uniqueResult.draft.entries[0].exerciseId === "ex_dumbbell_chest_press", "replacement exercise missing");
assert(uniqueResult.draft.entries[0].plannedExerciseId === "ex_chest_press_machine", "planned exercise id must be preserved");
assert(uniqueResult.draft.entries[0].alternativeForExerciseId === "ex_chest_press_machine", "alternative source must reference planned exercise");
assert(JSON.stringify(uniqueResult.draft.entries[1]) === JSON.stringify(originalDraft.entries[1]), "next entry changed");
assert(JSON.stringify(uniqueResult.draft.entries[2]) === JSON.stringify(originalDraft.entries[2]), "later occupied exercise changed");
assert(JSON.stringify(syntheticPlan()) === JSON.stringify(syntheticPlan()), "plan fixture must stay immutable");
assert(!hasDuplicateExerciseIds(uniqueResult.draft), "reload draft must not contain duplicate exercise ids");

function syntheticPlan() {
  return {
    id: "plan_push",
    days: [{
      id: "day_push",
      exercises: [
        "ex_chest_press_machine",
        "ex_incline_chest_press_machine",
        "ex_cable_flys",
        "ex_shoulder_press",
        "ex_lateral_raise",
        "ex_triceps_pushdown"
      ]
    }]
  };
}

function syntheticDraft() {
  return {
    planId: "plan_push",
    planName: "Push",
    dayId: "day_push",
    dayName: "Push",
    startedAt: "2026-07-16T06:45:00.000Z",
    warmups: [{ id: "warmup_1", equipment: "Crosstrainer", durationMinutes: 10 }],
    sessionNote: "kept",
    index: 0,
    entries: syntheticPlan().days[0].exercises.map((exerciseId, index) => ({
      plannedExerciseId: exerciseId,
      exerciseId,
      sourceDayId: "day_push",
      plannedSets: 2,
      reps: "8-12",
      restSeconds: 90,
      sortOrder: index + 1,
      sets: [1, 2].map((setNumber) => ({
        setNumber,
        weightText: index === 1 ? "55" : "",
        repsText: index === 1 ? "10" : "",
        rirText: index === 1 ? "2" : "",
        completed: index === 1
      }))
    }))
  };
}

function hasDuplicateExerciseIds(draft) {
  const ids = draft.entries.map((entry) => entry.exerciseId);
  return new Set(ids).size !== ids.length;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("direct exercise replacement no duplicate tests passed");
