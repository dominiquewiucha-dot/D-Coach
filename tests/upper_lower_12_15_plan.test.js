const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const presets = readJson(path.join(root, "data", "training_plan_presets_v1.3.0.json"));
const seed = readJson(path.join(root, "seed_training_database.json"));
const knowledge = readJson(path.join(root, "data", "exercises_knowledge_v1.3.0.json"));
const plus = readJson(path.join(root, "data", "exercises_plus_v1.4.0.json"));
const core = readJson(path.join(root, "data", "exercise_core_v2.1.0.json"));
const expansion = readJson(path.join(root, "data", "exercise_library_expansion_v2.0.0.json"));

const plan = presets.plans.find((item) => item.id === "plan_upper_lower_bild_12_15_v2");
assert(plan, "upper/lower 12-15 plan must exist");
assert.strictEqual(plan.name, "Oberkörper / Unterkörper - Bildplan 12-15");
assert.strictEqual(plan.goal, "Hypertrophie - Oberkörper / Unterkörper");
assert.strictEqual(plan.days.length, 2, "plan must contain upper and lower day");

const upper = plan.days.find((day) => day.id === "day_upper_lower_v2_upper");
const lower = plan.days.find((day) => day.id === "day_upper_lower_v2_lower");
assert(upper, "upper day missing");
assert(lower, "lower day missing");
assert.strictEqual(upper.name, "Oberkörper");
assert.strictEqual(lower.name, "Unterkörper");
assert.strictEqual(upper.exercises.length, 8, "upper day must have 8 exercises");
assert.strictEqual(lower.exercises.length, 6, "lower day must have 6 exercises");
assert.strictEqual(upper.exercises.reduce((sum, item) => sum + item.sets, 0), 23, "upper day must have 23 work sets");
assert.strictEqual(lower.exercises.reduce((sum, item) => sum + item.sets, 0), 16, "lower day must have 16 work sets");

for (const day of plan.days) {
  day.exercises.forEach((entry, index) => {
    assert.strictEqual(entry.reps, "12-15", `${entry.exerciseId} must use 12-15 reps`);
    assert.strictEqual(entry.sortOrder, index + 1, `${entry.exerciseId} sort order must be stable`);
    assert(["required", "important"].includes(entry.priority), `${entry.exerciseId} priority invalid`);
  });
}

const catalog = new Set([seed, knowledge, plus, core, expansion].flatMap((database) => (database.exercises || []).map((exercise) => exercise.id)));
for (const entry of plan.days.flatMap((day) => day.exercises)) {
  assert(catalog.has(entry.exerciseId), `${entry.exerciseId} must exist in exercise catalog`);
}

console.log("upper/lower 12-15 plan tests passed");

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}
