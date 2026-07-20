const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");
const css = fs.readFileSync("styles.css", "utf8");

assert(app.includes("function navigateTo(tab, options = {})"), "v6.11 requires a central navigateTo function");
assert(/function navigateTo\(tab, options = \{\}\)\s*\{\s*const \{\s*scroll = "top",\s*updateHash = true,\s*resetSelection = true\s*\} = options;/s.test(app), "navigateTo options missing");
assert(app.includes("requestAnimationFrame(() => requestAnimationFrame(reset))"), "scroll reset must run after the final render frame");
assert(app.includes("window.history.scrollRestoration = \"manual\""), "Safari/browser scroll restoration must be disabled");
assert(app.includes('<main id="app-content" class="app-content">'), "app content needs a deterministic scroll target");
assert(app.includes('<nav id="bottom-nav" class="bottom-nav tabs"'), "bottom nav needs a stable viewport target");
assert(!/\.app-content\s*\{[^}]*overflow\s*:\s*(auto|scroll|hidden)/s.test(css), "app content must not create a nested vertical scroll container");
assert(/\.bottom-nav,\n\.tabs\s*\{[^}]*position:\s*fixed;[^}]*z-index:\s*1000;[^}]*transform:\s*none;[^}]*translate:\s*none;/s.test(css), "bottom navigation must be fixed and transform-free");
assert(!/\.app-shell\s*\{[^}]*transform\s*:/s.test(css), "app shell must not transform fixed navigation");
assert(!/\.app-shell\s*\{[^}]*contain:\s*paint/s.test(css), "app shell must not contain fixed navigation painting");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("v6.11 navigation reliability tests passed");
