const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

assert(app.includes('const APP_VERSION = "pwa-v78";'), "app version must be pwa-v78");
assert(app.includes('const BACKUP_FORMAT_VERSION = "6.18.0";'), "backup format must be 6.18.0");
assert(sw.includes('const CACHE_NAME = "dcoach-pwa-v78";'), "service worker cache must be pwa-v78");
assert(html.includes("app.js?v=pwa-v78"), "app cache buster must be pwa-v78");
assert(html.includes("styles.css?v=pwa-v78"), "style cache buster must be pwa-v78");

[
  "function resolveTrainingDay(",
  "function openPreWorkoutReview(",
  "function confirmPreWorkoutReview()",
  "function renderPreWorkoutReview(review)",
  "function renderTrainingDaySelector(plan, resolved)",
  "function renderWorkoutOverview(workout)",
  "function exportTrainingDayDiagnostics()"
].forEach((needle) => assert(app.includes(needle), `${needle} missing`));

assert(!app.includes("const primaryDay = plan?.days?.[0] || null;"), "training screen must not use first plan day directly");
assert(app.includes("startDay(resolved.dayId, { skipReview });"), "training flow must start the resolved day id");
assert(app.includes("openPreWorkoutReview(dayName, options);"), "startDay must route through the review/start options");
assert(app.includes("data-start-day-id"), "stable day start id action missing");
assert(app.includes("data-confirm-workout-review"), "pre-workout confirmation missing");
assert(app.includes("data-jump-workout-exercise"), "in-workout overview jump missing");

[
  "ex_lat_pulldown",
  "ex_chest_supported_row",
  "ex_seated_row",
  "ex_reverse_pec_deck",
  "ex_face_pull",
  "ex_cable_biceps_curl"
].forEach((exerciseId) => assert(app.includes(exerciseId), `${exerciseId} missing from pull template`));
assert(app.includes("function generatedPullDayV618()"), "fixed Pull LWS template missing");
assert(app.includes("function setPolicyDefaultForExercise("), "set policy missing");

assert(app.includes("function coachProposalReviewState(proposal)"), "coach proposal review state missing");
assert(app.includes("primaryActionLabel: hasConcreteChange ? \"Änderungsvorschlag prüfen\" : \"Details ansehen\""), "proposal action labels missing");
assert(app.includes("storage.coachPlanProposals = [...storage.coachPlanProposals.filter((item) => item.id !== proposal.id), proposal]"), "proposal upsert missing");

[
  "function renderCustomPlanBuilder()",
  "function saveCustomBuilderPlan(",
  "data-open-custom-plan-builder",
  "data-builder-add-exercise",
  "customPlanBuilderDraft: storage.customPlanBuilderDraft",
  "storage.customPlanBuilderDraft = backup.customPlanBuilderDraft"
].forEach((needle) => assert(app.includes(needle), `${needle} missing`));

console.log("v6.18 plan day integrity and builder tests passed");
