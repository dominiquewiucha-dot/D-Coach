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
  ex_shoulder_press_machine: { id: "ex_shoulder_press_machine", displayName: "Schulterpresse Maschine" },
  ex_lateral_raise: { id: "ex_lateral_raise", displayName: "Seitheben" },
  ex_triceps_pushdown: { id: "ex_triceps_pushdown", displayName: "Trizepsdruecken" },
  ex_cable_flys: { id: "ex_cable_flys", displayName: "Kabel-Flys" },
  ex_dumbbell_chest_press: { id: "ex_dumbbell_chest_press", displayName: "Kurzhantel Bankdruecken" },
  ex_machine_fly: { id: "ex_machine_fly", displayName: "Butterfly Maschine" }
};

const plan = {
  id: "plan_push",
  planName: "Push",
  days: [{
    id: "day_push",
    name: "Push",
    exercises: [
      "ex_chest_press_machine",
      "ex_incline_chest_press_machine",
      "ex_shoulder_press_machine",
      "ex_lateral_raise",
      "ex_triceps_pushdown",
      "ex_cable_flys"
    ].map((exerciseId, index) => ({ exerciseId, sets: 2, reps: "8-12", restSeconds: 90, sortOrder: index + 1 }))
  }]
};

const sandbox = {
  JSON,
  Date,
  Map,
  alertMessages: [],
  renderCount: 0,
  trainingStartViewVisible: false,
  resumeCardVisible: false,
  workoutViewVisible: false,
  state: {
    activeWorkout: syntheticDraft(),
    showAlternatives: true,
    selectedExerciseId: null,
    selectedSessionId: null,
    currentView: ""
  },
  storage: {
    activeWorkoutDraft: syntheticDraft()
  },
  activePlan: () => plan,
  findPlanDayByStableId: (active, value) => active.days.find((day) => day.id === value || day.name === value) || null,
  exerciseById: (id) => exercises[id] || null,
  confirm: () => true,
  alert: () => {},
  persistWorkoutDraft: () => {},
  renderActiveWorkoutView: () => {}
};

sandbox.alert = (message) => {
  sandbox.alertMessages.push(message);
};
sandbox.persistWorkoutDraft = () => {
  sandbox.storage.activeWorkoutDraft = JSON.parse(JSON.stringify(sandbox.state.activeWorkout));
};
sandbox.renderActiveWorkoutView = () => {
  sandbox.renderCount += 1;
  sandbox.workoutViewVisible = Boolean(sandbox.state.activeWorkout);
};

vm.createContext(sandbox);
[
  "workoutDraftPlanMatchIds",
  "workoutDayExerciseMatchCount",
  "cloneWorkoutDraft",
  "entryHasRecordedTrainingData",
  "emptySetsForReplacement",
  "getPlannedExerciseId",
  "canonicalExerciseId",
  "getOccupiedExerciseIds",
  "replacementCandidateId",
  "filterUniqueExerciseAlternatives",
  "validateReplacementCandidate",
  "exerciseExistsInDatabase",
  "selectedExerciseFromDatabase",
  "planExerciseIdsForDraftDay",
  "preservedSetChecksum",
  "validateDraftExerciseReplacement",
  "replaceExerciseInActiveWorkout",
  "replaceDraftExercise",
  "selectAlternative"
].forEach((name) => vm.runInContext(extractFunctionSource(name), sandbox));

const before = JSON.parse(JSON.stringify(sandbox.state.activeWorkout));
const beforePreviousSet = JSON.stringify(before.entries[1].sets);

sandbox.selectAlternative("ex_dumbbell_chest_press");

const after = sandbox.state.activeWorkout;
assert(sandbox.workoutViewVisible === true, "workout view must stay visible");
assert(sandbox.trainingStartViewVisible === false, "training start must not become visible");
assert(sandbox.resumeCardVisible === false, "resume card must not become visible");
assert(sandbox.renderCount === 1, "apply path must render the open workout once");
assert(sandbox.alertMessages.length === 0, "valid replacement must not alert");
assert(after.planId === before.planId, "plan id changed");
assert(after.dayId === before.dayId, "day id changed");
assert(after.dayName === before.dayName, "day name changed");
assert(after.startedAt === before.startedAt, "startedAt changed");
assert(after.index === before.index, "current entry index changed");
assert(after.warmups[0].id === before.warmups[0].id, "warmup changed");
assert(after.entries.length === before.entries.length, "entry count changed");
assert(after.entries[0].plannedExerciseId === "ex_chest_press_machine", "planned exercise id must remain original chest press");
assert(after.entries[0].alternativeForExerciseId === "ex_chest_press_machine", "alternative source must remain original chest press");
assert(after.entries[0].exerciseId === "ex_dumbbell_chest_press", "replacement exercise id missing");
assert(after.entries[0].sourceDayId === "day_push", "source day id changed");
assert(JSON.stringify(after.entries[1].sets) === beforePreviousSet, "previous completed set data changed");
assert(JSON.stringify(after.entries[2]) === JSON.stringify(before.entries[2]), "unrelated exercise changed");
assert(JSON.stringify(after.entries[5]) === JSON.stringify(before.entries[5]), "later exercise changed");
assert(sandbox.storage.activeWorkoutDraft.entries[0].exerciseId === "ex_dumbbell_chest_press", "saved draft missing replacement");
assert(sandbox.workoutDayExerciseMatchCount(plan.days[0], after) === after.entries.length, "integrity matching must use planned ids");

const reloaded = JSON.parse(JSON.stringify(sandbox.storage.activeWorkoutDraft));
sandbox.state.activeWorkout = reloaded;
const reloadValidation = sandbox.validateDraftExerciseReplacement({
  originalDraft: before,
  candidate: reloaded,
  entryIndex: 0,
  exerciseDatabase: exercises
});
assert(reloadValidation.ok, `reload draft invalid: ${reloadValidation.reason || "unknown"}`);
assert(reloaded.entries[0].exerciseId === "ex_dumbbell_chest_press", "reload lost replacement");
assert(JSON.stringify(reloaded.entries[1].sets) === beforePreviousSet, "reload lost previous set data");

sandbox.alertMessages = [];
sandbox.renderCount = 0;
sandbox.state.activeWorkout = syntheticDraft();
sandbox.storage.activeWorkoutDraft = syntheticDraft();
const duplicateBefore = JSON.stringify(sandbox.state.activeWorkout);
sandbox.selectAlternative("ex_cable_flys");
assert(sandbox.alertMessages[0] === "Diese Übung ist in deinem aktuellen Training bereits enthalten.", "duplicate message mismatch");
assert(JSON.stringify(sandbox.state.activeWorkout) === duplicateBefore, "duplicate replacement changed draft");
assert(sandbox.workoutViewVisible === true, "duplicate must keep workout open");

sandbox.alertMessages = [];
sandbox.renderCount = 0;
sandbox.state.activeWorkout = syntheticDraft();
sandbox.state.activeWorkout.index = 1;
sandbox.storage.activeWorkoutDraft = JSON.parse(JSON.stringify(sandbox.state.activeWorkout));
sandbox.confirm = () => false;
const cancelBefore = JSON.stringify(sandbox.state.activeWorkout);
sandbox.selectAlternative("ex_machine_fly");
assert(JSON.stringify(sandbox.state.activeWorkout) === cancelBefore, "cancelled started replacement changed draft");
assert(sandbox.alertMessages.length === 0, "cancelled replacement must be silent");
assert(sandbox.workoutViewVisible === true, "cancelled replacement must keep workout open");

sandbox.state.activeWorkout = syntheticDraft();
sandbox.state.activeWorkout.index = 1;
sandbox.storage.activeWorkoutDraft = JSON.parse(JSON.stringify(sandbox.state.activeWorkout));
sandbox.confirm = () => true;
sandbox.selectAlternative("ex_machine_fly");
assert(sandbox.state.activeWorkout.entries[1].exerciseId === "ex_machine_fly", "confirmed started replacement missing");
assert(sandbox.state.activeWorkout.entries[1].sets.every((set) => !set.completed && !set.weightText && !set.repsText && !set.rirText), "confirmed replacement must clear only selected entry sets");
assert(JSON.stringify(sandbox.state.activeWorkout.entries[0]) === JSON.stringify(syntheticDraft().entries[0]), "confirmed replacement changed another entry");

const selectSource = extractFunctionSource("selectAlternative");
[
  "resolveTrainingDay",
  "nextPlanDayAfterLastSession",
  "startTrainingFlow",
  "openPreWorkoutReview",
  "renderTrainingStart",
  "resumeWorkout",
  "repairWorkoutDraftDayLabel"
].forEach((forbidden) => assert(!selectSource.includes(forbidden), `${forbidden} must not be called during replacement apply`));
assert(selectSource.includes("renderActiveWorkoutView();"), "replacement apply must render active workout view directly");

function syntheticDraft() {
  return {
    planId: "plan_push",
    planName: "Push",
    dayId: "day_push",
    dayName: "Push",
    startedAt: "2026-07-20T06:30:00.000Z",
    warmups: [{ id: "warmup_1", equipment: "Crosstrainer", durationMinutes: 10, completed: true }],
    sessionNote: "kept",
    index: 0,
    entries: plan.days[0].exercises.map((planned, index) => ({
      plannedExerciseId: planned.exerciseId,
      exerciseId: planned.exerciseId,
      sourceDayId: "day_push",
      plannedSets: planned.sets,
      reps: planned.reps,
      restSeconds: planned.restSeconds,
      sortOrder: planned.sortOrder,
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

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("exercise swap keeps workout open behavior tests passed");
