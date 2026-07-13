const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");
const css = fs.readFileSync("styles.css", "utf8");

assert(app.includes('<div class="app-shell">'), "app shell missing");
assert(app.includes('<main class="app-content">'), "app content main missing");
assert(app.includes('<nav class="bottom-nav tabs"'), "bottom navigation class missing");
["Dashboard", "Training", "Coach", "Plaene", "Profil"].forEach((label) => {
  assert(app.includes(`"${label}"`), `${label} tab missing`);
});
assert(!app.includes("<span>Mehr</span>"), "Mehr tab must not be in primary bottom navigation");
assert(css.includes(".bottom-nav,\n.tabs"), "bottom navigation selector missing");
assert(css.includes("position: fixed;"), "bottom navigation must be fixed");
assert(css.includes("min-height: 100dvh;"), "dynamic viewport height missing");
assert(css.includes("env(safe-area-inset-bottom)"), "safe area inset missing");
assert(css.includes("overflow-x: hidden;"), "content overflow boundary missing");
assert(!/\.app-shell\s*\{[^}]*overflow\s*:\s*(auto|scroll)/s.test(css), "app shell must not scroll internally");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("bottom navigation tests passed");
