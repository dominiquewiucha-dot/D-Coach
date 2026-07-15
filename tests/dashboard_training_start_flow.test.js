const assert = require("assert");
const fs = require("fs");

const app = fs.readFileSync("app.js", "utf8");

assert(app.includes("const dashboardTraining = resolveTrainingDay({ plan, activeWorkoutDraft: null });"), "dashboard must resolve the concrete next training day once");
assert(app.includes('data-start-training-flow="${htmlesc(dashboardTraining?.dayId || "")}"'), "dashboard start button must carry the resolved day id");
assert(app.includes('button.addEventListener("click", () => startTrainingFlow(button.dataset.startTrainingFlow || "", { skipReview: true }));'), "dashboard start must pass day id and skip review");
assert(app.includes("function createTrainingResumeCheckinDraft(existing = null, trainingDayId = \"\", skipReview = true)"), "check-in resume draft must preserve selected day id");
assert(app.includes("resumeTrainingDayId: trainingDayId || base.resumeTrainingDayId || \"\""), "resume draft must store selected training day id");
assert(app.includes("startTrainingFlow(resumeAction.trainingDayId, { skipReview: resumeAction.skipReview });"), "check-in completion must resume the selected training day");
assert(app.includes('startDay(resolved.dayId, { skipReview, source: options.source || "automatic_next_day" });'), "training flow must start the resolved day with review option");
assert(app.includes("if (options.skipReview) {"), "pre-workout flow must support direct start without second confirmation");
assert(app.includes("startWorkoutFromReview(review);"), "direct start must use the same integrity checks as review confirmation");

console.log("dashboard training start flow tests passed");
