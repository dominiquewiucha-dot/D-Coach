const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const config = fs.readFileSync("data/life_fitness_scanner_config_v6.11.0.json", "utf8");

assert(app.includes('dcoach.scannedEquipmentMappings'), "scanner storage key missing");
assert(app.includes("function normalizeScannedEquipmentCode(rawCode)"), "normalization function missing");
assert(app.includes("new URL(original)"), "URL normalization missing");
assert(app.includes("utm_source") && app.includes("fbclid") && app.includes("gclid"), "tracking parameter stripping missing");
assert(app.includes("function scannedEquipmentMappingForCode(rawCode)"), "known-code lookup missing");
assert(app.includes("function startEquipmentScannerCamera()"), "camera scanner function missing");
assert(app.includes('"BarcodeDetector" in window'), "BarcodeDetector feature detection missing");
assert(app.includes("navigator.mediaDevices.getUserMedia"), "camera permission must be user-triggered/local");
assert(app.includes("function stopEquipmentScannerCamera()"), "camera stream cleanup missing");
assert(app.includes("window.dcoachEquipmentScannerStream"), "scanner stream handle missing");
assert(app.includes("function saveScannedEquipmentMapping()"), "scanner mapping save missing");
assert(app.includes('brand: "Life Fitness"'), "Life Fitness brand missing");
assert(app.includes("data-manual-equipment-code"), "manual scanner fallback missing");
assert(app.includes("data-start-equipment-scan"), "scanner start button missing");
assert(app.includes("data-save-scanned-mapping"), "unknown device mapping save missing");
assert(app.includes("data-open-scanned-exercise"), "known device open action missing");
assert(!app.includes("fetch(\"https://") && !app.includes("fetch('https://"), "scanner must not call cloud services");
assert(css.includes(".equipment-scanner-card"), "scanner card styles missing");
assert(css.includes(".scanner-video-wrap"), "scanner video styles missing");
assert(JSON.parse(config).storageKey === "dcoach.scannedEquipmentMappings", "scanner config storage key mismatch");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("v6.11 equipment scanner tests passed");
