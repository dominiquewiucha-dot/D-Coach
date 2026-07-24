const assert = require("assert");
const fs = require("fs");

const app = fs.readFileSync("app.js", "utf8");
const sw = fs.readFileSync("sw.js", "utf8");
const html = fs.readFileSync("index.html", "utf8");

assert(app.includes('const APP_VERSION = "pwa-v95";'), "app version must be pwa-v95");
assert(app.includes('const APP_CACHE_VERSION = "dcoach-pwa-v95";'), "app cache version must be dcoach-pwa-v95");
assert(sw.includes('const CACHE_NAME = "dcoach-pwa-v95";'), "service worker cache must be pwa-v95");
assert(html.includes("app.js?v=pwa-v95"), "index app cache buster must be pwa-v95");

[
  'const MUSCLE_COVERAGE_CALCULATION_VERSION = "muscle-coverage-v6.20.0";',
  "const MUSCLE_GROUP_REFERENCE_LOAD = 8;",
  "const MUSCLE_REGION_REFERENCE_LOAD = 3;",
  "function getCoverageColorBand(percent)",
  "function coverageMetric(",
  "function uniqueCoverageSessions(",
  "function canonicalCoverageExportForMode(",
  "function tricepsCoverageDiagnostic(",
  "function allSurfacesCoverageComparison(",
  "DCoach_MuscleCoverage_Diagnostics.json",
  "function muscleCoverageDeviceValidationReport()",
  "function renderMuscleCoverageTestCenter()",
  "DCoach_MuscleCoverage_DeviceValidation_Report.json",
  "data-export-muscle-coverage-device-validation",
  "data-muscle-coverage-manual",
  "Cyan ist nur Auswahlzustand",
  "Nach App-Neustart derselbe Wert",
  "same_percent_all_surfaces",
  "same_color_all_surfaces",
  "excludesBodyWeight: true",
  "excludesJournalText: true",
  "excludesPrivateTrainingNotes: true",
  "storage.muscleCoverageDeviceValidationStatus"
].forEach((needle) => assert(app.includes(needle), `${needle} missing`));

[
  "neutral",
  "yellow",
  "yellow_orange",
  "orange",
  "red",
  "dark_red"
].forEach((band) => assert(app.includes(`"${band}"`), `coverage color band missing: ${band}`));

assert(app.includes("duplicateTargets"), "duplicate target diagnostics missing");
assert(app.includes("Doppelte Session ausgeschlossen"), "duplicate session warning missing");
assert(app.includes("referenceLoads"), "reference load documentation missing");
assert(app.includes("100 % entspricht deinem hinterlegten Wochenziel"), "user-facing 100 percent explanation missing");
assert(app.includes("Math.min(item.percent, 100)"), "coverage row visual fill must stop at 100 percent");
assert(app.includes("Math.min(detail.weekCoveragePercent, 100)"), "coverage detail visual fill must stop at 100 percent");
assert(app.includes("displayPercent: percent"), "triceps diagnostic must expose display percent");
assert(app.includes("expectedObservedPercent: expectedPercent"), "triceps diagnostic must keep observed 224 comparison");
assert(app.includes("conclusion: percent === expectedPercent && !duplicateContributions.length ? \"correct\""), "triceps conclusion logic missing");

console.log("muscle coverage diagnostics consistency tests passed");
