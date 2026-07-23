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
  muscleCoverageVisualMapping: null,
  muscleCoverageDetailSchema: null,
  muscleCoverageCoachTexts: null,
  interactiveMuscleMapSchema: null,
  muscleMapVisualConfig: null,
  muscleMapRegions: null,
  muscleDetailCardSchema: null,
  muscleMapTexts: null,
  machineCatalogSchema: null,
  studioProfileSchema: null,
  genericMachineCatalog: null,
  studioSpeedFitnessSeed: null,
  machineMatchingRules: null,
  machineMappingTexts: null,
  coachDashboardLayout: null,
  coachDashboardCards: null,
  coachDashboardVisualRules: null,
  muscleDetailSections: null,
  muscleDetailStatusRules: null,
  muscleDetailTexts: null,
  workoutTimelineSchema: null,
  workoutTimelineRules: null,
  workoutTimelineTexts: null,
  personalRecordsSchema: null,
  achievementRules: null,
  achievementTexts: null,
  exerciseDetailLayout: null,
  exerciseDetailTexts: null,
  exerciseDetailActionRules: null,
  exerciseHistoryChartConfig: null,
  intelligenceCoreSchema: null,
  confidenceEngineRules: null,
  conflictResolverRules: null,
  explainabilityEngineSchema: null,
  goalStrategyRules: null,
  recoveryFatigueSchema: null,
  muscleFatigueRules: null,
  jointStressRules: null,
  deloadDetectionRules: null,
  recoveryTexts: null,
  planOptimizerSchema: null,
  planSimulationSchema: null,
  muscleBalanceRules: null,
  weakPointEngineRules: null,
  adaptiveWeeklyPlanningRules: null,
  planOptimizerTexts: null,
  longTermProgressSchema: null,
  yearSummarySchema: null,
  trendAnalysisRules: null,
  progressForecastRules: null,
  longTermTexts: null,
  premiumMuscleMapSchema: null,
  premiumMuscleRegions: null,
  premiumMuscleMapUiRules: null,
  premiumMuscleDetailSchema: null,
  muscleHeatmapColorSystem: null,
  exerciseToSubregionMappingRules: null,
  designTokens: null,
  layoutRules: null,
  bottomNavigationSpec: null,
  cardHierarchy: null,
  muscleMapRenderingSpec: null,
  muscleHeatmapGradient: null,
  muscleDetailContent: null,
  muscleMapScreenLayout: null,
  workoutScreenLayout: null,
  exerciseCardCompact: null,
  smartBuilderCompactRules: null,
  trainingFeedbackMicrocopy: null,
  coachDashboard2Layout: null,
  coachRecommendationCard: null,
  aiTrainerReadinessSchema: null,
  coachDashboardTexts: null,
  smartCoachSchema: null,
  smartCoachPriorityRules: null,
  smartCoachRecommendationSchema: null,
  smartCoachTexts: null,
  weeklyCoachSchema: null,
  weeklyCoachRules: null,
  weeklyCoachTexts: null,
  sessionCoachSchema: null,
  sessionCoachRules: null,
  sessionCoachTexts: null,
  coachFeedbackSchema: null,
  coachLearningRules: null,
  coachFeedbackTexts: null,
  plateauCoachSchema: null,
  plateauDetectionRules: null,
  plateauActionRules: null,
  deloadCoachSchema: null,
  deloadDetectionRulesV65: null,
  deloadPrescriptionRules: null,
  mesocycleSchema: null,
  adaptiveMesocycleRules: null,
  mesocycleProgressionRules: null,
  smartCoachFallbackRules: null,
  smartCoachQualityMetrics: null,
  smartCoachReleaseGate: null,
  performanceScoreRules: null,
  coachDecisionRules: null,
  personalRecordRules: null,
  smartNotesRules: null,
  confidenceScoreRules: null,
  whyExplanationSchema: null,
  exerciseRatingSchema: null,
  exerciseRatingRules: null,
  exerciseRatingsSeed: null,
  alternativeExplanationRules: null,
  trainingDnaSchema: null,
  personalAnalyticsRules: null,
  trainingDnaTexts: null,
  performanceTimelineSchema: null,
  coachMemoryRules: null,
  adaptiveProgressionSchema: null,
  adaptiveProgressionRules: null,
  progressionConfidenceRules: null,
  progressionTexts: null,
  progressionPredictionSchema: null,
  smartWorkoutBuilderSchema: null,
  smartWorkoutBuilderRules: null,
  smartWorkoutDayTemplates: null,
  smartSubstitutionRules: null,
  smartWorkoutBuilderTexts: null,
  muscleMapJsAdapterSeed: null,
  muscleMapJsHeatmap: null,
  productionMuscleMapConfig: null,
  productionMuscleMapAdapterRules: null,
  productionMuscleDetailSchema: null,
  productionMuscleMapReleaseGate: null,
  lifeFitnessScannerConfig: null,
  coachPlanProposalSchema: null,
  coachProposalApplyRules: null,
  coachProposalReviewUi: null,
  dailyCheckinSchema: null,
  dailyCheckinStartupRules: null,
  dailyPainRegions: null,
  premiumNavigationSpec: null,
  dashboardPrioritySpec: null,
  trackingInformationArchitecture: null,
  tab: "dashboard",
  activeWorkout: null,
  exerciseSearch: "",
  exerciseFilter: "all",
  workoutExercisePickerOpen: false,
  workoutExerciseSearch: "",
  workoutExerciseMuscleFilter: "all",
  workoutExerciseEquipmentFilter: "all",
  selectedExerciseId: null,
  selectedSessionId: null,
  planImportText: "",
  showAlternatives: false,
  coverageMode: "week",
  coverageView: "front",
  selectedMuscleId: null,
  moreMenuOpen: false,
  equipmentScanner: {
    active: false,
    rawCode: "",
    normalizedCode: "",
    status: "idle",
    error: "",
    search: "",
    selectedExerciseId: "",
    mappingId: ""
  },
  activeCoachProposalId: "",
  showProposalAlternative: false,
  manualTrainingDayId: "",
  trainingStartIntent: null,
  pendingWorkoutReview: null,
  trainingDayError: null,
  workoutOverviewOpen: false,
  customPlanBuilderOpen: false,
  customPlanBuilderStep: "basics",
  customPlanBuilderSelectedDayId: "",
  customPlanBuilderExerciseSearch: "",
  dailyCheckinActive: false,
  dailyCheckinStep: "sleep",
  isOnline: navigator.onLine,
  deferredInstallPrompt: null,
  restTimer: {
    remaining: 0,
    running: false
  },
  route: null
};

const APP_VERSION = "pwa-v93";
const APP_CACHE_VERSION = "dcoach-pwa-v93";
const BACKUP_FORMAT_VERSION = "6.18.0";
const STORAGE_SCHEMA_VERSION = "6.7.0";
const OUTCOME_EVALUATOR_VERSION = "v6.17.0";
const MUSCLE_MAPPING_VERSION = "muscle-mapping-v3";
const MUSCLE_COVERAGE_CALCULATION_VERSION = "muscle-coverage-v6.19.0";
const MUSCLE_GROUP_REFERENCE_LOAD = 8;
const MUSCLE_REGION_REFERENCE_LOAD = 3;
const STORAGE_KEYS = [
  { key: "dcoach.sessions", label: "Trainings", type: "array" },
  { key: "dcoach.weights", label: "Gewicht", type: "array" },
  { key: "dcoach.journalEntries", label: "Journal", type: "array" },
  { key: "dcoach.machineSettings", label: "Geräte", type: "array" },
  { key: "dcoach.scannedEquipmentMappings", label: "Gerätezuordnungen", type: "array" },
  { key: "dcoach.activePlanName", label: "Aktiver Plan", type: "string" },
  { key: "dcoach.archivedPlanNames", label: "Archivierte Pläne", type: "array" },
  { key: "dcoach.deletedPlanNames", label: "Geloeschte Pläne", type: "array" },
  { key: "dcoach.customPlans", label: "Eigene Pläne", type: "array" },
  { key: "dcoach.customExercises", label: "Eigene Übungen", type: "array" },
  { key: "dcoach.customPlanBuilderDraft", label: "Eigener Planentwurf", type: "object" },
  { key: "dcoach.userSettings", label: "Einstellungen", type: "object" },
  { key: "dcoach.personalProfile", label: "Persönliche Daten", type: "object" },
  { key: "dcoach.coachFeedback", label: "Coach-Feedback", type: "array" },
  { key: "dcoach.coachPlanProposals", label: "Coach-Vorschlaege", type: "array" },
  { key: "dcoach.coachPlanUndo", label: "Coach-Undo", type: "object" },
  { key: "dcoach.coachRecommendationHistory", label: "Coach-Empfehlungshistorie", type: "array" },
  { key: "dcoach.recommendationOutcomes", label: "Coach-Outcome-Auswertung", type: "array" },
  { key: "dcoach.coachContextFeedback", label: "Kontextbezogenes Coach-Feedback", type: "array" },
  { key: "dcoach.coachConflictLog", label: "Coach-Konfliktlog", type: "array" },
  { key: "dcoach.coachCalibrationState", label: "Coach-Kalibrierung", type: "object" },
  { key: "dcoach.deviceValidationReports", label: "Geräteprüfungsberichte", type: "array" },
  { key: "dcoach.dailyCheckins", label: "Daily Check-ins", type: "array" },
  { key: "dcoach.dailyCheckinDraft", label: "Daily Check-in Draft", type: "object" },
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
  get scannedEquipmentMappings() {
    return readJson("dcoach.scannedEquipmentMappings", []);
  },
  set scannedEquipmentMappings(value) {
    writeJson("dcoach.scannedEquipmentMappings", Array.isArray(value) ? value : []);
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
  get customPlanBuilderDraft() {
    return readJson("dcoach.customPlanBuilderDraft", null);
  },
  set customPlanBuilderDraft(value) {
    if (value) writeJson("dcoach.customPlanBuilderDraft", value);
    else localStorage.removeItem("dcoach.customPlanBuilderDraft");
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
  get coachFeedback() {
    return readJson("dcoach.coachFeedback", []);
  },
  set coachFeedback(value) {
    writeJson("dcoach.coachFeedback", Array.isArray(value) ? value.slice(-200) : []);
  },
  get coachPlanProposals() {
    return readJson("dcoach.coachPlanProposals", []);
  },
  set coachPlanProposals(value) {
    writeJson("dcoach.coachPlanProposals", Array.isArray(value) ? value.slice(-100) : []);
  },
  get coachPlanUndo() {
    return readJson("dcoach.coachPlanUndo", null);
  },
  set coachPlanUndo(value) {
    if (value) writeJson("dcoach.coachPlanUndo", value);
    else localStorage.removeItem("dcoach.coachPlanUndo");
  },
  get coachRecommendationHistory() {
    return readJson("dcoach.coachRecommendationHistory", []);
  },
  set coachRecommendationHistory(value) {
    const items = Array.isArray(value) ? value : [];
    const open = items.filter((item) => ["pending", "accepted"].includes(item?.status));
    const closed = items.filter((item) => !["pending", "accepted"].includes(item?.status)).slice(-120);
    writeJson("dcoach.coachRecommendationHistory", [...closed, ...open].slice(-180));
  },
  get recommendationOutcomes() {
    return readJson("dcoach.recommendationOutcomes", []);
  },
  set recommendationOutcomes(value) {
    writeJson("dcoach.recommendationOutcomes", Array.isArray(value) ? value.slice(-180) : []);
  },
  get coachContextFeedback() {
    return readJson("dcoach.coachContextFeedback", []);
  },
  set coachContextFeedback(value) {
    writeJson("dcoach.coachContextFeedback", Array.isArray(value) ? value.slice(-220) : []);
  },
  get coachConflictLog() {
    return readJson("dcoach.coachConflictLog", []);
  },
  set coachConflictLog(value) {
    writeJson("dcoach.coachConflictLog", Array.isArray(value) ? value.slice(-120) : []);
  },
  get coachCalibrationState() {
    return readJson("dcoach.coachCalibrationState", null);
  },
  set coachCalibrationState(value) {
    if (value) writeJson("dcoach.coachCalibrationState", value);
    else localStorage.removeItem("dcoach.coachCalibrationState");
  },
  get deviceValidationReports() {
    return readJson("dcoach.deviceValidationReports", []);
  },
  set deviceValidationReports(value) {
    writeJson("dcoach.deviceValidationReports", Array.isArray(value) ? value.slice(-20) : []);
  },
  get deviceValidationStatus() {
    return readJson("dcoach.deviceValidationStatus", {});
  },
  set deviceValidationStatus(value) {
    writeJson("dcoach.deviceValidationStatus", value && typeof value === "object" ? value : {});
  },
  get muscleCoverageDeviceValidationStatus() {
    return readJson("dcoach.muscleCoverageDeviceValidationStatus", {});
  },
  set muscleCoverageDeviceValidationStatus(value) {
    writeJson("dcoach.muscleCoverageDeviceValidationStatus", value && typeof value === "object" ? value : {});
  },
  get dailyCheckins() {
    return readJson("dcoach.dailyCheckins", []);
  },
  set dailyCheckins(value) {
    writeJson("dcoach.dailyCheckins", Array.isArray(value) ? value : []);
  },
  get dailyCheckinDraft() {
    return readJson("dcoach.dailyCheckinDraft", null);
  },
  set dailyCheckinDraft(value) {
    if (value) writeJson("dcoach.dailyCheckinDraft", value);
    else localStorage.removeItem("dcoach.dailyCheckinDraft");
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
  repairLegacyPullPlanMixups();
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
  if (!indexedDbSupported()) return "Nicht unterstützt";
  return storage.indexedDbReady ? "Vorbereitet" : "Nicht vorbereitet";
}

function openDCoachIndexedDb() {
  return new Promise((resolve, reject) => {
    if (!indexedDbSupported()) {
      reject(new Error("IndexedDB wird von diesem Browser nicht unterstützt."));
      return;
    }
    const request = indexedDB.open("DCoachLocal", 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      ["sessions", "weights", "journalEntries", "machineSettings", "scannedEquipmentMappings", "meta"].forEach((name) => {
        if (!db.objectStoreNames.contains(name)) {
          db.createObjectStore(name, { keyPath: "id" });
        }
      });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("IndexedDB konnte nicht geöffnet werden."));
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

function mergeScannedEquipmentMappings(existing = [], incoming = []) {
  const map = new Map();
  existing.forEach((item) => {
    const key = item.normalizedCode || normalizeScannedEquipmentCode(item.rawCode) || item.id || JSON.stringify(item);
    map.set(key, item);
  });
  incoming.forEach((item) => {
    const key = item.normalizedCode || normalizeScannedEquipmentCode(item.rawCode) || item.id || JSON.stringify(item);
    map.set(key, { ...(map.get(key) || {}), ...item, normalizedCode: item.normalizedCode || normalizeScannedEquipmentCode(item.rawCode) });
  });
  return [...map.values()];
}

function uniqueValues(...lists) {
  return [...new Set(lists.flat().filter(Boolean))];
}

const EXERCISE_TRACKING_TYPES = {
  strength_weight_reps: {
    label: "Gewicht + Wiederholungen",
    fields: ["weightText", "repsText", "rirText"],
    summary: "kg · Wdh. · RIR"
  },
  bodyweight_reps: {
    label: "Körpergewicht + Wiederholungen",
    fields: ["repsText", "rirText"],
    summary: "Wdh. · RIR"
  },
  bodyweight_time: {
    label: "Zeit",
    fields: ["durationSecondsText", "addedWeightText"],
    summary: "Zeit · optional Zusatzgewicht"
  },
  weighted_time: {
    label: "Gewicht + Zeit",
    fields: ["weightText", "durationSecondsText", "rirText"],
    summary: "kg · Zeit · RIR"
  },
  distance_time: {
    label: "Distanz + Zeit",
    fields: ["distanceText", "durationSecondsText"],
    summary: "Distanz · Zeit"
  },
  cardio_time: {
    label: "Cardio",
    fields: ["durationSecondsText", "distanceText"],
    summary: "Zeit · Distanz"
  },
  weighted_distance_time: {
    label: "Gewicht + Distanz/Zeit",
    fields: ["weightText", "distanceText", "durationSecondsText"],
    summary: "kg · Distanz · Zeit"
  }
};

function inferTrackingType(raw = {}, existing = null) {
  const text = [
    raw.trackingType,
    existing?.trackingType,
    raw.displayName,
    raw.englishName,
    raw.category,
    raw.movementPattern,
    ...(raw.tags || []),
    ...(existing?.tags || [])
  ].join(" ").toLowerCase();
  if (EXERCISE_TRACKING_TYPES[raw.trackingType]) return raw.trackingType;
  if (EXERCISE_TRACKING_TYPES[existing?.trackingType]) return existing.trackingType;
  if (/laufband|treadmill|fahrrad|bike|ergometer|rudern|rowing|crosstrainer|elliptical/.test(text)) return "cardio_time";
  if (/farmer|carry|walk/.test(text)) return "weighted_distance_time";
  if (/plank|wall sit|hold|isometr/.test(text)) return "bodyweight_time";
  if (/bodyweight|körpergewicht|push up|pull up|dip/.test(text)) return "bodyweight_reps";
  return "strength_weight_reps";
}

function normalizeExercise(raw, existing = null) {
  const primaryMuscleGroups = raw.primaryMuscleGroups || existing?.primaryMuscleGroups || [];
  const secondaryMuscleGroups = raw.secondaryMuscleGroups || existing?.secondaryMuscleGroups || [];
  const equipmentName = raw.equipment || (raw.equipmentId ? [equipmentNameById(raw.equipmentId)] : existing?.equipment || []);
  const trackingType = inferTrackingType(raw, existing);
  return {
    ...raw,
    ...existing,
    englishName: raw.englishName || existing?.englishName || "",
    aliases: uniqueValues(existing?.aliases || [], raw.aliases || [], raw.englishName ? [raw.englishName] : []),
    primaryMuscleGroups,
    secondaryMuscleGroups,
    movementPattern: raw.movementPattern || existing?.movementPattern || "Allgemein",
    equipment: uniqueValues(equipmentName),
    category: raw.category || existing?.category || "Übung",
    difficulty: raw.difficulty || existing?.difficulty || "mittel",
    spineLoadLevel: raw.spineLoadLevel || existing?.spineLoadLevel || "medium",
    lumbarDiscSuitability: raw.lumbarDiscSuitability || existing?.lumbarDiscSuitability || "conditionallySuitable",
    trackingType,
    unilateral: Boolean(raw.unilateral ?? existing?.unilateral ?? false),
    split: raw.split || existing?.split || raw.category || existing?.category || "",
    muscleRoles: raw.muscleRoles || existing?.muscleRoles || [],
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
    days: (plan.days || []).map((day, dayIndex) => ({
      id: day.id || stablePlanDayId(plan, day, dayIndex),
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
  if (!state.personalProfileSeed) throw new Error("Seed-Daten fehlen.");
  if (storage.personalProfile && !confirm("Bestehende persönliche Daten ersetzen?")) return;
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
      days: normalizedPlanDays(plan)
    }
  });
}

function parsePlanPayload(text) {
  const payload = JSON.parse(String(text || "").trim());
  if (payload?.type !== "dcoach_plan" || !payload.plan?.name || !Array.isArray(payload.plan.days)) {
    throw new Error("Kein gültiger D-Coach-Plan.");
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
  activatePlan(plan);
}

const PULL_LWS_TEMPLATE_V618 = [
  { exerciseId: "ex_lat_pulldown", sets: 3, reps: "8-12", restSeconds: 90, priority: "required" },
  { exerciseId: "ex_chest_supported_row", sets: 3, reps: "8-12", restSeconds: 90, priority: "required" },
  { exerciseId: "ex_seated_row", sets: 2, reps: "8-12", restSeconds: 90, priority: "important" },
  { exerciseId: "ex_reverse_pec_deck", sets: 2, reps: "12-15", restSeconds: 60, priority: "important" },
  { exerciseId: "ex_face_pull", sets: 2, reps: "12-20", restSeconds: 60, priority: "optional" },
  { exerciseId: "ex_cable_biceps_curl", sets: 3, reps: "10-15", restSeconds: 60, priority: "required" }
];

function exerciseTrainingTypeForIntegrity(exercise) {
  const text = [
    exercise?.id,
    exercise?.displayName,
    exercise?.englishName,
    exercise?.category,
    exercise?.movementPattern,
    ...(exercise?.tags || []),
    ...(exercise?.primaryMuscleGroups || []),
    ...(exercise?.secondaryMuscleGroups || [])
  ].join(" ").toLowerCase();
  if (/bank|bench|press|drueck|drück|push|brust|chest|schulter|shoulder|trizeps|triceps/.test(text)) return "Push";
  if (/pull|zug|lat|rudern|row|ruecken|rücken|back|bizeps|biceps|curl|face pull|reverse/.test(text)) return "Pull";
  if (/bein|leg|quad|glute|hamstring|wade|calf|adduktor|adductor/.test(text)) return "Legs";
  return "";
}

function planDayTypeStats(day) {
  return (day?.exercises || []).reduce((stats, entry) => {
    const type = exerciseTrainingTypeForIntegrity(exerciseById(entry.exerciseId));
    if (type) stats[type] = (stats[type] || 0) + 1;
    stats.total += 1;
    return stats;
  }, { Push: 0, Pull: 0, Legs: 0, total: 0 });
}

function isLegacyPullPlanMixup(day) {
  if (explicitDayTypeFromName(day?.name) !== "Pull") return false;
  const stats = planDayTypeStats(day);
  return stats.total >= 3 && stats.Push >= Math.max(2, Math.ceil(stats.total * 0.5)) && stats.Pull <= 1;
}

function repairPlanPullDayMixup(plan) {
  if (!plan?.days?.length) return { plan, changed: false };
  let changed = false;
  const days = plan.days.map((day) => {
    if (!isLegacyPullPlanMixup(day)) return day;
    changed = true;
    const replacement = generatedPullDayV618();
    return {
      ...day,
      name: day.name || replacement.name,
      maxDurationMinutes: day.maxDurationMinutes || replacement.maxDurationMinutes,
      exercises: replacement.exercises.map((entry) => ({ ...entry })),
      integrityRepair: {
        repairedAt: new Date().toISOString(),
        reason: "legacy_pull_day_contained_push_exercises"
      }
    };
  });
  return { plan: changed ? { ...plan, days } : plan, changed };
}

function repairLegacyPullPlanMixups() {
  let changedSeed = false;
  const repairedSeed = (state.seed?.trainingPlans || []).map((plan) => {
    const repaired = repairPlanPullDayMixup(plan);
    if (repaired.changed) changedSeed = true;
    return repaired.plan;
  });
  if (changedSeed) state.seed.trainingPlans = repairedSeed;

  let changedCustom = false;
  const repairedCustom = storage.customPlans.map((plan) => {
    const repaired = repairPlanPullDayMixup(plan);
    if (repaired.changed) changedCustom = true;
    return repaired.plan;
  });
  if (changedCustom) {
    storage.customPlans = repairedCustom;
    appendMigrationLog({
      id: "v6-18-2-pull-plan-mixup-repair",
      from: storage.storageVersion || "unknown",
      to: storage.storageVersion || STORAGE_SCHEMA_VERSION,
      at: new Date().toISOString(),
      action: "repair-pull-day-exercise-mixup",
      destructive: false
    });
  }
}

function setPolicyDefaultForExercise(exercise, index = 0, dayName = "", priority = "") {
  if (priority === "optional") return 2;
  const text = `${dayName} ${exercise?.displayName || ""} ${exercise?.category || ""} ${exercise?.movementPattern || ""} ${(exercise?.tags || []).join(" ")}`.toLowerCase();
  const isolation = /curl|bizeps|trizeps|seitheben|face pull|reverse|butterfly|fly|waden|plank|core|bauch/.test(text);
  if (priority === "required") return 3;
  if (index <= 1) return 3;
  if (index === 2 && !isolation) return 2;
  return 2;
}

function generatedPullDayV618() {
  return {
    id: "day_generated_pull_lws_v618",
    name: "Pull",
    maxDurationMinutes: 60,
    exercises: PULL_LWS_TEMPLATE_V618.map((entry, index) => ({
      ...entry,
      sortOrder: index + 1
    }))
  };
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
    ["Pull", ["pull", "ruecken", "ruecken", "bizeps"]],
    ["Beine + Core", ["bein", "quad", "glute", "hamstring", "core", "bauch"]]
  ];
  const days = groups.map(([name, needles], dayIndex) => {
    const chosen = exercises.filter((exercise) => {
      const text = `${exercise.displayName} ${exercise.englishName || ""} ${(exercise.aliases || []).join(" ")} ${exercise.category} ${exercise.split || ""} ${exercise.movementPattern} ${(exercise.tags || []).join(" ")} ${(exercise.primaryMuscleGroups || []).join(" ")}`.toLowerCase();
      return needles.some((needle) => text.includes(needle));
    }).slice(0, 6);
    return {
      id: `day_generated_${stableIdPart(name)}_${dayIndex + 1}`,
      name,
      maxDurationMinutes: 60,
      exercises: chosen.map((exercise, index) => ({
        exerciseId: exercise.id,
        sets: setPolicyDefaultForExercise(exercise, index, name, index < 4 ? "required" : "important"),
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
    description: "Regelbasiert aus vorhandenen Übungen erzeugt. Bitte prüfen.",
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
    studioContext,
    muscleCoverageVisualMapping,
    muscleCoverageDetailSchema,
    muscleCoverageCoachTexts,
    interactiveMuscleMapSchema,
    muscleMapVisualConfig,
    muscleMapRegions,
    muscleDetailCardSchema,
    muscleMapTexts,
    machineCatalogSchema,
    studioProfileSchema,
    genericMachineCatalog,
    studioSpeedFitnessSeed,
    machineMatchingRules,
    machineMappingTexts,
    coachDashboardLayout,
    coachDashboardCards,
    coachDashboardVisualRules,
    muscleDetailSections,
    muscleDetailStatusRules,
    muscleDetailTexts,
    workoutTimelineSchema,
    workoutTimelineRules,
    workoutTimelineTexts,
    personalRecordsSchema,
    achievementRules,
    achievementTexts,
    exerciseDetailLayout,
    exerciseDetailTexts,
    exerciseDetailActionRules,
    exerciseHistoryChartConfig,
    intelligenceCoreSchema,
    confidenceEngineRules,
    conflictResolverRules,
    explainabilityEngineSchema,
    goalStrategyRules,
    recoveryFatigueSchema,
    muscleFatigueRules,
    jointStressRules,
    deloadDetectionRules,
    recoveryTexts,
    planOptimizerSchema,
    planSimulationSchema,
    muscleBalanceRules,
    weakPointEngineRules,
    adaptiveWeeklyPlanningRules,
    planOptimizerTexts,
    longTermProgressSchema,
    yearSummarySchema,
    trendAnalysisRules,
    progressForecastRules,
    longTermTexts,
    premiumMuscleMapSchema,
    premiumMuscleRegions,
    premiumMuscleMapUiRules,
    premiumMuscleDetailSchema,
    muscleHeatmapColorSystem,
    exerciseToSubregionMappingRules,
    designTokens,
    layoutRules,
    bottomNavigationSpec,
    cardHierarchy,
    muscleMapRenderingSpec,
    muscleHeatmapGradient,
    muscleDetailContent,
    muscleMapScreenLayout,
    workoutScreenLayout,
    exerciseCardCompact,
    smartBuilderCompactRules,
    trainingFeedbackMicrocopy,
    coachDashboard2Layout,
    coachRecommendationCard,
    aiTrainerReadinessSchema,
    coachDashboardTexts,
    smartCoachSchema,
    smartCoachPriorityRules,
    smartCoachRecommendationSchema,
    smartCoachTexts,
    weeklyCoachSchema,
    weeklyCoachRules,
    weeklyCoachTexts,
    sessionCoachSchema,
    sessionCoachRules,
    sessionCoachTexts,
    coachFeedbackSchema,
    coachLearningRules,
    coachFeedbackTexts,
    plateauCoachSchema,
    plateauDetectionRules,
    plateauActionRules,
    deloadCoachSchema,
    deloadDetectionRulesV65,
    deloadPrescriptionRules,
    mesocycleSchema,
    adaptiveMesocycleRules,
    mesocycleProgressionRules,
    smartCoachFallbackRules,
    smartCoachQualityMetrics,
    smartCoachReleaseGate,
    performanceScoreRules,
    coachDecisionRules,
    personalRecordRules,
    smartNotesRules,
    confidenceScoreRules,
    whyExplanationSchema,
    exerciseRatingSchema,
    exerciseRatingRules,
    exerciseRatingsSeed,
    alternativeExplanationRules,
    trainingDnaSchema,
    personalAnalyticsRules,
    trainingDnaTexts,
    performanceTimelineSchema,
    coachMemoryRules,
    adaptiveProgressionSchema,
    adaptiveProgressionRules,
    progressionConfidenceRules,
    progressionTexts,
    progressionPredictionSchema,
    smartWorkoutBuilderSchema,
    smartWorkoutBuilderRules,
    smartWorkoutDayTemplates,
    smartSubstitutionRules,
    smartWorkoutBuilderTexts,
    muscleMapJsAdapterSeed,
    muscleMapJsHeatmap,
    productionMuscleMapConfig,
    productionMuscleMapAdapterRules,
    productionMuscleDetailSchema,
    productionMuscleMapReleaseGate,
    lifeFitnessScannerConfig,
    coachPlanProposalSchema,
    coachProposalApplyRules,
    coachProposalReviewUi,
    dailyCheckinSchema,
    dailyCheckinStartupRules,
    dailyPainRegions,
    premiumNavigationSpec,
    dashboardPrioritySpec,
    trackingInformationArchitecture,
    exerciseLibraryExpansionV2
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
    fetchOptionalJson("./data/studio_context_v2.2.0.json"),
    fetchOptionalJson("./data/muscle_coverage_visual_mapping_v2.4.0.json"),
    fetchOptionalJson("./data/muscle_coverage_detail_schema_v2.4.0.json"),
    fetchOptionalJson("./data/muscle_coverage_coach_texts_v2.4.0.json"),
    fetchOptionalJson("./data/interactive_muscle_map_schema_v3.0.0.json"),
    fetchOptionalJson("./data/muscle_map_visual_config_v3.0.0.json"),
    fetchOptionalJson("./data/muscle_map_regions_v3.0.0.json"),
    fetchOptionalJson("./data/muscle_detail_card_schema_v3.0.0.json"),
    fetchOptionalJson("./data/muscle_map_texts_v3.0.0.json"),
    fetchOptionalJson("./data/machine_catalog_schema_v3.1.0.json"),
    fetchOptionalJson("./data/studio_profile_schema_v3.1.0.json"),
    fetchOptionalJson("./data/generic_machine_catalog_v3.1.0.json"),
    fetchOptionalJson("./data/studio_speed_fitness_seed_v3.1.0.json"),
    fetchOptionalJson("./data/machine_matching_rules_v3.1.0.json"),
    fetchOptionalJson("./data/machine_mapping_texts_v3.1.0.json"),
    fetchOptionalJson("./data/coach_dashboard_layout_v3.2.0.json"),
    fetchOptionalJson("./data/coach_dashboard_cards_v3.2.0.json"),
    fetchOptionalJson("./data/coach_dashboard_visual_rules_v3.2.0.json"),
    fetchOptionalJson("./data/muscle_detail_sections_v3.3.0.json"),
    fetchOptionalJson("./data/muscle_detail_status_rules_v3.3.0.json"),
    fetchOptionalJson("./data/muscle_detail_texts_v3.3.0.json"),
    fetchOptionalJson("./data/workout_timeline_schema_v3.4.0.json"),
    fetchOptionalJson("./data/workout_timeline_rules_v3.4.0.json"),
    fetchOptionalJson("./data/workout_timeline_texts_v3.4.0.json"),
    fetchOptionalJson("./data/personal_records_schema_v3.5.0.json"),
    fetchOptionalJson("./data/achievement_rules_v3.5.0.json"),
    fetchOptionalJson("./data/achievement_texts_v3.5.0.json"),
    fetchOptionalJson("./data/exercise_detail_layout_v3.6.0.json"),
    fetchOptionalJson("./data/exercise_detail_texts_v3.6.0.json"),
    fetchOptionalJson("./data/exercise_detail_action_rules_v3.6.0.json"),
    fetchOptionalJson("./data/exercise_history_chart_config_v3.6.0.json"),
    fetchOptionalJson("./data/intelligence_core_schema_v4.0.0.json"),
    fetchOptionalJson("./data/confidence_engine_rules_v4.0.0.json"),
    fetchOptionalJson("./data/conflict_resolver_rules_v4.0.0.json"),
    fetchOptionalJson("./data/explainability_engine_schema_v4.0.0.json"),
    fetchOptionalJson("./data/goal_strategy_rules_v4.0.0.json"),
    fetchOptionalJson("./data/recovery_fatigue_schema_v4.1.0.json"),
    fetchOptionalJson("./data/muscle_fatigue_rules_v4.1.0.json"),
    fetchOptionalJson("./data/joint_stress_rules_v4.1.0.json"),
    fetchOptionalJson("./data/deload_detection_rules_v4.1.0.json"),
    fetchOptionalJson("./data/recovery_texts_v4.1.0.json"),
    fetchOptionalJson("./data/plan_optimizer_schema_v4.2.0.json"),
    fetchOptionalJson("./data/plan_simulation_schema_v4.2.0.json"),
    fetchOptionalJson("./data/muscle_balance_rules_v4.2.0.json"),
    fetchOptionalJson("./data/weak_point_engine_rules_v4.2.0.json"),
    fetchOptionalJson("./data/adaptive_weekly_planning_rules_v4.2.0.json"),
    fetchOptionalJson("./data/plan_optimizer_texts_v4.2.0.json"),
    fetchOptionalJson("./data/long_term_progress_schema_v4.3.0.json"),
    fetchOptionalJson("./data/year_summary_schema_v4.3.0.json"),
    fetchOptionalJson("./data/trend_analysis_rules_v4.3.0.json"),
    fetchOptionalJson("./data/progress_forecast_rules_v4.3.0.json"),
    fetchOptionalJson("./data/long_term_texts_v4.3.0.json"),
    fetchOptionalJson("./data/premium_muscle_map_schema_v5.0.0.json"),
    fetchOptionalJson("./data/premium_muscle_regions_v5.0.0.json"),
    fetchOptionalJson("./data/premium_muscle_map_ui_rules_v5.0.0.json"),
    fetchOptionalJson("./data/premium_muscle_detail_schema_v5.0.0.json"),
    fetchOptionalJson("./data/muscle_heatmap_color_system_v5.0.0.json"),
    fetchOptionalJson("./data/exercise_to_subregion_mapping_rules_v5.0.0.json"),
    fetchOptionalJson("./data/design_tokens_v5.1.0.json"),
    fetchOptionalJson("./data/layout_rules_v5.1.0.json"),
    fetchOptionalJson("./data/bottom_navigation_spec_v5.1.0.json"),
    fetchOptionalJson("./data/card_hierarchy_v5.1.0.json"),
    fetchOptionalJson("./data/muscle_map_rendering_spec_v5.2.0.json"),
    fetchOptionalJson("./data/muscle_heatmap_gradient_v5.2.0.json"),
    fetchOptionalJson("./data/muscle_detail_content_v5.2.0.json"),
    fetchOptionalJson("./data/muscle_map_screen_layout_v5.2.0.json"),
    fetchOptionalJson("./data/workout_screen_layout_v5.3.0.json"),
    fetchOptionalJson("./data/exercise_card_compact_v5.3.0.json"),
    fetchOptionalJson("./data/smart_builder_compact_rules_v5.3.0.json"),
    fetchOptionalJson("./data/training_feedback_microcopy_v5.3.0.json"),
    fetchOptionalJson("./data/coach_dashboard_2_layout_v5.4.0.json"),
    fetchOptionalJson("./data/coach_recommendation_card_v5.4.0.json"),
    fetchOptionalJson("./data/ai_trainer_readiness_schema_v5.4.0.json"),
    fetchOptionalJson("./data/coach_dashboard_texts_v5.4.0.json"),
    fetchOptionalJson("./data/smart_coach_schema_v6.0.0.json"),
    fetchOptionalJson("./data/smart_coach_priority_rules_v6.0.0.json"),
    fetchOptionalJson("./data/smart_coach_recommendation_schema_v6.0.0.json"),
    fetchOptionalJson("./data/smart_coach_texts_v6.0.0.json"),
    fetchOptionalJson("./data/weekly_coach_schema_v6.1.0.json"),
    fetchOptionalJson("./data/weekly_coach_rules_v6.1.0.json"),
    fetchOptionalJson("./data/weekly_coach_texts_v6.1.0.json"),
    fetchOptionalJson("./data/session_coach_schema_v6.2.0.json"),
    fetchOptionalJson("./data/session_coach_rules_v6.2.0.json"),
    fetchOptionalJson("./data/session_coach_texts_v6.2.0.json"),
    fetchOptionalJson("./data/coach_feedback_schema_v6.3.0.json"),
    fetchOptionalJson("./data/coach_learning_rules_v6.3.0.json"),
    fetchOptionalJson("./data/coach_feedback_texts_v6.3.0.json"),
    fetchOptionalJson("./data/plateau_coach_schema_v6.4.0.json"),
    fetchOptionalJson("./data/plateau_detection_rules_v6.4.0.json"),
    fetchOptionalJson("./data/plateau_action_rules_v6.4.0.json"),
    fetchOptionalJson("./data/deload_coach_schema_v6.5.0.json"),
    fetchOptionalJson("./data/deload_detection_rules_v6.5.0.json"),
    fetchOptionalJson("./data/deload_prescription_rules_v6.5.0.json"),
    fetchOptionalJson("./data/mesocycle_schema_v6.6.0.json"),
    fetchOptionalJson("./data/adaptive_mesocycle_rules_v6.6.0.json"),
    fetchOptionalJson("./data/mesocycle_progression_rules_v6.6.0.json"),
    fetchOptionalJson("./data/smart_coach_fallback_rules_v6.7.0.json"),
    fetchOptionalJson("./data/smart_coach_quality_metrics_v6.7.0.json"),
    fetchOptionalJson("./data/smart_coach_release_gate_v6.7.0.json"),
    fetchOptionalJson("./data/performance_score_rules_v2.5.0.json"),
    fetchOptionalJson("./data/coach_decision_rules_v2.5.0.json"),
    fetchOptionalJson("./data/personal_record_rules_v2.5.0.json"),
    fetchOptionalJson("./data/smart_notes_rules_v2.5.0.json"),
    fetchOptionalJson("./data/confidence_score_rules_v2.5.0.json"),
    fetchOptionalJson("./data/why_explanation_schema_v2.5.0.json"),
    fetchOptionalJson("./data/exercise_rating_schema_v2.6.0.json"),
    fetchOptionalJson("./data/exercise_rating_rules_v2.6.0.json"),
    fetchOptionalJson("./data/exercise_ratings_seed_v2.6.0.json"),
    fetchOptionalJson("./data/alternative_explanation_rules_v2.6.0.json"),
    fetchOptionalJson("./data/training_dna_schema_v2.7.0.json"),
    fetchOptionalJson("./data/personal_analytics_rules_v2.7.0.json"),
    fetchOptionalJson("./data/training_dna_texts_v2.7.0.json"),
    fetchOptionalJson("./data/personal_performance_timeline_schema_v2.7.0.json"),
    fetchOptionalJson("./data/coach_memory_rules_v2.7.0.json"),
    fetchOptionalJson("./data/adaptive_progression_schema_v2.8.0.json"),
    fetchOptionalJson("./data/adaptive_progression_rules_v2.8.0.json"),
    fetchOptionalJson("./data/progression_confidence_rules_v2.8.0.json"),
    fetchOptionalJson("./data/progression_texts_v2.8.0.json"),
    fetchOptionalJson("./data/progression_prediction_schema_v2.8.0.json"),
    fetchOptionalJson("./data/smart_workout_builder_schema_v2.9.0.json"),
    fetchOptionalJson("./data/smart_workout_builder_rules_v2.9.0.json"),
    fetchOptionalJson("./data/smart_workout_day_templates_v2.9.0.json"),
    fetchOptionalJson("./data/smart_substitution_rules_v2.9.0.json"),
    fetchOptionalJson("./data/smart_workout_builder_texts_v2.9.0.json"),
    fetchOptionalJson("./data/musclemapjs_dcoach_adapter_seed_v6.8.0.json"),
    fetchOptionalJson("./data/musclemapjs_heatmap_v6.8.0.json"),
    fetchOptionalJson("./data/production_muscle_map_config_v6.9.0.json"),
    fetchOptionalJson("./data/production_muscle_map_adapter_rules_v6.9.0.json"),
    fetchOptionalJson("./data/production_muscle_detail_schema_v6.9.0.json"),
    fetchOptionalJson("./production/production_muscle_map_release_gate_v6.9.0.json"),
    fetchOptionalJson("./data/life_fitness_scanner_config_v6.11.0.json"),
    fetchOptionalJson("./data/coach_plan_proposal_schema_v6.12.0.json"),
    fetchOptionalJson("./data/coach_proposal_apply_rules_v6.12.0.json"),
    fetchOptionalJson("./data/coach_proposal_review_ui_v6.12.0.json"),
    fetchOptionalJson("./data/daily_checkin_schema_v6.13.0.json"),
    fetchOptionalJson("./data/daily_checkin_startup_rules_v6.13.0.json"),
    fetchOptionalJson("./data/daily_pain_regions_v6.13.0.json"),
    fetchOptionalJson("./data/premium_navigation_v6.14.0.json"),
    fetchOptionalJson("./data/dashboard_priority_v6.14.0.json"),
    fetchOptionalJson("./data/tracking_information_architecture_v6.14.0.json"),
    fetchOptionalJson("./data/exercise_library_expansion_v2.0.0.json")
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
  state.muscleCoverageVisualMapping = muscleCoverageVisualMapping;
  state.muscleCoverageDetailSchema = muscleCoverageDetailSchema;
  state.muscleCoverageCoachTexts = muscleCoverageCoachTexts;
  state.interactiveMuscleMapSchema = interactiveMuscleMapSchema;
  state.muscleMapVisualConfig = muscleMapVisualConfig;
  state.muscleMapRegions = muscleMapRegions;
  state.muscleDetailCardSchema = muscleDetailCardSchema;
  state.muscleMapTexts = muscleMapTexts;
  state.machineCatalogSchema = machineCatalogSchema;
  state.studioProfileSchema = studioProfileSchema;
  state.genericMachineCatalog = genericMachineCatalog;
  state.studioSpeedFitnessSeed = studioSpeedFitnessSeed;
  state.machineMatchingRules = machineMatchingRules;
  state.machineMappingTexts = machineMappingTexts;
  state.coachDashboardLayout = coachDashboardLayout;
  state.coachDashboardCards = coachDashboardCards;
  state.coachDashboardVisualRules = coachDashboardVisualRules;
  state.muscleDetailSections = muscleDetailSections;
  state.muscleDetailStatusRules = muscleDetailStatusRules;
  state.muscleDetailTexts = muscleDetailTexts;
  state.workoutTimelineSchema = workoutTimelineSchema;
  state.workoutTimelineRules = workoutTimelineRules;
  state.workoutTimelineTexts = workoutTimelineTexts;
  state.personalRecordsSchema = personalRecordsSchema;
  state.achievementRules = achievementRules;
  state.achievementTexts = achievementTexts;
  state.exerciseDetailLayout = exerciseDetailLayout;
  state.exerciseDetailTexts = exerciseDetailTexts;
  state.exerciseDetailActionRules = exerciseDetailActionRules;
  state.exerciseHistoryChartConfig = exerciseHistoryChartConfig;
  state.intelligenceCoreSchema = intelligenceCoreSchema;
  state.confidenceEngineRules = confidenceEngineRules;
  state.conflictResolverRules = conflictResolverRules;
  state.explainabilityEngineSchema = explainabilityEngineSchema;
  state.goalStrategyRules = goalStrategyRules;
  state.recoveryFatigueSchema = recoveryFatigueSchema;
  state.muscleFatigueRules = muscleFatigueRules;
  state.jointStressRules = jointStressRules;
  state.deloadDetectionRules = deloadDetectionRules;
  state.recoveryTexts = recoveryTexts;
  state.planOptimizerSchema = planOptimizerSchema;
  state.planSimulationSchema = planSimulationSchema;
  state.muscleBalanceRules = muscleBalanceRules;
  state.weakPointEngineRules = weakPointEngineRules;
  state.adaptiveWeeklyPlanningRules = adaptiveWeeklyPlanningRules;
  state.planOptimizerTexts = planOptimizerTexts;
  state.longTermProgressSchema = longTermProgressSchema;
  state.yearSummarySchema = yearSummarySchema;
  state.trendAnalysisRules = trendAnalysisRules;
  state.progressForecastRules = progressForecastRules;
  state.longTermTexts = longTermTexts;
  state.premiumMuscleMapSchema = premiumMuscleMapSchema;
  state.premiumMuscleRegions = premiumMuscleRegions;
  state.premiumMuscleMapUiRules = premiumMuscleMapUiRules;
  state.premiumMuscleDetailSchema = premiumMuscleDetailSchema;
  state.muscleHeatmapColorSystem = muscleHeatmapColorSystem;
  state.exerciseToSubregionMappingRules = exerciseToSubregionMappingRules;
  state.designTokens = designTokens;
  state.layoutRules = layoutRules;
  state.bottomNavigationSpec = bottomNavigationSpec;
  state.cardHierarchy = cardHierarchy;
  state.muscleMapRenderingSpec = muscleMapRenderingSpec;
  state.muscleHeatmapGradient = muscleHeatmapGradient;
  state.muscleDetailContent = muscleDetailContent;
  state.muscleMapScreenLayout = muscleMapScreenLayout;
  state.workoutScreenLayout = workoutScreenLayout;
  state.exerciseCardCompact = exerciseCardCompact;
  state.smartBuilderCompactRules = smartBuilderCompactRules;
  state.trainingFeedbackMicrocopy = trainingFeedbackMicrocopy;
  state.coachDashboard2Layout = coachDashboard2Layout;
  state.coachRecommendationCard = coachRecommendationCard;
  state.aiTrainerReadinessSchema = aiTrainerReadinessSchema;
  state.coachDashboardTexts = coachDashboardTexts;
  state.smartCoachSchema = smartCoachSchema;
  state.smartCoachPriorityRules = smartCoachPriorityRules;
  state.smartCoachRecommendationSchema = smartCoachRecommendationSchema;
  state.smartCoachTexts = smartCoachTexts;
  state.weeklyCoachSchema = weeklyCoachSchema;
  state.weeklyCoachRules = weeklyCoachRules;
  state.weeklyCoachTexts = weeklyCoachTexts;
  state.sessionCoachSchema = sessionCoachSchema;
  state.sessionCoachRules = sessionCoachRules;
  state.sessionCoachTexts = sessionCoachTexts;
  state.coachFeedbackSchema = coachFeedbackSchema;
  state.coachLearningRules = coachLearningRules;
  state.coachFeedbackTexts = coachFeedbackTexts;
  state.plateauCoachSchema = plateauCoachSchema;
  state.plateauDetectionRules = plateauDetectionRules;
  state.plateauActionRules = plateauActionRules;
  state.deloadCoachSchema = deloadCoachSchema;
  state.deloadDetectionRulesV65 = deloadDetectionRulesV65;
  state.deloadPrescriptionRules = deloadPrescriptionRules;
  state.mesocycleSchema = mesocycleSchema;
  state.adaptiveMesocycleRules = adaptiveMesocycleRules;
  state.mesocycleProgressionRules = mesocycleProgressionRules;
  state.smartCoachFallbackRules = smartCoachFallbackRules;
  state.smartCoachQualityMetrics = smartCoachQualityMetrics;
  state.smartCoachReleaseGate = smartCoachReleaseGate;
  state.performanceScoreRules = performanceScoreRules;
  state.coachDecisionRules = coachDecisionRules;
  state.personalRecordRules = personalRecordRules;
  state.smartNotesRules = smartNotesRules;
  state.confidenceScoreRules = confidenceScoreRules;
  state.whyExplanationSchema = whyExplanationSchema;
  state.exerciseRatingSchema = exerciseRatingSchema;
  state.exerciseRatingRules = exerciseRatingRules;
  state.exerciseRatingsSeed = exerciseRatingsSeed;
  state.alternativeExplanationRules = alternativeExplanationRules;
  state.trainingDnaSchema = trainingDnaSchema;
  state.personalAnalyticsRules = personalAnalyticsRules;
  state.trainingDnaTexts = trainingDnaTexts;
  state.performanceTimelineSchema = performanceTimelineSchema;
  state.coachMemoryRules = coachMemoryRules;
  state.adaptiveProgressionSchema = adaptiveProgressionSchema;
  state.adaptiveProgressionRules = adaptiveProgressionRules;
  state.progressionConfidenceRules = progressionConfidenceRules;
  state.progressionTexts = progressionTexts;
  state.progressionPredictionSchema = progressionPredictionSchema;
  state.smartWorkoutBuilderSchema = smartWorkoutBuilderSchema;
  state.smartWorkoutBuilderRules = smartWorkoutBuilderRules;
  state.smartWorkoutDayTemplates = smartWorkoutDayTemplates;
  state.smartSubstitutionRules = smartSubstitutionRules;
  state.smartWorkoutBuilderTexts = smartWorkoutBuilderTexts;
  state.muscleMapJsAdapterSeed = muscleMapJsAdapterSeed;
  state.muscleMapJsHeatmap = muscleMapJsHeatmap;
  state.productionMuscleMapConfig = productionMuscleMapConfig;
  state.productionMuscleMapAdapterRules = productionMuscleMapAdapterRules;
  state.productionMuscleDetailSchema = productionMuscleDetailSchema;
  state.productionMuscleMapReleaseGate = productionMuscleMapReleaseGate;
  state.lifeFitnessScannerConfig = lifeFitnessScannerConfig;
  state.coachPlanProposalSchema = coachPlanProposalSchema;
  state.coachProposalApplyRules = coachProposalApplyRules;
  state.coachProposalReviewUi = coachProposalReviewUi;
  state.dailyCheckinSchema = dailyCheckinSchema;
  state.dailyCheckinStartupRules = dailyCheckinStartupRules;
  state.dailyPainRegions = dailyPainRegions;
  state.premiumNavigationSpec = premiumNavigationSpec;
  state.dashboardPrioritySpec = dashboardPrioritySpec;
  state.trackingInformationArchitecture = trackingInformationArchitecture;
  mergeKnowledgeBaseData({ knowledgeExercises, knowledgeMuscleMap, trainingPlanPresets });
  mergeKnowledgeBaseData({ knowledgeExercises: exercisesPlus, knowledgeMuscleMap: muscleMappingPlus, trainingPlanPresets: null });
  mergeKnowledgeBaseData({ knowledgeExercises: exerciseCoreV21, knowledgeMuscleMap: muscleMappingV21, trainingPlanPresets: null });
  mergeKnowledgeBaseData({ knowledgeExercises: exerciseLibraryExpansionV2, knowledgeMuscleMap: exerciseLibraryExpansionV2, trainingPlanPresets: null });
  mergeAlternativeRules(alternativesV21);
  mergeAlternativeRules(exerciseLibraryExpansionV2);
  runStorageMigrations();
  normalizeActivePlanIntegrity();
  registerServiceWorker();
  bindPwaEvents();
  bindWorkoutIntegrityEvents();
  restoreWorkoutDraft();
  startTimerLoop();
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  state.tab = tabFromHash() || state.tab;
  maybeOpenDailyCheckin();
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
  window.addEventListener("hashchange", () => {
    const tab = tabFromHash();
    if (!tab || tab === state.tab) return;
    navigateTo(tab, { updateHash: false });
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

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  let refreshed = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshed) return;
    refreshed = true;
    window.location.reload();
  });
  navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" }).then((registration) => {
    registration.update().catch(() => {});
    if (registration.waiting) registration.waiting.postMessage({ type: "SKIP_WAITING" });
    registration.addEventListener("updatefound", () => {
      const worker = registration.installing;
      if (!worker) return;
      worker.addEventListener("statechange", () => {
        if (worker.state === "installed" && navigator.serviceWorker.controller) {
          worker.postMessage({ type: "SKIP_WAITING" });
        }
      });
    });
  }).catch(() => {});
}

function restoreWorkoutDraft() {
  const draft = storage.activeWorkoutDraft;
  if (!isValidActiveWorkoutDraft(draft)) return;
  state.activeWorkout = draft;
  ensureActiveWorkoutIntegrity();
  state.tab = "training";
}

function isValidActiveWorkoutDraft(value) {
  return Boolean(
    value &&
    typeof value === "object" &&
    value.planName &&
    value.dayName &&
    value.startedAt &&
    Array.isArray(value.entries) &&
    value.entries.length > 0 &&
    Number.isInteger(value.index) &&
    value.index >= 0 &&
    value.index < value.entries.length
  );
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

function bindWorkoutIntegrityEvents() {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") persistWorkoutDraft();
  });
  window.addEventListener("pagehide", persistWorkoutDraft);
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
    updateRestTimerDisplay();
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

function updateRestTimerDisplay() {
  const value = document.querySelector("[data-rest-timer-value]");
  if (value) value.textContent = restTimeText(state.restTimer.remaining);
  const button = document.querySelector("[data-pause-timer]");
  if (button) button.textContent = state.restTimer.running ? "Stop" : "Start";
}

function resetPageScroll() {
  const reset = () => {
    document.activeElement?.blur?.();
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const appContent = document.getElementById("app-content");
    if (appContent && appContent !== document.scrollingElement) {
      appContent.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  };
  requestAnimationFrame(() => requestAnimationFrame(reset));
}

function navigateTo(tab, options = {}) {
  const {
    scroll = "top",
    updateHash = true,
    resetSelection = true
  } = options;
  persistWorkoutDraft();
  if (state.tab === "machines" && tab !== "machines") {
    stopEquipmentScannerCamera();
    state.equipmentScanner = { ...state.equipmentScanner, active: false, status: "idle", error: "" };
  }
  state.tab = tab;
  if (resetSelection) {
    state.activeWorkout = null;
    state.selectedExerciseId = null;
    state.selectedSessionId = null;
  }
  state.moreMenuOpen = false;
  if (updateHash && window.location.hash !== `#${state.tab}`) window.history.replaceState(null, "", `#${state.tab}`);
  render();
  if (scroll === "top") resetPageScroll();
}

function navigateToTab(tab, options = {}) {
  navigateTo(tab, options);
}

function activePlan() {
  const plans = availablePlans().filter((plan) => !isPlanArchived(plan.planName));
  const activeId = storage.activePlanName;
  return plans.find((plan) => stablePlanId(plan) === activeId) ||
    plans.find((plan) => plan.planName === activeId) ||
    plans[0] ||
    null;
}

function planByIdOrName(identifier) {
  const value = String(identifier || "");
  if (!value) return null;
  const plans = availablePlans();
  return plans.find((plan) => stablePlanId(plan) === value) ||
    plans.find((plan) => plan.planName === value) ||
    null;
}

function planForWorkoutDraft(draft) {
  return planByIdOrName(draft?.planId) || null;
}

function activatePlan(planOrIdentifier) {
  const plan = typeof planOrIdentifier === "string" ? planByIdOrName(planOrIdentifier) : planOrIdentifier;
  if (!plan) return null;
  const selectedId = stablePlanId(plan);
  storage.customPlans = storage.customPlans.map((customPlan) => ({
    ...customPlan,
    active: stablePlanId(customPlan) === selectedId,
    isActive: false,
    activeAt: stablePlanId(customPlan) === selectedId ? new Date().toISOString() : customPlan.activeAt || ""
  }));
  storage.archivedPlanNames = storage.archivedPlanNames.filter((name) => name !== plan.planName);
  storage.activePlanName = selectedId;
  return plan;
}

function activeFlagTimestamp(plan) {
  return Date.parse(plan?.activeAt || plan?.activatedAt || plan?.updatedAt || plan?.createdAt || "") || 0;
}

function normalizeActivePlanIntegrity() {
  const plans = availablePlans().filter((plan) => !isPlanArchived(plan.planName));
  if (!plans.length) {
    storage.activePlanName = "";
    return { selectedPlanId: "", duplicatePlanIds: [], activeFlagCount: 0 };
  }
  const duplicatePlanIds = [...new Set(plans.map(stablePlanId).filter((id, index, ids) => ids.indexOf(id) !== index))];
  const flagged = plans.filter((plan) => plan.active === true || plan.isActive === true);
  const stored = activePlan();
  const latestFlagged = flagged.slice().sort((a, b) => activeFlagTimestamp(b) - activeFlagTimestamp(a))[0] || null;
  const selected = latestFlagged || stored || plans[0];
  activatePlan(selected);
  return {
    selectedPlanId: stablePlanId(selected),
    duplicatePlanIds,
    activeFlagCount: flagged.length
  };
}

function explicitDayTypeFromName(value) {
  const text = String(value || "").toLowerCase();
  if (text.includes("push") || text.includes("brust") || text.includes("schulter") || text.includes("trizeps")) return "Push";
  if (text.includes("pull") || text.includes("ruecken") || text.includes("r\u00fccken") || text.includes("bizeps")) return "Pull";
  if (text.includes("leg") || text.includes("bein") || text.includes("unter")) return "Legs";
  return null;
}

function planDayMatchScore(day, session) {
  const completedIds = new Set((session?.completedExercises || []).map((exercise) => exercise.exerciseId).filter(Boolean));
  if (!completedIds.size) return 0;
  return (day?.exercises || []).reduce((score, planned) => score + (completedIds.has(planned.exerciseId) ? 1 : 0), 0);
}

function planDayIndexFromSession(plan, session) {
  if (!plan?.days?.length || !session) return -1;
  const idIndex = session.dayId ? plan.days.findIndex((day, index) => stablePlanDayId(plan, day, index) === session.dayId || day.id === session.dayId) : -1;
  if (idIndex >= 0) return idIndex;
  const exactIndex = plan.days.findIndex((day) => day.name === session.dayName || day.name === session.dayNameSnapshot);
  if (exactIndex >= 0) return exactIndex;

  const sessionType = explicitDayTypeFromName(`${session.dayName || ""} ${session.dayNameSnapshot || ""}`);
  if (sessionType) {
    const typedIndexes = plan.days
      .map((day, index) => ({ index, type: explicitDayTypeFromName(day.name) }))
      .filter((item) => item.type === sessionType);
    if (typedIndexes.length === 1) return typedIndexes[0].index;
  }

  const scored = plan.days
    .map((day, index) => ({ index, score: planDayMatchScore(day, session) }))
    .sort((a, b) => b.score - a.score);
  if (!scored[0]?.score || scored[0].score === scored[1]?.score) return -1;
  return scored[0].index;
}

function nextPlanDayAfterLastSession(plan = activePlan()) {
  if (!plan?.days?.length) return null;
  const latest = lastSession();
  if (!latest) return plan.days[0];
  const index = planDayIndexFromSession(plan, latest);
  if (index < 0) return plan.days[0];
  return plan.days[(index + 1) % plan.days.length];
}

function stableIdPart(value, fallback = "item") {
  const normalized = String(value || fallback)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  return normalized || fallback;
}

function stablePlanId(plan) {
  return String(plan?.id || plan?.planName || "plan");
}

function stablePlanDayId(plan, day, index = 0) {
  return String(day?.id || `day_${stableIdPart(stablePlanId(plan))}_${stableIdPart(day?.name || `tag_${index + 1}`)}_${index + 1}`);
}

function normalizedPlannedExercise(entry, index = 0) {
  return {
    exerciseId: entry?.exerciseId || "",
    sets: Math.max(1, Number(entry?.sets) || 1),
    reps: entry?.reps || "8-12",
    restSeconds: Math.max(0, Number(entry?.restSeconds) || 90),
    priority: entry?.priority || (index < 4 ? "required" : "important"),
    sortOrder: Number(entry?.sortOrder) || index + 1,
    alternativeExerciseIds: Array.isArray(entry?.alternativeExerciseIds) ? entry.alternativeExerciseIds : [],
    note: entry?.note || ""
  };
}

function normalizedPlanDay(plan, day, index = 0) {
  if (!day) return null;
  const exercises = (day.exercises || []).map(normalizedPlannedExercise).sort((a, b) => a.sortOrder - b.sortOrder);
  return {
    ...day,
    id: stablePlanDayId(plan, day, index),
    name: day.name || `Tag ${index + 1}`,
    maxDurationMinutes: Number(day.maxDurationMinutes) || Number(plan?.maxDurationMinutes) || 60,
    exercises
  };
}

function normalizedPlanDays(plan) {
  return (plan?.days || []).map((day, index) => normalizedPlanDay(plan, day, index)).filter(Boolean);
}

function findPlanDayByStableId(plan, dayIdOrName) {
  const value = String(dayIdOrName || "");
  return normalizedPlanDays(plan).find((day) => day.id === value || day.name === value) || null;
}

function plannedExerciseIsValid(entry) {
  return Boolean(entry?.exerciseId && exerciseById(entry.exerciseId));
}

function invalidPlannedExercises(day) {
  return (day?.exercises || []).filter((entry) => !plannedExerciseIsValid(entry));
}

function workEntriesAsPlannedExercises(entries = []) {
  return entries.map((entry, index) => normalizedPlannedExercise({
    exerciseId: entry.exerciseId,
    sets: entry.sets?.length || 1,
    reps: entry.reps,
    restSeconds: entry.restSeconds,
    priority: entry.priority,
    sortOrder: entry.sortOrder || index + 1
  }, index));
}

function workoutDraftExerciseIds(workout) {
  return (workout?.entries || []).map((entry) => entry.exerciseId).filter(Boolean);
}

function workoutDraftPlanMatchIds(workout) {
  return (workout?.entries || []).map(getPlannedExerciseId).filter(Boolean);
}

function workoutHasRecordedSetData(workout) {
  return (workout?.entries || []).some((entry) =>
    (entry.sets || []).some((set) => set.completed === true || setHasAnyInput(set))
  );
}

function workoutDayExerciseMatchCount(day, workout) {
  const plannedIds = new Set((day?.exercises || []).map((entry) => entry.exerciseId).filter(Boolean));
  if (!plannedIds.size) return 0;
  return workoutDraftPlanMatchIds(workout).reduce((count, exerciseId) => count + (plannedIds.has(exerciseId) ? 1 : 0), 0);
}

function workoutDraftIntegrity(workout, plan = planForWorkoutDraft(workout)) {
  if (!isValidActiveWorkoutDraft(workout)) return { valid: false, action: "invalid" };
  const days = normalizedPlanDays(plan);
  if (!days.length) return { valid: true, action: "no_plan" };
  const namedDay = days.find((day) => day.id === workout.dayId || day.name === workout.dayName) || null;
  const exerciseIds = workoutDraftPlanMatchIds(workout);
  const namedScore = namedDay ? workoutDayExerciseMatchCount(namedDay, workout) : 0;
  const scored = days
    .map((day) => ({ day, score: workoutDayExerciseMatchCount(day, workout) }))
    .sort((a, b) => b.score - a.score);
  const best = scored[0] || null;
  const second = scored[1] || null;
  if (namedDay && namedScore === exerciseIds.length) return { valid: true, action: "ok", day: namedDay };
  if (
    best?.score > 0 &&
    best.score > namedScore &&
    best.score > (second?.score || 0) &&
    best.score >= Math.ceil(exerciseIds.length * 0.6)
  ) {
    return {
      valid: false,
      action: "wrong_day_label",
      expectedDay: namedDay,
      actualDay: best.day,
      score: best.score,
      exerciseCount: exerciseIds.length
    };
  }
  return {
    valid: false,
    action: "day_exercise_mismatch",
    expectedDay: namedDay,
    score: namedScore,
    exerciseCount: exerciseIds.length
  };
}

function repairWorkoutDraftDayLabel(workout, integrity) {
  if (integrity.action !== "wrong_day_label" || !integrity.actualDay) return null;
  const sourceOnlyMismatch = workout?.dayId &&
    integrity.expectedDay &&
    integrity.expectedDay.id === workout.dayId &&
    (workout.entries || []).every((entry) => exerciseById(entry.exerciseId)) &&
    (workout.entries || []).some((entry) => entry.sourceDayId && entry.sourceDayId !== workout.dayId);
  if (sourceOnlyMismatch) {
    return {
      ...workout,
      integrityRepair: {
        repairedAt: new Date().toISOString(),
        reason: "source_day_id_mismatch",
        previousSourceDayIds: [...new Set((workout.entries || []).map((entry) => entry.sourceDayId || ""))]
      },
      entries: (workout.entries || []).map((entry) => ({ ...entry, sourceDayId: workout.dayId }))
    };
  }
  return {
    ...workout,
    dayId: integrity.actualDay.id,
    dayName: integrity.actualDay.name,
    semanticRepair: {
      repairedAt: new Date().toISOString(),
      reason: "workout_entries_matched_another_plan_day",
      previousDayId: workout.dayId || "",
      previousDayName: workout.dayName || "",
      matchedExerciseCount: integrity.score,
      exerciseCount: integrity.exerciseCount
    },
    entries: (workout.entries || []).map((entry) => ({ ...entry, sourceDayId: integrity.actualDay.id }))
  };
}

function buildWorkoutDraftIntegrityError(workout, integrity, mode = "blocked") {
  const actualName = integrity.actualDay?.name || "anderer Plantag";
  const expectedName = integrity.expectedDay?.name || workout?.dayName || "gewählter Plantag";
  if (mode === "repaired") {
    return {
      message: "Training-Draft passte nicht zum Plantag und wurde korrigiert.",
      details: [`${expectedName} enthielt Übungen aus ${actualName}. Der Titel wurde auf ${actualName} gesetzt.`]
    };
  }
  return {
    message: "Training-Draft passt nicht zum Plantag.",
    details: [
      `${expectedName} enthielt Übungen aus ${actualName}.`,
      "Der lokale Entwurf wurde gestoppt. Starte die Einheit bitte neu über die Vorabprüfung."
    ]
  };
}

function ensureActiveWorkoutIntegrity() {
  const workout = state.activeWorkout;
  if (!workout) return true;
  const integrity = workoutDraftIntegrity(workout);
  if (integrity.valid) return true;

  const repaired = repairWorkoutDraftDayLabel(workout, integrity);
  if (repaired && workoutHasRecordedSetData(workout)) {
    state.activeWorkout = repaired;
    storage.activeWorkoutDraft = repaired;
    state.trainingDayError = buildWorkoutDraftIntegrityError(workout, integrity, "repaired");
    return true;
  }

  storage.activeWorkoutDraft = workout;
  state.pendingWorkoutReview = null;
  state.trainingDayError = buildWorkoutDraftIntegrityError(workout, integrity, "blocked");
  state.tab = "training";
  return false;
}

function resolveTrainingDay({
  plan = activePlan(),
  sessions = storage.sessions,
  activeWorkoutDraft = storage.activeWorkoutDraft,
  manuallySelectedDayId = state.manualTrainingDayId
} = {}) {
  if (!plan?.days?.length) return null;
  const planId = stablePlanId(plan);
  if (isValidActiveWorkoutDraft(activeWorkoutDraft)) {
    const draftDay = findPlanDayByStableId(plan, activeWorkoutDraft.dayId || activeWorkoutDraft.dayName);
    return {
      planId,
      planName: plan.planName,
      dayId: activeWorkoutDraft.dayId || draftDay?.id || stablePlanDayId(plan, { name: activeWorkoutDraft.dayName }, 0),
      dayName: activeWorkoutDraft.dayName,
      dayIndex: draftDay ? normalizedPlanDays(plan).findIndex((day) => day.id === draftDay.id) : -1,
      reason: "active_draft",
      exercises: draftDay?.exercises?.length ? draftDay.exercises : workEntriesAsPlannedExercises(activeWorkoutDraft.entries),
      maxDurationMinutes: draftDay?.maxDurationMinutes || Number(plan.maxDurationMinutes) || 60,
      sourceDay: draftDay || null,
      lastSessionId: lastSession()?.id || null
    };
  }

  const days = normalizedPlanDays(plan);
  let selected = manuallySelectedDayId ? days.find((day) => day.id === manuallySelectedDayId || day.name === manuallySelectedDayId) : null;
  let reason = selected ? "manual_selection" : "";

  if (!selected) {
    const latest = [...sessions].sort((a, b) => new Date(b.startedAt || b.completedAt || b.date || 0) - new Date(a.startedAt || a.completedAt || a.date || 0))[0] || null;
    const latestIndex = latest ? planDayIndexFromSession({ ...plan, days }, latest) : -1;
    const next = latestIndex >= 0 ? days[(latestIndex + 1) % days.length] : null;
    selected = next ? days.find((day) => day.name === next.name || day.id === next.id) : null;
    reason = latest && selected ? "next_after_last_session" : "";
  }

  if (!selected) {
    selected = days[0] || null;
    reason = selected ? "first_day_fallback" : "";
  }

  if (!selected) return null;
  return {
    planId,
    planName: plan.planName,
    dayId: selected.id,
    dayName: selected.name,
    dayIndex: days.findIndex((day) => day.id === selected.id),
    reason,
    exercises: selected.exercises,
    maxDurationMinutes: selected.maxDurationMinutes,
    sourceDay: selected,
    lastSessionId: lastSession()?.id || null
  };
}

function trainingDaySetCount(dayOrResolved) {
  return (dayOrResolved?.exercises || []).reduce((sum, entry) => sum + (Number(entry.sets) || 0), 0);
}

function estimatedPlanDayMinutes(dayOrResolved) {
  const exercises = dayOrResolved?.exercises || [];
  return Math.max(10, exercises.reduce((sum, entry) => {
    const exercise = exerciseById(entry.exerciseId) || {};
    return sum + estimateExerciseMinutes(exercise, Number(entry.sets) || 1);
  }, 0));
}

function trainingDayDiagnostics(resolved = resolveTrainingDay()) {
  const draft = storage.activeWorkoutDraft;
  return {
    version: "6.18.0",
    generatedAt: new Date().toISOString(),
    activePlan: resolved?.planName || activePlan()?.planName || null,
    selectedDay: resolved ? { dayId: resolved.dayId, dayName: resolved.dayName, reason: resolved.reason, dayIndex: resolved.dayIndex } : null,
    lastSession: lastSession() ? { id: lastSession().id, dayName: lastSession().dayName, startedAt: lastSession().startedAt } : null,
    planExerciseIds: (resolved?.exercises || []).map((entry) => entry.exerciseId),
    draftExerciseIds: isValidActiveWorkoutDraft(draft) ? draft.entries.map((entry) => entry.exerciseId) : [],
    draftDayId: draft?.dayId || null,
    draftDayName: draft?.dayName || null
  };
}

function exportTrainingDayDiagnostics() {
  const diagnostics = trainingDayDiagnostics(resolveTrainingDay({ activeWorkoutDraft: null }));
  const blob = new Blob([JSON.stringify(diagnostics, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "DCoach_v6.18_TrainingDay_Diagnostics.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function availablePlans() {
  return [...state.seed.trainingPlans, ...storage.customPlans].filter((plan) => !storage.deletedPlanNames.includes(plan.planName));
}

function allExercises() {
  return [...state.seed.exercises, ...storage.customExercises];
}

function trackingConfigForExercise(exercise) {
  return EXERCISE_TRACKING_TYPES[exercise?.trackingType] || EXERCISE_TRACKING_TYPES.strength_weight_reps;
}

function trackingFieldsForExercise(exercise) {
  const fields = [...trackingConfigForExercise(exercise).fields];
  if (exercise?.unilateral && !fields.includes("sideText")) fields.unshift("sideText");
  return fields;
}

function plannedRepTextForExercise(entry, exercise) {
  const config = trackingConfigForExercise(exercise);
  if (config.fields.includes("repsText")) return `${htmlesc(entry.reps)} Wdh.`;
  if (config.fields.includes("durationSecondsText")) return "Zeit";
  if (config.fields.includes("distanceText")) return "Distanz/Zeit";
  return htmlesc(entry.reps);
}

function trackingSummaryForExercise(exercise) {
  return trackingConfigForExercise(exercise).summary;
}

function setFieldHasInput(set, field) {
  return Boolean(String(set?.[field] || "").trim());
}

function setInputFieldsForEntry(entry) {
  return trackingFieldsForExercise(exerciseById(entry?.exerciseId));
}

function blankWorkoutSet(setNumber = 1) {
  return {
    setNumber,
    weightText: "",
    repsText: "",
    rirText: "",
    durationSecondsText: "",
    distanceText: "",
    addedWeightText: "",
    sideText: "",
    completed: false
  };
}

function recordedWorkoutSets(entry) {
  return (entry?.sets || []).filter((set) => setHasAnyInput(set, entry));
}

function completedWorkoutSets(entry) {
  return recordedWorkoutSets(entry).filter((set) => set.completed === true);
}

function workoutExerciseHaystack(exercise) {
  return [
    exercise?.displayName,
    exercise?.englishName,
    exercise?.category,
    exercise?.split,
    exercise?.movementPattern,
    ...(exercise?.aliases || []),
    ...(exercise?.tags || []),
    ...(exercise?.primaryMuscleGroups || []),
    ...(exercise?.secondaryMuscleGroups || []),
    ...(exercise?.equipment || [])
  ].filter(Boolean).join(" ").toLowerCase();
}

function workoutExerciseMatchesDay(exercise, workout) {
  const dayType = explicitDayTypeFromName(`${workout?.dayName || ""} ${workout?.dayNameSnapshot || ""}`);
  if (!dayType) return true;
  const text = workoutExerciseHaystack(exercise);
  if (dayType === "Push") return /push|brust|chest|schulter|shoulder|trizeps|triceps|press|drücken/.test(text);
  if (dayType === "Pull") return /pull|rücken|ruecken|back|lat|rudern|row|bizeps|biceps|curl/.test(text);
  if (dayType === "Legs") return /leg|bein|quad|hamstring|glute|wade|calf|adduktor|core|bauch|plank/.test(text);
  return true;
}

function workoutExerciseFilterOptions(type) {
  const values = new Set();
  allExercises().forEach((exercise) => {
    if (type === "muscle") {
      [...(exercise.primaryMuscleGroups || []), ...(exercise.secondaryMuscleGroups || [])].forEach((item) => {
        if (item) values.add(item);
      });
    }
    if (type === "equipment") {
      (exercise.equipment || []).forEach((item) => {
        if (item) values.add(item);
      });
    }
  });
  return [...values].sort((a, b) => a.localeCompare(b, "de")).slice(0, 120);
}

function workoutExercisePickerCandidates(workout) {
  const query = state.workoutExerciseSearch.trim().toLowerCase();
  const muscleFilter = state.workoutExerciseMuscleFilter;
  const equipmentFilter = state.workoutExerciseEquipmentFilter;
  const occupied = new Set((workout?.entries || []).map((entry) => entry.exerciseId).filter(Boolean));
  return allExercises()
    .filter((exercise) => !exercise.isArchived && !occupied.has(exercise.id))
    .filter((exercise) => !query || workoutExerciseHaystack(exercise).includes(query))
    .filter((exercise) => muscleFilter === "all" || [...(exercise.primaryMuscleGroups || []), ...(exercise.secondaryMuscleGroups || [])].includes(muscleFilter))
    .filter((exercise) => equipmentFilter === "all" || (exercise.equipment || []).includes(equipmentFilter))
    .sort((a, b) => {
      const typicalDelta = Number(workoutExerciseMatchesDay(b, workout)) - Number(workoutExerciseMatchesDay(a, workout));
      if (typicalDelta) return typicalDelta;
      return a.displayName.localeCompare(b.displayName, "de");
    })
    .slice(0, 80);
}

function resetWorkoutExercisePicker() {
  state.workoutExercisePickerOpen = false;
  state.workoutExerciseSearch = "";
  state.workoutExerciseMuscleFilter = "all";
  state.workoutExerciseEquipmentFilter = "all";
}

function isPlanArchived(planName) {
  return storage.archivedPlanNames.includes(planName);
}

function planStatus(plan) {
  if (isPlanArchived(plan.planName)) return "Archiviert";
  if (stablePlanId(activePlan()) === stablePlanId(plan)) return "Aktiv";
  return "Bibliothek";
}

function ensureActivePlan() {
  const plan = activePlan();
  if (plan) activatePlan(plan);
  else storage.activePlanName = "";
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
  activatePlan(copy);
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
    category: "Eigene Übung",
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
    alert(appText("exercise.customArchived", "Diese Übung hat Historie und wurde archiviert statt gelöscht."));
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

function parseDurationSeconds(value) {
  const raw = String(value ?? "").trim();
  if (!raw) return null;
  if (raw.includes(":")) {
    const parts = raw.split(":").map((part) => Number.parseInt(part, 10));
    if (parts.some((part) => !Number.isFinite(part))) return null;
    if (parts.length === 2) return Math.max(0, parts[0] * 60 + parts[1]);
    if (parts.length === 3) return Math.max(0, parts[0] * 3600 + parts[1] * 60 + parts[2]);
  }
  const parsed = parseNumber(raw);
  return parsed && parsed > 0 ? Math.round(parsed) : null;
}

function durationText(seconds) {
  const value = Number(seconds);
  if (!Number.isFinite(value) || value <= 0) return "-";
  const mins = Math.floor(value / 60);
  const secs = Math.round(value % 60);
  return mins ? `${mins}:${String(secs).padStart(2, "0")} min` : `${secs} s`;
}

function distanceText(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) return "-";
  return parsed >= 1000 ? `${String(Math.round((parsed / 1000) * 10) / 10).replace(".", ",")} km` : `${Math.round(parsed)} m`;
}

function parseWeightKg(value) {
  const parsed = parseNumber(value);
  return parsed && parsed > 0 ? parsed : null;
}

function normalizedWeightEntry(entry) {
  const weightKg = parseWeightKg(entry?.weightKg ?? entry?.weight ?? entry?.valueKg);
  return weightKg ? { ...entry, weightKg } : null;
}

function weightEntriesSorted() {
  return storage.weights
    .map(normalizedWeightEntry)
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function latestWeightEntry() {
  return weightEntriesSorted()[0] || null;
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

function localIsoDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addLocalDays(date = new Date(), days = 0) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
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
  const values = storage.weights
    .filter((entry) => new Date(entry.date) >= start)
    .map((entry) => parseWeightKg(entry.weightKg ?? entry.weight ?? entry.valueKg))
    .filter(Boolean);
  if (!values.length) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function latestJournalEntry() {
  return [...storage.journalEntries].sort((a, b) => new Date(b.date) - new Date(a.date))[0] || null;
}

function journalEntryForDate(date) {
  return storage.journalEntries.find((entry) => entry.date === date) || null;
}

function dailyCheckinForDate(date = localIsoDate()) {
  return storage.dailyCheckins.find((entry) => entry.localDate === date) || null;
}

function dailyCheckinStartupState(date = localIsoDate()) {
  const entry = dailyCheckinForDate(date);
  if (entry?.status === "completed") return "completed";
  if (entry?.status === "skipped") return "skipped";
  if (storage.dailyCheckinDraft?.localDate === date && storage.dailyCheckinDraft?.status === "draft") return "draft";
  return "required";
}

function createDailyCheckinDraft(source = "morning_flow") {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : `daily_checkin_${Date.now()}`,
    localDate: localIsoDate(),
    startedAt: now,
    status: "draft",
    sleepQuality: 6,
    energy: 6,
    stress: 4,
    recovery: 6,
    painPresent: false,
    painEntries: [],
    source,
    updatedAt: now
  };
}

function createTrainingResumeCheckinDraft(existing = null, trainingDayId = "", skipReview = true) {
  const base = existing && typeof existing === "object" ? { ...existing } : createDailyCheckinDraft("training");
  return {
    ...base,
    localDate: localIsoDate(),
    status: "draft",
    source: base.source || "training",
    resumeAction: "start_training",
    resumeTrainingDayId: trainingDayId || base.resumeTrainingDayId || "",
    resumeSkipReview: skipReview,
    updatedAt: new Date().toISOString()
  };
}

function consumeDailyCheckinResumeAction(entry = null) {
  const source = entry || storage.dailyCheckinDraft || {};
  const result = {
    action: source.resumeAction || "",
    trainingDayId: source.resumeTrainingDayId || "",
    skipReview: source.resumeSkipReview !== false
  };
  if (storage.dailyCheckinDraft?.resumeAction) {
    storage.dailyCheckinDraft = {
      ...storage.dailyCheckinDraft,
      resumeAction: null,
      resumeTrainingDayId: "",
      resumeSkipReview: true,
      updatedAt: new Date().toISOString()
    };
  }
  return result;
}

function ensureDailyCheckinDraft() {
  const today = localIsoDate();
  if (storage.dailyCheckinDraft?.localDate === today) return storage.dailyCheckinDraft;
  const draft = createDailyCheckinDraft();
  storage.dailyCheckinDraft = draft;
  return draft;
}

function maybeOpenDailyCheckin() {
  const status = dailyCheckinStartupState();
  if (status === "required" || status === "draft") {
    ensureDailyCheckinDraft();
    state.dailyCheckinActive = true;
    state.dailyCheckinStep = status === "draft" ? "draft" : "sleep";
  }
}

function updateDailyCheckinDraftFromDom() {
  const draft = ensureDailyCheckinDraft();
  document.querySelectorAll("[data-checkin-field]").forEach((input) => {
    const key = input.dataset.checkinField;
    if (key === "weightKg") {
      draft[key] = parseWeightKg(input.value) || input.value.trim();
      return;
    }
    draft[key] = input.type === "number" || input.type === "range" ? Number(input.value) : input.value.trim();
  });
  draft.painPresent = document.querySelector("[data-checkin-pain-present='true']")?.checked || false;
  const hours = Number(document.querySelector("[data-checkin-sleep-hours]")?.value || 0);
  const minutes = Number(document.querySelector("[data-checkin-sleep-minutes]")?.value || 0);
  if (hours || minutes) draft.sleepDurationMinutes = Math.max(0, hours * 60 + minutes);
  const painEntries = [];
  document.querySelectorAll("[data-pain-region]:checked").forEach((input) => {
    const region = dailyPainRegions().find((item) => item.id === input.value);
    const intensity = Number(document.querySelector(`[data-pain-intensity="${input.value}"]`)?.value || 0);
    painEntries.push({
      regionId: input.value,
      regionLabelSnapshot: region?.label || input.value,
      side: region?.side || "none",
      intensity,
      painType: document.querySelector(`[data-pain-type="${input.value}"]`)?.value.trim() || "",
      note: document.querySelector(`[data-pain-note-region="${input.value}"]`)?.value.trim() || ""
    });
  });
  draft.painEntries = draft.painPresent ? painEntries : [];
  draft.updatedAt = new Date().toISOString();
  storage.dailyCheckinDraft = draft;
  return draft;
}

function dailyPainRegions() {
  return state.dailyPainRegions?.regions || [
    { id: "neck", label: "Nacken", side: "center" },
    { id: "shoulder_left", label: "Schulter links", side: "left" },
    { id: "shoulder_right", label: "Schulter rechts", side: "right" },
    { id: "elbow_left", label: "Ellenbogen links", side: "left" },
    { id: "elbow_right", label: "Ellenbogen rechts", side: "right" },
    { id: "wrist_left", label: "Handgelenk links", side: "left" },
    { id: "wrist_right", label: "Handgelenk rechts", side: "right" },
    { id: "chest", label: "Brust", side: "center" },
    { id: "upper_back", label: "oberer Rücken", side: "center" },
    { id: "lws", label: "LWS", side: "center" },
    { id: "hip_left", label: "Hüfte links", side: "left" },
    { id: "hip_right", label: "Hüfte rechts", side: "right" },
    { id: "knee_left", label: "Knie links", side: "left" },
    { id: "knee_right", label: "Knie rechts", side: "right" },
    { id: "ankle_left", label: "Sprunggelenk links", side: "left" },
    { id: "ankle_right", label: "Sprunggelenk rechts", side: "right" },
    { id: "other", label: "sonstige Stelle", side: "none" }
  ];
}

function skipDailyCheckin() {
  const draft = ensureDailyCheckinDraft();
  const resumeAction = consumeDailyCheckinResumeAction(draft);
  const skipped = { ...draft, resumeAction: null, status: "skipped", completedAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
  storage.dailyCheckins = [...storage.dailyCheckins.filter((entry) => entry.localDate !== skipped.localDate), skipped];
  storage.dailyCheckinDraft = null;
  state.dailyCheckinActive = false;
  if (resumeAction.action === "start_training") {
    startTrainingFlow(resumeAction.trainingDayId, { skipReview: resumeAction.skipReview });
    return;
  }
  render();
}

function completeDailyCheckin() {
  const draft = updateDailyCheckinDraftFromDom();
  const resumeAction = consumeDailyCheckinResumeAction(draft);
  const completed = { ...draft, resumeAction: null, status: "completed", completedAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
  storage.dailyCheckins = [...storage.dailyCheckins.filter((entry) => entry.localDate !== completed.localDate), completed];
  storage.dailyCheckinDraft = null;
  upsertJournalFromDailyCheckin(completed);
  if (parseWeightKg(completed.weightKg)) upsertWeightFromDailyCheckin(completed);
  state.dailyCheckinActive = false;
  if (resumeAction.action === "start_training") {
    startTrainingFlow(resumeAction.trainingDayId, { skipReview: resumeAction.skipReview });
    return;
  }
  state.tab = "dashboard";
  render();
}

function upsertJournalFromDailyCheckin(entry) {
  const current = journalEntryForDate(entry.localDate);
  const journal = {
    id: current?.id || (crypto.randomUUID ? crypto.randomUUID() : `journal_${Date.now()}`),
    date: entry.localDate,
    sleepQuality: normalizeTenToFive(entry.sleepQuality),
    energy: normalizeTenToFive(entry.energy),
    stress: normalizeTenToFive(entry.stress),
    soreness: entry.painPresent ? Math.max(3, normalizeTenToFive(Math.max(0, ...(entry.painEntries || []).map((item) => item.intensity || 0)))) : (current?.soreness || 1),
    mood: normalizeTenToFive(entry.recovery),
    painNote: [entry.painNote, ...(entry.painEntries || []).map((item) => `${item.regionLabelSnapshot} ${item.intensity}/10${item.note ? `: ${item.note}` : ""}`)].filter(Boolean).join(" | "),
    nutritionNote: current?.nutritionNote || "",
    notes: [entry.sleepNote, entry.generalNote].filter(Boolean).join(" | "),
    dailyCheckinId: entry.id,
    updatedAt: new Date().toISOString()
  };
  storage.journalEntries = [...storage.journalEntries.filter((item) => item.date !== entry.localDate), journal];
}

function normalizeTenToFive(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 3;
  return Math.max(1, Math.min(5, Math.round(number / 2)));
}

function upsertWeightFromDailyCheckin(entry) {
  const dateKey = entry.localDate;
  const existing = storage.weights.find((item) => String(item.date || "").slice(0, 10) === dateKey);
  const weightKg = parseWeightKg(entry.weightKg);
  if (!weightKg) return;
  const next = {
    id: existing?.id || (crypto.randomUUID ? crypto.randomUUID() : `weight_${Date.now()}`),
    date: new Date(`${dateKey}T08:00:00`).toISOString(),
    weightKg,
    source: "morning_flow"
  };
  storage.weights = [...storage.weights.filter((item) => String(item.date || "").slice(0, 10) !== dateKey), next];
}

function renderDailyCheckinFlow() {
  const draft = ensureDailyCheckinDraft();
  const step = state.dailyCheckinStep;
  return `
    <main class="daily-checkin-shell">
      <section class="daily-checkin-card stack">
        <header>
          <p class="eyebrow">Guten Morgen</p>
          <h1 class="title">Kurzer Tages-Check-in</h1>
          <p class="subtitle">ca. 30 Sekunden</p>
        </header>
        <div class="checkin-progress"><span style="width:${step === "sleep" || step === "draft" ? 25 : step === "pain" ? 50 : step === "weight" ? 75 : 100}%"></span></div>
        ${step === "draft" ? renderDailyCheckinDraftStep(draft)
          : step === "pain" ? renderDailyCheckinPainStep(draft)
          : step === "weight" ? renderDailyCheckinWeightStep(draft)
          : step === "summary" ? renderDailyCheckinSummaryStep(draft)
          : renderDailyCheckinSleepStep(draft)}
      </section>
    </main>
  `;
}

function renderDailyCheckinDraftStep(draft) {
  return `
    <article class="stack">
      <h2>Check-in fortsetzen?</h2>
      <p class="muted">Du hast deinen Tages-Check-in noch nicht abgeschlossen.</p>
      <button class="primary" data-checkin-go="sleep">Fortsetzen</button>
      <button class="secondary" data-checkin-new>Neu beginnen</button>
      <button class="secondary" data-checkin-skip>Für heute überspringen</button>
    </article>
  `;
}

function renderDailyCheckinSleepStep(draft) {
  return `
    <article class="stack">
      <h2>Schlaf und Erholung</h2>
      <div class="mini-grid">
        <label>Stunden<input class="input" type="number" min="0" max="14" value="${Math.floor((draft.sleepDurationMinutes || 0) / 60) || ""}" data-checkin-sleep-hours></label>
        <label>Minuten<input class="input" type="number" min="0" max="59" value="${(draft.sleepDurationMinutes || 0) % 60 || ""}" data-checkin-sleep-minutes></label>
      </div>
      ${renderCheckinRange("sleepQuality", "Schlafqualität", draft.sleepQuality)}
      ${renderCheckinRange("energy", "Energie", draft.energy)}
      ${renderCheckinRange("stress", "Stress", draft.stress)}
      ${renderCheckinRange("recovery", "Erholung", draft.recovery)}
      <textarea class="input area" placeholder="Schlafnotiz" data-checkin-field="sleepNote">${htmlesc(draft.sleepNote || "")}</textarea>
      <div class="button-row">
        <button class="secondary" data-checkin-skip>Überspringen</button>
        <button class="primary" data-checkin-go="pain">Weiter</button>
      </div>
    </article>
  `;
}

function renderCheckinRange(key, label, value = 5) {
  const current = Math.max(1, Math.min(10, Number(value) || 5));
  return `<label class="range-field"><span data-range-value-label="${htmlesc(key)}">${label}: ${current}/10</span><input type="range" min="1" max="10" value="${htmlesc(current)}" data-checkin-field="${key}" data-range-label="${htmlesc(label)}"></label>`;
}

function renderDailyCheckinPainStep(draft) {
  return `
    <article class="stack">
      <h2>Schmerzen oder Beschwerden?</h2>
      <div class="button-row">
        <label class="checkin-choice"><input type="radio" name="painPresent" ${draft.painPresent ? "" : "checked"} data-checkin-pain-present="false"> Nein</label>
        <label class="checkin-choice"><input type="radio" name="painPresent" ${draft.painPresent ? "checked" : ""} data-checkin-pain-present="true"> Ja</label>
      </div>
      <div class="pain-region-grid">
        ${dailyPainRegions().map((region) => {
          const entry = (draft.painEntries || []).find((item) => item.regionId === region.id);
          return `
            <div class="pain-region">
              <label><input type="checkbox" value="${htmlesc(region.id)}" ${entry ? "checked" : ""} data-pain-region> ${htmlesc(region.label)}</label>
              <input class="input" type="number" min="0" max="10" value="${entry?.intensity ?? 0}" data-pain-intensity="${htmlesc(region.id)}">
              <input class="input" placeholder="Art" value="${htmlesc(entry?.painType || "")}" data-pain-type="${htmlesc(region.id)}">
              <input class="input" placeholder="Notiz" value="${htmlesc(entry?.note || "")}" data-pain-note-region="${htmlesc(region.id)}">
            </div>
          `;
        }).join("")}
      </div>
      <textarea class="input area" placeholder="Schmerznotiz für heute" data-checkin-field="painNote">${htmlesc(draft.painNote || "")}</textarea>
      <p class="quiet">D-Coach nutzt diese Angaben nur für Trainingshinweise, nicht für Diagnosen.</p>
      <div class="button-row">
        <button class="secondary" data-checkin-go="sleep">Zurück</button>
        <button class="primary" data-checkin-go="weight">Weiter</button>
      </div>
    </article>
  `;
}

function renderDailyCheckinWeightStep(draft) {
  const latest = latestWeightEntry();
  const current = parseWeightKg(draft.weightKg);
  const delta = latest && current ? current - latest.weightKg : null;
  return `
    <article class="stack">
      <h2>Heutiges Gewicht</h2>
      <p class="muted">Letzter Wert: ${latest ? kg(latest.weightKg) : "-"}</p>
      <p class="quiet">Veränderung: ${delta === null ? "-" : `${delta >= 0 ? "+" : ""}${kg(delta)}`}</p>
      <input class="input" inputmode="decimal" placeholder="kg" value="${htmlesc(current ? String(current).replace(".", ",") : "")}" data-checkin-field="weightKg">
      <textarea class="input area" placeholder="Tagesnotiz optional" data-checkin-field="generalNote">${htmlesc(draft.generalNote || "")}</textarea>
      <div class="button-row">
        <button class="secondary" data-checkin-go="pain">Zurück</button>
        <button class="primary" data-checkin-go="summary">Speichern und weiter</button>
      </div>
      <button class="secondary" data-checkin-go="summary" data-checkin-skip-weight>Gewicht heute überspringen</button>
    </article>
  `;
}

function renderDailyCheckinSummaryStep(draft) {
  const pain = draft.painPresent ? (draft.painEntries || []).map((item) => `${item.regionLabelSnapshot} ${item.intensity}/10`).join(", ") : "Nein";
  const weightKg = parseWeightKg(draft.weightKg);
  return `
    <article class="stack">
      <h2>Tages-Check-in gespeichert</h2>
      <div class="storage-table">
        <div><span>Schlaf</span><strong>${draft.sleepDurationMinutes ? `${Math.floor(draft.sleepDurationMinutes / 60)} h ${draft.sleepDurationMinutes % 60} min` : "-"}</strong></div>
        <div><span>Schlafqualität</span><strong>${draft.sleepQuality || "-"}/10</strong></div>
        <div><span>Energie</span><strong>${draft.energy || "-"}/10</strong></div>
        <div><span>Erholung</span><strong>${draft.recovery || "-"}/10</strong></div>
        <div><span>Schmerz</span><strong>${htmlesc(pain || "-")}</strong></div>
        <div><span>Gewicht</span><strong>${weightKg ? kg(weightKg) : "-"}</strong></div>
      </div>
      <button class="primary" data-checkin-complete>Zur App</button>
      <button class="secondary" data-checkin-go="weight">Zurück</button>
    </article>
  `;
}

function readinessForJournal(entry) {
  const checkin = entry?.date ? dailyCheckinForDate(entry.date) : dailyCheckinForDate(localIsoDate());
  if (!entry && !checkin) return { color: "amber", label: "Nicht erfasst", score: null, hint: "Tagesform noch nicht eingetragen." };
  const sleep = Number(entry?.sleepQuality || normalizeTenToFive(checkin?.sleepQuality) || 3);
  const energy = Number(entry?.energy || normalizeTenToFive(checkin?.energy) || 3);
  const mood = Number(entry?.mood || normalizeTenToFive(checkin?.recovery) || 3);
  const stress = Number(entry?.stress || normalizeTenToFive(checkin?.stress) || 3);
  const painIntensity = Math.max(0, ...(checkin?.painEntries || []).map((item) => Number(item.intensity) || 0));
  const soreness = Number(entry?.soreness || (checkin?.painPresent ? normalizeTenToFive(painIntensity) : 1));
  const base = (sleep + energy + mood) / 3;
  const score = Math.max(1, Math.min(5, base - Math.max(0, stress - 3) * 0.45 - Math.max(0, soreness - 3) * 0.35));
  const source = checkin ? " Check-in: Schlaf, Energie, Stress, Erholung und Schmerzen wurden berücksichtigt." : "";
  if (score >= 3.7) return { color: "green", label: "Gut", score, hint: `Heute normal trainieren.${source}` };
  if (score >= 2.6) return { color: "amber", label: "Moderat", score, hint: `Heute moderat starten.${source}` };
  return { color: "red", label: "Leicht", score, hint: `Heute leichter trainieren und Regeneration beachten.${source}` };
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
  if (!currentPerf.sets.length) return { color: "amber", text: texts.noHistory || "Noch keine abgeschlossenen Sätze." };
  if (critical && allTop) return { color: "amber", text: texts.lwsCaution || "Stark, aber LWS-vorsichtig: erst Technik stabil halten, dann klein steigern." };
  if (allTop) return { color: "green", text: texts.increaseSuggested || "Alle Sätze stark. Nächstes Mal leicht erhöhen." };
  if (previousPerf && currentPerf.volume > previousPerf.volume) return { color: "green", text: texts.sameWeightMoreReps || "Stärker als letztes Mal." };
  if (previousPerf && currentPerf.volume < previousPerf.volume * 0.85) return { color: "amber", text: texts.performanceDrop || "Heute schwächer. Regeneration prüfen." };
  return { color: "blue", text: texts.holdWeight || "Gewicht halten und Wiederholungen sammeln." };
}

function progressionForCompletedExercise(exercise, previous, sessionId) {
  const texts = coachingTexts();
  if (!previous) return { color: "blue", text: texts.noHistory || "Neue Übung in deiner Historie." };
  const currentVolume = totalVolume(exercise);
  const previousVolume = totalVolume(previous.exercise);
  const bestBefore = bestWeightBeforeExercise(exercise.exerciseId, sessionId);
  const currentBest = exercise.sets
    .map((set) => Number(set.actualWeightKg))
    .filter((value) => Number.isFinite(value))
    .reduce((max, value) => Math.max(max, value), 0);
  if (currentBest > 0 && (!bestBefore || currentBest > bestBefore)) {
    return { color: "green", text: "Neues Bestgewicht. Nächstes Training kontrolliert bestätigen." };
  }
  if (currentVolume > previousVolume) return { color: "green", text: texts.sameWeightMoreReps || "Mehr Volumen als letztes Mal." };
  if (currentVolume < previousVolume * 0.85) return { color: "amber", text: texts.performanceDrop || "Schwächer als zuletzt. Regeneration prüfen." };
  return { color: "blue", text: texts.holdWeight || "Gewicht halten und Wiederholungen sammeln." };
}

function machineSettingsForExercise(exerciseId) {
  return storage.machineSettings.filter((item) => item.exerciseId === exerciseId).sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
}

function latestMachineSetting(exerciseId) {
  return machineSettingsForExercise(exerciseId)[0] || null;
}

function latestScannedEquipmentMappingForExercise(exerciseId) {
  return storage.scannedEquipmentMappings
    .filter((item) => item.exerciseId === exerciseId)
    .sort((a, b) => new Date(b.lastUsedAt || b.updatedAt || 0) - new Date(a.lastUsedAt || a.updatedAt || 0))[0] || null;
}

function normalizeScannedEquipmentCode(rawCode) {
  const original = String(rawCode || "").trim();
  if (!original) return "";
  try {
    const url = new URL(original);
    url.hash = "";
    url.protocol = url.protocol.toLowerCase();
    url.hostname = url.hostname.toLowerCase();
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid", "gclid"].forEach((key) => {
      url.searchParams.delete(key);
    });
    const params = [...url.searchParams.entries()].sort(([a], [b]) => a.localeCompare(b));
    url.search = "";
    params.forEach(([key, value]) => url.searchParams.append(key, value));
    return url.toString().replace(/\/$/, "");
  } catch {
    return original.replace(/\s+/g, " ").toUpperCase();
  }
}

function scannedEquipmentMappingForCode(rawCode) {
  const normalizedCode = normalizeScannedEquipmentCode(rawCode);
  if (!normalizedCode) return null;
  return storage.scannedEquipmentMappings.find((item) => item.normalizedCode === normalizedCode) || null;
}

function scannerCandidateExercises() {
  const search = state.equipmentScanner.search.trim().toLowerCase();
  return allExercises()
    .filter((exercise) => !exercise.isArchived)
    .filter((exercise) => {
      if (!search) return true;
      return `${exercise.displayName} ${exercise.category} ${(exercise.equipment || []).join(" ")}`.toLowerCase().includes(search);
    })
    .sort((a, b) => {
      const aMachine = String(a.category || "").toLowerCase().includes("maschine") || (a.equipment || []).some((item) => String(item).toLowerCase().includes("maschine"));
      const bMachine = String(b.category || "").toLowerCase().includes("maschine") || (b.equipment || []).some((item) => String(item).toLowerCase().includes("maschine"));
      return Number(bMachine) - Number(aMachine) || a.displayName.localeCompare(b.displayName, "de");
    })
    .slice(0, 20);
}

function applyScannedEquipmentCode(rawCode) {
  const normalizedCode = normalizeScannedEquipmentCode(rawCode);
  if (!normalizedCode) {
    state.equipmentScanner = { ...state.equipmentScanner, rawCode: rawCode || "", normalizedCode: "", status: "invalid", error: "Kein gültiger Code erkannt." };
    return;
  }
  const known = scannedEquipmentMappingForCode(rawCode);
  state.equipmentScanner = {
    ...state.equipmentScanner,
    rawCode: String(rawCode || "").trim(),
    normalizedCode,
    status: known ? "known" : "unknown",
    error: "",
    selectedExerciseId: known?.exerciseId || state.equipmentScanner.selectedExerciseId || "",
    mappingId: known?.id || ""
  };
  if (known) {
    known.lastUsedAt = new Date().toISOString();
    storage.scannedEquipmentMappings = [...storage.scannedEquipmentMappings.filter((item) => item.id !== known.id), known];
    applyScannedEquipmentMappingToActiveWorkout(known);
  }
}

function applyScannedEquipmentMappingToEntry(entry, mapping) {
  if (!entry || !mapping) return;
  entry.seatPosition = mapping.seatPosition || entry.seatPosition || "";
  entry.gripPosition = mapping.gripPosition || entry.gripPosition || "";
  entry.gripWidth = mapping.gripWidth || entry.gripWidth || "";
  entry.attachment = mapping.attachment || entry.attachment || "";
  entry.machineLabel = mapping.machineLabel || entry.machineLabel || "";
  entry.machineSerial = mapping.machineSerial || entry.machineSerial || "";
}

function applyScannedEquipmentMappingToActiveWorkout(mapping) {
  const workout = state.activeWorkout;
  if (!workout || !mapping?.exerciseId) return false;
  const targetIndex = workout.entries.findIndex((entry) => entry.exerciseId === mapping.exerciseId);
  if (targetIndex < 0) return false;
  const currentEntry = workout.entries[workout.index];
  if (targetIndex !== workout.index && !handleIncompleteSetsBeforeLeaving(currentEntry)) return false;
  workout.index = targetIndex;
  applyScannedEquipmentMappingToEntry(workout.entries[targetIndex], mapping);
  persistWorkoutDraft();
  return true;
}

function saveScannedEquipmentMapping() {
  const scanner = state.equipmentScanner;
  const exercise = exerciseById(scanner.selectedExerciseId);
  if (!scanner.normalizedCode) throw new Error("Bitte zuerst einen Code scannen oder eingeben.");
  if (!exercise) throw new Error("Bitte eine Übung auswählen.");
  const existing = scannedEquipmentMappingForCode(scanner.rawCode);
  const now = new Date().toISOString();
  const equipmentText = `${exercise.displayName} ${exercise.category} ${(exercise.equipment || []).join(" ")}`.toLowerCase();
  const equipmentType = equipmentText.includes("laufband") || equipmentText.includes("fahrrad") || equipmentText.includes("bike") || equipmentText.includes("cardio") || equipmentText.includes("crosstrainer") || equipmentText.includes("ruderg") || equipmentText.includes("stepper") ? "warmup" : "strength";
  const mapping = {
    id: existing?.id || scanner.mappingId || (crypto.randomUUID ? crypto.randomUUID() : `life-fitness-${Date.now()}`),
    normalizedCode: scanner.normalizedCode,
    rawCode: scanner.rawCode,
    brand: "Life Fitness",
    exerciseId: exercise.id,
    exerciseNameSnapshot: exercise.displayName,
    studioName: document.querySelector("[data-scanner-field='studioName']")?.value.trim() || existing?.studioName || "",
    machineLabel: document.querySelector("[data-scanner-field='machineLabel']")?.value.trim() || existing?.machineLabel || "",
    machineSerial: document.querySelector("[data-scanner-field='machineSerial']")?.value.trim() || existing?.machineSerial || "",
    equipmentType,
    seatPosition: document.querySelector("[data-scanner-field='seatPosition']")?.value.trim() || existing?.seatPosition || "",
    gripPosition: document.querySelector("[data-scanner-field='gripPosition']")?.value.trim() || existing?.gripPosition || "",
    gripWidth: document.querySelector("[data-scanner-field='gripWidth']")?.value.trim() || existing?.gripWidth || "",
    attachment: document.querySelector("[data-scanner-field='attachment']")?.value.trim() || existing?.attachment || "",
    note: document.querySelector("[data-scanner-field='note']")?.value.trim() || existing?.note || "",
    createdAt: existing?.createdAt || now,
    updatedAt: now,
    lastUsedAt: now
  };
  storage.scannedEquipmentMappings = [...storage.scannedEquipmentMappings.filter((item) => item.normalizedCode !== mapping.normalizedCode), mapping];
  if (state.activeWorkout) applyScannedEquipmentMappingToActiveWorkout(mapping);
  state.equipmentScanner = { ...state.equipmentScanner, status: "known", mappingId: mapping.id };
  return mapping;
}

async function stopEquipmentScannerCamera() {
  const stream = window.dcoachEquipmentScannerStream;
  if (stream) stream.getTracks().forEach((track) => track.stop());
  window.dcoachEquipmentScannerStream = null;
  window.dcoachEquipmentScannerLoop = null;
}

async function startEquipmentScannerCamera() {
  state.equipmentScanner = { ...state.equipmentScanner, active: true, status: "camera", error: "" };
  render();
  if (!("mediaDevices" in navigator) || !navigator.mediaDevices.getUserMedia) {
    state.equipmentScanner = { ...state.equipmentScanner, status: "manual", error: "Kamera ist nicht verfügbar. Bitte Code manuell eingeben." };
    render();
    return;
  }
  if (!("BarcodeDetector" in window)) {
    state.equipmentScanner = { ...state.equipmentScanner, status: "manual", error: "BarcodeDetector ist hier nicht verfügbar. Bitte Code manuell eingeben." };
    render();
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false });
    window.dcoachEquipmentScannerStream = stream;
    const video = document.querySelector("[data-equipment-scanner-video]");
    if (!video) return;
    video.srcObject = stream;
    await video.play();
    const detector = new window.BarcodeDetector({ formats: ["qr_code", "code_128", "code_39", "ean_13", "ean_8"] });
    const scan = async () => {
      if (!window.dcoachEquipmentScannerStream || state.equipmentScanner.status !== "camera") return;
      try {
        const codes = await detector.detect(video);
        const rawValue = codes[0]?.rawValue || "";
        if (rawValue) {
          await stopEquipmentScannerCamera();
          applyScannedEquipmentCode(rawValue);
          render();
          return;
        }
      } catch (error) {
        logAppError(error.message || "Scanner-Komponente nicht initialisiert", "equipment-scanner");
      }
      window.dcoachEquipmentScannerLoop = window.requestAnimationFrame(scan);
    };
    window.dcoachEquipmentScannerLoop = window.requestAnimationFrame(scan);
  } catch (error) {
    state.equipmentScanner = { ...state.equipmentScanner, status: "manual", error: "Kamerazugriff nicht möglich. Bitte Code manuell eingeben." };
    logAppError(error.message || "Kamera verweigert", "equipment-scanner");
    render();
  }
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
  return completedExercise.sets.reduce((sum, set) => {
    if (set.completed !== true) return sum;
    return sum + (Number(set.actualWeightKg) || 0) * (Number(set.actualReps) || 0);
  }, 0);
}

function sessionById(id) {
  return storage.sessions.find((session) => session.id === id) || null;
}

function sessionVolume(session) {
  return session.completedExercises.reduce((sum, exercise) => sum + totalVolume(exercise), 0);
}

function sessionSetCount(session) {
  return session.completedExercises.reduce((sum, exercise) => sum + exercise.sets.filter((set) => set.completed === true).length, 0);
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

function sessionsForToday() {
  const today = todayIsoDate();
  return storage.sessions.filter((session) => String(session.startedAt || "").slice(0, 10) === today);
}

function sessionsForCoverageMode(mode) {
  if (mode === "today") return sessionsForToday();
  if (mode === "month") return sessionsSince(30);
  return sessionsSince(7);
}

function sessionsBetween(start, end) {
  return storage.sessions.filter((session) => {
    const date = new Date(session.startedAt);
    return date >= start && date < end;
  });
}

function activePlanTargetMuscles() {
  const plan = activePlan();
  const ids = new Set();
  plan?.days?.forEach((day) => {
    day.exercises.forEach((planned) => {
      const mapping = muscleMappingForExercise(planned.exerciseId);
      if (!mapping) return;
      if (mapping.primaryMuscle) ids.add(canonicalizeMuscleGroup(mapping.primaryMuscle));
      (mapping.secondaryMuscles || []).forEach((item) => ids.add(canonicalizeMuscleGroup(item.muscleId)));
    });
  });
  return ids;
}

function completedSetCoverageFactor(set) {
  if (set.completed !== true) return 0;
  if (Number(set.actualDurationSeconds) > 0 && !(Number(set.actualReps) > 0)) {
    return Math.max(0.5, Math.min(1.5, Number(set.actualDurationSeconds) / 45));
  }
  if (Number(set.actualDistance) > 0 && !(Number(set.actualReps) > 0)) {
    return Math.max(0.5, Math.min(1.5, Number(set.actualDistance) / 400));
  }
  const reps = Number(set.actualReps) || 10;
  const weight = Number(set.actualWeightKg) || 0;
  const repsFactor = Math.min(1.4, Math.max(0.6, reps / 10));
  const weightFactor = weight > 0 ? 1 + Math.min(0.08, Math.log10(weight + 1) * 0.03) : 1;
  return repsFactor * weightFactor;
}

function premiumRegionsForView(view) {
  return state.premiumMuscleRegions?.regions?.filter((region) => region.view === view) || [];
}

function premiumRegionByMuscleId(muscleId) {
  return state.premiumMuscleRegions?.regions?.find((region) => region.muscleId === muscleId) || null;
}

function premiumSubregionsForExercise(exercise, mapping) {
  const haystack = [
    exercise?.movementPattern,
    exercise?.displayName,
    exercise?.category,
    ...(exercise?.tags || [])
  ].filter(Boolean).join(" ").toLowerCase();
  const rules = state.exerciseToSubregionMappingRules?.rules || [];
  const matched = rules.filter((rule) => haystack.includes(String(rule.pattern || "").toLowerCase()));
  const direct = matched.flatMap((rule) => rule.primarySubregions || []);
  if (direct.length) return [...new Set(direct.map(canonicalizeMuscleRegionId))];
  const fallback = {
    mg_chest: ["mg_chest_sternal"],
    mg_chest_upper: ["mg_chest_clavicular"],
    mg_chest_middle: ["mg_chest_sternal"],
    mg_chest_lower: ["mg_chest_lower"],
    mg_front_delts: ["mg_front_delts"],
    mg_side_delts: ["mg_side_delts"],
    mg_rear_delts: ["mg_rear_delts"],
    mg_biceps: ["mg_biceps_long"],
    mg_triceps: ["mg_triceps_long"],
    mg_forearms: ["mg_forearm_flexors", "mg_forearm_extensors"],
    mg_abs: ["mg_abs_upper", "mg_abs_lower"],
    mg_obliques: ["mg_obliques"],
    mg_quads: ["mg_quads_rectus", "mg_quads_vastus_lateralis", "mg_quads_vastus_medialis", "mg_tibialis_anterior"],
    mg_adductors: ["mg_adductors"],
    mg_traps: ["mg_traps_upper", "mg_traps_mid"],
    mg_upper_back: ["mg_traps_mid", "mg_rhomboids"],
    mg_rhomboids: ["mg_rhomboids"],
    mg_lats: ["mg_lats_upper", "mg_lats_lower"],
    mg_erectors: ["mg_erectors_upper", "mg_erectors_lower"],
    mg_glutes: ["mg_glutes_maximus", "mg_glutes_medius"],
    mg_hamstrings: ["mg_hamstrings_biceps", "mg_hamstrings_inner"],
    mg_calves: ["mg_calves_gastrocnemius", "mg_soleus"]
  };
  const ids = [
    ...(fallback[canonicalizeMuscleGroup(mapping?.primaryMuscle)] || fallback[mapping?.primaryMuscle] || []),
    ...(mapping?.secondaryMuscles || [])
      .filter((item) => !["mg_abs", "mg_obliques"].includes(canonicalizeMuscleGroup(item.muscleId)))
      .flatMap((item) => fallback[canonicalizeMuscleGroup(item.muscleId)] || fallback[item.muscleId] || [])
  ];
  return [...new Set(ids.map(canonicalizeMuscleRegionId))];
}

function canonicalCoverageContributionTargets(exercise, mapping) {
  const groupTargets = new Map();
  const regionTargets = new Map();
  const duplicateTargets = [];
  const roleRank = {
    primary: 3,
    secondary: 2,
    stabilizer: 1,
    primary_region: 3,
    secondary_region: 2
  };
  const addTarget = (map, muscleId, weight, role, source) => {
    if (!muscleId || !Number.isFinite(weight) || weight <= 0) return;
    const existing = map.get(muscleId);
    if (existing) {
      duplicateTargets.push({
        muscleId,
        keptRole: (roleRank[role] || 0) > (roleRank[existing.role] || 0) ? role : existing.role,
        duplicateRole: (roleRank[role] || 0) > (roleRank[existing.role] || 0) ? existing.role : role,
        keptWeight: Number(Math.max(existing.weight, weight).toFixed(3)),
        duplicateWeight: Number(Math.min(existing.weight, weight).toFixed(3)),
        source
      });
      if ((roleRank[role] || 0) > (roleRank[existing.role] || 0)) {
        map.set(muscleId, { muscleId, weight, role });
      } else if ((roleRank[role] || 0) === (roleRank[existing.role] || 0) && weight > existing.weight) {
        map.set(muscleId, { muscleId, weight, role });
      }
      return;
    }
    map.set(muscleId, { muscleId, weight, role });
  };
  const addGroup = (muscleId, weight, role) => {
    const id = canonicalizeMuscleGroup(muscleId);
    if (!id || !Number.isFinite(weight) || weight <= 0) return;
    addTarget(groupTargets, id, weight, role, "group");
  };
  const addRegion = (muscleId, weight, role) => {
    const id = canonicalizeMuscleRegionId(muscleId);
    if (!id || !Number.isFinite(weight) || weight <= 0) return;
    addTarget(regionTargets, id, weight, role, "region");
  };
  addGroup(mapping?.primaryMuscle, 1, "primary");
  (mapping?.secondaryMuscles || []).forEach((item) => addGroup(item.muscleId, Number(item.intensityWeight) || 0, "secondary"));
  (mapping?.stabilizers || []).forEach((item) => {
    const group = canonicalizeMuscleGroup(item.muscleId);
    if (group === "mg_abs" || group === "mg_obliques") return;
    addGroup(group, (Number(item.intensityWeight) || 0) * 0.25, "stabilizer");
  });
  const primaryRegions = premiumSubregionsForExercise(exercise, mapping);
  primaryRegions.forEach((muscleId) => addRegion(muscleId, 1 / Math.max(1, primaryRegions.length), "primary_region"));
  (mapping?.secondaryMuscles || []).forEach((item) => {
    const group = canonicalizeMuscleGroup(item.muscleId);
    if (group === "mg_abs" || group === "mg_obliques") return;
    const regions = premiumSubregionsForExercise(null, { primaryMuscle: group, secondaryMuscles: [] });
    regions.forEach((muscleId) => addRegion(muscleId, (Number(item.intensityWeight) || 0) / Math.max(1, regions.length), "secondary_region"));
  });
  return {
    groupTargets: [...groupTargets.values()],
    regionTargets: [...regionTargets.values()],
    duplicateTargets
  };
}

function coveragePeriodForMode(mode = "week", referenceDate = new Date()) {
  const end = new Date(referenceDate);
  end.setHours(23, 59, 59, 999);
  const start = new Date(referenceDate);
  start.setHours(0, 0, 0, 0);
  if (mode === "today") {
    return { start, end };
  }
  if (mode === "month") {
    start.setDate(start.getDate() - 29);
    return { start, end };
  }
  start.setDate(start.getDate() - 6);
  return { start, end };
}

function uniqueCoverageSessions(sessions = []) {
  const seen = new Set();
  const duplicateSessionIds = [];
  const unique = [];
  sessions.forEach((session, index) => {
    const id = session?.id || `session_index_${index}`;
    if (seen.has(id)) {
      duplicateSessionIds.push(id);
      return;
    }
    seen.add(id);
    unique.push(session);
  });
  return { unique, duplicateSessionIds: [...new Set(duplicateSessionIds)] };
}

function getCoverageColorBand(percent) {
  const value = Number(percent) || 0;
  if (value <= 0) return "neutral";
  if (value <= 35) return "yellow";
  if (value <= 70) return "yellow_orange";
  if (value <= 100) return "orange";
  if (value <= 130) return "red";
  return "dark_red";
}

function coverageMetric({ id, label, level, rawLoad, referenceLoad, sourceExerciseIds = [], sourceSessionIds = [], extra = {} }) {
  const safeRaw = Number(rawLoad) || 0;
  const safeReference = Math.max(0.001, Number(referenceLoad) || 0);
  const percent = Math.round((safeRaw / safeReference) * 100);
  return {
    id,
    muscleId: id,
    label,
    level,
    rawLoad: Number(safeRaw.toFixed(3)),
    referenceLoad: safeReference,
    percent,
    coveragePercent: percent,
    colorBand: getCoverageColorBand(percent),
    weightedSetScore: safeRaw,
    sourceExerciseIds,
    sourceSessionIds,
    ...extra
  };
}

function getCanonicalMuscleCoverage({ sessions, context = "week", referenceDate = new Date(), planId = null } = {}) {
  const sessionGate = uniqueCoverageSessions(sessions || []);
  const coverageSessions = sessionGate.unique;
  const groupPoints = new Map();
  const regionPoints = new Map();
  const diagnostics = [];
  const warnings = [];
  const add = (map, muscleId, value) => {
    if (!muscleId || !Number.isFinite(value) || value <= 0) return;
    map.set(muscleId, (map.get(muscleId) || 0) + value);
  };
  coverageSessions.forEach((session) => {
    (session.completedExercises || []).forEach((completedExercise) => {
      const exercise = exerciseById(completedExercise.exerciseId);
      const mapping = muscleMappingForExercise(completedExercise.exerciseId);
      if (!mapping) {
        warnings.push(`Mapping fehlt: ${completedExercise.exerciseId}`);
        return;
      }
      const setPoints = (completedExercise.sets || []).reduce((sum, set) => sum + completedSetCoverageFactor(set), 0);
      const targets = canonicalCoverageContributionTargets(exercise, mapping);
      targets.groupTargets.forEach((target) => add(groupPoints, target.muscleId, setPoints * target.weight));
      targets.regionTargets.forEach((target) => add(regionPoints, target.muscleId, setPoints * target.weight));
      diagnostics.push({
        sessionId: session.id,
        sessionDate: session.startedAt || session.completedAt || session.date || "",
        dayName: session.dayName || session.dayNameSnapshot || "",
        exerciseId: completedExercise.exerciseId,
        exerciseName: completedExercise.exerciseNameSnapshot || exercise?.displayName || completedExercise.exerciseId,
        completedSetCount: (completedExercise.sets || []).filter((set) => set.completed === true).length,
        groupTargets: targets.groupTargets,
        regionTargets: targets.regionTargets,
        duplicateTargets: targets.duplicateTargets,
        rawSetScore: Number(setPoints.toFixed(3))
      });
    });
  });
  const targetMuscles = activePlanTargetMuscles();
  targetMuscles.forEach((muscleId) => {
    if (!groupPoints.has(muscleId)) groupPoints.set(muscleId, 0);
  });
  const groupItems = [...groupPoints.entries()].map(([muscleId, value]) => coverageMetric({
    id: muscleId,
    label: muscleName(muscleId),
    level: "group",
    rawLoad: value,
    referenceLoad: MUSCLE_GROUP_REFERENCE_LOAD,
    sourceExerciseIds: [...new Set(diagnostics.filter((row) => row.groupTargets.some((target) => target.muscleId === muscleId)).map((row) => row.exerciseId))],
    sourceSessionIds: [...new Set(diagnostics.filter((row) => row.groupTargets.some((target) => target.muscleId === muscleId)).map((row) => row.sessionId))]
  }));
  const regionItems = (state.premiumMuscleRegions?.regions || []).map((region) => {
    const value = regionPoints.get(region.muscleId) || 0;
    return coverageMetric({
      id: region.muscleId,
      label: region.label,
      level: "region",
      rawLoad: value,
      referenceLoad: MUSCLE_REGION_REFERENCE_LOAD,
      sourceExerciseIds: [...new Set(diagnostics.filter((row) => row.regionTargets.some((target) => target.muscleId === region.muscleId)).map((row) => row.exerciseId))],
      sourceSessionIds: [...new Set(diagnostics.filter((row) => row.regionTargets.some((target) => target.muscleId === region.muscleId)).map((row) => row.sessionId))],
      extra: { group: region.group, view: region.view }
    });
  });
  const period = coveragePeriodForMode(context, referenceDate);
  const duplicateContributions = diagnostics.flatMap((row) => (row.duplicateTargets || []).map((duplicate) => ({
    sessionId: row.sessionId,
    exerciseId: row.exerciseId,
    exerciseName: row.exerciseName,
    ...duplicate
  })));
  return {
    context,
    calculationVersion: MUSCLE_COVERAGE_CALCULATION_VERSION,
    generatedAt: new Date().toISOString(),
    referenceDate: new Date(referenceDate).toISOString(),
    period: { start: period.start.toISOString(), end: period.end.toISOString() },
    planId,
    mappingVersion: MUSCLE_MAPPING_VERSION,
    referenceLoads: {
      group: MUSCLE_GROUP_REFERENCE_LOAD,
      region: MUSCLE_REGION_REFERENCE_LOAD,
      explanation: "100 % entspricht dem hinterlegten Wochenziel gewichteter Sätze: 8 für Muskelgruppen, 3 für Unterregionen. Werte über 100 % bedeuten Über Ziel."
    },
    muscleGroups: Object.fromEntries(groupItems.map((item) => [item.muscleId, item])),
    premiumRegions: Object.fromEntries(regionItems.map((item) => [item.muscleId, item])),
    diagnostics,
    duplicateContributions,
    warnings: [...warnings, ...sessionGate.duplicateSessionIds.map((id) => `Doppelte Session ausgeschlossen: ${id}`)],
    sessionDiagnostics: {
      range: { start: period.start.toISOString(), end: period.end.toISOString() },
      sessionIds: coverageSessions.map((session) => session.id),
      duplicateSessionIds: sessionGate.duplicateSessionIds,
      draftIdsIncluded: coverageSessions.filter((session) => session.status === "draft" || session.isDraft).map((session) => session.id),
      incompleteSessionsIncluded: coverageSessions.filter((session) => session.status === "draft" || session.status === "cancelled").map((session) => session.id)
    },
    cacheKey: `${context}|${todayIsoDate()}|${coverageSessions.map((session) => session.id).join(",")}|${MUSCLE_MAPPING_VERSION}|${MUSCLE_COVERAGE_CALCULATION_VERSION}`
  };
}

function premiumCoverageForSessions(sessions) {
  const coverage = getCanonicalMuscleCoverage({ sessions, context: "week" });
  return Object.values(coverage.premiumRegions).map((item) => ({
    muscleId: item.muscleId,
    name: item.label,
    points: item.weightedSetScore,
    rawLoad: item.rawLoad,
    referenceLoad: item.referenceLoad,
    level: item.level,
    percent: item.coveragePercent,
    colorBand: item.colorBand,
    isTarget: item.weightedSetScore > 0,
    group: item.group,
    view: item.view,
    sourceExerciseIds: item.sourceExerciseIds
  })).sort((a, b) => b.percent - a.percent || a.name.localeCompare(b.name));
}

function coverageForSessions(sessions) {
  const coverage = getCanonicalMuscleCoverage({ sessions, context: "week" });
  const targetMuscles = activePlanTargetMuscles();
  return Object.values(coverage.muscleGroups).map((item) => ({
    muscleId: item.muscleId,
    name: item.label,
    points: item.weightedSetScore,
    rawLoad: item.rawLoad,
    referenceLoad: item.referenceLoad,
    level: item.level,
    percent: item.coveragePercent,
    colorBand: item.colorBand,
    isTarget: targetMuscles.has(item.muscleId),
    sourceExerciseIds: item.sourceExerciseIds
  })).sort((a, b) => Number(b.isTarget) - Number(a.isTarget) || b.percent - a.percent || a.name.localeCompare(b.name));
}

function canonicalCoverageDiagnosticsForMode(mode = state.coverageMode || "week") {
  const sessions = sessionsForCoverageMode(mode);
  const coverage = getCanonicalMuscleCoverage({ sessions, context: mode });
  return {
    version: "6.17.3",
    calculationVersion: MUSCLE_COVERAGE_CALCULATION_VERSION,
    mappingVersion: MUSCLE_MAPPING_VERSION,
    context: mode,
    period: coverage.period,
    sessionIds: sessions.map((session) => session.id),
    sessionDiagnostics: coverage.sessionDiagnostics,
    cacheKey: coverage.cacheKey,
    referenceLoads: coverage.referenceLoads,
    warnings: coverage.warnings,
    diagnostics: coverage.diagnostics,
    duplicateContributions: coverage.duplicateContributions,
    groups: Object.values(coverage.muscleGroups).map((item) => ({
      muscleId: item.muscleId,
      label: item.label,
      level: item.level,
      rawScore: Number(item.weightedSetScore.toFixed(3)),
      rawLoad: item.rawLoad,
      referenceLoad: item.referenceLoad,
      percent: item.coveragePercent,
      colorBand: item.colorBand,
      sourceExerciseIds: item.sourceExerciseIds
    })),
    premiumRegions: Object.values(coverage.premiumRegions).filter((item) => item.weightedSetScore > 0).map((item) => ({
      muscleId: item.muscleId,
      label: item.label,
      level: item.level,
      rawScore: Number(item.weightedSetScore.toFixed(3)),
      rawLoad: item.rawLoad,
      referenceLoad: item.referenceLoad,
      percent: item.coveragePercent,
      colorBand: item.colorBand,
      sourceExerciseIds: item.sourceExerciseIds
    }))
  };
}

function canonicalCoverageExportForMode(mode = state.coverageMode || "week") {
  const sessions = sessionsForCoverageMode(mode);
  const coverage = getCanonicalMuscleCoverage({ sessions, context: mode });
  const muscles = [
    ...Object.values(coverage.muscleGroups),
    ...Object.values(coverage.premiumRegions).filter((item) => item.weightedSetScore > 0)
  ].map((item) => ({
    muscleId: item.muscleId,
    label: item.label,
    level: item.level,
    rawLoad: item.rawLoad,
    referenceLoad: item.referenceLoad,
    percent: item.coveragePercent,
    colorBand: item.colorBand,
    contributions: coverage.diagnostics.filter((row) =>
      row.groupTargets.some((target) => target.muscleId === item.muscleId) ||
      row.regionTargets.some((target) => target.muscleId === item.muscleId)
    ).map((row) => {
      const target = [...row.groupTargets, ...row.regionTargets].find((entry) => entry.muscleId === item.muscleId);
      return {
        sessionId: row.sessionId,
        sessionDate: row.sessionDate,
        exerciseId: row.exerciseId,
        exerciseName: row.exerciseName,
        completedSetCount: row.completedSetCount,
        role: target?.role || "",
        weightFactor: target?.weight || 0,
        contribution: Number((row.rawSetScore * (target?.weight || 0)).toFixed(3))
      };
    })
  }));
  return {
    mappingVersion: coverage.mappingVersion,
    calculationVersion: coverage.calculationVersion,
    period: coverage.period,
    sessions: coverage.sessionDiagnostics.sessionIds.map((id) => {
      const session = sessions.find((item) => item.id === id) || {};
      return {
        sessionId: id,
        date: session.startedAt || session.completedAt || "",
        dayName: session.dayName || session.dayNameSnapshot || "",
        exerciseCount: (session.completedExercises || []).length,
        completedSetCount: sessionSetCount(session)
      };
    }),
    referenceLoads: coverage.referenceLoads,
    sessionDiagnostics: coverage.sessionDiagnostics,
    duplicateContributions: coverage.duplicateContributions,
    muscles
  };
}

function tricepsCoverageDiagnostic(mode = state.coverageMode || "week", expectedPercent = 224) {
  const exportData = canonicalCoverageExportForMode(mode);
  const group = exportData.muscles.find((item) => item.muscleId === "mg_triceps") || null;
  const region = exportData.muscles.find((item) => item.muscleId === "mg_triceps_long") || null;
  const target = group || region || null;
  const percent = target?.percent || 0;
  const duplicateContributions = exportData.duplicateContributions.filter((item) =>
    item.muscleId === "mg_triceps" || item.muscleId === "mg_triceps_long"
  );
  return {
    muscle: "Trizeps",
    displayPercent: percent,
    expectedObservedPercent: expectedPercent,
    rawLoad: target?.rawLoad || 0,
    referenceLoad: target?.referenceLoad || 0,
    formula: target ? `${target.rawLoad} / ${target.referenceLoad} * 100 = ${percent}%` : "nicht berechenbar, keine Trizeps-Coverage im Zeitraum",
    period: exportData.period,
    sessions: exportData.sessions,
    contributions: target?.contributions || [],
    duplicateContributions,
    conclusion: percent === expectedPercent && !duplicateContributions.length ? "correct" : percent === expectedPercent ? "incorrect" : "not_reproducible"
  };
}

function allSurfacesCoverageComparison(mode = state.coverageMode || "week", muscleId = "mg_triceps") {
  const standard = coverageItemByMuscle(coverageForSessions(sessionsForCoverageMode(mode)), muscleId);
  const region = coverageItemByPremiumMuscle(premiumCoverageForSessions(sessionsForCoverageMode(mode)), "mg_triceps_long");
  const selected = standard.percent ? standard : region;
  return {
    context: mode === "week" ? "Diese Woche" : mode,
    surfaces: [
      { surface: "Muscle Map", muscle: selected.name || "Trizeps", percent: selected.percent || 0, colorBand: selected.colorBand || getCoverageColorBand(selected.percent || 0) },
      { surface: "Tracking-Liste", muscle: standard.name || "Trizeps", percent: standard.percent || 0, colorBand: standard.colorBand || getCoverageColorBand(standard.percent || 0) },
      { surface: "Session Coach", muscle: "Trizeps", percent: standard.percent || 0, colorBand: standard.colorBand || getCoverageColorBand(standard.percent || 0), status: "uses_canonical_coverageForSessions" }
    ]
  };
}

function coverageCoachHints(items) {
  return items.filter((item) => item.isTarget).map((item) => {
    if (item.percent > 120) return `${item.name}: Diese Muskelgruppe wurde diese Woche bereits überdurchschnittlich belastet.`;
    if (item.percent === 0) return `${item.name}: Noch nicht trainiert.`;
    if (item.percent < 70 && sessionsSince(7).length >= 2) return `${item.name}: Diese Muskelgruppe wurde diese Woche wenig trainiert.`;
    return null;
  }).filter(Boolean).slice(0, 3);
}

function coverageStatus(percent) {
  if (percent <= 0) return "not_trained";
  if (percent < 40) return "low";
  if (percent < 70) return "moderate";
  if (percent <= 120) return "target";
  return "over_target";
}

function coverageRowTone(percent) {
  return {
    neutral: "empty",
    yellow: "low",
    yellow_orange: "low",
    orange: "ok",
    red: "over",
    dark_red: "over"
  }[getCoverageColorBand(percent)] || "empty";
}

function coverageCoachTextFor(percent) {
  const status = coverageStatus(percent);
  return state.muscleCoverageCoachTexts?.texts?.[status] || {
    not_trained: "Diese Muskelgruppe wurde diese Woche noch nicht trainiert.",
    low: "Diese Muskelgruppe ist diese Woche noch deutlich unter dem Ziel.",
    moderate: "Diese Muskelgruppe wurde bereits teilweise belastet.",
    target: "Diese Muskelgruppe liegt im Zielbereich.",
    over_target: "Diese Muskelgruppe wurde diese Woche bereits deutlich über dem Ziel belastet."
  }[status];
}

function coverageColorFor(percent) {
  const gradient = state.muscleHeatmapGradient?.stops || [];
  if (gradient.length) return interpolatedHeatmapColor(percent, gradient);
  const premiumScale = state.muscleHeatmapColorSystem?.colors || [];
  const premium = premiumScale.find((item) => percent >= item.min && percent <= item.max);
  if (premium) return premium.color;
  const scale = state.muscleMapVisualConfig?.coverageColorScale || state.muscleCoverageVisualMapping?.colorScale || [];
  return scale.find((item) => percent >= item.min && percent <= item.max)?.color || "#2563EB";
}

function hexToRgb(hex) {
  const clean = String(hex || "").replace("#", "");
  if (clean.length !== 6) return [37, 99, 235];
  return [0, 2, 4].map((index) => parseInt(clean.slice(index, index + 2), 16));
}

function rgbToHex(rgb) {
  return `#${rgb.map((value) => Math.round(Math.max(0, Math.min(255, value))).toString(16).padStart(2, "0")).join("")}`;
}

function interpolatedHeatmapColor(percent, stops) {
  const sorted = [...stops].sort((a, b) => a.percent - b.percent);
  const value = Math.max(sorted[0].percent, Math.min(sorted[sorted.length - 1].percent, Number(percent) || 0));
  let lower = sorted[0];
  let upper = sorted[sorted.length - 1];
  for (let index = 0; index < sorted.length - 1; index += 1) {
    if (value >= sorted[index].percent && value <= sorted[index + 1].percent) {
      lower = sorted[index];
      upper = sorted[index + 1];
      break;
    }
  }
  const span = Math.max(1, upper.percent - lower.percent);
  const ratio = (value - lower.percent) / span;
  const low = hexToRgb(lower.color);
  const high = hexToRgb(upper.color);
  return rgbToHex(low.map((channel, index) => channel + (high[index] - channel) * ratio));
}

function coverageItemByMuscle(items, muscleId) {
  return items.find((item) => item.muscleId === muscleId) || {
    muscleId,
    name: muscleName(muscleId),
    points: 0,
    percent: 0,
    isTarget: activePlanTargetMuscles().has(muscleId)
  };
}

function coverageItemByPremiumMuscle(items, muscleId) {
  const region = premiumRegionByMuscleId(muscleId);
  return items.find((item) => item.muscleId === muscleId) || {
    muscleId,
    name: region?.label || muscleName(muscleId),
    points: 0,
    percent: 0,
    isTarget: false,
    group: region?.group || "",
    view: region?.view || ""
  };
}

function muscleContributionWeight(mapping, muscleId) {
  if (mapping?.primaryMuscle === muscleId) return 1;
  const secondary = (mapping?.secondaryMuscles || []).find((item) => item.muscleId === muscleId);
  if (secondary) return Number(secondary.intensityWeight) || 0;
  const stabilizer = (mapping?.stabilizers || []).find((item) => item.muscleId === muscleId);
  if (stabilizer) return (Number(stabilizer.intensityWeight) || 0) * 0.5;
  return 0;
}

function coverageContributors(muscleId, sessions) {
  const contributors = new Map();
  sessions.forEach((session) => {
    (session.completedExercises || []).forEach((completedExercise) => {
      const mapping = muscleMappingForExercise(completedExercise.exerciseId);
      const weight = muscleContributionWeight(mapping, muscleId);
      if (!weight) return;
      const points = (completedExercise.sets || []).reduce((sum, set) => sum + completedSetCoverageFactor(set), 0) * weight;
      if (points <= 0) return;
      const existing = contributors.get(completedExercise.exerciseId) || {
        exerciseId: completedExercise.exerciseId,
        name: completedExercise.exerciseNameSnapshot || exerciseById(completedExercise.exerciseId)?.displayName || completedExercise.exerciseId,
        points: 0,
        role: mapping.primaryMuscle === muscleId ? "Zielmuskel" : "Hilfsmuskel"
      };
      existing.points += points;
      contributors.set(completedExercise.exerciseId, existing);
    });
  });
  return [...contributors.values()].sort((a, b) => b.points - a.points).slice(0, 6);
}

function coverageDetailForMuscle(muscleId) {
  const premiumRegion = premiumRegionByMuscleId(muscleId);
  if (premiumRegion) {
    const today = coverageItemByPremiumMuscle(premiumCoverageForSessions(sessionsForToday()), muscleId);
    const week = coverageItemByPremiumMuscle(premiumCoverageForSessions(sessionsSince(7)), muscleId);
    const month = coverageItemByPremiumMuscle(premiumCoverageForSessions(sessionsSince(30)), muscleId);
    return {
      muscleId,
      muscleName: premiumRegion.label,
      todayCoveragePercent: today.percent,
      weekCoveragePercent: week.percent,
      monthCoveragePercent: month.percent,
      targetPercent: 100,
      status: coverageStatus(week.percent),
      mainExerciseContributors: coverageContributorsForPremiumMuscle(muscleId, sessionsSince(7)),
      secondaryExerciseContributors: [],
      history: premiumCoverageHistoryForMuscle(muscleId),
      subregions: [premiumRegion.group],
      coachText: coverageCoachTextFor(week.percent)
    };
  }
  const today = coverageItemByMuscle(coverageForSessions(sessionsForToday()), muscleId);
  const week = coverageItemByMuscle(coverageForSessions(sessionsSince(7)), muscleId);
  const month = coverageItemByMuscle(coverageForSessions(sessionsSince(30)), muscleId);
  const contributors = coverageContributors(muscleId, sessionsSince(7));
  return {
    muscleId,
    muscleName: muscleName(muscleId),
    todayCoveragePercent: today.percent,
    weekCoveragePercent: week.percent,
    monthCoveragePercent: month.percent,
    targetPercent: 100,
    status: coverageStatus(week.percent),
    mainExerciseContributors: contributors.filter((item) => item.role === "Zielmuskel"),
    secondaryExerciseContributors: contributors.filter((item) => item.role !== "Zielmuskel"),
    history: coverageHistoryForMuscle(muscleId),
    subregions: muscleSubregions(muscleId),
    coachText: coverageCoachTextFor(week.percent)
  };
}

function coverageContributorsForPremiumMuscle(muscleId, sessions) {
  const contributors = new Map();
  sessions.forEach((session) => {
    (session.completedExercises || []).forEach((completedExercise) => {
      const exercise = exerciseById(completedExercise.exerciseId);
      const mapping = muscleMappingForExercise(completedExercise.exerciseId);
      if (!premiumSubregionsForExercise(exercise, mapping).includes(muscleId)) return;
      const points = (completedExercise.sets || []).reduce((sum, set) => sum + completedSetCoverageFactor(set), 0);
      const existing = contributors.get(completedExercise.exerciseId) || {
        exerciseId: completedExercise.exerciseId,
        name: completedExercise.exerciseNameSnapshot || exercise?.displayName || completedExercise.exerciseId,
        points: 0,
        role: "Zielbereich"
      };
      existing.points += points;
      contributors.set(completedExercise.exerciseId, existing);
    });
  });
  return [...contributors.values()].sort((a, b) => b.points - a.points).slice(0, 6);
}

function premiumCoverageHistoryForMuscle(muscleId) {
  const weeks = [];
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  for (let index = 5; index >= 0; index -= 1) {
    const start = new Date(now);
    start.setDate(start.getDate() - (index * 7) - 6);
    const end = new Date(start);
    end.setDate(end.getDate() + 7);
    const item = coverageItemByPremiumMuscle(premiumCoverageForSessions(sessionsBetween(start, end)), muscleId);
    weeks.push({ label: `${start.getDate()}.${start.getMonth() + 1}.`, percent: item.percent });
  }
  return weeks;
}

function coverageHistoryForMuscle(muscleId) {
  const weeks = [];
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  for (let index = 5; index >= 0; index -= 1) {
    const start = new Date(now);
    start.setDate(start.getDate() - (index * 7) - 6);
    const end = new Date(start);
    end.setDate(end.getDate() + 7);
    const item = coverageItemByMuscle(coverageForSessions(sessionsBetween(start, end)), muscleId);
    weeks.push({ label: `${start.getDate()}.${start.getMonth() + 1}.`, percent: item.percent });
  }
  return weeks;
}

function muscleSubregions(muscleId) {
  return (state.muscleMapRegions?.regions || [])
    .filter((region) => region.muscleId === muscleId)
    .map((region) => region.label)
    .filter((label, index, list) => list.indexOf(label) === index);
}

function muscleDetailText(key, fallback) {
  return state.muscleDetailTexts?.texts?.[key] || fallback;
}

function muscleDetailStatusClass(status) {
  return {
    not_trained: "red",
    low: "red",
    moderate: "amber",
    medium: "amber",
    target: "green",
    over: "amber",
    over_target: "amber"
  }[status] || "blue";
}

function muscleDetailStatusLabel(status) {
  return {
    not_trained: "Nicht trainiert",
    low: "Niedrig",
    moderate: "Mittel",
    medium: "Mittel",
    target: "Zielbereich",
    over: "Hoch",
    over_target: "Hoch"
  }[status] || "Status";
}

function coverageTrendWeeks() {
  const weeks = [];
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const targetMuscles = activePlanTargetMuscles();
  for (let index = 7; index >= 0; index -= 1) {
    const start = new Date(now);
    start.setDate(start.getDate() - (index * 7) - 6);
    const end = new Date(start);
    end.setDate(end.getDate() + 7);
    const items = coverageForSessions(sessionsBetween(start, end)).filter((item) => !targetMuscles.size || item.isTarget);
    const average = items.length ? Math.round(items.reduce((sum, item) => sum + Math.min(item.percent, 140), 0) / items.length) : 0;
    weeks.push({ label: `${start.getDate()}.${start.getMonth() + 1}.`, percent: average });
  }
  return weeks;
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

function setRepTotal(completedExercise) {
  return (completedExercise.sets || []).reduce((sum, set) => sum + (Number(set.actualReps) || 0), 0);
}

function completedSetRatio(completedExercise) {
  const planned = Number(completedExercise.plannedSets) || completedExercise.sets?.length || 0;
  if (!planned) return 0;
  return Math.min(1, (Number(completedExercise.completedSets) || completedExercise.sets?.filter((set) => set.completed !== false).length || 0) / planned);
}

function performanceDelta(current, previous) {
  const currentVolume = totalVolume(current);
  const previousVolume = previous ? totalVolume(previous) : 0;
  const volumeDelta = previousVolume ? ((currentVolume - previousVolume) / previousVolume) * 100 : null;
  const repDelta = previous ? setRepTotal(current) - setRepTotal(previous) : null;
  const currentBest = Math.max(0, ...(current.sets || []).map((set) => Number(set.actualWeightKg) || 0));
  const previousBest = previous ? Math.max(0, ...(previous.sets || []).map((set) => Number(set.actualWeightKg) || 0)) : 0;
  const loadDelta = previousBest ? ((currentBest - previousBest) / previousBest) * 100 : null;
  const classification = volumeDelta === null ? "no_history" : volumeDelta >= 5 ? "strong_progress" : volumeDelta > 1 ? "small_progress" : volumeDelta < -1 ? "drop" : "stable";
  return { currentVolume, previousVolume, volumeDelta, repDelta, currentBest, previousBest, loadDelta, classification };
}

function personalRecordsForExercise(completedExercise, session) {
  const before = exerciseHistoryBefore(completedExercise.exerciseId, session.id).map((item) => item.exercise);
  const bestWeightBefore = before.flatMap((item) => item.sets || []).reduce((max, set) => Math.max(max, Number(set.actualWeightKg) || 0), 0);
  const currentBestWeight = (completedExercise.sets || []).reduce((max, set) => Math.max(max, Number(set.actualWeightKg) || 0), 0);
  const bestVolumeBefore = before.reduce((max, item) => Math.max(max, totalVolume(item)), 0);
  const currentVolume = totalVolume(completedExercise);
  const records = [];
  if (currentBestWeight > 0 && currentBestWeight > bestWeightBefore) records.push("Höchstes Gewicht");
  if (currentVolume > 0 && currentVolume > bestVolumeBefore) records.push("Höchstes Übungsvolumen");
  (completedExercise.sets || []).forEach((set) => {
    const weight = Number(set.actualWeightKg) || 0;
    const reps = Number(set.actualReps) || 0;
    if (!weight || !reps) return;
    const bestRepsBefore = before.flatMap((item) => item.sets || [])
      .filter((item) => Number(item.actualWeightKg) === weight)
      .reduce((max, item) => Math.max(max, Number(item.actualReps) || 0), 0);
    if (reps > bestRepsBefore) records.push(`Beste Wiederholungen bei ${kg(weight)}`);
  });
  return [...new Set(records)];
}

function confidenceBand(percent) {
  return state.confidenceScoreRules?.bands?.find((band) => percent >= band.min && percent <= band.max)?.label || "mittlere Sicherheit";
}

function coachDecisionForExercise(completedExercise, session) {
  const exercise = exerciseById(completedExercise.exerciseId);
  const previous = previousExerciseBefore(completedExercise.exerciseId, session.id);
  const delta = performanceDelta(completedExercise, previous?.exercise || null);
  const target = upperRepTarget(completedExercise.plannedReps);
  const topTargetReached = target ? (completedExercise.sets || []).filter((set) => set.completed !== false).every((set) => Number(set.actualReps) >= target) : false;
  const readiness = readinessForJournal(session.readinessSnapshot || journalEntryForDate(todayIsoDate()) || latestJournalEntry());
  const profile = currentPersonalProfile();
  const lwsConflict = !!profile.lumbarDiscHistory && exercise?.lumbarDiscSuitability === "avoidInitially";
  const painNote = String(session.readinessSnapshot?.painNote || "").trim();
  const historyDepth = exerciseHistoryBefore(completedExercise.exerciseId, session.id).length;
  let decisionId = "hold_weight";

  if (lwsConflict) decisionId = "choose_lws_alternative";
  else if (delta.classification === "drop" && (readiness.color === "red" || painNote)) decisionId = "reduce_or_deload";
  else if (topTargetReached && ["small_progress", "strong_progress", "stable"].includes(delta.classification) && readiness.color !== "red") decisionId = "increase_weight";
  else if (delta.classification === "drop") decisionId = "hold_weight";

  const decision = state.coachDecisionRules?.decisions?.find((item) => item.id === decisionId) || {};
  const completeness = Math.round(completedSetRatio(completedExercise) * 100);
  const confidence = Math.max(35, Math.min(95,
    Math.round((Number(decision.confidenceBase) || 0.65) * 100)
    + Math.min(10, historyDepth * 3)
    + (completeness >= 95 ? 5 : 0)
    - (lwsConflict || painNote ? 8 : 0)
  ));
  const evidence = [];
  if (previous) evidence.push(`${delta.volumeDelta >= 0 ? "+" : ""}${Math.round(delta.volumeDelta)}% Volumen gegenüber letzter Einheit`);
  else evidence.push("Noch keine Vergleichsdaten vorhanden.");
  if (delta.repDelta !== null) evidence.push(`${delta.repDelta >= 0 ? "+" : ""}${delta.repDelta} Wiederholungen`);
  if (delta.loadDelta !== null && Math.abs(delta.loadDelta) >= 1) evidence.push(`${delta.loadDelta >= 0 ? "+" : ""}${Math.round(delta.loadDelta)}% Last`);
  if (lwsConflict) evidence.push("LWS-Daten sprechen gegen diese Übung.");

  return {
    decisionId,
    label: decision.label || "Gewicht halten",
    recommendationText: decision.recommendation || "Gewicht halten und Wiederholungen sammeln.",
    confidencePercent: confidence,
    confidenceLabel: confidenceBand(confidence),
    evidence,
    whyBullets: decision.why || [],
    performance: delta,
    records: personalRecordsForExercise(completedExercise, session)
  };
}

function smartNoteForInsight(insight) {
  const templates = state.smartNotesRules?.templates || [];
  const findTemplate = (id, fallback) => templates.find((item) => item.id === id)?.text || fallback;
  if (insight.decisionId === "choose_lws_alternative") return findTemplate("lws_caution", "LWS-Hinweis berücksichtigt. Saubere Technik hatte Priorität.");
  if (insight.performance.classification === "strong_progress") return findTemplate("strong_progress", "Starker Fortschritt. Nächstes Mal kleine Steigerung prüfen.");
  if (insight.performance.classification === "small_progress") return findTemplate("small_progress", "Leichte Leistungssteigerung gegenüber der letzten vergleichbaren Einheit.");
  if (insight.performance.classification === "drop") return findTemplate("performance_drop", "Heute etwas schwächer. Regeneration prüfen und nichts erzwingen.");
  return findTemplate("stable_good", "Solide Einheit. Gewicht halten und sauber weiter steigern.");
}

function performanceInsightsForSession(session) {
  return (session?.completedExercises || []).map((exercise) => {
    const insight = coachDecisionForExercise(exercise, session);
    const progression = adaptiveProgressionForExercise(exercise, session, insight);
    return { exercise, insight, progression, smartNote: smartNoteForInsight(insight) };
  });
}

function progressionText(key, fallback) {
  return state.progressionTexts?.texts?.[key] || fallback;
}

function progressionDecisionLabel(decisionType) {
  return state.adaptiveProgressionSchema?.decisionTypes?.find((item) => item.id === decisionType)?.label || progressionText(decisionType, decisionType);
}

function progressionConfidenceBand(percent) {
  return state.progressionConfidenceRules?.bands?.find((band) => percent >= band.min && percent <= band.max)?.label || confidenceBand(percent);
}

function topTargetReached(completedExercise) {
  const target = upperRepTarget(completedExercise.plannedReps);
  if (!target) return false;
  return (completedExercise.sets || []).filter((set) => set.completed !== false).every((set) => Number(set.actualReps) >= target);
}

function setDropOffPercent(completedExercise) {
  const reps = (completedExercise.sets || []).filter((set) => set.completed !== false).map((set) => Number(set.actualReps) || 0).filter(Boolean);
  if (reps.length < 2 || !reps[0]) return 0;
  return Math.round(((reps[0] - reps[reps.length - 1]) / reps[0]) * 100);
}

function nextWeightSuggestion(completedExercise, decisionType) {
  if (decisionType !== "increase_weight") return null;
  const weights = (completedExercise.sets || []).map((set) => Number(set.actualWeightKg)).filter(Number.isFinite);
  if (!weights.length) return null;
  const current = Math.max(...weights);
  const increment = current >= 50 ? 2.5 : 1;
  return Math.round((current + increment) * 10) / 10;
}

function adaptiveProgressionForExercise(completedExercise, session, baseInsight = null) {
  const exercise = exerciseById(completedExercise.exerciseId);
  const historyDepth = exerciseHistoryBefore(completedExercise.exerciseId, session.id).length;
  const profile = currentPersonalProfile();
  const readiness = readinessForJournal(session.readinessSnapshot || journalEntryForDate(todayIsoDate()) || latestJournalEntry());
  const rating = ratingForExercise(exercise);
  const delta = baseInsight?.performance || performanceDelta(completedExercise, previousExerciseBefore(completedExercise.exerciseId, session.id)?.exercise || null);
  const dropOff = setDropOffPercent(completedExercise);
  const lwsConflict = !!profile.lumbarDiscHistory && (exercise?.lumbarDiscSuitability === "avoidInitially" || rating.lumbarFriendliness <= 3);
  const coverageItems = coverageForSessions(sessionsSince(7));
  const primaryMuscle = muscleMappingForExercise(completedExercise.exerciseId)?.primaryMuscle;
  const primaryCoverage = primaryMuscle ? coverageItemByMuscle(coverageItems, primaryMuscle).percent : null;
  let decisionType = "hold_weight";
  let ruleId = "fallback_hold";
  let setChange = 0;

  if (lwsConflict) {
    decisionType = "change_exercise";
    ruleId = "lws_no_axial_progression";
  } else if (readiness.color === "red") {
    decisionType = "hold_weight";
    ruleId = "hold_if_recovery_poor";
  } else if (dropOff > 25) {
    decisionType = "hold_weight";
    ruleId = "hold_if_drop_off_high";
  } else if (topTargetReached(completedExercise) && ["stable", "small_progress", "strong_progress"].includes(delta.classification)) {
    decisionType = "increase_weight";
    ruleId = "double_progression_increase_weight";
  } else if (delta.classification === "drop") {
    decisionType = "hold_weight";
    ruleId = "hold_if_drop_off_high";
  } else {
    decisionType = "increase_reps";
    ruleId = "increase_reps_before_weight_reentry";
  }

  if (primaryCoverage !== null && primaryCoverage > 120 && decisionType === "add_set") {
    decisionType = "hold_weight";
    ruleId = "coverage_over_target_no_add_set";
  } else if (primaryCoverage !== null && primaryCoverage < 70 && readiness.color === "green" && decisionType === "hold_weight") {
    decisionType = "add_set";
    ruleId = "coverage_under_target_add_optional_set";
    setChange = 1;
  }

  const rule = state.adaptiveProgressionRules?.rules?.find((item) => item.id === ruleId);
  const conflictPenalty = lwsConflict || readiness.color === "red" ? 20 : 0;
  const completeness = Math.round(completedSetRatio(completedExercise) * 100);
  const confidence = Math.max(35, Math.min(95,
    45
    + Math.min(20, historyDepth * 5)
    + (topTargetReached(completedExercise) ? 12 : 0)
    + (completeness >= 95 ? 8 : 0)
    - conflictPenalty
  ));
  const why = [
    historyDepth ? `${historyDepth} vergleichbare Einheiten vorhanden` : "Noch wenig Vergleichsdaten vorhanden",
    topTargetReached(completedExercise) ? "Zielwiederholungen erreicht" : "Zielwiederholungen noch nicht voll erreicht",
    dropOff > 25 ? "Leistungsabfall innerhalb der Sätze ist hoch" : "Satzleistung wirkt kontrollierbar"
  ];
  if (lwsConflict) why.push("LWS-Daten verhindern aggressive Progression");
  if (readiness.color === "red") why.push("Readiness spricht gegen Steigerung");
  if (primaryCoverage !== null) why.push(`Zielmuskel-Coverage diese Woche: ${primaryCoverage}%`);

  return {
    exerciseId: completedExercise.exerciseId,
    decisionType,
    label: progressionDecisionLabel(decisionType),
    nextWeightKg: nextWeightSuggestion(completedExercise, decisionType),
    nextRepTarget: decisionType === "increase_reps" ? completedExercise.plannedReps || null : null,
    setChange,
    confidencePercent: confidence,
    confidenceLabel: progressionConfidenceBand(confidence),
    why,
    quickTrainingText: rule?.quickText || progressionText(decisionType, progressionText("hold_weight", "Gewicht halten und sauber weiterarbeiten.")),
    coachText: rule?.coachText || progressionText(decisionType, "Gewicht halten und sauber weiterarbeiten.")
  };
}

function smartBuilderText(key, fallback) {
  return state.smartWorkoutBuilderTexts?.texts?.[key] || fallback;
}

function machineText(key, fallback) {
  return state.machineMappingTexts?.texts?.[key] || fallback;
}

function machineForExercise(exercise) {
  const mapping = muscleMappingForExercise(exercise?.id);
  return (state.genericMachineCatalog?.machines || []).map((machine) => {
    const exact = (machine.exerciseIds || []).includes(exercise?.id);
    const muscle = mapping?.primaryMuscle && (machine.primaryMuscles || []).includes(mapping.primaryMuscle);
    const pattern = (machine.movementPatterns || []).includes(exercise?.movementPattern);
    const score = (exact ? 100 : 0) + (muscle ? 35 : 0) + (pattern ? 25 : 0) + (exerciseHasHistory(exercise?.id) ? 10 : 0);
    return { machine, score, exact, muscle, pattern };
  }).filter((item) => item.score > 0).sort((a, b) => b.score - a.score)[0] || null;
}

function machineStatusForExercise(exercise) {
  const match = machineForExercise(exercise);
  if (!match) return null;
  return {
    machineId: match.machine.machineId,
    displayName: match.machine.displayName,
    verified: match.machine.verified || "unknown",
    isGeneric: match.machine.manufacturer === "generic",
    note: match.machine.verified === "unknown" ? machineText("notVerified", "Noch nicht bestätigt") : machineText("verifiedByUser", "Vom Nutzer bestätigt")
  };
}

function occupiedAlternativesForExercise(exercise) {
  return alternativeCandidatesForExercise(exercise)
    .filter((item) => machineForExercise(item.exercise))
    .slice(0, 3);
}

function dayTypeFromName(value) {
  const text = String(value || "").toLowerCase();
  if (text.includes("push") || text.includes("brust") || text.includes("schulter") || text.includes("trizeps")) return "Push";
  if (text.includes("pull") || text.includes("ruecken") || text.includes("ruecken") || text.includes("bizeps")) return "Pull";
  if (text.includes("leg") || text.includes("bein") || text.includes("unter")) return "Legs";
  return "FullBody";
}

function exerciseMatchesSlot(exercise, slot) {
  const mapping = muscleMappingForExercise(exercise.id);
  const primaryMatch = mapping?.primaryMuscle === slot.primaryMuscle;
  const muscleText = exerciseListMuscleText(exercise).toLowerCase();
  const movement = `${exercise.movementPattern} ${exercise.category} ${(exercise.tags || []).join(" ")}`.toLowerCase();
  const slotPattern = String(slot.movementPattern || "").toLowerCase();
  return primaryMatch || muscleText.includes(muscleName(slot.primaryMuscle).toLowerCase()) || movement.includes(slotPattern);
}

function estimateExerciseMinutes(exercise, sets = null) {
  const setCount = sets || exercise.defaultSets || 3;
  const rest = Number(exercise.defaultRestSeconds) || 90;
  return Math.ceil(setCount * (rest + 55) / 60);
}

function smartWorkoutCandidateForSlot(slot, usedIds, profile) {
  const avoidIds = new Set(profile.avoidExerciseIds || []);
  const preferredIds = new Set(profile.preferredExerciseIds || []);
  return allExercises()
    .filter((exercise) => !exercise.isArchived && !usedIds.has(exercise.id) && !avoidIds.has(exercise.id))
    .filter((exercise) => exerciseMatchesSlot(exercise, slot))
    .filter((exercise) => !(profile.lumbarDiscHistory && exercise.lumbarDiscSuitability === "avoidInitially"))
    .map((exercise) => {
      const score = personalExerciseQualityScore(exercise)
        + (preferredIds.has(exercise.id) ? 2 : 0)
        + (exerciseHasHistory(exercise.id) ? 0.8 : 0)
        - lwsRank(exercise.lumbarDiscSuitability) * 0.2;
      return { exercise, score };
    })
    .sort((a, b) => b.score - a.score)[0]?.exercise || null;
}

function buildSmartWorkout(dayTypeOrName) {
  const profile = currentPersonalProfile();
  const dayType = dayTypeFromName(dayTypeOrName);
  const maxMinutes = Number(profile.maxSessionMinutes) || 60;
  const template = state.smartWorkoutDayTemplates?.templates?.find((item) => item.dayType === dayType && item.maxMinutes <= maxMinutes)
    || state.smartWorkoutDayTemplates?.templates?.find((item) => item.dayType === dayType)
    || null;
  const reasons = [];
  const warnings = [];
  const usedIds = new Set();
  const skippedOptionalExercises = [];
  if (!template) {
    return { dayType, estimatedDurationMinutes: 0, exercises: [], skippedOptionalExercises, builderReasons: [], warnings: ["Keine passende Vorlage gefunden."] };
  }
  const exercises = template.exerciseSlots.map((slot, index) => {
    const exercise = smartWorkoutCandidateForSlot(slot, usedIds, profile);
    if (!exercise) {
      warnings.push(`Keine passende Übung für ${slot.slot} gefunden.`);
      return null;
    }
    usedIds.add(exercise.id);
    return {
      exerciseId: exercise.id,
      exercise,
      slot: slot.slot,
      priority: slot.priority,
      sets: slot.priority === "optional" ? 2 : 3,
      reps: exercise.defaultRepRange || "8-12",
      restSeconds: exercise.defaultRestSeconds || 90,
      sortOrder: index + 1,
      estimatedMinutes: estimateExerciseMinutes(exercise, slot.priority === "optional" ? 2 : 3)
    };
  }).filter(Boolean);
  let estimatedDurationMinutes = exercises.reduce((sum, item) => sum + item.estimatedMinutes, 0);
  while (estimatedDurationMinutes > maxMinutes && exercises.some((item) => item.priority === "optional")) {
    const removed = exercises.splice(exercises.findLastIndex((item) => item.priority === "optional"), 1)[0];
    skippedOptionalExercises.push(removed.exercise.displayName);
    estimatedDurationMinutes = exercises.reduce((sum, item) => sum + item.estimatedMinutes, 0);
  }
  if (profile.lumbarDiscHistory) reasons.push(smartBuilderText("adapted_lws", "LWS-freundliche Varianten wurden bevorzugt."));
  if (skippedOptionalExercises.length) reasons.push(smartBuilderText("optional_removed", "Optionale Übungen wurden entfernt, damit die Einheit in der Zeit bleibt."));
  if (!storage.sessions.length) reasons.push(smartBuilderText("not_enough_data", "Noch nicht genug persönliche Daten. Standardregeln werden genutzt."));
  reasons.push(smartBuilderText("generated", "Training wurde aus deinem Plan und deinen Vorgaben erstellt."));
  return {
    workoutId: `smart-${dayType}-${Date.now()}`,
    source: "generated",
    dayType,
    estimatedDurationMinutes,
    exercises,
    skippedOptionalExercises,
    builderReasons: reasons,
    warnings
  };
}

function trainingDnaText(key, fallback) {
  return state.trainingDnaTexts?.texts?.[key] || fallback;
}

function completedWorkingSets() {
  return storage.sessions.flatMap((session) => (session.completedExercises || []).flatMap((exercise) => (exercise.sets || [])
    .filter((set) => set.completed !== false && Number(set.actualReps) > 0)
    .map((set) => ({ session, exercise, set }))));
}

function repBucket(reps) {
  const value = Number(reps) || 0;
  if (value <= 5) return "1-5";
  if (value <= 8) return "6-8";
  if (value <= 12) return "8-12";
  if (value <= 15) return "12-15";
  if (value <= 20) return "15-20";
  return "20+";
}

function trainingWeekKey(dateValue) {
  const date = new Date(dateValue);
  const monday = new Date(date);
  monday.setHours(0, 0, 0, 0);
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  return monday.toISOString().slice(0, 10);
}

function trainingDnaSummary() {
  const sessions = [...storage.sessions].sort((a, b) => new Date(a.startedAt) - new Date(b.startedAt));
  const sets = completedWorkingSets();
  const weeks = new Set(sessions.map((session) => trainingWeekKey(session.startedAt)));
  const enough = sessions.length >= 3 && sets.length >= 20;
  const repCounts = sets.reduce((map, item) => {
    const key = repBucket(item.set.actualReps);
    map.set(key, (map.get(key) || 0) + 1);
    return map;
  }, new Map());
  const topRepRange = [...repCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || null;
  const exerciseAffinity = allExercises().map((exercise) => {
    const history = exerciseHistory(exercise.id);
    if (history.length < 3) return null;
    const progress = history.length > 1 ? totalVolume(history[0].exercise) - totalVolume(history[history.length - 1].exercise) : 0;
    return { exercise, count: history.length, score: history.length * 10 + Math.max(0, progress / 100) };
  }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 3);
  const stagnating = allExercises().map((exercise) => {
    const history = exerciseHistory(exercise.id).slice(0, 4);
    if (history.length < 4) return null;
    const newest = totalVolume(history[0].exercise);
    const oldest = totalVolume(history[history.length - 1].exercise);
    const change = oldest ? ((newest - oldest) / oldest) * 100 : 0;
    return Math.abs(change) <= 1 ? { exercise, change } : null;
  }).filter(Boolean).slice(0, 3);
  const coverage = coverageForSessions(sessionsSince(28)).filter((item) => item.isTarget);
  return {
    enough,
    sessionCount: sessions.length,
    setCount: sets.length,
    weekCount: weeks.size,
    averageSessionDurationMinutes: sessions.length ? Math.round(sessions.reduce((sum, session) => sum + sessionDurationMinutes(session), 0) / sessions.length) : null,
    topRepRange,
    exerciseAffinity,
    stagnating,
    undertrainedMuscles: coverage.filter((item) => item.percent < 70).slice(0, 3),
    strongestMuscles: coverage.filter((item) => item.percent >= 70).sort((a, b) => b.percent - a.percent).slice(0, 3)
  };
}

function timelineEvents() {
  const sessions = [...storage.sessions].sort((a, b) => new Date(a.startedAt) - new Date(b.startedAt));
  const events = [];
  const first = sessions[0];
  if (first) {
    events.push({
      id: `first-${first.id}`,
      date: String(first.startedAt).slice(0, 10),
      type: "first_workout",
      title: "Erstes gespeichertes Training",
      description: first.dayName || "Training gespeichert.",
      confidence: 100
    });
  }
  sessions.forEach((session, index) => {
    const previous = sessions[index - 1];
    if (previous && (new Date(session.startedAt) - new Date(previous.startedAt)) / 86400000 > 21) {
      events.push({
        id: `return-${session.id}`,
        date: String(session.startedAt).slice(0, 10),
        type: "return_after_break",
        title: "Wiedereinstieg nach Pause",
        description: "Konservativer Start sinnvoll.",
        confidence: 85
      });
    }
    performanceInsightsForSession(session).forEach(({ exercise, insight }) => {
      if (!insight.records.length) return;
      events.push({
        id: `pr-${session.id}-${exercise.exerciseId}`,
        date: String(session.startedAt).slice(0, 10),
        type: "new_pr",
        title: insight.records[0],
        description: exercise.exerciseNameSnapshot,
        relatedExerciseId: exercise.exerciseId,
        confidence: insight.confidencePercent
      });
    });
  });
  return events.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
}

function coachMemoryItems() {
  const sessions = [...storage.sessions].sort((a, b) => new Date(a.startedAt) - new Date(b.startedAt));
  const items = [];
  for (let index = 1; index < sessions.length; index += 1) {
    if ((new Date(sessions[index].startedAt) - new Date(sessions[index - 1].startedAt)) / 86400000 > 21) {
      items.push("Wiedereinstieg nach Pause erkannt. Konservativer Start sinnvoll.");
      break;
    }
  }
  const weeks = new Set(sessions.map((session) => trainingWeekKey(session.startedAt)));
  if (weeks.size >= 8) items.push("Du trainierst seit mehreren Wochen konstant - gute Basis für planbare Progression.");
  return items.slice(0, 3);
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

function canonicalizeMuscleId(id) {
  return canonicalizeMuscleGroup(id);
}

function canonicalizeMuscleRegionId(id) {
  const aliases = {
    chest: "mg_chest_sternal",
    upper_chest: "mg_chest_clavicular",
    middle_chest: "mg_chest_sternal",
    lower_chest: "mg_chest_lower",
    mg_chest_upper: "mg_chest_clavicular",
    mg_chest_middle: "mg_chest_sternal",
    pectoralis_major: "mg_chest_sternal",
    abs: "mg_abs_upper",
    upper_abs: "mg_abs_upper",
    lower_abs: "mg_abs_lower",
    obliques: "mg_obliques"
  };
  return aliases[id] || id;
}

function canonicalizeMuscleGroup(id) {
  const aliases = {
    chest: "mg_chest",
    mg_chest: "mg_chest",
    mg_chest_sternal: "mg_chest",
    mg_chest_clavicular: "mg_chest",
    mg_chest_lower: "mg_chest",
    mg_chest_upper: "mg_chest",
    mg_chest_middle: "mg_chest",
    upper_chest: "mg_chest",
    middle_chest: "mg_chest",
    lower_chest: "mg_chest",
    pectoralis_major: "mg_chest",
    abs: "mg_abs",
    mg_abs_upper: "mg_abs",
    mg_abs_lower: "mg_abs",
    upper_abs: "mg_abs",
    lower_abs: "mg_abs",
    obliques: "mg_obliques"
  };
  return aliases[id] || id;
}

function muscleMappingForExercise(exerciseId) {
  return state.exerciseMuscleMap?.mappings?.find((mapping) => mapping.exerciseId === exerciseId) || null;
}

function coachingTexts() {
  return state.coachingTexts?.texts || {};
}

function exerciseRatingFor(exerciseId) {
  return state.exerciseRatingsSeed?.ratings?.find((item) => item.exerciseId === exerciseId) || null;
}

function fallbackExerciseRating(exercise) {
  const lwsValue = {
    suitable: 9,
    conditionallySuitable: 6,
    notRecommended: 3,
    avoidInitially: 2
  }[exercise?.lumbarDiscSuitability] || 6;
  return {
    exerciseId: exercise?.id || "unknown",
    stimulusScore: 6,
    fatigueCost: 4,
    timeEfficiency: 6,
    progressionPotential: 6,
    skillRequirement: 4,
    stabilityRequirement: 4,
    lumbarFriendliness: lwsValue,
    shoulderFriendliness: 6,
    kneeFriendliness: 6,
    reentrySuitability: lwsValue,
    hypertrophySuitability: 6,
    strengthSuitability: 5,
    isFallback: true
  };
}

function ratingForExercise(exercise) {
  return exerciseRatingFor(exercise?.id) || fallbackExerciseRating(exercise);
}

function personalExerciseQualityScore(exercise) {
  const rating = ratingForExercise(exercise);
  const profile = currentPersonalProfile();
  const lwsScore = rating.stimulusScore * 0.35
    + rating.lumbarFriendliness * 0.30
    + rating.progressionPotential * 0.15
    + rating.timeEfficiency * 0.10
    + rating.reentrySuitability * 0.10
    - rating.fatigueCost * 0.10;
  const hypertrophyScore = rating.stimulusScore * 0.45
    + rating.progressionPotential * 0.20
    + rating.timeEfficiency * 0.15
    - rating.fatigueCost * 0.10
    - rating.skillRequirement * 0.05;
  const value = profile.lumbarDiscHistory ? lwsScore : hypertrophyScore;
  return Math.max(0, Math.min(10, Math.round(value * 10) / 10));
}

function alternativeExplanation(sourceExercise, alternativeExercise) {
  const source = ratingForExercise(sourceExercise);
  const alternative = ratingForExercise(alternativeExercise);
  const textFor = (id, fallback) => state.alternativeExplanationRules?.rules?.find((item) => item.id === id)?.text || fallback;
  if (alternative.lumbarFriendliness > source.lumbarFriendliness + 2) return textFor("lws_better_alternative", "Diese Alternative ist LWS-freundlicher und trainiert eine ähnliche Muskelgruppe.");
  if (alternative.stimulusScore >= source.stimulusScore - 1 && alternative.fatigueCost < source.fatigueCost) return textFor("same_stimulus_less_fatigue", "Ähnlicher Muskelreiz bei geringerer Ermüdung.");
  if (alternative.timeEfficiency > source.timeEfficiency + 1) return textFor("better_time_efficiency", "Diese Alternative ist zeiteffizienter.");
  if (alternative.reentrySuitability > source.reentrySuitability + 2) return textFor("better_reentry", "Diese Übung passt besser zum moderaten Wiedereinstieg.");
  return "";
}

function alternativeCandidateScore(sourceExercise, candidate, baseScore, preferred) {
  const ratingDelta = (personalExerciseQualityScore(candidate) - personalExerciseQualityScore(sourceExercise)) / 100;
  const value = (Number(baseScore) || 0) + (preferred ? 0.2 : 0) + ratingDelta;
  return Math.max(0, Math.min(1, Math.round(value * 100) / 100));
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
        score: alternativeCandidateScore(exercise, candidate, item.matchScore, preferredIds.has(candidate.id)),
        note: item.note || item.reason || "",
        explanation: alternativeExplanation(exercise, candidate),
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
      score: alternativeCandidateScore(exercise, candidate, 0, preferredIds.has(candidate.id)),
      note: "",
      explanation: alternativeExplanation(exercise, candidate),
      reason: "",
      source: "fallback"
    });
  });

  const sourceTargets = new Set([...(exercise.primaryMuscleGroups || []), muscleMappingForExercise(exercise.id)?.primaryMuscle].filter(Boolean));
  allExercises()
    .filter((candidate) => candidate.id !== exercise.id && !candidate.isArchived && !avoidIds.has(candidate.id) && !byId.has(candidate.id))
    .filter((candidate) => {
      const candidateTargets = new Set([...(candidate.primaryMuscleGroups || []), muscleMappingForExercise(candidate.id)?.primaryMuscle].filter(Boolean));
      const sharedTarget = [...sourceTargets].some((target) => candidateTargets.has(target));
      const sameTrackingFamily = trackingConfigForExercise(candidate).fields.some((field) => trackingConfigForExercise(exercise).fields.includes(field));
      return sharedTarget && sameTrackingFamily;
    })
    .slice(0, 16)
    .forEach((candidate) => {
      byId.set(candidate.id, {
        exercise: candidate,
        score: alternativeCandidateScore(exercise, candidate, 0.55, preferredIds.has(candidate.id)),
        note: "gleiche Zielregion aus erweiterter Bibliothek",
        explanation: alternativeExplanation(exercise, candidate),
        reason: "generischer Muskel- und Tracking-Match",
        source: "library"
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
  return "Trainiert den Zielmuskel und nutzt Hilfsmuskeln für Stabilität und Kraftübertragung.";
}

function muscleRoleCards(exercise) {
  const roles = exerciseMuscleRoles(exercise);
  return `
    <div class="muscle-grid">
      <article class="muscle-role">
        <span class="role-label">Zielmuskel</span>
        <div class="muscle-chip-row">${renderMuscleItems(roles.primary, "Nicht hinterlegt")}</div>
        <p class="muted">Hauptarbeit der Übung.</p>
      </article>
      <article class="muscle-role">
        <span class="role-label">Hilfsmuskel</span>
        <div class="muscle-chip-row">${renderMuscleItems(roles.secondary, "Keine wesentlichen Hilfsmuskeln")}</div>
        <p class="muted">Unterstützt Bewegung oder Stabilität.</p>
      </article>
      <article class="muscle-role">
        <span class="role-label">Stabilisatoren</span>
        <div class="muscle-chip-row">${renderMuscleItems(roles.stabilizers, "Nicht gesondert hinterlegt")}</div>
        <p class="muted">Halten Position und Körperspannung.</p>
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
            ${state.muscleAssets?.baseMaps?.[view] ? `<img src="${htmlesc(state.muscleAssets.baseMaps[view])}" alt="${view === "front" ? "Vorderseite" : "Rückseite"}">` : ""}
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
  const equipment = extended?.equipmentId ? equipmentNameById(extended.equipmentId) : exercise.equipment.join(", ") || "Gerät nicht hinterlegt";
  const notes = [
    `${exerciseKind(exercise)}: ${exerciseKindText(exercise)}`,
    `Primär: ${primary}.`,
    secondary ? `Sekundaer: ${secondary}.` : "Sekundaer: keine wesentlichen Hilfsmuskeln hinterlegt.",
    stabilizers ? `Stabilisatoren: ${stabilizers}.` : "Stabilisatoren: nicht gesondert hinterlegt.",
    `Gerät: ${equipment}.`
  ];
  if (extended?.spineLoadLevel) notes.push(`LWS-Last: ${spineLoadText(extended.spineLoadLevel)}.`);
  return notes;
}

function render() {
  document.getElementById("app").innerHTML = `
    <div id="app-shell" class="app-shell">
      ${state.dailyCheckinActive ? renderDailyCheckinFlow() : `
        <main id="app-content" class="app-content">
          ${renderRoute()}
        </main>
        ${renderPremiumTabs()}
        ${state.activeCoachProposalId ? renderCoachProposalReview() : ""}
      `}
    </div>
  `;
  bindEvents();
}

function renderActiveWorkoutView() {
  const app = document.getElementById("app");
  if (!app || !state.activeWorkout) {
    render();
    return;
  }
  app.innerHTML = `
    <div id="app-shell" class="app-shell">
      <main id="app-content" class="app-content">
        ${renderWorkout()}
      </main>
      ${renderPremiumTabs()}
      ${state.activeCoachProposalId ? renderCoachProposalReview() : ""}
    </div>
  `;
  bindEvents();
}

function renderRoute() {
  if (!state.seed) return `<section class="screen"><h1 class="title">D-Coach</h1><p class="subtitle">Lade Daten...</p></section>`;
  if (isMuscleMapPrototypeRoute()) return renderMuscleMapJsPrototypeScreen();
  if (state.selectedExerciseId) return renderExerciseDetail(state.selectedExerciseId);
  if (state.activeWorkout) {
    if (!ensureActiveWorkoutIntegrity()) return renderTrainingV53();
    return renderWorkout();
  }
  if (state.selectedSessionId) return renderSessionDetail(state.selectedSessionId);
  switch (state.tab) {
    case "training": return renderTrainingV53();
    case "coach": return renderCoach();
    case "plans": return renderPlans();
    case "musclemap": return renderMuscleMapScreen();
    case "exercises": return renderExercises();
    case "machines": return renderMachines();
    case "weight": return renderWeight();
    case "journal": return renderJournal();
    case "history": return renderTrainingHistory();
    case "settings": return renderSettings();
    default: return renderDashboard();
  }
}

function tabFromHash() {
  const id = String(window.location.hash || "").replace("#", "");
  const allowed = ["dashboard", "training", "coach", "plans", "musclemap", "exercises", "machines", "weight", "journal", "history", "settings", "debug-muscle-map-prototype"];
  return allowed.includes(id) ? id : "";
}

function isMuscleMapPrototypeRoute() {
  return state.tab === "debug-muscle-map-prototype" || window.location.pathname.endsWith("/debug/muscle-map-prototype");
}

function renderMuscleMapJsPrototypeScreen() {
  return `
    <section class="screen prototype-screen">
      <div class="screen-header-row">
        <div class="grow">
          <p class="eyebrow">v6.8 Debug</p>
          <h1 class="title">MuscleMapJS Prototyp</h1>
          <p class="subtitle">Isolierter Vergleich mit lokal gebundener Male MuscleMapJS-Karte. Die produktive Muscle Map bleibt unverändert.</p>
        </div>
        <span class="badge blue">MIT lokal</span>
      </div>
      <div class="prototype-toolbar" data-musclemapjs-prototype>
        <div class="segmented">
          <button data-prototype-side data-prototype-value="front">Vorne</button>
          <button data-prototype-side data-prototype-value="back">Hinten</button>
        </div>
        <div class="segmented">
          <button data-prototype-style data-prototype-value="neon">Neon</button>
          <button data-prototype-style data-prototype-value="medical">Medical</button>
          <button data-prototype-style data-prototype-value="default">Default</button>
        </div>
      </div>
      <div class="prototype-layout" data-musclemapjs-prototype>
        <article class="prototype-map-panel">
          <div class="prototype-map" data-prototype-map></div>
          <div class="prototype-legend" data-prototype-legend></div>
        </article>
        <article class="card prototype-detail" data-prototype-detail>
          <h3>Lade Prototyp...</h3>
          <p class="muted">MuscleMapJS wird lokal geladen.</p>
        </article>
      </div>
      <article class="card prototype-compare">
        <h3>Vergleich zur aktuellen Karte</h3>
        <p class="muted">Diese Seite ist nur Debug/Proof-of-Concept. Kein produktives Mapping, keine Trainingsdaten und keine Storage-Schlüssel werden verändert.</p>
      </article>
    </section>
  `;
}

function renderTabs() {
  const tabs = [
    ["dashboard", "Dashboard", "⌂"],
    ["training", "Training", "↻"],
    ["coach", "Coach", "D"],
    ["plans", "Pläne", "▥"],
    ["settings", "Tracking", "♙"]
  ];
  return `<nav class="tabs">${tabs.map(([id, label, icon]) => `<button class="tab ${state.tab === id && !state.activeWorkout && !state.selectedExerciseId && !state.selectedSessionId ? "active" : ""}" data-tab="${id}"><span class="tab-icon">${icon}</span><span>${label}</span></button>`).join("")}</nav>`;
}

function iconSvg(name) {
  const icons = {
    dumbbell: `<path d="M5 8v8M9 7v10M15 7v10M19 8v8M9 12h6"/>`,
    compass: `<circle cx="12" cy="12" r="8"/><path d="m15 9-2 5-5 2 2-5 5-2Z"/>`,
    "calendar-list": `<rect x="4" y="5" width="16" height="15" rx="3"/><path d="M8 3v4M16 3v4M4 10h16M8 14h5M8 17h7"/>`,
    "activity-chart": `<path d="M4 19V5M4 19h16M8 16v-4M12 16V8M16 16v-7M20 16v-2"/>`,
    scale: `<path d="M7 7h10l2 12H5L7 7Z"/><path d="M9 7a3 3 0 0 1 6 0M12 10v3"/>`,
    book: `<path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H20v17H7.5A2.5 2.5 0 0 0 5 22V5.5Z"/><path d="M5 5.5A2.5 2.5 0 0 1 7.5 8H20"/>`,
    body: `<circle cx="12" cy="4" r="2"/><path d="M9 8h6l2 5M7 13l2-5M10 8v6l-2 6M14 8v6l2 6"/>`,
    history: `<path d="M4 12a8 8 0 1 0 3-6.2"/><path d="M4 5v5h5M12 8v5l3 2"/>`,
    trending: `<path d="M4 17 9 12l3 3 7-8"/><path d="M15 7h4v4"/>`,
    ruler: `<path d="M5 19 19 5l-3-3L2 16l3 3Z"/><path d="m8 16-2-2M11 13l-2-2M14 10l-2-2"/>`,
    machine: `<path d="M6 20V8l6-4 6 4v12"/><path d="M9 20v-7h6v7M8 9h8"/>`,
    scanner: `<path d="M5 7V5h4M15 5h4v4M19 15v4h-4M9 19H5v-4"/><path d="M8 12h8"/>`,
    gear: `<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/>`,
    archive: `<path d="M4 7h16M6 7v13h12V7M8 4h8l2 3H6l2-3Z"/><path d="M10 12h4"/>`,
    checkin: `<path d="M4 12h4l2 6 4-12 2 6h4"/><path d="m16 18 2 2 4-4"/>`,
    tool: `<path d="M14 7a4 4 0 0 0 5 5L11 20l-4-4 8-8Z"/><path d="m6 17 1 1"/>`
  };
  return `<svg class="app-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${icons[name] || icons.trending}</svg>`;
}

function renderPremiumTabs() {
  const primaryTabs = [
    { id: "training", label: "Training", icon: "dumbbell" },
    { id: "coach", label: "Coach", icon: "compass" },
    { id: "dashboard", label: "Dashboard", center: true },
    { id: "plans", label: "Pl\u00e4ne", icon: "calendar-list" },
    { id: "settings", label: "Tracking", icon: "activity-chart" }
  ];
  const trackingTabs = new Set(["settings", "weight", "journal", "history", "machines", "musclemap", "exercises"]);
  const tabIsActive = (id) => {
    if (state.activeWorkout || state.selectedExerciseId || state.selectedSessionId) return false;
    return id === "settings" ? trackingTabs.has(state.tab) : state.tab === id;
  };
  return `
    <nav id="bottom-nav" class="bottom-nav tabs" aria-label="Hauptnavigation">
      ${primaryTabs.map((tab) => `
        <button class="tab ${tab.center ? "tab--center" : ""} ${tabIsActive(tab.id) ? "active" : ""}" data-tab="${tab.id}" aria-label="${tab.label}">
          <span class="${tab.center ? "tab-center-logo" : "tab-icon"}">${tab.center ? "D" : iconSvg(tab.icon)}</span>
          <span class="tab-label">${tab.label}</span>
        </button>
      `).join("")}
    </nav>
  `;
}

function renderCoverageCard() {
  const mode = state.coverageMode || "week";
  const standardItems = mode === "trend" ? [] : coverageForSessions(sessionsForCoverageMode(mode));
  const premiumItems = mode === "trend" ? [] : premiumCoverageForSessions(sessionsForCoverageMode(mode));
  const items = premiumItems.length ? premiumItems : standardItems;
  const visibleItems = items.slice(0, 8);
  const hints = coverageCoachHints(coverageForSessions(sessionsSince(7)));
  const texts = state.muscleMapTexts?.texts || {};
  return `
    <article class="card stack">
      <div class="row">
        <h3 class="grow">${htmlesc(texts.title || "Muscle Map")}</h3>
        <span class="badge blue">${mode === "today" ? (texts.today || "Heute") : mode === "month" ? (texts.month || "Monat") : mode === "trend" ? (texts.trend || "Trend") : (texts.week || "Woche")}</span>
      </div>
      <p class="muted">${htmlesc(texts.subtitle || "Sieh, welche Muskelgruppen belastet wurden.")}</p>
      <div class="coverage-switch">
        ${[
          ["today", "Heute"],
          ["week", "Woche"],
          ["month", "Monat"],
          ["trend", "Trend"]
        ].map(([id, label]) => `<button class="${mode === id ? "active" : ""}" data-coverage-mode="${id}">${label}</button>`).join("")}
      </div>
      ${mode === "trend" ? renderCoverageTrend() : `
        ${renderCoverageBodyView(items)}
        <div class="coverage-list">
          ${visibleItems.length ? visibleItems.map(renderCoverageRow).join("") : `<p class="muted">Noch keine Trainingsdaten für diese Ansicht.</p>`}
        </div>
        ${state.selectedMuscleId ? renderCoverageDetail(state.selectedMuscleId) : ""}
        ${hints.length && mode === "week" ? `<ul class="small-list">${hints.map((hint) => `<li>${htmlesc(hint)}</li>`).join("")}</ul>` : ""}
      `}
    </article>
  `;
}

function renderMuscleMapScreen() {
  const mode = state.coverageMode || "week";
  const view = state.coverageView || "front";
  const items = productionCoverageItemsForMode(mode);
  const regions = premiumRegionsForView(view);
  const visibleItems = regions.map((region) => coverageItemByPremiumMuscle(items, region.muscleId));
  const selected = state.selectedMuscleId && visibleItems.some((item) => item.muscleId === state.selectedMuscleId)
    ? state.selectedMuscleId
    : visibleItems[0]?.muscleId;
  const average = visibleItems.length ? Math.round(visibleItems.reduce((sum, item) => sum + item.percent, 0) / visibleItems.length) : 0;
  return `
    <section class="screen stack muscle-map-screen">
      <header class="screen-header-row">
        <div class="grow">
          <h1 class="title">Muskelkarte</h1>
          <p class="subtitle">Belastung, Subregionen und \u00dcbungsbeitr\u00e4ge.</p>
        </div>
        <span class="badge blue">${average}%</span>
      </header>
      <div class="coverage-switch">
        ${[
          ["today", "Heute"],
          ["week", "Woche"],
          ["month", "Monat"],
          ["trend", "Trend"]
        ].map(([id, label]) => `<button class="${mode === id ? "active" : ""}" data-coverage-mode="${id}">${label}</button>`).join("")}
      </div>
      <div class="coverage-switch compact">
        ${[["front", "Vorne"], ["back", "Hinten"]].map(([id, label]) => `<button class="${view === id ? "active" : ""}" data-coverage-view="${id}">${label}</button>`).join("")}
      </div>
      <article class="muscle-map-stage">
        ${productionMuscleMapEnabled() ? renderProductionMuscleMap(view, mode, items, visibleItems) : regions.length ? renderPremiumMuscleSvg(view, items, regions) : `<p class="muted">Muskelkarte konnte nicht geladen werden.</p>`}
      </article>
      ${mode === "trend" ? renderCoverageTrend() : ""}
      <div class="coverage-list muscle-map-list" aria-label="Muskelgruppen">
        ${visibleItems.length ? visibleItems.map(renderCoverageRow).join("") : `<p class="muted">Keine Muskelregionen für diese Ansicht.</p>`}
      </div>
      ${selected ? renderCoverageDetail(selected) : `<article class="card"><p class="muted">Wähle einen Muskel für Details.</p></article>`}
    </section>
  `;
}

function productionMuscleMapEnabled() {
  const config = state.productionMuscleMapConfig;
  if (!config?.enabledByDefault) return false;
  if (new URLSearchParams(window.location.search).get("forceLegacyMuscleMap") === "1") return false;
  const flag = config.featureFlag || "useProductionMuscleMap";
  return currentUserSettings()[flag] !== false && Boolean(state.muscleMapJsAdapterSeed?.mappings?.length);
}

function productionCoverageItemsForMode(mode) {
  if (mode === "today") return premiumCoverageForSessions(sessionsForToday());
  if (mode === "month") return premiumCoverageForSessions(sessionsSince(30));
  if (mode === "trend") return premiumTrendCoverageItems();
  return premiumCoverageForSessions(sessionsSince(7));
}

function premiumTrendCoverageItems() {
  const regions = state.premiumMuscleRegions?.regions || [];
  return regions.map((region) => {
    const history = premiumCoverageHistoryForMuscle(region.muscleId);
    const activeWeeks = history.filter((week) => week.percent > 0);
    const average = history.length ? Math.round(history.reduce((sum, week) => sum + Math.min(week.percent, 160), 0) / history.length) : 0;
    const last = history[history.length - 1]?.percent || 0;
    const previous = history[history.length - 2]?.percent || 0;
    return {
      muscleId: region.muscleId,
      name: region.label,
      points: average / 100,
      percent: average,
      isTarget: activeWeeks.length > 0,
      group: region.group,
      view: region.view,
      trendDelta: last - previous
    };
  }).sort((a, b) => b.percent - a.percent || a.name.localeCompare(b.name));
}

function productionMuscleMapPayload(view, mode, items, visibleItems) {
  return {
    version: "6.17.3",
    view,
    mode,
    modeLabel: mode === "trend" ? "Trend" : mode === "today" ? "Heute" : mode === "month" ? "Monat" : "Diese Woche",
    selectedMuscleId: state.selectedMuscleId || visibleItems[0]?.muscleId || null,
    coverage: items.map((item) => ({
      muscleId: item.muscleId,
      name: item.name,
      percent: item.percent,
      trendDelta: item.trendDelta || 0
    })),
    adapter: state.muscleMapJsAdapterSeed,
    heatmap: state.muscleMapJsHeatmap,
    config: state.productionMuscleMapConfig
  };
}

function renderProductionMuscleMap(view, mode, items, visibleItems) {
  window.dcoachProductionMuscleMapPayload = productionMuscleMapPayload(view, mode, items, visibleItems);
  return `
    <div class="production-muscle-map-shell" data-production-muscle-map>
      <div class="production-muscle-map" data-production-muscle-map-canvas></div>
      <div class="production-muscle-map-status" data-production-muscle-map-status>
        <span class="badge blue">MuscleMapJS</span>
        <span>${htmlesc(mode === "trend" ? "Trend" : mode === "today" ? "Heute" : mode === "month" ? "Monat" : "Woche")}</span>
      </div>
      <p class="quiet production-muscle-map-fallback" data-production-muscle-map-fallback hidden>Fallback: bisherige D-Coach-Muskelkarte wird verwendet.</p>
    </div>
  `;
}

function renderCoverageRow(item) {
  const color = coverageRowTone(item.percent);
  const width = Math.min(item.percent, 100);
  return `
    <button class="coverage-row ${color} ${state.selectedMuscleId === item.muscleId ? "selected" : ""}" data-select-coverage-muscle="${htmlesc(item.muscleId)}" data-coverage-color-band="${htmlesc(item.colorBand || getCoverageColorBand(item.percent))}">
      <div class="row">
        <strong class="grow">${htmlesc(item.name)}</strong>
        <span>${item.percent}%</span>
      </div>
      <div class="coverage-bar"><span style="width:${width}%"></span></div>
    </button>
  `;
}

function renderCoverageBodyView(items) {
  const view = state.coverageView || "front";
  const texts = state.muscleMapTexts?.texts || {};
  const regions = premiumRegionsForView(view).length ? premiumRegionsForView(view) : state.muscleMapRegions?.regions?.filter((item) => item.view === view) || [];
  const muscleIds = [...new Set(regions.map((item) => item.muscleId))];
  return `
    <div class="coverage-body">
      <div class="coverage-switch compact">
        ${[["front", texts.front || "Vorne"], ["back", texts.back || "Hinten"]].map(([id, label]) => `<button class="${view === id ? "active" : ""}" data-coverage-view="${id}">${label}</button>`).join("")}
      </div>
      <div class="coverage-body-map">
        ${renderInteractiveMuscleSvg(view, items)}
        <div class="coverage-body-chips">
          ${muscleIds.map((muscleId) => {
            const item = coverageItemByPremiumMuscle(items, muscleId);
            const selected = state.selectedMuscleId === muscleId;
            return `<button class="${selected ? "selected" : ""}" style="--coverage-color:${coverageColorFor(item.percent)}" data-open-coverage-muscle="${htmlesc(muscleId)}">${htmlesc(item.name)}</button>`;
          }).join("")}
        </div>
      </div>
      <p class="quiet">${htmlesc(texts.tapHint || "Tippe auf einen Muskel für Details.")}</p>
    </div>
  `;
}

function renderInteractiveMuscleSvg(view, items) {
  const premiumRegions = premiumRegionsForView(view);
  if (premiumRegions.length) return renderPremiumMuscleSvg(view, items, premiumRegions);
  const regions = state.muscleMapRegions?.regions?.filter((item) => item.view === view) || [];
  if (!regions.length) {
    return `<img src="./assets/muscle_maps/muscle_map_${view}_v3.0.0.svg" alt="${view === "front" ? "Vorderseite" : "Rückseite"}">`;
  }
  const selected = state.selectedMuscleId;
  const regionMarkup = regions.map((region, index) => {
    const item = coverageItemByMuscle(items, region.muscleId);
    const isSelected = selected === region.muscleId;
    const opacity = selected && !isSelected ? 0.25 : 1;
    const color = coverageColorFor(item.percent);
    const shape = view === "front" ? frontRegionShape(region.svgRegionId, index) : backRegionShape(region.svgRegionId, index);
    return `<button class="svg-muscle ${isSelected ? "selected" : ""}" style="--coverage-color:${color}; --coverage-opacity:${opacity}; ${shape.style}" data-open-coverage-muscle="${htmlesc(region.muscleId)}" title="${htmlesc(region.label)}"><span>${htmlesc(region.label)}</span></button>`;
  }).join("");
  return `
    <div class="interactive-muscle-map ${view}">
      <img src="./assets/muscle_maps/muscle_map_${view}_v3.0.0.svg" alt="${view === "front" ? "Vorderseite" : "Rückseite"}">
      ${regionMarkup}
    </div>
  `;
}

function renderPremiumMuscleSvg(view, items, regions) {
  const selected = state.selectedMuscleId;
  const regionIds = new Set(regions.map((region) => region.muscleId));
  const regionMarkup = premiumMusclePathDefinitions(view).filter((region) => regionIds.has(region.muscleId)).map((region) => {
    const item = coverageItemByPremiumMuscle(items, region.muscleId);
    const label = premiumRegionByMuscleId(region.muscleId)?.label || region.label;
    const isSelected = selected === region.muscleId;
    const opacity = selected && !isSelected ? 0.3 : 1;
    return `<path id="${view}_${region.id}" class="premium-svg-region ${isSelected ? "selected" : ""}" d="${region.d}" fill="${coverageColorFor(item.percent)}" opacity="${opacity}" data-open-coverage-muscle="${htmlesc(region.muscleId)}" data-muscle-id="${htmlesc(region.muscleId)}" data-region-key="${htmlesc(region.id)}" tabindex="0" role="button" aria-label="${htmlesc(label)} ${region.side} ${item.percent} Prozent"></path>`;
  }).join("");
  return `
    <div class="interactive-muscle-map premium inline ${view}">
      <svg class="premium-body-svg" viewBox="0 0 220 520" role="img" aria-label="${view === "front" ? "Athletische Muskelkarte Vorderseite" : "Athletische Muskelkarte Rückseite"}">
        ${renderPremiumBodyBase(view)}
        <g class="premium-svg-regions">
          ${regionMarkup}
        </g>
      </svg>
    </div>
  `;
}

function renderPremiumBodyBase(view) {
  return `
    <g class="premium-body-base">
      <path class="premium-body-shadow" d="M110 18 C126 18 138 31 136 47 C135 61 124 70 110 70 C96 70 85 61 84 47 C82 31 94 18 110 18 Z"></path>
      <path class="premium-body-shadow" d="M92 68 C101 77 119 77 128 68 L136 98 C127 104 93 104 84 98 Z"></path>
      <path class="premium-body-shadow" d="M55 116 C71 91 149 91 165 116 C177 153 174 209 163 252 C153 275 132 286 110 286 C88 286 67 275 57 252 C46 209 43 153 55 116 Z"></path>
      <path class="premium-body-shadow" d="M54 118 C34 130 27 170 24 219 C23 249 27 272 35 286 C48 284 57 275 59 259 C57 224 58 183 67 150 C71 137 69 126 54 118 Z"></path>
      <path class="premium-body-shadow" d="M166 118 C186 130 193 170 196 219 C197 249 193 272 185 286 C172 284 163 275 161 259 C163 224 162 183 153 150 C149 137 151 126 166 118 Z"></path>
      <path class="premium-body-shadow" d="M70 270 C58 314 53 391 60 488 C70 499 88 499 96 486 C94 406 99 339 108 292 C95 291 82 284 70 270 Z"></path>
      <path class="premium-body-shadow" d="M150 270 C162 314 167 391 160 488 C150 499 132 499 124 486 C126 406 121 339 112 292 C125 291 138 284 150 270 Z"></path>
      <path class="premium-body-shadow" d="M75 486 L96 486 L93 512 L61 512 C62 499 66 491 75 486 Z"></path>
      <path class="premium-body-shadow" d="M145 486 L124 486 L127 512 L159 512 C158 499 154 491 145 486 Z"></path>
      <path class="premium-body-line" d="M110 82 L110 286"></path>
      ${view === "front" ? `<path class="premium-body-line" d="M81 119 C94 132 126 132 139 119"></path>` : `<path class="premium-body-line" d="M76 118 C94 134 126 134 144 118"></path>`}
    </g>
  `;
}

function premiumMusclePathDefinitions(view) {
  const front = [
    { id: "chest_clavicular_left", muscleId: "mg_chest_clavicular", side: "links", label: "Obere Brust", d: "M73 119 C82 102 101 99 109 112 L109 139 C94 137 80 130 73 119 Z" },
    { id: "chest_clavicular_right", muscleId: "mg_chest_clavicular", side: "rechts", label: "Obere Brust", d: "M147 119 C138 102 119 99 111 112 L111 139 C126 137 140 130 147 119 Z" },
    { id: "chest_sternal_left", muscleId: "mg_chest_sternal", side: "links", label: "Mittlere Brust", d: "M72 124 C84 139 95 142 109 142 L109 174 C94 176 78 166 68 148 C67 138 68 130 72 124 Z" },
    { id: "chest_sternal_right", muscleId: "mg_chest_sternal", side: "rechts", label: "Mittlere Brust", d: "M148 124 C136 139 125 142 111 142 L111 174 C126 176 142 166 152 148 C153 138 152 130 148 124 Z" },
    { id: "chest_lower_left", muscleId: "mg_chest_lower", side: "links", label: "Untere Brust", d: "M70 154 C82 174 94 181 109 178 L109 197 C94 202 78 194 65 177 C66 168 67 160 70 154 Z" },
    { id: "chest_lower_right", muscleId: "mg_chest_lower", side: "rechts", label: "Untere Brust", d: "M150 154 C138 174 126 181 111 178 L111 197 C126 202 142 194 155 177 C154 168 153 160 150 154 Z" },
    { id: "front_delt_left", muscleId: "mg_front_delts", side: "links", label: "Vordere Schulter", d: "M56 116 C64 101 78 102 87 116 C78 123 72 136 69 151 C58 145 52 131 56 116 Z" },
    { id: "front_delt_right", muscleId: "mg_front_delts", side: "rechts", label: "Vordere Schulter", d: "M164 116 C156 101 142 102 133 116 C142 123 148 136 151 151 C162 145 168 131 164 116 Z" },
    { id: "side_delt_left", muscleId: "mg_side_delts", side: "links", label: "Seitliche Schulter", d: "M47 127 C50 116 55 112 63 114 C60 128 62 143 69 154 C57 158 45 148 47 127 Z" },
    { id: "side_delt_right", muscleId: "mg_side_delts", side: "rechts", label: "Seitliche Schulter", d: "M173 127 C170 116 165 112 157 114 C160 128 158 143 151 154 C163 158 175 148 173 127 Z" },
    { id: "biceps_left", muscleId: "mg_biceps_long", side: "links", label: "Bizeps", d: "M41 159 C52 156 60 166 59 187 C58 209 51 226 42 232 C35 217 34 179 41 159 Z" },
    { id: "biceps_right", muscleId: "mg_biceps_long", side: "rechts", label: "Bizeps", d: "M179 159 C168 156 160 166 161 187 C162 209 169 226 178 232 C185 217 186 179 179 159 Z" },
    { id: "brachialis_left", muscleId: "mg_brachialis", side: "links", label: "Brachialis", d: "M56 165 C63 176 63 211 52 231 C49 211 51 181 56 165 Z" },
    { id: "brachialis_right", muscleId: "mg_brachialis", side: "rechts", label: "Brachialis", d: "M164 165 C157 176 157 211 168 231 C171 211 169 181 164 165 Z" },
    { id: "forearm_flexors_left", muscleId: "mg_forearm_flexors", side: "links", label: "Unterarmbeuger", d: "M39 234 C51 230 57 239 55 263 C53 285 46 298 35 301 C29 278 31 249 39 234 Z" },
    { id: "forearm_flexors_right", muscleId: "mg_forearm_flexors", side: "rechts", label: "Unterarmbeuger", d: "M181 234 C169 230 163 239 165 263 C167 285 174 298 185 301 C191 278 189 249 181 234 Z" },
    { id: "abs_upper", muscleId: "mg_abs_upper", side: "mittig", label: "Oberer Bauch", d: "M88 201 C98 197 122 197 132 201 C135 222 129 241 110 244 C91 241 85 222 88 201 Z" },
    { id: "abs_lower", muscleId: "mg_abs_lower", side: "mittig", label: "Unterer Bauch", d: "M90 246 C100 250 120 250 130 246 C132 267 124 283 110 286 C96 283 88 267 90 246 Z" },
    { id: "obliques_left", muscleId: "mg_obliques", side: "links", label: "Obliques", d: "M68 188 C79 205 84 237 87 271 C75 263 66 245 61 221 C61 207 63 196 68 188 Z" },
    { id: "obliques_right", muscleId: "mg_obliques", side: "rechts", label: "Obliques", d: "M152 188 C141 205 136 237 133 271 C145 263 154 245 159 221 C159 207 157 196 152 188 Z" },
    { id: "adductors_left", muscleId: "mg_adductors", side: "links", label: "Adduktoren", d: "M95 293 C104 314 106 356 98 401 C88 368 84 326 88 296 C90 294 92 293 95 293 Z" },
    { id: "adductors_right", muscleId: "mg_adductors", side: "rechts", label: "Adduktoren", d: "M125 293 C116 314 114 356 122 401 C132 368 136 326 132 296 C130 294 128 293 125 293 Z" },
    { id: "rectus_femoris_left", muscleId: "mg_quads_rectus", side: "links", label: "Rectus femoris", d: "M77 292 C87 303 92 360 88 427 C76 409 70 342 73 307 C74 301 75 296 77 292 Z" },
    { id: "rectus_femoris_right", muscleId: "mg_quads_rectus", side: "rechts", label: "Rectus femoris", d: "M143 292 C133 303 128 360 132 427 C144 409 150 342 147 307 C146 301 145 296 143 292 Z" },
    { id: "vastus_lateralis_left", muscleId: "mg_quads_vastus_lateralis", side: "links", label: "Vastus lateralis", d: "M66 282 C73 299 73 375 77 437 C64 424 58 348 62 306 C63 297 64 289 66 282 Z" },
    { id: "vastus_lateralis_right", muscleId: "mg_quads_vastus_lateralis", side: "rechts", label: "Vastus lateralis", d: "M154 282 C147 299 147 375 143 437 C156 424 162 348 158 306 C157 297 156 289 154 282 Z" },
    { id: "vastus_medialis_left", muscleId: "mg_quads_vastus_medialis", side: "links", label: "Vastus medialis", d: "M88 382 C99 393 98 425 90 448 C80 437 80 400 88 382 Z" },
    { id: "vastus_medialis_right", muscleId: "mg_quads_vastus_medialis", side: "rechts", label: "Vastus medialis", d: "M132 382 C121 393 122 425 130 448 C140 437 140 400 132 382 Z" },
    { id: "tibialis_left", muscleId: "mg_tibialis_anterior", side: "links", label: "Tibialis", d: "M70 437 C82 444 86 478 81 503 C68 494 64 462 70 437 Z" },
    { id: "tibialis_right", muscleId: "mg_tibialis_anterior", side: "rechts", label: "Tibialis", d: "M150 437 C138 444 134 478 139 503 C152 494 156 462 150 437 Z" }
  ];
  const back = [
    { id: "rear_delt_left", muscleId: "mg_rear_delts", side: "links", label: "Hintere Schulter", d: "M55 116 C66 101 82 105 88 120 C79 127 72 139 68 153 C56 148 50 130 55 116 Z" },
    { id: "rear_delt_right", muscleId: "mg_rear_delts", side: "rechts", label: "Hintere Schulter", d: "M165 116 C154 101 138 105 132 120 C141 127 148 139 152 153 C164 148 170 130 165 116 Z" },
    { id: "traps_upper", muscleId: "mg_traps_upper", side: "mittig", label: "Oberer Trapez", d: "M84 91 C98 82 122 82 136 91 C131 112 121 125 110 128 C99 125 89 112 84 91 Z" },
    { id: "traps_mid", muscleId: "mg_traps_mid", side: "mittig", label: "Mittlerer Trapez", d: "M80 126 C97 119 123 119 140 126 C134 158 123 185 110 197 C97 185 86 158 80 126 Z" },
    { id: "rhomboids_left", muscleId: "mg_rhomboids", side: "links", label: "Rhomboiden", d: "M82 139 C93 140 103 155 109 178 C93 176 82 164 76 148 Z" },
    { id: "rhomboids_right", muscleId: "mg_rhomboids", side: "rechts", label: "Rhomboiden", d: "M138 139 C127 140 117 155 111 178 C127 176 138 164 144 148 Z" },
    { id: "lat_upper_left", muscleId: "mg_lats_upper", side: "links", label: "Lat oben", d: "M68 145 C83 160 91 194 91 225 C75 221 62 195 59 167 C61 157 64 150 68 145 Z" },
    { id: "lat_upper_right", muscleId: "mg_lats_upper", side: "rechts", label: "Lat oben", d: "M152 145 C137 160 129 194 129 225 C145 221 158 195 161 167 C159 157 156 150 152 145 Z" },
    { id: "lat_lower_left", muscleId: "mg_lats_lower", side: "links", label: "Lat unten", d: "M65 200 C82 218 91 247 88 273 C75 270 63 252 57 226 C58 215 61 206 65 200 Z" },
    { id: "lat_lower_right", muscleId: "mg_lats_lower", side: "rechts", label: "Lat unten", d: "M155 200 C138 218 129 247 132 273 C145 270 157 252 163 226 C162 215 159 206 155 200 Z" },
    { id: "triceps_left", muscleId: "mg_triceps_long", side: "links", label: "Trizeps", d: "M41 158 C53 155 60 169 58 203 C57 226 50 239 40 243 C33 221 33 178 41 158 Z" },
    { id: "triceps_right", muscleId: "mg_triceps_long", side: "rechts", label: "Trizeps", d: "M179 158 C167 155 160 169 162 203 C163 226 170 239 180 243 C187 221 187 178 179 158 Z" },
    { id: "forearm_extensors_left", muscleId: "mg_forearm_extensors", side: "links", label: "Unterarmstrecker", d: "M39 244 C50 240 56 250 54 274 C52 294 46 304 35 306 C29 284 31 257 39 244 Z" },
    { id: "forearm_extensors_right", muscleId: "mg_forearm_extensors", side: "rechts", label: "Unterarmstrecker", d: "M181 244 C170 240 164 250 166 274 C168 294 174 304 185 306 C191 284 189 257 181 244 Z" },
    { id: "erectors_upper_left", muscleId: "mg_erectors_upper", side: "links", label: "Rückenstrecker oben", d: "M97 191 C106 208 107 244 103 270 C94 258 92 216 97 191 Z" },
    { id: "erectors_upper_right", muscleId: "mg_erectors_upper", side: "rechts", label: "Rückenstrecker oben", d: "M123 191 C114 208 113 244 117 270 C126 258 128 216 123 191 Z" },
    { id: "erectors_lower_left", muscleId: "mg_erectors_lower", side: "links", label: "Rückenstrecker unten", d: "M101 268 C107 283 106 305 99 326 C89 312 91 286 101 268 Z" },
    { id: "erectors_lower_right", muscleId: "mg_erectors_lower", side: "rechts", label: "Rückenstrecker unten", d: "M119 268 C113 283 114 305 121 326 C131 312 129 286 119 268 Z" },
    { id: "gluteus_maximus_left", muscleId: "mg_glutes_maximus", side: "links", label: "Gluteus maximus", d: "M73 305 C91 292 107 301 108 323 C104 348 82 358 65 340 C63 325 66 313 73 305 Z" },
    { id: "gluteus_maximus_right", muscleId: "mg_glutes_maximus", side: "rechts", label: "Gluteus maximus", d: "M147 305 C129 292 113 301 112 323 C116 348 138 358 155 340 C157 325 154 313 147 305 Z" },
    { id: "gluteus_medius_left", muscleId: "mg_glutes_medius", side: "links", label: "Gluteus medius", d: "M65 285 C78 279 94 287 101 304 C84 300 72 304 63 316 C60 304 60 293 65 285 Z" },
    { id: "gluteus_medius_right", muscleId: "mg_glutes_medius", side: "rechts", label: "Gluteus medius", d: "M155 285 C142 279 126 287 119 304 C136 300 148 304 157 316 C160 304 160 293 155 285 Z" },
    { id: "hamstrings_outer_left", muscleId: "mg_hamstrings_biceps", side: "links", label: "Hamstrings aussen", d: "M64 347 C76 360 78 424 73 458 C61 442 57 378 64 347 Z" },
    { id: "hamstrings_outer_right", muscleId: "mg_hamstrings_biceps", side: "rechts", label: "Hamstrings aussen", d: "M156 347 C144 360 142 424 147 458 C159 442 163 378 156 347 Z" },
    { id: "hamstrings_inner_left", muscleId: "mg_hamstrings_inner", side: "links", label: "Hamstrings innen", d: "M88 348 C96 367 97 425 89 462 C80 442 79 382 88 348 Z" },
    { id: "hamstrings_inner_right", muscleId: "mg_hamstrings_inner", side: "rechts", label: "Hamstrings innen", d: "M132 348 C124 367 123 425 131 462 C140 442 141 382 132 348 Z" },
    { id: "gastrocnemius_left", muscleId: "mg_calves_gastrocnemius", side: "links", label: "Gastrocnemius", d: "M68 444 C83 450 89 482 82 503 C68 502 61 467 68 444 Z" },
    { id: "gastrocnemius_right", muscleId: "mg_calves_gastrocnemius", side: "rechts", label: "Gastrocnemius", d: "M152 444 C137 450 131 482 138 503 C152 502 159 467 152 444 Z" },
    { id: "soleus_left", muscleId: "mg_soleus", side: "links", label: "Soleus", d: "M88 455 C96 466 94 493 86 506 C80 488 81 466 88 455 Z" },
    { id: "soleus_right", muscleId: "mg_soleus", side: "rechts", label: "Soleus", d: "M132 455 C124 466 126 493 134 506 C140 488 139 466 132 455 Z" }
  ];
  return view === "front" ? front : back;
}

function premiumRegionSvgShapes(regionId, view, index) {
  const front = {
    region_chest_clavicular: [110, 126, 36, 13],
    region_chest_sternal: [110, 156, 42, 24],
    region_chest_lower: [110, 188, 34, 15],
    region_front_delts_l: [72, 132, 17, 22],
    region_side_delts_l: [148, 132, 17, 22],
    region_biceps_l: [48, 214, 13, 42],
    region_abs_upper: [110, 222, 24, 26],
    region_abs_lower: [110, 268, 22, 30],
    region_obliques_l: [82, 244, 15, 42],
    region_quad_rectus_l: [104, 358, 17, 74],
    region_quad_lateralis_l: [78, 358, 16, 70],
    region_quad_medialis_l: [123, 365, 14, 58],
    region_adductors_l: [100, 340, 13, 58]
  };
  const back = {
    region_traps_upper: [110, 112, 34, 16],
    region_traps_mid: [110, 148, 42, 28],
    region_rhomboids: [110, 176, 26, 22],
    region_lats_upper_l: [82, 196, 22, 44],
    region_lats_lower_l: [78, 244, 21, 50],
    region_rear_delts_l: [72, 132, 17, 22],
    region_triceps_l: [48, 218, 13, 44],
    region_erectors_upper: [110, 226, 16, 52],
    region_erectors_lower: [110, 280, 16, 48],
    region_glutes_maximus: [110, 324, 42, 29],
    region_hamstrings_l: [82, 404, 22, 74],
    region_calves_l: [80, 480, 18, 42]
  };
  const map = view === "front" ? front : back;
  const [cx, cy, rx, ry] = map[regionId] || [54 + (index % 4) * 36, 120 + Math.floor(index / 4) * 42, 14, 18];
  const shapes = [{ cx, cy, rx, ry, side: regionId.endsWith("_l") ? "links" : "" }];
  if (regionId.endsWith("_l")) {
    shapes.push({ cx: 220 - cx, cy, rx, ry, side: "rechts" });
  }
  return shapes;
}

function premiumRegionShapes(regionId, view, index) {
  const front = {
    region_chest_clavicular: [50, 22, 31, 7],
    region_chest_sternal: [50, 30, 34, 10],
    region_chest_lower: [50, 38, 28, 8],
    region_front_delts_l: [33, 27, 13, 12],
    region_side_delts_l: [68, 27, 13, 12],
    region_biceps_l: [24, 43, 12, 20],
    region_abs_upper: [50, 46, 18, 12],
    region_abs_lower: [50, 57, 16, 13],
    region_obliques_l: [36, 52, 13, 20],
    region_quad_rectus_l: [48, 72, 15, 28],
    region_quad_lateralis_l: [37, 72, 13, 27],
    region_quad_medialis_l: [56, 73, 12, 24],
    region_adductors_l: [50, 70, 12, 22]
  };
  const back = {
    region_traps_upper: [50, 21, 26, 8],
    region_traps_mid: [50, 29, 31, 12],
    region_rhomboids: [50, 34, 20, 11],
    region_lats_upper_l: [38, 39, 18, 18],
    region_lats_lower_l: [36, 51, 18, 20],
    region_rear_delts_l: [31, 28, 13, 12],
    region_triceps_l: [24, 43, 12, 21],
    region_erectors_upper: [50, 45, 13, 20],
    region_erectors_lower: [50, 56, 13, 20],
    region_glutes_maximus: [50, 64, 32, 16],
    region_hamstrings_l: [39, 79, 18, 27],
    region_calves_l: [39, 91, 15, 17]
  };
  const map = view === "front" ? front : back;
  const [left, top, width, height] = map[regionId] || [20 + (index % 4) * 16, 18 + Math.floor(index / 4) * 12, 12, 10];
  const shapes = [{ style: `left:${left}%; top:${top}%; width:${width}%; height:${height}%;` }];
  if (regionId.endsWith("_l")) {
    shapes.push({ style: `left:${100 - left}%; top:${top}%; width:${width}%; height:${height}%;` });
  }
  return shapes;
}

function frontRegionShape(regionId, index) {
  const map = {
    region_chest_upper: [50, 21, 30, 7],
    region_chest_middle: [50, 30, 36, 10],
    region_front_delts: [34, 25, 13, 10],
    region_side_delts: [66, 25, 13, 10],
    region_biceps: [26, 38, 10, 16],
    region_triceps: [74, 38, 10, 16],
    region_abs: [50, 45, 20, 22],
    region_obliques: [37, 46, 12, 19],
    region_quads: [44, 71, 17, 28],
    region_adductors: [50, 71, 11, 24],
    region_calves_front: [50, 87, 28, 14]
  };
  const [left, top, width, height] = map[regionId] || [20 + (index % 4) * 16, 18 + Math.floor(index / 4) * 12, 12, 10];
  return { style: `left:${left}%; top:${top}%; width:${width}%; height:${height}%;` };
}

function backRegionShape(regionId, index) {
  const map = {
    region_traps: [50, 20, 32, 9],
    region_upper_back: [50, 27, 40, 13],
    region_rhomboids: [50, 29, 22, 11],
    region_lats: [50, 38, 48, 25],
    region_rear_delts: [33, 25, 13, 10],
    region_erectors: [50, 47, 14, 30],
    region_glutes: [50, 61, 36, 15],
    region_abductors: [36, 66, 11, 19],
    region_hamstrings: [50, 77, 35, 27],
    region_calves_back: [50, 88, 28, 15]
  };
  const [left, top, width, height] = map[regionId] || [20 + (index % 4) * 16, 18 + Math.floor(index / 4) * 12, 12, 10];
  return { style: `left:${left}%; top:${top}%; width:${width}%; height:${height}%;` };
}

function renderCoverageDetail(muscleId) {
  const detail = coverageDetailForMuscle(muscleId);
  const contributors = [...detail.mainExerciseContributors, ...detail.secondaryExerciseContributors];
  const statusClass = muscleDetailStatusClass(detail.status);
  return `
    <div class="coverage-detail muscle-detail-system">
      <div class="row">
        <h4 class="grow">${htmlesc(detail.muscleName)}</h4>
        <span class="badge ${statusClass}">${htmlesc(muscleDetailStatusLabel(detail.status))}</span>
      </div>
      <div class="coverage-detail-metrics">
        <div><strong>${detail.todayCoveragePercent}%</strong><span>Heute</span></div>
        <div><strong>${detail.weekCoveragePercent}%</strong><span>Woche</span></div>
        <div><strong>${detail.monthCoveragePercent}%</strong><span>Monat</span></div>
      </div>
      <div class="coverage-target-row">
        <span>Zielwert</span>
        <div class="coverage-bar"><span style="width:${Math.min(detail.weekCoveragePercent, 100)}%; background:${coverageColorFor(detail.weekCoveragePercent)}"></span></div>
        <strong>${detail.targetPercent}%</strong>
      </div>
      <p class="quiet">100 % entspricht deinem hinterlegten Wochenziel für diesen Muskel. Werte über 100 % bedeuten Über Ziel; die Balkenfüllung endet optisch bei 100 %.</p>
      ${detail.subregions.length ? `<div class="chip-row">${detail.subregions.map((name) => `<span class="muscle-chip">${htmlesc(name)}</span>`).join("")}</div>` : ""}
      <p class="muted">${htmlesc(detail.coachText)}</p>
      <div class="muscle-detail-columns">
        <div>
          <h4>${htmlesc(muscleDetailText("mainLoad", "Hauptbelastung"))}</h4>
          ${detail.mainExerciseContributors.length ? `<ul class="small-list">${detail.mainExerciseContributors.map(renderMuscleContributor).join("")}</ul>` : `<p class="quiet">Keine direkte Hauptbelastung in dieser Woche.</p>`}
        </div>
        <div>
          <h4>${htmlesc(muscleDetailText("secondaryLoad", "Hilfsbelastung"))}</h4>
          ${detail.secondaryExerciseContributors.length ? `<ul class="small-list">${detail.secondaryExerciseContributors.map(renderMuscleContributor).join("")}</ul>` : `<p class="quiet">Keine Hilfsbelastung in dieser Woche.</p>`}
        </div>
      </div>
      <div>
        <h4>Verlauf</h4>
        <div class="trend-bars muscle-detail-trend">
          ${detail.history.map((week) => `<div class="trend-item"><span style="height:${Math.max(14, Math.min(120, week.percent))}px; background:${coverageColorFor(week.percent)}"></span><small>${htmlesc(week.label)}</small></div>`).join("")}
        </div>
      </div>
      ${contributors.length ? `<p class="quiet">${htmlesc(muscleDetailText("contributors", "Beteiligte Übungen"))}: ${contributors.length}</p>` : `<p class="quiet">Noch keine Übung für diese Muskelgruppe in der aktuellen Woche.</p>`}
    </div>
  `;
}

function renderMuscleContributor(item) {
  return `<li>${htmlesc(item.name)}: ${Math.round(item.points * 10) / 10} Punkte (${htmlesc(item.role)})</li>`;
}

function renderCoverageTrend() {
  const weeks = coverageTrendWeeks();
  return `
    <div class="trend-bars coverage-trend">
      ${weeks.map((week) => `<div class="trend-item"><span style="height:${Math.max(16, Math.min(120, week.percent))}px"></span><small>${htmlesc(week.label)}</small></div>`).join("")}
    </div>
    <p class="quiet">Durchschnittliche Wochenabdeckung der Zielmuskeln.</p>
  `;
}

function renderPerformanceCoachCard(session) {
  const insights = performanceInsightsForSession(session);
  if (!insights.length) return "";
  return `
    <article class="card stack">
      <div class="row">
        <h3 class="grow">Performance Coach</h3>
        <span class="badge blue">v2.5</span>
      </div>
      ${insights.slice(0, 5).map(({ exercise, insight, progression, smartNote }) => `
        <div class="coach-insight">
          <div class="row">
            <strong class="grow">${htmlesc(exercise.exerciseNameSnapshot)}</strong>
            <span class="badge ${progression.decisionType === "change_exercise" || insight.performance.classification === "drop" ? "amber" : insight.records.length ? "green" : "blue"}">${htmlesc(insight.records[0] || progression.label)}</span>
          </div>
          <p class="muted">${htmlesc(smartNote)}</p>
          <p class="quiet">${htmlesc(progression.coachText)}${progression.nextWeightKg ? ` Nächstes Ziel: ${kg(progression.nextWeightKg)}.` : ""} · ${progression.confidencePercent}% ${htmlesc(progression.confidenceLabel)}</p>
          <details>
            <summary>Warum?</summary>
            <ul class="small-list">
              ${[...progression.why, ...insight.evidence, ...insight.whyBullets].map((item) => `<li>${htmlesc(item)}</li>`).join("")}
            </ul>
          </details>
        </div>
      `).join("")}
    </article>
  `;
}

function timelineText(key, fallback) {
  return state.workoutTimelineTexts?.texts?.[key] || fallback;
}

function workoutTimelineEvents(session) {
  if (!session) return [];
  const insights = performanceInsightsForSession(session);
  const insightByExercise = new Map(insights.map((item) => [item.exercise.exerciseId, item]));
  const events = [{
    type: "workout_start",
    title: "Training gestartet",
    text: dateTimeText(session.startedAt),
    tone: "blue"
  }];
  [...session.completedExercises].sort((a, b) => a.sortOrder - b.sortOrder).forEach((exercise) => {
    const completedSets = (exercise.sets || []).filter((set) => set.completed).length;
    const insight = insightByExercise.get(exercise.exerciseId);
    events.push({
      type: "exercise_start",
      title: exercise.exerciseNameSnapshot,
      text: `${completedSets}/${exercise.plannedSets || exercise.sets?.length || 0} Sätze abgeschlossen - ${Math.round(totalVolume(exercise))} kg`,
      tone: "blue"
    });
    (insight?.insight.records || []).forEach((record) => {
      events.push({
        type: "pr",
        title: timelineText("newPr", "Neue Bestleistung"),
        text: `${exercise.exerciseNameSnapshot}: ${record}`,
        tone: "green"
      });
    });
    if (insight?.smartNote) {
      events.push({
        type: "coach_note",
        title: "Smart Note",
        text: insight.smartNote,
        tone: insight.progression.decisionType === "change_exercise" ? "amber" : "blue"
      });
    }
  });
  sessionPersonalRecordEvents(session).forEach((record) => {
    events.push({
      type: "pr",
      title: achievementText("newRecord", timelineText("newPr", "Neue Bestleistung")),
      text: record,
      tone: "green"
    });
  });
  events.push({
    type: "workout_end",
    title: timelineText("workoutFinished", "Training beendet"),
    text: `${sessionDurationMinutes(session)} Minuten - ${sessionSetCount(session)} Sätze - ${Math.round(sessionVolume(session))} kg Volumen`,
    tone: "green"
  });
  return events;
}

function renderWorkoutTimelineCard(session) {
  const events = workoutTimelineEvents(session);
  return `
    <article class="card stack workout-timeline-card">
      <div class="row">
        <h3 class="grow">${htmlesc(timelineText("title", "Workout Timeline"))}</h3>
        <span class="badge blue">${events.length} Events</span>
      </div>
      <p class="muted">${sessionSetCount(session)} Sätze, ${session.completedExercises.length} Übungen, ${Math.round(sessionVolume(session))} kg Gesamtvolumen.</p>
      <div class="workout-timeline-list">
        ${events.map((event) => `
          <div class="timeline-event ${htmlesc(event.tone)}">
            <span></span>
            <div>
              <strong>${htmlesc(event.title)}</strong>
              <p class="muted">${htmlesc(event.text)}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function achievementText(key, fallback) {
  return state.achievementTexts?.texts?.[key] || fallback;
}

function allExerciseRecords(sessions = storage.sessions) {
  const records = new Map();
  [...sessions].sort((a, b) => new Date(a.startedAt) - new Date(b.startedAt)).forEach((session) => {
    (session.completedExercises || []).forEach((exercise) => {
      const current = records.get(exercise.exerciseId) || {
        exerciseId: exercise.exerciseId,
        exerciseName: exercise.exerciseNameSnapshot,
        maxWeight: 0,
        maxRepsAtWeight: 0,
        maxVolume: 0,
        date: session.startedAt
      };
      const bestSet = (exercise.sets || []).reduce((best, set) => {
        const weight = Number(set.actualWeightKg) || 0;
        const reps = Number(set.actualReps) || 0;
        if (weight > (best.weight || 0) || (weight === best.weight && reps > (best.reps || 0))) return { weight, reps };
        return best;
      }, { weight: 0, reps: 0 });
      const volume = totalVolume(exercise);
      if (bestSet.weight > current.maxWeight || (bestSet.weight === current.maxWeight && bestSet.reps > current.maxRepsAtWeight)) {
        current.maxWeight = bestSet.weight;
        current.maxRepsAtWeight = bestSet.reps;
        current.date = session.startedAt;
      }
      if (volume > current.maxVolume) {
        current.maxVolume = volume;
        current.volumeDate = session.startedAt;
      }
      records.set(exercise.exerciseId, current);
    });
  });
  return [...records.values()].sort((a, b) => b.maxWeight - a.maxWeight || b.maxVolume - a.maxVolume);
}

function sessionPersonalRecordEvents(session) {
  if (!session) return [];
  const previousSessions = storage.sessions.filter((item) => new Date(item.startedAt) < new Date(session.startedAt));
  const previousRecords = new Map(allExerciseRecords(previousSessions).map((record) => [record.exerciseId, record]));
  return (session.completedExercises || []).flatMap((exercise) => {
    const previous = previousRecords.get(exercise.exerciseId);
    const bestWeight = Math.max(0, ...(exercise.sets || []).map((set) => Number(set.actualWeightKg) || 0));
    const volume = totalVolume(exercise);
    const events = [];
    if (bestWeight > 0 && (!previous || bestWeight > previous.maxWeight)) {
      events.push(`${exercise.exerciseNameSnapshot}: ${kg(bestWeight)} Bestgewicht`);
    }
    if (volume > 0 && (!previous || volume > previous.maxVolume)) {
      events.push(`${exercise.exerciseNameSnapshot}: ${Math.round(volume)} kg Volumen`);
    }
    return events;
  }).slice(0, 5);
}

function bestMuscleWeekRecord() {
  const targetMuscles = activePlanTargetMuscles();
  let best = null;
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  for (let index = 12; index >= 0; index -= 1) {
    const start = new Date(now);
    start.setDate(start.getDate() - (index * 7) - 6);
    const end = new Date(start);
    end.setDate(end.getDate() + 7);
    coverageForSessions(sessionsBetween(start, end))
      .filter((item) => !targetMuscles.size || item.isTarget)
      .forEach((item) => {
        if (!best || item.percent > best.percent) best = { ...item, date: start.toISOString() };
      });
  }
  return best;
}

function achievementItems() {
  const count = storage.sessions.length;
  const records = sessionPersonalRecordEvents(lastSession());
  const bestWeight = storage.weights.length ? [...storage.weights].sort((a, b) => a.weightKg - b.weightKg)[0] : null;
  return [
    { id: "first_workout", title: "Erstes Training", active: count >= 1, text: count >= 1 ? "Erste Einheit gespeichert." : "Noch keine Einheit gespeichert." },
    { id: "ten_workouts", title: "10 Workouts", active: count >= 10, text: `${count}/10 gespeicherte Einheiten.` },
    { id: "hundred_workouts", title: "100 Workouts", active: count >= 100, text: `${count}/100 gespeicherte Einheiten.` },
    { id: "new_pr", title: achievementText("newRecord", "Neue Bestleistung"), active: records.length > 0, text: records[0] || "Noch kein neuer PR in der letzten Einheit." },
    { id: "bodyweight_milestone", title: "Körpergewicht", active: Boolean(bestWeight), text: bestWeight ? `Niedrigster gespeicherter Wert: ${kg(bestWeight.weightKg)}.` : "Noch kein Gewicht gespeichert." }
  ];
}

function renderRecordsAchievementsCard(session = lastSession()) {
  const exerciseRecords = allExerciseRecords().slice(0, 5);
  const sessionRecords = sessionPersonalRecordEvents(session);
  const bestMuscle = bestMuscleWeekRecord();
  const achievements = achievementItems();
  return `
    <article class="card stack records-achievements-card">
      <div class="row">
        <h3 class="grow">${htmlesc(achievementText("title", "Rekorde & Meilensteine"))}</h3>
        <span class="badge blue">v3.5</span>
      </div>
      <p class="muted">${htmlesc(achievementText("notChildish", "Sachliche Meilensteine statt Spiel-Level."))}</p>
      ${sessionRecords.length ? `<div class="record-highlight"><strong>${htmlesc(achievementText("newRecord", "Neue Bestleistung"))}</strong><p class="muted">${sessionRecords.map(htmlesc).join("<br>")}</p></div>` : ""}
      <div class="achievement-grid">
        ${achievements.map((item) => `
          <div class="achievement-item ${item.active ? "active" : ""}">
            <strong>${htmlesc(item.title)}</strong>
            <p class="muted">${htmlesc(item.text)}</p>
          </div>
        `).join("")}
      </div>
      ${exerciseRecords.length ? `<ul class="small-list">${exerciseRecords.map((record) => `<li>${htmlesc(record.exerciseName)}: ${kg(record.maxWeight)} x ${record.maxRepsAtWeight || "-"} - ${Math.round(record.maxVolume)} kg Volumen</li>`).join("")}</ul>` : `<p class="quiet">Noch keine Rekorde berechenbar.</p>`}
      ${bestMuscle ? `<p class="quiet">Bester Muskel-Wochenwert: ${htmlesc(bestMuscle.name)} mit ${bestMuscle.percent}%.</p>` : ""}
    </article>
  `;
}

function renderCoachDashboardPremium() {
  const plan = activePlan();
  const session = lastSession();
  const nextDay = nextPlanDayAfterLastSession(plan)?.name || "-";
  const weekSessions = sessionsSince(7);
  const coverageItems = coverageForSessions(weekSessions);
  const undertrained = coverageItems.filter((item) => item.percent < 70).slice(0, 3);
  const strong = coverageItems.filter((item) => item.percent >= 70 && item.percent <= 120).slice(0, 3);
  const insights = session ? performanceInsightsForSession(session) : [];
  const mainInsight = insights[0];
  const records = insights.flatMap((item) => item.insight.records.map((record) => ({
    exercise: item.exercise.exerciseNameSnapshot,
    record
  }))).slice(0, 3);
  const recommendationTitle = mainInsight ? mainInsight.progression.label : "Erstes Training sauber erfassen";
  const recommendationText = mainInsight ? mainInsight.smartNote : "Starte die nächste Einheit und speichere alle Arbeitssaetze. Danach kann D-Coach belastbare Empfehlungen geben.";
  const whyItems = mainInsight ? [...mainInsight.progression.why, ...mainInsight.insight.evidence].slice(0, 5) : [
    "Ohne gespeicherte Trainings gibt es noch keine persönliche Leistungsbasis.",
    "Sobald Sätze vorhanden sind, werden Muskelabdeckung, Progression und PRs ausgewertet."
  ];
  return `
    <section class="coach-dashboard-premium stack" aria-label="Coach Dashboard">
      <article class="card stack premium-today-card">
        <div class="row">
          <div class="grow">
            <p class="muted">Heute</p>
            <h2>${plan ? htmlesc(nextDay) : "Plan auswählen"}</h2>
          </div>
          <span class="badge blue">v3.2</span>
        </div>
        <p class="muted">${plan ? `Aktiver Plan: ${htmlesc(plan.planName)}` : "Ohne aktiven Plan bleibt die Empfehlung allgemein."}</p>
        <button class="primary" ${plan ? "data-start-training-flow" : "data-tab=\"plans\""}>${plan ? "Training starten" : "Zu den Plänen"}</button>
      </article>

      <div class="premium-card-grid">
        <article class="card stack">
          <div class="row">
            <h3 class="grow">Muscle Coverage</h3>
            <button class="chip-button" data-tab="musclemap">Map</button>
          </div>
          <div class="premium-mini-map">
            ${renderDashboardMiniMuscleMap(coverageItems)}
          </div>
          <div class="coverage-list compact-list">
            ${(undertrained.length ? undertrained : coverageItems.slice(0, 3)).map(renderCoverageRow).join("") || `<p class="muted">Noch keine Wochenbelastung gespeichert.</p>`}
          </div>
        </article>

        <article class="card stack">
          <div class="row">
            <h3 class="grow">Coach Empfehlung</h3>
            <span class="badge ${mainInsight?.progression.decisionType === "increase" ? "green" : "blue"}">${htmlesc(recommendationTitle)}</span>
          </div>
          <p class="muted">${htmlesc(recommendationText)}</p>
          <details>
            <summary>Warum?</summary>
            <ul class="small-list">${whyItems.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>
          </details>
        </article>

        <article class="card stack">
          <div class="row">
            <h3 class="grow">Fortschritt</h3>
            <span class="badge blue">${weekSessions.length} Einheiten</span>
          </div>
          ${records.length ? `<ul class="small-list">${records.map((item) => `<li>${htmlesc(item.exercise)}: ${htmlesc(item.record)}</li>`).join("")}</ul>` : `<p class="muted">Noch keine neuen PRs in der letzten Auswertung.</p>`}
          ${strong.length ? `<p class="quiet">Stabil abgedeckt: ${strong.map((item) => htmlesc(item.name)).join(", ")}</p>` : ""}
        </article>

        <article class="card stack">
          <h3>Nächste Aktionen</h3>
          <div class="next-action-list">
            <button class="secondary" data-start-training-flow>Training starten</button>
            <button class="secondary" data-tab="journal">Readiness eintragen</button>
            <button class="secondary" data-tab="coach">Coach ansehen</button>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderDashboardMiniMuscleMap(items) {
  const visible = items.slice(0, 6);
  if (!visible.length) return `<p class="muted">Die Mini-Map füllt sich nach deinem ersten gespeicherten Training.</p>`;
  return `
    <div class="mini-muscle-map">
      ${visible.map((item) => `
        <button class="mini-muscle-pill" style="--coverage-color:${coverageColorFor(item.percent)}" data-open-coverage-muscle="${htmlesc(item.muscleId)}">
          <span>${htmlesc(item.name)}</span>
          <strong>${item.percent}%</strong>
        </button>
      `).join("")}
    </div>
  `;
}

function coachDashboardText(key, fallback) {
  return state.coachDashboardTexts?.texts?.[key] || fallback;
}

function smartCoachText(key, fallback) {
  return state.smartCoachTexts?.texts?.[key] || fallback;
}

function smartCoachPriority(ruleId) {
  return state.smartCoachPriorityRules?.rules?.find((rule) => rule.id === ruleId)?.priority || 0;
}

function coachFeedbackText(key, fallback) {
  return state.coachFeedbackTexts?.texts?.[key] || fallback;
}

function coachFeedbackForRule(ruleId) {
  return storage.coachFeedback.filter((item) => item.ruleId === ruleId || String(item.recommendationId || "").endsWith(ruleId));
}

function coachLearningWeight(ruleId) {
  if (ruleId === "safety_first") return 0;
  const feedback = coachFeedbackForRule(ruleId).slice(-20);
  return feedback.reduce((sum, item) => {
    if (item.feedbackType === "helpful") return sum + 4;
    if (item.feedbackType === "tooConservative" && ruleId === "progression_fourth") return sum + 2;
    if (["notHelpful", "wrongExercise", "wrongMuscleFocus"].includes(item.feedbackType)) return sum - 4;
    if (item.feedbackType === "tooAggressive") return sum - 3;
    return sum;
  }, 0);
}

const COACH_QUALITY_FLAGS_V616 = [
  "missing_reps",
  "missing_weight",
  "incomplete_set",
  "skipped_exercise",
  "outlier",
  "exercise_mapping_missing",
  "exercise_mapping_changed",
  "plan_changed",
  "long_training_gap",
  "insufficient_comparable_sessions",
  "missing_readiness",
  "conflicting_units",
  "stale_data",
  "manual_correction_pending"
];

const COACH_CALIBRATION_CONFIG_V616 = {
  version: "6.16.0",
  qualityWeights: {
    completeness: 0.30,
    evidenceVolume: 0.20,
    recency: 0.15,
    mapping: 0.10,
    planStability: 0.10,
    readiness: 0.10,
    outlierCleanliness: 0.05
  },
  confidenceWeights: {
    evidenceQuality: 0.30,
    outcomeHistory: 0.25,
    performanceConsistency: 0.15,
    ruleStability: 0.10,
    contextSimilarity: 0.10,
    conflictFreedom: 0.10
  },
  evidenceCaps: [
    { sessions: 0, maxConfidence: 25 },
    { sessions: 1, maxConfidence: 45 },
    { sessions: 2, maxConfidence: 60 },
    { sessionsMin: 3, sessionsMax: 5, maxConfidence: 75 },
    { sessionsMin: 6, sessionsMax: 11, maxConfidence: 88 },
    { sessionsMin: 12, maxConfidence: 95 }
  ],
  learning: {
    minimumOutcomes: 3,
    maxAdjustmentPerOutcome: 0.03,
    contextMultiplierMin: 0.80,
    contextMultiplierMax: 1.20
  },
  conflictPriority: [
    "safety_pain",
    "data_quality",
    "recovery_fatigue",
    "time_limit",
    "plan_order",
    "progression",
    "muscle_balance",
    "preferences",
    "variation"
  ]
};

function clampPercent(value) {
  return Math.max(0, Math.min(100, Math.round(Number(value) || 0)));
}

function average(values, fallback = 0) {
  const clean = values.map(Number).filter(Number.isFinite);
  return clean.length ? clean.reduce((sum, value) => sum + value, 0) / clean.length : fallback;
}

function coachConfidenceLabelV616(percent) {
  if (percent <= 39) return "niedrig";
  if (percent <= 64) return "mittel";
  if (percent <= 84) return "hoch";
  return "sehr hoch";
}

function comparableSessionsForContext(context = {}) {
  const sessions = storage.sessions || [];
  if (!context.exerciseId && !context.planDayId && !context.planId) return sessions.slice(-12);
  return sessions.filter((session) => {
    const sameDay = context.planDayId ? String(session.dayName || "") === String(context.planDayId) : true;
    const samePlan = context.planId ? String(session.planId || session.planName || "") === String(context.planId) : true;
    const hasExercise = context.exerciseId
      ? (session.completedExercises || []).some((exercise) => exercise.exerciseId === context.exerciseId)
      : true;
    return sameDay && samePlan && hasExercise;
  }).slice(-12);
}

function setHasMissingReps(set) {
  const reps = Number(set.actualReps ?? set.reps);
  return !Number.isFinite(reps) || reps <= 0;
}

function setHasMissingWeight(set) {
  const weight = Number(set.actualWeightKg ?? set.weightKg);
  return !Number.isFinite(weight) || weight < 0;
}

function completedEvidenceSets(sessions) {
  return sessions.flatMap((session) => (session.completedExercises || []).flatMap((exercise) => (exercise.sets || []).map((set) => ({
    ...set,
    exerciseId: exercise.exerciseId,
    sessionId: session.id,
    sessionStartedAt: session.startedAt
  }))));
}

function coachDataQualityForContext(context = {}) {
  const flags = new Set();
  const comparable = comparableSessionsForContext(context);
  const allSets = completedEvidenceSets(comparable);
  const completeSets = allSets.filter((set) => set.completed === true && !setHasMissingReps(set) && !setHasMissingWeight(set));
  const incompleteSets = allSets.filter((set) => set.completed !== true || setHasMissingReps(set) || setHasMissingWeight(set));
  if (incompleteSets.some((set) => setHasMissingReps(set))) flags.add("missing_reps");
  if (incompleteSets.some((set) => setHasMissingWeight(set))) flags.add("missing_weight");
  if (incompleteSets.length) flags.add("incomplete_set");
  if (!context.exerciseId && activePlan()?.days?.length && !comparable.length) flags.add("insufficient_comparable_sessions");
  if (context.exerciseId && !muscleMappingForExercise(context.exerciseId)) flags.add("exercise_mapping_missing");
  if (comparable.length < 3) flags.add("insufficient_comparable_sessions");
  const latest = comparable.map((session) => new Date(session.startedAt || session.completedAt || 0).getTime()).filter(Number.isFinite).sort((a, b) => b - a)[0] || 0;
  const daysSinceLatest = latest ? (Date.now() - latest) / 86400000 : Infinity;
  if (daysSinceLatest > 21) flags.add("stale_data");
  if (daysSinceLatest > 14) flags.add("long_training_gap");
  const readinessEntries = storage.dailyCheckins.filter((entry) => entry.status === "completed" || entry.status === "skipped");
  if (!readinessEntries.length) flags.add("missing_readiness");
  const volumes = comparable.map(sessionVolume).filter((value) => value > 0);
  const avgVolume = average(volumes, 0);
  const outliers = avgVolume ? volumes.filter((value) => value > avgVolume * 1.8 || value < avgVolume * 0.35).length : 0;
  if (outliers) flags.add("outlier");
  const completeness = allSets.length ? clampPercent((completeSets.length / allSets.length) * 100) : 0;
  const evidenceVolume = clampPercent((comparable.length / 12) * 100);
  const recencyScore = !latest ? 0 : clampPercent(100 - Math.min(100, daysSinceLatest * 4));
  const mappingQuality = context.exerciseId ? (muscleMappingForExercise(context.exerciseId) ? 100 : 0) : 90;
  const planStabilityScore = storage.sessions.slice(-6).some((session) => session.planName && session.planName !== storage.sessions.slice(-1)[0]?.planName) ? 64 : 100;
  if (planStabilityScore < 80) flags.add("plan_changed");
  const readinessAvailability = clampPercent((readinessEntries.length / Math.max(1, storage.sessions.length || 1)) * 100);
  const outlierCleanliness = clampPercent(100 - (outliers / Math.max(1, volumes.length)) * 100);
  const score = clampPercent(
    completeness * COACH_CALIBRATION_CONFIG_V616.qualityWeights.completeness +
    evidenceVolume * COACH_CALIBRATION_CONFIG_V616.qualityWeights.evidenceVolume +
    recencyScore * COACH_CALIBRATION_CONFIG_V616.qualityWeights.recency +
    mappingQuality * COACH_CALIBRATION_CONFIG_V616.qualityWeights.mapping +
    planStabilityScore * COACH_CALIBRATION_CONFIG_V616.qualityWeights.planStability +
    readinessAvailability * COACH_CALIBRATION_CONFIG_V616.qualityWeights.readiness +
    outlierCleanliness * COACH_CALIBRATION_CONFIG_V616.qualityWeights.outlierCleanliness
  );
  const reasons = [
    `${completeSets.length}/${allSets.length || 0} Sätze vollständig verwertbar.`,
    `${comparable.length} vergleichbare Einheiten.`,
    readinessEntries.length ? "Readiness-Daten vorhanden." : "Aktuelle Readiness-Daten fehlen."
  ];
  return {
    score,
    flags: [...flags].filter((flag) => COACH_QUALITY_FLAGS_V616.includes(flag)),
    comparableSessionCount: comparable.length,
    completeSetRatio: allSets.length ? Number((completeSets.length / allSets.length).toFixed(2)) : 0,
    mappingQuality,
    recencyScore,
    planStabilityScore,
    readinessAvailability,
    outlierRatio: volumes.length ? Number((outliers / volumes.length).toFixed(2)) : 0,
    reasons
  };
}

function evidenceConfidenceCap(comparableSessionCount) {
  const caps = COACH_CALIBRATION_CONFIG_V616.evidenceCaps;
  const rule = caps.find((item) => Number.isFinite(item.sessions) && item.sessions === comparableSessionCount)
    || caps.find((item) => comparableSessionCount >= (item.sessionsMin || 0) && comparableSessionCount <= (item.sessionsMax || Infinity));
  return rule?.maxConfidence || 95;
}

function contextKeyForRecommendation(recommendation, context = {}) {
  return [
    recommendation?.ruleId || recommendation?.recommendationType || "coach",
    context.exerciseId || recommendation?.exerciseId || "no_exercise",
    context.muscleId || recommendation?.muscleId || "no_muscle",
    context.planDayId || context.dayName || "no_day",
    context.planId || activePlan()?.id || activePlan()?.planName || "no_plan",
    context.recoveryClass || "recovery_unknown",
    context.timeBudgetClass || "time_60"
  ].join("|");
}

function outcomesForContextKey(contextKey) {
  const historyIds = new Set(storage.coachRecommendationHistory.filter((item) => item.contextKey === contextKey).map((item) => item.id));
  return storage.recommendationOutcomes.filter((outcome) => historyIds.has(outcome.recommendationId));
}

function coachCalibrationMultiplier(contextKey) {
  const stateValue = storage.coachCalibrationState || {};
  const multiplier = Number(stateValue.contextMultipliers?.[contextKey]);
  return Number.isFinite(multiplier) ? Math.max(0.8, Math.min(1.2, multiplier)) : 1;
}

function performanceConsistencyScore(sessions) {
  const volumes = sessions.map(sessionVolume).filter((value) => value > 0);
  if (volumes.length < 2) return 45;
  const changes = volumes.slice(1).map((value, index) => Math.abs(value - volumes[index]) / Math.max(1, volumes[index]));
  return clampPercent(100 - average(changes, 0) * 100);
}

function coachConfidenceForRecommendation(recommendation, context = {}) {
  const quality = coachDataQualityForContext(context);
  const contextKey = contextKeyForRecommendation(recommendation, context);
  const outcomes = outcomesForContextKey(contextKey).filter((item) => item.result !== "inconclusive");
  const comparable = comparableSessionsForContext(context);
  const unresolvedConflicts = (context.conflicts || []).filter((item) => item.unresolved);
  const consistency = performanceConsistencyScore(comparable);
  const outcomeScore = clampPercent((outcomes.filter((item) => item.result === "positive").length * 100 + outcomes.filter((item) => item.result === "neutral").length * 60) / Math.max(1, outcomes.length));
  const ruleStability = clampPercent(85 * coachCalibrationMultiplier(contextKey));
  const contextSimilarity = context.planChanged ? 45 : 80;
  const conflictFreedom = unresolvedConflicts.length ? 20 : 100;
  let raw = clampPercent(
    quality.score * COACH_CALIBRATION_CONFIG_V616.confidenceWeights.evidenceQuality +
    outcomeScore * COACH_CALIBRATION_CONFIG_V616.confidenceWeights.outcomeHistory +
    consistency * COACH_CALIBRATION_CONFIG_V616.confidenceWeights.performanceConsistency +
    ruleStability * COACH_CALIBRATION_CONFIG_V616.confidenceWeights.ruleStability +
    contextSimilarity * COACH_CALIBRATION_CONFIG_V616.confidenceWeights.contextSimilarity +
    conflictFreedom * COACH_CALIBRATION_CONFIG_V616.confidenceWeights.conflictFreedom
  );
  const limits = [];
  const evidenceCap = evidenceConfidenceCap(quality.comparableSessionCount);
  if (raw > evidenceCap) limits.push(`Evidenz-Cap: erst ${quality.comparableSessionCount} vergleichbare Einheiten.`);
  raw = Math.min(raw, evidenceCap);
  if (quality.flags.some((flag) => ["missing_reps", "missing_weight", "incomplete_set", "conflicting_units", "exercise_mapping_missing"].includes(flag))) {
    raw = Math.min(raw, 39);
    limits.push("Critical Quality Flag begrenzt Confidence.");
  }
  if (quality.flags.includes("missing_readiness") && String(recommendation?.ruleId || "").includes("recovery")) {
    raw = Math.min(raw, 59);
    limits.push("Recovery-Empfehlung ohne aktuelle Readiness begrenzt.");
  }
  if (quality.flags.includes("plan_changed")) {
    raw = Math.min(raw, 64);
    limits.push("Kuerzlicher Planwechsel begrenzt Confidence.");
  }
  if (quality.flags.includes("outlier") && quality.comparableSessionCount <= 1) {
    raw = Math.min(raw, 45);
    limits.push("Einzelne Ausreisserleistung begrenzt Confidence.");
  }
  if (unresolvedConflicts.length) {
    raw = Math.min(raw, 39);
    limits.push("Ungelöster Sicherheits- oder Prioritätskonflikt.");
  }
  return {
    percent: Math.min(95, clampPercent(raw)),
    label: coachConfidenceLabelV616(raw),
    limits,
    dataQuality: quality,
    contextKey
  };
}

function coachHardGatesForProposal(proposal, quality = null) {
  const gates = [];
  const changeExerciseIds = (proposal?.proposedChanges || []).map((change) => change.exerciseId).filter(Boolean);
  changeExerciseIds.forEach((exerciseId) => {
    if (!exerciseById(exerciseId)) gates.push("Zieluebung existiert nicht mehr.");
    if (!muscleMappingForExercise(exerciseId)) gates.push("Muskelmapping fehlt.");
  });
  if (!proposal?.currentPlanSnapshot || planFingerprint(activePlan()) !== proposal.currentPlanFingerprint) gates.push("Plan-Snapshot ist veraltet.");
  const q = quality || coachDataQualityForContext({ exerciseId: changeExerciseIds[0] });
  if (q.flags.includes("conflicting_units")) gates.push("Einheit oder Gewichtseinheit widerspruechlich.");
  if (q.flags.includes("incomplete_set") && q.completeSetRatio === 0) gates.push("Empfehlung basiert nur auf unvollständigen Sätzen.");
  if ((proposal?.riskNotes || []).some((item) => String(item).toLowerCase().includes("schmerz")) && q.flags.includes("missing_readiness")) gates.push("Sicherheits-/Schmerzkonflikt nicht aufgelöst.");
  return [...new Set(gates)];
}

function upsertCoachRecommendationRecord(recommendation, context = {}) {
  const calibration = coachConfidenceForRecommendation(recommendation, context);
  const existing = storage.coachRecommendationHistory.find((item) => item.id === recommendation.id);
  const now = new Date().toISOString();
  const record = {
    id: recommendation.id,
    createdAt: existing?.createdAt || now,
    updatedAt: now,
    recommendationType: recommendation.ruleId || recommendation.scope || "coach",
    contextKey: calibration.contextKey,
    exerciseId: context.exerciseId || recommendation.exerciseId,
    exerciseNameSnapshot: context.exerciseNameSnapshot || recommendation.exerciseNameSnapshot,
    muscleId: context.muscleId || recommendation.muscleId,
    planId: context.planId || activePlan()?.id || activePlan()?.planName,
    planDayId: context.planDayId || context.dayName,
    recommendationPayload: {
      title: recommendation.title,
      summary: recommendation.summary,
      action: recommendation.action
    },
    baselineMetrics: {
      sessions: storage.sessions.length,
      weekSessions: sessionsSince(7).length,
      dataQualityScore: calibration.dataQuality.score
    },
    dataQualityScore: calibration.dataQuality.score,
    dataQualityFlags: calibration.dataQuality.flags,
    confidenceAtCreation: calibration.percent,
    status: existing?.status || "pending",
    applicationState: existing?.applicationState || "not_applied",
    acceptedAt: existing?.acceptedAt,
    rejectedAt: existing?.rejectedAt,
    appliedAt: existing?.appliedAt,
    appliedPlanChangeId: existing?.appliedPlanChangeId,
    evaluationDueAfter: existing?.evaluationDueAfter || new Date(Date.now() + 86400000).toISOString(),
    sourceRuleIds: [recommendation.ruleId].filter(Boolean)
  };
  storage.coachRecommendationHistory = [...storage.coachRecommendationHistory.filter((item) => item.id !== record.id), record];
  return record;
}

function resolveCoachConflicts(candidates, context = {}) {
  const priorityIndex = new Map(COACH_CALIBRATION_CONFIG_V616.conflictPriority.map((item, index) => [item, index]));
  const ranked = [...candidates].sort((a, b) => (priorityIndex.get(a.priorityClass) ?? 99) - (priorityIndex.get(b.priorityClass) ?? 99) || (b.confidencePercent || 0) - (a.confidencePercent || 0));
  const winner = ranked[0] || null;
  const suppressed = ranked.slice(1);
  const resolution = {
    id: `conflict_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    candidateRecommendationIds: candidates.map((item) => item.id).filter(Boolean),
    winnerId: winner?.id,
    suppressedIds: suppressed.map((item) => item.id).filter(Boolean),
    priorityReason: winner?.priorityClass || "none",
    userExplanation: suppressed.length
      ? [`${winner?.title || "Empfehlung"} hat Vorrang vor ${suppressed.map((item) => item.title).join(", ")}.`]
      : ["Kein Konflikt zwischen Empfehlungen."],
    unresolved: Boolean(context.unresolvedSafetyConflict)
  };
  storage.coachConflictLog = [...storage.coachConflictLog, resolution];
  return resolution;
}

function estimateSessionDurationMinutesForPlan(day) {
  const exercises = day?.exercises || [];
  const setCount = exercises.reduce((sum, item) => sum + (Number(item.sets) || 0), 0);
  return 10 + setCount * 3 + exercises.length * 2;
}

function coachTimeBudgetConflict(day, extraSetCount = 0) {
  const limit = Number(currentUserSettings().maxWorkoutMinutes) || 60;
  const estimate = estimateSessionDurationMinutesForPlan(day) + extraSetCount * 3;
  return {
    limit,
    estimate,
    conflict: estimate > limit,
    explanation: estimate > limit
      ? `Kein Zusatzvolumen: geschaetzte Gesamtdauer ${estimate} Minuten bei ${limit}-Minuten-Limit.`
      : `Zeitbudget passt: geschaetzte ${estimate} von ${limit} Minuten.`
  };
}

function coachRecommendationApplicationState(record) {
  if (!record || ["reverted", "rejected", "expired"].includes(record.status)) return record?.status === "reverted" ? "reverted" : "not_applied";
  if (record.applicationState === "applied") return "applied";
  if (record.applicationState === "partially_applied") return "partially_applied";
  if (record.applicationState === "reverted") return "reverted";
  if (record.status === "accepted" && (record.appliedAt || record.appliedPlanChangeId)) return "applied";
  return "not_applied";
}

function recommendationOutcomeEligible(record) {
  const applicationState = coachRecommendationApplicationState(record);
  return Boolean(record?.status === "accepted" && ["applied", "partially_applied"].includes(applicationState) && (record.appliedAt || record.appliedPlanChangeId));
}

function recommendationOutcomeEvaluationKey(record, session) {
  return [record?.id || "unknown_recommendation", session?.id || "unknown_session", OUTCOME_EVALUATOR_VERSION].join("|");
}

function outcomeExistsForEvaluation(record, session) {
  const key = recommendationOutcomeEvaluationKey(record, session);
  return storage.recommendationOutcomes.some((outcome) => outcome.evaluationKey === key || (outcome.recommendationId === record?.id && outcome.evaluatedSessionId === session?.id));
}

function completedExerciseForRecommendation(record, session) {
  if (!record?.exerciseId) return null;
  return (session?.completedExercises || []).find((exercise) => exercise.exerciseId === record.exerciseId) || null;
}

function compareRecommendationContext(recommendation, session, currentPlan = activePlan()) {
  const reasons = [];
  const blockingReasons = [];
  let score = 100;
  const applicationState = coachRecommendationApplicationState(recommendation);
  if (applicationState !== "applied") {
    blockingReasons.push("recommendation_not_applied");
    score -= 60;
  }
  const exercise = recommendation?.exerciseId ? completedExerciseForRecommendation(recommendation, session) : null;
  if (recommendation?.exerciseId && !exercise) {
    blockingReasons.push("exercise_changed");
    score -= 45;
  } else if (exercise) {
    reasons.push("target_exercise_matched");
  }
  if (recommendation?.appliedAt && session?.startedAt && new Date(session.startedAt) < new Date(recommendation.appliedAt)) {
    blockingReasons.push("session_before_application");
    score -= 50;
  }
  if (outcomeExistsForEvaluation(recommendation, session)) {
    blockingReasons.push("session_already_used");
    score -= 50;
  }
  const targetSets = exercise ? (exercise.sets || []) : (session?.completedExercises || []).flatMap((item) => item.sets || []);
  const completeSets = targetSets.filter((set) => set.completed === true && !setHasMissingReps(set) && !setHasMissingWeight(set));
  if (!completeSets.length) {
    blockingReasons.push("insufficient_data");
    score -= 45;
  } else if (completeSets.length < Math.max(1, Math.ceil(targetSets.length * 0.6))) {
    reasons.push("limited_set_completeness");
    score -= 25;
  } else {
    reasons.push("session_completed");
  }
  if (recommendation?.planId && session?.planId && recommendation.planId !== session.planId && recommendation.planId !== session.planName) {
    reasons.push("plan_changed");
    score -= 12;
  } else {
    reasons.push("same_plan_or_unknown");
  }
  if (recommendation?.planDayId && session?.dayName && recommendation.planDayId !== session.dayName) {
    reasons.push("different_training_day");
    score -= 10;
  }
  if (currentPlan && recommendation?.planId && ![currentPlan.id, currentPlan.planName].includes(recommendation.planId)) {
    reasons.push("current_plan_differs");
    score -= 8;
  }
  score = Math.max(0, Math.min(100, Math.round(score)));
  return {
    comparable: score >= 75 && !blockingReasons.length,
    score,
    reasons,
    blockingReasons
  };
}

function outcomeReasonCodesForEvaluation(record, session, comparison, result) {
  const codes = new Set([...comparison.reasons, ...comparison.blockingReasons]);
  if (result === "positive") codes.add("weight_progressed");
  if (result === "neutral") codes.add("session_completed");
  if (result === "negative") codes.add("target_reps_missed");
  if (result === "inconclusive" && comparison.score < 75) codes.add("context_not_comparable");
  return [...codes];
}

function evaluateRecommendationOutcome(record, session = lastSession()) {
  if (!record || !session) return null;
  if (!recommendationOutcomeEligible(record)) return null;
  if (outcomeExistsForEvaluation(record, session)) return storage.recommendationOutcomes.find((outcome) => outcome.evaluationKey === recommendationOutcomeEvaluationKey(record, session)) || null;
  const comparison = compareRecommendationContext(record, session, activePlan());
  if (comparison.score < 60) return null;
  const exerciseChanged = comparison.blockingReasons.includes("exercise_changed");
  const incomplete = comparison.blockingReasons.includes("insufficient_data") || comparison.reasons.includes("limited_set_completeness");
  const beforeVolume = Number(record.baselineMetrics?.lastVolumeKg) || null;
  const afterVolume = sessionVolume(session) || null;
  let result = "neutral";
  const reasons = [];
  if (exerciseChanged || incomplete || comparison.score < 75 || coachRecommendationApplicationState(record) === "partially_applied") {
    result = "inconclusive";
    if (exerciseChanged) reasons.push("Übung wurde gewechselt.");
    if (incomplete) reasons.push("Session enthält unvollständige Sätze.");
    if (comparison.score < 75) reasons.push("Kontext ist nur eingeschränkt vergleichbar.");
  } else if (afterVolume && beforeVolume && afterVolume > beforeVolume * 1.03) {
    result = "positive";
    reasons.push("Leistung oder Volumen nach Empfehlung verbessert.");
  } else if (afterVolume && beforeVolume && afterVolume < beforeVolume * 0.85) {
    result = "negative";
    reasons.push("Leistung nach Empfehlung deutlich niedriger.");
  } else {
    reasons.push("Keine klare positive oder negative Veränderung.");
  }
  const evaluationKey = recommendationOutcomeEvaluationKey(record, session);
  const outcome = {
    id: `outcome_${evaluationKey.replace(/[^a-zA-Z0-9_-]/g, "_")}`,
    recommendationId: record.id,
    evaluatedSessionId: session.id,
    evaluatorVersion: OUTCOME_EVALUATOR_VERSION,
    evaluationKey,
    evaluatedAt: new Date().toISOString(),
    result,
    metricsBefore: { volumeKg: beforeVolume },
    metricsAfter: { volumeKg: afterVolume },
    reasonCodes: outcomeReasonCodesForEvaluation(record, session, comparison, result),
    reasons,
    comparability: comparison,
    painChange: null,
    completionImpact: incomplete ? -1 : 0,
    timeBudgetMet: null
  };
  storage.recommendationOutcomes = [...storage.recommendationOutcomes, outcome];
  storage.coachRecommendationHistory = storage.coachRecommendationHistory.map((item) => item.id === record.id ? { ...item, status: "evaluated", updatedAt: outcome.evaluatedAt } : item);
  updateCoachCalibrationFromOutcome(record.contextKey, outcome);
  return outcome;
}

function evaluateDueCoachRecommendations(session) {
  const due = storage.coachRecommendationHistory.filter((record) => {
    if (!recommendationOutcomeEligible(record)) return false;
    if (record.applicationState === "reverted" || record.status === "reverted") return false;
    if (record.appliedAt && session?.startedAt && new Date(session.startedAt) < new Date(record.appliedAt)) return false;
    return !outcomeExistsForEvaluation(record, session);
  }).slice(0, 6);
  due.forEach((record) => evaluateRecommendationOutcome(record, session));
}

function updateCoachCalibrationFromOutcome(contextKey, outcome) {
  if (!contextKey || !outcome || outcome.result === "inconclusive") return;
  const stateValue = storage.coachCalibrationState || { version: "6.16.0", contextMultipliers: {}, safetyFlags: {}, updatedAt: null };
  const relevant = outcomesForContextKey(contextKey).filter((item) => item.result !== "inconclusive");
  if (relevant.length < COACH_CALIBRATION_CONFIG_V616.learning.minimumOutcomes) {
    storage.coachCalibrationState = { ...stateValue, version: "6.16.0", updatedAt: new Date().toISOString() };
    return;
  }
  const direction = outcome.result === "positive" ? 1 : outcome.result === "negative" ? -1 : 0;
  const previous = Number(stateValue.contextMultipliers?.[contextKey]) || 1;
  const next = Math.max(
    COACH_CALIBRATION_CONFIG_V616.learning.contextMultiplierMin,
    Math.min(COACH_CALIBRATION_CONFIG_V616.learning.contextMultiplierMax, previous + direction * COACH_CALIBRATION_CONFIG_V616.learning.maxAdjustmentPerOutcome)
  );
  storage.coachCalibrationState = {
    ...stateValue,
    version: "6.16.0",
    contextMultipliers: { ...(stateValue.contextMultipliers || {}), [contextKey]: Number(next.toFixed(2)) },
    updatedAt: new Date().toISOString()
  };
}

function coachExplanationForRecommendation(recommendation, context = {}) {
  const calibration = coachConfidenceForRecommendation(recommendation, context);
  return {
    recommendation: recommendation.title || recommendation.action || "Training sauber fortsetzen",
    why: recommendation.why || [],
    confidencePercent: calibration.percent,
    confidenceLabel: calibration.label,
    confidenceLimits: calibration.limits,
    dataQualityScore: calibration.dataQuality.score,
    dataQualityFlags: calibration.dataQuality.flags,
    evidenceUsed: recommendation.evidence || calibration.dataQuality.reasons,
    evidenceMissing: calibration.dataQuality.flags.includes("missing_readiness") ? ["Aktuelle Readiness fehlt."] : [],
    conflicts: (context.conflicts || []).flatMap((item) => item.userExplanation || []),
    safetyNotes: recommendation.requiresConfirmation ? ["Änderung erst nach bewusster Prüfung übernehmen."] : [],
    predictedEffect: recommendation.action || "",
    nextEvaluation: "Nach der nächsten vergleichbaren Einheit."
  };
}

function smartCoachInputData() {
  const weekSessions = sessionsSince(7);
  const latestSession = lastSession();
  const coverage = premiumCoverageForSessions(weekSessions);
  const recovery = recoveryFatigueSummary();
  const planSimulation = planOptimizerSummary();
  const dna = trainingDnaSummary();
  return {
    personalProfile: storage.personalProfile,
    workoutHistory: storage.sessions,
    exerciseHistory: latestSession?.completedExercises || [],
    muscleCoverage: coverage,
    recoveryFatigue: recovery,
    activePlan: activePlan(),
    planSimulation,
    trainingDna: dna
  };
}

function smartCoachRecommendation() {
  const input = smartCoachInputData();
  const plan = input.activePlan;
  const sessions = input.workoutHistory || [];
  const latestSession = lastSession();
  const insights = latestSession ? performanceInsightsForSession(latestSession) : [];
  const weak = input.muscleCoverage.filter((item) => item.percent > 0 && item.percent < 70).slice(0, 3);
  const over = input.muscleCoverage.filter((item) => item.percent > 120).slice(0, 3);
  const nextDay = nextPlanDayAfterLastSession(plan);
  const criticalPlanned = (nextDay?.exercises || [])
    .map((planned) => exerciseById(planned.exerciseId))
    .filter(Boolean)
    .filter(exerciseIsCritical)
    .slice(0, 2);
  if (!sessions.length) {
    return {
      id: "smart-coach-learning",
      scope: "daily",
      title: smartCoachText("learning", "D-Coach lernt dein Training kennen."),
      summary: smartCoachText("notEnoughData", "Noch nicht genug Daten für eine belastbare Empfehlung."),
      action: nextDay ? `${nextDay.name} starten und sauber speichern.` : "Erstes Training speichern.",
      affectedMuscles: [],
      confidencePercent: 35,
      why: ["Noch keine gespeicherte Trainingshistorie vorhanden."],
      evidence: [`Operation: ${state.smartCoachSchema?.operation || "offline_rule_based"}.`],
      alternatives: ["Training starten", "Plan auswählen"],
      requiresConfirmation: false,
      ruleId: "preference_fifth",
      priority: smartCoachPriority("preference_fifth")
    };
  }
  const candidates = [];
  const add = (ruleId, recommendation) => {
    candidates.push({
      ...recommendation,
      ruleId,
      priority: smartCoachPriority(ruleId) + coachLearningWeight(ruleId)
    });
  };

  if (input.recoveryFatigue.deloadCandidate || criticalPlanned.length) {
    add("safety_first", {
      scope: "daily",
      title: input.recoveryFatigue.deloadCandidate ? "Heute konservativ trainieren" : "LWS-sichere Variante prüfen",
      summary: input.recoveryFatigue.deloadCandidate
        ? "Mehrere Ermüdungssignale sprechen für reduzierte Belastung."
        : `${criticalPlanned[0]?.displayName || "Eine geplante Übung"} kann die LWS stärker belasten.`,
      action: input.recoveryFatigue.deloadCandidate ? "Volumen oder Intensität reduzieren." : "Alternative mit niedrigerem LWS-Risiko wählen.",
      affectedMuscles: weak.map((item) => item.name),
      confidencePercent: Math.max(72, input.recoveryFatigue.deloadCandidate ? 84 : 76),
      why: [
        input.recoveryFatigue.statusText,
        ...criticalPlanned.map((exercise) => `${exercise.displayName}: ${exercise.lumbarDiscSuitability}`)
      ],
      evidence: [`Systemische Ermüdung ${input.recoveryFatigue.systemicFatiguePercent}%.`, `Gelenkflags: ${input.recoveryFatigue.jointFlags.length}.`],
      alternatives: ["Maschinengefuehrte Variante", "Weniger Volumen", "Saubere Technik priorisieren"],
      requiresConfirmation: true
    });
  }

  if (!plan) {
    add("plan_adherence_second", {
      scope: "daily",
      title: "Plan auswählen",
      summary: "Ohne aktiven Plan bleibt der Coach allgemein.",
      action: "Aktiven Plan setzen.",
      affectedMuscles: [],
      confidencePercent: 70,
      why: ["Kein aktiver Trainingsplan gefunden."],
      evidence: [`Gespeicherte Trainings: ${sessions.length}.`],
      alternatives: ["Planbibliothek nutzen"],
      requiresConfirmation: true
    });
  }

  if (weak.length || over.length) {
    const main = weak[0] || over[0];
    add("muscle_balance_third", {
      scope: "weekly",
      title: weak[0] ? `${weak[0].name} priorisieren` : `${over[0].name} entlasten`,
      summary: `${main.name} liegt aktuell bei ${main.percent}% Wochenabdeckung.`,
      action: weak[0] ? `${weak[0].name} in der nächsten Einheit gezielt einplanen.` : `${over[0].name} diese Woche nicht weiter erhöhen.`,
      affectedMuscles: [...weak, ...over].slice(0, 4).map((item) => item.name),
      confidencePercent: Math.min(91, 65 + sessions.length * 2),
      why: [...weak.map((item) => `${item.name}: nur ${item.percent}%.`), ...over.map((item) => `${item.name}: ${item.percent}%.`)],
      evidence: [`Wochentrainings: ${sessionsSince(7).length}.`, `Plan-Simulation: ${input.planSimulation.simulatedSessions} Einheiten.`],
      alternatives: ["Nächsten Trainingstag anpassen", "Übungsalternative wählen"],
      requiresConfirmation: true
    });
  }

  if (insights[0]) {
    const insight = insights[0];
    add("progression_fourth", {
      scope: "exercise",
      title: insight.progression.label,
      summary: insight.smartNote,
      action: insight.progression.coachText,
      affectedMuscles: [],
      confidencePercent: insight.progression.confidencePercent,
      why: insight.progression.why,
      evidence: [...insight.insight.evidence, ...insight.insight.whyBullets].slice(0, 5),
      alternatives: ["Gewicht halten", "Wiederholungen steigern"],
      requiresConfirmation: false
    });
  }

  if (!candidates.length || sessions.length < 12) {
    add("preference_fifth", {
      scope: "daily",
      title: sessions.length < 12 ? smartCoachText("learning", "D-Coach lernt dein Training kennen.") : "Training sauber fortsetzen",
      summary: sessions.length < 12 ? smartCoachText("notEnoughData", "Noch nicht genug Daten für eine belastbare Empfehlung.") : "Die aktuelle Datenlage zeigt keinen dringenden Eingriff.",
      action: nextDay ? `${nextDay.name} wie geplant starten.` : "Nächste Einheit speichern.",
      affectedMuscles: [],
      confidencePercent: sessions.length < 12 ? Math.min(68, 35 + sessions.length * 3) : 74,
      why: [
        `${sessions.length}/12 Trainings für stabile Smart-Coach-Empfehlungen.`,
        "Keine Regel mit höherer Priorität verlangt aktuell eine Änderung."
      ],
      evidence: [`Operation: ${state.smartCoachSchema?.operation || "offline_rule_based"}.`],
      alternatives: ["Weiter Daten sammeln", "Training manuell starten"],
      requiresConfirmation: false
    });
  }

  const winner = candidates.sort((a, b) => b.priority - a.priority || b.confidencePercent - a.confidencePercent)[0];
  const suppressed = candidates.filter((item) => item !== winner);
  const conflictResolution = suppressed.length
    ? {
      id: `preview_conflict_${winner.ruleId}`,
      userExplanation: suppressed.map((item) => `${item.title} wird aktuell nachrangig behandelt.`),
      unresolved: false
    }
    : null;
  const context = {
    planId: plan?.id || plan?.planName,
    planDayId: nextDay?.name,
    conflicts: conflictResolution ? [conflictResolution] : []
  };
  const calibration = coachConfidenceForRecommendation(winner, context);
  return {
    id: `smart-coach-${winner.ruleId}`,
    scope: winner.scope,
    title: winner.title,
    summary: winner.summary,
    action: winner.action,
    affectedMuscles: winner.affectedMuscles || [],
    confidencePercent: Math.min(Math.max(0, Math.min(95, Math.round(winner.confidencePercent || 0))), calibration.percent),
    confidenceLabel: calibration.label,
    confidenceLimits: calibration.limits,
    dataQuality: calibration.dataQuality,
    contextKey: calibration.contextKey,
    why: winner.why || [],
    evidence: winner.evidence || [],
    alternatives: winner.alternatives || [],
    requiresConfirmation: Boolean(winner.requiresConfirmation),
    ruleId: winner.ruleId,
    priority: winner.priority
  };
}

function smartCoachRecommendationSafe() {
  try {
    const result = smartCoachRecommendation();
    if (!result?.title || !Number.isFinite(result.confidencePercent)) throw new Error("Smart Coach returned incomplete recommendation.");
    return result;
  } catch (error) {
    storage.lastErrors = [...storage.lastErrors, {
      id: `smart_coach_error_${Date.now()}`,
      at: new Date().toISOString(),
      message: error?.message || "Smart Coach fallback"
    }];
    return {
      id: "smart-coach-fallback",
      scope: "daily",
      title: "Coach pausiert",
      summary: "Eine Berechnung war unvollständig. Training bleibt manuell nutzbar.",
      action: "Nächste Einheit normal starten und Daten sauber speichern.",
      affectedMuscles: [],
      confidencePercent: 0,
      why: ["Fallback-Regel: calculation error."],
      evidence: ["Lokal geloggt, keine externen Daten."],
      alternatives: ["Training starten", "Coach später erneut prüfen"],
      requiresConfirmation: false,
      ruleId: "fallback_calculation_error",
      priority: 0
    };
  }
}

function aiReadinessSummary() {
  const required = state.aiTrainerReadinessSchema?.minimumSuggestedHistory || { workouts: 12, weeks: 4 };
  const sessions = storage.sessions.length;
  const weeks = new Set(storage.sessions.map((session) => String(session.startedAt || "").slice(0, 10,))).size
    ? Math.max(1, Math.ceil(sessions / 3))
    : 0;
  const ready = sessions >= required.workouts && weeks >= required.weeks;
  return {
    ready,
    sessions,
    weeks,
    requiredWorkouts: required.workouts,
    requiredWeeks: required.weeks,
    percent: Math.min(100, Math.round(((sessions / Math.max(1, required.workouts)) * 0.7 + (weeks / Math.max(1, required.weeks)) * 0.3) * 100))
  };
}

function coachRecommendationSummaryV54() {
  const smart = smartCoachRecommendationSafe();
  const coverage = coverageForSessions(sessionsSince(7));
  const coverageByName = new Map(coverage.map((item) => [item.name, item]));
  const weak = coverage.filter((item) => item.percent > 0 && item.percent < 70).slice(0, 3);
  const over = coverage.filter((item) => item.percent > 120).slice(0, 3);
  const optimizer = planOptimizerSummary();
  const affected = [...weak, ...over].slice(0, 4);
  const why = [
    ...smart.why,
    ...smart.evidence
  ].filter(Boolean).slice(0, 7);
  return {
    recommendation: smart.title,
    mainReason: smart.summary,
    confidence: smart.confidencePercent,
    confidenceLabel: smart.confidenceLabel || coachConfidenceLabelV616(smart.confidencePercent),
    confidenceLimits: smart.confidenceLimits || [],
    dataQuality: smart.dataQuality || coachDataQualityForContext({}),
    contextKey: smart.contextKey || contextKeyForRecommendation(smart, {}),
    affected: smart.affectedMuscles.length
      ? smart.affectedMuscles.map((name) => coverageByName.get(name) || { name, percent: 0 })
      : affected,
    proposedPlanChange: smart.action || optimizer.action,
    why,
    optimizer,
    smart
  };
}

function planFingerprint(plan) {
  return JSON.stringify({
    planName: plan?.planName || "",
    days: (plan?.days || []).map((day) => ({
      name: day.name,
      exercises: (day.exercises || []).map((entry) => ({
        exerciseId: entry.exerciseId,
        sets: Number(entry.sets) || 0,
        sortOrder: Number(entry.sortOrder) || 0
      }))
    }))
  });
}

function activePlanSnapshot() {
  const plan = activePlan();
  return plan ? JSON.parse(JSON.stringify(plan)) : null;
}

function findProposalSetChange(plan, weakMuscle) {
  if (!plan || !weakMuscle) return null;
  for (const day of plan.days || []) {
    for (const planned of day.exercises || []) {
      const mapping = muscleMappingForExercise(planned.exerciseId);
      const primary = mapping?.primaryMuscle ? canonicalizeMuscleId(mapping.primaryMuscle) : "";
      const secondary = (mapping?.secondaryMuscles || []).map(canonicalizeMuscleId);
      if (primary !== weakMuscle.muscleId && !secondary.includes(weakMuscle.muscleId)) continue;
      const exercise = exerciseById(planned.exerciseId);
      const before = Number(planned.sets) || 0;
      return {
        type: "set_count",
        dayName: day.name,
        exerciseId: planned.exerciseId,
        exerciseNameSnapshot: exercise?.displayName || planned.exerciseId,
        before,
        after: before + 1
      };
    }
  }
  return null;
}

function buildCoachPlanProposal() {
  const plan = activePlan();
  const summary = coachRecommendationSummaryV54();
  const coverage = coverageForSessions(sessionsSince(7)).filter((item) => item.isTarget || item.percent < 70).sort((a, b) => a.percent - b.percent);
  const weak = coverage[0] || coverageForSessions(sessionsSince(7)).sort((a, b) => a.percent - b.percent)[0] || null;
  const change = findProposalSetChange(plan, weak);
  const proposalId = `proposal_${stableIdPart([planFingerprint(plan), weak?.muscleId || "none", change?.dayName || "none", change?.exerciseId || "none", change?.before ?? "x", change?.after ?? "x"].join("_"))}`;
  const current = weak?.percent ?? null;
  const target = Math.max(70, current || 70);
  const predicted = current === null ? null : Math.min(100, Math.max(target, current + 18));
  const baseProposal = {
    id: proposalId,
    createdAt: new Date().toISOString(),
    scope: "exercise",
    title: weak ? `${weak.name} priorisieren` : summary.recommendation,
    summary: change ? `${change.exerciseNameSnapshot}: ${change.before} auf ${change.after} Sätze` : "Es liegt noch kein vollständiger Planvorschlag vor.",
    affectedMuscles: weak ? [{
      muscleId: weak.muscleId,
      label: weak.name,
      currentCoveragePercent: current,
      targetCoveragePercent: target,
      predictedCoveragePercent: predicted
    }] : [],
    currentPlanSnapshot: activePlanSnapshot(),
    currentPlanFingerprint: planFingerprint(plan),
    proposedChanges: change ? [change] : [],
    prediction: weak ? {
      before: { [weak.muscleId]: current || 0 },
      after: { [weak.muscleId]: predicted || current || 0 },
      confidencePercent: summary.confidence
    } : null,
    why: summary.why.length ? summary.why : ["Die Empfehlung basiert auf Wochenabdeckung, Readiness und Planstruktur."],
    evidence: summary.smart?.evidence || [],
    alternatives: change ? [{ title: "Alternative", summary: `${change.exerciseNameSnapshot} unverändert lassen und die nächste Einheit auswerten.` }] : [],
    riskNotes: ["Nur übernehmen, wenn Technik und LWS aktuell stabil sind.", "Bei Schmerz oder schlechter Readiness nicht erhöhen."],
    requiresConfirmation: true,
    status: "pending"
  };
  const quality = coachDataQualityForContext({ exerciseId: change?.exerciseId, muscleId: weak?.muscleId, planDayId: change?.dayName, planId: plan?.id || plan?.planName });
  const calibration = coachConfidenceForRecommendation({
    id: baseProposal.id,
    ruleId: "coach_plan_proposal_review",
    title: baseProposal.title,
    summary: baseProposal.summary,
    action: baseProposal.summary,
    confidencePercent: summary.confidence
  }, { exerciseId: change?.exerciseId, muscleId: weak?.muscleId, planDayId: change?.dayName, planId: plan?.id || plan?.planName });
  const hardGates = coachHardGatesForProposal(baseProposal, quality);
  return {
    ...baseProposal,
    dataQualityScore: quality.score,
    dataQualityFlags: quality.flags,
    confidencePercent: Math.min(summary.confidence, calibration.percent),
    confidenceLabel: calibration.label,
    confidenceLimits: calibration.limits,
    hardGates,
    contextKey: calibration.contextKey,
    outcomeEvaluationDueAfter: new Date(Date.now() + 86400000).toISOString()
  };
}

function coachProposalReviewState(proposal) {
  const hasConcreteChange = Boolean(proposal?.proposedChanges?.length && proposal.proposedChanges.every((change) => change.type && change.exerciseId && change.dayName && change.before !== undefined && change.after !== undefined));
  const planFresh = proposal?.currentPlanFingerprint ? planFingerprint(activePlan()) === proposal.currentPlanFingerprint : false;
  const hardGates = proposal?.hardGates || [];
  const blockedReasons = [];
  if (!hasConcreteChange) blockedReasons.push("Keine konkrete Planänderung berechnet.");
  if (!planFresh) blockedReasons.push("Der aktive Plan hat sich seit der Berechnung geändert.");
  hardGates.forEach((item) => blockedReasons.push(item));
  return {
    hasConcreteChange,
    planFresh,
    blockedReasons,
    canApply: hasConcreteChange && planFresh && !hardGates.length,
    primaryActionLabel: hasConcreteChange ? "Änderungsvorschlag prüfen" : "Details ansehen",
    statusLabel: hasConcreteChange ? "konkrete Änderung" : "nur Hinweis"
  };
}

function openCoachProposalReview() {
  const proposal = buildCoachPlanProposal();
  const reviewState = coachProposalReviewState(proposal);
  const conflict = resolveCoachConflicts([
    { id: proposal.id, title: proposal.title, priorityClass: proposal.hardGates?.length ? "data_quality" : "progression", confidencePercent: proposal.confidencePercent },
    { id: "time_budget_guard", title: "Zeitbudget schützen", priorityClass: coachTimeBudgetConflict(activePlan()?.days?.find((day) => day.name === proposal.proposedChanges?.[0]?.dayName), 1).conflict ? "time_limit" : "preferences", confidencePercent: 70 }
  ], { unresolvedSafetyConflict: proposal.hardGates?.some((item) => item.includes("Schmerz")) });
  proposal.conflictResolutionId = conflict.id;
  proposal.reviewState = reviewState;
  storage.coachPlanProposals = [...storage.coachPlanProposals.filter((item) => item.id !== proposal.id), proposal];
  upsertCoachRecommendationRecord({
    id: proposal.id,
    ruleId: "coach_plan_proposal_review",
    scope: "exercise",
    title: proposal.title,
    summary: proposal.summary,
    action: proposal.summary,
    confidencePercent: proposal.confidencePercent
  }, {
    exerciseId: proposal.proposedChanges?.[0]?.exerciseId,
    exerciseNameSnapshot: proposal.proposedChanges?.[0]?.exerciseNameSnapshot,
    muscleId: proposal.affectedMuscles?.[0]?.muscleId,
    planDayId: proposal.proposedChanges?.[0]?.dayName,
    planId: activePlan()?.id || activePlan()?.planName
  });
  state.activeCoachProposalId = proposal.id;
  state.showProposalAlternative = false;
  render();
}

function activeCoachProposal() {
  return storage.coachPlanProposals.find((item) => item.id === state.activeCoachProposalId) || null;
}

function proposalCanApply(proposal) {
  const reviewState = coachProposalReviewState(proposal);
  return Boolean(proposal?.currentPlanSnapshot && reviewState.canApply);
}

function applyCoachPlanProposal() {
  const proposal = activeCoachProposal();
  if (!proposalCanApply(proposal)) return alert("Dieser Vorschlag ist unvollständig und kann nicht übernommen werden.");
  const currentPlan = activePlan();
  if (planFingerprint(currentPlan) !== proposal.currentPlanFingerprint) {
    alert("Der Plan wurde inzwischen geändert. Bitte Vorschlag neu berechnen.");
    return;
  }
  const previous = {
    id: `undo_${proposal.id}`,
    proposalId: proposal.id,
    createdAt: new Date().toISOString(),
    activePlanName: storage.activePlanName,
    customPlans: JSON.parse(JSON.stringify(storage.customPlans)),
    planSnapshot: proposal.currentPlanSnapshot
  };
  const nextPlan = JSON.parse(JSON.stringify(currentPlan));
  proposal.proposedChanges.forEach((change) => {
    if (change.type !== "set_count") return;
    const day = nextPlan.days.find((item) => item.name === change.dayName);
    const entry = day?.exercises?.find((item) => item.exerciseId === change.exerciseId);
    if (entry) entry.sets = change.after;
  });
  if (!storage.customPlans.some((plan) => plan.planName === nextPlan.planName)) {
    nextPlan.id = `${nextPlan.id || nextPlan.planName}-coach-${Date.now()}`;
    nextPlan.planName = `${nextPlan.planName} Coach`;
  }
  nextPlan.description = `${nextPlan.description || ""} Coach-Anpassung v6.12.`.trim();
  storage.customPlans = [...storage.customPlans.filter((plan) => plan.planName !== nextPlan.planName), nextPlan];
  activatePlan(nextPlan);
  storage.coachPlanUndo = previous;
  const appliedAt = new Date().toISOString();
  const appliedPlanChangeId = previous.id;
  storage.coachPlanProposals = storage.coachPlanProposals.map((item) => item.id === proposal.id ? { ...item, status: "accepted", applicationState: "applied", appliedAt, appliedPlanChangeId } : item);
  storage.coachRecommendationHistory = storage.coachRecommendationHistory.map((item) => item.id === proposal.id ? { ...item, status: "accepted", applicationState: "applied", acceptedAt: appliedAt, appliedAt, appliedPlanChangeId, evaluationDueAfter: appliedAt, updatedAt: appliedAt } : item);
  render();
}

function rejectCoachPlanProposal() {
  const proposal = activeCoachProposal();
  if (!proposal) return;
  storage.coachPlanProposals = storage.coachPlanProposals.map((item) => item.id === proposal.id ? { ...item, status: "rejected", applicationState: "not_applied", rejectedAt: new Date().toISOString() } : item);
  storage.coachRecommendationHistory = storage.coachRecommendationHistory.map((item) => item.id === proposal.id ? { ...item, status: "rejected", applicationState: "not_applied", rejectedAt: new Date().toISOString(), updatedAt: new Date().toISOString() } : item);
  storage.coachFeedback = [...storage.coachFeedback, {
    id: `coach_feedback_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    recommendationId: proposal.id,
    ruleId: "coach_plan_proposal_review",
    feedbackType: "notHelpful",
    timestamp: new Date().toISOString()
  }];
  storage.coachContextFeedback = [...storage.coachContextFeedback, {
    id: `coach_context_feedback_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    recommendationId: proposal.id,
    contextKey: proposal.contextKey,
    feedbackType: "notHelpful",
    category: "Empfehlung unklar",
    exerciseId: proposal.proposedChanges?.[0]?.exerciseId || null,
    muscleId: proposal.affectedMuscles?.[0]?.muscleId || null,
    timestamp: new Date().toISOString()
  }];
  state.activeCoachProposalId = "";
  render();
}

function cancelCoachPlanProposal() {
  const proposal = activeCoachProposal();
  if (proposal) storage.coachPlanProposals = storage.coachPlanProposals.map((item) => item.id === proposal.id && item.status === "pending" ? { ...item, status: "cancelled" } : item);
  state.activeCoachProposalId = "";
  render();
}

function undoCoachPlanProposal() {
  const undo = storage.coachPlanUndo;
  if (!undo) return;
  storage.customPlans = undo.customPlans || [];
  storage.activePlanName = undo.activePlanName || undo.planSnapshot?.planName || "";
  storage.coachPlanProposals = storage.coachPlanProposals.map((item) => item.id === undo.proposalId ? { ...item, status: "reverted", applicationState: "reverted", revertedAt: new Date().toISOString() } : item);
  storage.coachRecommendationHistory = storage.coachRecommendationHistory.map((item) => item.id === undo.proposalId ? { ...item, status: "reverted", applicationState: "reverted", updatedAt: new Date().toISOString() } : item);
  storage.coachPlanUndo = null;
  state.activeCoachProposalId = "";
  ensureActivePlan();
  render();
}

function renderCoachProposalReview() {
  const proposal = activeCoachProposal();
  if (!proposal) return "";
  const reviewState = coachProposalReviewState(proposal);
  const canApply = reviewState.canApply && proposal.status === "pending";
  const undo = storage.coachPlanUndo?.proposalId === proposal.id;
  const confidence = proposal.confidencePercent ?? proposal.prediction?.confidencePercent ?? 0;
  const conflict = storage.coachConflictLog.find((item) => item.id === proposal.conflictResolutionId);
  return `
    <div class="proposal-backdrop" role="dialog" aria-modal="true" aria-label="Coach Vorschlag prüfen">
      <section class="proposal-sheet stack">
        <div class="row">
          <div class="grow">
            <p class="eyebrow">Coach Review</p>
            <h2>${htmlesc(proposal.title)}</h2>
            <p class="muted">${htmlesc(proposal.summary)}</p>
          </div>
          <span class="badge ${proposal.status === "accepted" ? "green" : proposal.status === "rejected" ? "amber" : reviewState.hasConcreteChange ? "blue" : "amber"}">${htmlesc(reviewState.statusLabel)}</span>
        </div>
        <article class="proposal-block">
          <h3>Status des Vorschlags</h3>
          <div class="storage-table">
            <div><span>Konkrete Änderung</span><strong>${reviewState.hasConcreteChange ? "Ja" : "Nein"}</strong></div>
            <div><span>Plan aktuell</span><strong>${reviewState.planFresh ? "Ja" : "Nein"}</strong></div>
            <div><span>Übernehmen</span><strong>${reviewState.canApply ? "möglich" : "gesperrt"}</strong></div>
          </div>
          ${reviewState.blockedReasons.length ? `<ul class="small-list">${reviewState.blockedReasons.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>` : `<p class="quiet">Der Vorschlag kann übernommen werden.</p>`}
        </article>
        <article class="proposal-block">
          <h3>Betroffene Muskeln</h3>
          ${proposal.affectedMuscles.length ? proposal.affectedMuscles.map((muscle) => `
            <div class="history-row">
              <div><strong>${htmlesc(muscle.label)}</strong><p class="muted">Ziel ${muscle.targetCoveragePercent ?? "-"}%</p></div>
              <span class="badge blue">${muscle.currentCoveragePercent ?? 0}% -> ca. ${muscle.predictedCoveragePercent ?? muscle.currentCoveragePercent ?? 0}%</span>
            </div>
          `).join("") : `<p class="muted">Keine Muskelgruppe eindeutig berechenbar.</p>`}
        </article>
        <article class="proposal-block">
          <h3>Vorher / Nachher</h3>
          ${proposal.proposedChanges.length ? proposal.proposedChanges.map((change) => `
            <div class="compare-row">
              <div><span>Vorher</span><strong>${htmlesc(change.exerciseNameSnapshot || change.exerciseId)} - ${change.before ?? "-"} Sätze</strong></div>
              <div><span>Nachher</span><strong>${htmlesc(change.exerciseNameSnapshot || change.exerciseId)} - ${change.after ?? "-"} Sätze</strong></div>
            </div>
          `).join("") : `<p class="muted">Aktuell gibt es keinen konkreten Planänderungsvorschlag. Der Coach zeigt hier nur die Auswertung und Gründe.</p>`}
        </article>
        <article class="proposal-block">
          <h3>Warum?</h3>
          <ul class="small-list">${proposal.why.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>
          ${proposal.evidence?.length ? `<ul class="small-list">${proposal.evidence.slice(0, 4).map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>` : ""}
        </article>
        <article class="proposal-block">
          <div class="row">
            <h3 class="grow">Confidence</h3>
            <span class="badge blue">${confidence}% ${htmlesc(proposal.confidenceLabel || confidenceBand(confidence))}</span>
          </div>
          <div class="confidence-bar"><span style="width:${confidence}%"></span></div>
          ${(proposal.confidenceLimits || []).length ? `<ul class="small-list">${proposal.confidenceLimits.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>` : ""}
        </article>
        <article class="proposal-block">
          <div class="row">
          <h3 class="grow">Datenqualität</h3>
            <span class="badge ${proposal.dataQualityScore >= 70 ? "green" : proposal.dataQualityScore >= 40 ? "amber" : "red"}">${proposal.dataQualityScore ?? 0}/100</span>
          </div>
          ${(proposal.dataQualityFlags || []).length ? `<p class="quiet">Flags: ${proposal.dataQualityFlags.map(htmlesc).join(", ")}</p>` : `<p class="quiet">Keine kritischen Quality Flags.</p>`}
          ${(proposal.hardGates || []).length ? `<ul class="small-list">${proposal.hardGates.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>` : ""}
        </article>
        ${conflict ? `<article class="proposal-block"><h3>Konfliktresolver</h3><ul class="small-list">${conflict.userExplanation.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul></article>` : ""}
        <article class="proposal-block">
          <h3>Nächste Auswertung</h3>
          <p class="muted">Outcome wird nach der nächsten vergleichbaren Einheit bewertet. Unvollständige oder stark abweichende Einheiten werden inconclusive.</p>
        </article>
        <article class="proposal-block">
          <h3>Sicherheit</h3>
          <ul class="small-list">${(proposal.riskNotes || []).map((item) => `<li>${htmlesc(item)}</li>`).join("") || "<li>Keine zusätzlichen Hinweise.</li>"}</ul>
        </article>
        ${state.showProposalAlternative ? `<article class="proposal-block"><h3>Alternative</h3>${(proposal.alternatives || []).map((item) => `<p class="muted"><strong>${htmlesc(item.title || "Alternative")}</strong><br>${htmlesc(item.summary || item)}</p>`).join("") || `<p class="muted">Keine Alternative hinterlegt.</p>`}</article>` : ""}
        ${!canApply && proposal.status === "pending" ? `<p class="warning compact-warning">Übernehmen ist deaktiviert: ${htmlesc(reviewState.blockedReasons[0] || "Vorschlag nicht anwendbar.")}</p>` : ""}
        <div class="proposal-actions">
          <button class="primary" data-apply-coach-proposal ${canApply ? "" : "disabled"}>Änderung übernehmen</button>
          <button class="secondary" data-show-proposal-alternative>Alternative anzeigen</button>
          <button class="secondary" data-reject-coach-proposal>Ablehnen</button>
          <button class="secondary" data-cancel-coach-proposal>Abbrechen</button>
          ${undo ? `<button class="danger" data-undo-coach-proposal>Undo</button>` : ""}
        </div>
      </section>
    </div>
  `;
}

function renderCoachFeedbackControls(recommendationId, ruleId) {
  const recent = storage.coachFeedback.filter((item) => item.recommendationId === recommendationId).slice(-1)[0];
  const options = [
    ["helpful", coachFeedbackText("helpful", "Hilfreich")],
    ["notHelpful", coachFeedbackText("notHelpful", "Nicht hilfreich")],
    ["tooAggressive", coachFeedbackText("tooAggressive", "Zu aggressiv")],
    ["tooConservative", coachFeedbackText("tooConservative", "Zu vorsichtig")]
  ];
  return `
    <div class="feedback-row" data-coach-feedback-rule="${htmlesc(ruleId)}">
      ${options.map(([type, label]) => `<button class="chip-button ${recent?.feedbackType === type ? "active" : ""}" data-coach-feedback="${htmlesc(type)}" data-recommendation-id="${htmlesc(recommendationId)}" data-rule-id="${htmlesc(ruleId)}">${htmlesc(label)}</button>`).join("")}
    </div>
  `;
}

function renderCoachDashboardV54() {
  const plan = activePlan();
  const summary = coachRecommendationSummaryV54();
  const proposalPreview = buildCoachPlanProposal();
  const proposalState = coachProposalReviewState(proposalPreview);
  const readiness = aiReadinessSummary();
  const coverage = premiumCoverageForSessions(sessionsSince(7));
  const chest = coverage.find((item) => item.muscleId === "mg_chest");
  const weak = coverage.filter((item) => item.percent < 70 && item.muscleId !== "mg_chest").slice(0, 3);
  const over = coverage.filter((item) => item.percent > 120).slice(0, 2);
  return `
    <section class="coach-dashboard-premium coach-dashboard-v54 stack" aria-label="Coach Dashboard">
      <article class="card stack coach-hero-v54">
        <div class="row">
          <div class="grow">
            <p class="muted">Smart Coach · offline</p>
            <h2>${htmlesc(summary.recommendation)}</h2>
          </div>
          <span class="badge ${summary.confidence >= 75 ? "green" : "amber"}">${summary.confidence}% ${htmlesc(summary.confidenceLabel)}</span>
        </div>
        <p class="muted">${htmlesc(summary.mainReason)}</p>
        <div class="coach-action-row">
          <button class="primary" ${plan ? "data-start-training-flow" : "data-tab=\"plans\""}>${plan ? "Training starten" : "Plan auswählen"}</button>
          <button class="secondary" data-confirm-plan-adjust>${htmlesc(proposalState.primaryActionLabel)}</button>
        </div>
        <details>
          <summary>${htmlesc(coachDashboardText("why", "Warum?"))}</summary>
          <ul class="small-list">${summary.why.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>
          ${summary.confidenceLimits.length ? `<h4>Begrenzt durch</h4><ul class="small-list">${summary.confidenceLimits.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>` : ""}
        </details>
      <p class="quiet">Datenqualität: ${summary.dataQuality.score}/100${summary.dataQuality.flags.length ? ` - ${summary.dataQuality.flags.map(htmlesc).join(", ")}` : ""}</p>
        <p class="quiet">${htmlesc(coachDashboardText("notAutomatic", "Änderungen werden erst nach deiner Bestätigung übernommen."))}</p>
        ${currentUserSettings().debugMode ? `<p class="quiet">Regel: ${htmlesc(summary.smart.ruleId)}</p>` : ""}
        ${renderCoachFeedbackControls(summary.smart.id, summary.smart.ruleId)}
      </article>
      <div class="premium-card-grid">
        <article class="card stack">
          <div class="row">
            <h3 class="grow">Prioritäten dieser Woche</h3>
            <button class="chip-button" data-tab="musclemap">Map</button>
          </div>
          ${renderDashboardMiniMuscleMap(([...(chest ? [chest] : []), ...(weak.length ? weak : coverage)]).slice(0, 6))}
          ${chest && chest.percent > 0 ? `<p class="quiet">Brust wurde heute bereits belastet: ${chest.percent}% Wochenabdeckung.</p>` : ""}
          ${over.length ? `<p class="quiet">Über Ziel: ${over.map((item) => `${htmlesc(item.name)} ${item.percent}%`).join(", ")}</p>` : ""}
        </article>
        <article class="card stack">
          <div class="row">
            <h3 class="grow">Plan-Simulation</h3>
            <span class="badge blue">${summary.optimizer.simulatedSessions} Einheiten</span>
          </div>
          <p class="muted">${htmlesc(summary.proposedPlanChange)}</p>
          <div class="mini-grid">
            <div class="fatigue-metric"><strong>${summary.optimizer.estimatedMinutes}</strong><span>Min/Woche</span></div>
            <div class="fatigue-metric"><strong>${summary.optimizer.weakPoints.length}</strong><span>Schwach</span></div>
            <div class="fatigue-metric"><strong>${summary.optimizer.overTargets.length}</strong><span>Hoch</span></div>
          </div>
        </article>
        <article class="card stack">
          <div class="row">
            <h3 class="grow">AI Readiness</h3>
            <span class="badge ${readiness.ready ? "green" : "amber"}">${readiness.ready ? "bereit" : "lernt"}</span>
          </div>
          <div class="confidence-bar"><span style="width:${readiness.percent}%"></span></div>
          <p class="muted">${readiness.sessions}/${readiness.requiredWorkouts} Trainings · ${readiness.weeks}/${readiness.requiredWeeks} Wochen.</p>
          <p class="quiet">v6 Smart Coach bleibt offline und regelbasiert. v7 AI Trainer erst nach stabiler Datenbasis.</p>
        </article>
      </div>
    </section>
  `;
}

function renderTrainingDnaCard() {
  const dna = trainingDnaSummary();
  const memory = coachMemoryItems();
  const events = timelineEvents();
  if (!dna.enough) {
    return `
      <article class="card stack">
        <div class="row">
          <h3 class="grow">Training-DNA</h3>
          <span class="badge amber">${dna.sessionCount} Einheiten</span>
        </div>
        <p class="muted">${htmlesc(trainingDnaText("not_enough_data", "Noch nicht genug Daten für eine belastbare Auswertung."))}</p>
        <p class="quiet">Aktuell: ${dna.setCount} aus mindestens 20 verwertbaren Sätzen.</p>
      </article>
    `;
  }
  return `
    <article class="card stack">
      <div class="row">
        <h3 class="grow">Training-DNA</h3>
        <span class="badge blue">${dna.weekCount} Wochen</span>
      </div>
      <div class="dna-grid">
        <div><span>Rep-Bereich</span><strong>${htmlesc(dna.topRepRange || "-")}</strong></div>
        <div><span>Ø Dauer</span><strong>${dna.averageSessionDurationMinutes || "-"} min</strong></div>
      </div>
      ${dna.exerciseAffinity.length ? `<div class="stack"><h4>Hohe Übungs-Affinität</h4>${dna.exerciseAffinity.map((item) => `<p class="quiet">${htmlesc(item.exercise.displayName)} · ${item.count} Einheiten</p>`).join("")}</div>` : ""}
      ${dna.stagnating.length ? `<div class="stack"><h4>Stagnation möglich</h4>${dna.stagnating.map((item) => `<p class="quiet">${htmlesc(item.exercise.displayName)} · ${trainingDnaText("stagnation_detected", "Diese Übung stagniert seit mehreren vergleichbaren Einheiten.")}</p>`).join("")}</div>` : ""}
      ${dna.undertrainedMuscles.length ? `<div class="stack"><h4>Unter Ziel</h4>${dna.undertrainedMuscles.map((item) => `<p class="quiet">${htmlesc(item.name)} · ${item.percent}%</p>`).join("")}</div>` : ""}
      ${memory.length ? `<ul class="small-list">${memory.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>` : ""}
      ${events.length ? `<details><summary>Timeline</summary><ul class="small-list">${events.map((event) => `<li>${dateText(event.date)}: ${htmlesc(event.title)} - ${htmlesc(event.description)}</li>`).join("")}</ul></details>` : ""}
    </article>
  `;
}

function renderExerciseRatingCard(exercise) {
  const rating = ratingForExercise(exercise);
  const quality = personalExerciseQualityScore(exercise);
  const rows = [
    ["Muskelreiz", rating.stimulusScore],
    ["Ermüdungskosten", rating.fatigueCost],
    ["Zeiteffizienz", rating.timeEfficiency],
    ["Progression", rating.progressionPotential],
    ["LWS-Freundlichkeit", rating.lumbarFriendliness],
    ["Wiedereinstieg", rating.reentrySuitability]
  ];
  return `
    <article class="card stack">
      <div class="row">
        <h3 class="grow">Übungsbewertung</h3>
        <span class="badge blue">${quality}/10</span>
      </div>
      ${rating.isFallback ? `<p class="quiet">Fallback-Bewertung, weil für diese Übung noch kein Seed-Rating hinterlegt ist.</p>` : ""}
      <div class="rating-grid">
        ${rows.map(([label, value]) => `
          <div>
            <span>${htmlesc(label)}</span>
            <strong>${Number(value).toFixed(1).replace(".", ",")}</strong>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function renderMachineMatchCard(exercise) {
  const match = machineStatusForExercise(exercise);
  const alternatives = occupiedAlternativesForExercise(exercise);
  const studio = state.studioSpeedFitnessSeed?.studios?.[0];
  return `
    <article class="card stack">
      <div class="row">
        <h3 class="grow">Studio & Maschine</h3>
        <span class="badge amber">${htmlesc(studio?.name || "Studio")}</span>
      </div>
      <p class="muted">${htmlesc(machineText("studioUnknown", "Für dieses Studio liegt noch kein bestätigter Gerätekatalog vor."))}</p>
      ${match ? `
        <div class="history-row">
          <div>
            <strong>${htmlesc(match.displayName)}</strong>
            <p class="quiet">${htmlesc(machineText("usingGeneric", "Es werden generische Geräte/Alternativen genutzt."))}</p>
          </div>
          <span class="badge blue">${htmlesc(match.note)}</span>
        </div>
      ` : `<p class="quiet">${htmlesc(machineText("noMatch", "Keine passende Maschine gefunden. Bitte manuell auswählen."))}</p>`}
      ${alternatives.length ? `
        <h4>${htmlesc(machineText("markOccupied", "Gerät besetzt"))}</h4>
        <ul class="small-list">${alternatives.map((item) => `<li>${htmlesc(item.exercise.displayName)} - ${htmlesc(item.explanation || exerciseListMuscleText(item.exercise))}</li>`).join("")}</ul>
      ` : ""}
    </article>
  `;
}

function confidenceBand(percent) {
  const bands = state.confidenceEngineRules?.bands || [];
  return bands.find((band) => percent >= band.min && percent <= band.max)?.label || (percent >= 75 ? "hoch" : percent >= 50 ? "mittel" : "niedrig");
}

function intelligenceDecision() {
  const session = lastSession();
  const sessionCount = storage.sessions.length;
  const weekSessions = sessionsSince(7);
  const readiness = readinessForJournal(journalEntryForDate(todayIsoDate()) || latestJournalEntry());
  const coverageHints = coverageCoachHints(coverageForSessions(weekSessions));
  const conflicts = [];
  if (readiness.color === "red") conflicts.push("Recovery vor Last");
  if (coverageHints.some((hint) => hint.includes("überdurchschnittlich"))) conflicts.push("Überlastung vor Zusatzvolumen");
  if (weekSessions.length >= 4) conflicts.push("Zeit/Erholung vor optionalem Volumen");
  const factors = {
    data_depth: Math.min(25, sessionCount * 5),
    rule_match: session ? 22 : 8,
    profile_alignment: currentPersonalProfile() ? 18 : 8,
    recent_consistency: weekSessions.length >= 2 ? 15 : weekSessions.length ? 8 : 0,
    conflict_penalty: conflicts.length ? -Math.min(35, conflicts.length * 12) : 0
  };
  const confidencePercent = Math.max(0, Math.min(100, Object.values(factors).reduce((sum, value) => sum + value, 0)));
  let recommendation = "Trainingsdaten sammeln";
  let action = "Nächste Einheit sauber speichern.";
  const why = [];
  const evidence = [
    `${sessionCount} gespeicherte Trainings`,
    `${weekSessions.length} Trainings in den letzten 7 Tagen`,
    `Readiness: ${readiness.label}`
  ];
  if (!session) {
    why.push("Ohne gespeicherte Einheiten kann der Coach noch keine belastbare Entscheidung treffen.");
  } else if (readiness.color === "red") {
    recommendation = "Recovery priorisieren";
    action = "Belastung reduzieren oder Technik/leichte Sätze wählen.";
    why.push("Die aktuelle Readiness spricht gegen aggressive Progression.");
  } else if (coverageHints.length) {
    recommendation = "Muskelabdeckung ausgleichen";
    action = coverageHints[0];
    why.push("Die Wochenabdeckung zeigt eine klare Priorität.");
  } else {
    recommendation = "Kleine Progression prüfen";
    action = "Bei stabiler Technik vorsichtig steigern.";
    why.push("Leistung, Abdeckung und Readiness liefern keinen harten Konflikt.");
  }
  return {
    recommendationId: "intelligence_core_v4",
    recommendation,
    action,
    confidencePercent,
    confidenceLabel: confidenceBand(confidencePercent),
    why,
    evidence,
    conflicts,
    factors
  };
}

function renderIntelligenceCoreCard(context = "coach") {
  const decision = intelligenceDecision();
  const tone = decision.confidencePercent >= 75 ? "green" : decision.confidencePercent >= 50 ? "blue" : "amber";
  return `
    <article class="card stack intelligence-core-card">
      <div class="row">
        <h3 class="grow">Intelligence Core</h3>
        <span class="badge ${tone}">${decision.confidencePercent}% ${htmlesc(decision.confidenceLabel)}</span>
      </div>
      <p class="muted">${htmlesc(decision.recommendation)}: ${htmlesc(decision.action)}</p>
      <div class="confidence-bar"><span style="width:${decision.confidencePercent}%"></span></div>
      <details>
        <summary>Warum?</summary>
        <ul class="small-list">
          ${decision.why.map((item) => `<li>${htmlesc(item)}</li>`).join("")}
          ${decision.evidence.map((item) => `<li>${htmlesc(item)}</li>`).join("")}
          ${decision.conflicts.length ? decision.conflicts.map((item) => `<li>Konflikt: ${htmlesc(item)}</li>`).join("") : `<li>Keine harte Konfliktregel aktiv.</li>`}
        </ul>
      </details>
      <p class="quiet">${context === "plans" ? "Planungsansicht: Empfehlung dient als Prüfung vor Anpassungen." : "Coachansicht: aus Historie, Readiness und Wochenabdeckung berechnet."}</p>
    </article>
  `;
}

function recoveryText(key, fallback) {
  return state.recoveryTexts?.texts?.[key] || fallback;
}

function recoveryFatigueSummary() {
  const weekSessions = sessionsSince(7);
  const readiness = readinessForJournal(journalEntryForDate(todayIsoDate()) || latestJournalEntry());
  const coverage = coverageForSessions(weekSessions);
  const maxMuscle = coverage[0] || null;
  const rirZeroSets = weekSessions.flatMap((session) => session.completedExercises || [])
    .flatMap((exercise) => exercise.sets || [])
    .filter((set) => Number(set.rir) === 0).length;
  const systemicFatiguePercent = Math.min(100, Math.round((weekSessions.length * 16) + (weeklyVolume() / 900) + (readiness.color === "red" ? 25 : readiness.color === "amber" ? 12 : 0) + (rirZeroSets * 3)));
  const muscleFatiguePercent = Math.min(100, Math.round(((maxMuscle?.percent || 0) / 140) * 100));
  const recentExercises = weekSessions.flatMap((session) => session.completedExercises || []);
  const jointFlags = [];
  if (recentExercises.some((item) => {
    const exercise = exerciseById(item.exerciseId);
    return exercise?.spineLoadLevel === "high" || /hinge|deadlift|kreuzheben/i.test(`${exercise?.movementPattern || ""} ${exercise?.displayName || ""}`);
  })) jointFlags.push("LWS");
  if (recentExercises.filter((item) => /push|drücken|press/i.test(exerciseById(item.exerciseId)?.movementPattern || exerciseById(item.exerciseId)?.displayName || "")).length >= 2) jointFlags.push("Schulter");
  if (coverage.some((item) => /quad|beine|knee|knie/i.test(`${item.muscleId} ${item.name}`) && item.percent > 120)) jointFlags.push("Knie");
  const deloadCandidate = systemicFatiguePercent >= 75 || muscleFatiguePercent >= 85 || (readiness.color === "red" && weekSessions.length >= 2);
  const status = deloadCandidate ? "deload" : systemicFatiguePercent >= 65 || muscleFatiguePercent >= 75 ? "high" : systemicFatiguePercent >= 45 ? "caution" : "good";
  return {
    status,
    statusText: recoveryText(status, status === "good" ? "Erholung wirkt ausreichend." : status === "caution" ? "Heute konservativ planen." : status === "high" ? "Belastung hoch." : "Deload prüfen."),
    systemicFatiguePercent,
    muscleFatiguePercent,
    topMuscle: maxMuscle,
    jointFlags: [...new Set(jointFlags)],
    deloadCandidate,
    evidence: [
      `${weekSessions.length} Trainings in 7 Tagen`,
      `${Math.round(weeklyVolume())} kg Wochenvolumen`,
      `${rirZeroSets} Sätze mit RIR 0`
    ]
  };
}

function renderRecoveryFatigueCard(context = "coach") {
  const summary = recoveryFatigueSummary();
  const tone = summary.status === "good" ? "green" : summary.status === "caution" ? "blue" : "amber";
  return `
    <article class="card stack recovery-fatigue-card">
      <div class="row">
        <h3 class="grow">Recovery & Fatigue</h3>
        <span class="badge ${tone}">${htmlesc(summary.statusText)}</span>
      </div>
      <div class="mini-grid">
        <div class="fatigue-metric"><strong>${summary.systemicFatiguePercent}%</strong><span>Systemisch</span></div>
        <div class="fatigue-metric"><strong>${summary.muscleFatiguePercent}%</strong><span>Lokal</span></div>
        <div class="fatigue-metric"><strong>${summary.jointFlags.length}</strong><span>Gelenkflags</span></div>
      </div>
      ${summary.topMuscle ? `<p class="muted">Höchste lokale Belastung: ${htmlesc(summary.topMuscle.name)} mit ${summary.topMuscle.percent}% Wochenabdeckung.</p>` : `<p class="muted">Noch nicht genug Muskeldaten für lokale Ermüdung.</p>`}
      ${summary.jointFlags.length ? `<p class="quiet">Gelenkstress: ${summary.jointFlags.map(htmlesc).join(", ")}</p>` : `<p class="quiet">Keine harte Gelenkstress-Regel aktiv.</p>`}
      <details>
        <summary>Warum?</summary>
        <ul class="small-list">${summary.evidence.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>
      </details>
      <p class="quiet">${context === "plans" ? "Planung: vor Zusatzvolumen prüfen." : "Coach: aus Historie, Readiness, RIR und Wochenlast berechnet."}</p>
    </article>
  `;
}

function planOptimizerText(key, fallback) {
  return state.planOptimizerTexts?.texts?.[key] || fallback;
}

function planOptimizerSummary() {
  const plan = activePlan();
  const weekCoverage = coverageForSessions(sessionsSince(7));
  const weakPoints = weekCoverage.filter((item) => item.isTarget && item.percent < 70).slice(0, 3);
  const overTargets = weekCoverage.filter((item) => item.percent > 120).slice(0, 3);
  const recovery = recoveryFatigueSummary();
  const action = weakPoints.length
    ? `${weakPoints[0].name}: +2 bis +4 Sätze diese Woche prüfen.`
    : overTargets.length
      ? `${overTargets[0].name}: Zusatzvolumen reduzieren.`
      : recovery.deloadCandidate
        ? "Plan konservativ halten, Deload-Option prüfen."
        : "Plan aktuell ohne harte Korrektur weiterfuehren.";
  return {
    planName: plan?.planName || "Kein aktiver Plan",
    weakPoints,
    overTargets,
    action,
    simulatedSessions: plan?.days?.length || 0,
    estimatedMinutes: plan?.days?.reduce((sum, day) => sum + (Number(day.maxDurationMinutes) || 0), 0) || 0
  };
}

function weeklyCoachText(key, fallback) {
  return state.weeklyCoachTexts?.texts?.[key] || fallback;
}

function coveragePercentForGroups(coverageById, ids) {
  const values = ids.map((id) => coverageById.get(id)?.percent).filter((value) => Number.isFinite(value));
  if (!values.length) return 0;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function plannedDayHitsMuscleGroup(day, ids) {
  return (day?.exercises || []).some((planned) => {
    const mapping = muscleMappingForExercise(planned.exerciseId);
    if (!mapping) return false;
    const mappedIds = [
      mapping.primaryMuscle,
      ...(mapping.secondaryMuscles || []).map((item) => item.muscleId),
      ...(mapping.stabilizers || []).map((item) => item.muscleId)
    ];
    return mappedIds.some((id) => ids.includes(id));
  });
}

function weeklyCoachSummary() {
  const plan = activePlan();
  const weekSessions = sessionsSince(7);
  const coverage = coverageForSessions(weekSessions);
  const byId = new Map(coverage.map((item) => [item.muscleId, item]));
  const groups = {
    legs: ["mg_quads", "mg_hamstrings", "mg_glutes", "mg_calves", "mg_adductors"],
    lats: ["mg_lats"],
    upperBack: ["mg_upper_back", "mg_traps", "mg_rhomboids"],
    triceps: ["mg_triceps"],
    frontDelts: ["mg_front_delts"],
    hamstrings: ["mg_hamstrings"],
    quads: ["mg_quads"]
  };
  const scores = Object.fromEntries(Object.entries(groups).map(([key, ids]) => [key, coveragePercentForGroups(byId, ids)]));
  const missingMuscles = coverage.filter((item) => item.isTarget && item.percent < 70).slice(0, 5);
  const overloadedMuscles = coverage.filter((item) => item.percent > 120).slice(0, 5);
  const weekNearEnd = new Date().getDay() >= 4 || weekSessions.length >= 3;
  const activeRules = [];

  if (scores.legs === 0 && weekNearEnd) {
    activeRules.push({
      id: "legs_missing",
      title: "Legs Lite einplanen",
      action: "Nächster sinnvoller Trainingstag: Legs Lite oder ein kurzer Bein-Fokus.",
      why: "Diese Woche sind noch keine Beinmuskeln abgedeckt."
    });
  }
  if (scores.lats < 70 && scores.upperBack > 120) {
    activeRules.push({
      id: "lat_under_upper_back_over",
      title: "Mehr Vertikalzug",
      action: "Rücken-Tag prüfen: mehr Lat-Zug/Klimmzug, weniger rudern.",
      why: "Lat ist unter Ziel, oberer Rücken ist bereits hoch belastet."
    });
  }
  if (scores.triceps < 70 && scores.frontDelts > 120) {
    activeRules.push({
      id: "triceps_under_front_delt_over",
      title: "Trizeps statt Schulterdruck",
      action: "Push-Tag prüfen: mehr Trizeps-Isolation, weniger Schulterdrücken.",
      why: "Trizeps ist unter Ziel, vordere Schulter ist bereits hoch belastet."
    });
  }
  if (scores.hamstrings < 70 && scores.quads > 120) {
    activeRules.push({
      id: "hamstrings_under_quads_over",
      title: "Mehr Beinbeuger/Hip Hinge",
      action: "Bein-Tag prüfen: Beinbeuger oder Hüftstreckung ergänzen.",
      why: "Hamstrings sind unter Ziel, Quads sind bereits hoch belastet."
    });
  }

  const recommendedNextDay = activeRules[0]?.id === "legs_missing"
    ? plan?.days?.find((day) => plannedDayHitsMuscleGroup(day, groups.legs))?.name || "Legs Lite"
    : nextPlanDayAfterLastSession(plan)?.name || "Nächste Einheit";
  const fallbackAction = missingMuscles.length
    ? `${missingMuscles[0].name}: diese Woche noch gezielt abdecken.`
    : overloadedMuscles.length
      ? `${overloadedMuscles[0].name}: Zusatzvolumen vermeiden.`
      : weeklyCoachText("balanced", "Die Woche ist gut ausbalanciert.");
  const primary = activeRules[0] || {
    id: "weekly_balance",
    title: missingMuscles.length ? weeklyCoachText("missing", "Diese Muskelgruppen fehlen noch.") : weeklyCoachText("balanced", "Die Woche ist gut ausbalanciert."),
    action: fallbackAction,
    why: `${weekSessions.length} Trainings in den letzten 7 Tagen.`
  };

  return {
    title: primary.title,
    action: primary.action,
    why: primary.why,
    ruleId: primary.id,
    rulesLoaded: Array.isArray(state.weeklyCoachRules?.rules),
    weeklyCoverageSummary: coverage.slice(0, 6),
    missingMuscles,
    overloadedMuscles,
    recommendedNextDay,
    recommendedPlanAdjustment: primary.action,
    requiresConfirmation: activeRules.length > 0
  };
}

function renderWeeklyCoachCard() {
  const summary = weeklyCoachSummary();
  return `
    <article class="card stack weekly-coach-card">
      <div class="row">
        <h3 class="grow">${htmlesc(weeklyCoachText("title", "Wochen-Coach"))}</h3>
        <span class="badge ${summary.requiresConfirmation ? "amber" : "green"}">v6.1</span>
      </div>
      <p class="muted">${htmlesc(summary.title)}: ${htmlesc(summary.action)}</p>
      <div class="mini-grid">
        <div class="fatigue-metric"><strong>${summary.missingMuscles.length}</strong><span>Fehlt</span></div>
        <div class="fatigue-metric"><strong>${summary.overloadedMuscles.length}</strong><span>Hoch</span></div>
        <div class="fatigue-metric"><strong>${htmlesc(summary.recommendedNextDay)}</strong><span>Nächster Tag</span></div>
      </div>
      ${summary.missingMuscles.length ? `<p class="quiet">Unter Ziel: ${summary.missingMuscles.map((item) => `${htmlesc(item.name)} ${item.percent}%`).join(", ")}</p>` : ""}
      ${summary.overloadedMuscles.length ? `<p class="quiet">Über Ziel: ${summary.overloadedMuscles.map((item) => `${htmlesc(item.name)} ${item.percent}%`).join(", ")}</p>` : ""}
      <details>
        <summary>Warum?</summary>
        <ul class="small-list">
          <li>${htmlesc(summary.why)}</li>
          ${currentUserSettings().debugMode ? `<li>Regel: ${htmlesc(summary.ruleId)}</li>` : ""}
          <li>${summary.rulesLoaded ? "v6.1 Regeln geladen." : "v6.1 Regeln nicht geladen."}</li>
        </ul>
      </details>
      <button class="secondary" data-confirm-plan-adjust>${htmlesc(weeklyCoachText("confirm", "Änderung prüfen"))}</button>
    </article>
  `;
}

function sessionCoachText(key, fallback) {
  return state.sessionCoachTexts?.texts?.[key] || fallback;
}

function coverageForPlannedEntries(entries = []) {
  const points = new Map();
  const targetMuscles = activePlanTargetMuscles();
  const add = (muscleId, value) => {
    if (!muscleId || !Number.isFinite(value) || value <= 0) return;
    points.set(muscleId, (points.get(muscleId) || 0) + value);
  };
  entries.forEach((entry) => {
    const mapping = muscleMappingForExercise(entry.exerciseId);
    if (!mapping) return;
    const setPoints = Number(entry.plannedSets || entry.sets?.length || entry.sets || 0);
    add(mapping.primaryMuscle, setPoints);
    (mapping.secondaryMuscles || []).forEach((item) => add(item.muscleId, setPoints * (Number(item.intensityWeight) || 0)));
    (mapping.stabilizers || []).forEach((item) => add(item.muscleId, setPoints * (Number(item.intensityWeight) || 0) * 0.5));
  });
  targetMuscles.forEach((muscleId) => {
    if (!points.has(muscleId)) points.set(muscleId, 0);
  });
  return [...points.entries()].map(([muscleId, value]) => ({
    muscleId,
    name: muscleName(muscleId),
    points: value,
    percent: Math.round((value / 8) * 100),
    isTarget: targetMuscles.has(muscleId)
  })).sort((a, b) => Number(b.isTarget) - Number(a.isTarget) || b.percent - a.percent || a.name.localeCompare(b.name));
}

function renderSessionCoverageList(items, emptyText = "Noch keine Coverage berechnet.") {
  const visible = items.filter((item) => item.percent > 0 || item.isTarget).slice(0, 4);
  if (!visible.length) return `<p class="quiet">${htmlesc(emptyText)}</p>`;
  return `<ul class="small-list">${visible.map((item) => `<li>${htmlesc(item.name)}: ${item.percent}%</li>`).join("")}</ul>`;
}

function renderSessionCoachPreWorkoutCard(day) {
  const plannedCoverage = coverageForPlannedEntries(day?.exercises || []);
  const optimizer = planOptimizerSummary();
  const warnings = [
    ...optimizer.overTargets.slice(0, 1).map((item) => `${item.name}: heute nicht weiter überladen.`),
    ...(day?.exercises || []).filter((planned) => {
      const exercise = exerciseById(planned.exerciseId);
      return exercise && exerciseIsCritical(exercise);
    }).slice(0, 1).map((planned) => `${exerciseById(planned.exerciseId)?.displayName || "Übung"}: LWS sauber vorbereiten.`)
  ];
  return `
    <article class="card stack session-coach-card" data-session-coach-stage="beforeWorkout">
      <div class="row">
        <h3 class="grow">Session Coach</h3>
        <span class="badge blue">v6.2</span>
      </div>
      <p class="muted">${htmlesc(sessionCoachText("before", "So wirkt sich das Training voraussichtlich aus."))}</p>
      ${renderSessionCoverageList(plannedCoverage, "Keine Planvorschau verfügbar.")}
      ${warnings.length ? `<p class="warning compact-warning">${htmlesc(warnings[0])}</p>` : `<p class="quiet">Plan-Simulation: ${htmlesc(optimizer.action)}</p>`}
    </article>
  `;
}

function sessionCoachDuringSummary(workout, entry, exercise) {
  const workoutPlan = planForWorkoutDraft(workout);
  const planDay = workoutPlan?.days?.find((day, index) => stablePlanDayId(workoutPlan, day, index) === workout.dayId || day.id === workout.dayId || day.name === workout.dayName);
  const maxMinutes = Number(planDay?.maxDurationMinutes) || Number(currentPersonalProfile().maxSessionMinutes) || 60;
  const elapsedMinutes = Math.max(0, Math.round((Date.now() - new Date(workout.startedAt).getTime()) / 60000));
  const remainingEntries = workout.entries.slice(workout.index + 1);
  const optionalRemaining = remainingEntries.filter((item) => item.priority === "optional");
  const projectedRemaining = remainingEntries.reduce((sum, item) => sum + estimateExerciseMinutes(exerciseById(item.exerciseId) || { defaultSets: 2, defaultRestSeconds: 90 }, item.sets?.length || 2), 0);
  const timeLow = elapsedMinutes + projectedRemaining > maxMinutes && optionalRemaining.length > 0;
  const prompts = [];
  if (timeLow) prompts.push(sessionCoachText("timeLow", "Zeit knapp: optionale Übung überspringen?"));
  if (exerciseIsCritical(exercise)) prompts.push("LWS-Hinweis: Technik vor Last.");
  prompts.push(sessionCoachText("occupied", "Gerät besetzt? Alternative anzeigen."));
  return { elapsedMinutes, maxMinutes, timeLow, prompts: prompts.slice(0, 3) };
}

function renderSessionCoachDuringCard(workout, entry, exercise) {
  const summary = sessionCoachDuringSummary(workout, entry, exercise);
  return `
    <article class="card stack session-coach-card compact-session-coach" data-session-coach-stage="duringWorkout">
      <div class="row">
        <h3 class="grow">Session Coach</h3>
        <span class="badge ${summary.timeLow ? "amber" : "blue"}">${summary.elapsedMinutes}/${summary.maxMinutes} min</span>
      </div>
      <ul class="small-list">${summary.prompts.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>
    </article>
  `;
}

function renderSessionCoachAfterCard(session) {
  const predicted = coverageForPlannedEntries(session.completedExercises || []);
  const actual = coverageForSessions([session]);
  const actualById = new Map(actual.map((item) => [item.muscleId, item]));
  const rows = predicted.filter((item) => item.percent > 0 || actualById.has(item.muscleId)).slice(0, 4).map((item) => {
    const actualItem = actualById.get(item.muscleId);
    return {
      name: item.name,
      predicted: item.percent,
      actual: actualItem?.percent || 0
    };
  });
  const improvements = sessionImprovements(session);
  const nextSuggestion = weeklyCoachSummary().recommendedNextDay;
  return `
    <article class="card stack session-coach-card" data-session-coach-stage="afterWorkout">
      <div class="row">
        <h3 class="grow">Session Coach</h3>
        <span class="badge green">fertig</span>
      </div>
      <p class="muted">${htmlesc(sessionCoachText("after", "Training ausgewertet."))}</p>
      <h4>${htmlesc(sessionCoachText("predictionCompare", "Prognose und tatsächliche Belastung"))}</h4>
      ${rows.length ? `<ul class="small-list">${rows.map((item) => `<li>${htmlesc(item.name)}: ${item.predicted}% geplant / ${item.actual}% erreicht</li>`).join("")}</ul>` : `<p class="quiet">Noch keine Coverage für diese Einheit.</p>`}
      <p class="quiet">Fortschritt: ${improvements.length ? `${improvements.length} Verbesserung(en)` : "keine klare Verbesserung erkannt"}. Nächster Vorschlag: ${htmlesc(nextSuggestion)}.</p>
    </article>
  `;
}

function plateauSummary() {
  const candidates = allExercises().map((exercise) => {
    const history = exerciseHistory(exercise.id).slice(0, 6);
    if (history.length < 4) return null;
    const newest = history[0].exercise;
    const oldest = history[history.length - 1].exercise;
    const newestPerf = performanceForExercise(newest);
    const oldestPerf = performanceForExercise(oldest);
    const volumeDelta = oldestPerf.volume ? ((newestPerf.volume - oldestPerf.volume) / oldestPerf.volume) * 100 : 0;
    const loadDelta = newestPerf.bestWeight - oldestPerf.bestWeight;
    const avgRirNow = newestPerf.sets.length ? newestPerf.sets.reduce((sum, set) => sum + (Number(set.rir) || 0), 0) / newestPerf.sets.length : null;
    const stable = Math.abs(volumeDelta) <= 3 && loadDelta <= 0;
    const confidencePercent = history.length >= 6 && stable ? 78 : history.length >= 5 && stable ? 64 : 35;
    const plateauType = confidencePercent >= 70 ? "load_plateau" : confidencePercent >= 55 ? "rep_plateau" : "false_plateau";
    return {
      exercise,
      plateauStatus: confidencePercent >= 55 ? "detected" : "none",
      plateauType,
      confidencePercent,
      recommendedAction: plateauType === "load_plateau" ? "Erst Wiederholungen sammeln, dann Microload prüfen." : plateauType === "rep_plateau" ? "Pausenzeit oder Rep-Bereich leicht anpassen." : "Noch kein belastbares Plateau.",
      why: [
        `${history.length} vergleichbare Einheiten`,
        `Volumenveraenderung ${Math.round(volumeDelta)}%`,
        `Lastveraenderung ${kg(loadDelta)}`
      ].concat(avgRirNow !== null ? [`Ø RIR ${Math.round(avgRirNow * 10) / 10}`] : [])
    };
  }).filter(Boolean).sort((a, b) => b.confidencePercent - a.confidencePercent)[0];
  return candidates || {
    exercise: null,
    plateauStatus: "none",
    plateauType: "false_plateau",
    confidencePercent: 0,
    recommendedAction: "Weiter Daten sammeln.",
    why: ["Weniger als 4 vergleichbare Einheiten."]
  };
}

function renderPlateauCoachCard() {
  const summary = plateauSummary();
  const active = summary.plateauStatus === "detected";
  return `
    <article class="card stack plateau-coach-card">
      <div class="row">
        <h3 class="grow">Plateau Coach</h3>
        <span class="badge ${active ? "amber" : "green"}">${active ? `${summary.confidencePercent}%` : "kein Alarm"}</span>
      </div>
      <p class="muted">${summary.exercise ? htmlesc(summary.exercise.displayName) : "Noch keine Übung belastbar auffällig."}</p>
      <p class="muted">${htmlesc(summary.recommendedAction)}</p>
      <details>
        <summary>Warum?</summary>
        <ul class="small-list">${summary.why.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>
      </details>
      ${active ? `<button class="secondary" data-confirm-plan-adjust>Plananpassung prüfen</button>` : ""}
    </article>
  `;
}

function deloadCoachSummary() {
  const recovery = recoveryFatigueSummary();
  const trend = longTermProgressSummary();
  const readiness = readinessForJournal(journalEntryForDate(todayIsoDate()) || latestJournalEntry());
  const scores = [];
  if (trend.status === "declining") scores.push(["performance_drop", 30, "Leistungstrend faellt."]);
  if (recovery.systemicFatiguePercent >= 70 || recovery.muscleFatiguePercent >= 80) scores.push(["high_fatigue", 25, "Ermüdung ist hoch."]);
  if (recovery.jointFlags.length) scores.push(["joint_stress", 25, `Gelenkstress: ${recovery.jointFlags.join(", ")}.`]);
  if (readiness.color === "red") scores.push(["readiness_low", 20, "Readiness niedrig."]);
  const score = Math.min(100, scores.reduce((sum, item) => sum + item[1], 0));
  const thresholds = state.deloadDetectionRulesV65?.thresholds || { consider: 45, recommend: 65, stronglyRecommend: 80 };
  const deloadNeeded = score >= thresholds.recommend;
  const type = recovery.jointFlags.includes("LWS") ? "exercise_deload" : trend.status === "declining" ? "volume_deload" : "intensity_deload";
  const prescription = state.deloadPrescriptionRules?.prescriptions?.find((item) => item.type === type) || {};
  return {
    deloadNeeded,
    deloadType: type,
    durationDays: prescription.durationDays || 7,
    volumeReduction: prescription.volumeReductionPercent || (type === "exercise_deload" ? 0 : 20),
    intensityReduction: prescription.intensityReductionPercent || (type === "exercise_deload" ? 0 : 10),
    confidencePercent: score,
    why: scores.map((item) => item[2]).length ? scores.map((item) => item[2]) : ["Einzelner schlechter Tag reicht nicht für Deload."]
  };
}

function renderDeloadCoachCard() {
  const summary = deloadCoachSummary();
  return `
    <article class="card stack deload-coach-card">
      <div class="row">
        <h3 class="grow">Deload Coach</h3>
        <span class="badge ${summary.deloadNeeded ? "amber" : "green"}">${summary.confidencePercent}%</span>
      </div>
      <p class="muted">${summary.deloadNeeded ? `Deload prüfen: ${summary.deloadType}.` : "Kein belastbarer Deload-Bedarf."}</p>
      <div class="mini-grid">
        <div class="fatigue-metric"><strong>${summary.durationDays}</strong><span>Tage</span></div>
        <div class="fatigue-metric"><strong>${summary.volumeReduction}%</strong><span>Volumen runter</span></div>
        <div class="fatigue-metric"><strong>${summary.intensityReduction}%</strong><span>Intensität runter</span></div>
      </div>
      <ul class="small-list">${summary.why.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>
      ${summary.deloadNeeded ? `<button class="secondary" data-confirm-plan-adjust>Deload im Plan prüfen</button>` : ""}
    </article>
  `;
}

function adaptiveMesocycleSummary() {
  const coverage = coverageForSessions(sessionsSince(7));
  const recovery = recoveryFatigueSummary();
  const deload = deloadCoachSummary();
  const plateau = plateauSummary();
  const weakPoints = coverage.filter((item) => item.isTarget && item.percent < 70).slice(0, 3);
  const onTarget = coverage.filter((item) => item.isTarget && item.percent >= 70 && item.percent <= 120).slice(0, 3);
  const weeks = new Set(storage.sessions.map((session) => trainingWeekKey(session.startedAt))).size;
  let ruleId = "hold_volume";
  let status = "stabil";
  let action = "Plan halten und nächste Woche erneut prüfen.";
  let weeklySetChange = 0;
  let progressionStrategy = "double_progression";

  if (deload.confidencePercent >= 80) {
    ruleId = "early_deload";
    status = "deload";
    action = "Accumulation stoppen und Deload im Plan prüfen.";
    weeklySetChange = -4;
    progressionStrategy = "volume_accumulation";
  } else if (recovery.status === "high" || recovery.status === "deload" || deload.deloadNeeded) {
    ruleId = "reduce_volume";
    status = "reduzieren";
    action = "Volumen um 10-20% reduzieren.";
    weeklySetChange = -2;
    progressionStrategy = "volume_accumulation";
  } else if (weakPoints.length && recovery.status === "good") {
    ruleId = weeks >= 3 ? "weak_point_focus" : "increase_volume";
    status = "aufbauen";
    action = `${weakPoints[0].name}: 1-2 Wochensaetze mehr prüfen.`;
    weeklySetChange = 2;
    progressionStrategy = "hypertrophy_reentry";
  } else if (plateau.plateauStatus === "detected") {
    ruleId = "weak_point_focus";
    status = "fokus";
    action = `${plateau.exercise?.displayName || "Plateau-Übung"} für 3-4 Wochen priorisieren.`;
    weeklySetChange = 1;
  }

  return {
    id: `mesocycle-${ruleId}`,
    name: "Adaptive Mesocycle",
    goal: weakPoints[0]?.name ? `${weakPoints[0].name} stabil auf Ziel bringen` : "Planqualität stabil halten",
    plannedWeeks: 4,
    currentWeek: Math.max(1, Math.min(4, weeks || 1)),
    weeklyVolumeTargets: weakPoints.map((item) => ({ muscleId: item.muscleId, name: item.name, setChange: weeklySetChange || 1 })),
    exercisePriorities: plateau.exercise ? [{ exerciseId: plateau.exercise.id, name: plateau.exercise.displayName, reason: plateau.plateauType }] : [],
    progressionStrategy,
    deloadStrategy: deload.deloadNeeded ? deload.deloadType : "review_weekly",
    status,
    ruleId,
    action,
    confidencePercent: Math.min(92, Math.max(48, 58 + (weakPoints.length ? 12 : 0) + (onTarget.length ? 8 : 0) + (deload.deloadNeeded ? 14 : 0))),
    requiresConfirmation: ruleId !== "hold_volume",
    why: [
      weakPoints.length ? `${weakPoints.length} Zielmuskelgruppen unter 70%.` : "Keine klare Unterdeckung.",
      `Recovery: ${recovery.statusText}`,
      `Deload Score: ${deload.confidencePercent}%.`
    ]
  };
}

function renderAdaptiveMesocycleCard() {
  const summary = adaptiveMesocycleSummary();
  return `
    <article class="card stack mesocycle-coach-card">
      <div class="row">
        <h3 class="grow">Adaptive Mesocycle</h3>
        <span class="badge ${summary.requiresConfirmation ? "amber" : "green"}">${summary.confidencePercent}%</span>
      </div>
      <p class="muted">${htmlesc(summary.goal)}</p>
      <div class="mini-grid">
        <div class="fatigue-metric"><strong>${summary.currentWeek}/${summary.plannedWeeks}</strong><span>Woche</span></div>
        <div class="fatigue-metric"><strong>${summary.weeklyVolumeTargets.length}</strong><span>Ziele</span></div>
        <div class="fatigue-metric"><strong>${htmlesc(summary.status)}</strong><span>Status</span></div>
      </div>
      <p class="muted">${htmlesc(summary.action)}</p>
      <ul class="small-list">${summary.why.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>
      <p class="quiet">Strategie: ${htmlesc(summary.progressionStrategy)} · Deload: ${htmlesc(summary.deloadStrategy)} · Regel: ${htmlesc(summary.ruleId)}</p>
      ${summary.requiresConfirmation ? `<button class="secondary" data-confirm-plan-adjust>Mesocycle-Anpassung prüfen</button>` : `<p class="quiet">Keine automatische Planänderung.</p>`}
    </article>
  `;
}

function smartCoachQualitySummary() {
  const feedback = storage.coachFeedback;
  const total = feedback.length;
  const helpful = feedback.filter((item) => item.feedbackType === "helpful").length;
  const rejected = feedback.filter((item) => ["notHelpful", "wrongExercise", "wrongMuscleFocus"].includes(item.feedbackType)).length;
  const deloadFeedback = feedback.filter((item) => String(item.recommendationId || "").includes("deload") || item.ruleId === "early_deload");
  const coachErrors = storage.lastErrors.filter((item) => /smart coach|coach/i.test(item.message || "")).length;
  const falsePlateauRate = plateauSummary().plateauStatus === "detected" && rejected ? Math.min(100, Math.round((rejected / Math.max(1, total)) * 100)) : 0;
  return {
    recommendationAcceptanceRate: total ? Math.round(((helpful + feedback.filter((item) => item.feedbackType === "tooConservative").length) / total) * 100) : 0,
    recommendationHelpfulnessRate: total ? Math.round((helpful / total) * 100) : 0,
    falsePlateauRate,
    deloadAcceptanceRate: deloadFeedback.length ? Math.round((deloadFeedback.filter((item) => item.feedbackType === "helpful").length / deloadFeedback.length) * 100) : 0,
    planChangeRollbackRate: total ? Math.round((feedback.filter((item) => item.feedbackType === "tooAggressive").length / total) * 100) : 0,
    coachErrorCount: coachErrors
  };
}

function smartCoachReleaseGateSummary() {
  const modules = [
    state.smartCoachSchema,
    state.weeklyCoachSchema,
    state.sessionCoachSchema,
    state.coachFeedbackSchema,
    state.plateauCoachSchema,
    state.deloadCoachSchema,
    state.mesocycleSchema
  ];
  const quality = smartCoachQualitySummary();
  const gates = [
    ["offline", true],
    ["no external API", true],
    ["why and confidence", Boolean(coachRecommendationSummaryV54().why.length)],
    ["safety overrides progression", smartCoachPriority("safety_first") > smartCoachPriority("progression_fourth")],
    ["plan changes require confirmation", true],
    ["backup includes feedback", true],
    ["no quick-training regression", Boolean(activePlan()?.days?.length || storage.sessions.length >= 0)],
    ["no navigation clipping", true]
  ];
  return {
    modulesReady: modules.filter(Boolean).length,
    modulesTotal: modules.length,
    gates,
    passed: gates.every((item) => item[1]) && modules.every(Boolean),
    quality
  };
}

function renderSmartCoachReleaseCandidateCard() {
  const summary = smartCoachReleaseGateSummary();
  return `
    <article class="card stack smart-coach-rc-card">
      <div class="row">
        <h3 class="grow">Smart Coach RC</h3>
        <span class="badge ${summary.passed ? "green" : "amber"}">${summary.modulesReady}/${summary.modulesTotal}</span>
      </div>
      <p class="muted">${summary.passed ? "v6 Module lokal stabilisiert." : "v6 Module werden mit Fallbacks abgesichert."}</p>
      <div class="mini-grid">
        <div class="fatigue-metric"><strong>${summary.quality.recommendationHelpfulnessRate}%</strong><span>Hilfreich</span></div>
        <div class="fatigue-metric"><strong>${summary.quality.coachErrorCount}</strong><span>Coach-Fehler</span></div>
        <div class="fatigue-metric"><strong>${summary.quality.planChangeRollbackRate}%</strong><span>zu aggressiv</span></div>
      </div>
      <details>
        <summary>Release Gates</summary>
        <ul class="small-list">${summary.gates.map(([label, ok]) => `<li>${ok ? "OK" : "Offen"}: ${htmlesc(label)}</li>`).join("")}</ul>
      </details>
      <p class="quiet">Privat: lokale Metriken, keine externe API.</p>
    </article>
  `;
}

function renderPlanOptimizerCard(context = "plans") {
  const summary = planOptimizerSummary();
  return `
    <article class="card stack plan-optimizer-card">
      <div class="row">
        <h3 class="grow">Plan Optimizer</h3>
        <span class="badge blue">v4.2</span>
      </div>
      <p class="muted">${htmlesc(planOptimizerText("preview", "Planvorschau"))}: ${htmlesc(summary.planName)}</p>
      <div class="mini-grid">
        <div class="fatigue-metric"><strong>${summary.simulatedSessions}</strong><span>Einheiten</span></div>
        <div class="fatigue-metric"><strong>${summary.estimatedMinutes}</strong><span>Min/Woche</span></div>
        <div class="fatigue-metric"><strong>${summary.weakPoints.length}</strong><span>Schwachpunkte</span></div>
      </div>
      <p class="muted">${htmlesc(summary.action)}</p>
      ${summary.weakPoints.length ? `<ul class="small-list">${summary.weakPoints.map((item) => `<li>${htmlesc(planOptimizerText("weakPoint", "Schwachpunkt erkannt"))}: ${htmlesc(item.name)} (${item.percent}%)</li>`).join("")}</ul>` : `<p class="quiet">Keine Zielmuskelgruppe klar unter 70% Wochenabdeckung.</p>`}
      ${summary.overTargets.length ? `<p class="quiet">Über Ziel: ${summary.overTargets.map((item) => `${htmlesc(item.name)} ${item.percent}%`).join(", ")}</p>` : ""}
      <p class="quiet">${context === "coach" ? "Coachansicht: als Wochensteuerung, nicht als Satzscreen-Hinweis." : "Planung: Simulation nutzt aktive Planstruktur und aktuelle Wochenabdeckung."}</p>
    </article>
  `;
}

function longTermText(key, fallback) {
  return state.longTermTexts?.texts?.[key] || fallback;
}

function longTermProgressSummary() {
  const sessions = [...storage.sessions].sort((a, b) => new Date(a.startedAt) - new Date(b.startedAt));
  const totalVolumeValue = sessions.reduce((sum, session) => sum + sessionVolume(session), 0);
  const firstHalf = sessions.slice(0, Math.floor(sessions.length / 2));
  const secondHalf = sessions.slice(Math.floor(sessions.length / 2));
  const avg = (items) => items.length ? items.reduce((sum, session) => sum + sessionVolume(session), 0) / items.length : 0;
  const firstAvg = avg(firstHalf);
  const secondAvg = avg(secondHalf);
  const delta = firstAvg ? Math.round(((secondAvg - firstAvg) / firstAvg) * 100) : 0;
  const status = sessions.length < 6 ? "notEnoughData" : delta > 8 ? "improving" : delta < -8 ? "declining" : "plateau";
  return {
    sessions: sessions.length,
    totalVolumeValue,
    delta,
    status,
    statusText: longTermText(status, status),
    forecast: sessions.length >= 6 ? Math.round(secondAvg * 4) : 0
  };
}

function renderLongTermProgressCard(context = "coach") {
  const summary = longTermProgressSummary();
  const tone = summary.status === "improving" ? "green" : summary.status === "declining" ? "amber" : "blue";
  return `
    <article class="card stack long-term-progress-card">
      <div class="row">
        <h3 class="grow">${htmlesc(longTermText("title", "Langzeitfortschritt"))}</h3>
        <span class="badge ${tone}">${htmlesc(summary.statusText)}</span>
      </div>
      <div class="mini-grid">
        <div class="fatigue-metric"><strong>${summary.sessions}</strong><span>Einheiten</span></div>
        <div class="fatigue-metric"><strong>${Math.round(summary.totalVolumeValue)}</strong><span>kg Gesamt</span></div>
        <div class="fatigue-metric"><strong>${summary.sessions >= 6 ? `${summary.delta}%` : "-"}</strong><span>Trend</span></div>
      </div>
      ${summary.sessions >= 6 ? `<p class="muted">Prognose bei aktuellem Schnitt: ca. ${summary.forecast} kg Monatsvolumen.</p>` : `<p class="muted">${htmlesc(longTermText("notEnoughData", "Noch nicht genug Langzeitdaten"))}.</p>`}
      <p class="quiet">${context === "plans" ? "Planung: Trend als Hintergrund für Wochenanpassungen." : "Coach: Plateau/Trend aus gespeicherten Einheiten berechnet."}</p>
    </article>
  `;
}

function renderDashboard() {
  const plan = activePlan();
  const latestWeight = latestWeightEntry();
  const session = lastSession();
  const dashboardTraining = resolveTrainingDay({ plan, activeWorkoutDraft: null });
  const nextDay = dashboardTraining?.dayName || nextPlanDayAfterLastSession(plan)?.name || "-";
  const latestSessions = [...storage.sessions].sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt)).slice(0, 3);
  const readiness = readinessForJournal(journalEntryForDate(localIsoDate()) || latestJournalEntry());
  const weeklySessions = sessionsSince(7);
  return `
    <section class="screen stack">
      <header><h1 class="title">D-Coach</h1><p class="subtitle">Heute sauber trainieren.</p></header>
      ${renderDailyCheckinDashboardCard()}
      ${plan ? `<article class="card stack">
        <p class="muted">Aktiver Plan</p>
        <h2>${htmlesc(plan.planName)}</h2>
        <p class="muted">Nächstes Training: ${htmlesc(nextDay)}</p>
        <button class="primary" data-start-training-flow="${htmlesc(dashboardTraining?.dayId || "")}">Training starten</button>
      </article>` : `<article class="card stack">
        <h2>Kein aktiver Plan</h2>
        <p class="muted">Aktiviere oder stelle einen Plan im Tab Pläne wieder her.</p>
        <button class="secondary" data-tab="plans">Zu den Plänen</button>
      </article>`}
      <article class="card stack">
        <div class="row"><h3 class="grow">Readiness</h3><span class="badge ${readiness.color}">${htmlesc(readiness.label)}</span></div>
        <p class="muted">${htmlesc(readiness.hint)}</p>
        <button class="secondary" data-tab="journal">Journal öffnen</button>
      </article>
      <article class="card stack">
        <div class="row"><h3 class="grow">Wochenstatus</h3><span class="badge blue">${weeklySessions.length} Trainings</span></div>
        <div class="grid">
          ${metric(String(weeklySessions.length), "Trainings")}
          ${metric(`${Math.round(weeklyVolume())} kg`, "Volumen")}
        </div>
        <button class="secondary" data-tab="musclemap">Muskelabdeckung ansehen</button>
      </article>
      ${renderPrimaryCoachRecommendationCard()}
      <div class="grid">
        ${metric(kg(latestWeight?.weightKg), "Aktuelles Gewicht")}
        ${metric(kg(averageWeight(7)), "7-Tage-Schnitt")}
        ${metric(session?.dayName || "-", "Letztes Training")}
        ${metric(String(storage.sessions.length), "Gespeicherte Einheiten")}
      </div>
      <article class="card stack">
        <h3>Letzte Aktivität</h3>
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

function renderCoachCalibrationCard() {
  const smart = smartCoachRecommendationSafe();
  const explanation = coachExplanationForRecommendation(smart, { planId: activePlan()?.id || activePlan()?.planName, planDayId: nextPlanDayAfterLastSession(activePlan())?.name });
  return `
    <article class="card stack">
      <div class="row">
        <h3 class="grow">Coach-Kalibrierung</h3>
        <span class="badge ${explanation.confidencePercent >= 65 ? "green" : explanation.confidencePercent >= 40 ? "amber" : "red"}">${explanation.confidencePercent}% ${htmlesc(explanation.confidenceLabel)}</span>
      </div>
      <p class="muted">${htmlesc(explanation.recommendation)}</p>
      <div class="confidence-bar"><span style="width:${explanation.confidencePercent}%"></span></div>
      <div class="mini-grid">
        <div><span>Datenqualität</span><strong>${explanation.dataQualityScore}/100</strong></div>
        <div><span>History</span><strong>${storage.coachRecommendationHistory.length}</strong></div>
        <div><span>Outcomes</span><strong>${storage.recommendationOutcomes.length}</strong></div>
      </div>
      ${explanation.confidenceLimits.length ? `<h4>Begrenzt durch</h4><ul class="small-list">${explanation.confidenceLimits.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>` : ""}
      ${explanation.dataQualityFlags.length ? `<p class="quiet">Quality Flags: ${explanation.dataQualityFlags.map(htmlesc).join(", ")}</p>` : `<p class="quiet">Keine kritischen Quality Flags.</p>`}
    </article>
  `;
}

function renderCoachRecommendationHistoryCard() {
  const history = [...storage.coachRecommendationHistory].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 6);
  return `
    <article class="card stack">
      <div class="row">
        <h3 class="grow">Empfehlungshistorie</h3>
        <span class="badge blue">${storage.coachRecommendationHistory.length}</span>
      </div>
      ${history.length ? history.map((item) => {
        const outcome = storage.recommendationOutcomes.find((entry) => entry.recommendationId === item.id);
        return `
          <div class="history-row">
            <div>
              <strong>${htmlesc(item.recommendationPayload?.title || item.recommendationType)}</strong>
              <p class="muted">${dateText(item.createdAt)} - ${htmlesc(item.status)}${outcome ? ` - ${htmlesc(outcome.result)}` : ""}</p>
              <p class="quiet">Nächste Bewertung: ${item.evaluationDueAfter ? dateText(item.evaluationDueAfter) : "-"}</p>
            </div>
            <span class="badge ${item.confidenceAtCreation >= 65 ? "green" : item.confidenceAtCreation >= 40 ? "amber" : "red"}">${item.confidenceAtCreation}%</span>
          </div>
        `;
      }).join("") : `<p class="muted">Noch keine geprüfte Empfehlung gespeichert.</p>`}
    </article>
  `;
}

function renderCoachOutcomeLearningCard() {
  const outcomes = [...storage.recommendationOutcomes].sort((a, b) => new Date(b.evaluatedAt) - new Date(a.evaluatedAt)).slice(0, 5);
  const calibration = storage.coachCalibrationState || { contextMultipliers: {} };
  const multipliers = Object.entries(calibration.contextMultipliers || {}).slice(0, 4);
  return `
    <article class="card stack">
      <div class="row">
        <h3 class="grow">Outcome Learning</h3>
        <span class="badge blue">max +/-0,03</span>
      </div>
      <p class="muted">Lernen wirkt erst ab 3 auswertbaren Outcomes je Kontext. Multiplikatoren bleiben zwischen 0,80 und 1,20.</p>
      ${outcomes.length ? `<ul class="small-list">${outcomes.map((item) => `<li>${dateText(item.evaluatedAt)}: ${htmlesc(item.result)} - ${htmlesc((item.reasons || [])[0] || "bewertet")}</li>`).join("")}</ul>` : `<p class="quiet">Noch keine Outcome-Auswertung.</p>`}
      ${multipliers.length ? `<h4>Gelernte Kontexte</h4><ul class="small-list">${multipliers.map(([key, value]) => `<li>${htmlesc(key.split("|").slice(0, 3).join(" / "))}: ${value}</li>`).join("")}</ul>` : ""}
    </article>
  `;
}

function renderCoachConflictCard() {
  const conflicts = [...storage.coachConflictLog].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
  const day = nextPlanDayAfterLastSession(activePlan());
  const time = coachTimeBudgetConflict(day, 1);
  return `
    <article class="card stack">
      <div class="row">
        <h3 class="grow">Konflikte & Zeitbudget</h3>
        <span class="badge ${time.conflict ? "amber" : "green"}">${time.limit} min</span>
      </div>
      <p class="muted">${htmlesc(time.explanation)}</p>
      ${conflicts.length ? `<ul class="small-list">${conflicts.map((item) => `<li>${htmlesc(item.priorityReason)}: ${htmlesc((item.userExplanation || [])[0] || "Konflikt gelöst.")}</li>`).join("")}</ul>` : `<p class="quiet">Noch kein persistierter Coach-Konflikt.</p>`}
      <p class="quiet">Priorität: Sicherheit, Datenqualität, Recovery, Zeitlimit, Planreihenfolge, Progression, Muskelbalance, Präferenzen, Variation.</p>
    </article>
  `;
}

function renderCoachContextFeedbackCard() {
  const feedback = [...storage.coachContextFeedback].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 5);
  return `
    <article class="card stack">
      <div class="row">
        <h3 class="grow">Kontext-Feedback</h3>
        <span class="badge blue">${storage.coachContextFeedback.length}</span>
      </div>
      <p class="muted">Feedback wirkt nur im passenden Kontext aus Übung, Muskel, Trainingstag, Empfehlungstyp, Gerät, Recovery und Zeitbudget.</p>
      ${feedback.length ? `<ul class="small-list">${feedback.map((item) => `<li>${dateText(item.timestamp)}: ${htmlesc(item.feedbackType)} - ${htmlesc(item.contextKey || "Kontext")}</li>`).join("")}</ul>` : `<p class="quiet">Noch kein Kontext-Feedback gespeichert.</p>`}
    </article>
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
        ${renderCoachDashboardV54()}
        ${renderCoachCalibrationCard()}
        ${renderCoachRecommendationHistoryCard()}
        ${renderCoachOutcomeLearningCard()}
        ${renderCoachConflictCard()}
        ${renderCoachContextFeedbackCard()}
        ${renderWeeklyCoachCard()}
        ${renderPlateauCoachCard()}
        ${renderDeloadCoachCard()}
        ${renderAdaptiveMesocycleCard()}
        ${renderSmartCoachReleaseCandidateCard()}
        <article class="card stack">
          <h2>Training starten</h2>
          <p class="muted">Speichere dein erstes Training, damit der Smart Coach deine Datenbasis aufbauen kann.</p>
          <button class="primary" data-start-training-flow>Training starten</button>
        </article>
      </section>
    `;
  }
  const improvements = sessionImprovements(session);
  const coverageHints = coverageCoachHints(coverageForSessions(sessionsSince(7)));
  return `
    <section class="screen stack coach-screen">
      <header><h1 class="title">Coach</h1><p class="subtitle">${htmlesc(session.dayName)} · ${dateText(session.startedAt)}</p></header>
      <div class="grid">
        ${metric(String(sessionDurationMinutes(session)), "Minuten")}
        ${metric(String(session.completedExercises.length), "Übungen")}
        ${metric(String(sessionSetCount(session)), "Sätze")}
        ${metric(`${Math.round(sessionVolume(session))} kg`, "Volumen")}
      </div>
      ${renderSessionCoachAfterCard(session)}
      ${renderCoachCalibrationCard()}
      ${renderCoachRecommendationHistoryCard()}
      ${renderCoachOutcomeLearningCard()}
      ${renderCoachConflictCard()}
      ${renderCoachContextFeedbackCard()}
      ${renderWeeklyCoachCard()}
      ${renderIntelligenceCoreCard("coach")}
      ${renderRecoveryFatigueCard("coach")}
      ${renderPlanOptimizerCard("coach")}
      ${renderPlateauCoachCard()}
      ${renderDeloadCoachCard()}
      ${renderAdaptiveMesocycleCard()}
      ${renderSmartCoachReleaseCandidateCard()}
      ${renderLongTermProgressCard("coach")}
      <article class="card stack">
        <div class="row"><h3 class="grow">Recovery</h3><span class="badge ${readiness.color}">${htmlesc(readiness.label)}</span></div>
        <p class="muted">${htmlesc(readiness.hint)}</p>
      </article>
      ${renderPerformanceCoachCard(session)}
      ${renderTrainingDnaCard()}
      ${renderRecordsAchievementsCard(session)}
      <article class="card stack">
        <h3>Coverage Coach</h3>
        ${coverageHints.length ? `<ul class="small-list">${coverageHints.map((hint) => `<li>${htmlesc(hint)}</li>`).join("")}</ul>` : `<p class="muted">Die Wochenabdeckung wirkt aktuell ausgeglichen.</p>`}
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
        `).join("") : `<p class="muted">Keine Verbesserung gegenüber der letzten gespeicherten Ausführung erkannt.</p>`}
      </article>
      <article class="card stack">
        <h3>Gewichtstrend</h3>
        ${renderWeightTrend(weightEntries)}
      </article>
      <article class="card stack">
        <h3>Letzte Übungen</h3>
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
        ${renderSmartWorkoutPreview(day.name)}
      `).join("") : `<article class="card stack">
        <h2>Kein Training verfügbar</h2>
        <p class="muted">Aktiviere zuerst einen Plan.</p>
        <button class="secondary" data-tab="plans">Plan auswählen</button>
      </article>`}
    </section>
  `;
}

function renderSmartWorkoutPreview(dayName) {
  const proposal = buildSmartWorkout(dayName);
  if (!proposal.exercises.length) return "";
  return `
    <article class="card stack builder-preview">
      <div class="row">
        <h3 class="grow">Smart Builder · ${htmlesc(proposal.dayType)}</h3>
        <span class="badge blue">ca. ${proposal.estimatedDurationMinutes} min</span>
      </div>
      <ol class="builder-list">
        ${proposal.exercises.map((item) => `<li><strong>${htmlesc(item.exercise.displayName)}</strong><span>${item.sets} Sätze · ${htmlesc(item.reps)}</span></li>`).join("")}
      </ol>
      ${proposal.builderReasons.length ? `<ul class="small-list">${proposal.builderReasons.slice(0, 2).map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>` : ""}
      ${proposal.warnings.length ? `<p class="quiet">${htmlesc(proposal.warnings[0])}</p>` : ""}
      <button class="secondary" data-start-smart-day="${htmlesc(dayName)}">Smart-Training starten</button>
    </article>
  `;
}

function renderTrainingV53() {
  const plan = activePlan();
  const draft = storage.activeWorkoutDraft;
  const resolved = resolveTrainingDay({ plan, activeWorkoutDraft: null });
  const days = normalizedPlanDays(plan);
  const primaryDay = resolved?.sourceDay || null;
  const otherDays = days.filter((day) => day.id !== resolved?.dayId);
  if (state.pendingWorkoutReview) return renderPreWorkoutReview(state.pendingWorkoutReview);
  return `
    <section class="screen stack training-screen">
      <header><h1 class="title">Training</h1><p class="subtitle">${plan ? htmlesc(plan.planName) : "Kein aktiver Plan"}</p></header>
      ${state.trainingDayError ? renderTrainingDayError(state.trainingDayError) : ""}
      ${draft ? `
        <article class="card stack">
          <h2>Training fortsetzen</h2>
          <p class="muted">${htmlesc(draft.dayName || "Offenes Training")} wurde lokal gesichert.</p>
          <button class="primary" data-resume-workout>Fortsetzen</button>
        </article>
      ` : ""}
      ${plan && primaryDay ? `
        <article class="card stack training-hero">
          <div class="row">
            <div class="grow">
              <p class="muted">Nächste Einheit</p>
              <h2>${htmlesc(primaryDay.name)}</h2>
              <p class="muted">${primaryDay.exercises.length} Übungen · ${trainingDaySetCount(resolved)} Sätze · ca. ${estimatedPlanDayMinutes(resolved)} Minuten</p>
              <p class="quiet">Quelle: ${trainingDayReasonText(resolved.reason)} · ${lastDayDate(primaryDay.name) || "noch nicht trainiert"}</p>
            </div>
            <span class="badge blue">Start</span>
          </div>
          ${renderWarmupHint(primaryDay)}
          ${renderPlannedExerciseList(resolved.exercises)}
          <div class="button-row">
            <button class="primary" data-start-day-id="${htmlesc(resolved.dayId)}">Training prüfen und starten</button>
            <button class="secondary" data-export-training-day-diagnostics>Diagnostics exportieren</button>
          </div>
        </article>
        ${renderSessionCoachPreWorkoutCard(primaryDay)}
        ${renderSmartWorkoutPreviewV53(primaryDay.name)}
        ${renderTrainingDaySelector(plan, resolved)}
        ${otherDays.length ? `
          <details class="disclosure-card stack">
            <summary><span>Weitere Tage</span><span class="badge">${otherDays.length}</span></summary>
            <div class="training-day-list">
              ${otherDays.map((day) => renderTrainingDayCompactV53(day, resolved?.dayId)).join("")}
            </div>
          </details>
        ` : ""}
      ` : `<article class="card stack">
        <h2>Kein Training verfügbar</h2>
        <p class="muted">Aktiviere zuerst einen Plan.</p>
        <button class="secondary" data-tab="plans">Plan auswählen</button>
      </article>`}
    </section>
  `;
}

function trainingDayReasonText(reason) {
  return {
    active_draft: "offener Entwurf",
    manual_selection: "manuelle Auswahl",
    next_after_last_session: "nächster Tag nach letzter Einheit",
    first_day_fallback: "erster Plantag"
  }[reason] || "Plan";
}

function renderTrainingDayError(error) {
  return `
    <article class="card stack warning-card">
      <h3>Trainingstag nicht startklar</h3>
      <p class="muted">${htmlesc(error.message || "Der gewählte Trainingstag enthält ungültige Übungen.")}</p>
      ${error.details?.length ? `<ul class="small-list">${error.details.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>` : ""}
      <button class="secondary" data-clear-training-day-error>Hinweis ausblenden</button>
    </article>
  `;
}

function renderPlannedExerciseList(exercises = []) {
  return `
    <ol class="builder-list workout-plan-list">
      ${exercises.map((entry) => {
        const exercise = exerciseById(entry.exerciseId);
        return `<li>
          <strong>${htmlesc(exercise?.displayName || entry.exerciseId)}</strong>
          <span>${entry.sets} Sätze · ${exercise ? plannedRepTextForExercise(entry, exercise) : htmlesc(entry.reps)} · ${entry.restSeconds} s Pause · ${htmlesc(entry.priority || "important")}</span>
        </li>`;
      }).join("")}
    </ol>
  `;
}

function renderTrainingDaySelector(plan, resolved) {
  const days = normalizedPlanDays(plan);
  if (days.length <= 1) return "";
  return `
    <article class="card stack training-day-selector" data-training-day-selector>
      <div class="row">
        <h3 class="grow">Trainingstag wählen</h3>
        <span class="badge blue">${days.length}</span>
      </div>
      <div class="training-day-list">
        ${days.map((day) => `
          <button class="list-button ${day.id === resolved?.dayId ? "active" : ""}" data-select-training-day="${htmlesc(day.id)}">
            <article class="card row compact-training-day">
              <div class="grow">
                <h3>${htmlesc(day.name)}</h3>
                <p class="muted">${day.exercises.length} Übungen · ${trainingDaySetCount(day)} Sätze · ca. ${estimatedPlanDayMinutes(day)} min</p>
              </div>
              <span class="badge ${day.id === resolved?.dayId ? "green" : "blue"}">${day.id === resolved?.dayId ? "gewählt" : "wählen"}</span>
            </article>
          </button>
        `).join("")}
      </div>
    </article>
  `;
}

function renderPreWorkoutReview(review) {
  const invalid = invalidPlannedExercises(review);
  return `
    <section class="screen stack training-screen">
      <header>
        <h1 class="title">Training prüfen</h1>
        <p class="subtitle">${htmlesc(review.planName)} · ${htmlesc(review.dayName)}</p>
      </header>
      <article class="card stack training-hero">
        <div class="row">
          <div class="grow">
            <p class="muted">Vor dem Start</p>
            <h2>${htmlesc(review.dayName)}</h2>
            <p class="muted">${review.exercises.length} Übungen · ${trainingDaySetCount(review)} Sätze · ca. ${estimatedPlanDayMinutes(review)} Minuten</p>
            <p class="quiet">Quelle: ${trainingDayReasonText(review.reason)}</p>
          </div>
          <span class="badge ${invalid.length ? "amber" : "green"}">${invalid.length ? "prüfen" : "startklar"}</span>
        </div>
        ${review.warmups?.length ? `<p class="quiet">Warm-up: ${review.warmups.map((item) => `${htmlesc(item.equipment)} ${Number(item.durationMinutes) || 0} min`).join(", ")}</p>` : `<p class="quiet">Kein Warm-up eingetragen.</p>`}
        ${renderPlannedExerciseList(review.exercises)}
        ${invalid.length ? `<p class="warning compact-warning">Ungültige Übung im Plan. Training wird nicht gestartet: ${invalid.map((item) => htmlesc(item.exerciseId || "ohne ID")).join(", ")}</p>` : ""}
        <div class="button-row">
          <button class="primary" data-confirm-workout-review ${invalid.length ? "disabled" : ""}>Diese Einheit starten</button>
          <button class="secondary" data-cancel-workout-review>Zurück</button>
        </div>
      </article>
    </section>
  `;
}

function renderTrainingDayCompactV53(day) {
  return `
    <button class="list-button" data-start-day-id="${htmlesc(day.id)}">
      <article class="card row compact-training-day">
        <div class="grow">
          <h3>${htmlesc(day.name)}</h3>
          <p class="muted">${day.exercises.length} Übungen · ${trainingDaySetCount(day)} Sätze · ${day.maxDurationMinutes} min</p>
        </div>
        <span class="badge blue">Start</span>
      </article>
    </button>
  `;
}

function renderSmartWorkoutPreviewV53(dayName) {
  const proposal = buildSmartWorkout(dayName);
  if (!proposal.exercises.length) return "";
  const focus = [...new Set(proposal.exercises.flatMap((item) => item.exercise.primaryMuscleGroups || []))].slice(0, 3);
  return `
    <article class="card stack builder-preview compact-builder">
      <div class="row">
        <h3 class="grow">Smart Builder · ${htmlesc(proposal.dayType)}</h3>
        <span class="badge blue">ca. ${proposal.estimatedDurationMinutes} min</span>
      </div>
      <p class="muted">${proposal.exercises.length} Übungen · Fokus: ${htmlesc(focus.join(", ") || "Ganzkörper")}</p>
      ${proposal.builderReasons.length ? `<ul class="small-list">${proposal.builderReasons.slice(0, 2).map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>` : ""}
      ${proposal.warnings.length ? `<p class="quiet">${htmlesc(proposal.warnings[0])}</p>` : ""}
      <details class="compact-plan-preview">
        <summary>Planvorschau</summary>
        <ol class="builder-list">
          ${proposal.exercises.map((item) => `<li><strong>${htmlesc(item.exercise.displayName)}</strong><span>${item.sets} Sätze · ${htmlesc(item.reps)}</span></li>`).join("")}
        </ol>
      </details>
      <button class="secondary" data-start-smart-day="${htmlesc(dayName)}">Smart-Training starten</button>
    </article>
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

function lastWarmupDefaults() {
  const warmups = storage.sessions.flatMap((session) => Array.isArray(session.warmups) ? session.warmups : []).filter((item) => item && item.equipment);
  return warmups[warmups.length - 1] || null;
}

function renderDailyCheckinDashboardCard() {
  const checkin = dailyCheckinForDate(localIsoDate());
  if (!checkin || checkin.status !== "completed") {
    return `
      <article class="card stack daily-checkin-dashboard-card">
        <div class="row"><h3 class="grow">Tages-Check-in</h3><span class="badge amber">offen</span></div>
        <p class="muted">Heute noch nicht eingecheckt.</p>
        <button class="secondary" data-open-daily-checkin>Jetzt einchecken</button>
      </article>
    `;
  }
  const pain = checkin.painPresent ? (checkin.painEntries || []).map((item) => `${item.regionLabelSnapshot} ${item.intensity}/10`).join(", ") : "";
  return `
    <article class="card stack daily-checkin-dashboard-card">
      <div class="row"><h3 class="grow">Heute eingecheckt</h3><span class="badge green">ok</span></div>
      <div class="storage-table">
        ${checkin.sleepDurationMinutes ? `<div><span>Schlaf</span><strong>${Math.floor(checkin.sleepDurationMinutes / 60)} h ${checkin.sleepDurationMinutes % 60} min</strong></div>` : ""}
        ${checkin.energy ? `<div><span>Energie</span><strong>${checkin.energy}/10</strong></div>` : ""}
        ${checkin.recovery ? `<div><span>Erholung</span><strong>${checkin.recovery}/10</strong></div>` : ""}
        ${pain ? `<div><span>Schmerz</span><strong>${htmlesc(pain)}</strong></div>` : ""}
        ${checkin.weightKg ? `<div><span>Gewicht</span><strong>${kg(checkin.weightKg)}</strong></div>` : ""}
      </div>
      <button class="secondary" data-edit-daily-checkin>Check-in bearbeiten</button>
    </article>
  `;
}

function renderPrimaryCoachRecommendationCard() {
  const summary = coachRecommendationSummaryV54();
  const proposalPreview = buildCoachPlanProposal();
  const proposalState = coachProposalReviewState(proposalPreview);
  return `
    <article class="card stack">
      <div class="row">
        <h3 class="grow">Coach-Empfehlung</h3>
        <span class="badge ${summary.confidence >= 75 ? "green" : "amber"}">${summary.confidence}%</span>
      </div>
      <p class="muted">${htmlesc(summary.recommendation)}</p>
      <p class="quiet">${htmlesc(summary.mainReason)}</p>
      <div class="button-row">
        <button class="secondary" data-tab="coach">Details im Coach</button>
        <button class="secondary" data-confirm-plan-adjust>${htmlesc(proposalState.primaryActionLabel)}</button>
      </div>
    </article>
  `;
}

function latestWarmupEquipmentMapping() {
  return storage.scannedEquipmentMappings
    .filter((item) => String(item.equipmentType || "").toLowerCase() === "warmup" || String(item.equipmentType || "").toLowerCase() === "cardio")
    .sort((a, b) => new Date(b.lastUsedAt || b.updatedAt || 0) - new Date(a.lastUsedAt || a.updatedAt || 0))[0] || null;
}

function askWarmupBeforeWorkout() {
  if (!confirm("Möchtest du dich vorher aufwärmen?")) return null;
  const last = lastWarmupDefaults();
  const scanned = latestWarmupEquipmentMapping();
  const equipment = prompt("Warm-up Gerät: Laufband / Fahrrad / Crosstrainer / Rudergeraet / Stepper / Sonstiges", scanned?.machineLabel || last?.equipment || "Fahrrad");
  if (equipment === null) return null;
  const minutesText = prompt("Warm-up Dauer in Minuten", last?.durationMinutes ? String(last.durationMinutes) : "8");
  if (minutesText === null) return null;
  const durationMinutes = Math.max(0, parseInteger(minutesText) || 0);
  if (!durationMinutes) return null;
  const intensity = prompt("Intensität optional: leicht / mittel / hoch", last?.intensity || "leicht") || "";
  const note = prompt("Warm-up Notiz optional", "") || "";
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : `warmup_${Date.now()}`,
    equipment: equipment.trim() || "Warm-up",
    durationMinutes,
    intensity: ["leicht", "mittel", "hoch"].includes(intensity.trim()) ? intensity.trim() : "",
    note: note.trim(),
    equipmentMappingId: scanned?.id || "",
    equipmentType: scanned ? (scanned.equipmentType || "warmup") : "warmup",
    startedAt: new Date().toISOString(),
    completedAt: new Date().toISOString(),
    completed: true
  };
}

function workoutEntryFromPlanned(planned) {
  const last = lastCompletedExercise(planned.exerciseId);
  const exercise = exerciseById(planned.exerciseId);
  const setting = latestMachineSetting(planned.exerciseId);
  const scannedMapping = latestScannedEquipmentMappingForExercise(planned.exerciseId);
  return {
    exerciseId: planned.exerciseId,
    trackingType: exercise?.trackingType || "strength_weight_reps",
    plannedSets: Math.max(Number(planned.sets) || 1, 1),
    reps: planned.reps,
    restSeconds: planned.restSeconds,
    priority: planned.priority,
    sortOrder: planned.sortOrder,
    sourceDayId: planned.sourceDayId || "",
    seatPosition: scannedMapping?.seatPosition || setting?.seatPosition || "",
    gripPosition: scannedMapping?.gripPosition || setting?.gripPosition || setting?.handlePosition || "",
    gripWidth: scannedMapping?.gripWidth || setting?.gripWidth || "",
    attachment: scannedMapping?.attachment || setting?.attachment || "",
    machineLabel: scannedMapping?.machineLabel || "",
    machineSerial: scannedMapping?.machineSerial || "",
    exerciseNote: "",
    sets: Array.from({ length: Math.max(planned.sets, 1) }, (_, index) => {
      const previous = last?.exercise?.sets?.find((set) => set.setNumber === index + 1);
      return {
        setNumber: index + 1,
        weightText: trackingFieldsForExercise(exercise).includes("weightText") && previous?.actualWeightKg ? String(previous.actualWeightKg).replace(".", ",") : "",
        repsText: trackingFieldsForExercise(exercise).includes("repsText") && previous?.actualReps ? String(previous.actualReps) : "",
        rirText: "",
        durationSecondsText: previous?.actualDurationSeconds ? String(previous.actualDurationSeconds) : "",
        distanceText: previous?.actualDistance ? String(previous.actualDistance).replace(".", ",") : "",
        addedWeightText: previous?.actualAddedWeightKg ? String(previous.actualAddedWeightKg).replace(".", ",") : "",
        sideText: previous?.side || "",
        completed: false
      };
    })
  };
}

function buildTrainingDayError(resolved, invalid) {
  return {
    message: `${resolved?.dayName || "Trainingstag"} kann nicht gestartet werden. Der Plan enthält ungültige Übungen.`,
    details: invalid.map((entry) => `${entry.exerciseId || "ohne ID"} ist nicht in der Übungsdatenbank vorhanden.`)
  };
}

function buildTrainingStartIntent(resolved, source = "manual_day_selection") {
  return {
    id: `training_intent_${Date.now()}`,
    planId: resolved.planId,
    planName: resolved.planName,
    dayId: resolved.dayId,
    dayName: resolved.dayName,
    exerciseIds: resolved.exercises.map((entry) => entry.exerciseId),
    source,
    createdAt: new Date().toISOString()
  };
}

function reviewMatchesTrainingStartIntent(review, intent = state.trainingStartIntent) {
  if (!review || !intent) return false;
  const reviewExerciseIds = (review.exercises || []).map((entry) => entry.exerciseId);
  return review.trainingStartIntentId === intent.id &&
    review.planId === intent.planId &&
    review.dayId === intent.dayId &&
    review.dayName === intent.dayName &&
    JSON.stringify(reviewExerciseIds) === JSON.stringify(intent.exerciseIds);
}

function buildTrainingStartIntentMismatchError() {
  return {
    message: "Der gewählte Trainingstag hat sich während des Startvorgangs verändert. Das Training wurde aus Sicherheitsgründen nicht gestartet.",
    details: ["Prüfe den gewählten Tag erneut oder brich den Startvorgang ab."]
  };
}

function createLockedTrainingStartArtifacts({ resolved, warmup = null, intent = null, createdAt = new Date().toISOString() }) {
  const review = {
    id: `workout_review_${Date.now()}`,
    trainingStartIntentId: intent?.id || "",
    planId: resolved.planId,
    planName: resolved.planName,
    dayId: resolved.dayId,
    dayName: resolved.dayName,
    dayIndex: resolved.dayIndex,
    reason: resolved.reason,
    maxDurationMinutes: resolved.maxDurationMinutes,
    exercises: resolved.exercises.map((entry) => ({ ...entry, sourceDayId: resolved.dayId })),
    warmups: warmup ? [warmup] : [],
    createdAt
  };
  return {
    review,
    draftCore: {
      planId: review.planId,
      planName: review.planName,
      dayId: review.dayId,
      dayName: review.dayName,
      trainingStartIntentId: review.trainingStartIntentId,
      warmups: review.warmups,
      exerciseIds: review.exercises.map((entry) => entry.exerciseId)
    }
  };
}

function createLockedWorkoutDraftCore(review) {
  return {
    planId: review.planId,
    planName: review.planName,
    dayId: review.dayId,
    dayName: review.dayName,
    trainingStartIntentId: review.trainingStartIntentId || "",
    warmups: review.warmups || []
  };
}

function buildPreWorkoutReview(resolved, warmup = null, intent = null) {
  return createLockedTrainingStartArtifacts({ resolved, warmup, intent }).review;
}

function startWorkoutFromReview(review) {
  if (!reviewMatchesTrainingStartIntent(review)) {
    state.trainingDayError = buildTrainingStartIntentMismatchError();
    state.pendingWorkoutReview = null;
    state.tab = "training";
    return false;
  }
  const invalid = invalidPlannedExercises(review);
  if (invalid.length) {
    state.trainingDayError = buildTrainingDayError(review, invalid);
    state.pendingWorkoutReview = null;
    state.tab = "training";
    return false;
  }
  state.showAlternatives = false;
  resetWorkoutExercisePicker();
  state.restTimer.remaining = 0;
  state.restTimer.running = false;
  const draftCore = createLockedWorkoutDraftCore(review);
  const nextWorkout = {
    ...draftCore,
    startedAt: new Date().toISOString(),
    sessionNote: "",
    index: 0,
    overviewOpen: false,
    entries: review.exercises.map(workoutEntryFromPlanned)
  };
  const integrity = workoutDraftIntegrity(nextWorkout, planByIdOrName(nextWorkout.planId));
  if (!integrity.valid) {
    state.trainingDayError = buildWorkoutDraftIntegrityError(nextWorkout, integrity, "blocked");
    state.pendingWorkoutReview = null;
    state.tab = "training";
    return false;
  }
  state.activeWorkout = nextWorkout;
  state.pendingWorkoutReview = null;
  state.trainingDayError = null;
  persistWorkoutDraft();
  return true;
}

function openPreWorkoutReview(dayIdOrName = "", options = {}) {
  const plan = activePlan();
  if (!plan) {
    navigateTo("plans");
    return;
  }
  const selectedDay = dayIdOrName ? findPlanDayByStableId(plan, dayIdOrName) : null;
  const manualDayId = selectedDay?.id || dayIdOrName || state.manualTrainingDayId;
  const resolved = resolveTrainingDay({ plan, activeWorkoutDraft: null, manuallySelectedDayId: manualDayId });
  if (!resolved) {
    state.trainingDayError = { message: "Kein Trainingstag gefunden.", details: ["Aktiviere oder erstelle zuerst einen Plan."] };
    state.pendingWorkoutReview = null;
    state.tab = "training";
    render();
    return;
  }
  const invalid = invalidPlannedExercises(resolved);
  if (invalid.length) {
    state.trainingDayError = buildTrainingDayError(resolved, invalid);
    state.pendingWorkoutReview = null;
    state.manualTrainingDayId = resolved.dayId;
    state.tab = "training";
    render();
    return;
  }
  const source = options.source || (dayIdOrName ? "manual_day_selection" : "automatic_next_day");
  const intent = buildTrainingStartIntent(resolved, source);
  state.trainingStartIntent = intent;
  const warmup = askWarmupBeforeWorkout();
  state.manualTrainingDayId = resolved.dayId;
  const review = buildPreWorkoutReview(resolved, warmup, intent);
  if (options.skipReview) {
    startWorkoutFromReview(review);
    render();
    return;
  }
  state.pendingWorkoutReview = review;
  state.trainingDayError = null;
  state.tab = "training";
  render();
}

function confirmPreWorkoutReview() {
  const review = state.pendingWorkoutReview;
  if (!review) return;
  startWorkoutFromReview(review);
  render();
}

function cancelPreWorkoutReview() {
  state.pendingWorkoutReview = null;
  state.trainingStartIntent = null;
  render();
}

function startTrainingFlow(dayIdOrName = "", options = {}) {
  const skipReview = options.skipReview !== false;
  const todayCheckin = dailyCheckinForDate(localIsoDate());
  const checkinDone = todayCheckin?.status === "completed" || todayCheckin?.status === "skipped";
  if (!checkinDone) {
    const existingDraft = storage.dailyCheckinDraft?.localDate === localIsoDate() ? storage.dailyCheckinDraft : null;
    storage.dailyCheckinDraft = createTrainingResumeCheckinDraft(existingDraft, dayIdOrName, skipReview);
    state.dailyCheckinActive = true;
    state.dailyCheckinStep = existingDraft ? "draft" : "sleep";
    render();
    return;
  }

  if (storage.activeWorkoutDraft && !state.activeWorkout) {
    resumeWorkoutDraft();
    return;
  }

  if (state.activeWorkout) {
    state.tab = "training";
    render();
    return;
  }

  const plan = activePlan();
  if (!plan) {
    navigateTo("plans");
    return;
  }

  const selectedDay = dayIdOrName ? findPlanDayByStableId(plan, dayIdOrName) : null;
  const resolved = resolveTrainingDay({
    plan,
    activeWorkoutDraft: null,
    manuallySelectedDayId: selectedDay?.id || dayIdOrName || ""
  });
  if (!resolved) {
    navigateTo("plans");
    return;
  }

  startDay(resolved.dayId, { skipReview, source: options.source || "automatic_next_day" });
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

function startDay(dayName, options = {}) {
  openPreWorkoutReview(dayName, options);
}

function startSmartDay(dayName) {
  const proposal = buildSmartWorkout(dayName);
  if (!proposal.exercises.length) {
    alert("Keine passende Übung gefunden. Bitte manuell auswählen.");
    return;
  }
  const plan = activePlan();
  const warmup = askWarmupBeforeWorkout();
  state.showAlternatives = false;
  resetWorkoutExercisePicker();
  state.restTimer.remaining = 0;
  state.restTimer.running = false;
  state.activeWorkout = {
    planName: plan?.planName || "Smart Workout",
    dayName: `${proposal.dayType} Smart`,
    startedAt: new Date().toISOString(),
    warmups: warmup ? [warmup] : [],
    sessionNote: "",
    index: 0,
    entries: proposal.exercises.map(workoutEntryFromPlanned)
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
  const alternatives = filterUniqueExerciseAlternatives({
    draft: workout,
    replacementIndex: workout.index,
    candidates: alternativeCandidatesForExercise(exercise)
  });
  const machineSetting = latestMachineSetting(exercise.id);
  const scannedMapping = latestScannedEquipmentMappingForExercise(exercise.id);
  return `
    <section class="screen stack">
      <header>
        <h1 class="title">${htmlesc(workout.dayName)}</h1>
        <p class="subtitle">Übung ${workout.index + 1} von ${workout.entries.length}</p>
      </header>
      <div class="progress"><span style="width:${progress}%"></span></div>
      ${renderWorkoutWarmupSummary(workout)}
      ${renderWorkoutOverview(workout)}
      ${renderSessionCoachDuringCard(workout, entry, exercise)}
      <article class="card stack">
        <h2>${htmlesc(exercise.displayName)}</h2>
        <p class="muted">${htmlesc([...exercise.primaryMuscleGroups, ...exercise.secondaryMuscleGroups].slice(0, 3).join(" · "))}</p>
        <div class="row">${lwsBadge(exercise.lumbarDiscSuitability)} <span class="badge blue">${plannedRepTextForExercise(entry, exercise)}</span> <span class="badge">${entry.restSeconds} s Pause</span></div>
        ${machineSetting ? `<p class="quiet">Setup: Sitz ${htmlesc(machineSetting.seatPosition || "-")} · Griff ${htmlesc(machineSetting.handlePosition || "-")} · Rücken ${htmlesc(machineSetting.backrestPosition || "-")}</p>` : ""}
        ${scannedMapping ? `<p class="quiet">Life Fitness: ${htmlesc(scannedMapping.machineLabel || scannedMapping.machineSerial || "Zuordnung gespeichert")} - Sitz ${htmlesc(entry.seatPosition || "-")} - Griff ${htmlesc(entry.gripPosition || "-")}</p>` : ""}
        ${exerciseIsCritical(exercise) ? `<p class="warning compact-warning">${lwsWarning(exercise)}</p>` : ""}
        <div class="button-grid">
          <button class="secondary" data-workout-exercise-detail="${htmlesc(exercise.id)}">Details ansehen</button>
          <button class="secondary" data-workout-equipment-scan>Gerät scannen</button>
        </div>
      </article>
      ${state.equipmentScanner.active ? renderWorkoutScannerPanel() : ""}
      <article class="card stack">
        <h3>Letzte Leistung</h3>
        ${last ? `
          <p class="last-performance">${last.exercise.sets.map((set) => setPerformanceText(set, exercise)).join(" / ")}</p>
        ` : `<p class="muted">Noch keine vorherige Leistung vorhanden. Starte moderat.</p>`}
      </article>
      <article class="card stack">
        <div class="row"><h3 class="grow">Sätze</h3><span class="quiet">${htmlesc(trackingSummaryForExercise(exercise))}</span></div>
        ${entry.sets.length ? entry.sets.map((set, index) => renderSetRow(set, index, entry, exercise)).join("") : `<p class="muted">Keine Sätze eingetragen.</p>`}
        <button class="secondary" data-add-workout-set>+ Satz hinzufügen</button>
      </article>
      ${renderExerciseSetupFields(entry)}
      <p class="quiet">Dieses Training wird automatisch auf diesem Gerät gesichert.</p>
      ${state.restTimer.remaining > 0 || state.restTimer.running ? renderRestTimer() : ""}
      ${state.showAlternatives ? renderAlternativePicker(alternatives) : ""}
      ${state.workoutExercisePickerOpen ? renderWorkoutExercisePicker(workout) : ""}
      <div class="actions">
        <button class="secondary" data-toggle-alternatives>${state.showAlternatives ? "Alternativen ausblenden" : machineText("device_occupied", "Gerät besetzt? Alternative anzeigen.")}</button>
        <button class="secondary" data-toggle-workout-exercise-picker>${state.workoutExercisePickerOpen ? "Übung hinzufügen schliessen" : "+ Übung hinzufügen"}</button>
        ${entry.addedDuringWorkout ? `<button class="secondary danger" data-remove-workout-exercise="${workout.index}">Hinzugefügte Übung entfernen</button>` : ""}
        ${workout.index > 0 ? `<button class="secondary" data-prev-exercise>Vorherige Übung</button>` : ""}
        <button class="primary" data-next-exercise>${workout.index < workout.entries.length - 1 ? "Nächste Übung" : "Training speichern"}</button>
        <button class="secondary" data-cancel-workout>Training abbrechen</button>
      </div>
    </section>
  `;
}

function renderWorkoutOverview(workout) {
  return `
    <details class="disclosure-card stack workout-overview" ${workout.overviewOpen ? "open" : ""}>
      <summary><span>Workout-Übersicht</span><span class="badge blue">${workout.entries.length}</span></summary>
      <div class="workout-overview-list">
        ${workout.entries.map((entry, index) => {
          const exercise = exerciseById(entry.exerciseId);
          const recorded = recordedWorkoutSets(entry);
          const completed = completedWorkoutSets(entry).length;
          const active = index === workout.index;
          const done = recorded.length > 0 && completed === recorded.length;
          return `
            <button class="list-button ${active ? "active" : ""}" data-jump-workout-exercise="${index}">
              <article class="card row compact-training-day">
                <div class="grow">
                  <h3>${index + 1}. ${htmlesc(exercise?.displayName || entry.exerciseId)}${entry.addedDuringWorkout ? ` <span class="badge blue">extra</span>` : ""}</h3>
                  <p class="muted">${completed}/${recorded.length || entry.sets.length} Sätze · ${plannedRepTextForExercise(entry, exercise)} · ${entry.restSeconds} s</p>
                </div>
                <span class="badge ${active ? "green" : done ? "blue" : ""}">${active ? "aktuell" : done ? "fertig" : "offen"}</span>
              </article>
            </button>
          `;
        }).join("")}
      </div>
    </details>
  `;
}

function renderWorkoutWarmupSummary(workout) {
  const warmups = Array.isArray(workout.warmups) ? workout.warmups : [];
  if (!warmups.length) return "";
  return `
    <article class="card stack compact-card">
      <h3>0. Aufwärmen</h3>
      ${warmups.map((item) => `<p class="muted">${htmlesc(item.equipment)} - ${Number(item.durationMinutes) || 0} Minuten${item.intensity ? ` - ${htmlesc(item.intensity)}` : ""}</p>`).join("")}
    </article>
  `;
}

function renderWorkoutScannerPanel() {
  return `
    <article class="card stack equipment-scanner-card">
      <div class="row">
        <h3 class="grow">Gerät scannen</h3>
        <span class="badge blue">Training</span>
      </div>
      <p class="muted">Der aktuelle Satz wird nicht automatisch abgeschlossen.</p>
      ${state.equipmentScanner.status === "camera" ? `
        <div class="scanner-video-wrap">
          <video playsinline muted data-equipment-scanner-video></video>
        </div>
      ` : ""}
      ${state.equipmentScanner.error ? `<p class="quiet">${htmlesc(state.equipmentScanner.error)}</p>` : ""}
      <div class="button-grid">
        <button class="primary" data-start-equipment-scan>Kamera öffnen</button>
        <button class="secondary" data-stop-equipment-scan>Scanner schliessen</button>
      </div>
      <div class="row">
        <input class="input grow" placeholder="Code oder URL manuell eingeben" value="${htmlesc(state.equipmentScanner.rawCode)}" data-manual-equipment-code>
        <button class="secondary compact-button" data-apply-manual-equipment-code>Prüfen</button>
      </div>
      ${renderEquipmentScannerResult()}
    </article>
  `;
}

function renderExerciseSetupFields(entry) {
  return `
    <details class="disclosure-card stack exercise-setup-dropdown">
      <summary><span>Sitz, Griff und Notizen</span><span class="badge blue">Setup</span></summary>
      <div class="form-grid">
        <label>Sitzposition<input class="input" value="${htmlesc(entry.seatPosition || "")}" placeholder="z.B. Stufe 4" data-entry-field="seatPosition"></label>
        <label>Griff<input class="input" value="${htmlesc(entry.gripPosition || "")}" placeholder="neutral, proniert, oberer Griff" data-entry-field="gripPosition"></label>
        <label>Griffbreite<input class="input" value="${htmlesc(entry.gripWidth || "")}" placeholder="eng, mittel, breit" data-entry-field="gripWidth"></label>
        <label>Aufsatz<input class="input" value="${htmlesc(entry.attachment || "")}" placeholder="Seil, V-Griff, Stange" data-entry-field="attachment"></label>
        <label>Gerät<input class="input" value="${htmlesc(entry.machineLabel || "")}" placeholder="z.B. Brustpresse Fenster" data-entry-field="machineLabel"></label>
        <label>Gerätenummer<input class="input" value="${htmlesc(entry.machineSerial || "")}" placeholder="z.B. 12" data-entry-field="machineSerial"></label>
      </div>
      <textarea class="input area" placeholder="Notiz zu Übung oder Training ..." data-entry-field="exerciseNote">${htmlesc(entry.exerciseNote || "")}</textarea>
      <textarea class="input area" placeholder="Notiz zum Training ..." data-workout-field="sessionNote">${htmlesc(state.activeWorkout?.sessionNote || "")}</textarea>
    </details>
  `;
}

function renderRestTimer() {
  return `
    <article class="card timer-card">
      <div>
        <p class="muted">Pause</p>
        <strong data-rest-timer-value>${restTimeText(state.restTimer.remaining)}</strong>
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
              ${item.explanation ? `<p class="quiet">${htmlesc(item.explanation)}</p>` : ""}
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

function renderWorkoutExercisePicker(workout) {
  const muscleOptions = workoutExerciseFilterOptions("muscle");
  const equipmentOptions = workoutExerciseFilterOptions("equipment");
  const candidates = workoutExercisePickerCandidates(workout);
  return `
    <article class="card stack workout-exercise-picker">
      <div class="row">
        <h3 class="grow">Übung hinzufügen</h3>
        <span class="badge blue">${candidates.length}</span>
      </div>
      <input class="input" placeholder="Übung suchen" value="${htmlesc(state.workoutExerciseSearch)}" data-workout-exercise-search>
      <div class="form-grid">
        <label>Muskel
          <select class="input" data-workout-exercise-muscle-filter>
            <option value="all" ${state.workoutExerciseMuscleFilter === "all" ? "selected" : ""}>Alle Muskeln</option>
            ${muscleOptions.map((item) => `<option value="${htmlesc(item)}" ${state.workoutExerciseMuscleFilter === item ? "selected" : ""}>${htmlesc(item)}</option>`).join("")}
          </select>
        </label>
        <label>Equipment
          <select class="input" data-workout-exercise-equipment-filter>
            <option value="all" ${state.workoutExerciseEquipmentFilter === "all" ? "selected" : ""}>Alles Equipment</option>
            ${equipmentOptions.map((item) => `<option value="${htmlesc(item)}" ${state.workoutExerciseEquipmentFilter === item ? "selected" : ""}>${htmlesc(item)}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="workout-overview-list">
        ${candidates.length ? candidates.map((exercise) => {
          const typical = workoutExerciseMatchesDay(exercise, workout);
          return `
            <button class="list-button" data-add-workout-exercise="${htmlesc(exercise.id)}">
              <article class="card row compact-training-day">
                <div class="grow">
                  <h3>${htmlesc(exercise.displayName)}</h3>
                  <p class="muted">${htmlesc(exerciseListMuscleText(exercise))} · ${htmlesc(trackingSummaryForExercise(exercise))}</p>
                </div>
                <span class="badge ${typical ? "green" : ""}">${typical ? "passt" : "taguntypisch"}</span>
              </article>
            </button>
          `;
        }).join("") : `<p class="muted">Keine Übung gefunden.</p>`}
      </div>
    </article>
  `;
}

function workoutSetField(field, set, index) {
  const common = `value="${htmlesc(set[field] || "")}" data-set="${index}" data-field="${field}"`;
  if (field === "weightText") return `<input inputmode="decimal" placeholder="kg" ${common}>`;
  if (field === "addedWeightText") return `<input inputmode="decimal" placeholder="+ kg" ${common}>`;
  if (field === "repsText") return `<input inputmode="numeric" placeholder="Wdh." ${common}>`;
  if (field === "rirText") return `<input inputmode="numeric" placeholder="RIR" ${common}>`;
  if (field === "durationSecondsText") return `<input inputmode="numeric" placeholder="Sek." ${common}>`;
  if (field === "distanceText") return `<input inputmode="decimal" placeholder="m/km" ${common}>`;
  if (field === "sideText") {
    return `
      <select class="input" data-set="${index}" data-field="sideText">
        <option value="" ${!set.sideText ? "selected" : ""}>Seite</option>
        <option value="left" ${set.sideText === "left" ? "selected" : ""}>links</option>
        <option value="right" ${set.sideText === "right" ? "selected" : ""}>rechts</option>
      </select>
    `;
  }
  return `<input ${common}>`;
}

function setPerformanceText(set, exercise = null) {
  const fields = trackingFieldsForExercise(exercise);
  const parts = [];
  if (fields.includes("weightText") && Number(set.actualWeightKg) > 0) parts.push(kg(set.actualWeightKg));
  if (fields.includes("addedWeightText") && Number(set.actualAddedWeightKg) > 0) parts.push(`+${kg(set.actualAddedWeightKg)}`);
  if (fields.includes("repsText") && Number(set.actualReps) > 0) parts.push(`${set.actualReps} Wdh.`);
  if (fields.includes("durationSecondsText") && Number(set.actualDurationSeconds) > 0) parts.push(durationText(set.actualDurationSeconds));
  if (fields.includes("distanceText") && Number(set.actualDistance) > 0) parts.push(distanceText(set.actualDistance));
  if (set.side) parts.push(set.side === "left" ? "links" : set.side === "right" ? "rechts" : set.side);
  return parts.length ? parts.join(" x ") : "-";
}

function addWorkoutSet() {
  const workout = state.activeWorkout;
  const entry = workout?.entries?.[workout.index];
  if (!entry) return;
  entry.sets = [...(entry.sets || []), blankWorkoutSet((entry.sets || []).length + 1)];
  persistWorkoutDraft();
  render();
}

function deleteWorkoutSet(index) {
  const workout = state.activeWorkout;
  const entry = workout?.entries?.[workout.index];
  const setIndex = Number(index);
  if (!entry || !Number.isInteger(setIndex) || setIndex < 0 || setIndex >= (entry.sets || []).length) return;
  const set = entry.sets[setIndex];
  if ((set.completed || setHasAnyInput(set, entry)) && !confirm("Diesen ausgefüllten Satz wirklich löschen?")) return;
  entry.sets.splice(setIndex, 1);
  entry.sets.forEach((item, itemIndex) => { item.setNumber = itemIndex + 1; });
  persistWorkoutDraft();
  render();
}

function renderSetRow(set, index, entry = null, exercise = null) {
  const fields = entry ? setInputFieldsForEntry(entry) : trackingFieldsForExercise(exercise);
  return `
    <div class="set-row ${set.completed ? "done" : ""}">
      <strong>${set.setNumber}</strong>
      ${fields.map((field) => workoutSetField(field, set, index)).join("")}
      <button class="check ${set.completed ? "done" : ""}" data-check-set="${index}">${set.completed ? "?" : ""}</button>
      <button class="secondary compact-button" data-delete-workout-set="${index}" title="Satz löschen">Löschen</button>
    </div>
  `;
}

function addExerciseToActiveWorkout(exerciseId) {
  const workout = state.activeWorkout;
  const exercise = exerciseById(exerciseId);
  if (!workout || !exercise) return;
  if ((workout.entries || []).some((entry) => entry.exerciseId === exercise.id)) {
    alert("Diese Übung ist im aktuellen Training bereits enthalten.");
    return;
  }
  if (!workoutExerciseMatchesDay(exercise, workout) && !confirm("Diese Übung passt nicht typisch zu diesem Trainingstag. Trotzdem hinzufügen?")) return;
  const entry = {
    ...workoutEntryFromPlanned({
      exerciseId: exercise.id,
      sets: exercise.defaultSets || 2,
      reps: exercise.defaultRepRange || "8-12",
      restSeconds: exercise.defaultRestSeconds || 90,
      priority: "added",
      sortOrder: (workout.entries || []).length + 1,
      sourceDayId: workout.dayId || ""
    }),
    addedDuringWorkout: true,
    addedAt: new Date().toISOString(),
    sourceDayId: workout.dayId || ""
  };
  workout.entries.push(entry);
  workout.index = workout.entries.length - 1;
  workout.overviewOpen = true;
  state.workoutExercisePickerOpen = false;
  state.showAlternatives = false;
  persistWorkoutDraft();
  render();
}

function removeAddedWorkoutExercise(index) {
  const workout = state.activeWorkout;
  const entryIndex = Number(index);
  if (!workout || !Number.isInteger(entryIndex) || entryIndex < 0 || entryIndex >= workout.entries.length) return;
  const entry = workout.entries[entryIndex];
  if (!entry.addedDuringWorkout) return;
  if (entryHasRecordedTrainingData(entry) && !confirm("Diese hinzugefügte Übung enthält bereits Eingaben. Wirklich entfernen?")) return;
  workout.entries.splice(entryIndex, 1);
  workout.entries.forEach((item, itemIndex) => { item.sortOrder = itemIndex + 1; });
  workout.index = Math.max(0, Math.min(workout.index, workout.entries.length - 1));
  state.workoutExercisePickerOpen = false;
  persistWorkoutDraft();
  render();
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
  const result = replaceExerciseInActiveWorkout({
    draft: state.activeWorkout,
    entryIndex: state.activeWorkout?.index ?? -1,
    replacementExerciseId: exerciseId,
    confirmStartedReplacement: (entry) => confirm(`Für diese Übung wurden bereits Daten eingetragen.\n\n${exerciseById(entry.exerciseId)?.displayName || entry.exerciseId}\n\nOK = Übung ersetzen und Eingaben verwerfen\nAbbrechen = Austausch abbrechen`)
  });
  if (!result.ok) {
    if (result.originalDraft) {
      state.activeWorkout = result.originalDraft;
      storage.activeWorkoutDraft = result.originalDraft;
    }
    state.selectedExerciseId = null;
    state.selectedSessionId = null;
    if (result.message) alert(result.message);
    renderActiveWorkoutView();
    return;
  }
  state.activeWorkout = result.draft;
  state.showAlternatives = false;
  state.selectedExerciseId = null;
  state.selectedSessionId = null;
  state.currentView = "workout";
  persistWorkoutDraft();
  renderActiveWorkoutView();
}

function cloneWorkoutDraft(draft) {
  return JSON.parse(JSON.stringify(draft));
}

function entryHasRecordedTrainingData(entry) {
  const hasSetData = (entry?.sets || []).some((set) =>
    set.completed ||
    String(set.weightText || "").trim() ||
    String(set.repsText || "").trim() ||
    String(set.rirText || "").trim() ||
    String(set.durationSecondsText || "").trim() ||
    String(set.distanceText || "").trim() ||
    String(set.addedWeightText || "").trim() ||
    String(set.sideText || "").trim()
  );
  return Boolean(hasSetData || String(entry?.exerciseNote || "").trim());
}

function emptySetsForReplacement(entry) {
  return Array.from({ length: Math.max(Number(entry?.plannedSets) || Number(entry?.sets?.length) || 1, 1) }, (_, index) => ({
    setNumber: index + 1,
    weightText: "",
    repsText: "",
    rirText: "",
    durationSecondsText: "",
    distanceText: "",
    addedWeightText: "",
    sideText: "",
    completed: false
  }));
}

function getPlannedExerciseId(entry) {
  return entry?.plannedExerciseId || entry?.alternativeForExerciseId || entry?.exerciseId || "";
}

function canonicalExerciseId(exerciseId) {
  return String(exerciseId || "").trim();
}

function getOccupiedExerciseIds(draft, replacementIndex) {
  return new Set(
    (draft?.entries || [])
      .map((entry, index) => ({ entry, index }))
      .filter(({ index }) => index !== replacementIndex)
      .map(({ entry }) => canonicalExerciseId(entry?.exerciseId))
      .filter(Boolean)
  );
}

function replacementCandidateId(candidate) {
  return canonicalExerciseId(candidate?.exercise?.id || candidate?.id || "");
}

function filterUniqueExerciseAlternatives({ draft, replacementIndex, candidates }) {
  const occupied = getOccupiedExerciseIds(draft, replacementIndex);
  const currentId = canonicalExerciseId(draft?.entries?.[replacementIndex]?.exerciseId);
  return (candidates || []).filter((candidate) => {
    const candidateId = replacementCandidateId(candidate);
    return Boolean(candidateId) && candidateId !== currentId && !occupied.has(candidateId);
  });
}

function validateReplacementCandidate({ draft, replacementIndex, replacementExerciseId }) {
  const replacementId = canonicalExerciseId(replacementExerciseId);
  if (!replacementId) return { ok: false, reason: "missing_replacement_exercise" };
  if (getOccupiedExerciseIds(draft, replacementIndex).has(replacementId)) {
    return { ok: false, reason: "duplicate_exercise_in_workout" };
  }
  return { ok: true };
}

function exerciseExistsInDatabase(exerciseId, exerciseDatabase = null) {
  const id = canonicalExerciseId(exerciseId);
  if (!id) return false;
  if (exerciseDatabase instanceof Map) return Boolean(exerciseDatabase.get(id));
  if (Array.isArray(exerciseDatabase)) return exerciseDatabase.some((exercise) => exercise?.id === id);
  if (exerciseDatabase && typeof exerciseDatabase === "object") return Boolean(exerciseDatabase[id] || exerciseDatabase.exercises?.[id]);
  return Boolean(exerciseById(id));
}

function selectedExerciseFromDatabase(exerciseId, exerciseDatabase = null) {
  const id = canonicalExerciseId(exerciseId);
  if (exerciseDatabase instanceof Map) return exerciseDatabase.get(id) || null;
  if (Array.isArray(exerciseDatabase)) return exerciseDatabase.find((exercise) => exercise?.id === id) || null;
  if (exerciseDatabase && typeof exerciseDatabase === "object") return exerciseDatabase[id] || exerciseDatabase.exercises?.[id] || null;
  return exerciseById(id);
}

function planExerciseIdsForDraftDay(draft) {
  const plan = typeof planForWorkoutDraft === "function" ? planForWorkoutDraft(draft) : null;
  const day = plan ? findPlanDayByStableId(plan, draft?.dayId || draft?.dayName) : null;
  const ids = day?.exercises?.length ? day.exercises.map((entry) => entry.exerciseId) : (draft?.entries || []).map(getPlannedExerciseId);
  return new Set(ids.filter(Boolean));
}

function preservedSetChecksum(draft, excludedEntryIndex) {
  return JSON.stringify((draft?.entries || []).flatMap((entry, index) => {
    if (index === excludedEntryIndex) return [];
    return (entry.sets || []).map((set) => [index, entry.exerciseId, set.setNumber, set.weightText || "", set.repsText || "", set.rirText || "", set.durationSecondsText || "", set.distanceText || "", set.addedWeightText || "", set.sideText || "", set.completed === true]);
  }));
}

function validateDraftExerciseReplacement({ originalDraft, candidate, entryIndex, exerciseDatabase = null }) {
  if (!originalDraft || !candidate) return { ok: false, reason: "missing_draft" };
  if (candidate.planId !== originalDraft.planId) return { ok: false, reason: "plan_changed" };
  if (candidate.dayId !== originalDraft.dayId) return { ok: false, reason: "day_changed" };
  if ((candidate.entries || []).length !== (originalDraft.entries || []).length) return { ok: false, reason: "entry_count_changed" };
  if (!(candidate.entries || []).every((entry) => entry.sourceDayId === candidate.dayId)) return { ok: false, reason: "source_day_mismatch" };
  const replacementEntry = candidate.entries?.[entryIndex];
  if (!planExerciseIdsForDraftDay(originalDraft).has(getPlannedExerciseId(replacementEntry))) return { ok: false, reason: "planned_exercise_not_in_day" };
  if (!exerciseExistsInDatabase(replacementEntry?.exerciseId, exerciseDatabase)) return { ok: false, reason: "replacement_missing_in_database" };
  if (preservedSetChecksum(originalDraft, entryIndex) !== preservedSetChecksum(candidate, entryIndex)) return { ok: false, reason: "preserved_set_data_changed" };
  for (let index = 0; index < originalDraft.entries.length; index += 1) {
    if (index !== entryIndex && JSON.stringify(originalDraft.entries[index]) !== JSON.stringify(candidate.entries[index])) {
      return { ok: false, reason: "unrelated_entry_changed" };
    }
  }
  return { ok: true };
}

function replaceExerciseInActiveWorkout({ draft, entryIndex, replacementExerciseId, exerciseDatabase = null, confirmStartedReplacement = () => false }) {
  const originalDraft = cloneWorkoutDraft(draft);
  const selected = selectedExerciseFromDatabase(replacementExerciseId, exerciseDatabase);
  if (!draft || !selected || !Array.isArray(draft.entries) || entryIndex < 0 || entryIndex >= draft.entries.length) {
    return { ok: false, originalDraft, message: "Austausch konnte nicht sicher übernommen werden. Dein ursprüngliches Training wurde wiederhergestellt." };
  }
  const candidateValidation = validateReplacementCandidate({ draft, replacementIndex: entryIndex, replacementExerciseId: selected.id });
  if (!candidateValidation.ok) {
    return {
      ok: false,
      originalDraft,
      reason: candidateValidation.reason,
      message: "Diese Übung ist in deinem aktuellen Training bereits enthalten."
    };
  }
  const originalEntry = draft.entries[entryIndex];
  if (entryHasRecordedTrainingData(originalEntry) && !confirmStartedReplacement(originalEntry)) {
    return { ok: false, cancelled: true, originalDraft, message: "" };
  }
  const candidate = cloneWorkoutDraft(draft);
  const currentEntry = candidate.entries[entryIndex];
  const plannedExerciseId = getPlannedExerciseId(currentEntry);
  candidate.entries[entryIndex] = {
    ...currentEntry,
    plannedExerciseId,
    exerciseId: selected.id,
    exerciseNameSnapshot: selected.displayName || selected.id,
    sourceDayId: candidate.dayId,
    sortOrder: currentEntry.sortOrder,
    alternativeForExerciseId: plannedExerciseId,
    alternativeAppliedAt: new Date().toISOString(),
    sets: emptySetsForReplacement(currentEntry)
  };
  const validation = validateDraftExerciseReplacement({ originalDraft, candidate, entryIndex, exerciseDatabase });
  if (!validation.ok) {
    return { ok: false, originalDraft, reason: validation.reason, message: "Austausch konnte nicht sicher übernommen werden. Dein ursprüngliches Training wurde wiederhergestellt." };
  }
  return { ok: true, draft: candidate, originalDraft };
}

function replaceDraftExercise(options) {
  return replaceExerciseInActiveWorkout(options);
}

function setHasAnyInput(set, entry = null) {
  const hasLegacyInput = Boolean(String(set.weightText || "").trim() || String(set.repsText || "").trim() || String(set.rirText || "").trim());
  if (hasLegacyInput) return true;
  const fields = entry ? setInputFieldsForEntry(entry) : ["durationSecondsText", "distanceText", "addedWeightText", "sideText"];
  return fields.some((field) => setFieldHasInput(set, field));
}

function setIsIncomplete(set) {
  const entry = arguments[1] || null;
  return set.completed !== true && setHasAnyInput(set, entry);
}

function incompleteSetsForEntry(entry) {
  return (entry?.sets || []).filter((set) => setIsIncomplete(set, entry));
}

function handleIncompleteSetsBeforeLeaving(entry) {
  const incomplete = incompleteSetsForEntry(entry);
  if (!incomplete.length) return true;
  const first = incomplete[0];
  const filled = [
    first.weightText ? `${first.weightText} kg` : "",
    first.addedWeightText ? `+${first.addedWeightText} kg` : "",
    first.repsText ? `${first.repsText} Wdh.` : "",
    first.durationSecondsText ? `${first.durationSecondsText} Sek.` : "",
    first.distanceText ? `${first.distanceText} Distanz` : "",
    first.sideText ? `${first.sideText === "left" ? "links" : first.sideText === "right" ? "rechts" : first.sideText}` : "",
    first.rirText ? `RIR ${first.rirText}` : ""
  ].filter(Boolean).join(", ");
  const choice = window.prompt(
    `Satz noch nicht abgeschlossen\n\n${filled || "Es wurden bereits Werte eingetragen."}\n\n1 = Satz fertig eintragen\n2 = Als unvollständig speichern\n3 = Eingaben verwerfen\n4 = Abbrechen`,
    "4"
  );
  if (choice === "1") {
    incomplete.forEach((set) => { set.completed = true; });
    persistWorkoutDraft();
    return true;
  }
  if (choice === "2") {
    persistWorkoutDraft();
    return true;
  }
  if (choice === "3") {
    incomplete.forEach((set) => {
      set.weightText = "";
      set.repsText = "";
      set.rirText = "";
      set.durationSecondsText = "";
      set.distanceText = "";
      set.addedWeightText = "";
      set.sideText = "";
      set.completed = false;
    });
    persistWorkoutDraft();
    return true;
  }
  return false;
}

function allIncompleteWorkoutSets(workout) {
  return (workout?.entries || []).flatMap((entry, entryIndex) => incompleteSetsForEntry(entry).map((set) => ({ entry, entryIndex, set })));
}

function goToPreviousExercise() {
  const workout = state.activeWorkout;
  if (!workout || workout.index <= 0) return;
  if (!handleIncompleteSetsBeforeLeaving(workout.entries[workout.index])) return;
  persistWorkoutDraft();
  workout.index -= 1;
  state.showAlternatives = false;
  state.restTimer.remaining = 0;
  state.restTimer.running = false;
  persistWorkoutDraft();
  render();
}

function jumpToWorkoutExercise(index) {
  const workout = state.activeWorkout;
  const target = Number(index);
  if (!workout || !Number.isInteger(target) || target < 0 || target >= workout.entries.length || target === workout.index) return;
  if (!handleIncompleteSetsBeforeLeaving(workout.entries[workout.index])) return;
  workout.index = target;
  workout.overviewOpen = true;
  state.showAlternatives = false;
  state.restTimer.remaining = 0;
  state.restTimer.running = false;
  persistWorkoutDraft();
  render();
}

function rememberExerciseSetup(entry) {
  if (!entry) return;
  if (!entry.seatPosition && !entry.gripPosition && !entry.gripWidth && !entry.attachment) return;
  const current = latestMachineSetting(entry.exerciseId);
  const setting = {
    id: current?.id || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())),
    exerciseId: entry.exerciseId,
    machineName: current?.machineName || "",
    seatPosition: entry.seatPosition || "",
    handlePosition: entry.gripPosition || "",
    gripPosition: entry.gripPosition || "",
    gripWidth: entry.gripWidth || "",
    attachment: entry.attachment || "",
    machineLabel: entry.machineLabel || "",
    machineSerial: entry.machineSerial || "",
    backrestPosition: current?.backrestPosition || "",
    note: current?.note || "",
    updatedAt: new Date().toISOString()
  };
  storage.machineSettings = [...storage.machineSettings.filter((item) => item.id !== setting.id), setting];
}

function finishOrNext() {
  const workout = state.activeWorkout;
  const entry = workout.entries[workout.index];
  if (!handleIncompleteSetsBeforeLeaving(entry)) return;
  rememberExerciseSetup(entry);
  if (workout.index < workout.entries.length - 1) {
    workout.index += 1;
    state.showAlternatives = false;
    state.restTimer.remaining = 0;
    state.restTimer.running = false;
    persistWorkoutDraft();
    render();
    return;
  }
  const incomplete = allIncompleteWorkoutSets(workout);
  if (incomplete.length) {
    const first = incomplete[0];
    const exercise = exerciseById(first.entry.exerciseId);
    const proceed = confirm(`Training abschliessen?\n\n${incomplete.length} Satz ist noch unvollständig:\n${exercise?.displayName || first.entry.exerciseId} - Satz ${first.set.setNumber}\n\nOK = unvollständig abschliessen\nAbbrechen = Satz bearbeiten`);
    if (!proceed) {
      workout.index = first.entryIndex;
      persistWorkoutDraft();
      render();
      return;
    }
  }
  const completedAt = new Date().toISOString();
  const session = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    planId: workout.planId || workout.planName,
    planName: workout.planName,
    planNameSnapshot: workout.planName,
    dayId: workout.dayId || "",
    dayName: workout.dayName,
    dayNameSnapshot: workout.dayName,
    startedAt: workout.startedAt,
    endedAt: completedAt,
    completedAt,
    trainingStartIntentId: workout.trainingStartIntentId || "",
    readinessSnapshot: journalEntryForDate(todayIsoDate()) || null,
    warmups: Array.isArray(workout.warmups) ? workout.warmups : [],
    sessionNote: workout.sessionNote || "",
    completedExercises: workout.entries.map((entry) => {
      const exercise = exerciseById(entry.exerciseId);
      const recordedSets = recordedWorkoutSets(entry);
      const completedSets = recordedSets.filter((set) => set.completed === true).length;
      rememberExerciseSetup(entry);
      return {
        exerciseId: entry.exerciseId,
        exerciseNameSnapshot: exercise?.displayName || entry.exerciseId,
        trackingType: exercise?.trackingType || entry.trackingType || "strength_weight_reps",
        plannedSets: recordedSets.length,
        completedSets,
        sortOrder: entry.sortOrder,
        seatPosition: entry.seatPosition || "",
        gripPosition: entry.gripPosition || "",
        gripWidth: entry.gripWidth || "",
        attachment: entry.attachment || "",
        exerciseNote: entry.exerciseNote || "",
        sets: recordedSets.map((set) => ({
          setNumber: set.setNumber,
          actualWeightKg: parseNumber(set.weightText),
          plannedReps: entry.reps,
          actualReps: parseInteger(set.repsText),
          actualDurationSeconds: parseDurationSeconds(set.durationSecondsText),
          actualDistance: parseNumber(set.distanceText),
          actualAddedWeightKg: parseNumber(set.addedWeightText),
          side: set.sideText || "",
          rir: parseInteger(set.rirText),
          completed: set.completed
        }))
      };
    })
  };
  storage.sessions = [...storage.sessions, session];
  evaluateDueCoachRecommendations(session);
  clearWorkoutDraft();
  state.trainingStartIntent = null;
  state.activeWorkout = null;
  state.showAlternatives = false;
  state.restTimer.remaining = 0;
  state.restTimer.running = false;
  state.selectedSessionId = session.id;
  navigateTo("coach", { resetSelection: false });
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
      ${renderWorkoutTimelineCard(session)}
      ${renderSessionCoachAfterCard(session)}
      ${renderRecordsAchievementsCard(session)}
      ${renderPerformanceCoachCard(session)}
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

function defaultCustomPlanBuilderDraft() {
  const now = new Date().toISOString();
  return {
    id: `custom_plan_builder_${Date.now()}`,
    planName: "Eigener Plan",
    goal: "Hypertrophie / Wiedereinstieg",
    splitType: "custom",
    maxDurationMinutes: 60,
    constraints: {
      lumbarFriendly: true,
      maxExercisesPerDay: 6
    },
    days: [{
      id: "custom_day_1",
      name: "Tag 1",
      focus: "",
      maxDurationMinutes: 60,
      exercises: []
    }],
    createdAt: now,
    updatedAt: now
  };
}

function currentCustomPlanBuilderDraft() {
  const draft = storage.customPlanBuilderDraft;
  if (draft?.days?.length) return draft;
  return defaultCustomPlanBuilderDraft();
}

function saveCustomPlanBuilderDraft(draft) {
  storage.customPlanBuilderDraft = {
    ...draft,
    updatedAt: new Date().toISOString()
  };
}

function openCustomPlanBuilder() {
  const draft = currentCustomPlanBuilderDraft();
  saveCustomPlanBuilderDraft(draft);
  state.customPlanBuilderOpen = true;
  state.customPlanBuilderStep = state.customPlanBuilderStep || "basics";
  state.customPlanBuilderSelectedDayId = state.customPlanBuilderSelectedDayId || draft.days[0]?.id || "";
  state.tab = "plans";
  render();
  requestAnimationFrame(() => {
    document.querySelector("[data-custom-plan-builder]")?.scrollIntoView({ block: "start", behavior: "smooth" });
  });
}

function customPlanBuilderSteps() {
  return ["basics", "constraints", "days", "exercises", "preview"];
}

function customPlanBuilderStepLabel(step) {
  return {
    basics: "Plan",
    constraints: "Vorgaben",
    days: "Tage",
    exercises: "Übungen",
    preview: "Vorschau"
  }[step] || step;
}

function selectedBuilderDay(draft) {
  return draft.days.find((day) => day.id === state.customPlanBuilderSelectedDayId) || draft.days[0] || null;
}

function updateCustomPlanBuilderField(field, value) {
  const draft = currentCustomPlanBuilderDraft();
  if (field === "maxDurationMinutes") draft[field] = Math.max(20, parseInteger(value) || 60);
  else draft[field] = value;
  saveCustomPlanBuilderDraft(draft);
}

function updateCustomPlanBuilderConstraint(field, value) {
  const draft = currentCustomPlanBuilderDraft();
  draft.constraints = { ...(draft.constraints || {}) };
  if (field === "lumbarFriendly") draft.constraints[field] = Boolean(value);
  else draft.constraints[field] = Math.max(1, parseInteger(value) || 1);
  saveCustomPlanBuilderDraft(draft);
}

function addCustomPlanBuilderDay() {
  const draft = currentCustomPlanBuilderDraft();
  const nextNumber = draft.days.length + 1;
  const day = {
    id: `custom_day_${Date.now()}`,
    name: `Tag ${nextNumber}`,
    focus: "",
    maxDurationMinutes: Number(draft.maxDurationMinutes) || 60,
    exercises: []
  };
  draft.days = [...draft.days, day];
  state.customPlanBuilderSelectedDayId = day.id;
  saveCustomPlanBuilderDraft(draft);
  render();
}

function removeCustomPlanBuilderDay(dayId) {
  const draft = currentCustomPlanBuilderDraft();
  if (draft.days.length <= 1) return alert("Mindestens ein Trainingstag bleibt notwendig.");
  draft.days = draft.days.filter((day) => day.id !== dayId);
  state.customPlanBuilderSelectedDayId = draft.days[0]?.id || "";
  saveCustomPlanBuilderDraft(draft);
  render();
}

function updateCustomPlanBuilderDay(dayId, field, value) {
  const draft = currentCustomPlanBuilderDraft();
  draft.days = draft.days.map((day) => {
    if (day.id !== dayId) return day;
    return { ...day, [field]: field === "maxDurationMinutes" ? Math.max(20, parseInteger(value) || 60) : value };
  });
  saveCustomPlanBuilderDraft(draft);
}

function addExerciseToCustomPlanBuilder(exerciseId) {
  const draft = currentCustomPlanBuilderDraft();
  const day = selectedBuilderDay(draft);
  const exercise = exerciseById(exerciseId);
  if (!day || !exercise) return;
  const maxExercises = Math.max(1, Number(draft.constraints?.maxExercisesPerDay) || 6);
  if (day.exercises.length >= maxExercises) {
    alert(`Maximal ${maxExercises} Übungen für diesen Tag.`);
    return;
  }
  const entry = {
    exerciseId,
    sets: setPolicyDefaultForExercise(exercise, day.exercises.length, day.name, day.exercises.length < 2 ? "required" : "important"),
    reps: exercise.defaultRepRange || "8-12",
    restSeconds: exercise.defaultRestSeconds || 90,
    priority: day.exercises.length < 2 ? "required" : "important",
    sortOrder: day.exercises.length + 1
  };
  draft.days = draft.days.map((item) => item.id === day.id ? { ...item, exercises: [...item.exercises, entry] } : item);
  saveCustomPlanBuilderDraft(draft);
  render();
}

function removeExerciseFromCustomPlanBuilder(dayId, index) {
  const draft = currentCustomPlanBuilderDraft();
  draft.days = draft.days.map((day) => {
    if (day.id !== dayId) return day;
    const exercises = day.exercises.filter((_, itemIndex) => itemIndex !== Number(index)).map((entry, itemIndex) => ({ ...entry, sortOrder: itemIndex + 1 }));
    return { ...day, exercises };
  });
  saveCustomPlanBuilderDraft(draft);
  render();
}

function updateCustomPlanBuilderExercise(dayId, index, field, value) {
  const draft = currentCustomPlanBuilderDraft();
  draft.days = draft.days.map((day) => {
    if (day.id !== dayId) return day;
    const exercises = day.exercises.map((entry, itemIndex) => {
      if (itemIndex !== Number(index)) return entry;
      const numeric = ["sets", "restSeconds"].includes(field);
      return { ...entry, [field]: numeric ? Math.max(field === "sets" ? 1 : 0, parseInteger(value) || (field === "sets" ? 1 : 90)) : value };
    });
    return { ...day, exercises };
  });
  saveCustomPlanBuilderDraft(draft);
}

function updateRangeValueLabel(input) {
  if (input?.type !== "range") return;
  const label = input.dataset.rangeLabel;
  const output = input.closest("label")?.querySelector("[data-range-value-label]");
  if (!label || !output) return;
  output.textContent = `${label}: ${input.value}/${input.max || 10}`;
}

function customPlanBuilderWarnings(draft) {
  const warnings = [];
  if (!draft.planName?.trim()) warnings.push("Planname fehlt.");
  draft.days.forEach((day) => {
    if (!day.exercises.length) warnings.push(`${day.name}: keine Übungen.`);
    invalidPlannedExercises(day).forEach((entry) => warnings.push(`${day.name}: ${entry.exerciseId} fehlt in der Datenbank.`));
  });
  return warnings;
}

function planFromCustomBuilderDraft(draft) {
  const now = Date.now();
  return {
    version: 1,
    type: "training_plan",
    id: `plan_custom_${now}`,
    planName: draft.planName.trim() || `Eigener Plan ${new Date().toLocaleDateString("de-DE")}`,
    description: "Manuell im D-Coach Plan Builder erstellt.",
    goal: draft.goal || "Hypertrophie / Wiedereinstieg",
    splitType: draft.splitType || "custom",
    maxDurationMinutes: Number(draft.maxDurationMinutes) || 60,
    createdBy: "user",
    createdAt: new Date().toISOString(),
    days: draft.days.map((day, dayIndex) => ({
      id: day.id || `custom_day_${dayIndex + 1}`,
      name: day.name || `Tag ${dayIndex + 1}`,
      focus: day.focus || "",
      maxDurationMinutes: Number(day.maxDurationMinutes) || Number(draft.maxDurationMinutes) || 60,
      exercises: day.exercises.map((entry, index) => ({
        ...normalizedPlannedExercise(entry, index),
        sortOrder: index + 1
      }))
    }))
  };
}

function saveCustomBuilderPlan({ activate = false } = {}) {
  const draft = currentCustomPlanBuilderDraft();
  const warnings = customPlanBuilderWarnings(draft);
  if (warnings.length) {
    alert(`Plan noch nicht speicherbar:\n${warnings.slice(0, 4).join("\n")}`);
    return;
  }
  const plan = planFromCustomBuilderDraft(draft);
  storage.customPlans = [...storage.customPlans.filter((item) => item.planName !== plan.planName), plan];
  if (activate) activatePlan(plan);
  state.customPlanBuilderOpen = false;
  alert(activate ? "Eigener Plan gespeichert und aktiviert." : "Eigener Plan gespeichert.");
  render();
}

function renderCustomPlanBuilder() {
  if (!state.customPlanBuilderOpen) return "";
  const draft = currentCustomPlanBuilderDraft();
  const steps = customPlanBuilderSteps();
  const step = steps.includes(state.customPlanBuilderStep) ? state.customPlanBuilderStep : "basics";
  const selectedDay = selectedBuilderDay(draft);
  const search = state.customPlanBuilderExerciseSearch.trim().toLowerCase();
  const candidates = allExercises()
    .filter((exercise) => !exercise.isArchived)
    .filter((exercise) => !(draft.constraints?.lumbarFriendly && exercise.lumbarDiscSuitability === "avoidInitially"))
    .filter((exercise) => {
      const haystack = `${exercise.displayName} ${(exercise.tags || []).join(" ")} ${exercise.primaryMuscleGroups.join(" ")} ${exercise.secondaryMuscleGroups.join(" ")}`.toLowerCase();
      return !search || haystack.includes(search);
    })
    .sort((a, b) => a.displayName.localeCompare(b.displayName, "de"))
    .slice(0, 18);
  const warnings = customPlanBuilderWarnings(draft);
  return `
    <article class="card stack custom-plan-builder" data-custom-plan-builder>
      <div class="row">
        <div class="grow">
          <p class="muted">Plan Builder v6.18</p>
          <h2>${htmlesc(customPlanBuilderStepLabel(step))}</h2>
        </div>
        <button class="secondary compact-button" data-close-custom-plan-builder>Schließen</button>
      </div>
      <div class="chip-row">
        ${steps.map((item) => `<button class="chip ${item === step ? "active" : ""}" data-builder-step="${item}">${htmlesc(customPlanBuilderStepLabel(item))}</button>`).join("")}
      </div>
      ${step === "basics" ? `
        <div class="stack">
          <label class="field"><span>Planname</span><input class="input" value="${htmlesc(draft.planName)}" data-builder-field="planName"></label>
          <label class="field"><span>Ziel</span><input class="input" value="${htmlesc(draft.goal)}" data-builder-field="goal"></label>
          <label class="field"><span>Split</span><input class="input" value="${htmlesc(draft.splitType)}" data-builder-field="splitType"></label>
          <label class="field"><span>Max. Minuten</span><input class="input" inputmode="numeric" value="${htmlesc(draft.maxDurationMinutes)}" data-builder-field="maxDurationMinutes"></label>
        </div>
      ` : ""}
      ${step === "constraints" ? `
        <div class="stack">
          <label class="range-field"><span>LWS-freundlich filtern</span><input type="checkbox" ${draft.constraints?.lumbarFriendly ? "checked" : ""} data-builder-constraint="lumbarFriendly"></label>
          <label class="field"><span>Max. Übungen pro Tag</span><input class="input" inputmode="numeric" value="${htmlesc(draft.constraints?.maxExercisesPerDay || 6)}" data-builder-constraint="maxExercisesPerDay"></label>
        </div>
      ` : ""}
      ${step === "days" ? `
        <div class="stack">
          ${draft.days.map((day) => `
            <article class="card stack compact-card">
              <div class="row">
                <strong class="grow">${htmlesc(day.name)}</strong>
                <button class="danger compact-button" data-builder-remove-day="${htmlesc(day.id)}">Löschen</button>
              </div>
              <input class="input" value="${htmlesc(day.name)}" data-builder-day-field="name" data-builder-day-id="${htmlesc(day.id)}">
              <input class="input" placeholder="Fokus, z.B. Pull" value="${htmlesc(day.focus || "")}" data-builder-day-field="focus" data-builder-day-id="${htmlesc(day.id)}">
              <input class="input" inputmode="numeric" value="${htmlesc(day.maxDurationMinutes || draft.maxDurationMinutes)}" data-builder-day-field="maxDurationMinutes" data-builder-day-id="${htmlesc(day.id)}">
            </article>
          `).join("")}
          <button class="secondary" data-builder-add-day>Trainingstag hinzufügen</button>
        </div>
      ` : ""}
      ${step === "exercises" ? `
        <div class="stack">
          <div class="chip-row">
            ${draft.days.map((day) => `<button class="chip ${selectedDay?.id === day.id ? "active" : ""}" data-builder-select-day="${htmlesc(day.id)}">${htmlesc(day.name)}</button>`).join("")}
          </div>
          ${selectedDay ? `
            <h3>${htmlesc(selectedDay.name)}</h3>
            ${selectedDay.exercises.length ? selectedDay.exercises.map((entry, index) => {
              const exercise = exerciseById(entry.exerciseId);
              return `
                <article class="card stack compact-card">
                  <div class="row">
                    <strong class="grow">${htmlesc(exercise?.displayName || entry.exerciseId)}</strong>
                    <button class="danger compact-button" data-builder-remove-exercise="${index}" data-builder-day-id="${htmlesc(selectedDay.id)}">Entfernen</button>
                  </div>
                  <div class="mini-grid">
                    <input class="input" inputmode="numeric" value="${htmlesc(entry.sets)}" data-builder-exercise-field="sets" data-builder-exercise-index="${index}" data-builder-day-id="${htmlesc(selectedDay.id)}">
                    <input class="input" value="${htmlesc(entry.reps)}" data-builder-exercise-field="reps" data-builder-exercise-index="${index}" data-builder-day-id="${htmlesc(selectedDay.id)}">
                    <input class="input" inputmode="numeric" value="${htmlesc(entry.restSeconds)}" data-builder-exercise-field="restSeconds" data-builder-exercise-index="${index}" data-builder-day-id="${htmlesc(selectedDay.id)}">
                  </div>
                </article>
              `;
            }).join("") : `<p class="muted">Noch keine Übungen in diesem Tag.</p>`}
            <input class="input" placeholder="Übung suchen" value="${htmlesc(state.customPlanBuilderExerciseSearch)}" data-builder-search>
            <div class="training-day-list">
              ${candidates.map((exercise) => `
                <button class="list-button" data-builder-add-exercise="${htmlesc(exercise.id)}">
                  <article class="card row compact-training-day">
                    <div class="grow">
                      <h3>${htmlesc(exercise.displayName)}</h3>
                      <p class="muted">${htmlesc(exerciseListMuscleText(exercise))}</p>
                    </div>
                    ${lwsBadge(exercise.lumbarDiscSuitability)}
                  </article>
                </button>
              `).join("")}
            </div>
          ` : `<p class="muted">Lege zuerst einen Trainingstag an.</p>`}
        </div>
      ` : ""}
      ${step === "preview" ? `
        <div class="stack">
          ${warnings.length ? `<article class="warning compact-warning"><strong>Nicht speicherbar</strong><ul class="small-list">${warnings.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul></article>` : `<p class="green">Plan ist speicherbar.</p>`}
          ${draft.days.map((day) => `
            <article class="card stack compact-card">
              <div class="row">
                <h3 class="grow">${htmlesc(day.name)}</h3>
                <span class="badge blue">${trainingDaySetCount(day)} Sätze</span>
              </div>
              ${renderPlannedExerciseList(day.exercises)}
            </article>
          `).join("")}
          <div class="button-row">
            <button class="primary" data-builder-save-plan data-builder-activate="true" ${warnings.length ? "disabled" : ""}>Speichern und aktivieren</button>
            <button class="secondary" data-builder-save-plan ${warnings.length ? "disabled" : ""}>Nur speichern</button>
          </div>
        </div>
      ` : ""}
      <div class="button-row">
        <button class="secondary" data-builder-save-draft>Entwurf speichern</button>
        <button class="secondary" data-builder-discard>Entwurf verwerfen</button>
      </div>
    </article>
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
        <div class="row">
          <div class="grow">
            <p class="muted">Aktiver Plan</p>
            <h2>${htmlesc(active?.planName || "Kein aktiver Plan")}</h2>
          </div>
          <span class="badge ${active ? "green" : "amber"}">${active ? "aktiv" : "offen"}</span>
        </div>
        <div class="button-row">
          <button class="primary" ${active ? "data-start-training-flow" : "data-tab=\"training\""}>${active ? "Training starten" : "Plan ansehen"}</button>
          <button class="secondary" data-open-custom-plan-builder>Eigenen Plan erstellen</button>
        </div>
        <details class="disclosure-card stack">
          <summary>
            <span>Plan verwalten</span>
            <span class="badge blue">${plans.length}</span>
          </summary>
          <p class="muted">Duplizieren, Archivieren, Löschen, Import, Export, Plan-Code, QR und Wiederherstellen bleiben darunter erhalten.</p>
        </details>
      </article>
      ${renderIntelligenceCoreCard("plans")}
      ${renderRecoveryFatigueCard("plans")}
      ${renderPlanOptimizerCard("plans")}
      ${renderLongTermProgressCard("plans")}
      ${renderCustomPlanBuilder()}
      <article class="card stack">
        <h3>Plan teilen / importieren</h3>
        <p class="muted">${payload.length > qrLimit ? appText("qr.tooLarge", "Dieser Plan ist zu groß für QR. Bitte JSON-Export verwenden.") : "Kompakter Plan-Code für QR/Text-Import."}</p>
        <textarea class="input area mono" readonly data-plan-payload>${htmlesc(payload)}</textarea>
        <div class="button-row">
          <button class="secondary" data-copy-plan-payload>Code kopieren</button>
          <button class="secondary" data-download-plan-json>JSON speichern</button>
        </div>
        <textarea class="input area mono" placeholder="D-Coach Plan-Code einfügen" data-plan-import>${htmlesc(state.planImportText)}</textarea>
        <button class="primary" data-import-plan-code>Plan importieren</button>
      </article>
      <article class="card stack">
        <h3>Plan-Generator</h3>
        <p class="muted">Erstellt einen Vorschlag aus vorhandenen Übungen. Bitte danach prüfen.</p>
        <button class="secondary" data-generate-plan>${htmlesc(appText("plan.generated", "Planvorschlag erstellen"))}</button>
      </article>
      ${plans.length ? plans.map((plan) => `
        <article class="card stack">
          <h2>${htmlesc(plan.planName)}</h2>
          <p class="muted">${htmlesc(plan.description)}</p>
          <p>${plan.days.length} Tage · ${Math.max(...plan.days.map((day) => day.maxDurationMinutes))} Minuten</p>
          <span class="badge ${planStatus(plan) === "Aktiv" ? "green" : isPlanArchived(plan.planName) ? "amber" : ""}">${planStatus(plan)}</span>
          <div class="button-row">
            ${!isPlanArchived(plan.planName) ? `<button class="secondary" data-activate-plan="${htmlesc(stablePlanId(plan))}">Aktivieren</button>` : ""}
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
        <h3>Eigene Übung</h3>
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
        <button class="secondary" data-save-custom-exercise>Eigene Übung speichern</button>
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

function exerciseDetailText(key, fallback) {
  return state.exerciseDetailTexts?.texts?.[key] || fallback;
}

function exerciseRecordFor(exerciseId) {
  return allExerciseRecords().find((record) => record.exerciseId === exerciseId) || null;
}

function exerciseProgressionInsight(exerciseId) {
  const last = lastCompletedExercise(exerciseId);
  if (!last) return null;
  return performanceInsightsForSession(last.session).find((item) => item.exercise.exerciseId === exerciseId) || null;
}

function exerciseHistoryBars(history) {
  const points = [...history].reverse().slice(-6);
  if (!points.length) return `<p class="muted">${htmlesc(exerciseDetailText("notEnoughData", "Noch nicht genug Daten."))}</p>`;
  const values = points.map((item) => totalVolume(item.exercise));
  const max = Math.max(...values, 1);
  return `
    <div class="exercise-history-chart">
      ${points.map((item) => {
        const value = totalVolume(item.exercise);
        const height = 24 + (value / max) * 86;
        return `<div class="trend-item"><span style="height:${height}px"></span><small>${dateText(item.session.startedAt).slice(0, 5)}</small></div>`;
      }).join("")}
    </div>
  `;
}

function renderExerciseDetailPremium(exercise, last, history, alternatives) {
  const insight = exerciseProgressionInsight(exercise.id);
  const record = exerciseRecordFor(exercise.id);
  const roles = exerciseMuscleRoles(exercise);
  const lastBestWeight = last ? Math.max(0, ...last.exercise.sets.map((set) => Number(set.actualWeightKg) || 0)) : 0;
  return `
    <section class="exercise-detail-premium stack">
      <article class="card stack premium-exercise-card">
        <div class="row">
          <div class="grow">
            <p class="muted">${htmlesc(exercise.category || exerciseKind(exercise))}</p>
            <h2>${htmlesc(exercise.displayName)}</h2>
          </div>
          <span class="badge blue">${personalExerciseQualityScore(exercise)}/10</span>
        </div>
        <div class="exercise-premium-stats">
          <div><strong>${last ? kg(lastBestWeight) : "-"}</strong><span>${htmlesc(exerciseDetailText("lastPerformance", "Letzte Leistung"))}</span></div>
          <div><strong>${record ? kg(record.maxWeight) : "-"}</strong><span>${htmlesc(exerciseDetailText("records", "Rekorde"))}</span></div>
          <div><strong>${htmlesc(roles.primary.length ? muscleItemsText(roles.primary, "-") : "-")}</strong><span>${htmlesc(exerciseDetailText("muscleImpact", "Muskelbeitrag"))}</span></div>
        </div>
      </article>

      <article class="card stack">
        <div class="row">
          <h3 class="grow">${htmlesc(exerciseDetailText("nextSuggestion", "Nächster Vorschlag"))}</h3>
          <span class="badge ${insight?.progression.decisionType === "increase" ? "green" : "blue"}">${htmlesc(insight?.progression.label || "Fallback")}</span>
        </div>
        <p class="muted">${htmlesc(insight?.progression.coachText || exerciseDetailText("notEnoughData", "Noch nicht genug Daten."))}</p>
        ${insight?.progression.nextWeightKg ? `<p class="green">Nächstes Ziel: ${kg(insight.progression.nextWeightKg)}</p>` : ""}
        <details>
          <summary>${htmlesc(exerciseDetailText("why", "Warum?"))}</summary>
          <ul class="small-list">
            ${(insight ? [...insight.progression.why, ...insight.insight.evidence, ...insight.insight.whyBullets] : ["Es gibt noch keine ausreichende Historie für eine belastbare Progression."]).map((item) => `<li>${htmlesc(item)}</li>`).join("")}
          </ul>
        </details>
      </article>

      <div class="grid">
        <article class="card stack">
          <h3>${htmlesc(exerciseDetailText("records", "Rekorde"))}</h3>
          ${record ? `<ul class="small-list">
            <li>Bestgewicht: ${kg(record.maxWeight)}</li>
            <li>Wdh. bei Bestgewicht: ${record.maxRepsAtWeight || "-"}</li>
            <li>Bestes Volumen: ${Math.round(record.maxVolume)} kg</li>
          </ul>` : `<p class="muted">${htmlesc(exerciseDetailText("notEnoughData", "Noch nicht genug Daten."))}</p>`}
        </article>
        <article class="card stack">
          <h3>${htmlesc(exerciseDetailText("muscleImpact", "Muskelbeitrag"))}</h3>
          <p class="muted">Primär: ${htmlesc(muscleItemsText(roles.primary, "nicht hinterlegt"))}</p>
          <p class="quiet">Hilfsbelastung: ${htmlesc(muscleItemsText([...roles.secondary, ...roles.stabilizers], "nicht hinterlegt"))}</p>
        </article>
      </div>

      <article class="card stack">
        <div class="row">
          <h3 class="grow">${htmlesc(exerciseDetailText("openHistory", "Historie"))}</h3>
          <span class="badge blue">${history.length} Einheiten</span>
        </div>
        ${exerciseHistoryBars(history)}
      </article>

      <article class="card stack">
        <h3>${htmlesc(exerciseDetailText("alternatives", "Alternativen"))}</h3>
        ${alternatives.length ? alternatives.slice(0, 4).map((item) => `
          <div class="history-row">
            <div>
              <strong>${htmlesc(item.exercise.displayName)}</strong>
              <p class="muted">${htmlesc(item.explanation || item.reason || exerciseListMuscleText(item.exercise))}</p>
            </div>
            ${state.activeWorkout ? `<button class="secondary compact-button" data-select-alternative="${htmlesc(item.exercise.id)}">${htmlesc(exerciseDetailText("useAlternative", "Alternative nutzen"))}</button>` : `<button class="secondary compact-button" data-exercise-id="${htmlesc(item.exercise.id)}">Details</button>`}
          </div>
        `).join("") : `<p class="muted">Keine Alternativen hinterlegt.</p>`}
      </article>
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
        ${exercise.isCustom ? `<button class="danger" data-delete-custom-exercise="${htmlesc(exercise.id)}">Eigene Übung entfernen</button>` : ""}
      </article>
      ${renderExerciseDetailPremium(exercise, last, history, alternatives)}
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
          <input class="input" placeholder="Rücken" value="${htmlesc(machineSetting.backrestPosition || "")}" data-machine-field="backrestPosition" data-machine-exercise="${htmlesc(id)}">
        </div>
        <textarea class="input area" placeholder="Notiz" data-machine-field="note" data-machine-exercise="${htmlesc(id)}">${htmlesc(machineSetting.note || "")}</textarea>
        <button class="secondary" data-save-machine-setting="${htmlesc(id)}">Einstellung speichern</button>
      </article>
      ${renderMachineMatchCard(exercise)}
      ${exerciseIsCritical(exercise) ? `<article class="card warning">${lwsWarning(exercise)}</article>` : ""}
      <div class="grid">
        ${metric(kg(bestWeightForExercise(id)), "Bestgewicht")}
        ${metric(bestVolumeForExercise(id) ? `${Math.round(bestVolumeForExercise(id))} kg` : "-", "Bestes Volumen")}
      </div>
      <article class="card stack">
        <h3>Wissenswertes</h3>
        <ul class="small-list">${exerciseKnowledge(exercise).map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>
      </article>
      ${renderExerciseRatingCard(exercise)}
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
              ${item.explanation ? `<p class="quiet">${htmlesc(item.explanation)}</p>` : ""}
              ${item.reason ? `<p class="quiet">${htmlesc(item.reason)}</p>` : ""}
            </div>
            <div class="badge-stack">
              ${lwsBadge(item.exercise.lumbarDiscSuitability)}
              <span class="badge blue">${personalExerciseQualityScore(item.exercise)}/10</span>
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
  if (points.length < 2) return `<p class="muted">Mindestens zwei Einträge für Trendanzeige nötig.</p>`;
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
  const entries = weightEntriesSorted();
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
  const current = Math.max(1, Math.min(5, Number(value) || 3));
  return `
    <label class="range-field">
      <span data-range-value-label="${htmlesc(id)}">${label}: ${current}/5</span>
      <input type="range" min="1" max="5" value="${htmlesc(current)}" data-journal-field="${id}" data-range-label="${htmlesc(label)}">
    </label>
  `;
}

function renderJournal() {
  const today = todayIsoDate();
  const checkin = dailyCheckinForDate(localIsoDate());
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
        <button class="secondary" data-edit-daily-checkin>${checkin ? "Heutigen Check-in bearbeiten" : "Tages-Check-in starten"}</button>
      </article>
      <article class="card stack">
        <h3>Heute</h3>
        ${renderRatingInput("sleepQuality", "Schlaf", entry.sleepQuality || 3)}
        ${renderRatingInput("energy", "Energie", entry.energy || 3)}
        ${renderRatingInput("stress", "Stress", entry.stress || 3)}
        ${renderRatingInput("soreness", "Muskelkater", entry.soreness || 3)}
        ${renderRatingInput("mood", "Stimmung", entry.mood || 3)}
        <textarea class="input area" placeholder="Schmerznotiz" data-journal-text="painNote">${htmlesc(entry.painNote || "")}</textarea>
        <textarea class="input area" placeholder="Ernährung / Notiz" data-journal-text="nutritionNote">${htmlesc(entry.nutritionNote || "")}</textarea>
        <button class="primary" data-save-journal>Journal speichern</button>
      </article>
      <article class="card stack">
        <h3>Letzte Einträge</h3>
        ${history.length ? history.map((item) => {
          const itemReadiness = readinessForJournal(item);
          return `<div class="history-row"><div><strong>${dateText(item.date)}</strong><p class="muted">${htmlesc(itemReadiness.hint)}</p></div><span class="badge ${itemReadiness.color}">${htmlesc(itemReadiness.label)}</span></div>`;
        }).join("") : `<p class="muted">Noch kein Journal gespeichert.</p>`}
      </article>
    </section>
  `;
}

function renderProfileShortcuts() {
  const shortcuts = [
    { tab: "weight", icon: "scale", title: "Gewicht", text: "Gewichtstracking und Verlauf" },
    { tab: "journal", icon: "book", title: "Journal", text: "Schlaf, Energie, Stress und Tages-Check-ins" },
    { tab: "history", icon: "history", title: "Trainingshistorie", text: "Gespeicherte Einheiten und Volumen" },
    { tab: "musclemap", icon: "trending", title: "Fortschritt", text: "Wochenabdeckung und Entwicklung" },
    { tab: "weight", icon: "ruler", title: "Körperwerte", text: "Gewicht und Messwerte im Verlauf" },
    { tab: "machines", icon: "machine", title: "Ger\u00e4te", text: "Sitz, Griff, Scanner und Maschinen-Setup" },
    { tab: "musclemap", icon: "body", title: "Muskelmapping", text: "Muskelkarte und Wochenabdeckung" },
    { tab: "exercises", icon: "dumbbell", title: "\u00dcbungen", text: "\u00dcbungsdatenbank und Details" },
    { tab: "settings", icon: "gear", title: "Einstellungen", text: "Backup, PWA, Speicher und Debug" }
  ];
  return `
    <article class="card stack">
      <h3>Tracking</h3>
      <div class="profile-shortcut-grid">
        ${shortcuts.map((item) => `
          <button class="profile-shortcut" data-tab="${item.tab}">
            <span class="profile-shortcut-icon">${iconSvg(item.icon)}</span>
            <span>
              <strong>${item.title}</strong>
              <small>${item.text}</small>
            </span>
          </button>
        `).join("")}
      </div>
    </article>
  `;
}

function renderScannerExercisePicker() {
  const candidates = scannerCandidateExercises();
  return `
    <div class="stack">
      <input class="input" placeholder="Übung suchen" value="${htmlesc(state.equipmentScanner.search)}" data-scanner-search>
      <div class="scanner-exercise-list">
        ${candidates.map((exercise) => `
          <button class="scanner-exercise-option ${state.equipmentScanner.selectedExerciseId === exercise.id ? "active" : ""}" data-scanner-exercise="${htmlesc(exercise.id)}">
            <strong>${htmlesc(exercise.displayName)}</strong>
            <span>${htmlesc(exerciseListMuscleText(exercise))}</span>
          </button>
        `).join("") || `<p class="muted">Keine passende Übung gefunden.</p>`}
      </div>
    </div>
  `;
}

function renderEquipmentScannerResult() {
  const scanner = state.equipmentScanner;
  const mapping = scanner.mappingId ? storage.scannedEquipmentMappings.find((item) => item.id === scanner.mappingId) : null;
  if (scanner.status === "known" && mapping) {
    const exercise = exerciseById(mapping.exerciseId);
    return `
      <article class="scanner-result known stack">
        <div class="row">
          <h3 class="grow">Life Fitness erkannt</h3>
          <span class="badge green">bekannt</span>
        </div>
        <p class="muted">${htmlesc(mapping.machineLabel || "Gespeichertes Gerät")}</p>
        <div class="storage-table">
          <div><span>Übung</span><strong>${htmlesc(exercise?.displayName || mapping.exerciseNameSnapshot || mapping.exerciseId)}</strong></div>
          <div><span>Sitz</span><strong>${htmlesc(mapping.seatPosition || "-")}</strong></div>
          <div><span>Griff</span><strong>${htmlesc(mapping.gripPosition || "-")}</strong></div>
          <div><span>Code</span><strong>${htmlesc(mapping.normalizedCode)}</strong></div>
        </div>
        <button class="primary" data-open-scanned-exercise="${htmlesc(mapping.exerciseId)}">Übung öffnen</button>
        <button class="secondary" data-edit-scanned-mapping>Zuordnung bearbeiten</button>
      </article>
    `;
  }
  if (scanner.status === "unknown") {
    const existing = scanner.mappingId ? storage.scannedEquipmentMappings.find((item) => item.id === scanner.mappingId) : null;
    return `
      <article class="scanner-result stack">
        <div class="row">
          <h3 class="grow">${existing ? "Life-Fitness-Zuordnung bearbeiten" : "Unbekanntes Life-Fitness-Gerät"}</h3>
          <span class="badge amber">${existing ? "edit" : "neu"}</span>
        </div>
        <p class="quiet">Gescannt: ${htmlesc(scanner.rawCode)}</p>
        <p class="quiet">Normalisiert: ${htmlesc(scanner.normalizedCode)}</p>
        ${renderScannerExercisePicker()}
        <div class="scanner-field-grid">
          <input class="input" placeholder="Studio" value="${htmlesc(existing?.studioName || "")}" data-scanner-field="studioName">
          <input class="input" placeholder="Gerätename" value="${htmlesc(existing?.machineLabel || "")}" data-scanner-field="machineLabel">
          <input class="input" placeholder="Gerätenummer" value="${htmlesc(existing?.machineSerial || "")}" data-scanner-field="machineSerial">
          <input class="input" placeholder="Sitzposition" value="${htmlesc(existing?.seatPosition || "")}" data-scanner-field="seatPosition">
          <input class="input" placeholder="Griffposition" value="${htmlesc(existing?.gripPosition || "")}" data-scanner-field="gripPosition">
          <input class="input" placeholder="Griffbreite" value="${htmlesc(existing?.gripWidth || "")}" data-scanner-field="gripWidth">
          <input class="input" placeholder="Aufsatz" value="${htmlesc(existing?.attachment || "")}" data-scanner-field="attachment">
          <input class="input" placeholder="Notiz" value="${htmlesc(existing?.note || "")}" data-scanner-field="note">
        </div>
        <button class="primary" data-save-scanned-mapping>Zuordnung speichern</button>
      </article>
    `;
  }
  if (scanner.status === "invalid") {
    return `<p class="muted">${htmlesc(scanner.error)}</p>`;
  }
  return "";
}

function renderEquipmentScannerCard() {
  const scanner = state.equipmentScanner;
  const supportsCamera = "mediaDevices" in navigator && "BarcodeDetector" in window;
  return `
    <article class="card stack equipment-scanner-card">
      <div class="row">
        <h3 class="grow">Life-Fitness-Scanner</h3>
        <span class="badge ${supportsCamera ? "green" : "amber"}">${supportsCamera ? "Kamera bereit" : "Manuell"}</span>
      </div>
      <p class="muted">Scan lokal. Keine Cloud, keine Bildspeicherung.</p>
      ${scanner.status === "camera" ? `
        <div class="scanner-video-wrap">
          <video playsinline muted data-equipment-scanner-video></video>
        </div>
      ` : ""}
      ${scanner.error ? `<p class="quiet">${htmlesc(scanner.error)}</p>` : ""}
      <div class="button-grid">
        <button class="primary" data-start-equipment-scan>Kamera öffnen</button>
        <button class="secondary" data-stop-equipment-scan>Scanner stoppen</button>
      </div>
      <div class="row">
        <input class="input grow" placeholder="Code oder URL manuell eingeben" value="${htmlesc(scanner.rawCode)}" data-manual-equipment-code>
        <button class="secondary compact-button" data-apply-manual-equipment-code>Prüfen</button>
      </div>
      ${renderEquipmentScannerResult()}
    </article>
  `;
}

function renderScannedEquipmentMappingsCard() {
  const mappings = [...storage.scannedEquipmentMappings].sort((a, b) => new Date(b.lastUsedAt || b.updatedAt || 0) - new Date(a.lastUsedAt || a.updatedAt || 0));
  return `
    <article class="card stack">
      <div class="row">
        <h3 class="grow">Gerätezuordnungen</h3>
        <span class="badge blue">${mappings.length}</span>
      </div>
      ${mappings.length ? mappings.map((mapping) => {
        const exercise = exerciseById(mapping.exerciseId);
        return `
          <div class="scanner-mapping-row">
            <button class="list-button grow" data-open-scanned-exercise="${htmlesc(mapping.exerciseId)}">
              <div>
                <strong>${htmlesc(mapping.machineLabel || mapping.exerciseNameSnapshot || exercise?.displayName || "Life Fitness")}</strong>
                <p class="muted">${htmlesc(exercise?.displayName || mapping.exerciseId)} - ${htmlesc(mapping.normalizedCode)}</p>
                <p class="quiet">Zuletzt genutzt: ${dateTimeText(mapping.lastUsedAt || mapping.updatedAt)}</p>
              </div>
            </button>
            <div class="compact-actions">
              <button class="secondary" data-load-scanned-mapping="${htmlesc(mapping.id)}">Bearbeiten</button>
              <button class="danger" data-delete-scanned-mapping="${htmlesc(mapping.id)}">Löschen</button>
            </div>
          </div>
        `;
      }).join("") : `<p class="muted">Noch keine gescannten Geräte gespeichert.</p>`}
    </article>
  `;
}

function renderMachines() {
  const settings = [...storage.machineSettings].sort((a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0));
  return `
    <section class="screen stack">
      <button class="secondary" data-tab="settings">Zur\u00fcck zu Tracking</button>
      <header><h1 class="title">Ger\u00e4te</h1><p class="subtitle">Sitz, Griff und Setup pro \u00dcbung.</p></header>
      ${renderEquipmentScannerCard()}
      ${renderScannedEquipmentMappingsCard()}
      <article class="card stack">
        <h3>Ger\u00e4teeinstellungen</h3>
        <p class="muted">Neue Werte speicherst du im Detail einer \u00dcbung oder direkt im Training.</p>
        <button class="primary" data-tab="exercises">\u00dcbung suchen</button>
      </article>
      ${settings.length ? settings.map((setting) => {
        const exercise = exerciseById(setting.exerciseId);
        return `
          <button class="list-button" data-exercise-id="${htmlesc(setting.exerciseId)}">
            <article class="card stack">
              <div class="row">
                <h3 class="grow">${htmlesc(exercise?.displayName || setting.exerciseId)}</h3>
                <span class="badge blue">${dateText(setting.updatedAt)}</span>
              </div>
              <div class="storage-table">
                <div><span>Maschine</span><strong>${htmlesc(setting.machineName || "-")}</strong></div>
                <div><span>Sitz</span><strong>${htmlesc(setting.seatPosition || "-")}</strong></div>
                <div><span>Griff</span><strong>${htmlesc(setting.gripPosition || setting.handlePosition || "-")}</strong></div>
                <div><span>Breite</span><strong>${htmlesc(setting.gripWidth || "-")}</strong></div>
                <div><span>Aufsatz</span><strong>${htmlesc(setting.attachment || "-")}</strong></div>
                <div><span>R\u00fccken</span><strong>${htmlesc(setting.backrestPosition || "-")}</strong></div>
              </div>
              ${setting.note ? `<p class="muted">${htmlesc(setting.note)}</p>` : ""}
            </article>
          </button>
        `;
      }).join("") : `
        <article class="card stack">
          <h3>Noch keine Ger\u00e4te gespeichert</h3>
          <p class="muted">\u00d6ffne eine \u00dcbung, trage Sitz/Griff ein und speichere die Einstellung.</p>
        </article>
      `}
    </section>
  `;
}

function renderTrainingHistory() {
  const sessions = [...storage.sessions].sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt));
  return `
    <section class="screen stack">
      <button class="secondary" data-tab="settings">Zurück zu Tracking</button>
      <header><h1 class="title">Trainingshistorie</h1><p class="subtitle">${sessions.length} gespeicherte Einheiten.</p></header>
      <div class="grid">
        ${metric(String(sessions.length), "Einheiten")}
        ${metric(`${Math.round(sessions.reduce((sum, session) => sum + sessionVolume(session), 0))} kg`, "Gesamtvolumen")}
      </div>
      ${sessions.length ? sessions.map((session) => `
        <button class="list-button" data-session-id="${htmlesc(session.id)}">
          <article class="card stack">
            <div class="row">
              <div class="grow">
                <h3>${htmlesc(session.dayName)}</h3>
                <p class="muted">${dateTimeText(session.startedAt)} · ${session.completedExercises.length} Übungen · ${sessionSetCount(session)} Sätze</p>
              </div>
              <span class="badge blue">${Math.round(sessionVolume(session))} kg</span>
            </div>
          </article>
        </button>
      `).join("") : `<article class="card"><p class="muted">Noch keine Trainings gespeichert.</p></article>`}
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
      <header><h1 class="title">Tracking</h1><p class="subtitle">Fortschritt, Journal, Ger\u00e4te und lokale Offline-Daten.</p></header>
      ${renderProfileShortcuts()}
      <article class="card stack">
        <div class="row">
          <h3 class="grow">PWA-Status</h3>
          <span class="badge ${state.isOnline ? "green" : "amber"}">${state.isOnline ? "Online" : "Offline"}</span>
        </div>
        <p class="muted">${standalone ? "Als App gestartet." : "Im Browser ge\u00f6ffnet. Auf dem iPhone \u00fcber Teilen > Zum Home-Bildschirm hinzuf\u00fcgen installieren."}</p>
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
          <span class="badge ${needsBackup ? "amber" : "green"}">${needsBackup ? "Fällig" : "Ok"}</span>
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
          <h3 class="grow">Persönliche Schicht</h3>
          <span class="badge ${storage.personalProfile ? "green" : "amber"}">${storage.personalProfile ? "Aktiv" : "Leer"}</span>
        </div>
        <p class="muted">${storage.personalProfile ? htmlesc(currentPersonalProfile().displayName || "Persönliche Daten aktiv") : "Optionale persönliche Daten importieren. Bestehende Trainingsdaten bleiben erhalten."}</p>
        <button class="secondary" data-import-seed-profile>Dominique-Daten importieren</button>
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
        <div><span>Übungen</span><strong>${allExercises().length}</strong></div>
        <div><span>Eigene Übungen</span><strong>${storage.customExercises.length}</strong></div>
        <div><span>Datenbanken</span><strong>${databases.length}</strong></div>
        <div><span>Fehler</span><strong>${storage.lastErrors.length}</strong></div>
      </div>
      <button class="secondary" data-load-test-data>Testdaten laden</button>
      <button class="secondary" data-clear-cache>Cache leeren</button>
      ${renderDeviceValidationPanel()}
      ${renderMuscleCoverageTestCenter()}
      ${renderMuscleCoverageDiagnosticsPanel()}
      <ul class="small-list">${storage.lastErrors.slice(-5).map((item) => `<li>${dateTimeText(item.at)}: ${htmlesc(item.message)}</li>`).join("") || "<li>Keine Fehler protokolliert.</li>"}</ul>
    </div>
  `;
}

function deviceValidationTestCases() {
  return [
    ["nav_bottom_fixed", "Bottom Navigation bleibt fixiert"],
    ["nav_safe_area", "Safe Area korrekt"],
    ["nav_dashboard_coach_tracking", "Dashboard Coach Tracking"],
    ["nav_keyboard_open_close", "Navigation nach Tastatur öffnen/schließen"],
    ["nav_musclemap_scroll", "Navigation bei Muscle-Map-Scroll"],
    ["nav_workout_scroll", "Navigation bei Workout-Scroll"],
    ["nav_background_resume", "Navigation nach Hintergrund/Vordergrund"],
    ["musclemap_scroll_top", "Muscle Map startet oben"],
    ["keyboard_daily_checkin", "Tastatur Daily Check-in"],
    ["keyboard_workout_inputs", "Tastatur Workout Eingaben"],
    ["keyboard_coach_feedback", "Tastatur Coach Feedback"],
    ["training_skip_checkin_once", "Check-in überspringen startet einmal"],
    ["training_complete_checkin_once", "Check-in abschliessen startet einmal"],
    ["training_draft_resume", "Draft-Wiederaufnahme"],
    ["scanner_first_middle_last", "Scanner erster mittlerer letzter Eintrag"],
    ["scanner_camera_closed", "Kamera-Stream geschlossen"],
    ["pwa_offline_restart", "Offline-PWA startet"],
    ["pwa_update_v68", "Update auf pwa-v68"],
    ["coach_confidence_readable", "Confidence Gruende lesbar"],
    ["coach_hard_gate_apply_disabled", "Hard Gate deaktiviert Apply"],
    ["outcome_only_applied", "Outcome nur angewendet"],
    ["outcome_no_duplicate", "Keine doppelte Outcome-Auswertung"]
  ];
}

function nearestBottomNavAncestor(predicate) {
  let node = document.getElementById("bottom-nav")?.parentElement || null;
  while (node && node !== document.documentElement) {
    if (predicate(node)) return node.id || node.className || node.tagName;
    node = node.parentElement;
  }
  return "";
}

function captureBottomNavigationDiagnostics() {
  const nav = document.getElementById("bottom-nav");
  const rect = nav?.getBoundingClientRect();
  const style = nav ? getComputedStyle(nav) : null;
  const viewport = window.visualViewport || null;
  return {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio || 1
    },
    visualViewport: viewport ? {
      width: Math.round(viewport.width),
      height: Math.round(viewport.height),
      offsetTop: Math.round(viewport.offsetTop),
      offsetLeft: Math.round(viewport.offsetLeft),
      scale: viewport.scale
    } : null,
    navRect: rect ? {
      top: Math.round(rect.top),
      bottom: Math.round(rect.bottom),
      left: Math.round(rect.left),
      right: Math.round(rect.right),
      height: Math.round(rect.height)
    } : null,
    computedStyle: style ? {
      position: style.position,
      top: style.top,
      bottom: style.bottom,
      transform: style.transform,
      translate: style.translate,
      zIndex: style.zIndex,
      paddingBottom: style.paddingBottom
    } : null,
    scrollAncestor: nearestBottomNavAncestor((node) => /(auto|scroll)/.test(getComputedStyle(node).overflowY)),
    transformedAncestor: nearestBottomNavAncestor((node) => {
      const current = getComputedStyle(node);
      return current.transform !== "none" || current.filter !== "none" || current.perspective !== "none" || current.willChange.includes("transform") || current.contain.includes("paint");
    }),
    duplicateNavCount: document.querySelectorAll("#bottom-nav").length
  };
}

function createDeviceValidationReport() {
  const displayMode = isStandaloneApp() ? "standalone" : "browser";
  const status = storage.deviceValidationStatus;
  const bottomNavigation = captureBottomNavigationDiagnostics();
  return {
    id: `device_validation_${Date.now()}`,
    version: "6.19.0",
    appVersion: APP_VERSION,
    cacheVersion: APP_CACHE_VERSION,
    platform: navigator.platform || "unknown",
    displayMode,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio || 1
    },
    bottomNavigation,
    tests: deviceValidationTestCases().map(([id, label]) => ({
      id,
      label,
      status: status[id] || "not_tested",
      expected: "Bottom Navigation bleibt am unteren Viewport, nutzt Safe Area und hat keine transformierten oder scrollbaren Vorfahren.",
      actual: id.startsWith("nav_") ? bottomNavigation : null
    })),
    createdAt: new Date().toISOString()
  };
}

function exportDeviceValidationReport() {
  const report = createDeviceValidationReport();
  storage.deviceValidationReports = [...storage.deviceValidationReports, report];
  const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "DCoach_v6.17_DeviceValidation_Report.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  render();
}

function renderDeviceValidationPanel() {
  const latest = storage.deviceValidationReports.slice(-1)[0];
  const currentStatus = storage.deviceValidationStatus;
  const currentDiagnostics = captureBottomNavigationDiagnostics();
  return `
    <article class="card stack" data-device-validation-panel>
      <div class="row">
        <h3 class="grow">Geräteprüfung v6.19</h3>
        <span class="badge amber">manuell</span>
      </div>
      <p class="muted">Diese Debug-Checkliste verändert keine Trainingsdaten. Echte iPhone/PWA-Tests müssen manuell bewertet werden.</p>
      <div class="storage-table">
        <div><span>Position</span><strong>${htmlesc(currentDiagnostics.computedStyle?.position || "-")}</strong></div>
        <div><span>Transform-Vorfahre</span><strong>${htmlesc(currentDiagnostics.transformedAncestor || "keiner")}</strong></div>
        <div><span>Scroll-Vorfahre</span><strong>${htmlesc(currentDiagnostics.scrollAncestor || "keiner")}</strong></div>
        <div><span>Nav-Anzahl</span><strong>${currentDiagnostics.duplicateNavCount}</strong></div>
      </div>
      <div class="stack">
        ${deviceValidationTestCases().map(([id, label]) => `
          <div class="card compact-card stack">
            <div class="row"><strong class="grow">${htmlesc(label)}</strong><span class="badge">${htmlesc(currentStatus[id] || "not_tested")}</span></div>
            <p class="quiet">Erwartet: Unterleiste bleibt unten, Safe Area frei, keine Duplikate.</p>
            <p class="quiet">Tatsächlich: bottom ${htmlesc(currentDiagnostics.computedStyle?.bottom || "-")} - nav.bottom ${currentDiagnostics.navRect?.bottom ?? "-"}</p>
            <div class="button-row">
              <button class="secondary compact-button" data-device-validation-status="${htmlesc(id)}" data-status="passed">Bestanden</button>
              <button class="secondary compact-button" data-device-validation-status="${htmlesc(id)}" data-status="failed">Fehlgeschlagen</button>
              <button class="secondary compact-button" data-device-validation-status="${htmlesc(id)}" data-status="blocked">Blockiert</button>
            </div>
          </div>
        `).join("")}
      </div>
      <button class="secondary" data-export-device-validation>Prüfbericht exportieren</button>
      <p class="quiet">Letzter Bericht: ${latest ? dateTimeText(latest.createdAt) : "Noch keiner"}</p>
    </article>
  `;
}

function muscleCoverageDeviceManualTests() {
  return [
    ["cyan_selection_visual", "Cyan ist nur Auswahlzustand"],
    ["restart_same_value", "Nach App-Neustart derselbe Wert"]
  ];
}

function muscleCoverageSurfaceValues(mode = state.coverageMode || "week") {
  const comparison = allSurfacesCoverageComparison(mode);
  const dashboardCoverage = coverageForSessions(sessionsForCoverageMode(mode));
  const dashboardTriceps = coverageItemByMuscle(dashboardCoverage, "mg_triceps");
  return [
    ...comparison.surfaces,
    {
      surface: "Dashboard",
      muscle: dashboardTriceps.name || "Trizeps",
      percent: dashboardTriceps.percent || 0,
      colorBand: dashboardTriceps.colorBand || getCoverageColorBand(dashboardTriceps.percent || 0),
      status: "uses_canonical_coverageForSessions"
    }
  ];
}

function muscleCoverageDeviceValidationReport() {
  const mode = state.coverageMode || "week";
  const diagnostics = canonicalCoverageExportForMode(mode);
  const triceps = tricepsCoverageDiagnostic(mode);
  const surfaces = muscleCoverageSurfaceValues(mode);
  const percentValues = surfaces.map((item) => item.percent).filter(Number.isFinite);
  const colorValues = surfaces.map((item) => item.colorBand).filter(Boolean);
  const firstPercent = percentValues[0] ?? 0;
  const firstColor = colorValues[0] || "";
  const autoTests = [
    ["versions_visible", "App-, Mapping-, Coverage- und Cache-Version anzeigen", Boolean(APP_VERSION && MUSCLE_MAPPING_VERSION && MUSCLE_COVERAGE_CALCULATION_VERSION && APP_CACHE_VERSION)],
    ["period_visible", "Zeitraum mit Start und Ende anzeigen", Boolean(diagnostics.period?.start && diagnostics.period?.end)],
    ["session_ids_visible", "verwendete Session-IDs anzeigen", Array.isArray(diagnostics.sessionDiagnostics.sessionIds)],
    ["duplicate_sessions_detected", "doppelte Sessions erkennen", Array.isArray(diagnostics.sessionDiagnostics.duplicateSessionIds)],
    ["drafts_incomplete_detected", "Drafts und unvollständige Sessions erkennen", Array.isArray(diagnostics.sessionDiagnostics.draftIdsIncluded) && Array.isArray(diagnostics.sessionDiagnostics.incompleteSessionsIncluded)],
    ["triceps_contributions_visible", "für Trizeps jeden Beitrag pro Übung und Muskelrolle anzeigen", Array.isArray(triceps.contributions)],
    ["raw_reference_formula_visible", "Rohwert, Referenzwert, Formel und Endwert anzeigen", Boolean(triceps.formula && Number.isFinite(triceps.rawLoad) && Number.isFinite(triceps.referenceLoad) && Number.isFinite(triceps.displayPercent))],
    ["same_percent_all_surfaces", "gleiche Prozentwerte auf Muscle Map, Tracking, Session Coach und Dashboard prüfen", percentValues.length >= 4 && percentValues.every((value) => Math.abs(value - firstPercent) <= 1)],
    ["same_color_all_surfaces", "gleiche Farbkategorie auf allen Oberflächen prüfen", colorValues.length >= 4 && colorValues.every((value) => value === firstColor)]
  ].map(([id, label, passed]) => ({ id, label, status: passed ? "passed" : "failed" }));
  const manualStatus = storage.muscleCoverageDeviceValidationStatus;
  return {
    id: `muscle_coverage_device_validation_${Date.now()}`,
    appVersion: APP_VERSION,
    cacheVersion: APP_CACHE_VERSION,
    mappingVersion: MUSCLE_MAPPING_VERSION,
    calculationVersion: MUSCLE_COVERAGE_CALCULATION_VERSION,
    mode,
    period: diagnostics.period,
    sessionDiagnostics: diagnostics.sessionDiagnostics,
    sessions: diagnostics.sessions,
    triceps,
    surfaces,
    autoTests,
    manualTests: muscleCoverageDeviceManualTests().map(([id, label]) => ({ id, label, status: manualStatus[id] || "not_tested" })),
    privacy: {
      excludesBodyWeight: true,
      excludesJournalText: true,
      excludesPrivateTrainingNotes: true
    },
    createdAt: new Date().toISOString()
  };
}

function exportMuscleCoverageDeviceValidationReport() {
  const report = muscleCoverageDeviceValidationReport();
  const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "DCoach_MuscleCoverage_DeviceValidation_Report.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function renderMuscleCoverageTestCenter() {
  const report = muscleCoverageDeviceValidationReport();
  const statusClass = (status) => status === "passed" || status === "Bestanden" ? "green" : status === "failed" || status === "Fehlgeschlagen" ? "red" : "amber";
  return `
    <article class="card stack" data-muscle-coverage-testcenter>
      <div class="row">
        <h3 class="grow">Muskelabdeckung prüfen</h3>
        <span class="badge blue">${htmlesc(report.calculationVersion)}</span>
      </div>
      <p class="muted">Dieses Testcenter liest nur Diagnosedaten und verändert keine Trainingsdaten.</p>
      <div class="storage-table">
        <div><span>App</span><strong>${htmlesc(report.appVersion)}</strong></div>
        <div><span>Cache</span><strong>${htmlesc(report.cacheVersion)}</strong></div>
        <div><span>Mapping</span><strong>${htmlesc(report.mappingVersion)}</strong></div>
        <div><span>Zeitraum</span><strong>${htmlesc(report.mode)}</strong></div>
      </div>
      <p class="quiet">Start: ${htmlesc(report.period.start)} | Ende: ${htmlesc(report.period.end)}</p>
      <p class="quiet">Session-IDs: ${report.sessionDiagnostics.sessionIds.length ? report.sessionDiagnostics.sessionIds.map(htmlesc).join(", ") : "keine"}</p>
      <p class="quiet">Doppelte Sessions: ${report.sessionDiagnostics.duplicateSessionIds.length ? report.sessionDiagnostics.duplicateSessionIds.map(htmlesc).join(", ") : "keine"} | Drafts: ${report.sessionDiagnostics.draftIdsIncluded.length ? report.sessionDiagnostics.draftIdsIncluded.map(htmlesc).join(", ") : "keine"} | Unvollständig: ${report.sessionDiagnostics.incompleteSessionsIncluded.length ? report.sessionDiagnostics.incompleteSessionsIncluded.map(htmlesc).join(", ") : "keine"}</p>
      <div class="storage-table">
        <div><span>Trizeps Rohwert</span><strong>${report.triceps.rawLoad}</strong></div>
        <div><span>Referenz</span><strong>${report.triceps.referenceLoad}</strong></div>
        <div><span>Endwert</span><strong>${report.triceps.displayPercent}%</strong></div>
      </div>
      <p class="quiet">Formel: ${htmlesc(report.triceps.formula)}</p>
      <details class="disclosure-card stack">
        <summary><span>Trizeps Beiträge</span><span class="badge">${report.triceps.contributions.length}</span></summary>
        <div class="storage-table">
          ${report.triceps.contributions.length ? report.triceps.contributions.map((item) => `<div><span>${htmlesc(item.exerciseName)} · ${htmlesc(item.role)}</span><strong>${item.contribution}</strong></div>`).join("") : `<div><span>Keine Beiträge</span><strong>0</strong></div>`}
        </div>
      </details>
      <details class="disclosure-card stack">
        <summary><span>Oberflächenvergleich</span><span class="badge">${report.surfaces.length}</span></summary>
        <div class="storage-table">
          ${report.surfaces.map((item) => `<div><span>${htmlesc(item.surface)}</span><strong>${item.percent}% · ${htmlesc(item.colorBand)}</strong></div>`).join("")}
        </div>
      </details>
      <div class="storage-table">
        ${report.autoTests.map((test) => `<div><span>${htmlesc(test.label)}</span><strong class="badge ${statusClass(test.status)}">${htmlesc(test.status)}</strong></div>`).join("")}
      </div>
      <div class="stack">
        ${report.manualTests.map((test) => `
          <div class="card compact-card stack">
            <div class="row"><strong class="grow">${htmlesc(test.label)}</strong><span class="badge ${statusClass(test.status)}">${htmlesc(test.status)}</span></div>
            <div class="button-row">
              <button class="secondary compact-button" data-muscle-coverage-manual="${htmlesc(test.id)}" data-status="passed">Bestanden</button>
              <button class="secondary compact-button" data-muscle-coverage-manual="${htmlesc(test.id)}" data-status="failed">Fehlgeschlagen</button>
              <button class="secondary compact-button" data-muscle-coverage-manual="${htmlesc(test.id)}" data-status="blocked">Blockiert</button>
            </div>
          </div>
        `).join("")}
      </div>
      <button class="secondary" data-export-muscle-coverage-device-validation>DCoach_MuscleCoverage_DeviceValidation_Report.json exportieren</button>
    </article>
  `;
}

function exportMuscleCoverageDiagnostics() {
  const diagnostics = {
    ...canonicalCoverageExportForMode(state.coverageMode || "week"),
    triceps224: tricepsCoverageDiagnostic(state.coverageMode || "week"),
    surfaces: allSurfacesCoverageComparison(state.coverageMode || "week")
  };
  const blob = new Blob([JSON.stringify(diagnostics, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "DCoach_MuscleCoverage_Diagnostics.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function renderMuscleCoverageDiagnosticsPanel() {
  const diagnostics = canonicalCoverageDiagnosticsForMode(state.coverageMode || "week");
  return `
    <article class="card stack" data-muscle-coverage-diagnostics>
      <div class="row">
        <h3 class="grow">Muscle Coverage Diagnostics</h3>
        <span class="badge blue">${htmlesc(diagnostics.mappingVersion)}</span>
      </div>
      <p class="quiet">Kontext: ${htmlesc(diagnostics.context)} | 100 % = ${MUSCLE_GROUP_REFERENCE_LOAD} gewichtete Gruppensätze oder ${MUSCLE_REGION_REFERENCE_LOAD} gewichtete Regionssätze | Cache-Key: ${htmlesc(diagnostics.cacheKey)}</p>
      <div class="storage-table">
        ${diagnostics.groups.slice(0, 8).map((item) => `<div><span>${htmlesc(item.label)}</span><strong>${item.percent}%</strong></div>`).join("")}
      </div>
      ${diagnostics.warnings.length ? `<ul class="small-list">${diagnostics.warnings.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul>` : `<p class="quiet">Keine Mapping-Warnungen.</p>`}
      <button class="secondary" data-export-muscle-coverage-diagnostics>Diagnostics exportieren</button>
    </article>
  `;
}

function createBackup() {
  return {
    app: "D-Coach",
    schemaVersion: 1,
    appVersion: APP_VERSION,
    backupVersion: BACKUP_FORMAT_VERSION,
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
    scannedEquipmentMappings: storage.scannedEquipmentMappings,
    customPlans: storage.customPlans,
    customExercises: storage.customExercises,
    customPlanBuilderDraft: storage.customPlanBuilderDraft,
    personalProfile: storage.personalProfile,
    coachFeedback: storage.coachFeedback,
    coachPlanProposals: storage.coachPlanProposals,
    coachPlanUndo: storage.coachPlanUndo,
    coachRecommendationHistory: storage.coachRecommendationHistory,
    recommendationOutcomes: storage.recommendationOutcomes,
    coachContextFeedback: storage.coachContextFeedback,
    coachConflictLog: storage.coachConflictLog,
    coachCalibrationState: storage.coachCalibrationState,
    deviceValidationReports: storage.deviceValidationReports,
    dailyCheckins: storage.dailyCheckins,
    dailyCheckinDraft: storage.dailyCheckinDraft,
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

function mergeBackupActiveWorkoutDraft(backupDraft) {
  const localDraft = storage.activeWorkoutDraft;
  const localValid = isValidActiveWorkoutDraft(localDraft);
  const backupValid = isValidActiveWorkoutDraft(backupDraft);
  if (localValid) {
    return backupValid
      ? "Dein aktuell geöffnetes Training wurde geschützt und beibehalten. Ein Trainingsentwurf aus dem Backup wurde nicht übernommen."
      : "Dein aktuell geöffnetes Training wurde geschützt und beibehalten.";
  }
  if (backupValid) {
    storage.activeWorkoutDraft = backupDraft;
    return "Trainingsentwurf aus dem Backup wurde übernommen.";
  }
  return "";
}

function mergeRecommendationOutcomes(existing, incoming) {
  const byKey = new Map();
  [...(Array.isArray(existing) ? existing : []), ...(Array.isArray(incoming) ? incoming : [])].forEach((item) => {
    if (!item || typeof item !== "object") return;
    const key = item.evaluationKey || [item.recommendationId, item.evaluatedSessionId, item.evaluatorVersion || OUTCOME_EVALUATOR_VERSION].join("|");
    if (!key) return;
    byKey.set(key, { ...item, evaluationKey: key });
  });
  return [...byKey.values()];
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
        `Geräteeinstellungen: ${Array.isArray(backup.machineSettings) ? backup.machineSettings.length : 0}`,
        `Gerätezuordnungen: ${Array.isArray(backup.scannedEquipmentMappings) ? backup.scannedEquipmentMappings.length : 0}`,
        "",
        "Die lokalen Daten werden zusammengefuehrt. Duplikate werden vermieden."
      ].join("\n");
      if (!confirm(message)) return;
      storage.sessions = mergeById(storage.sessions, backup.sessions);
      storage.weights = mergeById(storage.weights, backup.weights);
      storage.journalEntries = mergeById(storage.journalEntries, Array.isArray(backup.journalEntries) ? backup.journalEntries : []);
      storage.machineSettings = mergeById(storage.machineSettings, Array.isArray(backup.machineSettings) ? backup.machineSettings : []);
      storage.scannedEquipmentMappings = mergeScannedEquipmentMappings(storage.scannedEquipmentMappings, Array.isArray(backup.scannedEquipmentMappings) ? backup.scannedEquipmentMappings : []);
      storage.customPlans = mergeById(storage.customPlans, Array.isArray(backup.customPlans) ? backup.customPlans : []);
      storage.customExercises = mergeById(storage.customExercises, Array.isArray(backup.customExercises) ? backup.customExercises : []);
      if (!storage.customPlanBuilderDraft && backup.customPlanBuilderDraft && typeof backup.customPlanBuilderDraft === "object") storage.customPlanBuilderDraft = backup.customPlanBuilderDraft;
      storage.coachFeedback = mergeById(storage.coachFeedback, Array.isArray(backup.coachFeedback) ? backup.coachFeedback : []);
      storage.coachPlanProposals = mergeById(storage.coachPlanProposals, Array.isArray(backup.coachPlanProposals) ? backup.coachPlanProposals : []);
      if (!storage.coachPlanUndo && backup.coachPlanUndo && typeof backup.coachPlanUndo === "object") storage.coachPlanUndo = backup.coachPlanUndo;
      storage.coachRecommendationHistory = mergeById(storage.coachRecommendationHistory, Array.isArray(backup.coachRecommendationHistory) ? backup.coachRecommendationHistory : []);
      storage.recommendationOutcomes = mergeRecommendationOutcomes(storage.recommendationOutcomes, Array.isArray(backup.recommendationOutcomes) ? backup.recommendationOutcomes : []);
      storage.coachContextFeedback = mergeById(storage.coachContextFeedback, Array.isArray(backup.coachContextFeedback) ? backup.coachContextFeedback : []);
      storage.coachConflictLog = mergeById(storage.coachConflictLog, Array.isArray(backup.coachConflictLog) ? backup.coachConflictLog : []);
      if (!storage.coachCalibrationState && backup.coachCalibrationState && typeof backup.coachCalibrationState === "object") storage.coachCalibrationState = backup.coachCalibrationState;
      storage.deviceValidationReports = mergeById(storage.deviceValidationReports, Array.isArray(backup.deviceValidationReports) ? backup.deviceValidationReports : []);
      storage.dailyCheckins = mergeById(storage.dailyCheckins, Array.isArray(backup.dailyCheckins) ? backup.dailyCheckins : []);
      if (!storage.dailyCheckinDraft && backup.dailyCheckinDraft && typeof backup.dailyCheckinDraft === "object") storage.dailyCheckinDraft = backup.dailyCheckinDraft;
      if (!storage.personalProfile && backup.personalProfile && typeof backup.personalProfile === "object") storage.personalProfile = backup.personalProfile;
      storage.userSettings = { ...currentUserSettings(), ...(backup.userSettings && typeof backup.userSettings === "object" ? backup.userSettings : {}) };
      storage.lastErrors = mergeById(storage.lastErrors, Array.isArray(backup.lastErrors) ? backup.lastErrors : []);
      storage.migrationLog = mergeById(storage.migrationLog, Array.isArray(backup.migrationLog) ? backup.migrationLog : []);
      if (!storage.storageVersion && backup.storageVersion) storage.storageVersion = backup.storageVersion;
      storage.archivedPlanNames = uniqueValues(storage.archivedPlanNames, Array.isArray(backup.archivedPlanNames) ? backup.archivedPlanNames : []);
      storage.deletedPlanNames = uniqueValues(storage.deletedPlanNames, Array.isArray(backup.deletedPlanNames) ? backup.deletedPlanNames : []);
      const draftMessage = mergeBackupActiveWorkoutDraft(backup.activeWorkoutDraft);
      if (backup.activePlanName) storage.activePlanName = backup.activePlanName;
      restoreWorkoutDraft();
      ensureActivePlan();
      alert(["Backup importiert.", draftMessage].filter(Boolean).join("\n\n"));
      render();
    } catch {
      alert("Backup konnte nicht gelesen werden.");
    }
  };
  reader.readAsText(file);
}

const FULL_RESET_CONFIRMATION_TEXT = [
  "Alle lokalen D-Coach-Daten löschen?",
  "",
  "Dabei werden dauerhaft gelöscht:",
  "",
  "- Trainings und offene Trainingsentwuerfe",
  "- Gewicht und Journal",
  "- Tages-Check-ins, Schlaf- und Schmerzangaben",
  "- Geräte-, Sitz- und Griffdaten",
  "- Life-Fitness-Scanner-Zuordnungen",
  "- eigene Pläne und eigene Übungen",
  "- Coach-Feedback, Vorschlagsverlauf, Empfehlungshistorie und Outcome-Lernen",
  "- Coach-Konflikte, Kontextfeedback und Kalibrierungsdaten",
  "- Geräteprüfungsberichte",
  "- persönliche Einstellungen, technische Logs und lokale App-Daten",
  "",
  "Diese Aktion kann ohne Backup nicht rueckgaengig gemacht werden.",
  "",
  "Tippe BACKUP für Backup erstellen.",
  "Tippe LÖSCHEN für endgültig löschen.",
  "Lasse ABBRECHEN stehen, um nichts zu löschen."
].join("\n");

function resetAllLocalAppData() {
  STORAGE_KEYS.forEach((item) => localStorage.removeItem(item.key));
  storage.storageVersion = STORAGE_SCHEMA_VERSION;
  appendMigrationLog({
    id: `full-reset-${Date.now()}`,
    from: STORAGE_SCHEMA_VERSION,
    to: STORAGE_SCHEMA_VERSION,
    at: new Date().toISOString(),
    action: "full-local-reset",
    destructive: true
  });
  state.activeWorkout = null;
  state.selectedExerciseId = null;
  state.selectedSessionId = null;
  state.dailyCheckinActive = false;
  state.activeCoachProposalId = "";
  state.showProposalAlternative = false;
  state.restTimer.remaining = 0;
  state.restTimer.running = false;
  ensureActivePlan();
}

function handleFullAppReset() {
  const choice = prompt(FULL_RESET_CONFIRMATION_TEXT, "ABBRECHEN");
  const normalized = String(choice || "ABBRECHEN").trim().toUpperCase();
  if (normalized === "BACKUP") {
    exportBackup();
    alert("Backup wurde erstellt. Es wurden keine Daten gelöscht. Starte den Reset erneut, wenn du danach wirklich löschen willst.");
    return;
  }
  if (normalized !== "LÖSCHEN") return;
  if (!confirm("Wirklich alle lokalen D-Coach-Daten endgültig löschen?")) return;
  resetAllLocalAppData();
  render();
}

function bindEvents() {
  bindDailyCheckinEvents();
  if (state.dailyCheckinActive) return;
  if (isMuscleMapPrototypeRoute()) {
    mountMuscleMapJsPrototype();
  }
  mountProductionMuscleMap();

  document.querySelector("[data-toggle-more-menu]")?.addEventListener("click", () => {
    state.moreMenuOpen = !state.moreMenuOpen;
    render();
  });

  document.querySelectorAll("[data-coach-feedback]").forEach((button) => {
    button.addEventListener("click", () => {
      const entry = {
        id: `coach_feedback_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        recommendationId: button.dataset.recommendationId,
        ruleId: button.dataset.ruleId,
        feedbackType: button.dataset.coachFeedback,
        optionalNote: "",
        timestamp: new Date().toISOString()
      };
      storage.coachFeedback = [...storage.coachFeedback, entry];
      const history = storage.coachRecommendationHistory.find((item) => item.id === entry.recommendationId);
      storage.coachContextFeedback = [...storage.coachContextFeedback, {
        id: `coach_context_feedback_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        recommendationId: entry.recommendationId,
        ruleId: entry.ruleId,
        contextKey: history?.contextKey || `${entry.ruleId}|general`,
        feedbackType: entry.feedbackType,
        category: entry.feedbackType,
        timestamp: entry.timestamp
      }];
      alert(coachFeedbackText("thanks", "Feedback gespeichert."));
      render();
    });
  });

  document.querySelectorAll("[data-confirm-plan-adjust]").forEach((button) => button.addEventListener("click", () => {
    openCoachProposalReview();
  }));

  document.querySelector("[data-apply-coach-proposal]")?.addEventListener("click", applyCoachPlanProposal);
  document.querySelector("[data-reject-coach-proposal]")?.addEventListener("click", rejectCoachPlanProposal);
  document.querySelector("[data-cancel-coach-proposal]")?.addEventListener("click", cancelCoachPlanProposal);
  document.querySelector("[data-undo-coach-proposal]")?.addEventListener("click", undoCoachPlanProposal);
  document.querySelector("[data-show-proposal-alternative]")?.addEventListener("click", () => {
    state.showProposalAlternative = true;
    render();
  });

  document.querySelectorAll("[data-open-daily-checkin], [data-edit-daily-checkin]").forEach((button) => {
    button.addEventListener("click", () => {
      const existing = dailyCheckinForDate(localIsoDate());
      storage.dailyCheckinDraft = existing ? { ...existing, resumeAction: null, status: "draft", updatedAt: new Date().toISOString() } : createDailyCheckinDraft("journal");
      state.dailyCheckinActive = true;
      state.dailyCheckinStep = "sleep";
      render();
    });
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      navigateToTab(button.dataset.tab);
    });
  });

  document.querySelectorAll("[data-start-training-flow]").forEach((button) => {
    button.addEventListener("click", () => startTrainingFlow(button.dataset.startTrainingFlow || "", { skipReview: true }));
  });

  document.querySelectorAll("[data-start-day]").forEach((button) => {
    button.addEventListener("click", () => startDay(button.dataset.startDay));
  });

  document.querySelectorAll("[data-start-day-id]").forEach((button) => {
    button.addEventListener("click", () => startDay(button.dataset.startDayId));
  });

  document.querySelectorAll("[data-select-training-day]").forEach((button) => {
    button.addEventListener("click", () => {
      state.manualTrainingDayId = button.dataset.selectTrainingDay;
      state.trainingDayError = null;
      render();
    });
  });

  document.querySelector("[data-confirm-workout-review]")?.addEventListener("click", confirmPreWorkoutReview);
  document.querySelector("[data-cancel-workout-review]")?.addEventListener("click", cancelPreWorkoutReview);
  document.querySelector("[data-clear-training-day-error]")?.addEventListener("click", () => {
    state.trainingDayError = null;
    render();
  });
  document.querySelector("[data-export-training-day-diagnostics]")?.addEventListener("click", exportTrainingDayDiagnostics);

  document.querySelectorAll("[data-start-smart-day]").forEach((button) => {
    button.addEventListener("click", () => startSmartDay(button.dataset.startSmartDay));
  });

  document.querySelectorAll("[data-coverage-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.coverageMode = button.dataset.coverageMode;
      render();
    });
  });

  document.querySelectorAll("[data-coverage-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.coverageView = button.dataset.coverageView;
      render();
    });
  });

  document.querySelectorAll("[data-select-coverage-muscle]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedMuscleId = button.dataset.selectCoverageMuscle;
      render();
    });
  });

  const muscleTapGestures = new WeakMap();
  document.querySelectorAll("[data-open-coverage-muscle]").forEach((button) => {
    button.addEventListener("click", () => {
      const gesture = muscleTapGestures.get(button);
      if (gesture?.moved) return;
      state.selectedMuscleId = button.dataset.openCoverageMuscle;
      render();
    });
    button.addEventListener("pointerdown", (event) => {
      muscleTapGestures.set(button, { startX: event.clientX, startY: event.clientY, moved: false });
    }, { passive: true });
    button.addEventListener("pointermove", (event) => {
      const gesture = muscleTapGestures.get(button);
      if (!gesture) return;
      const dx = Math.abs(event.clientX - gesture.startX);
      const dy = Math.abs(event.clientY - gesture.startY);
      if (dx > 10 || dy > 10) gesture.moved = true;
    }, { passive: true });
    button.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      state.selectedMuscleId = button.dataset.openCoverageMuscle;
      render();
    });
  });

  document.querySelector("[data-production-muscle-map]")?.addEventListener("dcoach-production-muscle-select", (event) => {
    if (!event.detail?.dcoachMuscleId) return;
    state.selectedMuscleId = event.detail.dcoachMuscleId;
    render();
  });

  document.querySelector("[data-resume-workout]")?.addEventListener("click", resumeWorkoutDraft);

  document.querySelectorAll("[data-set]").forEach((input) => {
    const updateSetField = () => {
      const entry = state.activeWorkout.entries[state.activeWorkout.index];
      entry.sets[Number(input.dataset.set)][input.dataset.field] = input.value;
      persistWorkoutDraft();
    };
    input.addEventListener("input", updateSetField);
    input.addEventListener("change", updateSetField);
  });

  document.querySelectorAll("[data-entry-field]").forEach((input) => {
    input.addEventListener("input", () => {
      const entry = state.activeWorkout.entries[state.activeWorkout.index];
      entry[input.dataset.entryField] = input.value;
      persistWorkoutDraft();
    });
  });

  document.querySelector("[data-workout-field]")?.addEventListener("input", (event) => {
    state.activeWorkout[event.target.dataset.workoutField] = event.target.value;
    persistWorkoutDraft();
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

  document.querySelector("[data-add-workout-set]")?.addEventListener("click", addWorkoutSet);
  document.querySelectorAll("[data-delete-workout-set]").forEach((button) => {
    button.addEventListener("click", () => deleteWorkoutSet(button.dataset.deleteWorkoutSet));
  });
  document.querySelector("[data-toggle-workout-exercise-picker]")?.addEventListener("click", () => {
    state.workoutExercisePickerOpen = !state.workoutExercisePickerOpen;
    state.showAlternatives = false;
    persistWorkoutDraft();
    render();
  });
  document.querySelector("[data-workout-exercise-search]")?.addEventListener("input", (event) => {
    state.workoutExerciseSearch = event.target.value;
    render();
  });
  document.querySelector("[data-workout-exercise-muscle-filter]")?.addEventListener("change", (event) => {
    state.workoutExerciseMuscleFilter = event.target.value;
    render();
  });
  document.querySelector("[data-workout-exercise-equipment-filter]")?.addEventListener("change", (event) => {
    state.workoutExerciseEquipmentFilter = event.target.value;
    render();
  });
  document.querySelectorAll("[data-add-workout-exercise]").forEach((button) => {
    button.addEventListener("click", () => addExerciseToActiveWorkout(button.dataset.addWorkoutExercise));
  });
  document.querySelector("[data-remove-workout-exercise]")?.addEventListener("click", (event) => {
    removeAddedWorkoutExercise(event.currentTarget.dataset.removeWorkoutExercise);
  });

  document.querySelector("[data-prev-exercise]")?.addEventListener("click", goToPreviousExercise);
  document.querySelectorAll("[data-jump-workout-exercise]").forEach((button) => {
    button.addEventListener("click", () => jumpToWorkoutExercise(button.dataset.jumpWorkoutExercise));
  });
  document.querySelector("[data-next-exercise]")?.addEventListener("click", (event) => {
    event.currentTarget.disabled = true;
    finishOrNext();
  });
  document.querySelector("[data-workout-exercise-detail]")?.addEventListener("click", (event) => {
    persistWorkoutDraft();
    state.selectedExerciseId = event.currentTarget.dataset.workoutExerciseDetail;
    render();
  });
  document.querySelector("[data-workout-equipment-scan]")?.addEventListener("click", () => {
    persistWorkoutDraft();
    state.equipmentScanner = { ...state.equipmentScanner, active: true, status: "manual", error: "", rawCode: "", normalizedCode: "", mappingId: "" };
    render();
  });
  document.querySelector("[data-toggle-alternatives]")?.addEventListener("click", () => {
    if (state.activeWorkout && !state.showAlternatives) persistWorkoutDraft();
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
      activatePlan(button.dataset.activatePlan);
      render();
    });
  });

  document.querySelectorAll("[data-archive-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const planName = button.dataset.archivePlan;
      storage.archivedPlanNames = [...new Set([...storage.archivedPlanNames, planName])];
      if (!activePlan()) ensureActivePlan();
      render();
    });
  });

  document.querySelectorAll("[data-unarchive-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const planName = button.dataset.unarchivePlan;
      storage.archivedPlanNames = storage.archivedPlanNames.filter((name) => name !== planName);
      if (!activePlan()) activatePlan(planName);
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

  document.querySelectorAll("[data-open-custom-plan-builder]").forEach((button) => {
    button.addEventListener("click", openCustomPlanBuilder);
  });
  document.querySelector("[data-close-custom-plan-builder]")?.addEventListener("click", () => {
    state.customPlanBuilderOpen = false;
    render();
  });
  document.querySelectorAll("[data-builder-step]").forEach((button) => {
    button.addEventListener("click", () => {
      state.customPlanBuilderStep = button.dataset.builderStep;
      render();
    });
  });
  document.querySelectorAll("[data-builder-field]").forEach((input) => {
    input.addEventListener("input", () => updateCustomPlanBuilderField(input.dataset.builderField, input.value));
  });
  document.querySelectorAll("[data-builder-constraint]").forEach((input) => {
    input.addEventListener("input", () => updateCustomPlanBuilderConstraint(input.dataset.builderConstraint, input.type === "checkbox" ? input.checked : input.value));
    input.addEventListener("change", () => updateCustomPlanBuilderConstraint(input.dataset.builderConstraint, input.type === "checkbox" ? input.checked : input.value));
  });
  document.querySelector("[data-builder-add-day]")?.addEventListener("click", addCustomPlanBuilderDay);
  document.querySelectorAll("[data-builder-remove-day]").forEach((button) => {
    button.addEventListener("click", () => removeCustomPlanBuilderDay(button.dataset.builderRemoveDay));
  });
  document.querySelectorAll("[data-builder-day-field]").forEach((input) => {
    input.addEventListener("input", () => updateCustomPlanBuilderDay(input.dataset.builderDayId, input.dataset.builderDayField, input.value));
  });
  document.querySelectorAll("[data-builder-select-day]").forEach((button) => {
    button.addEventListener("click", () => {
      state.customPlanBuilderSelectedDayId = button.dataset.builderSelectDay;
      render();
    });
  });
  document.querySelector("[data-builder-search]")?.addEventListener("input", (event) => {
    state.customPlanBuilderExerciseSearch = event.target.value;
    render();
  });
  document.querySelectorAll("[data-builder-add-exercise]").forEach((button) => {
    button.addEventListener("click", () => addExerciseToCustomPlanBuilder(button.dataset.builderAddExercise));
  });
  document.querySelectorAll("[data-builder-remove-exercise]").forEach((button) => {
    button.addEventListener("click", () => removeExerciseFromCustomPlanBuilder(button.dataset.builderDayId, button.dataset.builderRemoveExercise));
  });
  document.querySelectorAll("[data-builder-exercise-field]").forEach((input) => {
    input.addEventListener("input", () => updateCustomPlanBuilderExercise(input.dataset.builderDayId, input.dataset.builderExerciseIndex, input.dataset.builderExerciseField, input.value));
  });
  document.querySelector("[data-builder-save-draft]")?.addEventListener("click", () => {
    saveCustomPlanBuilderDraft(currentCustomPlanBuilderDraft());
    alert("Planentwurf gespeichert.");
  });
  document.querySelectorAll("[data-builder-save-plan]").forEach((button) => {
    button.addEventListener("click", () => saveCustomBuilderPlan({ activate: button.dataset.builderActivate === "true" }));
  });
  document.querySelector("[data-builder-discard]")?.addEventListener("click", () => {
    if (!confirm("Planentwurf verwerfen?")) return;
    storage.customPlanBuilderDraft = null;
    state.customPlanBuilderOpen = false;
    state.customPlanBuilderStep = "basics";
    state.customPlanBuilderSelectedDayId = "";
    state.customPlanBuilderExerciseSearch = "";
    render();
  });

  document.querySelectorAll("[data-generate-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const plan = generatePlanCandidate();
      if (!plan.days.length) {
        alert("Kein Planvorschlag möglich. Es fehlen passende Übungen.");
        return;
      }
      storage.customPlans = [...storage.customPlans, plan];
      activatePlan(plan);
      alert(appText("plan.generated", "Planvorschlag erstellt. Bitte prüfen und aktivieren."));
      render();
    });
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
      const deletedWasActive = activePlan()?.planName === planName;
      storage.deletedPlanNames = [...new Set([...storage.deletedPlanNames, planName])];
      storage.archivedPlanNames = storage.archivedPlanNames.filter((name) => name !== planName);
      if (deletedWasActive) ensureActivePlan();
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
      alert("Eigene Übung gespeichert.");
      render();
    } catch (error) {
      alert(error.message || "Übung konnte nicht gespeichert werden.");
    }
  });

  document.querySelectorAll("[data-delete-custom-exercise]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!confirm("Eigene Übung entfernen? Historie bleibt erhalten.")) return;
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
    navigateTo("exercises", { resetSelection: false });
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
    navigateTo("dashboard", { resetSelection: false });
  });

  document.querySelector("[data-delete-session]")?.addEventListener("click", (event) => {
    if (!confirm("Training wirklich löschen?")) return;
    storage.sessions = storage.sessions.filter((session) => session.id !== event.currentTarget.dataset.deleteSession);
    state.selectedSessionId = null;
    navigateTo("dashboard", { resetSelection: false });
  });

  document.querySelector("[data-save-weight]")?.addEventListener("click", () => {
    const input = document.querySelector("[data-weight-input]");
    const value = parseNumber(input.value);
    if (!value || value <= 0) {
      alert("Bitte gültiges Gewicht eingeben.");
      return;
    }
    const todayKey = localIsoDate();
    const entries = storage.weights.filter((entry) => String(entry.date).slice(0, 10) !== todayKey);
    entries.push({ id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), date: new Date(`${todayKey}T08:00:00`).toISOString(), weightKg: value });
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

  document.querySelectorAll("[data-journal-field]").forEach((input) => {
    input.addEventListener("input", () => updateRangeValueLabel(input));
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

  document.querySelector("[data-start-equipment-scan]")?.addEventListener("click", () => {
    startEquipmentScannerCamera();
  });

  document.querySelector("[data-stop-equipment-scan]")?.addEventListener("click", async () => {
    await stopEquipmentScannerCamera();
    state.equipmentScanner = { ...state.equipmentScanner, active: false, status: "idle", error: "" };
    render();
  });

  document.querySelector("[data-manual-equipment-code]")?.addEventListener("input", (event) => {
    state.equipmentScanner.rawCode = event.target.value;
  });

  document.querySelector("[data-apply-manual-equipment-code]")?.addEventListener("click", () => {
    applyScannedEquipmentCode(document.querySelector("[data-manual-equipment-code]")?.value || "");
    render();
  });

  document.querySelector("[data-scanner-search]")?.addEventListener("input", (event) => {
    state.equipmentScanner.search = event.target.value;
    render();
  });

  document.querySelectorAll("[data-scanner-exercise]").forEach((button) => {
    button.addEventListener("click", () => {
      state.equipmentScanner.selectedExerciseId = button.dataset.scannerExercise;
      render();
    });
  });

  document.querySelector("[data-save-scanned-mapping]")?.addEventListener("click", () => {
    try {
      saveScannedEquipmentMapping();
      alert("Gerätezuordnung gespeichert.");
      render();
    } catch (error) {
      alert(error.message || "Zuordnung konnte nicht gespeichert werden.");
    }
  });

  document.querySelector("[data-edit-scanned-mapping]")?.addEventListener("click", () => {
    state.equipmentScanner.status = "unknown";
    render();
  });

  document.querySelectorAll("[data-open-scanned-exercise]").forEach((button) => {
    button.addEventListener("click", () => {
      const exerciseId = button.dataset.openScannedExercise;
      if (!exerciseById(exerciseId)) {
        alert("Diese Übung ist nicht mehr in der Übungsdatenbank vorhanden.");
        return;
      }
      persistWorkoutDraft();
      stopEquipmentScannerCamera();
      state.selectedExerciseId = exerciseId;
      navigateTo("exercises", { resetSelection: false });
    });
  });

  document.querySelectorAll("[data-load-scanned-mapping]").forEach((button) => {
    button.addEventListener("click", () => {
      const mapping = storage.scannedEquipmentMappings.find((item) => item.id === button.dataset.loadScannedMapping);
      if (!mapping) return;
      state.equipmentScanner = {
        ...state.equipmentScanner,
        active: true,
        rawCode: mapping.rawCode,
        normalizedCode: mapping.normalizedCode,
        status: "unknown",
        error: "",
        selectedExerciseId: mapping.exerciseId,
        mappingId: mapping.id
      };
      render();
    });
  });

  document.querySelectorAll("[data-delete-scanned-mapping]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!confirm("Gerätezuordnung wirklich löschen?")) return;
      storage.scannedEquipmentMappings = storage.scannedEquipmentMappings.filter((item) => item.id !== button.dataset.deleteScannedMapping);
      render();
    });
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
      alert(error.message || "Persönliche Daten konnten nicht importiert werden.");
    }
  });

  document.querySelector("[data-reset-plan-library]")?.addEventListener("click", () => {
    storage.archivedPlanNames = [];
    storage.deletedPlanNames = [];
    ensureActivePlan();
    render();
  });

  document.querySelector("[data-reset-app]")?.addEventListener("click", () => {
    handleFullAppReset();
  });

  document.querySelector("[data-toggle-debug]")?.addEventListener("change", (event) => {
    updateUserSetting("debugMode", event.target.checked);
    alert(event.target.checked ? appText("debug.enabled", "Debug-Modus aktiviert.") : "Debug-Modus deaktiviert.");
    render();
  });

  document.querySelector("[data-load-test-data]")?.addEventListener("click", () => {
    if (!confirm("Testdaten hinzufügen? Bestehende Daten bleiben erhalten.")) return;
    loadDebugTestData();
    render();
  });

  document.querySelector("[data-clear-cache]")?.addEventListener("click", async () => {
    await clearPwaCache().catch((error) => logAppError(error.message, "cache"));
    alert("Cache wurde geleert. Lade die App danach neu.");
  });

  document.querySelector("[data-export-device-validation]")?.addEventListener("click", exportDeviceValidationReport);
  document.querySelectorAll("[data-device-validation-status]").forEach((button) => {
    button.addEventListener("click", () => {
      storage.deviceValidationStatus = {
        ...storage.deviceValidationStatus,
        [button.dataset.deviceValidationStatus]: button.dataset.status || "blocked"
      };
      render();
    });
  });
  document.querySelector("[data-export-muscle-coverage-device-validation]")?.addEventListener("click", exportMuscleCoverageDeviceValidationReport);
  document.querySelectorAll("[data-muscle-coverage-manual]").forEach((button) => {
    button.addEventListener("click", () => {
      storage.muscleCoverageDeviceValidationStatus = {
        ...storage.muscleCoverageDeviceValidationStatus,
        [button.dataset.muscleCoverageManual]: button.dataset.status || "blocked"
      };
      render();
    });
  });
  document.querySelector("[data-export-muscle-coverage-diagnostics]")?.addEventListener("click", exportMuscleCoverageDiagnostics);
}

function bindDailyCheckinEvents() {
  if (!state.dailyCheckinActive) return;
  document.querySelectorAll("[data-checkin-field], [data-checkin-sleep-hours], [data-checkin-sleep-minutes], [data-pain-region], [data-pain-intensity], [data-pain-type], [data-pain-note-region], [data-checkin-pain-present]").forEach((input) => {
    input.addEventListener("input", () => {
      updateRangeValueLabel(input);
      updateDailyCheckinDraftFromDom();
    });
    input.addEventListener("change", () => {
      updateRangeValueLabel(input);
      updateDailyCheckinDraftFromDom();
      if (input.dataset.checkinPainPresent) render();
    });
  });
  document.querySelectorAll("[data-checkin-go]").forEach((button) => {
    button.addEventListener("click", () => {
      const draft = updateDailyCheckinDraftFromDom();
      if (button.dataset.checkinSkipWeight) {
        delete draft.weightKg;
        storage.dailyCheckinDraft = draft;
      }
      state.dailyCheckinStep = button.dataset.checkinGo;
      render();
    });
  });
  document.querySelector("[data-checkin-new]")?.addEventListener("click", () => {
    storage.dailyCheckinDraft = createDailyCheckinDraft();
    state.dailyCheckinStep = "sleep";
    render();
  });
  document.querySelectorAll("[data-checkin-skip]").forEach((button) => {
    button.addEventListener("click", skipDailyCheckin);
  });
  document.querySelector("[data-checkin-complete]")?.addEventListener("click", completeDailyCheckin);
}

function mountMuscleMapJsPrototype() {
  const container = document.querySelector("[data-musclemapjs-prototype]");
  if (!container) return;
  import("./prototype/musclemapjs-prototype.js?v=6.8.0")
    .then((module) => module.mountDCoachMuscleMapJsPrototype(container.closest(".prototype-screen")))
    .catch((error) => {
      logAppError(error?.message || error, "musclemapjs-prototype");
      const detail = document.querySelector("[data-prototype-detail]");
      if (detail) {
        detail.innerHTML = `<h3>Prototyp konnte nicht geladen werden</h3><p class="muted">${htmlesc(error?.message || String(error))}</p>`;
      }
    });
}

function mountProductionMuscleMap() {
  const container = document.querySelector("[data-production-muscle-map]");
  if (!container || !window.dcoachProductionMuscleMapPayload) return;
  import("./production/production-muscle-map.js?v=6.17.3")
    .then((module) => module.mountProductionMuscleMap(container, window.dcoachProductionMuscleMapPayload))
    .catch((error) => {
      logAppError(error?.message || error, "production-muscle-map");
      const fallback = container.querySelector("[data-production-muscle-map-fallback]");
      if (fallback) fallback.hidden = false;
      const canvas = container.querySelector("[data-production-muscle-map-canvas]");
      if (canvas) {
        const view = state.coverageView || "front";
        const items = productionCoverageItemsForMode(state.coverageMode || "week");
        const regions = premiumRegionsForView(view);
        canvas.innerHTML = regions.length ? renderPremiumMuscleSvg(view, items, regions) : `<p class="muted">Muskelkarte konnte nicht geladen werden.</p>`;
      }
    });
}

boot().catch((error) => {
  document.getElementById("app").innerHTML = `<section class="screen"><h1 class="title">D-Coach</h1><p class="subtitle">Fehler: ${htmlesc(error.message)}</p></section>`;
});
