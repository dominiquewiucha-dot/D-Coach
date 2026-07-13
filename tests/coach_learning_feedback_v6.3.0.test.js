const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");

[
  "coach_feedback_schema_v6.3.0.json",
  "coach_learning_rules_v6.3.0.json",
  "coach_feedback_texts_v6.3.0.json"
].forEach((file) => {
  assert(fs.existsSync(path.join(root, "data", file)), `${file} missing`);
  assert(app.includes(`./data/${file}`), `${file} not loaded`);
  assert(sw.includes(`./data/${file}`), `${file} not cached`);
});

assert(app.includes("dcoach.coachFeedback"), "feedback storage key missing");
assert(app.includes("coachFeedback: storage.coachFeedback"), "backup must include feedback");
assert(app.includes("backup.coachFeedback"), "restore must include feedback");
assert(app.includes("function coachLearningWeight(ruleId)"), "local learning weight missing");
assert(app.includes('if (ruleId === "safety_first") return 0'), "safety rules must not be weakened");
assert(app.includes("data-coach-feedback"), "feedback UI missing");

console.log("coach learning feedback v6.3.0 tests passed");
