export type AuditRow = {
  mode: string;
  label: string;
  foreground: string;
  background: string;
  ratio: number;
  required: number;
  pass: boolean;
};

function hexToRgb(hex: string): [number, number, number] {
  const value = hex.replace("#", "");
  return [
    parseInt(value.slice(0, 2), 16) / 255,
    parseInt(value.slice(2, 4), 16) / 255,
    parseInt(value.slice(4, 6), 16) / 255,
  ];
}

function luminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((channel) =>
    channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string): number {
  const [lighter, darker] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (lighter + 0.05) / (darker + 0.05);
}

function mix(base: string, toward: string, amount: number): string {
  const a = hexToRgb(base);
  const b = hexToRgb(toward);
  return `#${a
    .map((channel, index) =>
      Math.round((channel + (b[index] - channel) * amount) * 255)
        .toString(16)
        .padStart(2, "0"),
    )
    .join("")}`;
}

function strongBorder(palette: Record<string, string>): string {
  for (let step = 0; step <= 1; step += 0.02) {
    const candidate = mix(palette.border, palette.text, step);
    if (contrast(candidate, palette.bg) >= 3) return candidate;
  }
  return palette.text;
}

export function auditTheme(theme: {
  light: Record<string, string>;
  dark: Record<string, string>;
}): AuditRow[] {
  const rows: AuditRow[] = [];
  for (const mode of ["light", "dark"] as const) {
    const palette = theme[mode];
    const checks: Array<[string, string, string, number]> = [
      ["Body text on ground", palette.text, palette.bg, 4.5],
      ["Muted text on ground", palette.muted, palette.bg, 4.5],
      ["Body text on surface", palette.text, palette.surface, 4.5],
      ["Muted text on surface", palette.muted, palette.surface, 4.5],
      ["Action label on action", palette.accentText, palette.accent, 4.5],
      ["Action on ground", palette.accent, palette.bg, 3],
      ["Focus ring on ground", palette.focus, palette.bg, 3],
      ["Control border on ground", strongBorder(palette), palette.bg, 3],
    ];
    for (const [label, foreground, background, required] of checks) {
      const value = Number(contrast(foreground, background).toFixed(2));
      rows.push({
        mode,
        label,
        foreground,
        background,
        ratio: value,
        required,
        pass: value >= required,
      });
    }
  }
  return rows;
}
