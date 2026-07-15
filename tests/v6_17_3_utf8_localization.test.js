const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const app = read("app.js");
const html = read("index.html");
const sw = read("sw.js");

assert(app.includes('const APP_VERSION = "pwa-v77";'), "app version must be pwa-v77");
assert(app.includes('const BACKUP_FORMAT_VERSION = "6.18.0";'), "backup format must stay 6.18.0");
assert(sw.includes('const CACHE_NAME = "dcoach-pwa-v77";'), "cache must be pwa-v77");
assert(html.includes("styles.css?v=pwa-v77"), "style cache buster must be pwa-v77");
assert(html.includes("app.js?v=pwa-v77"), "app cache buster must be pwa-v77");
assert(html.toLowerCase().indexOf('<meta charset="utf-8">') >= 0, "UTF-8 meta charset missing");
assert(Buffer.byteLength(html.slice(0, html.toLowerCase().indexOf('<meta charset="utf-8">') + 22), "utf8") <= 1024, "charset must be inside first 1024 bytes");

const productiveFiles = ["index.html", "app.js", "styles.css", "sw.js", "manifest.webmanifest"];
function walkData(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkData(full);
    else if (/\.(json|md|webmanifest)$/i.test(entry.name)) productiveFiles.push(path.relative(root, full).replace(/\\/g, "/"));
  }
}
walkData(path.join(root, "data"));

const mojibakePatterns = [
  /\u00C3[\u0080-\u00BF\u0152\u0153\u0178]/,
  /\u00C2[\u0080-\u00BF]/,
  /\u00E2[\u0080-\uFFFF]{1,2}/,
  /\u00EF\u00BB\u00BF/,
  /\uFFFD/
];

for (const file of productiveFiles) {
  const text = read(file);
  for (const pattern of mojibakePatterns) {
    assert(!pattern.test(text), `${file} contains mojibake pattern ${pattern}`);
  }
}

const visibleAsciiFragments = [
  "Plaene",
  "Uebungen",
  "Uebung",
  "Geraete",
  "Geraet",
  "fuer",
  "Fuer",
  "oeffnen",
  "loeschen",
  "Zurueck",
  "Uebernehmen",
  "Aenderung",
  "auswaehlen",
  "hinzufuegen",
  "ueberspringen",
  "vollstaendig",
  "unvollstaendig",
  "ungueltig",
  "moeglich",
  "verfuegbar",
  "persoenlich",
  "Naechste",
  "Saetze",
  "Ruecken",
  "Ausfuehrung",
  "Eintraege",
  "regelmaessig",
  "enthaelt",
  "gueltig",
  "unterstuetzt"
  ,"Prioritaet"
  ,"Datenqualitaet"
  ,"Pruef"
  ,"pruef"
  ,"bestaet"
  ,"Intensitaet"
  ,"schwaecher"
  ,"geoeff"
  ,"Ueberspringen"
  ,"Qualitaet"
  ,"qualitaet"
  ,"Koerper"
  ,"koerper"
  ,"Ganzkoerper"
  ,"Ernaehr"
  ,"noetig"
  ,"geloescht"
  ,"Veraenderung"
  ,"Rueckseite"
  ,"Aufwaermen"
  ,"aufwaermen"
  ,"Ueber Ziel"
  ,"tatsaechliche"
  ,"Primaer"
  ,"muessen"
];

for (const fragment of visibleAsciiFragments) {
  assert(!app.includes(fragment), `app.js still contains visible ASCII replacement: ${fragment}`);
}

for (const file of productiveFiles.filter((item) => item.endsWith(".json") || item.endsWith(".webmanifest"))) {
  assert.doesNotThrow(() => JSON.parse(read(file)), `${file} must parse as JSON`);
}

assert(app.includes("Pläne"), "Pläne must use umlaut");
assert(app.includes("Übungen"), "Übungen must use umlaut");
assert(app.includes("Geräte"), "Geräte must use umlaut");
assert(app.includes("Nächste Übung"), "Nächste Übung must use umlaut");
assert(app.includes("Schlafqualität"), "Schlafqualität must use umlaut");
assert(app.includes("Überspringen"), "Überspringen must use umlaut");
assert(app.includes("Körperwerte"), "Körperwerte must use umlaut");
assert(app.includes("Zurück"), "Zurück must use umlaut");
assert(app.includes("Löschen"), "Löschen must use umlaut");
assert(app.includes("DCoach_MuscleCoverage_Diagnostics.json"), "diagnostic export must use stable filename");

console.log("v6.17.3 UTF-8 localization tests passed");
