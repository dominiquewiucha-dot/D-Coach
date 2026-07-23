const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");

[
  "sessionEditId",
  "sessionEditDraft",
  "function openSessionEditor(sessionId)",
  "function renderSessionEditor(id)",
  "function normalizeEditedSession(draft, original)",
  "function saveSessionEditor()",
  "data-edit-session",
  "data-save-session-edit",
  "data-session-edit-add-set",
  "data-session-edit-delete-set"
].forEach((needle) => assert(app.includes(needle), `${needle} missing`));

assert(app.includes("id: original.id"), "edited session must preserve original session id");
assert(app.includes("planId: original.planId || \"\""), "edited session must preserve original plan id");
assert(app.includes("dayId: original.dayId || \"\""), "edited session must preserve original day id");
assert(app.includes("startedAt: original.startedAt"), "edited session must preserve original start time");
assert(app.includes("editedAt"), "edited sessions must store editedAt");
assert(app.includes("editCount: (Number(original.editCount) || 0) + 1"), "editCount must increment");
assert(app.includes("storage.sessions = storage.sessions.map((session) => session.id === original.id ? edited : session)"), "saving must replace the existing session");
assert(!app.includes("storage.sessions = [...storage.sessions, edited]"), "editing must not append a duplicate session");

[
  "actualWeightKg",
  "actualAddedWeightKg",
  "actualReps",
  "actualDurationSeconds",
  "actualDistance",
  "rir",
  "rpe",
  "exerciseNote",
  "sessionNote"
].forEach((field) => assert(app.includes(field), `${field} must be editable or persisted`));

assert(app.includes("parseOptionalNumber(set.rpe)"), "empty RPE fields must not become zero");
assert(app.includes("parseOptionalInteger(set.rir)"), "empty RIR fields must not become zero");

console.log("session editing v2 tests passed");
