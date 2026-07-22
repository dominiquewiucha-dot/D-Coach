const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

assert(app.includes('const APP_VERSION = "pwa-v89";'), "app version must be pwa-v89");
assert(sw.includes('const CACHE_NAME = "dcoach-pwa-v89";'), "service worker cache must be pwa-v89");
assert(html.includes("app.js?v=pwa-v89"), "index app cache buster must be pwa-v89");
assert(html.includes("styles.css?v=pwa-v89"), "index style cache buster must be pwa-v89");

[
  "function workoutDraftIntegrity(",
  "function ensureActiveWorkoutIntegrity()",
  "function repairWorkoutDraftDayLabel(",
  "function workoutHasRecordedSetData(",
  "function buildWorkoutDraftIntegrityError(",
  "function repairLegacyPullPlanMixups()",
  "function isLegacyPullPlanMixup(day)"
].forEach((needle) => assert(app.includes(needle), `${needle} missing`));

assert(app.includes("ensureActiveWorkoutIntegrity();"), "restored drafts must be integrity checked");
assert(app.includes("if (!ensureActiveWorkoutIntegrity()) return renderTrainingV53();"), "active workout route must block bad drafts");
assert(app.includes('action: "wrong_day_label"'), "wrong day label action missing");
assert(app.includes('action: "day_exercise_mismatch"'), "day exercise mismatch action missing");
assert(app.includes("workoutHasRecordedSetData(workout)"), "drafts with user set data must not be silently discarded");
assert(app.includes("clearWorkoutDraft();"), "bad empty drafts must be cleared");
assert(app.includes("Training-Draft passt nicht zum Plantag."), "user-facing draft mismatch error missing");
assert(app.includes("legacy_pull_day_contained_push_exercises"), "legacy Pull plan repair reason missing");

[
  "ex_lat_pulldown",
  "ex_chest_supported_row",
  "ex_seated_row",
  "ex_reverse_pec_deck",
  "ex_face_pull",
  "ex_cable_biceps_curl"
].forEach((exerciseId) => assert(app.includes(exerciseId), `${exerciseId} missing from repaired Pull day`));

console.log("v6.18.2 workout draft integrity regression tests passed");
