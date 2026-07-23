const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");

assert(app.includes("function addWorkoutSet()"), "set add handler missing");
assert(app.includes("data-add-workout-set"), "set add button missing");
assert(app.includes("function deleteWorkoutSet(index)"), "set delete handler missing");
assert(app.includes("data-delete-workout-set"), "set delete button missing");
assert(app.includes("Diesen ausgefüllten Satz wirklich löschen?"), "filled set delete confirmation missing");

assert(app.includes("function recordedWorkoutSets(entry)"), "recorded set filter missing");
assert(app.includes("return (entry?.sets || []).filter((set) => setHasAnyInput(set, entry));"), "empty sets must be ignored");
assert(app.includes("const recordedSets = recordedWorkoutSets(entry);"), "session save must use recorded sets");
assert(app.includes("plannedSets: recordedSets.length"), "saved planned set count must discard empty sets");
assert(app.includes("sets: recordedSets.map"), "saved session must discard empty set rows");

assert(app.includes("function renderWorkoutExercisePicker(workout)"), "workout exercise picker missing");
assert(app.includes("data-toggle-workout-exercise-picker"), "exercise add toggle missing");
assert(app.includes("data-workout-exercise-search"), "exercise picker search missing");
assert(app.includes("data-workout-exercise-muscle-filter"), "exercise picker muscle filter missing");
assert(app.includes("data-workout-exercise-equipment-filter"), "exercise picker equipment filter missing");
assert(app.includes("data-add-workout-exercise"), "exercise add action missing");
assert(app.includes("function addExerciseToActiveWorkout(exerciseId)"), "exercise add handler missing");
assert(app.includes("workoutExerciseHaystack(exercise).includes(query)"), "exercise picker must search full haystack");
assert(app.includes("workoutExerciseMatchesDay(exercise, workout)"), "day mismatch detection missing");
assert(app.includes("Trotzdem hinzufügen?"), "tag-untypical warning missing");
assert(app.includes("addedDuringWorkout: true"), "added workout exercise marker missing");
assert(app.includes("function removeAddedWorkoutExercise(index)"), "added exercise remove handler missing");
assert(app.includes("data-remove-workout-exercise"), "added exercise remove button missing");

assert(/persistWorkoutDraft\(\);\r?\n\s*render\(\);/.test(app), "editing actions must persist draft before render");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("workout flex editing tests passed");
