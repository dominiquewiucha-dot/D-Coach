const fs = require("fs");
const { execFileSync } = require("child_process");

const addedExerciseIds = [
  "ex_single_arm_chest_press_machine",
  "ex_high_row_machine",
  "ex_low_row_machine",
  "ex_iso_lateral_row_machine",
  "ex_pullover_machine",
  "ex_hammer_curl_cable_rope",
  "ex_cable_lateral_raise_single_arm",
  "ex_overhead_triceps_extension_cable_rope",
  "ex_triceps_extension_machine",
  "ex_pendulum_squat_machine",
  "ex_belt_squat_machine",
  "ex_single_leg_press",
  "ex_leg_extension_single_leg",
  "ex_leg_curl_single_leg_seated",
  "ex_hip_abduction_machine",
  "ex_hip_adduction_machine",
  "ex_glute_kickback_machine",
  "ex_tibialis_raise_machine",
  "ex_ab_crunch_machine",
  "ex_rotary_torso_machine",
  "ex_cable_crunch_kneeling"
];

const existingAliasTargets = {
  ex_pec_deck: ["Butterfly", "Pec Deck", "Pec-Deck", "Chest Fly Machine", "Machine Fly"],
  ex_decline_chest_press_machine: ["Decline Chest Press Machine", "Brustpresse negativ"],
  ex_straight_arm_pulldown: ["Straight Arm Pulldown", "Lat Prayer", "Kabel-Pullover"],
  ex_preacher_curl_machine: ["Preacher Curl Machine", "Bizepsmaschine Scottcurl"],
  ex_machine_lateral_raise: ["Lateral Raise Machine", "Schulter-Seithebemaschine"],
  ex_hack_squat_machine: ["Hack Squat Machine", "Hackenschmidt Kniebeuge"],
  ex_leg_press_45: ["45 Degree Leg Press", "Schräge Beinpresse"],
  ex_calf_raise_machine_standing: ["Standing Calf Raise Machine", "Stehende Wadenmaschine"],
  ex_dead_bug: ["Käferübung", "Deadbug"],
  ex_bird_dog: ["Vierfüßler diagonal", "Bird-Dog"]
};

const forbiddenRuntimeFiles = new Set([
  "app.js",
  "index.html",
  "styles.css",
  "production/production-muscle-map.js"
]);

const seed = readJson("seed_training_database.json");
const core = readJson("data/exercise_core_v2.1.0.json");
const exerciseDatabases = [
  seed,
  readJson("data/exercises_extended_v1.1.0.json"),
  readJson("data/exercises_large_v1.2.0.json"),
  readJson("data/exercises_knowledge_v1.3.0.json"),
  readJson("data/exercises_plus_v1.4.0.json"),
  core
];
const baseMapping = readJson("data/exercise_muscle_mapping.json");
const finalMapping = readJson("data/exercise_muscle_mapping_v2.1.0.json");
const muscles = new Set(readJson("data/muscles.json").muscleGroups.map((muscle) => muscle.id));

assertUniqueIds(seed.exercises, "seed");
assertUniqueIds(core.exercises, "core");
assertUniqueAliases(seed.exercises, "seed");
assertUniqueAliases(core.exercises, "core");

for (const id of addedExerciseIds) {
  const seedExercise = byId(seed.exercises, id);
  const coreExercise = byId(core.exercises, id);
  assert(seedExercise, `${id} missing from seed`);
  assert(coreExercise, `${id} missing from core`);
  assert(seedExercise.category, `${id} missing category`);
  assert(coreExercise.category, `${id} missing core category`);
  assert((seedExercise.primaryMuscleGroups || []).length > 0, `${id} missing primary muscle`);
  assert(seedExercise.defaultSets >= 1, `${id} missing default sets`);
  assert(seedExercise.defaultRepRange, `${id} missing default rep range`);
  assert(seedExercise.defaultRestSeconds > 0, `${id} missing rest`);
  assert(mappingById(baseMapping, id), `${id} missing base mapping`);
  assert(mappingById(finalMapping, id), `${id} missing final mapping`);
}

for (const [id, aliases] of Object.entries(existingAliasTargets)) {
  const exercise = findExercise(id);
  assert(exercise, `${id} alias target missing`);
  for (const alias of aliases) assert((exercise.aliases || []).includes(alias), `${id} missing alias ${alias}`);
}

const pecDeck = byId(core.exercises, "ex_pec_deck");
const reversePecDeck = byId(core.exercises, "ex_reverse_pec_deck") || byId(seed.exercises, "ex_reverse_pec_deck");
assert(pecDeck, "Butterfly Maschine missing");
assert(reversePecDeck, "Reverse Butterfly missing");
assert(pecDeck.id !== reversePecDeck.id, "normal and reverse butterfly must stay separate");
assert(searchText(pecDeck).includes("push"), "Butterfly Maschine must be Push");
assert(!searchText(pecDeck).includes("pull"), "Butterfly Maschine must not be Pull");
assert(searchText(reversePecDeck).includes("pull") || mappingById(finalMapping, reversePecDeck.id)?.primaryMuscle === "mg_rear_delts", "Reverse Butterfly must stay Pull/rear delt");

for (const mapping of [...baseMapping.mappings, ...finalMapping.mappings]) {
  const ids = [
    mapping.primaryMuscle,
    ...(mapping.secondaryMuscles || []).map((item) => item.muscleId),
    ...(mapping.stabilizers || []).map((item) => item.muscleId)
  ].filter(Boolean);
  for (const muscleId of ids) assert(muscles.has(muscleId), `${mapping.exerciseId} uses unknown muscle ${muscleId}`);
}

const exerciseIds = new Set([...seed.exercises, ...core.exercises].map((exercise) => exercise.id));
for (const plan of seed.trainingPlans || []) {
  for (const day of plan.days || []) {
    for (const entry of day.exercises || []) {
      const exerciseId = typeof entry === "string" ? entry : entry.exerciseId;
      assert(exerciseIds.has(exerciseId), `old plan ${plan.id || plan.planName} references missing ${exerciseId}`);
    }
  }
}

const changedFiles = execFileSync("git", ["diff", "--name-only", "HEAD"], { encoding: "utf8" })
  .split(/\r?\n/)
  .filter(Boolean)
  .map((file) => file.replace(/\\/g, "/"));
for (const file of changedFiles) {
  assert(!forbiddenRuntimeFiles.has(file), `forbidden runtime file changed: ${file}`);
}
const swDiff = execFileSync("git", ["diff", "--", "sw.js"], { encoding: "utf8" });
assert(!swDiff || /^diff --git[\s\S]*-const CACHE_NAME = "dcoach-pwa-v85";[\s\S]*\+const CACHE_NAME = "dcoach-pwa-v86";[\s\S]*$/.test(swDiff), "sw.js may only change CACHE_NAME");

function readJson(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

function byId(exercises, id) {
  return (exercises || []).find((exercise) => exercise.id === id);
}

function findExercise(id) {
  for (const database of exerciseDatabases) {
    const exercise = byId(database.exercises, id);
    if (exercise) return exercise;
  }
  return null;
}

function mappingById(database, id) {
  return (database.mappings || []).find((mapping) => mapping.exerciseId === id);
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function assertUniqueIds(exercises, label) {
  const ids = (exercises || []).map((exercise) => exercise.id);
  assert(new Set(ids).size === ids.length, `${label} exercise ids are not unique`);
}

function assertUniqueAliases(exercises, label) {
  const seen = new Map();
  for (const exercise of exercises || []) {
    for (const raw of [exercise.displayName, exercise.englishName, ...(exercise.aliases || [])].filter(Boolean)) {
      const key = normalize(raw);
      if (!key) continue;
      const current = seen.get(key);
      assert(!current || current === exercise.id, `${label} alias ${raw} resolves to ${current} and ${exercise.id}`);
      seen.set(key, exercise.id);
    }
  }
}

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function searchText(exercise) {
  return [
    exercise.displayName,
    exercise.englishName,
    exercise.category,
    exercise.movementPattern,
    ...(exercise.aliases || []),
    ...(exercise.tags || []),
    ...(exercise.primaryMuscleGroups || []),
    ...(exercise.secondaryMuscleGroups || [])
  ].join(" ").toLowerCase();
}

console.log("exercise library data-only expansion tests passed");
