const fs = require("fs");

const app = fs.readFileSync("app.js", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const html = fs.readFileSync("index.html", "utf8");
const sw = fs.readFileSync("sw.js", "utf8");

assert(app.includes('const APP_VERSION = "pwa-v85";'), "app version must be pwa-v85");
assert(app.includes('const APP_CACHE_VERSION = "dcoach-pwa-v86";'), "app cache version must be dcoach-pwa-v86");
assert(sw.includes('const CACHE_NAME = "dcoach-pwa-v86";'), "service worker cache must be pwa-v86");
assert(html.includes("app.js?v=pwa-v85"), "app cache buster must be pwa-v85");
assert(html.includes("styles.css?v=pwa-v85"), "style cache buster must be pwa-v85");

assert(app.includes('<main id="app-content" class="app-content">'), "app content missing");
assert(app.includes('<nav id="bottom-nav" class="bottom-nav tabs"'), "bottom nav must be outside screen content");
assert(app.indexOf('<main id="app-content" class="app-content">') < app.indexOf('<nav id="bottom-nav" class="bottom-nav tabs"'), "bottom nav must render after main content");
assert(!app.includes('style.transform =') && !app.includes('style.translate ='), "bottom nav must not be moved by inline JS transforms");

const navBlock = css.match(/\.bottom-nav,\n\.tabs\s*\{[^}]*\}/s)?.[0] || "";
assert(navBlock.includes("position: fixed;"), "bottom nav must be fixed");
assert(navBlock.includes("height: calc(var(--bottom-nav-height) + var(--safe-bottom));"), "bottom nav must use fixed viewport height");
assert(navBlock.includes("min-height: 0;"), "bottom nav must not expand vertically");
assert(navBlock.includes("left: 0;"), "bottom nav left lock missing");
assert(navBlock.includes("right: 0;"), "bottom nav right lock missing");
assert(navBlock.includes("bottom: 0;"), "bottom nav bottom lock missing");
assert(navBlock.includes("top: auto;"), "bottom nav must not keep a top offset");
assert(navBlock.includes("transform: none;"), "bottom nav transform must be disabled");
assert(navBlock.includes("translate: none;"), "bottom nav translate must be disabled");
assert(navBlock.includes("var(--safe-bottom)"), "bottom nav safe-area token missing");
assert(css.includes("--safe-bottom: env(safe-area-inset-bottom, 0px);"), "safe bottom token missing");
assert(/\.app-content\s*\{[^}]*padding-bottom:\s*calc\(var\(--bottom-nav-height\) \+ var\(--safe-bottom\) \+ 32px\);/s.test(css), "content padding must reserve nav height and safe area");
assert(!/\.bottom-nav,\n\.tabs\s*\{[^}]*position:\s*sticky/s.test(css), "bottom nav must not be sticky");
assert(!/\.app-content\s*\{[^}]*overflow\s*:\s*(auto|scroll|hidden)/s.test(css), "app content must not be nested scroll container");

[
  "function captureBottomNavigationDiagnostics()",
  "duplicateNavCount",
  "transformedAncestor",
  "scrollAncestor",
  "nav_keyboard_open_close",
  "nav_musclemap_scroll",
  "nav_workout_scroll",
  "nav_background_resume",
  "data-device-validation-status"
].forEach((needle) => assert(app.includes(needle), `${needle} missing`));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("bottom navigation viewport lock tests passed");
