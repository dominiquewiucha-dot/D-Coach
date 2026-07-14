const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");
const css = fs.readFileSync("styles.css", "utf8");

assert(app.includes('case "machines": return renderMachines();'), "machines route missing");
assert(app.includes('case "history": return renderTrainingHistory();'), "training history route missing");
assert(app.includes('"machines"'), "machines hash/tab not allowed");
assert(app.includes('"history"'), "history hash/tab not allowed");
assert(app.includes("function renderProfileShortcuts()"), "tracking shortcut renderer missing");
assert(app.includes("function renderMachines()"), "machines screen missing");
assert(app.includes("function renderTrainingHistory()"), "training history screen missing");
["weight", "journal", "history", "machines", "musclemap", "exercises", "settings"].forEach((tab) => {
  assert(app.includes(`tab: "${tab}"`), `${tab} tracking shortcut missing`);
});
["Gewicht", "Journal", "Trainingshistorie", "Fortschritt", "Körperwerte", "Muskelmapping", "Einstellungen"].forEach((label) => {
  assert(app.includes(label), `${label} label missing`);
});
assert(app.includes("Geräte"), "Geräte label missing");
assert(app.includes("Übungen"), "Übungen label missing");
assert(app.includes("<h3>Tracking</h3>"), "tracking shortcut title missing");
assert(app.includes("iconSvg(item.icon)"), "tracking shortcuts must use inline svg icons");
assert(app.includes("${renderProfileShortcuts()}"), "tracking shortcuts must render in settings/tracking");
assert(css.includes(".profile-shortcut-grid"), "profile shortcut grid styles missing");
assert(css.includes(".profile-shortcut-icon"), "profile shortcut icon styles missing");
assert(css.includes(".profile-shortcut > span:last-child"), "profile shortcut text column must be shrinkable");
assert(css.includes("overflow-wrap: anywhere"), "long tracking shortcut labels must wrap on iPhone");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("tracking shortcut tests passed");
