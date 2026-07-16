const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const production = fs.readFileSync(path.join(root, "production", "production-muscle-map.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

assert(app.includes('const APP_VERSION = "pwa-v82";'), "app version must be pwa-v82");
assert(app.includes('const BACKUP_FORMAT_VERSION = "6.18.0";'), "backup version must be 6.18.0");
assert(app.includes('const MUSCLE_MAPPING_VERSION = "muscle-mapping-v3";'), "mapping version missing");
assert(sw.includes('const CACHE_NAME = "dcoach-pwa-v82";'), "cache must be pwa-v82");
assert(html.includes("app.js?v=pwa-v82"), "app cache buster must be pwa-v82");

assert(app.includes("function getCanonicalMuscleCoverage"), "canonical coverage API missing");
assert(app.includes("function canonicalizeMuscleRegionId"), "region normalizer missing");
assert(app.includes("function canonicalizeMuscleGroup"), "group normalizer missing");
assert(app.includes('mg_chest_upper: "mg_chest"'), "chest upper group alias missing");
assert(app.includes('upper_chest: "mg_chest_clavicular"'), "upper chest region alias missing");
assert(app.includes('upper_abs: "mg_abs_upper"'), "upper abs region alias missing");
assert(app.includes('if (group === "mg_abs" || group === "mg_obliques") return;'), "abs/oblique stabilizers must not create week coverage");
assert(app.includes("premiumCoverageForSessions(sessions)"), "premium adapter must remain available");
assert(app.includes("coverageForSessions(sessions)"), "standard adapter must remain available");
assert(app.includes("canonicalCoverageDiagnosticsForMode"), "diagnostics missing");
assert(app.includes("DCoach_MuscleCoverage_Diagnostics.json"), "diagnostics export missing");
assert(app.includes('import("./production/production-muscle-map.js?v=6.17.3")'), "production map cache buster missing");

assert(css.includes("touch-action: pan-y pinch-zoom;"), "muscle map must allow vertical pan and pinch zoom");
assert(production.includes("installGestureGuard"), "production gesture guard missing");
assert(production.includes("event.stopImmediatePropagation()"), "scroll gesture must suppress tap selection");
assert(production.includes("canvas.style.touchAction = \"pan-y pinch-zoom\""), "canvas touch action missing");
assert(production.includes("Muskelabdeckung"), "status must label coverage, not coach score");
assert(!production.includes("confidencePercent}% Coach"), "production status must not show coach confidence as coverage");

assert(!/data-open-coverage-muscle[\\s\\S]{0,260}pointerdown[\\s\\S]{0,80}preventDefault/.test(app), "coverage pointerdown must not prevent default scrolling");
assert(app.includes("const muscleTapGestures = new WeakMap();"), "tap-vs-scroll gesture tracking missing");
assert(app.includes("if (gesture?.moved) return;"), "scroll gestures must not open muscle detail");

console.log("v6.18.0 muscle map scroll coverage tests passed");
