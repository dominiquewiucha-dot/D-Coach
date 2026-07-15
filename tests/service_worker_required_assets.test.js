const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");

const requiredStartupAssets = [
  "./data/life_fitness_scanner_config_v6.11.0.json",
  "./data/coach_plan_proposal_schema_v6.12.0.json",
  "./data/coach_proposal_apply_rules_v6.12.0.json",
  "./data/coach_proposal_review_ui_v6.12.0.json",
  "./data/daily_checkin_schema_v6.13.0.json",
  "./data/daily_checkin_startup_rules_v6.13.0.json",
  "./data/daily_pain_regions_v6.13.0.json"
];

const assetMatch = sw.match(/const ASSETS = \[([\s\S]*?)\];/);
assert(assetMatch, "ASSETS array missing in sw.js");

const assets = [...assetMatch[1].matchAll(/"([^"]+)"/g)].map((match) => match[1]);
assert(assets.length > 0, "ASSETS array must not be empty");

const duplicates = assets.filter((asset, index) => assets.indexOf(asset) !== index);
assert.deepStrictEqual([...new Set(duplicates)], [], "ASSETS must not contain duplicate entries");

for (const asset of assets) {
  if (asset === "./") continue;
  const filePath = path.join(root, asset.replace(/^\.\//, ""));
  assert(fs.existsSync(filePath), `Precache asset does not exist: ${asset}`);
}

for (const asset of requiredStartupAssets) {
  assert(assets.includes(asset), `Startup JSON missing from precache: ${asset}`);
}

console.log("service worker required startup assets tests passed");
