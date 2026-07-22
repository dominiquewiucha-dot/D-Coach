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

const plans = [
  {
    id: "plan_a",
    planName: "3er Split Wiedereinstieg LWS-schonend",
    active: true,
    activeAt: "2026-07-20T08:00:00.000Z",
    days: [{ id: "push_a", name: "Push", exercises: [{ exerciseId: "ex_push_a" }] }]
  },
  {
    id: "plan_b",
    planName: "3er Split Wiedereinstieg LWS-schonend",
    active: true,
    activeAt: "2026-07-21T08:00:00.000Z",
    days: [{ id: "pull_b", name: "Pull", exercises: [{ exerciseId: "ex_pull_b" }] }]
  },
  {
    id: "plan_c",
    planName: "Andere Vorlage",
    days: [{ id: "legs_c", name: "Beine", exercises: [{ exerciseId: "ex_legs_c" }] }]
  }
];

const sandbox = {
  Date,
  JSON,
  state: { seed: { trainingPlans: [plans[0]], exercises: [] } },
  storage: {
    activePlanName: "3er Split Wiedereinstieg LWS-schonend",
    archivedPlanNames: [],
    customPlans: [plans[1], plans[2]],
    deletedPlanNames: []
  },
  htmlesc: (value) => String(value || "")
};
vm.createContext(sandbox);
[
  "stableIdPart",
  "stablePlanId",
  "stablePlanDayId",
  "availablePlans",
  "isPlanArchived",
  "activePlan",
  "planByIdOrName",
  "planForWorkoutDraft",
  "activatePlan",
  "activeFlagTimestamp",
  "normalizeActivePlanIntegrity",
  "ensureActivePlan",
  "planStatus",
  "isValidActiveWorkoutDraft",
  "getPlannedExerciseId",
  "workoutDraftPlanMatchIds",
  "workoutDayExerciseMatchCount",
  "normalizedPlannedExercise",
  "normalizedPlanDay",
  "normalizedPlanDays",
  "findPlanDayByStableId",
  "workoutDraftIntegrity"
].forEach((name) => vm.runInContext(extractFunctionSource(name), sandbox));

const audit = sandbox.normalizeActivePlanIntegrity();
assert(audit.activeFlagCount === 2, "two active plans must be detected");
assert(sandbox.storage.activePlanName === "plan_b", "latest active plan id must be retained");
assert(sandbox.storage.customPlans.filter((plan) => plan.active === true).length === 1, "only one custom plan may keep active flag");
assert(sandbox.activePlan().id === "plan_b", "active plan must resolve by id, not duplicate name");
assert(sandbox.planStatus(plans[0]) !== "Aktiv", "same-name seed plan must not also show active");
assert(sandbox.planStatus(sandbox.storage.customPlans[0]) === "Aktiv", "selected plan must show active");

sandbox.activatePlan("plan_c");
assert(sandbox.storage.activePlanName === "plan_c", "activation must store stable plan id");
assert(sandbox.activePlan().id === "plan_c", "activation must switch active plan");
assert(sandbox.storage.customPlans.filter((plan) => plan.active === true).length === 1, "activation must deactivate all other custom plans");

const draft = {
  planId: "plan_b",
  planName: "3er Split Wiedereinstieg LWS-schonend",
  dayId: "pull_b",
  dayName: "Pull",
  startedAt: "2026-07-22T08:00:00.000Z",
  index: 0,
  entries: [{
    plannedExerciseId: "ex_pull_b",
    alternativeForExerciseId: "ex_pull_b",
    exerciseId: "ex_replacement_outside_plan",
    sourceDayId: "pull_b"
  }]
};

assert(sandbox.planForWorkoutDraft(draft).id === "plan_b", "workout must resolve by draft planId");
assert(sandbox.workoutDayExerciseMatchCount(sandbox.planForWorkoutDraft(draft).days[0], draft) === 1, "workout integrity must use planned id");
assert(sandbox.workoutDraftIntegrity(draft).valid === true, "draft must stay valid after active plan switch");

const appSelectAlternative = extractFunctionSource("selectAlternative");
assert(!appSelectAlternative.includes("activePlan("), "exercise swap apply must not read global activePlan");
assert(app.includes("const integrity = workoutDraftIntegrity(nextWorkout, planByIdOrName(nextWorkout.planId));"), "workout start integrity must use locked draft plan id");
assert(app.includes("planId: workout.planId || workout.planName"), "workout completion must persist draft plan id");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("active plan data integrity tests passed");
