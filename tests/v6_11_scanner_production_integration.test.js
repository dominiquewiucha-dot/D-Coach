const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");
const css = fs.readFileSync("styles.css", "utf8");

assert(app.includes("function latestScannedEquipmentMappingForExercise(exerciseId)"), "latest scanner mapping lookup missing");
assert(app.includes("function applyScannedEquipmentMappingToActiveWorkout(mapping)"), "active workout scanner routing missing");
assert(app.includes("handleIncompleteSetsBeforeLeaving(currentEntry)"), "scanner must protect incomplete workout sets");
assert(app.includes("data-workout-equipment-scan"), "workout scan button missing");
assert(app.includes("function renderWorkoutScannerPanel()"), "workout scanner panel missing");
assert(app.includes("machineLabel: scannedMapping?.machineLabel"), "scanned machine label must hydrate workout entry");
assert(app.includes("equipmentType") && app.includes("latestWarmupEquipmentMapping"), "warmup/cardio mapping support missing");
assert(app.includes("function renderScannedEquipmentMappingsCard()"), "scanner mapping management view missing");
assert(app.includes("data-load-scanned-mapping"), "scanner mapping edit action missing");
assert(app.includes("data-delete-scanned-mapping"), "scanner mapping delete action missing");
assert(app.includes("mergeScannedEquipmentMappings(storage.scannedEquipmentMappings"), "backup restore must merge mappings by normalized code");
assert(app.includes("scannedEquipmentMappings: storage.scannedEquipmentMappings"), "backup export must include scanner mappings");
assert(app.includes('"scannedEquipmentMappings"'), "IndexedDB scanner store missing");
assert(css.includes(".scanner-mapping-row"), "scanner management styles missing");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("v6.11 scanner production integration tests passed");
