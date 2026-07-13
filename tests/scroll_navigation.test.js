const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");
const css = fs.readFileSync("styles.css", "utf8");

assert(app.includes("function navigateToTab(tab)"), "central tab navigation missing");
assert(app.includes("function resetPageScroll()"), "scroll reset helper missing");
assert(app.includes("window.scrollTo({ top: 0, left: 0, behavior: \"auto\" })"), "tab navigation must reset scroll");
assert(app.includes("document.activeElement?.blur?.()"), "tab navigation must release focused/touch target");
assert(app.includes("navigateToTab(button.dataset.tab)"), "data-tab buttons must use central navigation");
assert(css.includes(".muscle-map-screen {\n  padding-bottom"), "muscle map screen rule missing");
assert(css.includes("touch-action: pan-y;"), "vertical touch pan must be enabled");
assert(css.includes(".production-muscle-map canvas") && css.includes("touch-action: pan-y;"), "muscle map canvas must allow page scroll gestures");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("scroll navigation tests passed");
