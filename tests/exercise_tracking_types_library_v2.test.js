const assert = require("assert");
const fs = require("fs");

const app = fs.readFileSync("app.js", "utf8");
const sw = fs.readFileSync("sw.js", "utf8");
const html = fs.readFileSync("index.html", "utf8");
const seed = readJson("seed_training_database.json");
const knowledge = readJson("data/exercises_knowledge_v1.3.0.json");
const plus = readJson("data/exercises_plus_v1.4.0.json");
const core = readJson("data/exercise_core_v2.1.0.json");
const expansion = readJson("data/exercise_library_expansion_v2.0.0.json");

assert(app.includes('const APP_VERSION = "pwa-v94";'), "app version must be pwa-v94");
assert(sw.includes('const CACHE_NAME = "dcoach-pwa-v94";'), "cache version must be pwa-v94");
assert(html.includes("app.js?v=pwa-v94"), "index app cache buster must be pwa-v94");
assert(sw.includes("./data/exercise_library_expansion_v2.0.0.json"), "service worker must cache V2 exercise library");

[
  "strength_weight_reps",
  "bodyweight_reps",
  "bodyweight_time",
  "weighted_time",
  "distance_time",
  "cardio_time",
  "weighted_distance_time"
].forEach((type) => assert(expansion.trackingTypes.includes(type), `${type} missing from expansion tracking types`));

const runtimeCatalog = [knowledge, plus, core, expansion].reduce((catalog, database) => mergeExercises(catalog, database.exercises), seed.exercises);
assert(runtimeCatalog.length >= 800, `runtime catalog must contain at least 800 exercises, got ${runtimeCatalog.length}`);
assert(expansion.exercises.length >= 500, "V2 expansion must add a substantial exercise set");

const plank = byId(runtimeCatalog, "ex_plank");
const sidePlank = byId(runtimeCatalog, "ex_side_plank");
const wallSit = byId(runtimeCatalog, "ex_wall_sit");
const farmerWalk = byId(runtimeCatalog, "ex_farmer_walk");
const treadmill = byId(runtimeCatalog, "ex_treadmill_walk");
const bike = byId(runtimeCatalog, "ex_bike");
const rower = byId(runtimeCatalog, "ex_rowing_ergometer");

assert.strictEqual(plank.trackingType, "bodyweight_time", "Plank must be time tracked");
assert.strictEqual(sidePlank.trackingType, "bodyweight_time", "Side Plank must be time tracked");
assert.strictEqual(sidePlank.unilateral, true, "Side Plank must expose left/right side tracking");
assert.strictEqual(wallSit.trackingType, "bodyweight_time", "Wall Sit must be time tracked");
assert.strictEqual(farmerWalk.trackingType, "weighted_distance_time", "Farmer Walk must track weight plus distance/time");
assert.strictEqual(treadmill.trackingType, "cardio_time", "Treadmill must track cardio time/distance");
assert.strictEqual(bike.trackingType, "cardio_time", "Bike must track cardio time/distance");
assert.strictEqual(rower.trackingType, "cardio_time", "Rowing ergometer must track cardio time/distance");

assert(app.includes("function trackingFieldsForExercise(exercise)"), "tracking fields helper missing");
assert(app.includes('if (field === "durationSecondsText")'), "duration field renderer missing");
assert(app.includes('if (field === "distanceText")'), "distance field renderer missing");
assert(app.includes('if (field === "sideText")'), "side field renderer missing");
assert(app.includes("setPerformanceText(set, exercise)"), "last performance must use tracking-aware formatter");
assert(app.includes("actualDurationSeconds: parseDurationSeconds(set.durationSecondsText)"), "duration must be persisted");
assert(app.includes("actualDistance: parseNumber(set.distanceText)"), "distance must be persisted");
assert(app.includes("actualAddedWeightKg: parseNumber(set.addedWeightText)"), "added weight must be persisted");
assert(app.includes("mergeAlternativeRules(exerciseLibraryExpansionV2)"), "V2 alternatives must be merged");

assert(search(runtimeCatalog, "Chest Press").length > 0, "English search text must find Chest Press");
assert(search(runtimeCatalog, "Brustpresse").length > 0, "German search text must find Brustpresse");
assert(search(runtimeCatalog, "Machine Press").length > 0, "Machine Press synonym/search must resolve");
assert(search(runtimeCatalog, "Maschinenpresse").length > 0, "Maschinenpresse synonym/search must resolve");

const chestPressAlternatives = expansion.rules.find((rule) => rule.sourceExerciseId.includes("chest_press"))?.alternatives || [];
assert(chestPressAlternatives.length >= 5, "expanded library must provide more exercise swap alternatives");

console.log("exercise tracking types and library V2 tests passed");

function readJson(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

function byId(exercises, id) {
  return exercises.find((exercise) => exercise.id === id);
}

function uniqueValues(...lists) {
  return [...new Set(lists.flat().filter(Boolean))];
}

function inferTrackingType(raw = {}, existing = null) {
  return raw.trackingType || existing?.trackingType || "strength_weight_reps";
}

function normalizeExercise(raw, existing = null) {
  return {
    ...raw,
    ...existing,
    englishName: raw.englishName || existing?.englishName || "",
    aliases: uniqueValues(existing?.aliases || [], raw.aliases || [], raw.englishName ? [raw.englishName] : []),
    primaryMuscleGroups: raw.primaryMuscleGroups || existing?.primaryMuscleGroups || [],
    secondaryMuscleGroups: raw.secondaryMuscleGroups || existing?.secondaryMuscleGroups || [],
    trackingType: inferTrackingType(raw, existing),
    unilateral: Boolean(raw.unilateral ?? existing?.unilateral ?? false),
    tags: uniqueValues(existing?.tags || [], raw.tags || [])
  };
}

function mergeExercises(existing = [], incoming = []) {
  const map = new Map(existing.map((exercise) => [exercise.id, exercise]));
  for (const exercise of incoming || []) map.set(exercise.id, normalizeExercise(exercise, map.get(exercise.id) || null));
  return [...map.values()];
}

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function search(catalog, query) {
  const needle = normalize(query);
  return catalog.filter((exercise) => normalize([
    exercise.displayName,
    exercise.englishName,
    exercise.category,
    exercise.movementPattern,
    ...(exercise.aliases || []),
    ...(exercise.tags || []),
    ...(exercise.primaryMuscleGroups || []),
    ...(exercise.secondaryMuscleGroups || [])
  ].join(" ")).includes(needle));
}
