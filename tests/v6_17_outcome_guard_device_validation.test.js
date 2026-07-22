const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

assert(app.includes('const APP_VERSION = "pwa-v90";'), "app version must be pwa-v90");
assert(app.includes('const BACKUP_FORMAT_VERSION = "6.18.0";'), "backup version must be 6.18.0");
assert(app.includes('const OUTCOME_EVALUATOR_VERSION = "v6.17.0";'), "outcome evaluator version missing");
assert(sw.includes('const CACHE_NAME = "dcoach-pwa-v90";'), "cache version must be pwa-v90");
assert(html.includes("app.js?v=pwa-v90"), "app cache buster must be pwa-v90");

assert(app.includes("function coachRecommendationApplicationState"), "application state helper missing");
assert(app.includes("function recommendationOutcomeEligible"), "outcome eligibility helper missing");
assert(app.includes("record?.status === \"accepted\""), "only accepted recommendations may be eligible");
assert(app.includes("record.appliedAt || record.appliedPlanChangeId"), "apply proof required");
assert(app.includes("applicationState: \"applied\""), "apply must set applicationState");
assert(app.includes("applicationState: \"reverted\""), "undo must mark reverted");
assert(app.includes("if (!recommendationOutcomeEligible(record)) return null;"), "ineligible records must not evaluate");
assert(!app.includes("if (![\"accepted\", \"pending\"].includes(record.status)) return false;"), "pending recommendations must not be due");

assert(app.includes("function compareRecommendationContext"), "comparator missing");
assert(app.includes("blockingReasons.push(\"recommendation_not_applied\")"), "not applied blocking reason missing");
assert(app.includes("blockingReasons.push(\"session_before_application\")"), "session before apply blocker missing");
assert(app.includes("blockingReasons.push(\"session_already_used\")"), "already used blocker missing");
assert(app.includes("blockingReasons.push(\"insufficient_data\")"), "insufficient data blocker missing");
assert(app.includes("comparison.score < 60"), "noncomparable sessions must not evaluate");
assert(app.includes("comparison.score < 75"), "limited comparability must be inconclusive");

assert(app.includes("function recommendationOutcomeEvaluationKey"), "evaluation key helper missing");
assert(app.includes("recommendationId: record.id"), "outcome recommendation id missing");
assert(app.includes("evaluatedSessionId: session.id"), "outcome session id missing");
assert(app.includes("evaluatorVersion: OUTCOME_EVALUATOR_VERSION"), "outcome evaluator version missing");
assert(app.includes("evaluationKey,"), "outcome evaluation key missing");
assert(app.includes("function outcomeExistsForEvaluation"), "idempotency lookup missing");
assert(app.includes("function mergeRecommendationOutcomes"), "restore outcome dedupe missing");
assert(app.includes("storage.recommendationOutcomes = mergeRecommendationOutcomes"), "restore must dedupe outcomes");

assert(app.includes("reasonCodes: outcomeReasonCodesForEvaluation"), "structured reason codes missing");
assert(app.includes("context_not_comparable"), "noncomparable reason code missing");
assert(app.includes("recommendation_not_applied"), "not applied reason code missing");

assert(app.includes("dcoach.deviceValidationReports"), "device validation storage key missing");
assert(app.includes("function createDeviceValidationReport"), "device validation report creator missing");
assert(app.includes("DCoach_v6.17_DeviceValidation_Report.json"), "device validation export filename missing");
assert(app.includes("data-export-device-validation"), "device validation export button missing");
assert(app.includes("Geräteprüfung v6.19"), "device validation UI missing");
assert(app.includes("not_tested"), "manual tests must default to not_tested");
assert(app.includes("Geräteprüfungsberichte"), "reset disclosure must include device validation reports");

assert(app.includes("todayCheckin?.status === \"completed\" || todayCheckin?.status === \"skipped\""), "v6.15.1 skipped guard regressed");
assert(app.includes("maxAdjustmentPerOutcome: 0.03"), "v6.16 slow learning regressed");
assert(app.includes("Coach-Feedback, Vorschlagsverlauf, Empfehlungshistorie und Outcome-Lernen"), "reset disclosure regressed");

console.log("v6.17 outcome guard device validation tests passed");
