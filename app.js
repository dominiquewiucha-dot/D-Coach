const state = {
  seed: null,
  muscles: null,
  exerciseMuscleMap: null,
  equipment: null,
  extendedExercises: null,
  alternativeRules: null,
  statisticsRules: null,
  planLibrary: null,
  progressionRules: null,
  recoveryRules: null,
  journalSchema: null,
  importExportSchema: null,
  machineSettingsSchema: null,
  muscleAssets: null,
  coachingTexts: null,
  warmupCooldownRules: null,
  userProfileSchema: null,
  exerciseScoringRules: null,
  planGeneratorRules: null,
  qrSchema: null,
  userSettingsSchema: null,
  debugTestData: null,
  appTexts: null,
  releaseAcceptanceCriteria: null,
  personalProfileSchema: null,
  personalProfileSeed: null,
  personalizationRules: null,
  personalCoachRules: null,
  studioContext: null,
  tab: "dashboard",
  activeWorkout: null,
  exerciseSearch: "",
  exerciseFilter: "all",
  selectedExerciseId: null,
  selectedSessionId: null,
  planImportText: "",
  showAlternatives: false,
  isOnline: navigator.onLine,
  deferredInstallPrompt: null,
  restTimer: {
    remaining: 0,
    running: false
  },
  route: null
};

const APP_VERSION = "pwa-v19";
const STORAGE_SCHEMA_VERSION = "2.2.0";
const STORAGE_KEYS = [
  { key: "dcoach.sessions", label: "Trainings", type: "array" },
  { key: "dcoach.weights", label: "Gewicht", type: "array" },
  { key: "dcoach.journalEntries", label: "Journal", type: "array" },
  { key: "dcoach.machineSettings", label: "Geraete", type: "array" },
  { key: "dcoach.activePlanName", label: "Aktiver Plan", type: "string" },
  { key: "dcoach.archivedPlanNames", label: "Archivierte Plaene", type: "array" },
  { key: "dcoach.deletedPlanNames", label: "Geloeschte Plaene", type: "array" },
  { key: "dcoach.customPlans", label: "Eigene Plaene", type: "array" },
  { key: "dcoach.customExercises", label: "Eigene Uebungen", type: "array" },
  { key: "dcoach.userSettings", label: "Einstellungen", type: "object" },
  { key: "dcoach.personalProfile", label: "Profil", type: "object" },
  { key: "dcoach.lastErrors", label: "Fehlerlog", type: "array" },
  { key: "dcoach.activeWorkoutDraft", label: "Trainingsentwurf", type: "object" },
  { key: "dcoach.lastBackupAt", label: "Letztes Backup", type: "string" },
  { key: "dcoach.storageVersion", label: "Speicherversion", type: "string" },
  { key: "dcoach.migrationLog", label: "Migrationen", type: "array" },
  { key: "dcoach.indexedDbReady", label: "IndexedDB vorbereitet", type: "boolean" }
];

const storage = {
  get sessions() {
    return readJson("dcoach.sessions", []);
  },
  set sessions(value) {
    writeJson("dcoach.sessions", value);
  },
  get weights() {
    return readJson("dcoach.weights", []);
  },
  set weights(value) {
    writeJson("dcoach.weights", value);
  },
  get journalEntries() {
    return readJson("dcoach.journalEntries", []);
  },
  set journalEntries(value) {
    writeJson("dcoach.journalEntries", value);
  },
  get machineSettings() {
    return readJson("dcoach.machineSettings", []);
  },
  set machineSettings(value) {
    writeJson("dcoach.machineSettings", value);
  },
  get activePlanName() {
    return localStorage.getItem("dcoach.activePlanName") || null;
  },
  set activePlanName(value) {
    localStorage.setItem("dcoach.activePlanName", value);
  },
  get archivedPlanNames() {
    return readJson("dcoach.archivedPlanNames", []);
  },
  set archivedPlanNames(value) {
    writeJson("dcoach.archivedPlanNames", value);
  },
  get deletedPlanNames() {
    return readJson("dcoach.deletedPlanNames", []);
  },
  set deletedPlanNames(value) {
    writeJson("dcoach.deletedPlanNames", value);
  },
  get customPlans() {
    return readJson("dcoach.customPlans", []);
  },
  set customPlans(value) {
    writeJson("dcoach.customPlans", value);
  },
  get customExercises() {
    return readJson("dcoach.customExercises", []);
  },
  set customExercises(value) {
    writeJson("dcoach.customExercises", value);
  },
  get userSettings() {
    return readJson("dcoach.userSettings", {});
  },
  set userSettings(value) {
    writeJson("dcoach.userSettings", value);
  },
  get personalProfile() {
    return readJson("dcoach.personalProfile", null);
  },
  set personalProfile(value) {
    if (value) writeJson("dcoach.personalProfile", value);
    else localStorage.removeItem("dcoach.personalProfile");
  },
  get lastErrors() {
    return readJson("dcoach.lastErrors", []);
  },
  set lastErrors(value) {
    writeJson("dcoach.lastErrors", value.slice(-20));
  },
  get activeWorkoutDraft() {
    return readJson("dcoach.activeWorkoutDraft", null);
  },
  set activeWorkoutDraft(value) {
    if (value) writeJson("dcoach.activeWorkoutDraft", value);
    else localStorage.removeItem("dcoach.activeWorkoutDraft");
  },
  get lastBackupAt() {
    return localStorage.getItem("dcoach.lastBackupAt") || null;
  },
  set lastBackupAt(value) {
    if (value) localStorage.setItem("dcoach.lastBackupAt", value);
    else localStorage.removeItem("dcoach.lastBackupAt");
  },
  get storageVersion() {
    return localStorage.getItem("dcoach.storageVersion") || null;
  },
  set storageVersion(value) {
    if (value) localStorage.setItem("dcoach.storageVersion", value);
    else localStorage.removeItem("dcoach.storageVersion");
  },
  get migrationLog() {
    return readJson("dcoach.migrationLog", []);
  },
  set migrationLog(value) {
    writeJson("dcoach.migrationLog", value);
  },
  get indexedDbReady() {
    return localStorage.getItem("dcoach.indexedDbReady") === "true";
  },
  set indexedDbReady(value) {
    localStorage.setItem("dcoach.indexedDbReady", value ? "true" : "false");
  }
};

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function storageValueSummary(key, type) {
  const raw = localStorage.getItem(key);
  if (raw === null) return { exists: false, count: 0, bytes: 0, valueLabel: "leer" };
  if (type === "array") {
    const value = readJson(key, []);
    return { exists: true, count: Array.isArray(value) ? value.length : 0, bytes: raw.length, valueLabel: `${Array.isArray(value) ? value.length : 0}` };
  }
  if (type === "object") {
    const value = readJson(key, null);
    return { exists: !!value, count: value ? 1 : 0, bytes: raw.length, valueLabel: value ? "vorhanden" : "leer" };
  }
  if (type === "boolean") {
    return { exists: true, count: raw === "true" ? 1 : 0, bytes: raw.length, valueLabel: raw === "true" ? "ja" : "nein" };
  }
  return { exists: true, count: raw ? 1 : 0, bytes: raw.length, valueLabel: raw || "leer" };
}

function storageManifest() {
  const entries = STORAGE_KEYS.map((item) => ({
    ...item,
    ...storageValueSummary(item.key, item.type)
  }));
  return {
    version: storage.storageVersion,
    targetVersion: STORAGE_SCHEMA_VERSION,
    entries,
    totalBytes: entries.reduce((sum, item) => sum + item.bytes, 0)
  };
}

function appendMigrationLog(entry) {
  const id = entry.id || `migration-${Date.now()}`;
  const next = [...storage.migrationLog.filter((item) => item.id !== id), { ...entry, id }];
  storage.migrationLog = next;
}

function runStorageMigrations() {
  const currentVersion = storage.storageVersion;
  if (currentVersion === STORAGE_SCHEMA_VERSION) return;
  appendMigrationLog({
    id: `storage-${currentVersion || "unknown"}-to-${STORAGE_SCHEMA_VERSION}`,
    from: currentVersion || "unknown",
    to: STORAGE_SCHEMA_VERSION,
    at: new Date().toISOString(),
    action: "metadata-only",
    destructive: false
  });
  storage.storageVersion = STORAGE_SCHEMA_VERSION;
}

function indexedDbSupported() {
  return "indexedDB" in window;
}

function indexedDbStatusText() {
  if (!indexedDbSupported()) return "Nicht unterstuetzt";
  return storage.indexedDbReady ? "Vorbereitet" : "Nicht vorbereitet";
}

function openDCoachIndexedDb() {
  return new Promise((resolve, reject) => {
    if (!indexedDbSupported()) {
      reject(new Error("IndexedDB wird von diesem Browser nicht unterstuetzt."));
      return;
    }
    const request = indexedDB.open("DCoachLocal", 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      ["sessions", "weights", "journalEntries", "machineSettings", "meta"].forEach((name) => {
        if (!db.objectStoreNames.contains(name)) {
          db.createObjectStore(name, { keyPath: "id" });
        }
      });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("IndexedDB konnte nicht geoeffnet werden."));
  });
}

async function prepareIndexedDb() {
  const db = await openDCoachIndexedDb();
  db.close();
  storage.indexedDbReady = true;
  appendMigrationLog({
    id: "indexeddb-prepared-v1",
    from: storage.storageVersion || "unknown",
    to: storage.storageVersion || STORAGE_SCHEMA_VERSION,
    at: new Date().toISOString(),
    action: "indexeddb-structure-prepared",
    destructive: false
  });
}

function mergeById(existing, incoming) {
  const map = new Map();
  existing.forEach((item) => map.set(item.id || JSON.stringify(item), item));
  incoming.forEach((item) => map.set(item.id || JSON.stringify(item), item));
  return [...map.values()];
}

function mergeByKey(existing = [], incoming = [], key) {
  const map = new Map();
  existing.forEach((item) => map.set(item[key], item));
  incoming.forEach((item) => map.set(item[key], { ...(map.get(item[key]) || {}), ...item }));
  return [...map.values()];
}

function uniqueValues(...lists) {
  return [...new Set(lists.flat().filter(Boolean))];
}

function normalizeExercise(raw, existing = null) {
  const primaryMuscleGroups = raw.primaryMuscleGroups || existing?.primaryMuscleGroups || [];
  const secondaryMuscleGroups = raw.secondaryMuscleGroups || existing?.secondaryMuscleGroups || [];
  const equipmentName = raw.equipment || (raw.equipmentId ? [equipmentNameById(raw.equipmentId)] : existing?.equipment || []);
  return {
    ...raw,
    ...existing,
    englishName: raw.englishName || existing?.englishName || "",
    aliases: uniqueValues(existing?.aliases || [], raw.aliases || [], raw.englishName ? [raw.englishName] : []),
    primaryMuscleGroups,
    secondaryMuscleGroups,
    movementPattern: raw.movementPattern || existing?.movementPattern || "Allgemein",
    equipment: uniqueValues(equipmentName),
    category: raw.category || existing?.category || "Uebung",
    difficulty: raw.difficulty || existing?.difficulty || "mittel",
    spineLoadLevel: raw.spineLoadLevel || existing?.spineLoadLevel || "medium",
    lumbarDiscSuitability: raw.lumbarDiscSuitability || existing?.lumbarDiscSuitability || "conditionallySuitable",
    defaultSets: raw.defaultSets || existing?.defaultSets || 2,
    defaultRepRange: raw.defaultRepRange || existing?.defaultRepRange || "8-12",
    defaultRestSeconds: raw.defaultRestSeconds || existing?.defaultRestSeconds || 90,
    techniqueNotes: raw.techniqueNotes || existing?.techniqueNotes || "",
    commonMistakes: raw.commonMistakes || existing?.commonMistakes || [],
    tags: uniqueValues(existing?.tags || [], raw.tags || []),
    alternatives: uniqueValues(existing?.alternatives || [], raw.alternatives || [])
  };
}

function mergeExercises(existing = [], incoming = []) {
  const map = new Map(existing.map((exercise) => [exercise.id, exercise]));
  incoming.forEach((exercise) => {
    map.set(exercise.id, normalizeExercise(exercise, map.get(exercise.id) || null));
  });
  return [...map.values()];
}

function normalizePlanPreset(plan) {
  return {
    version: 1,
    type: "training_plan",
    id: plan.id,
    planName: plan.name || plan.planName,
    description: plan.description || plan.goal || "Trainingsplan",
    goal: plan.goal || "",
    maxDurationMinutes: plan.maxDurationMinutes || 60,
    days: (plan.days || []).map((day) => ({
      name: day.name,
      maxDurationMinutes: day.maxDurationMinutes || plan.maxDurationMinutes || 60,
      exercises: (day.exercises || []).map((item, index) => {
        const exerciseId = typeof item === "string" ? item : item.exerciseId;
        const exercise = exerciseById(exerciseId) || {};
        return {
          exerciseId,
          sets: item.sets || exercise.defaultSets || 2,
          reps: item.reps || exercise.defaultRepRange || "8-12",
          restSeconds: item.restSeconds || exercise.defaultRestSeconds || 90,
          priority: item.priority || (index < 4 ? "required" : "important"),
          sortOrder: item.sortOrder || index + 1
        };
      })
    }))
  };
}

function mergeTrainingPlans(existing = [], incoming = []) {
  const map = new Map(existing.map((plan) => [plan.id || plan.planName, plan]));
  incoming.map(normalizePlanPreset).forEach((plan) => {
    const key = plan.id || plan.planName;
    map.set(key, { ...(map.get(key) || {}), ...plan });
  });
  return [...map.values()];
}

function mergeKnowledgeBaseData({ knowledgeExercises, knowledgeMuscleMap, trainingPlanPresets }) {
  if (knowledgeExercises?.exercises?.length) {
    state.seed.exercises = mergeExercises(state.seed.exercises, knowledgeExercises.exercises);
  }
  if (knowledgeMuscleMap?.mappings?.length) {
    state.exerciseMuscleMap = {
      ...(state.exerciseMuscleMap || {}),
      version: knowledgeMuscleMap.version,
      mappings: mergeByKey(state.exerciseMuscleMap?.mappings || [], knowledgeMuscleMap.mappings, "exerciseId")
    };
  }
  if (trainingPlanPresets?.plans?.length) {
    state.seed.trainingPlans = mergeTrainingPlans(state.seed.trainingPlans, trainingPlanPresets.plans);
  }
}

function mergeAlternativeRules(incoming) {
  if (!incoming?.rules?.length) return;
  state.alternativeRules = {
    ...(state.alternativeRules || {}),
    version: incoming.version,
    rules: mergeByKey(state.alternativeRules?.rules || [], incoming.rules, "sourceExerciseId")
  };
}

function appText(key, fallback = "") {
  return state.appTexts?.texts?.[key] || fallback;
}

function defaultUserSettings() {
  const settings = {};
  (state.userSettingsSchema?.settings || []).forEach((item) => {
    settings[item.key] = item.default ?? null;
  });
  return settings;
}

function currentUserSettings() {
  return { ...defaultUserSettings(), ...storage.userSettings };
}

function defaultPersonalProfile() {
  const profile = {};
  (state.personalProfileSchema?.profileFields || []).forEach((item) => {
    profile[item.key] = item.default ?? null;
  });
  return profile;
}

function currentPersonalProfile() {
  return { ...defaultPersonalProfile(), ...(storage.personalProfile || {}) };
}

function importSeedProfile() {
  if (!state.personalProfileSeed) throw new Error("Seed-Profil fehlt.");
  if (storage.personalProfile && !confirm("Bestehendes Profil ersetzen?")) return;
  storage.personalProfile = {
    ...defaultPersonalProfile(),
    ...state.personalProfileSeed,
    importedAt: new Date().toISOString()
  };
}

function updateUserSetting(key, value) {
  storage.userSettings = { ...currentUserSettings(), [key]: value };
}

function logAppError(message, source = "app") {
  storage.lastErrors = [...storage.lastErrors, {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    message: String(message || "Unbekannter Fehler"),
    source,
    at: new Date().toISOString()
  }];
}

function requireBackupBeforeMigration() {
  if (storage.lastBackupAt) return true;
  return confirm(appText("migration.backupFirst", "Bitte vor der Migration ein Backup erstellen.") + "\n\nTrotzdem fortfahren?");
}

function planQrPayload(plan) {
  if (!plan) return "";
  return JSON.stringify({
    type: "dcoach_plan",
    version: "1.4.0",
    exportedAt: new Date().toISOString(),
    plan: {
      id: plan.id || plan.planName,
      name: plan.planName,
      description: plan.description || "",
      goal: plan.goal || "",
      days: plan.days || []
    }
  });
}

function parsePlanPayload(text) {
  const payload = JSON.parse(String(text || "").trim());
  if (payload?.type !== "dcoach_plan" || !payload.plan?.name || !Array.isArray(payload.plan.days)) {
    throw new Error("Kein gueltiger D-Coach-Plan.");
  }
  return normalizePlanPreset({
    id: payload.plan.id || `plan_import_${Date.now()}`,
    name: payload.plan.name,
    description: payload.plan.description || "Importierter Plan",
    goal: payload.plan.goal || "",
    days: payload.plan.days
  });
}

function importPlanPayload(text) {
  const plan = parsePlanPayload(text);
  const usedNames = new Set(availablePlans().map((item) => item.planName));
  let nextName = plan.planName;
  let index = 2;
  while (usedNames.has(nextName)) {
    nextName = `${plan.planName} Import ${index}`;
    index += 1;
  }
  plan.id = `${plan.id || "plan_import"}_${Date.now()}`;
  plan.planName = nextName;
  storage.customPlans = [...storage.customPlans, plan];
  storage.activePlanName = plan.planName;
}

function generatePlanCandidate() {
  const profile = currentPersonalProfile();
  const avoidIds = new Set(profile.avoidExerciseIds || []);
  const preferredIds = new Set(profile.preferredExerciseIds || []);
  const exercises = allExercises()
    .filter((exercise) => !exercise.isArchived && !avoidIds.has(exercise.id) && exercise.lumbarDiscSuitability !== "avoidInitially")
    .sort((a, b) => {
      const preferredDelta = Number(preferredIds.has(b.id)) - Number(preferredIds.has(a.id));
      if (preferredDelta) return preferredDelta;
      return lwsRank(a.lumbarDiscSuitability) - lwsRank(b.lumbarDiscSuitability);
    });
  const groups = [
    ["Push", ["push", "brust", "schulter", "trizeps"]],
    ["Pull", ["pull", "ruecken", "rücken", "bizeps"]],
    ["Beine + Core", ["bein", "quad", "glute", "hamstring", "core", "bauch"]]
  ];
  const days = groups.map(([name, needles]) => {
    const chosen = exercises.filter((exercise) => {
      const text = `${exercise.displayName} ${exercise.category} ${exercise.movementPattern} ${exercise.tags.join(" ")} ${exercise.primaryMuscleGroups.join(" ")}`.toLowerCase();
      return needles.some((needle) => text.includes(needle));
    }).slice(0, 6);
    return {
      name,
      maxDurationMinutes: 60,
      exercises: chosen.map((exercise, index) => ({
        exerciseId: exercise.id,
        sets: exercise.defaultSets || 2,
        reps: exercise.defaultRepRange || "8-12",
        restSeconds: exercise.defaultRestSeconds || 90,
        priority: index < 4 ? "required" : "important",
        sortOrder: index + 1
      }))
    };
  }).filter((day) => day.exercises.length);
  return {
    id: `plan_generated_${Date.now()}`,
    planName: `D-Coach Vorschlag ${new Date().toLocaleDateString("de-DE")}`,
    description: "Regelbasiert aus vorhandenen Uebungen erzeugt. Bitte pruefen.",
    goal: "Hypertrophie / Wiedereinstieg",
    maxDurationMinutes: 60,
    days
  };
}

async function fetchOptionalJson(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.warn(`Optionale D-Coach Daten konnten nicht geladen werden: ${path}`, error);
    return null;
  }
}

async function boot() {
  state.seed = await fetch("./seed_training_database.json").then((response) => response.json());
  const [
    muscles,
    exerciseMuscleMap,
    muscleMapLarge,
    equipment,
    equipmentLarge,
    extendedExercises,
    largeExercises,
    alternativeRules,
    statisticsRules,
    planLibrary,
    planLibraryFull,
    progressionRules,
    recoveryRules,
    journalSchema,
    importExportSchema,
    machineSettingsSchema,
    knowledgeExercises,
    knowledgeMuscleMap,
    muscleAssets,
    trainingPlanPresets,
    coachingTexts,
    warmupCooldownRules,
    userProfileSchema,
    exerciseScoringRules,
    exercisesPlus,
    muscleMappingPlus,
    planGeneratorRules,
    qrSchema,
    userSettingsSchema,
    debugTestData,
    appTexts,
    releaseAcceptanceCriteria,
    exerciseCoreV21,
    muscleMappingV21,
    alternativesV21,
    personalProfileSchema,
    personalProfileSeed,
    personalizationRules,
    personalCoachRules,
    studioContext
  ] = await Promise.all([
    fetchOptionalJson("./data/muscles.json"),
    fetchOptionalJson("./data/exercise_muscle_mapping.json"),
    fetchOptionalJson("./data/muscle_mapping_large_v1.2.0.json"),
    fetchOptionalJson("./data/equipment_v1.1.0.json"),
    fetchOptionalJson("./data/equipment_v1.2.0.json"),
    fetchOptionalJson("./data/exercises_extended_v1.1.0.json"),
    fetchOptionalJson("./data/exercises_large_v1.2.0.json"),
    fetchOptionalJson("./data/alternative_rules_v1.1.0.json"),
    fetchOptionalJson("./data/statistics_rules_v1.1.0.json"),
    fetchOptionalJson("./data/training_plans_library_v1.1.0.json"),
    fetchOptionalJson("./data/training_plans_full_v1.2.0.json"),
    fetchOptionalJson("./data/progression_rules_v1.2.0.json"),
    fetchOptionalJson("./data/recovery_rules_v1.2.0.json"),
    fetchOptionalJson("./data/journal_schema_v1.2.0.json"),
    fetchOptionalJson("./data/import_export_schema_v1.2.0.json"),
    fetchOptionalJson("./data/machine_settings_schema_v1.2.0.json"),
    fetchOptionalJson("./data/exercises_knowledge_v1.3.0.json"),
    fetchOptionalJson("./data/exercise_muscle_mapping_v1.3.0.json"),
    fetchOptionalJson("./data/muscle_assets_v1.3.0.json"),
    fetchOptionalJson("./data/training_plan_presets_v1.3.0.json"),
    fetchOptionalJson("./data/coaching_texts_v1.3.0.json"),
    fetchOptionalJson("./data/warmup_cooldown_rules_v1.3.0.json"),
    fetchOptionalJson("./data/user_profile_schema_v1.3.0.json"),
    fetchOptionalJson("./data/exercise_scoring_rules_v1.3.0.json"),
    fetchOptionalJson("./data/exercises_plus_v1.4.0.json"),
    fetchOptionalJson("./data/exercise_muscle_mapping_plus_v1.4.0.json"),
    fetchOptionalJson("./data/plan_generator_rules_v1.4.0.json"),
    fetchOptionalJson("./data/qr_schema_v1.4.0.json"),
    fetchOptionalJson("./data/user_settings_schema_v1.4.0.json"),
    fetchOptionalJson("./data/debug_test_data_v1.4.0.json"),
    fetchOptionalJson("./data/app_texts_v1.4.0.json"),
    fetchOptionalJson("./data/release_acceptance_criteria_v1.4.0.json"),
    fetchOptionalJson("./data/exercise_core_v2.1.0.json"),
    fetchOptionalJson("./data/exercise_muscle_mapping_v2.1.0.json"),
    fetchOptionalJson("./data/exercise_alternatives_v2.1.0.json"),
    fetchOptionalJson("./data/personal_profile_schema_v2.2.0.json"),
    fetchOptionalJson("./data/personal_profile_dominique_seed_v2.2.0.json"),
    fetchOptionalJson("./data/personalization_rules_v2.2.0.json"),
    fetchOptionalJson("./data/personal_coach_rules_v2.2.0.json"),
    fetchOptionalJson("./data/studio_context_v2.2.0.json")
  ]);
  state.muscles = muscles;
  state.exerciseMuscleMap = muscleMapLarge || exerciseMuscleMap;
  state.equipment = equipmentLarge || equipment;
  state.extendedExercises = largeExercises || extendedExercises;
  state.alternativeRules = alternativeRules;
  state.statisticsRules = statisticsRules;
  state.planLibrary = planLibraryFull || planLibrary;
  state.progressionRules = progressionRules;
  state.recoveryRules = recoveryRules;
  state.journalSchema = journalSchema;
  state.importExportSchema = importExportSchema;
  state.machineSettingsSchema = machineSettingsSchema;
  state.muscleAssets = muscleAssets;
  state.coachingTexts = coachingTexts;
  state.warmupCooldownRules = warmupCooldownRules;
  state.userProfileSchema = userProfileSchema;
  state.exerciseScoringRules = exerciseScoringRules;
  state.planGeneratorRules = planGeneratorRules;
  state.qrSchema = qrSchema;
  state.userSettingsSchema = userSettingsSchema;
  state.debugTestData = debugTestData;
  state.appTexts = appTexts;
  state.releaseAcceptanceCriteria = releaseAcceptanceCriteria;
  state.personalProfileSchema = personalProfileSchema;
  state.personalProfileSeed = personalProfileSeed;
  state.personalizationRules = personalizationRules;
  state.personalCoachRules = personalCoachRules;
  state.studioContext = studioContext;
  mergeKnowledgeBaseData({ knowledgeExercises, knowledgeMuscleMap, trainingPlanPresets });
  mergeKnowledgeBaseData({ knowledgeExercises: exercisesPlus, knowledgeMuscleMap: muscleMappingPlus, trainingPlanPresets: null });
  mergeKnowledgeBaseData({ knowledgeExercises: exerciseCoreV21, knowledgeMuscleMap: muscleMappingV21, trainingPlanPresets: null });
  mergeAlternativeRules(alternativesV21);
  runStorageMigrations();
  const plan = activePlan();
  if (plan && storage.activePlanName !== plan.planName) {
    storage.activePlanName = plan.planName;
  }
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
  bindPwaEvents();
  restoreWorkoutDraft();
  startTimerLoop();
  render();
}

function bindPwaEvents() {
  window.addEventListener("online", () => {
    state.isOnline = true;
    render();
  });
  window.addEventListener("offline", () => {
    state.isOnline = false;
    render();
  });
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.deferredInstallPrompt = event;
    render();
  });
  window.addEventListener("appinstalled", () => {
    state.deferredInstallPrompt = null;
    render();
  });
  window.addEventListener("error", (event) => {
    logAppError(event.message, "window");
  });
  window.addEventListener("unhandledrejection", (event) => {
    logAppError(event.reason?.message || event.reason || "Unhandled promise rejection", "promise");
  });
}

function restoreWorkoutDraft() {
  const draft = storage.activeWorkoutDraft;
  if (!draft || typeof draft !== "object") return;
  if (!draft.planName || !draft.dayName || !Array.isArray(draft.entries)) return;
  if (!Number.isInteger(draft.index) || draft.index < 0 || draft.index >= draft.entries.length) return;
  state.activeWorkout = draft;
  state.tab = "training";
}

function persistWorkoutDraft() {
  if (state.activeWorkout) storage.activeWorkoutDraft = state.activeWorkout;
}

function clearWorkoutDraft() {
  storage.activeWorkoutDraft = null;
}

function resumeWorkoutDraft() {
  restoreWorkoutDraft();
  if (state.activeWorkout) render();
}

function startTimerLoop() {
  if (window.dcoachTimerLoop) return;
  window.dcoachTimerLoop = window.setInterval(() => {
    if (!state.restTimer.running || state.restTimer.remaining <= 0) return;
    state.restTimer.remaining -= 1;
    if (state.restTimer.remaining <= 0) {
      state.restTimer.remaining = 0;
      state.restTimer.running = false;
    }
    if (state.activeWorkout) render();
  }, 1000);
}

function startRestTimer(seconds) {
  state.restTimer.remaining = Math.max(0, Number(seconds) || 0);
  state.restTimer.running = state.restTimer.remaining > 0;
}

function restTimeText(seconds) {
  const safe = Math.max(0, Number(seconds) || 0);
  const minutes = Math.floor(safe / 60);
  const rest = String(safe % 60).padStart(2, "0");
  return `${minutes}:${rest}`;
}

function activePlan() {
  const plans = availablePlans().filter((plan) => !isPlanArchived(plan.planName));
  return plans.find((plan) => plan.planName === storage.activePlanName) || plans[0] || null;
}

function availablePlans() {
  return [...state.seed.trainingPlans, ...storage.customPlans].filter((plan) => !storage.deletedPlanNames.includes(plan.planName));
}

function allExercises() {
  return [...state.seed.exercises, ...storage.customExercises];
}

function isPlanArchived(planName) {
  return storage.archivedPlanNames.includes(planName);
}

function planStatus(plan) {
  if (isPlanArchived(plan.planName)) return "Archiviert";
  if (activePlan()?.planName === plan.planName) return "Aktiv";
  return "Bibliothek";
}

function ensureActivePlan() {
  const plan = activePlan();
  storage.activePlanName = plan?.planName || "";
}

function duplicatePlan(planName) {
  const plan = availablePlans().find((item) => item.planName === planName);
  if (!plan) return;
  const copyName = `${plan.planName} Kopie`;
  const usedNames = new Set(availablePlans().map((item) => item.planName));
  let nextName = copyName;
  let index = 2;
  while (usedNames.has(nextName)) {
    nextName = `${copyName} ${index}`;
    index += 1;
  }
  const copy = JSON.parse(JSON.stringify(plan));
  copy.id = `${plan.id || plan.planName}-copy-${Date.now()}`;
  copy.planName = nextName;
  copy.description = `${plan.description || ""} Lokale Kopie.`.trim();
  storage.customPlans = [...storage.customPlans, copy];
  storage.activePlanName = copy.planName;
}

function customExerciseFromForm(existing = null) {
  const name = document.querySelector("[data-custom-exercise-name]")?.value.trim();
  if (!name) throw new Error("Name fehlt.");
  const equipment = document.querySelector("[data-custom-exercise-equipment]")?.value.trim() || "Eigen";
  const primary = document.querySelector("[data-custom-exercise-primary]")?.value.trim() || "Nicht zugeordnet";
  const reps = document.querySelector("[data-custom-exercise-reps]")?.value.trim() || "8-12";
  const note = document.querySelector("[data-custom-exercise-note]")?.value.trim() || "";
  const lws = document.querySelector("[data-custom-exercise-lws]")?.value || "conditionallySuitable";
  return normalizeExercise({
    id: existing?.id || `custom_ex_${Date.now()}`,
    displayName: name,
    aliases: [],
    primaryMuscleGroups: [primary],
    secondaryMuscleGroups: [],
    movementPattern: "Custom",
    equipment: [equipment],
    category: "Eigene Uebung",
    difficulty: "mittel",
    spineLoadLevel: lws === "suitable" ? "low" : "medium",
    lumbarDiscSuitability: lws,
    defaultSets: existing?.defaultSets || 2,
    defaultRepRange: reps,
    defaultRestSeconds: existing?.defaultRestSeconds || 90,
    techniqueNotes: note,
    commonMistakes: [],
    tags: ["custom"],
    alternatives: [],
    isCustom: true,
    isArchived: false,
    schemaVersion: "1.4.0",
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }, existing);
}

function saveCustomExercise(existingId = null) {
  const existing = existingId ? storage.customExercises.find((item) => item.id === existingId) : null;
  const exercise = customExerciseFromForm(existing);
  storage.customExercises = [...storage.customExercises.filter((item) => item.id !== exercise.id), exercise];
}

function exerciseHasHistory(exerciseId) {
  return storage.sessions.some((session) => session.completedExercises.some((exercise) => exercise.exerciseId === exerciseId));
}

function archiveCustomExercise(exerciseId) {
  storage.customExercises = storage.customExercises.map((exercise) => exercise.id === exerciseId ? { ...exercise, isArchived: true, updatedAt: new Date().toISOString() } : exercise);
}

function deleteCustomExercise(exerciseId) {
  if (exerciseHasHistory(exerciseId)) {
    archiveCustomExercise(exerciseId);
    alert(appText("exercise.customArchived", "Diese Uebung hat Historie und wurde archiviert statt geloescht."));
    return;
  }
  storage.customExercises = storage.customExercises.filter((exercise) => exercise.id !== exerciseId);
}

function loadDebugTestData() {
  if (!state.debugTestData) return;
  const now = new Date().toISOString();
  const sessions = (state.debugTestData.sampleWorkouts || []).map((item, index) => ({
    id: `${item.id}_${Date.now()}_${index}`,
    planId: "debug",
    planName: item.planNameSnapshot || "Debug",
    planNameSnapshot: item.planNameSnapshot || "Debug",
    dayName: item.dayNameSnapshot || "Debug",
    dayNameSnapshot: item.dayNameSnapshot || "Debug",
    startedAt: now,
    endedAt: now,
    completedAt: now,
    readinessSnapshot: null,
    completedExercises: (item.completedExercises || []).map((exercise, sortIndex) => ({
      exerciseId: exercise.exerciseId,
      exerciseNameSnapshot: exercise.exerciseNameSnapshot || exercise.exerciseId,
      plannedSets: exercise.sets?.length || 0,
      completedSets: exercise.sets?.filter((set) => set.completed).length || 0,
      sortOrder: sortIndex + 1,
      sets: (exercise.sets || []).map((set) => ({
        setNumber: set.setNumber,
        actualWeightKg: Number(set.weightKg),
        plannedReps: "",
        actualReps: Number(set.reps),
        rir: null,
        completed: !!set.completed
      }))
    }))
  }));
  const weights = (state.debugTestData.sampleBodyweight || []).map((item, index) => ({
    id: `debug_weight_${Date.now()}_${index}`,
    date: new Date(item.date).toISOString(),
    weightKg: Number(item.weightKg)
  }));
  storage.sessions = mergeById(storage.sessions, sessions);
  storage.weights = mergeById(storage.weights, weights);
}

async function clearPwaCache() {
  if ("serviceWorker" in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((registration) => registration.update()));
  }
  if ("caches" in window) {
    const keys = await caches.keys();
    await Promise.all(keys.map((key) => caches.delete(key)));
  }
}

function exerciseById(id) {
  return allExercises().find((exercise) => exercise.id === id);
}

function htmlesc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function kg(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "-";
  const rounded = Math.round(Number(value) * 10) / 10;
  return `${String(rounded).replace(".", ",")} kg`;
}

function parseNumber(value) {
  const parsed = Number(String(value ?? "").replace(",", "."));
  return Number.isFinite(parsed) ? parsed : null;
}

function parseInteger(value) {
  const parsed = Number.parseInt(String(value ?? ""), 10);
  return Number.isFinite(parsed) ? parsed : null;
}

function dateText(value) {
  return new Intl.DateTimeFormat("de-DE", { dateStyle: "short" }).format(new Date(value));
}

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function dateTimeText(value) {
  if (!value) return "Noch nie";
  return new Intl.DateTimeFormat("de-DE", { dateStyle: "short", timeStyle: "short" }).format(new Date(value));
}

function daysSince(value) {
  if (!value) return null;
  const diff = Date.now() - new Date(value).getTime();
  if (!Number.isFinite(diff) || diff < 0) return null;
  return Math.floor(diff / 86400000);
}

function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
}

function averageWeight(days) {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - days + 1);
  const values = storage.weights.filter((entry) => new Date(entry.date) >= start).map((entry) => Number(entry.weightKg));
  if (!values.length) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function latestJournalEntry() {
  return [...storage.journalEntries].sort((a, b) => new Date(b.date) - new Date(a.date))[0] || null;
}

function journalEntryForDate(date) {
  return storage.journalEntries.find((entry) => entry.date === date) || null;
}

function readinessForJournal(entry) {
  if (!entry) return { color: "amber", label: "Nicht erfasst", score: null, hint: "Tagesform noch nicht eingetragen." };
  const sleep = Number(entry.sleepQuality || 0);
  const energy = Number(entry.energy || 0);
  const mood = Number(entry.mood || 0);
  const stress = Number(entry.stress || 0);
  const soreness = Number(entry.soreness || 0);
  const base = (sleep + energy + mood) / 3;
  const score = Math.max(1, Math.min(5, base - Math.max(0, stress - 3) * 0.45 - Math.max(0, soreness - 3) * 0.35));
  if (score >= 3.7) return { color: "green", label: "Gut", score, hint: "Heute normal trainieren." };
  if (score >= 2.6) return { color: "amber", label: "Moderat", score, hint: "Heute moderat starten." };
  return { color: "red", label: "Leicht", score, hint: "Heute leichter trainieren und Regeneration beachten." };
}

function completedSetsOnly(exercise) {
  return exercise?.sets?.filter((set) => set.completed && Number(set.actualReps) > 0) || [];
}

function performanceForExercise(exercise) {
  const sets = completedSetsOnly(exercise);
  const reps = sets.reduce((sum, set) => sum + Number(set.actualReps || 0), 0);
  const volume = totalVolume({ sets });
  const bestWeight = sets.map((set) => Number(set.actualWeightKg)).filter(Number.isFinite).reduce((max, value) => Math.max(max, value), 0);
  return { sets, reps, volume, bestWeight };
}

function progressionForEntry(entry, previous) {
  const texts = coachingTexts();
  const current = {
    sets: entry.sets.map((set) => ({
      completed: set.completed,
      actualWeightKg: parseNumber(set.weightText),
      actualReps: parseInteger(set.repsText),
      rir: parseInteger(set.rirText)
    }))
  };
  const currentPerf = performanceForExercise(current);
  const previousPerf = previous ? performanceForExercise(previous.exercise) : null;
  const topTarget = upperRepTarget(entry.reps);
  const allTop = topTarget && currentPerf.sets.length && currentPerf.sets.every((set) => Number(set.actualReps || 0) >= topTarget);
  const critical = exerciseIsCritical(exerciseById(entry.exerciseId));
  if (!currentPerf.sets.length) return { color: "amber", text: texts.noHistory || "Noch keine abgeschlossenen Saetze." };
  if (critical && allTop) return { color: "amber", text: texts.lwsCaution || "Stark, aber LWS-vorsichtig: erst Technik stabil halten, dann klein steigern." };
  if (allTop) return { color: "green", text: texts.increaseSuggested || "Alle Saetze stark. Naechstes Mal leicht erhoehen." };
  if (previousPerf && currentPerf.volume > previousPerf.volume) return { color: "green", text: texts.sameWeightMoreReps || "Staerker als letztes Mal." };
  if (previousPerf && currentPerf.volume < previousPerf.volume * 0.85) return { color: "amber", text: texts.performanceDrop || "Heute schwaecher. Regeneration pruefen." };
  return { color: "blue", text: texts.holdWeight || "Gewicht halten und Wiederholungen sammeln." };
}

function progressionForCompletedExercise(exercise, previous, sessionId) {
  const texts = coachingTexts();
  if (!previous) return { color: "blue", text: texts.noHistory || "Neue Uebung in deiner Historie." };
  const currentVolume = totalVolume(exercise);
  const previousVolume = totalVolume(previous.exercise);
  const bestBefore = bestWeightBeforeExercise(exercise.exerciseId, sessionId);
  const currentBest = exercise.sets
    .map((set) => Number(set.actualWeightKg))
    .filter((value) => Number.isFinite(value))
    .reduce((max, value) => Math.max(max, value), 0);
  if (currentBest > 0 && (!bestBefore || currentBest > bestBefore)) {
    return { color: "green", text: "Neues Bestgewicht. Naechstes Training kontrolliert bestaetigen." };
  }
  if (currentVolume > previousVolume) return { color: "green", text: texts.sameWeightMoreReps || "Mehr Volumen als letztes Mal." };
  if (currentVolume < previousVolume * 0.85) return { color: "amber", text: texts.performanceDrop || "Schwaecher als zuletzt. Regeneration pruefen." };
  return { color: "blue", text: texts.holdWeight || "Gewicht halten und Wiederholungen sammeln." };
}

function machineSettingsForExercise(exerciseId) {
  return storage.machineSettings.filter((item) => item.exerciseId === exerciseId).sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
}

function latestMachineSetting(exerciseId) {
  return machineSettingsForExercise(exerciseId)[0] || null;
}

function lastSession() {
  return [...storage.sessions].sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt))[0] || null;
}

function lastCompletedExercise(exerciseId) {
  const sessions = [...storage.sessions].sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt));
  for (const session of sessions) {
    const found = [...session.completedExercises].sort((a, b) => a.sortOrder - b.sortOrder).find((item) => item.exerciseId === exerciseId);
    if (found) return { session, exercise: found };
  }
  return null;
}

function exerciseHistory(exerciseId) {
  return [...storage.sessions]
    .sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt))
    .flatMap((session) => session.completedExercises
      .filter((exercise) => exercise.exerciseId === exerciseId)
      .map((exercise) => ({ session, exercise })));
}

function exerciseHistoryBefore(exerciseId, sessionId) {
  const current = sessionById(sessionId);
  const currentDate = current ? new Date(current.startedAt) : new Date();
  return exerciseHistory(exerciseId)
    .filter((item) => item.session.id !== sessionId && new Date(item.session.startedAt) < currentDate);
}

function previousExerciseBefore(exerciseId, sessionId) {
  return exerciseHistoryBefore(exerciseId, sessionId)[0] || null;
}

function bestWeightForExercise(exerciseId) {
  const values = exerciseHistory(exerciseId)
    .flatMap((item) => item.exercise.sets)
    .map((set) => Number(set.actualWeightKg))
    .filter((value) => Number.isFinite(value));
  return values.length ? Math.max(...values) : null;
}

function bestWeightBeforeExercise(exerciseId, sessionId) {
  const values = exerciseHistoryBefore(exerciseId, sessionId)
    .flatMap((item) => item.exercise.sets)
    .map((set) => Number(set.actualWeightKg))
    .filter((value) => Number.isFinite(value));
  return values.length ? Math.max(...values) : null;
}

function bestVolumeForExercise(exerciseId) {
  const values = exerciseHistory(exerciseId).map((item) => totalVolume(item.exercise));
  return values.length ? Math.max(...values) : null;
}

function totalVolume(completedExercise) {
  return completedExercise.sets.reduce((sum, set) => sum + (Number(set.actualWeightKg) || 0) * (Number(set.actualReps) || 0), 0);
}

function sessionById(id) {
  return storage.sessions.find((session) => session.id === id) || null;
}

function sessionVolume(session) {
  return session.completedExercises.reduce((sum, exercise) => sum + totalVolume(exercise), 0);
}

function sessionSetCount(session) {
  return session.completedExercises.reduce((sum, exercise) => sum + exercise.sets.length, 0);
}

function sessionDurationMinutes(session) {
  const started = new Date(session.startedAt);
  const ended = new Date(session.endedAt || session.startedAt);
  return Math.max(1, Math.round((ended - started) / 60000));
}

function sessionsSince(days) {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - days + 1);
  return storage.sessions.filter((session) => new Date(session.startedAt) >= start);
}

function weeklyVolume() {
  return sessionsSince(7).reduce((sum, session) => sum + sessionVolume(session), 0);
}

function sessionImprovements(session) {
  return session.completedExercises
    .map((exercise) => {
      const previous = previousExerciseBefore(exercise.exerciseId, session.id);
      const currentVolume = totalVolume(exercise);
      const previousVolume = previous ? totalVolume(previous.exercise) : 0;
      const bestBefore = bestWeightBeforeExercise(exercise.exerciseId, session.id);
      const currentBest = exercise.sets
        .map((set) => Number(set.actualWeightKg))
        .filter((value) => Number.isFinite(value))
        .reduce((max, value) => Math.max(max, value), 0);
      const isRecord = currentBest > 0 && (!bestBefore || currentBest > bestBefore);
      const delta = previous ? currentVolume - previousVolume : null;
      return { exercise, previous, currentVolume, previousVolume, delta, isRecord, currentBest };
    })
    .filter((item) => item.isRecord || item.delta > 0);
}

function upperRepTarget(text) {
  const numbers = String(text || "").match(/\d+/g)?.map(Number) || [];
  return numbers.length ? Math.max(...numbers) : null;
}

function progressionHint(exercise, plannedReps, previousSets) {
  const texts = coachingTexts();
  if (exerciseIsCritical(exercise)) {
    return texts.lwsCaution || "Nur schmerzfrei ausführen oder Alternative wählen.";
  }
  const target = upperRepTarget(plannedReps);
  if (!target || !previousSets?.length) {
    return texts.noHistory || "Sauber arbeiten und moderat starten.";
  }
  const allReached = previousSets.every((set) => Number(set.actualReps || 0) >= target);
  return allReached ? (texts.increaseSuggested || "Letztes Mal Ziel erreicht. Beim nächsten Mal leicht steigern.") : (texts.holdWeight || "Gewicht beibehalten und Technik priorisieren.");
}

function lwsBadge(value) {
  const map = {
    suitable: ["LWS geeignet", "green"],
    conditionallySuitable: ["LWS vorsichtig", "amber"],
    notRecommended: ["Nicht empfohlen", "red"],
    avoidInitially: ["Anfangs vermeiden", "red"]
  };
  const [label, color] = map[value] || [value, "amber"];
  return `<span class="badge ${color}">${htmlesc(label)}</span>`;
}

function exerciseKind(exercise) {
  if (exercise.movementPattern === "Isolation") return "Isolation";
  if (exercise.primaryMuscleGroups.length === 1 && !exercise.secondaryMuscleGroups.length) return "Isolation";
  return "Mehrgelenk";
}

function muscleById(id) {
  return state.muscles?.muscleGroups?.find((muscle) => muscle.id === id) || null;
}

function muscleName(id) {
  return muscleById(id)?.name || id;
}

function muscleMappingForExercise(exerciseId) {
  return state.exerciseMuscleMap?.mappings?.find((mapping) => mapping.exerciseId === exerciseId) || null;
}

function coachingTexts() {
  return state.coachingTexts?.texts || {};
}

function muscleAssetFor(muscleId) {
  return state.muscleAssets?.muscles?.find((item) => item.muscleId === muscleId) || null;
}

function warmupRulesForDay(day) {
  const rules = state.warmupCooldownRules?.warmup || [];
  const exercises = day?.exercises?.map((item) => exerciseById(item.exerciseId)).filter(Boolean) || [];
  const hasLegOrCore = exercises.some((exercise) => {
    const text = `${exercise.category} ${exercise.movementPattern} ${exercise.primaryMuscleGroups.join(" ")} ${exercise.secondaryMuscleGroups.join(" ")}`.toLowerCase();
    return text.includes("bein") || text.includes("core") || text.includes("squat") || text.includes("hinge");
  });
  return rules.filter((rule) => rule.id !== "lws_leg_day" || hasLegOrCore);
}

function cooldownRules() {
  return state.warmupCooldownRules?.cooldown || [];
}

function extendedExerciseById(id) {
  return state.extendedExercises?.exercises?.find((exercise) => exercise.id === id) || null;
}

function equipmentById(id) {
  return state.equipment?.equipment?.find((item) => item.id === id) || null;
}

function equipmentNameById(id) {
  return equipmentById(id)?.name || id || "";
}

function alternativeRuleForExercise(exerciseId) {
  return state.alternativeRules?.rules?.find((rule) => rule.sourceExerciseId === exerciseId) || null;
}

function lwsRank(value) {
  const ranks = {
    suitable: 0,
    conditionallySuitable: 1,
    avoidInitially: 2,
    notRecommended: 3
  };
  return ranks[value] ?? 1;
}

function spineLoadText(value) {
  const map = {
    low: "gering",
    medium: "mittel",
    high: "hoch"
  };
  return map[value] || value;
}

function muscleRoleItem(name, intensityWeight = null) {
  return { name, intensityWeight };
}

function mappedMuscleItems(items = []) {
  return items.map((item) => muscleRoleItem(muscleName(item.muscleId), item.intensityWeight));
}

function exerciseMuscleRoles(exercise) {
  const mapping = muscleMappingForExercise(exercise.id);
  if (mapping) {
    return {
      hasMapping: true,
      primary: [muscleRoleItem(muscleName(mapping.primaryMuscle), 1)],
      secondary: mappedMuscleItems(mapping.secondaryMuscles),
      stabilizers: mappedMuscleItems(mapping.stabilizers)
    };
  }
  return {
    hasMapping: false,
    primary: exercise.primaryMuscleGroups.map((name) => muscleRoleItem(name)),
    secondary: exercise.secondaryMuscleGroups.map((name) => muscleRoleItem(name)),
    stabilizers: []
  };
}

function intensityText(value) {
  return Number.isFinite(Number(value)) ? `${Math.round(Number(value) * 100)}%` : "";
}

function muscleItemsText(items, fallback = "-") {
  if (!items.length) return fallback;
  return items.map((item) => item.name).join(", ");
}

function exerciseMuscleSearchText(exercise) {
  const roles = exerciseMuscleRoles(exercise);
  return [...roles.primary, ...roles.secondary, ...roles.stabilizers].map((item) => item.name).join(" ");
}

function exerciseListMuscleText(exercise) {
  const roles = exerciseMuscleRoles(exercise);
  const target = muscleItemsText(roles.primary, "-");
  const helper = muscleItemsText(roles.secondary, "-");
  const stabilizers = muscleItemsText(roles.stabilizers, "");
  return `Ziel: ${target} | Hilfe: ${helper}${stabilizers ? ` | Stabil: ${stabilizers}` : ""}`;
}

function renderMuscleItems(items, fallback) {
  if (!items.length) return `<span class="muted">${htmlesc(fallback)}</span>`;
  return items.map((item) => `
    <span class="muscle-chip">
      ${htmlesc(item.name)}
      ${intensityText(item.intensityWeight) ? `<small>${intensityText(item.intensityWeight)}</small>` : ""}
    </span>
  `).join("");
}

function alternativeCandidatesForExercise(exercise) {
  const rule = alternativeRuleForExercise(exercise.id);
  const profile = currentPersonalProfile();
  const avoidIds = new Set(profile.avoidExerciseIds || []);
  const preferredIds = new Set(profile.preferredExerciseIds || []);
  const byId = new Map();

  if (rule) {
    rule.alternatives.forEach((item) => {
      const candidate = exerciseById(item.exerciseId);
      if (!candidate || avoidIds.has(candidate.id)) return;
      byId.set(candidate.id, {
        exercise: candidate,
        score: (Number(item.matchScore) || 0) + (preferredIds.has(candidate.id) ? 0.2 : 0),
        note: item.note || item.reason || "",
        reason: rule.reason || "",
        source: "rule"
      });
    });
  }

  exercise.alternatives.map(exerciseById).filter(Boolean).forEach((candidate) => {
    if (avoidIds.has(candidate.id)) return;
    if (byId.has(candidate.id)) return;
    byId.set(candidate.id, {
      exercise: candidate,
      score: preferredIds.has(candidate.id) ? 0.2 : 0,
      note: "",
      reason: "",
      source: "fallback"
    });
  });

  return [...byId.values()].sort((a, b) => {
    const scoreDelta = b.score - a.score;
    if (scoreDelta) return scoreDelta;
    return lwsRank(a.exercise.lumbarDiscSuitability) - lwsRank(b.exercise.lumbarDiscSuitability);
  });
}

function exerciseKindText(exercise) {
  if (exerciseKind(exercise) === "Isolation") {
    return "Belastet vor allem den Zielmuskel. Hilfsmuskeln spielen nur eine kleine Rolle.";
  }
  return "Trainiert den Zielmuskel und nutzt Hilfsmuskeln fuer Stabilitaet und Kraftuebertragung.";
}

function muscleRoleCards(exercise) {
  const roles = exerciseMuscleRoles(exercise);
  return `
    <div class="muscle-grid">
      <article class="muscle-role">
        <span class="role-label">Zielmuskel</span>
        <div class="muscle-chip-row">${renderMuscleItems(roles.primary, "Nicht hinterlegt")}</div>
        <p class="muted">Hauptarbeit der Uebung.</p>
      </article>
      <article class="muscle-role">
        <span class="role-label">Hilfsmuskel</span>
        <div class="muscle-chip-row">${renderMuscleItems(roles.secondary, "Keine wesentlichen Hilfsmuskeln")}</div>
        <p class="muted">Unterstuetzt Bewegung oder Stabilitaet.</p>
      </article>
      <article class="muscle-role">
        <span class="role-label">Stabilisatoren</span>
        <div class="muscle-chip-row">${renderMuscleItems(roles.stabilizers, "Nicht gesondert hinterlegt")}</div>
        <p class="muted">Halten Position und Koerperspannung.</p>
      </article>
    </div>
  `;
}

function muscleMapSources(exercise) {
  const mapping = muscleMappingForExercise(exercise.id);
  if (!mapping || !state.muscleAssets) return [];
  const primary = muscleAssetFor(mapping.primaryMuscle);
  const secondary = (mapping.secondaryMuscles || []).map((item) => muscleAssetFor(item.muscleId)).filter(Boolean);
  const stabilizers = (mapping.stabilizers || []).map((item) => muscleAssetFor(item.muscleId)).filter(Boolean);
  return [
    primary ? { ...primary, role: "primary" } : null,
    ...secondary.map((item) => ({ ...item, role: "secondary" })),
    ...stabilizers.map((item) => ({ ...item, role: "stabilizer" }))
  ].filter(Boolean);
}

function renderMuscleMap(exercise) {
  const sources = muscleMapSources(exercise);
  if (!sources.length) return `<article class="card"><p class="muted">Keine Muskelkarte hinterlegt.</p></article>`;
  const views = ["front", "back"].filter((view) => sources.some((item) => item.view === view));
  return `
    <article class="card stack">
      <h3>Muskelkarte</h3>
      <div class="body-map-grid">
        ${views.map((view) => `
          <div class="body-map">
            ${state.muscleAssets?.baseMaps?.[view] ? `<img src="${htmlesc(state.muscleAssets.baseMaps[view])}" alt="${view === "front" ? "Vorderseite" : "Rueckseite"}">` : ""}
            ${sources.filter((item) => item.view === view).map((item) => `<img class="${item.role}" src="${htmlesc(item.asset)}" alt="">`).join("")}
          </div>
        `).join("")}
      </div>
      <div class="chip-row">
        <span class="muscle-chip"><small>Ziel</small> stark</span>
        <span class="muscle-chip"><small>Hilfe</small> dezent</span>
        <span class="muscle-chip"><small>Stabil</small> leicht</span>
      </div>
    </article>
  `;
}

function exerciseKnowledge(exercise) {
  const roles = exerciseMuscleRoles(exercise);
  const extended = extendedExerciseById(exercise.id);
  const primary = muscleItemsText(roles.primary, "Zielmuskel nicht hinterlegt");
  const secondary = muscleItemsText(roles.secondary, "");
  const stabilizers = muscleItemsText(roles.stabilizers, "");
  const equipment = extended?.equipmentId ? equipmentNameById(extended.equipmentId) : exercise.equipment.join(", ") || "Geraet nicht hinterlegt";
  const notes = [
    `${exerciseKind(exercise)}: ${exerciseKindText(exercise)}`,
    `Primaer: ${primary}.`,
    secondary ? `Sekundaer: ${secondary}.` : "Sekundaer: keine wesentlichen Hilfsmuskeln hinterlegt.",
    stabilizers ? `Stabilisatoren: ${stabilizers}.` : "Stabilisatoren: nicht gesondert hinterlegt.",
    `Geraet: ${equipment}.`
  ];
  if (extended?.spineLoadLevel) notes.push(`LWS-Last: ${spineLoadText(extended.spineLoadLevel)}.`);
  return notes;
}

function render() {
  document.getElementById("app").innerHTML = `
    <main class="app">
      ${renderRoute()}
      ${renderTabs()}
    </main>
  `;
  bindEvents();
}

function renderRoute() {
  if (!state.seed) return `<section class="screen"><h1 class="title">D-Coach</h1><p class="subtitle">Lade Daten...</p></section>`;
  if (state.selectedExerciseId) return renderExerciseDetail(state.selectedExerciseId);
  if (state.activeWorkout) return renderWorkout();
  if (state.selectedSessionId) return renderSessionDetail(state.selectedSessionId);
  switch (state.tab) {
    case "training": return renderTraining();
    case "coach": return renderCoach();
    case "plans": return renderPlans();
    case "exercises": return renderExercises();
    case "weight": return renderWeight();
    case "journal": return renderJournal();
    case "settings": return renderSettings();
    default: return renderDashboard();
  }
}

function renderTabs() {
  const tabs = [
    ["dashboard", "Dashboard"],
    ["training", "Training"],
    ["coach", "Coach"],
    ["plans", "Pläne"],
    ["exercises", "Übungen"],
    ["weight", "Gewicht"],
    ["journal", "Journal"],
    ["settings", "Setup"]
  ];
  return `<nav class="tabs">${tabs.map(([id, label]) => `<button class="tab ${state.tab === id && !state.activeWorkout && !state.selectedExerciseId && !state.selectedSessionId ? "active" : ""}" data-tab="${id}">${label}</button>`).join("")}</nav>`;
}

function renderDashboard() {
  const plan = activePlan();
  const latestWeight = [...storage.weights].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  const session = lastSession();
  const nextDay = plan?.days?.[0]?.name || "-";
  const latestSessions = [...storage.sessions].sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt)).slice(0, 3);
  const readiness = readinessForJournal(journalEntryForDate(todayIsoDate()) || latestJournalEntry());
  return `
    <section class="screen stack">
      <header><h1 class="title">D-Coach</h1><p class="subtitle">Heute sauber trainieren.</p></header>
      ${plan ? `<article class="card stack">
        <p class="muted">Aktiver Plan</p>
        <h2>${htmlesc(plan.planName)}</h2>
        <p class="muted">Nächstes Training: ${htmlesc(nextDay)}</p>
        <button class="primary" data-tab="training">Training starten</button>
      </article>` : `<article class="card stack">
        <h2>Kein aktiver Plan</h2>
        <p class="muted">Aktiviere oder stelle einen Plan im Tab Pläne wieder her.</p>
        <button class="secondary" data-tab="plans">Zu den Plänen</button>
      </article>`}
      <div class="grid">
        ${metric(kg(latestWeight?.weightKg), "Aktuelles Gewicht")}
        ${metric(kg(averageWeight(7)), "7-Tage-Schnitt")}
        ${metric(session?.dayName || "-", "Letztes Training")}
        ${metric(`${Math.round(weeklyVolume())} kg`, "7-Tage-Volumen")}
      </div>
      <div class="grid">
        ${metric(String(sessionsSince(7).length), "Trainings diese Woche")}
        ${metric(String(storage.sessions.length), "Gespeicherte Einheiten")}
      </div>
      <article class="card">
        <h3>Hinweis</h3>
        <p class="muted">Bewerte nicht einzelne Tageswerte. Gewicht und Training zählen als Trend.</p>
      </article>
      <article class="card stack">
        <div class="row"><h3 class="grow">Readiness</h3><span class="badge ${readiness.color}">${htmlesc(readiness.label)}</span></div>
        <p class="muted">${htmlesc(readiness.hint)}</p>
        <button class="secondary" data-tab="journal">Journal öffnen</button>
      </article>
      <article class="card stack">
        <h3>Letzte Trainings</h3>
        ${latestSessions.length ? latestSessions.map((item) => `
          <button class="list-button" data-session-id="${htmlesc(item.id)}">
            <div class="history-row">
              <div>
                <strong>${htmlesc(item.dayName)}</strong>
                <p class="muted">${dateText(item.startedAt)} · ${item.completedExercises.length} Übungen · ${sessionSetCount(item)} Sätze</p>
              </div>
              <span class="badge blue">${Math.round(sessionVolume(item))} kg</span>
            </div>
          </button>
        `).join("") : `<p class="muted">Noch kein Training gespeichert.</p>`}
      </article>
    </section>
  `;
}

function renderCoach() {
  const session = lastSession();
  const readiness = readinessForJournal(journalEntryForDate(todayIsoDate()) || latestJournalEntry());
  const weightEntries = [...storage.weights].sort((a, b) => new Date(b.date) - new Date(a.date));
  if (!session) {
    return `
      <section class="screen stack">
        <header><h1 class="title">Coach</h1><p class="subtitle">Auswertung nach dem Training.</p></header>
        <article class="card stack">
          <h2>Noch keine Trainingsdaten</h2>
          <p class="muted">Speichere dein erstes Training, dann erscheinen hier Fortschritt, Volumen und Empfehlungen.</p>
          <button class="primary" data-tab="training">Training starten</button>
        </article>
      </section>
    `;
  }
  const improvements = sessionImprovements(session);
  return `
    <section class="screen stack">
      <header><h1 class="title">Coach</h1><p class="subtitle">${htmlesc(session.dayName)} · ${dateText(session.startedAt)}</p></header>
      <div class="grid">
        ${metric(String(sessionDurationMinutes(session)), "Minuten")}
        ${metric(String(session.completedExercises.length), "Uebungen")}
        ${metric(String(sessionSetCount(session)), "Saetze")}
        ${metric(`${Math.round(sessionVolume(session))} kg`, "Volumen")}
      </div>
      <article class="card stack">
        <div class="row"><h3 class="grow">Recovery</h3><span class="badge ${readiness.color}">${htmlesc(readiness.label)}</span></div>
        <p class="muted">${htmlesc(readiness.hint)}</p>
      </article>
      <article class="card stack">
        <h3>Verbesserungen</h3>
        ${improvements.length ? improvements.map((item) => `
          <div class="history-row">
            <div>
              <strong>${htmlesc(item.exercise.exerciseNameSnapshot)}</strong>
              <p class="muted">${item.isRecord ? `Neues Bestgewicht: ${kg(item.currentBest)}` : `Volumen: +${Math.round(item.delta)} kg`}</p>
            </div>
            <span class="badge ${item.isRecord ? "green" : "blue"}">${item.isRecord ? "Rekord" : "Plus"}</span>
          </div>
        `).join("") : `<p class="muted">Keine Verbesserung gegenueber der letzten gespeicherten Ausfuehrung erkannt.</p>`}
      </article>
      <article class="card stack">
        <h3>Gewichtstrend</h3>
        ${renderWeightTrend(weightEntries)}
      </article>
      <article class="card stack">
        <h3>Letzte Uebungen</h3>
        ${session.completedExercises.sort((a, b) => a.sortOrder - b.sortOrder).map((exercise) => {
          const previous = previousExerciseBefore(exercise.exerciseId, session.id);
          const recommendation = progressionForCompletedExercise(exercise, previous, session.id);
          return `
            <div class="history-row">
              <div>
                <strong>${htmlesc(exercise.exerciseNameSnapshot)}</strong>
                <p class="muted">${htmlesc(recommendation.text)}</p>
              </div>
              <span class="badge ${recommendation.color}">${Math.round(totalVolume(exercise))} kg</span>
            </div>
          `;
        }).join("")}
      </article>
      <button class="secondary" data-session-id="${htmlesc(session.id)}">Auswertung im Detail</button>
    </section>
  `;
}

function metric(value, label) {
  return `<article class="card metric"><span class="metric-value">${htmlesc(value)}</span><span class="metric-label">${htmlesc(label)}</span></article>`;
}

function renderTraining() {
  const plan = activePlan();
  const draft = storage.activeWorkoutDraft;
  return `
    <section class="screen stack">
      <header><h1 class="title">Training</h1><p class="subtitle">${plan ? htmlesc(plan.planName) : "Kein aktiver Plan"}</p></header>
      ${draft ? `
        <article class="card stack">
          <h2>Training fortsetzen</h2>
          <p class="muted">${htmlesc(draft.dayName || "Offenes Training")} wurde lokal gesichert.</p>
          <button class="primary" data-resume-workout>Fortsetzen</button>
        </article>
      ` : ""}
      ${plan ? plan.days.map((day) => `
        <button class="list-button" data-start-day="${htmlesc(day.name)}">
          <article class="card row">
            <div class="grow">
              <h2>${htmlesc(day.name)}</h2>
              <p class="muted">${day.exercises.length} Übungen · ${day.maxDurationMinutes} Minuten</p>
              <p class="quiet">${lastDayDate(day.name) || "Noch nicht trainiert"}</p>
              ${renderWarmupHint(day)}
            </div>
            <span class="badge blue">Start</span>
          </article>
        </button>
      `).join("") : `<article class="card stack">
        <h2>Kein Training verfügbar</h2>
        <p class="muted">Aktiviere zuerst einen Plan.</p>
        <button class="secondary" data-tab="plans">Plan auswählen</button>
      </article>`}
    </section>
  `;
}

function lastDayDate(dayName) {
  const session = storage.sessions.filter((item) => item.dayName === dayName).sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt))[0];
  return session ? `Letztes Mal: ${dateText(session.startedAt)}` : null;
}

function renderWarmupHint(day) {
  const rules = warmupRulesForDay(day);
  if (!rules.length) return "";
  return `<p class="quiet">${htmlesc(rules[0].text)}</p>`;
}

function renderWarmupCard(day) {
  const rules = warmupRulesForDay(day);
  if (!rules.length) return "";
  return `
    <article class="card stack info-card">
      <h3>Warm-up</h3>
      <ul class="small-list">${rules.map((rule) => `<li>${htmlesc(rule.text)}</li>`).join("")}</ul>
    </article>
  `;
}

function renderCooldownCard() {
  const rules = cooldownRules();
  if (!rules.length) return "";
  return `
    <article class="card stack info-card">
      <h3>Cooldown</h3>
      <ul class="small-list">${rules.map((rule) => `<li>${htmlesc(rule.text)}</li>`).join("")}</ul>
    </article>
  `;
}

function startDay(dayName) {
  const plan = activePlan();
  const day = plan.days.find((item) => item.name === dayName);
  state.showAlternatives = false;
  state.restTimer.remaining = 0;
  state.restTimer.running = false;
  state.activeWorkout = {
    planName: plan.planName,
    dayName: day.name,
    startedAt: new Date().toISOString(),
    index: 0,
    entries: day.exercises.sort((a, b) => a.sortOrder - b.sortOrder).map((planned) => {
      const last = lastCompletedExercise(planned.exerciseId);
      return {
        exerciseId: planned.exerciseId,
        reps: planned.reps,
        restSeconds: planned.restSeconds,
        priority: planned.priority,
        sortOrder: planned.sortOrder,
        sets: Array.from({ length: Math.max(planned.sets, 1) }, (_, index) => {
          const previous = last?.exercise?.sets?.find((set) => set.setNumber === index + 1);
          return {
            setNumber: index + 1,
            weightText: previous?.actualWeightKg ? String(previous.actualWeightKg).replace(".", ",") : "",
            repsText: "",
            rirText: "",
            completed: false
          };
        })
      };
    })
  };
  persistWorkoutDraft();
  render();
}

function renderWorkout() {
  const workout = state.activeWorkout;
  const entry = workout.entries[workout.index];
  const exercise = exerciseById(entry.exerciseId);
  const last = lastCompletedExercise(entry.exerciseId);
  const progress = Math.round(((workout.index + 1) / workout.entries.length) * 100);
  const alternatives = alternativeCandidatesForExercise(exercise);
  const machineSetting = latestMachineSetting(exercise.id);
  return `
    <section class="screen stack">
      <header>
        <h1 class="title">${htmlesc(workout.dayName)}</h1>
        <p class="subtitle">Übung ${workout.index + 1} von ${workout.entries.length}</p>
      </header>
      <div class="progress"><span style="width:${progress}%"></span></div>
      <article class="card stack">
        <h2>${htmlesc(exercise.displayName)}</h2>
        <p class="muted">${htmlesc([...exercise.primaryMuscleGroups, ...exercise.secondaryMuscleGroups].slice(0, 3).join(" · "))}</p>
        <div class="row">${lwsBadge(exercise.lumbarDiscSuitability)} <span class="badge blue">${htmlesc(entry.reps)} Wdh.</span> <span class="badge">${entry.restSeconds} s Pause</span></div>
        ${machineSetting ? `<p class="quiet">Setup: Sitz ${htmlesc(machineSetting.seatPosition || "-")} · Griff ${htmlesc(machineSetting.handlePosition || "-")} · Ruecken ${htmlesc(machineSetting.backrestPosition || "-")}</p>` : ""}
        ${exerciseIsCritical(exercise) ? `<p class="warning compact-warning">${lwsWarning(exercise)}</p>` : ""}
        <button class="secondary" data-workout-exercise-detail="${htmlesc(exercise.id)}">Details ansehen</button>
      </article>
      <article class="card stack">
        <h3>Letzte Leistung</h3>
        ${last ? `
          <p class="last-performance">${last.exercise.sets.map((set) => `${kg(set.actualWeightKg)} x ${set.actualReps || "-"}`).join(" / ")}</p>
        ` : `<p class="muted">Noch keine vorherige Leistung vorhanden. Starte moderat.</p>`}
      </article>
      <article class="card stack">
        <div class="row"><h3 class="grow">Sätze</h3><span class="quiet">kg · Wdh. · RIR</span></div>
        ${entry.sets.map((set, index) => renderSetRow(set, index)).join("")}
      </article>
      <p class="quiet">Dieses Training wird automatisch auf diesem Gerät gesichert.</p>
      ${state.restTimer.remaining > 0 || state.restTimer.running ? renderRestTimer() : ""}
      ${state.showAlternatives ? renderAlternativePicker(alternatives) : ""}
      <div class="actions">
        <button class="secondary" data-toggle-alternatives>${state.showAlternatives ? "Alternativen ausblenden" : "Alternative anzeigen"}</button>
        <button class="primary" data-next-exercise>${workout.index < workout.entries.length - 1 ? "Nächste Übung" : "Training speichern"}</button>
        <button class="secondary" data-cancel-workout>Training abbrechen</button>
      </div>
    </section>
  `;
}

function renderRestTimer() {
  return `
    <article class="card timer-card">
      <div>
        <p class="muted">Pause</p>
        <strong>${restTimeText(state.restTimer.remaining)}</strong>
      </div>
      <div class="timer-actions">
        <button class="secondary" data-pause-timer>${state.restTimer.running ? "Stop" : "Start"}</button>
        <button class="secondary" data-reset-timer>Reset</button>
      </div>
    </article>
  `;
}

function renderAlternativePicker(alternatives) {
  return `
    <article class="card stack">
      <h3>Alternativen</h3>
      ${alternatives.length ? alternatives.map((item) => `
        <button class="list-button" data-select-alternative="${htmlesc(item.exercise.id)}">
          <div class="history-row">
            <div>
              <strong>${htmlesc(item.exercise.displayName)}</strong>
              <p class="muted">${htmlesc(item.note || exerciseListMuscleText(item.exercise))}</p>
              ${item.reason ? `<p class="quiet">${htmlesc(item.reason)}</p>` : ""}
            </div>
            <div class="badge-stack">
              ${lwsBadge(item.exercise.lumbarDiscSuitability)}
              ${item.score ? `<span class="badge blue">${Math.round(item.score * 100)}%</span>` : ""}
            </div>
          </div>
        </button>
      `).join("") : `<p class="muted">Keine Alternative hinterlegt.</p>`}
    </article>
  `;
}

function renderSetRow(set, index) {
  return `
    <div class="set-row ${set.completed ? "done" : ""}">
      <strong>${set.setNumber}</strong>
      <input inputmode="decimal" placeholder="kg" value="${htmlesc(set.weightText)}" data-set="${index}" data-field="weightText">
      <input inputmode="numeric" placeholder="Wdh." value="${htmlesc(set.repsText)}" data-set="${index}" data-field="repsText">
      <input inputmode="numeric" placeholder="RIR" value="${htmlesc(set.rirText)}" data-set="${index}" data-field="rirText">
      <button class="check ${set.completed ? "done" : ""}" data-check-set="${index}">${set.completed ? "✓" : ""}</button>
    </div>
  `;
}

function exerciseIsCritical(exercise) {
  return ["conditionallySuitable", "notRecommended", "avoidInitially"].includes(exercise.lumbarDiscSuitability);
}

function lwsWarning(exercise) {
  let text = "Diese Übung kann die Lendenwirbelsäule stärker belasten. Wenn du Schmerzen hast, wähle eine Alternative.";
  if (exercise.lumbarDiscSuitability === "avoidInitially") text += " Für den Wiedereinstieg zunächst besser vermeiden.";
  return htmlesc(text);
}

function selectAlternative(exerciseId) {
  const workout = state.activeWorkout;
  const entry = workout.entries[workout.index];
  const selected = exerciseById(exerciseId);
  if (!selected) return;
  entry.exerciseId = selected.id;
  const last = lastCompletedExercise(selected.id);
  entry.sets.forEach((set) => {
    const previous = last?.exercise?.sets?.find((item) => item.setNumber === set.setNumber);
    set.weightText = previous?.actualWeightKg ? String(previous.actualWeightKg).replace(".", ",") : "";
    set.repsText = "";
    set.rirText = "";
    set.completed = false;
  });
  state.showAlternatives = false;
  persistWorkoutDraft();
  render();
}

function finishOrNext() {
  const workout = state.activeWorkout;
  if (workout.index < workout.entries.length - 1) {
    workout.index += 1;
    state.showAlternatives = false;
    state.restTimer.remaining = 0;
    state.restTimer.running = false;
    persistWorkoutDraft();
    render();
    return;
  }
  const session = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    planId: activePlan()?.id || workout.planName,
    planName: workout.planName,
    planNameSnapshot: workout.planName,
    dayName: workout.dayName,
    dayNameSnapshot: workout.dayName,
    startedAt: workout.startedAt,
    endedAt: new Date().toISOString(),
    completedAt: new Date().toISOString(),
    readinessSnapshot: journalEntryForDate(todayIsoDate()) || null,
    completedExercises: workout.entries.map((entry) => {
      const exercise = exerciseById(entry.exerciseId);
      const completedSets = entry.sets.filter((set) => set.completed).length;
      return {
        exerciseId: entry.exerciseId,
        exerciseNameSnapshot: exercise?.displayName || entry.exerciseId,
        plannedSets: entry.sets.length,
        completedSets,
        sortOrder: entry.sortOrder,
        sets: entry.sets.map((set) => ({
          setNumber: set.setNumber,
          actualWeightKg: parseNumber(set.weightText),
          plannedReps: entry.reps,
          actualReps: parseInteger(set.repsText),
          rir: parseInteger(set.rirText),
          completed: set.completed
        }))
      };
    })
  };
  storage.sessions = [...storage.sessions, session];
  clearWorkoutDraft();
  state.activeWorkout = null;
  state.showAlternatives = false;
  state.restTimer.remaining = 0;
  state.restTimer.running = false;
  state.selectedSessionId = null;
  state.tab = "coach";
  render();
}

function renderSessionDetail(id) {
  const session = sessionById(id);
  if (!session) {
    return `
      <section class="screen stack">
        <button class="secondary" data-back-dashboard>Zurück</button>
        <article class="card"><p class="muted">Training nicht gefunden.</p></article>
      </section>
    `;
  }
  const improvements = sessionImprovements(session);
  return `
    <section class="screen stack">
      <button class="secondary" data-back-dashboard>Zurück</button>
      <header>
        <h1 class="title">Auswertung</h1>
        <p class="subtitle">${htmlesc(session.dayName)} · ${dateText(session.startedAt)}</p>
      </header>
      <div class="grid">
        ${metric(String(sessionDurationMinutes(session)), "Minuten")}
        ${metric(String(session.completedExercises.length), "Übungen")}
        ${metric(String(sessionSetCount(session)), "Sätze")}
        ${metric(`${Math.round(sessionVolume(session))} kg`, "Volumen")}
      </div>
      <article class="card stack">
        <h3>Verbesserungen</h3>
        ${improvements.length ? improvements.map((item) => `
          <div class="history-row">
            <div>
              <strong>${htmlesc(item.exercise.exerciseNameSnapshot)}</strong>
              <p class="muted">${item.isRecord ? `Neues Bestgewicht: ${kg(item.currentBest)}` : `Volumen: +${Math.round(item.delta)} kg`}</p>
            </div>
            <span class="badge ${item.isRecord ? "green" : "blue"}">${item.isRecord ? "Rekord" : "Plus"}</span>
          </div>
        `).join("") : `<p class="muted">Keine Verbesserung gegenüber der letzten gespeicherten Ausführung erkannt.</p>`}
      </article>
      ${session.completedExercises.sort((a, b) => a.sortOrder - b.sortOrder).map((exercise) => `
        <article class="card stack">
          <h3>${htmlesc(exercise.exerciseNameSnapshot)}</h3>
          <ul class="small-list">
            ${exercise.sets.map((set) => `<li>Satz ${set.setNumber}: ${kg(set.actualWeightKg)} x ${set.actualReps || "-"}${set.rir !== null && set.rir !== undefined ? ` · RIR ${set.rir}` : ""}</li>`).join("")}
          </ul>
          <p class="green">Volumen: ${Math.round(totalVolume(exercise))} kg</p>
          ${previousExerciseBefore(exercise.exerciseId, session.id) ? `<p class="muted">Vorher: ${Math.round(totalVolume(previousExerciseBefore(exercise.exerciseId, session.id).exercise))} kg</p>` : `<p class="muted">Erste gespeicherte Ausführung.</p>`}
        </article>
      `).join("")}
      <button class="danger" data-delete-session="${htmlesc(session.id)}">Training löschen</button>
    </section>
  `;
}

function renderPlans() {
  const plans = availablePlans();
  const deletedCount = storage.deletedPlanNames.length;
  const active = activePlan();
  const payload = planQrPayload(active);
  const qrLimit = state.qrSchema?.maxRecommendedCharacters || 2500;
  return `
    <section class="screen stack">
      <header><h1 class="title">Pläne</h1><p class="subtitle">Aktiver Plan und Bibliothek.</p></header>
      <article class="card stack">
        <h3>Plan teilen / importieren</h3>
        <p class="muted">${payload.length > qrLimit ? appText("qr.tooLarge", "Dieser Plan ist zu gross fuer QR. Bitte JSON-Export verwenden.") : "Kompakter Plan-Code fuer QR/Text-Import."}</p>
        <textarea class="input area mono" readonly data-plan-payload>${htmlesc(payload)}</textarea>
        <div class="button-row">
          <button class="secondary" data-copy-plan-payload>Code kopieren</button>
          <button class="secondary" data-download-plan-json>JSON speichern</button>
        </div>
        <textarea class="input area mono" placeholder="D-Coach Plan-Code einfuegen" data-plan-import>${htmlesc(state.planImportText)}</textarea>
        <button class="primary" data-import-plan-code>Plan importieren</button>
      </article>
      <article class="card stack">
        <h3>Plan-Generator</h3>
        <p class="muted">Erstellt einen Vorschlag aus vorhandenen Uebungen. Bitte danach pruefen.</p>
        <button class="secondary" data-generate-plan>${htmlesc(appText("plan.generated", "Planvorschlag erstellen"))}</button>
      </article>
      ${plans.length ? plans.map((plan) => `
        <article class="card stack">
          <h2>${htmlesc(plan.planName)}</h2>
          <p class="muted">${htmlesc(plan.description)}</p>
          <p>${plan.days.length} Tage · ${Math.max(...plan.days.map((day) => day.maxDurationMinutes))} Minuten</p>
          <span class="badge ${planStatus(plan) === "Aktiv" ? "green" : isPlanArchived(plan.planName) ? "amber" : ""}">${planStatus(plan)}</span>
          <div class="button-row">
            ${!isPlanArchived(plan.planName) ? `<button class="secondary" data-activate-plan="${htmlesc(plan.planName)}">Aktivieren</button>` : ""}
            ${isPlanArchived(plan.planName)
              ? `<button class="secondary" data-unarchive-plan="${htmlesc(plan.planName)}">Wiederherstellen</button>`
              : `<button class="secondary" data-archive-plan="${htmlesc(plan.planName)}">Archivieren</button>`}
          </div>
          <button class="secondary" data-duplicate-plan="${htmlesc(plan.planName)}">Plan duplizieren</button>
          <button class="danger" data-delete-plan="${htmlesc(plan.planName)}">Plan löschen</button>
        </article>
      `).join("") : `<article class="card stack">
        <h2>Keine Pläne</h2>
        <p class="muted">Alle Pläne wurden gelöscht. Trainingshistorie bleibt erhalten.</p>
      </article>`}
      ${deletedCount ? `<article class="card stack">
        <h3>Gelöschte Pläne</h3>
        <p class="muted">${deletedCount} Plan/Pläne ausgeblendet.</p>
        <button class="secondary" data-restore-plans>Gelöschte Pläne wiederherstellen</button>
      </article>` : ""}
    </section>
  `;
}

function renderExercises() {
  const needle = state.exerciseSearch.trim().toLowerCase();
  const filters = [
    ["all", "Alle"],
    ["Brust", "Brust"],
    ["Rücken", "Rücken"],
    ["Beine", "Beine"],
    ["Schulter", "Schulter"],
    ["Core", "Core"],
    ["lws", "LWS-freundlich"]
  ];
  const exercises = allExercises().filter((exercise) => !exercise.isArchived).filter((exercise) => {
    const haystack = `${exercise.displayName} ${(exercise.aliases || []).join(" ")} ${exercise.primaryMuscleGroups.join(" ")} ${exercise.secondaryMuscleGroups.join(" ")} ${exerciseMuscleSearchText(exercise)} ${(exercise.tags || []).join(" ")}`.toLowerCase();
    const matchesSearch = !needle || haystack.includes(needle);
    const matchesFilter = state.exerciseFilter === "all"
      || (state.exerciseFilter === "lws" && exercise.lumbarDiscSuitability === "suitable")
      || haystack.includes(state.exerciseFilter.toLowerCase());
    return matchesSearch && matchesFilter;
  }).sort((a, b) => a.displayName.localeCompare(b.displayName, "de"));
  return `
    <section class="screen stack">
      <header><h1 class="title">Übungen</h1><p class="subtitle">${exercises.length} Einträge</p></header>
      <div class="search stack">
        <input class="input" placeholder="Übung suchen" value="${htmlesc(state.exerciseSearch)}" data-search-exercise>
        <div class="chip-row">
          ${filters.map(([id, label]) => `<button class="chip ${state.exerciseFilter === id ? "active" : ""}" data-exercise-filter="${htmlesc(id)}">${htmlesc(label)}</button>`).join("")}
        </div>
      </div>
      <article class="card stack">
        <h3>Eigene Uebung</h3>
        <input class="input" placeholder="Name" data-custom-exercise-name>
        <div class="mini-grid">
          <input class="input" placeholder="Equipment" data-custom-exercise-equipment>
          <input class="input" placeholder="Zielmuskel" data-custom-exercise-primary>
          <input class="input" placeholder="Wdh. z.B. 8-12" data-custom-exercise-reps>
        </div>
        <select class="input" data-custom-exercise-lws>
          <option value="suitable">LWS geeignet</option>
          <option value="conditionallySuitable">LWS vorsichtig</option>
          <option value="avoidInitially">Anfangs vermeiden</option>
        </select>
        <textarea class="input area" placeholder="Techniknotiz" data-custom-exercise-note></textarea>
        <button class="secondary" data-save-custom-exercise>Eigene Uebung speichern</button>
      </article>
      ${exercises.map((exercise) => `
        <button class="list-button" data-exercise-id="${htmlesc(exercise.id)}">
          <article class="card stack">
            <h3>${htmlesc(exercise.displayName)}</h3>
            <p class="quiet">${htmlesc(exerciseListMuscleText(exercise))}</p>
            <p class="muted">${htmlesc(exercise.primaryMuscleGroups.join(", "))} · ${htmlesc(exercise.equipment.join(", "))}</p>
            <div class="row">${lwsBadge(exercise.lumbarDiscSuitability)} ${bestWeightForExercise(exercise.id) ? `<span class="badge blue">Best: ${kg(bestWeightForExercise(exercise.id))}</span>` : ""}</div>
          </article>
        </button>
      `).join("")}
    </section>
  `;
}

function renderExerciseDetail(id) {
  const exercise = exerciseById(id);
  const last = lastCompletedExercise(id);
  const history = exerciseHistory(id);
  const alternatives = alternativeCandidatesForExercise(exercise);
  const machineSetting = latestMachineSetting(id) || {};
  return `
    <section class="screen stack">
      <button class="secondary" data-back-exercises>Zurück</button>
      <header><h1 class="title">${htmlesc(exercise.displayName)}</h1><p class="subtitle">${htmlesc(exercise.movementPattern)}</p></header>
      <article class="card stack">
        <div class="row">
          <span class="badge blue">${exerciseKind(exercise)}</span>
          ${lwsBadge(exercise.lumbarDiscSuitability)}
        </div>
        ${muscleRoleCards(exercise)}
        <p class="muted">${htmlesc(exerciseKindText(exercise))}</p>
        ${exercise.isCustom ? `<button class="danger" data-delete-custom-exercise="${htmlesc(exercise.id)}">Eigene Uebung entfernen</button>` : ""}
      </article>
      ${renderMuscleMap(exercise)}
      <article class="card stack">
        <p>${htmlesc([...exercise.primaryMuscleGroups, ...exercise.secondaryMuscleGroups].join(" · "))}</p>
        <p class="muted">${htmlesc(exercise.equipment.join(" · "))}</p>
        ${lwsBadge(exercise.lumbarDiscSuitability)}
      </article>
      <article class="card stack">
        <h3>Geräteeinstellung</h3>
        <input class="input" placeholder="Maschinenname / Studio" value="${htmlesc(machineSetting.machineName || "")}" data-machine-field="machineName" data-machine-exercise="${htmlesc(id)}">
        <div class="mini-grid">
          <input class="input" placeholder="Sitz" value="${htmlesc(machineSetting.seatPosition || "")}" data-machine-field="seatPosition" data-machine-exercise="${htmlesc(id)}">
          <input class="input" placeholder="Griff" value="${htmlesc(machineSetting.handlePosition || "")}" data-machine-field="handlePosition" data-machine-exercise="${htmlesc(id)}">
          <input class="input" placeholder="Ruecken" value="${htmlesc(machineSetting.backrestPosition || "")}" data-machine-field="backrestPosition" data-machine-exercise="${htmlesc(id)}">
        </div>
        <textarea class="input area" placeholder="Notiz" data-machine-field="note" data-machine-exercise="${htmlesc(id)}">${htmlesc(machineSetting.note || "")}</textarea>
        <button class="secondary" data-save-machine-setting="${htmlesc(id)}">Einstellung speichern</button>
      </article>
      ${exerciseIsCritical(exercise) ? `<article class="card warning">${lwsWarning(exercise)}</article>` : ""}
      <div class="grid">
        ${metric(kg(bestWeightForExercise(id)), "Bestgewicht")}
        ${metric(bestVolumeForExercise(id) ? `${Math.round(bestVolumeForExercise(id))} kg` : "-", "Bestes Volumen")}
      </div>
      <article class="card stack">
        <h3>Wissenswertes</h3>
        <ul class="small-list">${exerciseKnowledge(exercise).map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>
      </article>
      <article class="card stack"><h3>Ausführung</h3><p class="muted">${htmlesc(exercise.techniqueNotes || "Keine Technikhinweise hinterlegt.")}</p></article>
      <article class="card stack"><h3>Häufige Fehler</h3>${exercise.commonMistakes?.length ? `<ul class="small-list">${exercise.commonMistakes.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>` : `<p class="muted">Keine Fehlerhinweise hinterlegt.</p>`}</article>
      <article class="card stack"><h3>Letzte Leistung</h3>${last ? `<p class="muted">Letztes Mal am ${dateText(last.session.endedAt || last.session.startedAt)}</p><ul class="small-list">${last.exercise.sets.map((set) => `<li>Satz ${set.setNumber}: ${kg(set.actualWeightKg)} x ${set.actualReps || "-"}</li>`).join("")}</ul>` : `<p class="muted">Noch keine vorherige Leistung vorhanden.</p>`}</article>
      <article class="card stack">
        <h3>Verlauf</h3>
        ${history.length ? history.slice(0, 3).map((item) => `
          <div class="history-row">
            <div>
              <strong>${dateText(item.session.startedAt)}</strong>
              <p class="muted">${item.exercise.sets.map((set) => `${kg(set.actualWeightKg)} x ${set.actualReps || "-"}`).join(" · ")}</p>
            </div>
            <span class="badge blue">${Math.round(totalVolume(item.exercise))} kg</span>
          </div>
        `).join("") : `<p class="muted">Noch kein Verlauf gespeichert.</p>`}
      </article>
      <article class="card stack">
        <h3>Alternativen</h3>
        ${alternatives.length ? alternatives.map((item) => `
          <div class="history-row">
            <div>
              <strong>${htmlesc(item.exercise.displayName)}</strong>
              <p class="muted">${htmlesc(item.note || exerciseListMuscleText(item.exercise))}</p>
              ${item.reason ? `<p class="quiet">${htmlesc(item.reason)}</p>` : ""}
            </div>
            <div class="badge-stack">
              ${lwsBadge(item.exercise.lumbarDiscSuitability)}
              ${item.score ? `<span class="badge blue">${Math.round(item.score * 100)}%</span>` : ""}
            </div>
          </div>
        `).join("") : `<p class="muted">Keine Alternativen hinterlegt.</p>`}
      </article>
    </section>
  `;
}

function renderWeightTrend(entries) {
  const points = [...entries].sort((a, b) => new Date(a.date) - new Date(b.date)).slice(-14);
  if (points.length < 2) return `<p class="muted">Mindestens zwei Eintraege fuer Trendanzeige noetig.</p>`;
  const values = points.map((entry) => Number(entry.weightKg)).filter(Number.isFinite);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, 1);
  return `
    <div class="trend-bars">
      ${points.map((entry) => {
        const height = 28 + ((Number(entry.weightKg) - min) / range) * 72;
        return `<div class="trend-item"><span style="height:${height}%"></span><small>${dateText(entry.date).slice(0, 5)}</small></div>`;
      }).join("")}
    </div>
  `;
}

function renderWeight() {
  const entries = [...storage.weights].sort((a, b) => new Date(b.date) - new Date(a.date));
  return `
    <section class="screen stack">
      <header><h1 class="title">Gewicht</h1><p class="subtitle">Trend statt Tagesrauschen.</p></header>
      <div class="grid">
        ${metric(kg(entries[0]?.weightKg), "Aktuell")}
        ${metric(kg(averageWeight(7)), "7-Tage-Schnitt")}
        ${metric(kg(averageWeight(30)), "30-Tage-Schnitt")}
        ${metric(String(entries.length), "Einträge")}
      </div>
      <article class="card stack">
        <h3>Trend</h3>
        ${renderWeightTrend(entries)}
      </article>
      <article class="card stack">
        <h3>Heutiges Gewicht</h3>
        <input class="input big" inputmode="decimal" placeholder="kg" data-weight-input>
        <button class="primary" data-save-weight>Gewicht speichern</button>
      </article>
      ${entries.length ? entries.map((entry) => `
        <article class="card row">
          <div class="grow"><h3>${kg(entry.weightKg)}</h3><p class="muted">${dateText(entry.date)}</p></div>
          <div class="compact-actions">
            <button class="secondary" data-edit-weight="${htmlesc(entry.id)}">Bearbeiten</button>
            <button class="danger" data-delete-weight="${htmlesc(entry.id)}">Löschen</button>
          </div>
        </article>
      `).join("") : `<article class="card"><p class="muted">Noch kein Gewicht eingetragen.</p></article>`}
    </section>
  `;
}

function renderRatingInput(id, label, value = 3) {
  return `
    <label class="range-field">
      <span>${label}</span>
      <input type="range" min="1" max="5" value="${htmlesc(value)}" data-journal-field="${id}">
    </label>
  `;
}

function renderJournal() {
  const today = todayIsoDate();
  const entry = journalEntryForDate(today) || {};
  const latest = latestJournalEntry();
  const readiness = readinessForJournal(journalEntryForDate(today) || latest);
  const history = [...storage.journalEntries].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 7);
  return `
    <section class="screen stack">
      <header><h1 class="title">Journal</h1><p class="subtitle">Tagesform und Regeneration.</p></header>
      <article class="card stack">
        <div class="row">
          <h3 class="grow">Readiness</h3>
          <span class="badge ${readiness.color}">${htmlesc(readiness.label)}</span>
        </div>
        <p class="muted">${htmlesc(readiness.hint)}</p>
      </article>
      <article class="card stack">
        <h3>Heute</h3>
        ${renderRatingInput("sleepQuality", "Schlaf", entry.sleepQuality || 3)}
        ${renderRatingInput("energy", "Energie", entry.energy || 3)}
        ${renderRatingInput("stress", "Stress", entry.stress || 3)}
        ${renderRatingInput("soreness", "Muskelkater", entry.soreness || 3)}
        ${renderRatingInput("mood", "Stimmung", entry.mood || 3)}
        <textarea class="input area" placeholder="Schmerznotiz" data-journal-text="painNote">${htmlesc(entry.painNote || "")}</textarea>
        <textarea class="input area" placeholder="Ernaehrung / Notiz" data-journal-text="nutritionNote">${htmlesc(entry.nutritionNote || "")}</textarea>
        <button class="primary" data-save-journal>Journal speichern</button>
      </article>
      <article class="card stack">
        <h3>Letzte Eintraege</h3>
        ${history.length ? history.map((item) => {
          const itemReadiness = readinessForJournal(item);
          return `<div class="history-row"><div><strong>${dateText(item.date)}</strong><p class="muted">${htmlesc(itemReadiness.hint)}</p></div><span class="badge ${itemReadiness.color}">${htmlesc(itemReadiness.label)}</span></div>`;
        }).join("") : `<p class="muted">Noch kein Journal gespeichert.</p>`}
      </article>
    </section>
  `;
}

function renderSettings() {
  const lastBackupAt = storage.lastBackupAt;
  const backupAge = daysSince(lastBackupAt);
  const needsBackup = !lastBackupAt || backupAge >= 7;
  const standalone = isStandaloneApp();
  const manifest = storageManifest();
  const migrationLog = storage.migrationLog;
  const lastMigration = migrationLog[migrationLog.length - 1];
  return `
    <section class="screen stack">
      <header><h1 class="title">Einstellungen</h1><p class="subtitle">Lokale Offline-Daten.</p></header>
      <article class="card stack">
        <div class="row">
          <h3 class="grow">PWA-Status</h3>
          <span class="badge ${state.isOnline ? "green" : "amber"}">${state.isOnline ? "Online" : "Offline"}</span>
        </div>
        <p class="muted">${standalone ? "Als App gestartet." : "Im Browser geoeffnet. Auf dem iPhone ueber Teilen > Zum Home-Bildschirm hinzufuegen installieren."}</p>
        ${state.deferredInstallPrompt && !standalone ? `<button class="primary" data-install-pwa>App installieren</button>` : ""}
      </article>
      <article class="card stack">
        <h3>Aktiver Plan</h3>
        <p class="muted">${htmlesc(activePlan()?.planName || "Kein aktiver Plan")}</p>
        <button class="secondary" data-reset-plan-library>Planbibliothek wiederherstellen</button>
      </article>
      <article class="card stack">
        <div class="row">
          <h3 class="grow">Backup</h3>
          <span class="badge ${needsBackup ? "amber" : "green"}">${needsBackup ? "Faellig" : "Ok"}</span>
        </div>
        <p class="muted">Exportiere regelmäßig deine Trainingsdaten. GitHub speichert deine Fortschritte nicht.</p>
        <p class="quiet">Letztes Backup: ${dateTimeText(lastBackupAt)}</p>
        <button class="primary" data-export-backup>Backup exportieren</button>
        <label class="secondary file-label">
          Backup importieren
          <input type="file" accept="application/json,.json" data-import-backup>
        </label>
      </article>
      <article class="card stack">
        <div class="row">
          <h3 class="grow">Speicherstatus</h3>
          <span class="badge ${manifest.version === manifest.targetVersion ? "green" : "amber"}">v${htmlesc(manifest.version || "unbekannt")}</span>
        </div>
        <div class="storage-table">
          ${manifest.entries.slice(0, 9).map((item) => `
            <div><span>${htmlesc(item.label)}</span><strong>${htmlesc(item.valueLabel)}</strong></div>
          `).join("")}
        </div>
        <p class="quiet">IndexedDB: ${indexedDbStatusText()} | Zielversion: ${htmlesc(manifest.targetVersion)} | LocalStorage: ${manifest.totalBytes} Zeichen</p>
        <p class="quiet">Letzte Migration: ${lastMigration ? `${htmlesc(lastMigration.action)} (${dateTimeText(lastMigration.at)})` : "Keine"}</p>
        <button class="secondary" data-export-backup>Backup vor Migration exportieren</button>
        <button class="secondary" data-prepare-indexeddb>IndexedDB vorbereiten</button>
      </article>
      <article class="card stack">
        <h3>Zurücksetzen</h3>
        <p class="muted">Löscht nur die lokalen Trainings- und Gewichtsdaten auf diesem Gerät.</p>
        <button class="danger" data-reset-app>App-Daten zurücksetzen</button>
      </article>
      <article class="card stack">
        <div class="row">
          <h3 class="grow">Persoenliche Schicht</h3>
          <span class="badge ${storage.personalProfile ? "green" : "amber"}">${storage.personalProfile ? "Aktiv" : "Leer"}</span>
        </div>
        <p class="muted">${storage.personalProfile ? htmlesc(currentPersonalProfile().displayName || "Profil aktiv") : "Optionales Profil importieren. Bestehende Trainingsdaten bleiben erhalten."}</p>
        <button class="secondary" data-import-seed-profile>Dominique-Profil importieren</button>
      </article>
      <article class="card stack">
        <div class="row">
          <h3 class="grow">Debug</h3>
          <span class="badge blue">${APP_VERSION}</span>
        </div>
        <label class="range-field"><span>Debug-Modus</span><input type="checkbox" ${currentUserSettings().debugMode ? "checked" : ""} data-toggle-debug></label>
        ${currentUserSettings().debugMode ? renderDebugPanel(manifest) : ""}
      </article>
    </section>
  `;
}

function renderDebugPanel(manifest) {
  const databases = [
    state.extendedExercises,
    state.exerciseMuscleMap,
    state.muscleAssets,
    state.planGeneratorRules,
    state.qrSchema,
    state.userSettingsSchema,
    state.debugTestData,
    state.releaseAcceptanceCriteria
  ].filter(Boolean);
  return `
    <div class="stack">
      <div class="storage-table">
        <div><span>Storage</span><strong>${manifest.totalBytes}</strong></div>
        <div><span>Uebungen</span><strong>${allExercises().length}</strong></div>
        <div><span>Eigene Uebungen</span><strong>${storage.customExercises.length}</strong></div>
        <div><span>Datenbanken</span><strong>${databases.length}</strong></div>
        <div><span>Fehler</span><strong>${storage.lastErrors.length}</strong></div>
      </div>
      <button class="secondary" data-load-test-data>Testdaten laden</button>
      <button class="secondary" data-clear-cache>Cache leeren</button>
      <ul class="small-list">${storage.lastErrors.slice(-5).map((item) => `<li>${dateTimeText(item.at)}: ${htmlesc(item.message)}</li>`).join("") || "<li>Keine Fehler protokolliert.</li>"}</ul>
    </div>
  `;
}

function createBackup() {
  return {
    app: "D-Coach",
    schemaVersion: 1,
    appVersion: APP_VERSION,
    backupVersion: "2.2.0",
    storageVersion: storage.storageVersion,
    exportedAt: new Date().toISOString(),
    exportDate: new Date().toISOString(),
    storageManifest: storageManifest(),
    migrationLog: storage.migrationLog,
    indexedDbReady: storage.indexedDbReady,
    activePlanName: storage.activePlanName,
    sessions: storage.sessions,
    weights: storage.weights,
    journalEntries: storage.journalEntries,
    machineSettings: storage.machineSettings,
    customPlans: storage.customPlans,
    customExercises: storage.customExercises,
    personalProfile: storage.personalProfile,
    userSettings: currentUserSettings(),
    lastErrors: storage.lastErrors,
    archivedPlanNames: storage.archivedPlanNames,
    deletedPlanNames: storage.deletedPlanNames,
    activeWorkoutDraft: storage.activeWorkoutDraft
  };
}

function exportBackup() {
  storage.lastBackupAt = new Date().toISOString();
  const backup = createBackup();
  const json = JSON.stringify(backup, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const date = new Date().toISOString().slice(0, 10);
  const link = document.createElement("a");
  link.href = url;
  link.download = `d-coach-backup-${date}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  render();
}

async function installPwa() {
  if (!state.deferredInstallPrompt) return;
  const promptEvent = state.deferredInstallPrompt;
  state.deferredInstallPrompt = null;
  promptEvent.prompt();
  await promptEvent.userChoice.catch(() => null);
  render();
}

function validateBackup(backup) {
  if (!backup || typeof backup !== "object") return "Backup-Datei ist ungültig.";
  if (backup.app !== "D-Coach") return "Diese Datei ist kein D-Coach-Backup.";
  if (backup.schemaVersion !== 1) return "Diese Backup-Version wird nicht unterstützt.";
  if (!Array.isArray(backup.sessions)) return "Backup enthält keine gültigen Trainingsdaten.";
  if (!Array.isArray(backup.weights)) return "Backup enthält keine gültigen Gewichtsdaten.";
  return null;
}

function importBackupFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const backup = JSON.parse(String(reader.result || ""));
      const error = validateBackup(backup);
      if (error) {
        alert(error);
        return;
      }
      const message = [
        "Backup importieren?",
        "",
        `Trainings: ${backup.sessions.length}`,
        `Gewichtseinträge: ${backup.weights.length}`,
        `Journal: ${Array.isArray(backup.journalEntries) ? backup.journalEntries.length : 0}`,
        `Geraeteeinstellungen: ${Array.isArray(backup.machineSettings) ? backup.machineSettings.length : 0}`,
        "",
        "Die lokalen Daten werden zusammengefuehrt. Duplikate werden vermieden."
      ].join("\n");
      if (!confirm(message)) return;
      storage.sessions = mergeById(storage.sessions, backup.sessions);
      storage.weights = mergeById(storage.weights, backup.weights);
      storage.journalEntries = mergeById(storage.journalEntries, Array.isArray(backup.journalEntries) ? backup.journalEntries : []);
      storage.machineSettings = mergeById(storage.machineSettings, Array.isArray(backup.machineSettings) ? backup.machineSettings : []);
      storage.customPlans = mergeById(storage.customPlans, Array.isArray(backup.customPlans) ? backup.customPlans : []);
      storage.customExercises = mergeById(storage.customExercises, Array.isArray(backup.customExercises) ? backup.customExercises : []);
      if (!storage.personalProfile && backup.personalProfile && typeof backup.personalProfile === "object") storage.personalProfile = backup.personalProfile;
      storage.userSettings = { ...currentUserSettings(), ...(backup.userSettings && typeof backup.userSettings === "object" ? backup.userSettings : {}) };
      storage.lastErrors = mergeById(storage.lastErrors, Array.isArray(backup.lastErrors) ? backup.lastErrors : []);
      storage.migrationLog = mergeById(storage.migrationLog, Array.isArray(backup.migrationLog) ? backup.migrationLog : []);
      if (!storage.storageVersion && backup.storageVersion) storage.storageVersion = backup.storageVersion;
      storage.archivedPlanNames = uniqueValues(storage.archivedPlanNames, Array.isArray(backup.archivedPlanNames) ? backup.archivedPlanNames : []);
      storage.deletedPlanNames = uniqueValues(storage.deletedPlanNames, Array.isArray(backup.deletedPlanNames) ? backup.deletedPlanNames : []);
      storage.activeWorkoutDraft = backup.activeWorkoutDraft || null;
      if (backup.activePlanName) storage.activePlanName = backup.activePlanName;
      restoreWorkoutDraft();
      ensureActivePlan();
      alert("Backup importiert.");
      render();
    } catch {
      alert("Backup konnte nicht gelesen werden.");
    }
  };
  reader.readAsText(file);
}

function bindEvents() {
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      persistWorkoutDraft();
      state.tab = button.dataset.tab;
      state.activeWorkout = null;
      state.selectedExerciseId = null;
      state.selectedSessionId = null;
      render();
    });
  });

  document.querySelectorAll("[data-start-day]").forEach((button) => {
    button.addEventListener("click", () => startDay(button.dataset.startDay));
  });

  document.querySelector("[data-resume-workout]")?.addEventListener("click", resumeWorkoutDraft);

  document.querySelectorAll("[data-set]").forEach((input) => {
    input.addEventListener("input", () => {
      const entry = state.activeWorkout.entries[state.activeWorkout.index];
      entry.sets[Number(input.dataset.set)][input.dataset.field] = input.value;
      persistWorkoutDraft();
    });
  });

  document.querySelectorAll("[data-check-set]").forEach((button) => {
    button.addEventListener("click", () => {
      const entry = state.activeWorkout.entries[state.activeWorkout.index];
      const set = entry.sets[Number(button.dataset.checkSet)];
      set.completed = !set.completed;
      if (set.completed) startRestTimer(entry.restSeconds);
      persistWorkoutDraft();
      render();
    });
  });

  document.querySelector("[data-next-exercise]")?.addEventListener("click", finishOrNext);
  document.querySelector("[data-workout-exercise-detail]")?.addEventListener("click", (event) => {
    persistWorkoutDraft();
    state.selectedExerciseId = event.currentTarget.dataset.workoutExerciseDetail;
    render();
  });
  document.querySelector("[data-toggle-alternatives]")?.addEventListener("click", () => {
    state.showAlternatives = !state.showAlternatives;
    render();
  });
  document.querySelectorAll("[data-select-alternative]").forEach((button) => {
    button.addEventListener("click", () => selectAlternative(button.dataset.selectAlternative));
  });
  document.querySelector("[data-pause-timer]")?.addEventListener("click", () => {
    state.restTimer.running = !state.restTimer.running;
    render();
  });
  document.querySelector("[data-reset-timer]")?.addEventListener("click", () => {
    const entry = state.activeWorkout.entries[state.activeWorkout.index];
    startRestTimer(entry.restSeconds);
    render();
  });
  document.querySelector("[data-cancel-workout]")?.addEventListener("click", () => {
    if (confirm("Training wirklich abbrechen?")) {
      clearWorkoutDraft();
      state.activeWorkout = null;
      state.showAlternatives = false;
      state.restTimer.remaining = 0;
      state.restTimer.running = false;
      render();
    }
  });

  document.querySelectorAll("[data-activate-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      storage.archivedPlanNames = storage.archivedPlanNames.filter((name) => name !== button.dataset.activatePlan);
      storage.activePlanName = button.dataset.activatePlan;
      render();
    });
  });

  document.querySelectorAll("[data-archive-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const planName = button.dataset.archivePlan;
      storage.archivedPlanNames = [...new Set([...storage.archivedPlanNames, planName])];
      if (storage.activePlanName === planName) ensureActivePlan();
      render();
    });
  });

  document.querySelectorAll("[data-unarchive-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const planName = button.dataset.unarchivePlan;
      storage.archivedPlanNames = storage.archivedPlanNames.filter((name) => name !== planName);
      if (!activePlan()) storage.activePlanName = planName;
      render();
    });
  });

  document.querySelector("[data-plan-import]")?.addEventListener("input", (event) => {
    state.planImportText = event.target.value;
  });

  document.querySelector("[data-copy-plan-payload]")?.addEventListener("click", async () => {
    const payload = document.querySelector("[data-plan-payload]")?.value || "";
    await navigator.clipboard?.writeText(payload).catch(() => null);
    alert("Plan-Code kopiert.");
  });

  document.querySelector("[data-download-plan-json]")?.addEventListener("click", () => {
    const payload = document.querySelector("[data-plan-payload]")?.value || "";
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "d-coach-plan.json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  });

  document.querySelector("[data-import-plan-code]")?.addEventListener("click", () => {
    try {
      importPlanPayload(document.querySelector("[data-plan-import]")?.value || "");
      state.planImportText = "";
      alert("Plan importiert und aktiviert.");
      render();
    } catch (error) {
      alert(error.message || "Plan konnte nicht importiert werden.");
    }
  });

  document.querySelector("[data-generate-plan]")?.addEventListener("click", () => {
    const plan = generatePlanCandidate();
    if (!plan.days.length) {
      alert("Kein Planvorschlag moeglich. Es fehlen passende Uebungen.");
      return;
    }
    storage.customPlans = [...storage.customPlans, plan];
    storage.activePlanName = plan.planName;
    alert(appText("plan.generated", "Planvorschlag erstellt. Bitte pruefen und aktivieren."));
    render();
  });

  document.querySelectorAll("[data-duplicate-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      duplicatePlan(button.dataset.duplicatePlan);
      render();
    });
  });

  document.querySelectorAll("[data-delete-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const planName = button.dataset.deletePlan;
      if (!confirm("Trainingsplan wirklich löschen? Deine gespeicherten Trainingseinheiten bleiben erhalten.")) return;
      storage.deletedPlanNames = [...new Set([...storage.deletedPlanNames, planName])];
      storage.archivedPlanNames = storage.archivedPlanNames.filter((name) => name !== planName);
      if (storage.activePlanName === planName) ensureActivePlan();
      render();
    });
  });

  document.querySelector("[data-restore-plans]")?.addEventListener("click", () => {
    storage.deletedPlanNames = [];
    ensureActivePlan();
    render();
  });

  document.querySelector("[data-search-exercise]")?.addEventListener("input", (event) => {
    state.exerciseSearch = event.target.value;
    render();
  });

  document.querySelector("[data-save-custom-exercise]")?.addEventListener("click", () => {
    try {
      saveCustomExercise();
      alert("Eigene Uebung gespeichert.");
      render();
    } catch (error) {
      alert(error.message || "Uebung konnte nicht gespeichert werden.");
    }
  });

  document.querySelectorAll("[data-delete-custom-exercise]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!confirm("Eigene Uebung entfernen? Historie bleibt erhalten.")) return;
      deleteCustomExercise(button.dataset.deleteCustomExercise);
      render();
    });
  });

  document.querySelectorAll("[data-exercise-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.exerciseFilter = button.dataset.exerciseFilter;
      render();
    });
  });

  document.querySelectorAll("[data-exercise-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedExerciseId = button.dataset.exerciseId;
      render();
    });
  });

  document.querySelector("[data-back-exercises]")?.addEventListener("click", () => {
    state.selectedExerciseId = null;
    state.tab = "exercises";
    render();
  });

  document.querySelectorAll("[data-session-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedSessionId = button.dataset.sessionId;
      state.selectedExerciseId = null;
      render();
    });
  });

  document.querySelector("[data-back-dashboard]")?.addEventListener("click", () => {
    state.selectedSessionId = null;
    state.tab = "dashboard";
    render();
  });

  document.querySelector("[data-delete-session]")?.addEventListener("click", (event) => {
    if (!confirm("Training wirklich löschen?")) return;
    storage.sessions = storage.sessions.filter((session) => session.id !== event.currentTarget.dataset.deleteSession);
    state.selectedSessionId = null;
    state.tab = "dashboard";
    render();
  });

  document.querySelector("[data-save-weight]")?.addEventListener("click", () => {
    const input = document.querySelector("[data-weight-input]");
    const value = parseNumber(input.value);
    if (!value || value <= 0) {
      alert("Bitte gültiges Gewicht eingeben.");
      return;
    }
    const today = new Date();
    const todayKey = today.toISOString().slice(0, 10);
    const entries = storage.weights.filter((entry) => String(entry.date).slice(0, 10) !== todayKey);
    entries.push({ id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), date: today.toISOString(), weightKg: value });
    storage.weights = entries;
    render();
  });

  document.querySelectorAll("[data-delete-weight]").forEach((button) => {
    button.addEventListener("click", () => {
      storage.weights = storage.weights.filter((entry) => entry.id !== button.dataset.deleteWeight);
      render();
    });
  });

  document.querySelectorAll("[data-edit-weight]").forEach((button) => {
    button.addEventListener("click", () => {
      const entry = storage.weights.find((item) => item.id === button.dataset.editWeight);
      if (!entry) return;
      const value = prompt("Gewicht bearbeiten", String(entry.weightKg).replace(".", ","));
      if (value === null) return;
      const parsed = parseNumber(value);
      if (!parsed || parsed <= 0) {
        alert("Bitte gültiges Gewicht eingeben.");
        return;
      }
      storage.weights = storage.weights.map((item) => item.id === entry.id ? { ...item, weightKg: parsed } : item);
      render();
    });
  });

  document.querySelector("[data-save-journal]")?.addEventListener("click", () => {
    const today = todayIsoDate();
    const current = journalEntryForDate(today);
    const entry = {
      id: current?.id || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())),
      date: today,
      sleepQuality: 3,
      energy: 3,
      stress: 3,
      soreness: 3,
      mood: 3,
      painNote: "",
      nutritionNote: "",
      notes: "",
      updatedAt: new Date().toISOString()
    };
    document.querySelectorAll("[data-journal-field]").forEach((input) => {
      entry[input.dataset.journalField] = Number(input.value);
    });
    document.querySelectorAll("[data-journal-text]").forEach((input) => {
      entry[input.dataset.journalText] = input.value.trim();
    });
    storage.journalEntries = [...storage.journalEntries.filter((item) => item.date !== today), entry];
    render();
  });

  document.querySelector("[data-save-machine-setting]")?.addEventListener("click", (event) => {
    const exerciseId = event.currentTarget.dataset.saveMachineSetting;
    const current = latestMachineSetting(exerciseId);
    const setting = {
      id: current?.id || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())),
      exerciseId,
      machineName: "",
      seatPosition: "",
      handlePosition: "",
      backrestPosition: "",
      note: "",
      updatedAt: new Date().toISOString()
    };
    document.querySelectorAll("[data-machine-exercise]").forEach((input) => {
      if (input.dataset.machineExercise !== exerciseId) return;
      setting[input.dataset.machineField] = input.value.trim();
    });
    storage.machineSettings = [...storage.machineSettings.filter((item) => item.id !== setting.id), setting];
    render();
  });

  document.querySelectorAll("[data-export-backup]").forEach((button) => {
    button.addEventListener("click", exportBackup);
  });
  document.querySelector("[data-install-pwa]")?.addEventListener("click", installPwa);

  document.querySelector("[data-prepare-indexeddb]")?.addEventListener("click", async () => {
    if (!storage.lastBackupAt && !confirm("Noch kein Backup vorhanden. Trotzdem IndexedDB vorbereiten?")) return;
    try {
      await prepareIndexedDb();
      alert("IndexedDB wurde vorbereitet. Deine Daten bleiben weiter in localStorage.");
      render();
    } catch (error) {
      alert(error.message || "IndexedDB konnte nicht vorbereitet werden.");
    }
  });

  document.querySelector("[data-import-backup]")?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (file) importBackupFile(file);
    event.target.value = "";
  });

  document.querySelector("[data-import-seed-profile]")?.addEventListener("click", () => {
    try {
      importSeedProfile();
      render();
    } catch (error) {
      alert(error.message || "Profil konnte nicht importiert werden.");
    }
  });

  document.querySelector("[data-reset-plan-library]")?.addEventListener("click", () => {
    storage.archivedPlanNames = [];
    storage.deletedPlanNames = [];
    ensureActivePlan();
    render();
  });

  document.querySelector("[data-reset-app]")?.addEventListener("click", () => {
    if (!confirm("Alle Trainings- und Gewichtsdaten löschen?")) return;
    storage.sessions = [];
    storage.weights = [];
    storage.journalEntries = [];
    storage.machineSettings = [];
    storage.customPlans = [];
    storage.customExercises = [];
    storage.personalProfile = null;
    storage.lastErrors = [];
    clearWorkoutDraft();
    storage.lastBackupAt = null;
    state.activeWorkout = null;
    render();
  });

  document.querySelector("[data-toggle-debug]")?.addEventListener("change", (event) => {
    updateUserSetting("debugMode", event.target.checked);
    alert(event.target.checked ? appText("debug.enabled", "Debug-Modus aktiviert.") : "Debug-Modus deaktiviert.");
    render();
  });

  document.querySelector("[data-load-test-data]")?.addEventListener("click", () => {
    if (!confirm("Testdaten hinzufuegen? Bestehende Daten bleiben erhalten.")) return;
    loadDebugTestData();
    render();
  });

  document.querySelector("[data-clear-cache]")?.addEventListener("click", async () => {
    await clearPwaCache().catch((error) => logAppError(error.message, "cache"));
    alert("Cache wurde geleert. Lade die App danach neu.");
  });
}

boot().catch((error) => {
  document.getElementById("app").innerHTML = `<section class="screen"><h1 class="title">D-Coach</h1><p class="subtitle">Fehler: ${htmlesc(error.message)}</p></section>`;
});
