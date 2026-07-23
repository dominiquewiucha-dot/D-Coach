const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

assert(app.includes('const APP_VERSION = "pwa-v93";'), "app version must be pwa-v93");
assert(app.includes('const BACKUP_FORMAT_VERSION = "6.18.0";'), "backup version must be 6.18.0");
assert(sw.includes('const CACHE_NAME = "dcoach-pwa-v93";'), "cache version must be pwa-v93");
assert(html.includes("app.js?v=pwa-v93"), "app cache buster must be pwa-v93");
assert(html.includes("styles.css?v=pwa-v93"), "style cache buster must be pwa-v93");

[
  "dcoach.coachRecommendationHistory",
  "dcoach.recommendationOutcomes",
  "dcoach.coachContextFeedback",
  "dcoach.coachConflictLog",
  "dcoach.coachCalibrationState"
].forEach((key) => {
  assert(app.includes(key), `${key} storage integration missing`);
});

[
  "missing_reps",
  "missing_weight",
  "incomplete_set",
  "exercise_mapping_missing",
  "plan_changed",
  "missing_readiness",
  "conflicting_units"
].forEach((flag) => {
  assert(app.includes(`"${flag}"`), `${flag} quality flag missing`);
});

assert(app.includes("COACH_CALIBRATION_CONFIG_V616"), "v6.16 calibration config missing");
assert(app.includes("qualityWeights"), "quality weights missing");
assert(app.includes("confidenceWeights"), "confidence weights missing");
assert(app.includes("evidenceCaps"), "evidence caps missing");
assert(app.includes("maxAdjustmentPerOutcome: 0.03"), "slow learning limit missing");
assert(app.includes("contextMultiplierMin: 0.80"), "context multiplier min missing");
assert(app.includes("contextMultiplierMax: 1.20"), "context multiplier max missing");

assert(app.includes("function coachDataQualityForContext"), "data quality function missing");
assert(app.includes("function coachConfidenceForRecommendation"), "confidence function missing");
assert(app.includes("function coachHardGatesForProposal"), "hard gate function missing");
assert(app.includes("function upsertCoachRecommendationRecord"), "recommendation history upsert missing");
assert(app.includes("function evaluateRecommendationOutcome"), "outcome evaluator missing");
assert(app.includes("function evaluateDueCoachRecommendations"), "due recommendation outcome hook missing");
assert(app.includes("evaluateDueCoachRecommendations(session);"), "training finish must evaluate due recommendations");
assert(app.includes("function updateCoachCalibrationFromOutcome"), "calibration update missing");
assert(app.includes("function resolveCoachConflicts"), "conflict resolver missing");
assert(app.includes("function coachTimeBudgetConflict"), "time budget resolver missing");
assert(app.includes("function coachExplanationForRecommendation"), "explainability missing");

assert(app.includes("Critical Quality Flag begrenzt Confidence."), "critical quality cap explanation missing");
assert(app.includes("Evidenz-Cap: erst"), "evidence cap explanation missing");
assert(app.includes("Empfehlung basiert nur auf unvollständigen Sätzen."), "incomplete-set hard gate missing");
assert(app.includes("Übernehmen ist deaktiviert:"), "disabled apply copy missing");
assert(app.includes("Outcome wird nach der nächsten vergleichbaren Einheit bewertet"), "outcome UI copy missing");
assert(app.includes("Feedback wirkt nur im passenden Kontext"), "context feedback UI copy missing");
assert(app.includes("Priorität: Sicherheit, Datenqualität, Recovery, Zeitlimit"), "conflict priority UI copy missing");

assert(app.includes("coachRecommendationHistory: storage.coachRecommendationHistory"), "backup export history missing");
assert(app.includes("recommendationOutcomes: storage.recommendationOutcomes"), "backup export outcomes missing");
assert(app.includes("storage.coachRecommendationHistory = mergeById"), "backup import history missing");
assert(app.includes("storage.recommendationOutcomes = mergeRecommendationOutcomes"), "backup import outcomes missing");
assert(app.includes("Coach-Feedback, Vorschlagsverlauf, Empfehlungshistorie und Outcome-Lernen"), "reset disclosure missing new coach data");

assert(!app.includes("storage.activeWorkoutDraft = backup.activeWorkoutDraft || null"), "v6.15.1 draft protection regressed");
assert(app.includes("todayCheckin?.status === \"completed\" || todayCheckin?.status === \"skipped\""), "skipped check-in guard regressed");
assert(app.includes('document.querySelectorAll("[data-open-scanned-exercise]")'), "scanner all buttons guard regressed");
assert(!/function renderDashboard\(\)[\s\S]*?\$\{renderCoachDashboardV54\(\)\}[\s\S]*?function renderCoach\(\)/.test(app), "dead dashboard coach block regressed");

console.log("v6.16 coach calibration outcome learning tests passed");
