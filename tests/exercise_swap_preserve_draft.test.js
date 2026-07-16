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
  ex_leg_press: { id: "ex_leg_press", displayName: "Beinpresse" },
  ex_bulgarian_split_squat: { id: "ex_bulgarian_split_squat", displayName: "Bulgarian Split Squat" },
  ex_leg_curl_seated: { id: "ex_leg_curl_seated", displayName: "Beinbeuger sitzend" },
  ex_leg_extension: { id: "ex_leg_extension", displayName: "Beinstrecker" },
  ex_calf_raise_machine: { id: "ex_calf_raise_machine", displayName: "Wadenheben Maschine" },
  ex_pallof_press: { id: "ex_pallof_press", displayName: "Pallof Press" },
  ex_plank: { id: "ex_plank", displayName: "Plank" },
  ex_hack_squat: { id: "ex_hack_squat", displayName: "Hack Squat" },
  ex_chest_press: { id: "ex_chest_press", displayName: "Brustpresse" }
};

const sandbox = {
  JSON,
  Date,
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
  "validateReplacementCandidate",
  "validateDraftExerciseReplacement",
  "replaceDraftExercise"
].forEach((name) => vm.runInContext(extractFunctionSource(name), sandbox));

const originalPlan = syntheticPlan();
const originalDraft = syntheticDraft();
const beforeChecksum = completedInputChecksum(originalDraft);
const result = sandbox.replaceDraftExercise({
  draft: originalDraft,
  entryIndex: 3,
  replacementExerciseId: "ex_hack_squat",
  confirmStartedReplacement: () => false
});

assert(result.ok, "unbegun replacement must succeed");
assert(result.draft.planId === originalDraft.planId, "plan id changed");
assert(result.draft.dayId === originalDraft.dayId, "day id changed");
assert(result.draft.entries.length === originalDraft.entries.length, "entry count changed");
assert(result.draft.index === originalDraft.index, "current index changed");
assert(result.draft.warmups[0].id === originalDraft.warmups[0].id, "warmup changed");
assert(result.draft.entries[3].exerciseId === "ex_hack_squat", "replacement id missing");
assert(result.draft.entries[3].sourceDayId === originalDraft.dayId, "source day id must stay draft day id");
assert(result.draft.entries.every((entry) => entry.sourceDayId === originalDraft.dayId), "all source day ids must match day");
assert(JSON.stringify(result.draft.entries[0]) === JSON.stringify(originalDraft.entries[0]), "previous entry data changed");
assert(JSON.stringify(result.draft.entries[5]) === JSON.stringify(originalDraft.entries[5]), "following entry data changed");
assert(completedInputChecksum(result.draft) === beforeChecksum, "completed input checksum changed");
assert(JSON.stringify(originalPlan) === JSON.stringify(syntheticPlan()), "plan must not be mutated");

const startedCancel = sandbox.replaceDraftExercise({
  draft: originalDraft,
  entryIndex: 0,
  replacementExerciseId: "ex_hack_squat",
  confirmStartedReplacement: () => false
});
assert(!startedCancel.ok && startedCancel.cancelled, "started replacement must require confirmation");
assert(JSON.stringify(startedCancel.originalDraft) === JSON.stringify(originalDraft), "cancel must preserve original draft");

const startedConfirmed = sandbox.replaceDraftExercise({
  draft: originalDraft,
  entryIndex: 0,
  replacementExerciseId: "ex_hack_squat",
  confirmStartedReplacement: () => true
});
assert(startedConfirmed.ok, "confirmed started replacement must succeed");
assert(startedConfirmed.draft.entries[0].sets.every((set) => !set.completed && !set.weightText && !set.repsText && !set.rirText), "started replacement must clear old set inputs");
assert(JSON.stringify(startedConfirmed.draft.entries[1]) === JSON.stringify(originalDraft.entries[1]), "unrelated entry changed after confirmed replacement");

const invalid = sandbox.replaceDraftExercise({
  draft: originalDraft,
  entryIndex: 2,
  replacementExerciseId: "ex_missing",
  confirmStartedReplacement: () => true
});
assert(!invalid.ok, "invalid replacement must fail");
assert(JSON.stringify(invalid.originalDraft) === JSON.stringify(originalDraft), "invalid replacement must keep rollback draft");

const validation = sandbox.validateDraftExerciseReplacement({
  originalDraft,
  candidate: { ...originalDraft, dayId: "wrong_day" },
  entryIndex: 3
});
assert(!validation.ok && validation.reason === "day_changed", "day change must be rejected");

assert(app.includes("if (state.activeWorkout && !state.showAlternatives) persistWorkoutDraft();"), "draft must be saved before alternative overlay");
assert(!app.includes("clearWorkoutDraft();\n  state.activeWorkout = null;"), "integrity guard must not delete invalid draft");

function syntheticPlan() {
  return {
    id: "plan_legs_core",
    days: [{
      id: "day_legs_core",
      name: "Beine + Core",
      exercises: ["ex_leg_press", "ex_bulgarian_split_squat", "ex_leg_curl_seated", "ex_leg_extension", "ex_calf_raise_machine", "ex_pallof_press", "ex_plank"]
    }]
  };
}

function syntheticDraft() {
  const exerciseIds = syntheticPlan().days[0].exercises;
  return {
    planId: "plan_legs_core",
    planName: "3er Split",
    dayId: "day_legs_core",
    dayName: "Beine + Core",
    startedAt: "2026-07-16T08:00:00.000Z",
    warmups: [{ id: "warmup_1", equipment: "Bike", durationMinutes: 8 }],
    sessionNote: "synthetic",
    index: 2,
    entries: exerciseIds.map((exerciseId, index) => ({
      exerciseId,
      sourceDayId: "day_legs_core",
      plannedSets: 2,
      reps: "8-12",
      restSeconds: 90,
      priority: "important",
      sortOrder: index + 1,
      seatPosition: index === 0 ? "4" : "",
      gripPosition: "",
      exerciseNote: index === 0 ? "kept note" : "",
      sets: [1, 2].map((setNumber) => ({
        setNumber,
        weightText: index < 2 ? String(100 + index * 10) : "",
        repsText: index < 2 ? "10" : "",
        rirText: index < 2 ? "2" : "",
        completed: index < 2
      }))
    }))
  };
}

function completedInputChecksum(draft) {
  return JSON.stringify(draft.entries.flatMap((entry) => entry.sets.filter((set) => set.completed).map((set) => [entry.exerciseId, set.setNumber, set.weightText, set.repsText, set.rirText])));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("exercise swap preserve draft behavior tests passed");
