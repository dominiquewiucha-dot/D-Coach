const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");

[
  "function parseWeightKg(value)",
  "function normalizedWeightEntry(entry)",
  "function weightEntriesSorted()",
  "function latestWeightEntry()",
  "parseWeightKg(completed.weightKg)",
  "const weightKg = parseWeightKg(entry.weightKg);",
  "const latestWeight = latestWeightEntry();",
  "const entries = weightEntriesSorted();"
].forEach((needle) => assert(app.includes(needle), `${needle} missing`));

assert(app.includes('String(current).replace(".", ",")'), "daily check-in weight input must show German decimal comma");
assert(app.includes("date: new Date(`${todayKey}T08:00:00`).toISOString()"), "manual weight save must use local day key");

[
  "function updateRangeValueLabel(input)",
  "data-range-value-label",
  "data-range-label",
  "updateRangeValueLabel(input);",
  "${label}: ${input.value}/${input.max || 10}"
].forEach((needle) => assert(app.includes(needle), `${needle} missing`));

console.log("v6.18.1 weight and range regression tests passed");
