const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");
const sw = fs.readFileSync("sw.js", "utf8");
const html = fs.readFileSync("index.html", "utf8");

assert(app.includes('const BACKUP_FORMAT_VERSION = "6.17.2";'), "backup format version missing");
assert(app.includes("backupVersion: BACKUP_FORMAT_VERSION"), "backup export must use backup format constant");
assert(!app.includes("storage.activeWorkoutDraft = backup.activeWorkoutDraft || null"), "backup import must not delete local draft");
assert(app.includes("function isValidActiveWorkoutDraft(value)"), "workout draft validation missing");
assert(app.includes("function mergeBackupActiveWorkoutDraft(backupDraft)"), "backup draft merge helper missing");
assert(app.includes("Dein aktuell geoeffnetes Training wurde geschuetzt"), "backup draft protection message missing");

assert(app.includes("FULL_RESET_CONFIRMATION_TEXT"), "full reset warning text missing");
assert(app.includes("Tippe BACKUP fuer Backup erstellen."), "reset backup action missing");
assert(app.includes("Tippe LOESCHEN fuer endgueltig loeschen."), "reset destructive action missing");
assert(app.includes("resetAllLocalAppData()"), "full reset implementation missing");
assert(app.includes("STORAGE_KEYS.forEach((item) => localStorage.removeItem(item.key))"), "reset must clear declared storage keys");
assert(!app.includes('confirm("Alle Trainings- und Gewichtsdaten'), "old misleading reset confirmation must be removed");

assert(app.includes('resumeAction: "start_training"'), "training resume action missing");
assert(app.includes('todayCheckin?.status === "completed" || todayCheckin?.status === "skipped"'), "skipped check-in must allow training");
assert(app.includes("function consumeDailyCheckinResumeAction"), "resume action consumer missing");
assert(app.includes("startTrainingFlow();\n    return;"), "check-in completion/skip must continue training flow");
assert(app.includes("{ ...existing, resumeAction: null, status: \"draft\""), "manual check-in edit must clear resume action");

assert(app.includes('document.querySelectorAll("[data-open-scanned-exercise]")'), "all scanner open buttons must be bound");
assert(!app.includes('document.querySelector("[data-open-scanned-exercise]")?.addEventListener'), "single scanner open binding must be removed");
assert(app.includes("persistWorkoutDraft();\n      stopEquipmentScannerCamera();"), "scanner navigation must preserve workout draft");
assert(app.includes("Diese Uebung ist nicht mehr in der Uebungsdatenbank vorhanden."), "missing scanner exercise warning missing");

assert(!/function renderDashboard\(\)[\s\S]*?\$\{renderCoachDashboardV54\(\)\}[\s\S]*?function renderCoach\(\)/.test(app), "dashboard must not contain old coach dashboard block");
assert(app.includes('const APP_VERSION = "pwa-v70";'), "app version must be pwa-v70");
assert(sw.includes('const CACHE_NAME = "dcoach-pwa-v70";'), "service worker cache must be pwa-v70");
assert(html.includes("app.js?v=pwa-v70"), "index app cache buster must be pwa-v70");
assert(html.includes("styles.css?v=pwa-v70"), "index style cache buster must be pwa-v70");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("v6.15.1 audit remediation tests passed");
