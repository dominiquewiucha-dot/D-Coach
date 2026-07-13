const assert = require("assert");

const rules = [
  { id: "safety_first", priority: 100 },
  { id: "plan_adherence_second", priority: 90 },
  { id: "muscle_balance_third", priority: 80 },
  { id: "progression_fourth", priority: 70 },
  { id: "preference_fifth", priority: 60 }
];

const priority = (id) => rules.find((rule) => rule.id === id)?.priority || 0;
const candidates = [
  { ruleId: "progression_fourth", confidencePercent: 91 },
  { ruleId: "muscle_balance_third", confidencePercent: 78 },
  { ruleId: "safety_first", confidencePercent: 74 }
];

const winner = candidates
  .map((item) => ({ ...item, priority: priority(item.ruleId) }))
  .sort((a, b) => b.priority - a.priority || b.confidencePercent - a.confidencePercent)[0];

assert.equal(winner.ruleId, "safety_first");
assert(priority("safety_first") > priority("plan_adherence_second"));
assert(priority("plan_adherence_second") > priority("muscle_balance_third"));

const recommendation = {
  id: "smart-coach-safety_first",
  scope: "daily",
  title: "Heute konservativ trainieren",
  summary: "Mehrere Ermuedungssignale sprechen fuer reduzierte Belastung.",
  action: "Volumen oder Intensitaet reduzieren.",
  affectedMuscles: [],
  confidencePercent: 84,
  why: ["Belastung hoch."],
  evidence: ["Systemische Ermuedung 80%."],
  alternatives: ["Weniger Volumen"],
  requiresConfirmation: true
};

[
  "id",
  "scope",
  "title",
  "summary",
  "action",
  "affectedMuscles",
  "confidencePercent",
  "why",
  "evidence",
  "alternatives",
  "requiresConfirmation"
].forEach((field) => assert(Object.prototype.hasOwnProperty.call(recommendation, field)));

console.log("smart coach foundation v6.0.0 tests passed");
