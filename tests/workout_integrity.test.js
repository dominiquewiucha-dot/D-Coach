const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");

assert(app.includes("function bindWorkoutIntegrityEvents()"), "workout lifecycle persistence missing");
assert(app.includes('document.addEventListener("visibilitychange"'), "visibilitychange draft save missing");
assert(app.includes('window.addEventListener("pagehide", persistWorkoutDraft)'), "pagehide draft save missing");
assert(!app.includes("if (state.activeWorkout) render();\n  }, 1000);"), "timer loop must not re-render workout every second");
assert(app.includes("function updateRestTimerDisplay()"), "isolated timer display updater missing");
assert(app.includes("data-rest-timer-value"), "timer display target missing");
assert(app.includes("function setIsIncomplete(set)"), "partial set detection missing");
assert(app.includes("function handleIncompleteSetsBeforeLeaving(entry)"), "incomplete set leave guard missing");
assert(app.includes("Satz noch nicht abgeschlossen"), "incomplete set warning text missing");
assert(app.includes("function goToPreviousExercise()"), "previous exercise handler missing");
assert(app.includes("data-prev-exercise"), "previous exercise button missing");
assert(app.includes("event.currentTarget.disabled = true"), "next action double tap guard missing");
assert(app.includes("set.completed !== true"), "coverage must ignore incomplete sets");
assert(app.includes("set.completed === true"), "set counts must derive from completed sets");
assert(app.includes("function askWarmupBeforeWorkout()"), "warmup start prompt missing");
assert(app.includes("warmups: warmup ? [warmup] : []"), "warmup must be stored on active workout");
assert(app.includes("renderWorkoutWarmupSummary(workout)"), "warmup summary missing in workout");
assert(app.includes('data-entry-field="seatPosition"'), "seat position field missing");
assert(app.includes('data-entry-field="gripPosition"'), "grip position field missing");
assert(app.includes('data-entry-field="gripWidth"'), "grip width field missing");
assert(app.includes('data-entry-field="attachment"'), "attachment field missing");
assert(app.includes('data-entry-field="exerciseNote"'), "exercise note field missing");
assert(app.includes('data-workout-field="sessionNote"'), "session note field missing");
assert(app.includes("function rememberExerciseSetup(entry)"), "machine setup persistence missing");
assert(app.includes("sessionNote: workout.sessionNote"), "session note must be saved");
assert(app.includes("seatPosition: entry.seatPosition"), "seat snapshot must be saved");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("workout integrity tests passed");
