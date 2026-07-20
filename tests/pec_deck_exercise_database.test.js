const fs = require("fs");

function readJson(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const seed = readJson("seed_training_database.json");
const core = readJson("data/exercise_core_v2.1.0.json");
const baseMapping = readJson("data/exercise_muscle_mapping.json");
const finalMapping = readJson("data/exercise_muscle_mapping_v2.1.0.json");

const seedPecDeck = exercise(seed, "ex_pec_deck");
const corePecDeck = exercise(core, "ex_pec_deck");
const reversePecDeck = exercise(seed, "ex_reverse_pec_deck");
const pecMapping = mapping(finalMapping, "ex_pec_deck");
const reverseMapping = mapping(finalMapping, "ex_reverse_pec_deck");

assert(seedPecDeck, "normal pec deck exercise missing from seed");
assert(corePecDeck, "normal pec deck exercise missing from core database");
assert(!exercise(seed, "ex_pec_deck_machine"), "duplicate preferred pec deck id must not be added");
assert(noDuplicateIds(seed.exercises), "seed contains duplicate exercise ids");
assert(noDuplicateIds(core.exercises), "core database contains duplicate exercise ids");

assert(corePecDeck.displayName === "Butterfly Maschine", "normal pec deck display name must be Butterfly Maschine");
["Butterfly", "Butterfly Maschine", "Pec Deck", "Pec-Deck", "Brust-Fly Maschine", "Chest Fly Machine", "Machine Fly"].forEach((alias) => {
  assert((corePecDeck.aliases || []).includes(alias) || (seedPecDeck.aliases || []).includes(alias), `alias missing: ${alias}`);
});

assert(includesAny(corePecDeck, ["push", "brust", "chest"]), "normal pec deck must be push/chest");
assert(includesAny(corePecDeck, ["machine", "maschine"]), "normal pec deck must be machine tagged");
assert(includesAny(corePecDeck, ["lws_friendly", "lws-freundlich"]), "normal pec deck must be lws friendly");
assert(!includesAny(corePecDeck, ["pull", "back", "rear_delt"]), "normal pec deck must not be pull/back/rear delt");
assert(corePecDeck.defaultSets === 2, "normal pec deck default sets must be 2");
assert(corePecDeck.defaultRepRange === "10-15", "normal pec deck default reps must be 10-15");
assert(corePecDeck.defaultRestSeconds >= 60 && corePecDeck.defaultRestSeconds <= 75, "normal pec deck rest must be 60-75 seconds");

assert(pecMapping, "normal pec deck mapping missing");
assert(mapping(baseMapping, "ex_pec_deck"), "normal pec deck base mapping missing");
assert(pecMapping.primaryMuscle === "mg_chest_middle", "normal pec deck primary muscle must be middle chest");
assert(!mappingHasMuscle(pecMapping, "mg_triceps"), "normal pec deck must not map triceps");
assert(mappingHasMuscle(pecMapping, "mg_front_delts"), "normal pec deck must map front delts as small helper");

assert(reversePecDeck, "reverse pec deck seed exercise missing");
assert(reverseMapping, "reverse pec deck mapping missing");
assert(includesAny(reversePecDeck, ["pull", "hintere schulter"]) || reverseMapping.primaryMuscle === "mg_rear_delts", "reverse pec deck must remain pull/rear delt");
assert(reverseMapping.primaryMuscle === "mg_rear_delts", "reverse pec deck primary muscle changed");
assert(seedPecDeck.id !== reversePecDeck.id, "normal and reverse pec deck ids must differ");

assert(generatorCanUseForPush(corePecDeck), "generator must be able to use normal pec deck for push");
assert(!generatorWouldUseForPull(corePecDeck), "generator must not use normal pec deck for pull");

function exercise(database, id) {
  return (database.exercises || []).find((item) => item.id === id);
}

function mapping(database, id) {
  return (database.mappings || []).find((item) => item.exerciseId === id);
}

function noDuplicateIds(items) {
  const ids = items.map((item) => item.id);
  return ids.length === new Set(ids).size;
}

function searchableText(exerciseRecord) {
  return [
    exerciseRecord.displayName,
    exerciseRecord.englishName,
    exerciseRecord.category,
    exerciseRecord.movementPattern,
    ...(exerciseRecord.primaryMuscleGroups || []),
    ...(exerciseRecord.secondaryMuscleGroups || []),
    ...(exerciseRecord.aliases || []),
    ...(exerciseRecord.tags || [])
  ].join(" ").toLowerCase();
}

function includesAny(exerciseRecord, needles) {
  const text = searchableText(exerciseRecord);
  return needles.some((needle) => text.includes(needle));
}

function mappingHasMuscle(mappingRecord, muscleId) {
  return mappingRecord.primaryMuscle === muscleId ||
    (mappingRecord.secondaryMuscles || []).some((item) => item.muscleId === muscleId) ||
    (mappingRecord.stabilizers || []).some((item) => item.muscleId === muscleId);
}

function generatorCanUseForPush(exerciseRecord) {
  const text = searchableText(exerciseRecord);
  return ["push", "brust", "chest"].some((needle) => text.includes(needle));
}

function generatorWouldUseForPull(exerciseRecord) {
  const text = searchableText(exerciseRecord);
  return ["pull", "ruecken", "rücken", "back", "rear_delt"].some((needle) => text.includes(needle));
}

console.log("pec deck exercise database tests passed");
