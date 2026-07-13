import { applyInterpolation } from './color-interpolation.js';
import { parseColor, interpolateColor, toCSSColor, MM_DEFAULT_FILL } from '../utils/color.js';
export class HeatmapColorScale {
    constructor(colors, interpolation = { type: 'linear' }) {
        this.colors = colors;
        this.interpolation = interpolation;
    }
    /** Get the interpolated color for an intensity value (0.0-1.0). */
    color(intensity) {
        if (this.colors.length === 0)
            return 'gray';
        if (this.colors.length === 1)
            return this.colors[0];
        const curved = applyInterpolation(this.interpolation, Math.max(0, Math.min(1, intensity)));
        const scaledIndex = curved * (this.colors.length - 1);
        const lowerIndex = Math.floor(scaledIndex);
        const upperIndex = Math.min(lowerIndex + 1, this.colors.length - 1);
        const fraction = scaledIndex - lowerIndex;
        if (fraction < 0.01)
            return this.colors[lowerIndex];
        const from = parseColor(this.colors[lowerIndex]);
        const to = parseColor(this.colors[upperIndex]);
        return toCSSColor(interpolateColor(from, to, fraction));
    }
}
// ─── Preset Color Scales ─────────────────────────────────────────────────────
export const COLOR_SCALE_PRESETS = {
    workout: new HeatmapColorScale([MM_DEFAULT_FILL, '#ffeb3b', '#ff9800', '#f44336']),
    thermal: new HeatmapColorScale(['#2196f3', '#4caf50', '#ffeb3b', '#f44336']),
    medical: new HeatmapColorScale(['#4caf50', '#ffeb3b', '#f44336']),
    monochrome: new HeatmapColorScale(['rgb(217,217,217)', 'rgb(38,38,38)']),
    workoutStepped: new HeatmapColorScale([MM_DEFAULT_FILL, '#ffeb3b', '#ff9800', '#f44336'], { type: 'step', count: 5 }),
    thermalSmooth: new HeatmapColorScale(['#2196f3', '#4caf50', '#ffeb3b', '#f44336'], { type: 'easeInOut' }),
};
/** Resolve a color scale from a preset name or custom color array. */
export function resolveColorScale(scale, interpolation) {
    if (typeof scale === 'string') {
        const preset = COLOR_SCALE_PRESETS[scale];
        if (preset) {
            if (interpolation)
                return new HeatmapColorScale(preset.colors, interpolation);
            return preset;
        }
        return new HeatmapColorScale([scale]);
    }
    return new HeatmapColorScale(scale, interpolation);
}
