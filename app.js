const state = {
  seed: null,
  tab: "dashboard",
  activeWorkout: null,
  exerciseSearch: "",
  exerciseFilter: "all",
  selectedExerciseId: null,
  selectedSessionId: null,
  route: null
};

const storage = {
  get sessions() {
    return readJson("dcoach.sessions", []);
  },
  set sessions(value) {
    writeJson("dcoach.sessions", value);
  },
  get weights() {
    return readJson("dcoach.weights", []);
  },
  set weights(value) {
    writeJson("dcoach.weights", value);
  },
  get activePlanName() {
    return localStorage.getItem("dcoach.activePlanName") || null;
  },
  set activePlanName(value) {
    localStorage.setItem("dcoach.activePlanName", value);
  },
  get archivedPlanNames() {
    return readJson("dcoach.archivedPlanNames", []);
  },
  set archivedPlanNames(value) {
    writeJson("dcoach.archivedPlanNames", value);
  },
  get deletedPlanNames() {
    return readJson("dcoach.deletedPlanNames", []);
  },
  set deletedPlanNames(value) {
    writeJson("dcoach.deletedPlanNames", value);
  }
};

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

async function boot() {
  state.seed = await fetch("./seed_training_database.json").then((response) => response.json());
  const plan = activePlan();
  if (plan && storage.activePlanName !== plan.planName) {
    storage.activePlanName = plan.planName;
  }
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
  render();
}

function activePlan() {
  const plans = availablePlans().filter((plan) => !isPlanArchived(plan.planName));
  return plans.find((plan) => plan.planName === storage.activePlanName) || plans[0] || null;
}

function availablePlans() {
  return state.seed.trainingPlans.filter((plan) => !storage.deletedPlanNames.includes(plan.planName));
}

function isPlanArchived(planName) {
  return storage.archivedPlanNames.includes(planName);
}

function planStatus(plan) {
  if (isPlanArchived(plan.planName)) return "Archiviert";
  if (activePlan()?.planName === plan.planName) return "Aktiv";
  return "Bibliothek";
}

function ensureActivePlan() {
  const plan = activePlan();
  storage.activePlanName = plan?.planName || "";
}

function exerciseById(id) {
  return state.seed.exercises.find((exercise) => exercise.id === id);
}

function htmlesc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function kg(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "-";
  const rounded = Math.round(Number(value) * 10) / 10;
  return `${String(rounded).replace(".", ",")} kg`;
}

function parseNumber(value) {
  const parsed = Number(String(value ?? "").replace(",", "."));
  return Number.isFinite(parsed) ? parsed : null;
}

function parseInteger(value) {
  const parsed = Number.parseInt(String(value ?? ""), 10);
  return Number.isFinite(parsed) ? parsed : null;
}

function dateText(value) {
  return new Intl.DateTimeFormat("de-DE", { dateStyle: "short" }).format(new Date(value));
}

function averageWeight(days) {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - days + 1);
  const values = storage.weights.filter((entry) => new Date(entry.date) >= start).map((entry) => Number(entry.weightKg));
  if (!values.length) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function lastSession() {
  return [...storage.sessions].sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt))[0] || null;
}

function lastCompletedExercise(exerciseId) {
  const sessions = [...storage.sessions].sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt));
  for (const session of sessions) {
    const found = [...session.completedExercises].sort((a, b) => a.sortOrder - b.sortOrder).find((item) => item.exerciseId === exerciseId);
    if (found) return { session, exercise: found };
  }
  return null;
}

function exerciseHistory(exerciseId) {
  return [...storage.sessions]
    .sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt))
    .flatMap((session) => session.completedExercises
      .filter((exercise) => exercise.exerciseId === exerciseId)
      .map((exercise) => ({ session, exercise })));
}

function bestWeightForExercise(exerciseId) {
  const values = exerciseHistory(exerciseId)
    .flatMap((item) => item.exercise.sets)
    .map((set) => Number(set.actualWeightKg))
    .filter((value) => Number.isFinite(value));
  return values.length ? Math.max(...values) : null;
}

function bestVolumeForExercise(exerciseId) {
  const values = exerciseHistory(exerciseId).map((item) => totalVolume(item.exercise));
  return values.length ? Math.max(...values) : null;
}

function totalVolume(completedExercise) {
  return completedExercise.sets.reduce((sum, set) => sum + (Number(set.actualWeightKg) || 0) * (Number(set.actualReps) || 0), 0);
}

function sessionById(id) {
  return storage.sessions.find((session) => session.id === id) || null;
}

function sessionVolume(session) {
  return session.completedExercises.reduce((sum, exercise) => sum + totalVolume(exercise), 0);
}

function sessionSetCount(session) {
  return session.completedExercises.reduce((sum, exercise) => sum + exercise.sets.length, 0);
}

function sessionDurationMinutes(session) {
  const started = new Date(session.startedAt);
  const ended = new Date(session.endedAt || session.startedAt);
  return Math.max(1, Math.round((ended - started) / 60000));
}

function upperRepTarget(text) {
  const numbers = String(text || "").match(/\d+/g)?.map(Number) || [];
  return numbers.length ? Math.max(...numbers) : null;
}

function progressionHint(exercise, plannedReps, previousSets) {
  if (exerciseIsCritical(exercise)) {
    return "Nur schmerzfrei ausführen oder Alternative wählen.";
  }
  const target = upperRepTarget(plannedReps);
  if (!target || !previousSets?.length) {
    return "Sauber arbeiten und moderat starten.";
  }
  const allReached = previousSets.every((set) => Number(set.actualReps || 0) >= target);
  return allReached ? "Letztes Mal Ziel erreicht. Beim nächsten Mal leicht steigern." : "Gewicht beibehalten und Technik priorisieren.";
}

function lwsBadge(value) {
  const map = {
    suitable: ["LWS geeignet", "green"],
    conditionallySuitable: ["LWS vorsichtig", "amber"],
    notRecommended: ["Nicht empfohlen", "red"],
    avoidInitially: ["Anfangs vermeiden", "red"]
  };
  const [label, color] = map[value] || [value, "amber"];
  return `<span class="badge ${color}">${htmlesc(label)}</span>`;
}

function render() {
  document.getElementById("app").innerHTML = `
    <main class="app">
      ${renderRoute()}
      ${renderTabs()}
    </main>
  `;
  bindEvents();
}

function renderRoute() {
  if (!state.seed) return `<section class="screen"><h1 class="title">D-Coach</h1><p class="subtitle">Lade Daten...</p></section>`;
  if (state.activeWorkout) return renderWorkout();
  if (state.selectedExerciseId) return renderExerciseDetail(state.selectedExerciseId);
  if (state.selectedSessionId) return renderSessionDetail(state.selectedSessionId);
  switch (state.tab) {
    case "training": return renderTraining();
    case "plans": return renderPlans();
    case "exercises": return renderExercises();
    case "weight": return renderWeight();
    case "settings": return renderSettings();
    default: return renderDashboard();
  }
}

function renderTabs() {
  const tabs = [
    ["dashboard", "Dashboard"],
    ["training", "Training"],
    ["plans", "Pläne"],
    ["exercises", "Übungen"],
    ["weight", "Gewicht"],
    ["settings", "Setup"]
  ];
  return `<nav class="tabs">${tabs.map(([id, label]) => `<button class="tab ${state.tab === id && !state.activeWorkout && !state.selectedExerciseId && !state.selectedSessionId ? "active" : ""}" data-tab="${id}">${label}</button>`).join("")}</nav>`;
}

function renderDashboard() {
  const plan = activePlan();
  const latestWeight = [...storage.weights].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  const session = lastSession();
  const nextDay = plan?.days?.[0]?.name || "-";
  const latestSessions = [...storage.sessions].sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt)).slice(0, 3);
  return `
    <section class="screen stack">
      <header><h1 class="title">D-Coach</h1><p class="subtitle">Heute sauber trainieren.</p></header>
      ${plan ? `<article class="card stack">
        <p class="muted">Aktiver Plan</p>
        <h2>${htmlesc(plan.planName)}</h2>
        <p class="muted">Nächstes Training: ${htmlesc(nextDay)}</p>
        <button class="primary" data-tab="training">Training starten</button>
      </article>` : `<article class="card stack">
        <h2>Kein aktiver Plan</h2>
        <p class="muted">Aktiviere oder stelle einen Plan im Tab Pläne wieder her.</p>
        <button class="secondary" data-tab="plans">Zu den Plänen</button>
      </article>`}
      <div class="grid">
        ${metric(kg(latestWeight?.weightKg), "Aktuelles Gewicht")}
        ${metric(kg(averageWeight(7)), "7-Tage-Schnitt")}
        ${metric(session?.dayName || "-", "Letztes Training")}
        ${metric(String(storage.sessions.length), "Gespeicherte Einheiten")}
      </div>
      <article class="card">
        <h3>Hinweis</h3>
        <p class="muted">Bewerte nicht einzelne Tageswerte. Gewicht und Training zählen als Trend.</p>
      </article>
      <article class="card stack">
        <h3>Letzte Trainings</h3>
        ${latestSessions.length ? latestSessions.map((item) => `
          <button class="list-button" data-session-id="${htmlesc(item.id)}">
            <div class="history-row">
              <div>
                <strong>${htmlesc(item.dayName)}</strong>
                <p class="muted">${dateText(item.startedAt)} · ${item.completedExercises.length} Übungen · ${sessionSetCount(item)} Sätze</p>
              </div>
              <span class="badge blue">${Math.round(sessionVolume(item))} kg</span>
            </div>
          </button>
        `).join("") : `<p class="muted">Noch kein Training gespeichert.</p>`}
      </article>
    </section>
  `;
}

function metric(value, label) {
  return `<article class="card metric"><span class="metric-value">${htmlesc(value)}</span><span class="metric-label">${htmlesc(label)}</span></article>`;
}

function renderTraining() {
  const plan = activePlan();
  return `
    <section class="screen stack">
      <header><h1 class="title">Training</h1><p class="subtitle">${plan ? htmlesc(plan.planName) : "Kein aktiver Plan"}</p></header>
      ${plan ? plan.days.map((day) => `
        <button class="list-button" data-start-day="${htmlesc(day.name)}">
          <article class="card row">
            <div class="grow">
              <h2>${htmlesc(day.name)}</h2>
              <p class="muted">${day.exercises.length} Übungen · ${day.maxDurationMinutes} Minuten</p>
              <p class="quiet">${lastDayDate(day.name) || "Noch nicht trainiert"}</p>
            </div>
            <span class="badge blue">Start</span>
          </article>
        </button>
      `).join("") : `<article class="card stack">
        <h2>Kein Training verfügbar</h2>
        <p class="muted">Aktiviere zuerst einen Plan.</p>
        <button class="secondary" data-tab="plans">Plan auswählen</button>
      </article>`}
    </section>
  `;
}

function lastDayDate(dayName) {
  const session = storage.sessions.filter((item) => item.dayName === dayName).sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt))[0];
  return session ? `Letztes Mal: ${dateText(session.startedAt)}` : null;
}

function startDay(dayName) {
  const plan = activePlan();
  const day = plan.days.find((item) => item.name === dayName);
  state.activeWorkout = {
    planName: plan.planName,
    dayName: day.name,
    startedAt: new Date().toISOString(),
    index: 0,
    entries: day.exercises.sort((a, b) => a.sortOrder - b.sortOrder).map((planned) => {
      const last = lastCompletedExercise(planned.exerciseId);
      return {
        exerciseId: planned.exerciseId,
        reps: planned.reps,
        restSeconds: planned.restSeconds,
        priority: planned.priority,
        sortOrder: planned.sortOrder,
        sets: Array.from({ length: Math.max(planned.sets, 1) }, (_, index) => {
          const previous = last?.exercise?.sets?.find((set) => set.setNumber === index + 1);
          return {
            setNumber: index + 1,
            weightText: previous?.actualWeightKg ? String(previous.actualWeightKg).replace(".", ",") : "",
            repsText: "",
            rirText: "",
            completed: false
          };
        })
      };
    })
  };
  render();
}

function renderWorkout() {
  const workout = state.activeWorkout;
  const entry = workout.entries[workout.index];
  const exercise = exerciseById(entry.exerciseId);
  const last = lastCompletedExercise(entry.exerciseId);
  const progress = Math.round(((workout.index + 1) / workout.entries.length) * 100);
  const hint = progressionHint(exercise, entry.reps, last?.exercise?.sets || []);
  return `
    <section class="screen stack">
      <header>
        <h1 class="title">${htmlesc(workout.dayName)}</h1>
        <p class="subtitle">Übung ${workout.index + 1} von ${workout.entries.length}</p>
      </header>
      <div class="progress"><span style="width:${progress}%"></span></div>
      <article class="card stack">
        <h2>${htmlesc(exercise.displayName)}</h2>
        <p class="muted">${htmlesc([...exercise.primaryMuscleGroups, ...exercise.secondaryMuscleGroups].slice(0, 3).join(" · "))}</p>
        <div class="row">${lwsBadge(exercise.lumbarDiscSuitability)} <span class="badge blue">${htmlesc(entry.reps)} Wdh.</span> <span class="badge">${entry.restSeconds} s Pause</span></div>
        ${exerciseIsCritical(exercise) ? `<div class="card warning">${lwsWarning(exercise)}</div>` : ""}
      </article>
      <article class="card stack">
        <h3>Letzte Leistung</h3>
        ${last ? `
          <p class="muted">Letztes Mal am ${dateText(last.session.endedAt || last.session.startedAt)}</p>
          <ul class="small-list">${last.exercise.sets.map((set) => `<li>Satz ${set.setNumber}: ${kg(set.actualWeightKg)} x ${set.actualReps || "-"}</li>`).join("")}</ul>
          <p class="green">Volumen: ${Math.round(totalVolume(last.exercise) * 10) / 10} kg</p>
        ` : `<p class="muted">Noch keine vorherige Leistung vorhanden. Starte moderat.</p>`}
        <div class="card info-card">${htmlesc(hint)}</div>
      </article>
      <article class="card stack">
        <div class="row"><h3 class="grow">Sätze</h3><span class="quiet">kg · Wdh. · RIR</span></div>
        ${entry.sets.map((set, index) => renderSetRow(set, index)).join("")}
      </article>
      <div class="actions">
        <button class="secondary" data-alternatives>Alternative anzeigen</button>
        <button class="primary" data-next-exercise>${workout.index < workout.entries.length - 1 ? "Nächste Übung" : "Training speichern"}</button>
        <button class="secondary" data-cancel-workout>Training abbrechen</button>
      </div>
    </section>
  `;
}

function renderSetRow(set, index) {
  return `
    <div class="set-row ${set.completed ? "done" : ""}">
      <strong>${set.setNumber}</strong>
      <input inputmode="decimal" placeholder="kg" value="${htmlesc(set.weightText)}" data-set="${index}" data-field="weightText">
      <input inputmode="numeric" placeholder="Wdh." value="${htmlesc(set.repsText)}" data-set="${index}" data-field="repsText">
      <input inputmode="numeric" placeholder="RIR" value="${htmlesc(set.rirText)}" data-set="${index}" data-field="rirText">
      <button class="check ${set.completed ? "done" : ""}" data-check-set="${index}">${set.completed ? "✓" : ""}</button>
    </div>
  `;
}

function exerciseIsCritical(exercise) {
  return ["conditionallySuitable", "notRecommended", "avoidInitially"].includes(exercise.lumbarDiscSuitability);
}

function lwsWarning(exercise) {
  let text = "Diese Übung kann die Lendenwirbelsäule stärker belasten. Wenn du Schmerzen hast, wähle eine Alternative.";
  if (exercise.lumbarDiscSuitability === "avoidInitially") text += " Für den Wiedereinstieg zunächst besser vermeiden.";
  return htmlesc(text);
}

function showAlternatives() {
  const workout = state.activeWorkout;
  const entry = workout.entries[workout.index];
  const exercise = exerciseById(entry.exerciseId);
  const alternatives = exercise.alternatives.map(exerciseById).filter(Boolean);
  if (!alternatives.length) {
    alert("Keine Alternative hinterlegt.");
    return;
  }
  const labels = alternatives.map((item, index) => `${index + 1}. ${item.displayName}`).join("\n");
  const choice = prompt(`Alternative wählen:\n${labels}`);
  const selected = alternatives[Number(choice) - 1];
  if (!selected) return;
  entry.exerciseId = selected.id;
  const last = lastCompletedExercise(selected.id);
  entry.sets.forEach((set) => {
    const previous = last?.exercise?.sets?.find((item) => item.setNumber === set.setNumber);
    set.weightText = previous?.actualWeightKg ? String(previous.actualWeightKg).replace(".", ",") : "";
    set.repsText = "";
    set.rirText = "";
    set.completed = false;
  });
  render();
}

function finishOrNext() {
  const workout = state.activeWorkout;
  if (workout.index < workout.entries.length - 1) {
    workout.index += 1;
    render();
    return;
  }
  const session = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    planName: workout.planName,
    dayName: workout.dayName,
    startedAt: workout.startedAt,
    endedAt: new Date().toISOString(),
    completedExercises: workout.entries.map((entry) => {
      const exercise = exerciseById(entry.exerciseId);
      return {
        exerciseId: entry.exerciseId,
        exerciseNameSnapshot: exercise?.displayName || entry.exerciseId,
        sortOrder: entry.sortOrder,
        sets: entry.sets.map((set) => ({
          setNumber: set.setNumber,
          actualWeightKg: parseNumber(set.weightText),
          plannedReps: entry.reps,
          actualReps: parseInteger(set.repsText),
          rir: parseInteger(set.rirText),
          completed: set.completed
        }))
      };
    })
  };
  storage.sessions = [...storage.sessions, session];
  state.activeWorkout = null;
  state.selectedSessionId = session.id;
  state.tab = "dashboard";
  render();
}

function renderSessionDetail(id) {
  const session = sessionById(id);
  if (!session) {
    return `
      <section class="screen stack">
        <button class="secondary" data-back-dashboard>Zurück</button>
        <article class="card"><p class="muted">Training nicht gefunden.</p></article>
      </section>
    `;
  }
  return `
    <section class="screen stack">
      <button class="secondary" data-back-dashboard>Zurück</button>
      <header>
        <h1 class="title">Auswertung</h1>
        <p class="subtitle">${htmlesc(session.dayName)} · ${dateText(session.startedAt)}</p>
      </header>
      <div class="grid">
        ${metric(String(sessionDurationMinutes(session)), "Minuten")}
        ${metric(String(session.completedExercises.length), "Übungen")}
        ${metric(String(sessionSetCount(session)), "Sätze")}
        ${metric(`${Math.round(sessionVolume(session))} kg`, "Volumen")}
      </div>
      ${session.completedExercises.sort((a, b) => a.sortOrder - b.sortOrder).map((exercise) => `
        <article class="card stack">
          <h3>${htmlesc(exercise.exerciseNameSnapshot)}</h3>
          <ul class="small-list">
            ${exercise.sets.map((set) => `<li>Satz ${set.setNumber}: ${kg(set.actualWeightKg)} x ${set.actualReps || "-"}${set.rir !== null && set.rir !== undefined ? ` · RIR ${set.rir}` : ""}</li>`).join("")}
          </ul>
          <p class="green">Volumen: ${Math.round(totalVolume(exercise))} kg</p>
        </article>
      `).join("")}
      <button class="danger" data-delete-session="${htmlesc(session.id)}">Training löschen</button>
    </section>
  `;
}

function renderPlans() {
  const plans = availablePlans();
  const deletedCount = storage.deletedPlanNames.length;
  return `
    <section class="screen stack">
      <header><h1 class="title">Pläne</h1><p class="subtitle">Aktiver Plan und Bibliothek.</p></header>
      ${plans.length ? plans.map((plan) => `
        <article class="card stack">
          <h2>${htmlesc(plan.planName)}</h2>
          <p class="muted">${htmlesc(plan.description)}</p>
          <p>${plan.days.length} Tage · ${Math.max(...plan.days.map((day) => day.maxDurationMinutes))} Minuten</p>
          <span class="badge ${planStatus(plan) === "Aktiv" ? "green" : isPlanArchived(plan.planName) ? "amber" : ""}">${planStatus(plan)}</span>
          <div class="button-row">
            ${!isPlanArchived(plan.planName) ? `<button class="secondary" data-activate-plan="${htmlesc(plan.planName)}">Aktivieren</button>` : ""}
            ${isPlanArchived(plan.planName)
              ? `<button class="secondary" data-unarchive-plan="${htmlesc(plan.planName)}">Wiederherstellen</button>`
              : `<button class="secondary" data-archive-plan="${htmlesc(plan.planName)}">Archivieren</button>`}
          </div>
          <button class="danger" data-delete-plan="${htmlesc(plan.planName)}">Plan löschen</button>
        </article>
      `).join("") : `<article class="card stack">
        <h2>Keine Pläne</h2>
        <p class="muted">Alle Pläne wurden gelöscht. Trainingshistorie bleibt erhalten.</p>
      </article>`}
      ${deletedCount ? `<article class="card stack">
        <h3>Gelöschte Pläne</h3>
        <p class="muted">${deletedCount} Plan/Pläne ausgeblendet.</p>
        <button class="secondary" data-restore-plans>Gelöschte Pläne wiederherstellen</button>
      </article>` : ""}
    </section>
  `;
}

function renderExercises() {
  const needle = state.exerciseSearch.trim().toLowerCase();
  const filters = [
    ["all", "Alle"],
    ["Brust", "Brust"],
    ["Rücken", "Rücken"],
    ["Beine", "Beine"],
    ["Schulter", "Schulter"],
    ["Core", "Core"],
    ["lws", "LWS-freundlich"]
  ];
  const exercises = state.seed.exercises.filter((exercise) => {
    const haystack = `${exercise.displayName} ${exercise.aliases.join(" ")} ${exercise.primaryMuscleGroups.join(" ")} ${exercise.secondaryMuscleGroups.join(" ")} ${exercise.tags.join(" ")}`.toLowerCase();
    const matchesSearch = !needle || haystack.includes(needle);
    const matchesFilter = state.exerciseFilter === "all"
      || (state.exerciseFilter === "lws" && exercise.lumbarDiscSuitability === "suitable")
      || haystack.includes(state.exerciseFilter.toLowerCase());
    return matchesSearch && matchesFilter;
  }).sort((a, b) => a.displayName.localeCompare(b.displayName, "de"));
  return `
    <section class="screen stack">
      <header><h1 class="title">Übungen</h1><p class="subtitle">${exercises.length} Einträge</p></header>
      <div class="search stack">
        <input class="input" placeholder="Übung suchen" value="${htmlesc(state.exerciseSearch)}" data-search-exercise>
        <div class="chip-row">
          ${filters.map(([id, label]) => `<button class="chip ${state.exerciseFilter === id ? "active" : ""}" data-exercise-filter="${htmlesc(id)}">${htmlesc(label)}</button>`).join("")}
        </div>
      </div>
      ${exercises.map((exercise) => `
        <button class="list-button" data-exercise-id="${htmlesc(exercise.id)}">
          <article class="card stack">
            <h3>${htmlesc(exercise.displayName)}</h3>
            <p class="muted">${htmlesc(exercise.primaryMuscleGroups.join(", "))} · ${htmlesc(exercise.equipment.join(", "))}</p>
            <div class="row">${lwsBadge(exercise.lumbarDiscSuitability)} ${bestWeightForExercise(exercise.id) ? `<span class="badge blue">Best: ${kg(bestWeightForExercise(exercise.id))}</span>` : ""}</div>
          </article>
        </button>
      `).join("")}
    </section>
  `;
}

function renderExerciseDetail(id) {
  const exercise = exerciseById(id);
  const last = lastCompletedExercise(id);
  const history = exerciseHistory(id);
  const alternatives = exercise.alternatives.map(exerciseById).filter(Boolean);
  return `
    <section class="screen stack">
      <button class="secondary" data-back-exercises>Zurück</button>
      <header><h1 class="title">${htmlesc(exercise.displayName)}</h1><p class="subtitle">${htmlesc(exercise.movementPattern)}</p></header>
      <article class="card stack">
        <p>${htmlesc([...exercise.primaryMuscleGroups, ...exercise.secondaryMuscleGroups].join(" · "))}</p>
        <p class="muted">${htmlesc(exercise.equipment.join(" · "))}</p>
        ${lwsBadge(exercise.lumbarDiscSuitability)}
      </article>
      ${exerciseIsCritical(exercise) ? `<article class="card warning">${lwsWarning(exercise)}</article>` : ""}
      <div class="grid">
        ${metric(kg(bestWeightForExercise(id)), "Bestgewicht")}
        ${metric(bestVolumeForExercise(id) ? `${Math.round(bestVolumeForExercise(id))} kg` : "-", "Bestes Volumen")}
      </div>
      <article class="card stack"><h3>Ausführung</h3><p class="muted">${htmlesc(exercise.techniqueNotes || "Keine Technikhinweise hinterlegt.")}</p></article>
      <article class="card stack"><h3>Häufige Fehler</h3><ul class="small-list">${exercise.commonMistakes.map((item) => `<li>${htmlesc(item)}</li>`).join("")}</ul></article>
      <article class="card stack"><h3>Letzte Leistung</h3>${last ? `<p class="muted">Letztes Mal am ${dateText(last.session.endedAt || last.session.startedAt)}</p><ul class="small-list">${last.exercise.sets.map((set) => `<li>Satz ${set.setNumber}: ${kg(set.actualWeightKg)} x ${set.actualReps || "-"}</li>`).join("")}</ul>` : `<p class="muted">Noch keine vorherige Leistung vorhanden.</p>`}</article>
      <article class="card stack">
        <h3>Verlauf</h3>
        ${history.length ? history.slice(0, 3).map((item) => `
          <div class="history-row">
            <div>
              <strong>${dateText(item.session.startedAt)}</strong>
              <p class="muted">${item.exercise.sets.map((set) => `${kg(set.actualWeightKg)} x ${set.actualReps || "-"}`).join(" · ")}</p>
            </div>
            <span class="badge blue">${Math.round(totalVolume(item.exercise))} kg</span>
          </div>
        `).join("") : `<p class="muted">Noch kein Verlauf gespeichert.</p>`}
      </article>
      <article class="card stack"><h3>Alternativen</h3>${alternatives.length ? alternatives.map((item) => `<p>${htmlesc(item.displayName)}</p>`).join("") : `<p class="muted">Keine Alternativen hinterlegt.</p>`}</article>
    </section>
  `;
}

function renderWeight() {
  const entries = [...storage.weights].sort((a, b) => new Date(b.date) - new Date(a.date));
  return `
    <section class="screen stack">
      <header><h1 class="title">Gewicht</h1><p class="subtitle">Trend statt Tagesrauschen.</p></header>
      <div class="grid">
        ${metric(kg(entries[0]?.weightKg), "Aktuell")}
        ${metric(kg(averageWeight(7)), "7-Tage-Schnitt")}
        ${metric(kg(averageWeight(30)), "30-Tage-Schnitt")}
        ${metric(String(entries.length), "Einträge")}
      </div>
      <article class="card stack">
        <h3>Heutiges Gewicht</h3>
        <input class="input big" inputmode="decimal" placeholder="kg" data-weight-input>
        <button class="primary" data-save-weight>Gewicht speichern</button>
      </article>
      ${entries.length ? entries.map((entry) => `
        <article class="card row">
          <div class="grow"><h3>${kg(entry.weightKg)}</h3><p class="muted">${dateText(entry.date)}</p></div>
          <div class="compact-actions">
            <button class="secondary" data-edit-weight="${htmlesc(entry.id)}">Bearbeiten</button>
            <button class="danger" data-delete-weight="${htmlesc(entry.id)}">Löschen</button>
          </div>
        </article>
      `).join("") : `<article class="card"><p class="muted">Noch kein Gewicht eingetragen.</p></article>`}
    </section>
  `;
}

function renderSettings() {
  return `
    <section class="screen stack">
      <header><h1 class="title">Einstellungen</h1><p class="subtitle">Lokale Offline-Daten.</p></header>
      <article class="card stack">
        <h3>Aktiver Plan</h3>
        <p class="muted">${htmlesc(activePlan()?.planName || "Kein aktiver Plan")}</p>
        <button class="secondary" data-reset-plan-library>Planbibliothek wiederherstellen</button>
      </article>
      <article class="card stack">
        <h3>Backup</h3>
        <p class="muted">Exportiere regelmäßig deine Trainingsdaten. GitHub speichert deine Fortschritte nicht.</p>
        <button class="primary" data-export-backup>Backup exportieren</button>
        <label class="secondary file-label">
          Backup importieren
          <input type="file" accept="application/json,.json" data-import-backup>
        </label>
      </article>
      <article class="card stack">
        <h3>Zurücksetzen</h3>
        <p class="muted">Löscht nur die lokalen Trainings- und Gewichtsdaten auf diesem Gerät.</p>
        <button class="danger" data-reset-app>App-Daten zurücksetzen</button>
      </article>
    </section>
  `;
}

function createBackup() {
  return {
    app: "D-Coach",
    schemaVersion: 1,
    exportedAt: new Date().toISOString(),
    activePlanName: storage.activePlanName,
    sessions: storage.sessions,
    weights: storage.weights,
    archivedPlanNames: storage.archivedPlanNames,
    deletedPlanNames: storage.deletedPlanNames
  };
}

function exportBackup() {
  const backup = createBackup();
  const json = JSON.stringify(backup, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const date = new Date().toISOString().slice(0, 10);
  const link = document.createElement("a");
  link.href = url;
  link.download = `d-coach-backup-${date}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function validateBackup(backup) {
  if (!backup || typeof backup !== "object") return "Backup-Datei ist ungültig.";
  if (backup.app !== "D-Coach") return "Diese Datei ist kein D-Coach-Backup.";
  if (backup.schemaVersion !== 1) return "Diese Backup-Version wird nicht unterstützt.";
  if (!Array.isArray(backup.sessions)) return "Backup enthält keine gültigen Trainingsdaten.";
  if (!Array.isArray(backup.weights)) return "Backup enthält keine gültigen Gewichtsdaten.";
  return null;
}

function importBackupFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const backup = JSON.parse(String(reader.result || ""));
      const error = validateBackup(backup);
      if (error) {
        alert(error);
        return;
      }
      const message = [
        "Backup importieren?",
        "",
        `Trainings: ${backup.sessions.length}`,
        `Gewichtseinträge: ${backup.weights.length}`,
        "",
        "Die lokalen Daten auf diesem Gerät werden ersetzt."
      ].join("\n");
      if (!confirm(message)) return;
      storage.sessions = backup.sessions;
      storage.weights = backup.weights;
      storage.archivedPlanNames = Array.isArray(backup.archivedPlanNames) ? backup.archivedPlanNames : [];
      storage.deletedPlanNames = Array.isArray(backup.deletedPlanNames) ? backup.deletedPlanNames : [];
      if (backup.activePlanName) storage.activePlanName = backup.activePlanName;
      ensureActivePlan();
      alert("Backup importiert.");
      render();
    } catch {
      alert("Backup konnte nicht gelesen werden.");
    }
  };
  reader.readAsText(file);
}

function bindEvents() {
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tab = button.dataset.tab;
      state.activeWorkout = null;
      state.selectedExerciseId = null;
      state.selectedSessionId = null;
      render();
    });
  });

  document.querySelectorAll("[data-start-day]").forEach((button) => {
    button.addEventListener("click", () => startDay(button.dataset.startDay));
  });

  document.querySelectorAll("[data-set]").forEach((input) => {
    input.addEventListener("input", () => {
      const entry = state.activeWorkout.entries[state.activeWorkout.index];
      entry.sets[Number(input.dataset.set)][input.dataset.field] = input.value;
    });
  });

  document.querySelectorAll("[data-check-set]").forEach((button) => {
    button.addEventListener("click", () => {
      const entry = state.activeWorkout.entries[state.activeWorkout.index];
      const set = entry.sets[Number(button.dataset.checkSet)];
      set.completed = !set.completed;
      render();
    });
  });

  document.querySelector("[data-next-exercise]")?.addEventListener("click", finishOrNext);
  document.querySelector("[data-alternatives]")?.addEventListener("click", showAlternatives);
  document.querySelector("[data-cancel-workout]")?.addEventListener("click", () => {
    if (confirm("Training wirklich abbrechen?")) {
      state.activeWorkout = null;
      render();
    }
  });

  document.querySelectorAll("[data-activate-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      storage.archivedPlanNames = storage.archivedPlanNames.filter((name) => name !== button.dataset.activatePlan);
      storage.activePlanName = button.dataset.activatePlan;
      render();
    });
  });

  document.querySelectorAll("[data-archive-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const planName = button.dataset.archivePlan;
      storage.archivedPlanNames = [...new Set([...storage.archivedPlanNames, planName])];
      if (storage.activePlanName === planName) ensureActivePlan();
      render();
    });
  });

  document.querySelectorAll("[data-unarchive-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const planName = button.dataset.unarchivePlan;
      storage.archivedPlanNames = storage.archivedPlanNames.filter((name) => name !== planName);
      if (!activePlan()) storage.activePlanName = planName;
      render();
    });
  });

  document.querySelectorAll("[data-delete-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const planName = button.dataset.deletePlan;
      if (!confirm("Trainingsplan wirklich löschen? Deine gespeicherten Trainingseinheiten bleiben erhalten.")) return;
      storage.deletedPlanNames = [...new Set([...storage.deletedPlanNames, planName])];
      storage.archivedPlanNames = storage.archivedPlanNames.filter((name) => name !== planName);
      if (storage.activePlanName === planName) ensureActivePlan();
      render();
    });
  });

  document.querySelector("[data-restore-plans]")?.addEventListener("click", () => {
    storage.deletedPlanNames = [];
    ensureActivePlan();
    render();
  });

  document.querySelector("[data-search-exercise]")?.addEventListener("input", (event) => {
    state.exerciseSearch = event.target.value;
    render();
  });

  document.querySelectorAll("[data-exercise-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.exerciseFilter = button.dataset.exerciseFilter;
      render();
    });
  });

  document.querySelectorAll("[data-exercise-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedExerciseId = button.dataset.exerciseId;
      render();
    });
  });

  document.querySelector("[data-back-exercises]")?.addEventListener("click", () => {
    state.selectedExerciseId = null;
    state.tab = "exercises";
    render();
  });

  document.querySelectorAll("[data-session-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedSessionId = button.dataset.sessionId;
      state.selectedExerciseId = null;
      render();
    });
  });

  document.querySelector("[data-back-dashboard]")?.addEventListener("click", () => {
    state.selectedSessionId = null;
    state.tab = "dashboard";
    render();
  });

  document.querySelector("[data-delete-session]")?.addEventListener("click", (event) => {
    if (!confirm("Training wirklich löschen?")) return;
    storage.sessions = storage.sessions.filter((session) => session.id !== event.currentTarget.dataset.deleteSession);
    state.selectedSessionId = null;
    state.tab = "dashboard";
    render();
  });

  document.querySelector("[data-save-weight]")?.addEventListener("click", () => {
    const input = document.querySelector("[data-weight-input]");
    const value = parseNumber(input.value);
    if (!value || value <= 0) {
      alert("Bitte gültiges Gewicht eingeben.");
      return;
    }
    const today = new Date();
    const todayKey = today.toISOString().slice(0, 10);
    const entries = storage.weights.filter((entry) => String(entry.date).slice(0, 10) !== todayKey);
    entries.push({ id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), date: today.toISOString(), weightKg: value });
    storage.weights = entries;
    render();
  });

  document.querySelectorAll("[data-delete-weight]").forEach((button) => {
    button.addEventListener("click", () => {
      storage.weights = storage.weights.filter((entry) => entry.id !== button.dataset.deleteWeight);
      render();
    });
  });

  document.querySelectorAll("[data-edit-weight]").forEach((button) => {
    button.addEventListener("click", () => {
      const entry = storage.weights.find((item) => item.id === button.dataset.editWeight);
      if (!entry) return;
      const value = prompt("Gewicht bearbeiten", String(entry.weightKg).replace(".", ","));
      if (value === null) return;
      const parsed = parseNumber(value);
      if (!parsed || parsed <= 0) {
        alert("Bitte gültiges Gewicht eingeben.");
        return;
      }
      storage.weights = storage.weights.map((item) => item.id === entry.id ? { ...item, weightKg: parsed } : item);
      render();
    });
  });

  document.querySelector("[data-export-backup]")?.addEventListener("click", exportBackup);

  document.querySelector("[data-import-backup]")?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (file) importBackupFile(file);
    event.target.value = "";
  });

  document.querySelector("[data-reset-plan-library]")?.addEventListener("click", () => {
    storage.archivedPlanNames = [];
    storage.deletedPlanNames = [];
    ensureActivePlan();
    render();
  });

  document.querySelector("[data-reset-app]")?.addEventListener("click", () => {
    if (!confirm("Alle Trainings- und Gewichtsdaten löschen?")) return;
    storage.sessions = [];
    storage.weights = [];
    render();
  });
}

boot().catch((error) => {
  document.getElementById("app").innerHTML = `<section class="screen"><h1 class="title">D-Coach</h1><p class="subtitle">Fehler: ${htmlesc(error.message)}</p></section>`;
});
