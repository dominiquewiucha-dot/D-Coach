const DATA_URLS = {
  adapter: "./data/musclemapjs_dcoach_adapter_seed_v6.8.0.json",
  heatmap: "./data/musclemapjs_heatmap_v6.8.0.json",
  coverage: "./data/musclemapjs_test_coverage_v6.8.0.json",
  config: "./prototype/musclemapjs_prototype_config_v6.8.0.json"
};

let activeInstance = null;

async function loadJson(url) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error(`Konnte ${url} nicht laden`);
  return response.json();
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16)
  };
}

function rgbToHex({ r, g, b }) {
  const toHex = (value) => Math.round(value).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function interpolateColor(from, to, t) {
  const a = hexToRgb(from);
  const b = hexToRgb(to);
  return rgbToHex({
    r: a.r + (b.r - a.r) * t,
    g: a.g + (b.g - a.g) * t,
    b: a.b + (b.b - a.b) * t
  });
}

function colorForPercent(percent, stops) {
  const sorted = [...stops].sort((a, b) => a.maxPercent - b.maxPercent);
  if (percent <= 0) return sorted[0].color;
  let previous = sorted[0];
  for (const stop of sorted.slice(1)) {
    if (percent <= stop.maxPercent) {
      const range = Math.max(1, stop.maxPercent - previous.maxPercent);
      const t = Math.min(1, Math.max(0, (percent - previous.maxPercent) / range));
      return interpolateColor(previous.color, stop.color, t);
    }
    previous = stop;
  }
  return sorted[sorted.length - 1].color;
}

function buildMapping(adapter) {
  const sourceToDcoach = new Map();
  const dcoachToSource = new Map();
  for (const row of adapter.mappings || []) {
    if (!sourceToDcoach.has(row.sourceMuscleId)) sourceToDcoach.set(row.sourceMuscleId, []);
    sourceToDcoach.get(row.sourceMuscleId).push(row);
    dcoachToSource.set(row.dcoachMuscleId, row.sourceMuscleId);
  }
  if (!dcoachToSource.has("mg_lats")) {
    dcoachToSource.set("mg_lats", "upper-back");
    sourceToDcoach.get("upper-back")?.push({
      sourceMuscleId: "upper-back",
      dcoachMuscleId: "mg_lats",
      labelDe: "Latissimus / oberer Ruecken",
      view: "back",
      side: "bilateral",
      virtual: true
    });
  }
  return { sourceToDcoach, dcoachToSource };
}

function selectedRows(sourceId, sourceToDcoach) {
  return sourceToDcoach.get(sourceId) || [];
}

function renderDetail(container, sourceId, side, sourceToDcoach, coverage) {
  const target = container.querySelector("[data-prototype-detail]");
  if (!target) return;
  if (!sourceId) {
    target.innerHTML = `
      <h3>Muskel auswaehlen</h3>
      <p class="muted">Tippe auf eine Region der Karte, um D-Coach-Mapping und Testlast zu sehen.</p>
    `;
    return;
  }
  const rows = selectedRows(sourceId, sourceToDcoach);
  target.innerHTML = `
    <h3>${rows.map((row) => row.labelDe).join(" / ") || sourceId}</h3>
    <div class="prototype-detail-grid">
      <span>MuscleMapJS</span><strong>${sourceId}</strong>
      <span>Seite</span><strong>${side || "beidseitig"}</strong>
      <span>D-Coach</span><strong>${rows.map((row) => row.dcoachMuscleId).join(", ") || "nicht gemappt"}</strong>
      <span>Testlast</span><strong>${Math.max(0, ...rows.map((row) => coverage[row.dcoachMuscleId] || 0))}%</strong>
    </div>
    ${rows.some((row) => row.virtual) ? `<p class="muted">Hinweis: MuscleMapJS liefert keine separate Latissimus-ID. Fuer den Prototyp wird ` +
      `mg_lats sichtbar ueber upper-back verglichen.</p>` : ""}
  `;
}

function setActiveButton(container, selector, value) {
  container.querySelectorAll(selector).forEach((button) => {
    button.classList.toggle("active", button.dataset.prototypeValue === value);
  });
}

function applyPrototypeHeatmap(map, mappings, coverage, stops, selectedSource = null) {
  map.clearHighlights();
  for (const [sourceId, rows] of mappings.sourceToDcoach.entries()) {
    const percent = Math.max(0, ...rows.map((row) => coverage[row.dcoachMuscleId] || 0));
    const color = colorForPercent(percent, stops);
    const opacity = selectedSource && selectedSource !== sourceId ? 0.3 : 1;
    map.highlight(sourceId, color, opacity);
  }
  if (selectedSource) map.select(selectedSource);
}

function renderLegend(container, stops) {
  const target = container.querySelector("[data-prototype-legend]");
  if (!target) return;
  target.innerHTML = stops.map((stop, index) => {
    const label = index === 0 ? "0%" : index === stops.length - 1 ? ">130%" : `bis ${stop.maxPercent}%`;
    return `<span><i style="background:${stop.color}"></i>${label}</span>`;
  }).join("");
}

export async function mountDCoachMuscleMapJsPrototype(container) {
  if (!container || container.dataset.prototypeMounted === "true") return;
  container.dataset.prototypeMounted = "true";

  const [{ MuscleMapWidget }, adapter, heatmap, coverageData, config] = await Promise.all([
    import("../vendor/MuscleMapJS/browser/index.js"),
    loadJson(DATA_URLS.adapter),
    loadJson(DATA_URLS.heatmap),
    loadJson(DATA_URLS.coverage),
    loadJson(DATA_URLS.config)
  ]);

  if (activeInstance?.destroy) activeInstance.destroy();
  const mapTarget = container.querySelector("[data-prototype-map]");
  const mappings = buildMapping(adapter);
  const coverage = coverageData.coverage || {};
  const params = new URLSearchParams(window.location.search);
  const state = {
    side: params.get("prototypeSide") || config.initialSide || "front",
    style: config.styleCandidates?.[0] || "neon",
    selectedSource: null,
    selectedSide: null
  };

  const map = new MuscleMapWidget(mapTarget, {
    gender: config.gender || "male",
    side: state.side,
    style: state.style,
    interactive: true,
    multiSelect: false,
    showSubGroups: config.showSubGroups !== false
  });
  activeInstance = map;

  const redraw = () => {
    map.setSide(state.side);
    map.setStyle(state.style);
    applyPrototypeHeatmap(map, mappings, coverage, heatmap.stops || [], state.selectedSource);
    renderDetail(container, state.selectedSource, state.selectedSide, mappings.sourceToDcoach, coverage);
    setActiveButton(container, "[data-prototype-side]", state.side);
    setActiveButton(container, "[data-prototype-style]", state.style);
  };

  map.on("muscleClick", (muscle, side) => {
    state.selectedSource = muscle;
    state.selectedSide = side;
    redraw();
  });

  const debugApi = {
    selectSource(sourceId, side = "both") {
      state.selectedSource = sourceId;
      state.selectedSide = side;
      redraw();
    },
    selectDcoach(dcoachId, side = "both") {
      state.selectedSource = mappings.dcoachToSource.get(dcoachId) || null;
      state.selectedSide = side;
      redraw();
    },
    setSide(side) {
      state.side = side;
      state.selectedSource = null;
      state.selectedSide = null;
      redraw();
    },
    snapshot() {
      return {
        side: state.side,
        style: state.style,
        selectedSource: state.selectedSource,
        selectedSide: state.selectedSide
      };
    }
  };
  window.dcoachMuscleMapJsPrototype = debugApi;
  globalThis.dcoachMuscleMapJsPrototype = debugApi;
  const initialDcoachSelection = params.get("prototypeSelect");
  const initialSourceSelection = params.get("prototypeSource");
  if (initialDcoachSelection) {
    state.selectedSource = mappings.dcoachToSource.get(initialDcoachSelection) || null;
    state.selectedSide = "both";
  } else if (initialSourceSelection) {
    state.selectedSource = initialSourceSelection;
    state.selectedSide = "both";
  }

  container.querySelectorAll("[data-prototype-side]").forEach((button) => {
    button.addEventListener("click", () => {
      state.side = button.dataset.prototypeValue;
      state.selectedSource = null;
      state.selectedSide = null;
      redraw();
    });
  });

  container.querySelectorAll("[data-prototype-style]").forEach((button) => {
    button.addEventListener("click", () => {
      state.style = button.dataset.prototypeValue;
      redraw();
    });
  });

  renderLegend(container, heatmap.stops || []);
  redraw();
}
