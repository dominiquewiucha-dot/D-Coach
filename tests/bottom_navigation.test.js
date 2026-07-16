const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const sw = fs.readFileSync("sw.js", "utf8");

assert(app.includes('<div id="app-shell" class="app-shell">'), "app shell missing");
assert(app.includes('<main id="app-content" class="app-content">'), "app content main missing");
assert(app.includes('<nav id="bottom-nav" class="bottom-nav tabs"'), "bottom navigation class missing");
["Training", "Coach", "Dashboard", "Tracking"].forEach((label) => {
  assert(app.includes(`label: "${label}"`), `${label} tab missing`);
});
assert(app.includes('label: "Pl\\u00e4ne"'), "Plaene tab missing");
assert(app.indexOf('{ id: "training", label: "Training", icon: "dumbbell" }') < app.indexOf('{ id: "coach", label: "Coach", icon: "compass" }'), "training must be before coach");
assert(app.indexOf('{ id: "coach", label: "Coach", icon: "compass" }') < app.indexOf('{ id: "dashboard", label: "Dashboard", center: true }'), "coach must be before dashboard");
assert(app.indexOf('{ id: "dashboard", label: "Dashboard", center: true }') < app.indexOf('{ id: "plans", label: "Pl\\u00e4ne", icon: "calendar-list" }'), "dashboard must be centered before plans");
assert(app.indexOf('{ id: "plans", label: "Pl\\u00e4ne", icon: "calendar-list" }') < app.indexOf('{ id: "settings", label: "Tracking", icon: "activity-chart" }'), "plans must be before tracking");
assert(!app.includes("<span>Mehr</span>"), "Mehr tab must not be in primary bottom navigation");
assert(app.includes('tab.center ? "D" : iconSvg(tab.icon)'), "only center dashboard may render a letter");
assert(app.includes("function iconSvg(name)"), "local inline icon system missing");
assert(app.includes('class="screen stack coach-screen"'), "coach results screen must not use sticky workout header");
assert(app.includes("registerServiceWorker();"), "service worker update registration missing");
assert(app.includes('updateViaCache: "none"'), "service worker must bypass stale update cache");
assert(sw.includes('event.request.mode === "navigate"'), "service worker must use network-first app shell handling");
assert(sw.includes("SKIP_WAITING"), "service worker skip-waiting update path missing");
assert(css.includes(".bottom-nav,\n.tabs"), "bottom navigation selector missing");
assert(css.includes("position: fixed;"), "bottom navigation must be fixed");
assert(css.includes("z-index: 1000;"), "bottom navigation must stay above content");
assert(css.includes("transform: none;"), "bottom navigation transform must be disabled");
assert(css.includes("translate: none;"), "bottom navigation translate must be disabled");
assert(css.includes("min-height: 100dvh;"), "dynamic viewport height missing");
assert(css.includes("env(safe-area-inset-bottom)"), "safe area inset missing");
assert(css.includes("overflow-x: hidden;"), "content overflow boundary missing");
assert(css.includes(".tab-center-logo"), "center dashboard D styling missing");
assert(css.includes("--nav-center-size: 46px;"), "center tab size token missing");
assert(!/\.app-shell\s*\{[^}]*overflow\s*:\s*(auto|scroll)/s.test(css), "app shell must not scroll internally");
const bottomNavBlock = css.match(/\.bottom-nav,\n\.tabs\s*\{[^}]*\}/s)?.[0] || "";
assert(!bottomNavBlock.includes("position: sticky"), "bottom navigation must not be sticky");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("bottom navigation tests passed");
