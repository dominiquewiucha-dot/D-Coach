const assert = require("assert");
const fs = require("fs");
const { execFileSync } = require("child_process");

const plus = readJson("data/exercises_plus_v1.4.0.json");
const plusMapping = readJson("data/exercise_muscle_mapping_plus_v1.4.0.json");
const seed = readJson("seed_training_database.json");
const knowledge = readJson("data/exercises_knowledge_v1.3.0.json");
const core = readJson("data/exercise_core_v2.1.0.json");
const muscles = new Set(readJson("data/muscles.json").muscleGroups.map((muscle) => muscle.id));
const equipment = new Set([
  ...readJson("data/equipment_v1.1.0.json").equipment,
  ...readJson("data/equipment_v1.2.0.json").equipment
].map((item) => item.id));

const legacyDuplicateRemovalIds = [
  "ex_seated_row_var_034",
  "ex_seated_row_var_044",
  "ex_incline_chest_press_machine_var_121",
  "ex_seated_leg_curl_var_122",
  "ex_lateral_raise_var_140",
  "ex_shoulder_press_machine_var_116",
  "ex_leg_extension_var_129",
  "ex_seated_leg_curl_var_033",
  "ex_incline_chest_press_machine_var_103",
  "ex_leg_extension_var_039",
  "ex_leg_extension_var_147",
  "ex_chest_supported_row_var_028",
  "ex_bulgarian_split_squat_var_043",
  "ex_bulgarian_split_squat_var_127",
  "ex_bulgarian_split_squat_var_083",
  "ex_chest_press_machine_var_092",
  "ex_chest_press_machine_var_150",
  "ex_pallof_press_var_035",
  "ex_pallof_press_var_047",
  "ex_bulgarian_split_squat_var_065",
  "ex_calf_raise_machine_var_135",
  "ex_chest_press_machine_var_105",
  "ex_seated_leg_curl_var_125",
  "ex_chest_press_machine_var_062",
  "ex_calf_raise_machine_var_071",
  "ex_cable_fly_var_057",
  "ex_cable_fly_var_126",
  "ex_calf_raise_machine_var_106",
  "ex_triceps_pushdown_var_067",
  "ex_triceps_pushdown_var_114",
  "ex_barbell_bench_press_var_142",
  "ex_leg_extension_var_137",
  "ex_cable_fly_var_068",
  "ex_face_pull_var_077",
  "ex_lat_pulldown_var_078",
  "ex_seated_row_var_148",
  "ex_leg_press_var_145",
  "ex_leg_press_var_149",
  "ex_incline_chest_press_machine_var_134",
  "ex_face_pull_var_118",
  "ex_leg_press_var_143",
  "ex_triceps_pushdown_var_131",
  "ex_triceps_pushdown_var_144",
  "ex_calf_raise_machine_var_102",
  "ex_leg_extension_var_119",
  "ex_seated_leg_curl_var_128",
  "ex_seated_leg_curl_var_138"
];

assertUniqueExerciseIds(plus.exercises, "exercises_plus");
assertUniqueNamesAndAliases(plus.exercises, "exercises_plus");

for (const id of legacyDuplicateRemovalIds) {
  assert(!plus.exercises.some((exercise) => exercise.id === id), `legacy duplicate exercise must stay removed: ${id}`);
  assert(!plusMapping.mappings.some((mapping) => mapping.exerciseId === id), `legacy duplicate mapping must stay removed: ${id}`);
}

for (const exercise of plus.exercises) {
  assert(equipment.has(exercise.equipmentId), `${exercise.id} uses unknown equipment ${exercise.equipmentId}`);
  assert(["Push", "Pull", "Legs", "Core"].includes(exercise.category), `${exercise.id} uses invalid split tag ${exercise.category}`);
  assert(!/variante\s*\d+|duplicate|kopie/i.test(exercise.displayName), `${exercise.id} uses artificial duplicate naming`);
}

for (const mapping of plusMapping.mappings) {
  assert(plus.exercises.some((exercise) => exercise.id === mapping.exerciseId), `${mapping.exerciseId} mapping has no exercise`);
  for (const muscleId of [
    mapping.primaryMuscle,
    ...(mapping.secondaryMuscles || []).map((item) => item.muscleId),
    ...(mapping.stabilizers || []).map((item) => item.muscleId)
  ].filter(Boolean)) {
    assert(muscles.has(muscleId), `${mapping.exerciseId} uses unknown muscle ${muscleId}`);
  }
}

const runtimeCatalog = [knowledge, plus, core].reduce((catalog, database) => mergeExercises(catalog, database.exercises), seed.exercises);
assertUniqueExerciseIds(runtimeCatalog, "runtime catalog");
assertUniqueNamesAndAliases(runtimeCatalog, "runtime catalog");
assertPlanReferencesResolve(runtimeCatalog);

const pecDeck = byId(runtimeCatalog, "ex_pec_deck");
const reversePecDeck = byId(runtimeCatalog, "ex_reverse_pec_deck");
assert(pecDeck, "normal Butterfly/Pec Deck must exist");
assert(reversePecDeck, "Reverse Butterfly must exist");
assert.notStrictEqual(pecDeck.id, reversePecDeck.id, "normal and reverse Butterfly must remain separate");

if (process.env.DCOACH_ENFORCE_DATA_ONLY === "1") {
  const changedFiles = execFileSync("git", ["diff", "--name-only", "HEAD"], { encoding: "utf8" })
    .split(/\r?\n/)
    .filter(Boolean)
    .map((file) => file.replace(/\\/g, "/"));
  const forbiddenLogicFiles = changedFiles.filter((file) => [
    "index.html",
    "styles.css",
    "production/production-muscle-map.js"
  ].includes(file));
  assert.deepStrictEqual(forbiddenLogicFiles, [], "workout/generator/navigation runtime files must not change");
}

console.log("exercise plus integrity tests passed");

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function byId(exercises, id) {
  return exercises.find((exercise) => exercise.id === id);
}

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function uniqueValues(...lists) {
  return [...new Set(lists.flat().filter(Boolean))];
}

function normalizeExercise(raw, existing = null) {
  return {
    ...raw,
    ...existing,
    englishName: raw.englishName || existing?.englishName || "",
    aliases: uniqueValues(existing?.aliases || [], raw.aliases || [], raw.englishName ? [raw.englishName] : []),
    primaryMuscleGroups: raw.primaryMuscleGroups || existing?.primaryMuscleGroups || [],
    secondaryMuscleGroups: raw.secondaryMuscleGroups || existing?.secondaryMuscleGroups || [],
    movementPattern: raw.movementPattern || existing?.movementPattern || "Allgemein",
    category: raw.category || existing?.category || "Uebung",
    tags: uniqueValues(existing?.tags || [], raw.tags || [])
  };
}

function mergeExercises(existing = [], incoming = []) {
  const map = new Map(existing.map((exercise) => [exercise.id, exercise]));
  for (const exercise of incoming || []) {
    map.set(exercise.id, normalizeExercise(exercise, map.get(exercise.id) || null));
  }
  return [...map.values()];
}

function assertUniqueExerciseIds(exercises, label) {
  const ids = exercises.map((exercise) => exercise.id);
  assert.strictEqual(new Set(ids).size, ids.length, `${label} exercise ids must be unique`);
}

function assertUniqueNamesAndAliases(exercises, label) {
  const names = new Map();
  const aliases = new Map();
  for (const exercise of exercises) {
    const nameKey = normalize(exercise.displayName);
    if (nameKey) {
      const previous = names.get(nameKey);
      assert(!previous || previous === exercise.id, `${label} duplicate canonical name ${exercise.displayName}: ${previous} / ${exercise.id}`);
      names.set(nameKey, exercise.id);
    }
    for (const rawAlias of [exercise.displayName, exercise.englishName, ...(exercise.aliases || [])].filter(Boolean)) {
      const aliasKey = normalize(rawAlias);
      const previous = aliases.get(aliasKey);
      assert(!previous || previous === exercise.id, `${label} duplicate alias ${rawAlias}: ${previous} / ${exercise.id}`);
      aliases.set(aliasKey, exercise.id);
    }
  }
}

function assertPlanReferencesResolve(runtimeCatalog) {
  const ids = new Set(runtimeCatalog.map((exercise) => exercise.id));
  for (const planFile of ["seed_training_database.json", "data/training_plans_full_v1.2.0.json", "data/training_plans_library_v1.1.0.json"]) {
    const database = readJson(planFile);
    for (const plan of [...(database.trainingPlans || []), ...(database.plans || [])]) {
      for (const day of plan.days || []) {
        for (const entry of day.exercises || []) {
          const exerciseId = typeof entry === "string" ? entry : entry.exerciseId;
          assert(ids.has(exerciseId), `${planFile} references unresolved exercise ${exerciseId}`);
        }
      }
    }
  }
}
