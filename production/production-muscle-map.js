let activeWidget = null;
let activeContainer = null;
let gestureState = null;

function hexToRgb(hex) {
  const clean = String(hex || "").replace("#", "");
  if (clean.length !== 6) return { r: 38, g: 50, b: 65 };
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16)
  };
}

function rgbToHex(rgb) {
  const part = (value) => Math.round(Math.max(0, Math.min(255, value))).toString(16).padStart(2, "0");
  return `#${part(rgb.r)}${part(rgb.g)}${part(rgb.b)}`;
}

function interpolateColor(from, to, ratio) {
  const a = hexToRgb(from);
  const b = hexToRgb(to);
  return rgbToHex({
    r: a.r + (b.r - a.r) * ratio,
    g: a.g + (b.g - a.g) * ratio,
    b: a.b + (b.b - a.b) * ratio
  });
}

function colorForPercent(percent, stops) {
  const sorted = [...(stops || [])].sort((a, b) => a.maxPercent - b.maxPercent);
  if (!sorted.length) return "#263241";
  if (percent <= 0) return sorted[0].color;
  let previous = sorted[0];
  for (const stop of sorted.slice(1)) {
    if (percent <= stop.maxPercent) {
      const range = Math.max(1, stop.maxPercent - previous.maxPercent);
      return interpolateColor(previous.color, stop.color, Math.max(0, Math.min(1, (percent - previous.maxPercent) / range)));
    }
    previous = stop;
  }
  return sorted[sorted.length - 1].color;
}

function buildAdapter(adapter) {
  const sourceToDcoach = new Map();
  const dcoachToSource = new Map();
  for (const row of adapter?.mappings || []) {
    if (!sourceToDcoach.has(row.sourceMuscleId)) sourceToDcoach.set(row.sourceMuscleId, []);
    sourceToDcoach.get(row.sourceMuscleId).push(row);
    dcoachToSource.set(row.dcoachMuscleId, row.sourceMuscleId);
  }
  if (!dcoachToSource.has("mg_lats") && sourceToDcoach.has("upper-back")) {
    const virtual = {
      sourceMuscleId: "upper-back",
      dcoachMuscleId: "mg_lats",
      labelDe: "Latissimus",
      view: "back",
      side: "bilateral",
      virtual: true
    };
    sourceToDcoach.get("upper-back").push(virtual);
    dcoachToSource.set("mg_lats", "upper-back");
  }
  return { sourceToDcoach, dcoachToSource };
}

function coverageMap(payload) {
  return new Map((payload.coverage || []).map((item) => [item.muscleId, item]));
}

function selectedSource(payload, adapter) {
  return payload.selectedMuscleId ? adapter.dcoachToSource.get(payload.selectedMuscleId) || null : null;
}

function sourcePercent(sourceId, adapter, coverage) {
  const rows = adapter.sourceToDcoach.get(sourceId) || [];
  return Math.max(0, ...rows.map((row) => coverage.get(row.dcoachMuscleId)?.percent || 0));
}

function preferredDcoachId(sourceId, adapter, coverage) {
  const rows = adapter.sourceToDcoach.get(sourceId) || [];
  if (!rows.length) return null;
  const sorted = [...rows].sort((a, b) => (coverage.get(b.dcoachMuscleId)?.percent || 0) - (coverage.get(a.dcoachMuscleId)?.percent || 0));
  return sorted[0].dcoachMuscleId;
}

function updateStatus(container, payload) {
  const target = container.querySelector("[data-production-muscle-map-status]");
  if (!target) return;
  const selected = payload.coverage.find((item) => item.muscleId === payload.selectedMuscleId);
  target.innerHTML = `
    <span class="badge blue">MuscleMapJS</span>
    <span>${payload.view === "front" ? "Vorne" : "Hinten"} - ${payload.modeLabel || payload.mode}</span>
    <span>Muskelabdeckung</span>
    ${selected ? `<strong>${selected.name}: ${selected.percent}%</strong>` : ""}
  `;
}

function installGestureGuard(container) {
  const canvas = container.querySelector("canvas");
  if (!canvas || canvas.dataset.dcoachGestureGuard === "true") return;
  canvas.dataset.dcoachGestureGuard = "true";
  canvas.style.touchAction = "pan-y pinch-zoom";
  canvas.addEventListener("pointerdown", (event) => {
    gestureState = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      moved: false,
      startedAt: Date.now()
    };
  }, { passive: true });
  canvas.addEventListener("pointermove", (event) => {
    if (!gestureState || gestureState.pointerId !== event.pointerId) return;
    const dx = Math.abs(event.clientX - gestureState.startX);
    const dy = Math.abs(event.clientY - gestureState.startY);
    if (dx > 10 || dy > 10) gestureState.moved = true;
  }, { passive: true });
  ["pointerup", "pointercancel", "lostpointercapture"].forEach((type) => {
    canvas.addEventListener(type, (event) => {
      if (!gestureState || gestureState.pointerId !== event.pointerId) return;
      if (gestureState.moved && event.type === "pointerup") event.stopImmediatePropagation();
      gestureState = null;
    }, true);
  });
}

function applyHeatmap(widget, adapter, payload) {
  const coverage = coverageMap(payload);
  const selected = selectedSource(payload, adapter);
  widget.clearSelection();
  widget.clearHighlights();
  for (const sourceId of adapter.sourceToDcoach.keys()) {
    const percent = sourcePercent(sourceId, adapter, coverage);
    const opacity = selected && selected !== sourceId ? 0.3 : 1;
    widget.highlight(sourceId, colorForPercent(percent, payload.heatmap?.stops || []), opacity);
  }
  if (selected) widget.select(selected);
}

export async function mountProductionMuscleMap(container, payload) {
  const target = container.querySelector("[data-production-muscle-map-canvas]");
  if (!target || !payload?.adapter?.mappings?.length) throw new Error("Production MuscleMap payload incomplete.");
  const [{ MuscleMapWidget }] = await Promise.all([
    import("../vendor/MuscleMapJS/browser/index.js")
  ]);

  if (activeContainer !== container && activeWidget?.destroy) activeWidget.destroy();
  if (activeContainer !== container) {
    target.innerHTML = "";
    activeWidget = new MuscleMapWidget(target, {
      gender: payload.config?.gender || "male",
      side: payload.view || "front",
      style: "neon",
      interactive: true,
      multiSelect: false,
      showSubGroups: true
    });
    activeContainer = container;
    activeWidget.on("muscleClick", (sourceId, side) => {
      const currentPayload = window.dcoachProductionMuscleMapPayload || payload;
      const adapter = buildAdapter(currentPayload.adapter);
      const dcoachMuscleId = preferredDcoachId(sourceId, adapter, coverageMap(currentPayload));
      if (!dcoachMuscleId) {
        console.warn(`D-Coach MuscleMap: unmapped MuscleMapJS source ${sourceId}`);
        return;
      }
      container.dispatchEvent(new CustomEvent("dcoach-production-muscle-select", {
        bubbles: true,
        detail: { dcoachMuscleId, sourceId, side }
      }));
    });
  }

  activeWidget.setSide(payload.view || "front");
  installGestureGuard(container);
  const adapter = buildAdapter(payload.adapter);
  applyHeatmap(activeWidget, adapter, payload);
  updateStatus(container, payload);
}
