const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");
const css = fs.readFileSync("styles.css", "utf8");

assert(app.includes("function navigateTo(tab, options = {})"), "central navigateTo function missing");
assert(app.includes("function navigateToTab(tab, options = {})"), "tab navigation wrapper missing");
assert(app.includes("function resetPageScroll()"), "scroll reset helper missing");
assert(app.includes("requestAnimationFrame(() => requestAnimationFrame(reset))"), "scroll reset must wait for final layout");
assert(app.includes("window.scrollTo({ top: 0, left: 0, behavior: \"auto\" })"), "tab navigation must reset scroll");
assert(app.includes("document.getElementById(\"app-content\")"), "app content scroll fallback missing");
assert(app.includes("window.history.scrollRestoration = \"manual\""), "browser scroll restoration must be manual");
assert(app.includes("document.activeElement?.blur?.()"), "tab navigation must release focused/touch target");
assert(app.includes("navigateToTab(button.dataset.tab)"), "data-tab buttons must use central navigation");
assert(app.includes("navigateTo(tab, { updateHash: false })"), "hash navigation must use central navigation");
assert(/\.muscle-map-screen\s*\{\r?\n\s*padding-bottom/.test(css), "muscle map screen rule missing");
assert(!/\.app-content\s*\{[^}]*overflow\s*:\s*(auto|scroll|hidden)/s.test(css), "app content must not become a nested iOS scroll container");
assert(!/\.app-content\s*\{[^}]*100vh/s.test(css), "app content must not use static 100vh");
assert(css.includes("touch-action: pan-y;"), "vertical touch pan must be enabled");
assert(css.includes(".production-muscle-map canvas") && css.includes("touch-action: pan-y;"), "muscle map canvas must allow page scroll gestures");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("scroll navigation tests passed");
