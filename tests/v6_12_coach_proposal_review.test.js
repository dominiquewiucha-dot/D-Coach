const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const schema = JSON.parse(fs.readFileSync("data/coach_plan_proposal_schema_v6.12.0.json", "utf8"));

assert(app.includes("function buildCoachPlanProposal()"), "proposal builder missing");
assert(app.includes("function renderCoachProposalReview()"), "review UI missing");
assert(app.includes("function applyCoachPlanProposal()"), "apply flow missing");
assert(app.includes("function rejectCoachPlanProposal()"), "reject flow missing");
assert(app.includes("function cancelCoachPlanProposal()"), "cancel flow missing");
assert(app.includes("function undoCoachPlanProposal()"), "undo flow missing");
assert(app.includes("planFingerprint(currentPlan) !== proposal.currentPlanFingerprint"), "stale plan conflict guard missing");
assert(app.includes("storage.coachPlanUndo = previous"), "full undo snapshot missing");
assert(app.includes("storage.customPlans = undo.customPlans"), "undo must restore full custom plan state");
assert(app.includes("openCoachProposalReview()"), "review button must open proposal review");
assert(app.includes("data-apply-coach-proposal"), "apply action missing");
assert(app.includes("data-reject-coach-proposal"), "reject action missing");
assert(app.includes("data-cancel-coach-proposal"), "cancel action missing");
assert(app.includes("data-undo-coach-proposal"), "undo action missing");
assert(app.includes("coachPlanProposals: storage.coachPlanProposals"), "backup export must include proposals");
assert(app.includes("storage.coachPlanProposals = mergeById"), "backup import must restore proposals");
assert(css.includes(".proposal-backdrop"), "proposal backdrop styles missing");
assert(css.includes(".proposal-sheet"), "proposal sheet styles missing");
assert(schema.fields.includes("proposedChanges"), "proposal schema missing proposedChanges");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("v6.12 coach proposal review tests passed");
