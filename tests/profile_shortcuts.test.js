const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");
const css = fs.readFileSync("styles.css", "utf8");

assert(app.includes('case "machines": return renderMachines();'), "machines route missing");
assert(app.includes('"machines"'), "machines hash/tab not allowed");
assert(app.includes("function renderProfileShortcuts()"), "profile shortcut renderer missing");
assert(app.includes("function renderMachines()"), "machines screen missing");
["weight", "journal", "machines", "musclemap", "exercises"].forEach((tab) => {
  assert(app.includes(`tab: "${tab}"`), `${tab} profile shortcut missing`);
});
["Gewicht", "Journal", "Geraete", "Muskelmapping", "Uebungen"].forEach((label) => {
  assert(app.includes(label), `${label} label missing`);
});
assert(app.includes("${renderProfileShortcuts()}"), "profile shortcuts must render in settings/profile");
assert(css.includes(".profile-shortcut-grid"), "profile shortcut grid styles missing");
assert(css.includes(".profile-shortcut-icon"), "profile shortcut icon styles missing");
assert(css.includes(".profile-shortcut > span:last-child"), "profile shortcut text column must be shrinkable");
assert(css.includes("overflow-wrap: anywhere"), "long profile shortcut labels must wrap on iPhone");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("profile shortcut tests passed");
