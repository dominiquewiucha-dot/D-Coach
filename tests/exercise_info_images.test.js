const assert = require("assert");
const fs = require("fs");
const path = require("path");

const app = fs.readFileSync("app.js", "utf8");
const sw = fs.readFileSync("sw.js", "utf8");
const html = fs.readFileSync("index.html", "utf8");
const seed = readJson("seed_training_database.json");
const knowledge = readJson("data/exercises_knowledge_v1.3.0.json");
const plus = readJson("data/exercises_plus_v1.4.0.json");
const core = readJson("data/exercise_core_v2.1.0.json");
const expansion = readJson("data/exercise_library_expansion_v2.0.0.json");
const manifest = readJson("data/exercise_image_manifest_v1.0.1.json");

assert(app.includes('const APP_VERSION = "pwa-v96";'), "app version must be pwa-v96");
assert(sw.includes('const CACHE_NAME = "dcoach-pwa-v96";'), "service worker cache must be pwa-v96");
assert(html.includes("app.js?v=pwa-v96"), "index app cache buster must be pwa-v96");

const catalog = [seed, knowledge, plus, core, expansion].flatMap((db) => db.exercises || []);
assert.strictEqual(catalog.filter((exercise) => exercise.id === "ex_v2_incline_dumbbell_fly").length, 1, "incline dumbbell fly must exist exactly once");
assert.strictEqual(catalog.filter((exercise) => exercise.id === "ex_v2_lunge_dumbbell").length, 1, "dumbbell lunge must exist exactly once");

const inclineFly = catalog.find((exercise) => exercise.id === "ex_v2_incline_dumbbell_fly");
assert.strictEqual(inclineFly.trackingType, "strength_weight_reps", "incline fly must use weight and reps tracking");
assert(inclineFly.muscleRoles.some((role) => role.muscleId === "mg_chest_upper" && role.role === "primary"), "incline fly primary muscle must be upper chest");
assert(search(catalog, "Schrägbank Kurzhantel Fly").some((exercise) => exercise.id === inclineFly.id), "German search must find incline fly");
assert(search(catalog, "Incline Dumbbell Fly").some((exercise) => exercise.id === inclineFly.id), "English search must find incline fly");

const manifestIds = manifest.entries.map((entry) => entry.exerciseId);
assert(manifestIds.includes("ex_v2_incline_dumbbell_fly"), "manifest must include resolved incline fly ID");
assert(manifestIds.includes("ex_v2_lunge_dumbbell"), "manifest must include resolved dumbbell lunge ID");
assert(!manifestIds.includes("ex_incline_dumbbell_fly"), "manifest must not keep old incline fly ID");
assert(!manifestIds.includes("ex_dumbbell_lunge"), "manifest must not keep old dumbbell lunge ID");

for (const entry of manifest.entries) {
  assert(catalog.some((exercise) => exercise.id === entry.exerciseId), `${entry.exerciseId} missing from runtime catalog`);
  assert(fs.existsSync(path.normalize(entry.imagePath.replace(/^\.\//, ""))), `${entry.imagePath} missing on disk`);
  assert(sw.includes(entry.imagePath), `${entry.imagePath} must be cached by service worker`);
  for (const aliasId of entry.aliasExerciseIds || []) {
    assert(catalog.some((exercise) => exercise.id === aliasId), `${aliasId} alias missing from runtime catalog`);
  }
}

assert(app.includes("function buildExerciseImageLookup(manifest)"), "image lookup helper missing");
assert(app.includes("function exerciseImageForId(exerciseId)"), "exact ID image lookup helper missing");
const lookupBody = app.match(/function buildExerciseImageLookup\(manifest\) \{[\s\S]*?\n\}/)?.[0] || "";
assert(!lookupBody.includes("displayName"), "runtime image lookup must not match displayName");
assert(app.includes("data-exercise-info="), "workout info button missing");
assert(app.includes("history.pushState({ dcoachOverlay: \"exerciseInfo\" }"), "overlay must use browser history");
assert(app.includes("closeExerciseInfoOverlay({ restoreFocus: false, fromPopState: true })"), "browser back must close overlay");

console.log("exercise info images tests passed");

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
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
