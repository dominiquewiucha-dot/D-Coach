const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const schema = JSON.parse(fs.readFileSync("data/daily_checkin_schema_v6.13.0.json", "utf8"));

assert(app.includes("dcoach.dailyCheckins"), "daily checkins storage key missing");
assert(app.includes("dcoach.dailyCheckinDraft"), "daily checkin draft storage key missing");
assert(app.includes("function localIsoDate"), "local day boundary helper missing");
assert(app.includes("function dailyCheckinStartupState"), "startup state helper missing");
assert(app.includes("function maybeOpenDailyCheckin"), "automatic morning flow trigger missing");
assert(app.includes("function renderDailyCheckinFlow"), "morning flow renderer missing");
assert(app.includes("function renderDailyCheckinSleepStep"), "sleep step missing");
assert(app.includes("function renderDailyCheckinPainStep"), "pain step missing");
assert(app.includes("function renderDailyCheckinWeightStep"), "weight step missing");
assert(app.includes("function completeDailyCheckin"), "complete flow missing");
assert(app.includes("function skipDailyCheckin"), "skip flow missing");
assert(app.includes("upsertWeightFromDailyCheckin"), "weight must use existing weight store");
assert(app.includes("upsertJournalFromDailyCheckin"), "journal integration missing");
assert(app.includes("renderDailyCheckinDashboardCard"), "dashboard card missing");
assert(app.includes("dailyCheckins: storage.dailyCheckins"), "backup export missing daily checkins");
assert(app.includes("storage.dailyCheckins = mergeById"), "backup import missing daily checkins");
assert(css.includes(".daily-checkin-shell"), "daily checkin shell styles missing");
assert(css.includes(".pain-region-grid"), "pain region styles missing");
assert(schema.storageKeys.includes("dcoach.dailyCheckins"), "schema missing daily checkin storage key");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

console.log("v6.13 daily checkin tests passed");
