const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");

assert(app.includes('const MUSCLE_LOAD_MODEL_VERSION = "muscle-load-v2.0.0";'), "load model version missing");
assert(app.includes("primary: 1"), "primary role weight missing");
assert(app.includes("secondary: 0.4"), "secondary role weight missing");
assert(app.includes("stabilizer: 0.15"), "stabilizer role weight missing");
assert(app.includes("function completedSetEffectiveSets(set, completedExercise = null)"), "effective set factor missing");
assert(app.includes("function completedSetIntensityFactor(set, completedExercise = null)"), "intensity factor missing");
assert(app.includes("function completedSetRpeFactor(set)"), "RPE/RIR factor missing");
assert(app.includes("effectiveSets * intensityFactor * rpeFactor"), "central load formula must combine all factors");
assert(app.includes("formula: \"muscleLoad = muscleWeight x effectiveSets x intensityFactor x rpeFactor\""), "formula must be visible in diagnostics");

[
  "if (percent < 85) return \"undertrained\"",
  "if (percent < 95) return \"slightly_under\"",
  "if (percent <= 110) return \"target\"",
  "if (percent <= 125) return \"elevated\"",
  "return \"overload_risk\""
].forEach((needle) => assert(app.includes(needle), `${needle} missing`));

assert(app.includes("function muscleLoadCandidateScore(exercise, context = {})"), "candidate scoring missing");
assert(app.includes("coverageGain - overloadPenalty - redundancyPenalty - jointRiskPenalty"), "candidate formula missing");
assert(app.includes("+ loadScore.candidateScore * 2"), "plan generator must use load score");
assert(app.includes("+ candidate.loadScore.candidateScore"), "exercise alternatives must use load score");

console.log("muscle load model v2 tests passed");
