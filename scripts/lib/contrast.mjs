export function hexToRgb(hex) {
  const value = hex.replace("#", "").trim();
  if (!/^[0-9a-fA-F]{6}$/.test(value)) {
    throw new Error(`Expected a 6-digit hex color, received: ${hex}`);
  }
  return [0, 2, 4].map((index) => parseInt(value.slice(index, index + 2), 16) / 255);
}

export function luminance(hex) {
  const [r, g, b] = hexToRgb(hex).map((channel) =>
    channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrast(a, b) {
  const [lighter, darker] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (lighter + 0.05) / (darker + 0.05);
}

export function ratio(value) {
  return Number(value.toFixed(2));
}

export function toHex([r, g, b]) {
  return `#${[r, g, b]
    .map((channel) => Math.round(channel * 255).toString(16).padStart(2, "0"))
    .join("")}`;
}

export function mix(base, toward, amount) {
  const a = hexToRgb(base);
  const b = hexToRgb(toward);
  return toHex(a.map((channel, index) => channel + (b[index] - channel) * amount));
}

/**
 * Returns a color derived from `base` that reaches `target` contrast on `background`.
 * Used for control borders, which WCAG 1.4.11 requires at 3:1 even when the
 * decorative separator border is intentionally subtle.
 */
export function ensureContrast(base, background, target = 3, toward = "#000000") {
  for (let step = 0; step <= 1.0001; step += 0.02) {
    const candidate = mix(base, toward, step);
    if (contrast(candidate, background) >= target) return candidate;
  }
  return toward;
}

export function passes(ratioValue, level = "AA", size = "normal") {
  if (level === "AAA") return ratioValue >= (size === "large" ? 4.5 : 7);
  return ratioValue >= (size === "large" ? 3 : 4.5);
}

export function borderStrong(theme, mode) {
  const palette = theme[mode];
  return ensureContrast(palette.border, palette.bg, 3, palette.text);
}

export function auditTheme(theme) {
  const rows = [];
  for (const mode of ["light", "dark"]) {
    const palette = theme[mode];
    const strongBorder = borderStrong(theme, mode);
    const checks = [
      ["Body text on ground", palette.text, palette.bg, "normal"],
      ["Muted text on ground", palette.muted, palette.bg, "normal"],
      ["Body text on surface", palette.text, palette.surface, "normal"],
      ["Muted text on surface", palette.muted, palette.surface, "normal"],
      ["Action label on action", palette.accentText, palette.accent, "normal"],
      ["Action on ground", palette.accent, palette.bg, "large"],
      ["Focus ring on ground", palette.focus, palette.bg, "large"],
      ["Control border on ground", strongBorder, palette.bg, "large"],
    ];
    for (const [label, foreground, background, size] of checks) {
      const value = ratio(contrast(foreground, background));
      rows.push({
        mode,
        label,
        foreground,
        background,
        ratio: value,
        required: size === "large" ? 3 : 4.5,
        pass: value >= (size === "large" ? 3 : 4.5),
      });
    }
  }
  return rows;
}
