const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");
const sw = fs.readFileSync("sw.js", "utf8");
const html = fs.readFileSync("index.html", "utf8");

assert(app.includes('const APP_VERSION = "pwa-v85";'), "app version must be pwa-v85");
assert(sw.includes('const CACHE_NAME = "dcoach-pwa-v86";'), "service worker cache must be pwa-v86");
assert(html.includes("app.js?v=pwa-v85"), "index must load pwa-v85 app bundle");
assert(html.includes("styles.css?v=pwa-v85"), "index must load pwa-v85 css");
assert(app.includes("function startTrainingFlow(dayIdOrName = \"\", options = {})"), "central training start flow missing");
assert(app.includes("data-start-training-flow"), "training start buttons must use central flow");
assert(app.includes("createTrainingResumeCheckinDraft(existingDraft, dayIdOrName, skipReview)"), "training flow must open resumable daily check-in with selected day");
assert(app.includes("resumeWorkoutDraft();"), "training flow must resume existing draft");
assert(app.includes("nextPlanDayAfterLastSession(plan)?.name"), "training flow must choose next plan day");
assert(app.includes("function renderPrimaryCoachRecommendationCard()"), "dashboard primary coach recommendation missing");
assert(app.includes("${renderPrimaryCoachRecommendationCard()}"), "dashboard must show one primary coach recommendation");
assert(app.indexOf("${renderPrimaryCoachRecommendationCard()}") < app.indexOf("function renderCoach()"), "primary coach recommendation must be on dashboard");
assert(app.includes("state.premiumNavigationSpec = premiumNavigationSpec;"), "premium navigation spec must be loaded");
assert(app.includes("state.dashboardPrioritySpec = dashboardPrioritySpec;"), "dashboard priority spec must be loaded");
assert(app.includes("state.trackingInformationArchitecture = trackingInformationArchitecture;"), "tracking IA spec must be loaded");
["premium_navigation_v6.14.0.json", "dashboard_priority_v6.14.0.json", "tracking_information_architecture_v6.14.0.json"].forEach((file) => {
  assert(app.includes(file), `${file} must be loaded by app`);
  assert(sw.includes(file), `${file} must be cached by service worker`);
  assert(fs.existsSync(`data/${file}`), `${file} missing in data folder`);
});

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("v6.14 workflow navigation tests passed");
