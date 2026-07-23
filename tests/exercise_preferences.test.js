const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");

[
  "dcoach.exercisePreferences",
  "function exercisePreferenceFor(exerciseId)",
  "function saveExercisePreference(exerciseId, fields)",
  "function renderExercisePreferenceCard(exercise)",
  "function renderExercisePreferenceSummary(exerciseId)",
  "data-save-exercise-preference",
  "data-exercise-pref-field",
  "Persönliches Übungsprofil"
].forEach((needle) => assert(app.includes(needle), `${needle} missing`));

[
  "seatPosition",
  "backrestPosition",
  "gripPosition",
  "footPosition",
  "machinePin",
  "machineNumber",
  "preferredStartWeight",
  "rangeOfMotion",
  "personalNote",
  "photo"
].forEach((field) => assert(app.includes(field), `${field} missing`));

assert(app.includes("exercisePreferences: storage.exercisePreferences"), "backup must include exercise preferences");
assert(app.includes("storage.exercisePreferences = mergeExercisePreferences(storage.exercisePreferences, backup.exercisePreferences)"), "restore must merge exercise preferences");
assert(app.includes("...(incoming && typeof incoming === \"object\" ? incoming : {}),\n    ...(existing && typeof existing === \"object\" ? existing : {})"), "import must not overwrite existing local preferences");
assert(app.includes("preferredStartWeight") && app.includes("weightText: trackingFieldsForExercise(exercise).includes(\"weightText\") ? (preferredStartWeight"), "preferred start weight must prefill workout weight");

console.log("exercise preference tests passed");
