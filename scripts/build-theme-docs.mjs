import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { themes } from "../data/themes.mjs";
import { themeTranslations } from "../data/theme-translations.mjs";
import { auditTheme, borderStrong, ensureContrast, ratio } from "./lib/contrast.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const docsDir = join(root, "docs", "themes");
const previewDir = join(docsDir, "previews");
const skillDir = join(root, "skills", "theme-recipes");
const sitePreviewDir = join(root, "site", "public", "theme-previews");

function shadowFor(theme, mode, pressed = false) {
  const p = theme[mode];
  const slug = theme.slug;
  if (slug.includes("neumorphism")) {
    return pressed
      ? `inset 5px 5px 10px ${p.shadowDark}, inset -5px -5px 10px ${p.shadowLight}`
      : `8px 8px 18px ${p.shadowDark}, -8px -8px 18px ${p.shadowLight}`;
  }
  if (slug === "claymorphism") {
    return pressed
      ? `inset 4px 4px 10px ${p.shadowDark}, inset -4px -4px 10px ${p.shadowLight}`
      : `0 12px 28px ${p.shadowDark}80, inset 0 1px 0 ${p.shadowLight}`;
  }
  if (slug === "glassmorphism") {
    return "0 8px 32px rgba(4, 12, 30, 0.18)";
  }
  return "none";
}

function cssBlock(theme) {
  const blocks = [];
  for (const mode of ["light", "dark"]) {
    const p = theme[mode];
    const selector =
      mode === "light"
        ? `:root[data-theme="${theme.slug}"]`
        : `:root[data-theme="${theme.slug}"][data-mode="dark"]`;
    blocks.push(`${selector} {
  color-scheme: ${mode};
  --color-bg: ${p.bg};
  --color-surface: ${p.surface};
  --color-surface-alt: ${p.surfaceAlt};
  --color-text: ${p.text};
  --color-text-muted: ${p.muted};
  --color-border: ${p.border};
  --color-border-strong: ${borderStrong(theme, mode)};
  --color-action: ${p.accent};
  --color-action-text: ${p.accentText};
  --color-focus: ${p.focus};
  --radius-sm: ${theme.radius.sm};
  --radius-md: ${theme.radius.md};
  --radius-lg: ${theme.radius.lg};
  --border-width: ${theme.borderWidth};
  --shadow-raised: ${shadowFor(theme, mode)};
  --shadow-pressed: ${shadowFor(theme, mode, true)};
  --font-display: ${theme.fontDisplay};
  --font-body: ${theme.fontBody};
}`);
  }
  return blocks.join("\n\n");
}

function markdownFor(theme) {
  const rows = auditTheme(theme);
  const failed = rows.filter((row) => !row.pass);
  const localized = themeTranslations[theme.slug] ?? {
    useWhen: theme.useWhen,
    avoidWhen: theme.avoidWhen,
    antiPatterns: theme.antiPatterns,
  };
  const paletteRows = (mode) =>
    [
      ...Object.entries(theme[mode])
        .filter(([, value]) => typeof value === "string")
        .map(([key, value]) => `| \`${key}\` | \`${value}\` |`),
      `| \`borderStrong\` | \`${borderStrong(theme, mode)}\` |`,
    ].join("\n");
  const auditRows = rows
    .map(
      (row) =>
        `| ${row.mode} | ${row.label} | \`${row.foreground}\` / \`${row.background}\` | ${row.ratio}:1 | ≥ ${row.required}:1 | ${row.pass ? "Lulus" : "**Gagal**"} |`,
    )
    .join("\n");

  return `# ${theme.name}

> ${theme.tagline.id}
> ${theme.tagline.en}

[Lihat preview HTML mandiri](./previews/${theme.slug}.html) · [Token CSS](../../skills/theme-recipes/assets/themes.css) · [Katalog tema](./README.md)

## Filosofi

${theme.philosophy.id}

${theme.philosophy.en}

## Kapan dipakai

${localized.useWhen.map((item) => `- ${item}`).join("\n")}

## Kapan dihindari

${localized.avoidWhen.map((item) => `- ${item}`).join("\n")}

## Palet — light mode

| Token | Nilai |
|---|---|
${paletteRows("light")}

## Palet — dark mode

| Token | Nilai |
|---|---|
${paletteRows("dark")}

## Aturan bentuk

| Properti | Nilai |
|---|---|
| Radius | ${theme.radius.sm} / ${theme.radius.md} / ${theme.radius.lg} |
| Border | ${theme.borderWidth} |
| Bayangan naik | \`${shadowFor(theme, "light")}\` |
| Bayangan pressed | \`${shadowFor(theme, "light", true)}\` |
| Prinsip kedalaman | ${theme.depthRule.id} |

\`--color-border\` adalah pemisah dekoratif. Untuk batas kontrol yang harus dikenali
(input, select, tombol outline), gunakan \`--color-border-strong\` yang dijamin ≥ 3:1.

## Tipografi

| Peran | Nilai |
|---|---|
| Display | \`${theme.fontDisplay}\` |
| Body | \`${theme.fontBody}\` |
| Skala | 12 / 14 / 16 / 20 / 32–48 / 40–72 px |
| Measure | 65ch |

## Spacing

\`${theme.spacing.join(" · ")}\`

## Motion

${theme.motion.id}

${theme.motion.en}

## Contoh komponen

- **Tombol utama:** latar \`--color-action\`, teks \`--color-action-text\`, radius \`--radius-md\`,
  focus ring 2px \`--color-focus\`.
- **Kartu:** latar \`--color-surface\`, border \`--border-width\`, bayangan \`--shadow-raised\`
  hanya jika tema menggunakan bayangan.
- **Input:** tinggi 44px, label di atas, border 1px, error di bawah dengan teks.
- **Tabel:** baris 44–48px, header \`--color-surface-alt\`, tanpa bayangan per baris.
- **Alert:** ikon + teks, tidak hanya warna.

## Larangan

${localized.antiPatterns.map((item) => `- ${item}`).join("\n")}

## Hasil ukur kontras

${failed.length === 0 ? "Semua pasangan teks/latar di bawah ini lolos WCAG AA." : `**${failed.length} pasangan gagal dan harus diperbaiki sebelum dirilis.**`}

| Mode | Pasangan | Warna | Rasio | Ambang | Status |
|---|---|---|---|---|---|
${auditRows}

## Token siap pakai

\`\`\`css
${cssBlock(theme)}
\`\`\`

---

Dokumen ini dihasilkan dari \`data/themes.mjs\` dan diverifikasi oleh \`scripts/build-theme-docs.mjs\`.
Kontras dihitung dengan rumus WCAG. Bukan nasihat hukum.
`;
}

function previewFor(theme) {
  const light = theme.light;
  const dark = theme.dark;
  const localized = themeTranslations[theme.slug] ?? {
    useWhen: theme.useWhen,
    avoidWhen: theme.avoidWhen,
    antiPatterns: theme.antiPatterns,
  };
  const rows = auditTheme(theme);
  const sample = (mode) => {
    const p = theme[mode];
    return {
      bg: p.bg,
      surface: p.surface,
      alt: p.surfaceAlt,
      text: p.text,
      muted: p.muted,
      accent: p.accent,
      accentText: p.accentText,
      border: p.border,
      borderStrong: borderStrong(theme, mode),
      focus: p.focus,
      raised: shadowFor(theme, mode),
      pressed: shadowFor(theme, mode, true),
    };
  };
  const cssVars = (mode) => {
    const s = sample(mode);
    return `--bg:${s.bg};--surface:${s.surface};--alt:${s.alt};--text:${s.text};--muted:${s.muted};--accent:${s.accent};--accent-text:${s.accentText};--border:${s.border};--border-strong:${s.borderStrong};--focus:${s.focus};--raised:${s.raised};--pressed:${s.pressed};--radius:${theme.radius.md};--border-width:${theme.borderWidth};--font-display:${theme.fontDisplay};--font-body:${theme.fontBody};`;
  };
  const audit = rows
    .filter((row) => row.mode === "light")
    .map(
      (row) =>
        `<li><span>${row.label}</span><strong>${row.ratio}:1</strong> <em class="${row.pass ? "ok" : "bad"}">${row.pass ? "AA" : "FAIL"}</em></li>`,
    )
    .join("");

  return `<!doctype html>
<html lang="id" data-mode="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${theme.name} — preview</title>
<style>
  :root { ${cssVars("light")} }
  :root[data-mode="dark"] { ${cssVars("dark")} }
  * { box-sizing: border-box; }
  html { -webkit-text-size-adjust: 100%; }
  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    line-height: 1.55;
    min-height: 100vh;
  }
  .wrap { width: min(100% - 32px, 1120px); margin: 0 auto; padding: 28px 0 64px; }
  .topbar { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between; margin-bottom: 36px; }
  .brand { font-family: var(--font-display); font-weight: 700; letter-spacing: -0.02em; }
  .nav { display: flex; gap: 16px; flex-wrap: wrap; font-size: 14px; }
  .nav a { color: var(--muted); text-decoration: none; }
  .nav a:hover, .nav a:focus-visible { color: var(--accent); }
  .hero { display: grid; gap: 24px; grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr); align-items: start; margin-bottom: 40px; }
  h1 { font-family: var(--font-display); font-size: clamp(30px, 5vw, 52px); line-height: 1.05; letter-spacing: -0.03em; margin: 0 0 14px; }
  .lead { color: var(--muted); max-width: 58ch; margin: 0 0 22px; }
  .actions { display: flex; gap: 10px; flex-wrap: wrap; }
  button, .button {
    font: inherit; font-weight: 600; border: var(--border-width) solid var(--border);
    background: var(--surface); color: var(--text); border-radius: var(--radius);
    padding: 11px 18px; min-height: 44px; cursor: pointer;
    box-shadow: var(--raised); transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
  }
  button.primary { background: var(--accent); color: var(--accent-text); border-color: transparent; }
  button:active { box-shadow: var(--pressed); transform: translateY(1px); }
  button:focus-visible, a:focus-visible, input:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
  .panel { background: var(--surface); border: var(--border-width) solid var(--border); border-radius: var(--radius); padding: 22px; box-shadow: var(--raised); }
  .panel h2 { margin: 0 0 4px; font-family: var(--font-display); font-size: 18px; }
  .panel p { margin: 0; color: var(--muted); font-size: 14px; }
  .grid { display: grid; gap: 18px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
  h2.section { font-family: var(--font-display); font-size: 22px; margin: 40px 0 14px; }
  .swatches { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px; }
  .swatch { border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; background: var(--surface); }
  .swatch .chip { height: 54px; }
  .swatch .meta { padding: 8px 10px; font-size: 11px; color: var(--muted); display: flex; justify-content: space-between; gap: 6px; }
  code { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: 12px; }
  label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px; }
  input { width: 100%; min-height: 44px; border: 1px solid var(--border-strong); border-radius: var(--radius-sm); background: var(--surface); color: var(--text); padding: 10px 12px; font: inherit; }
  .alert { border-left: 4px solid var(--accent); background: var(--alt); padding: 12px 14px; border-radius: var(--radius-sm); font-size: 14px; }
  table { width: 100%; border-collapse: collapse; font-size: 14px; }
  th, td { text-align: left; padding: 10px 12px; border-bottom: 1px solid var(--border); }
  th { color: var(--muted); font-weight: 600; font-size: 12px; }
  .audit { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; }
  .audit li { display: flex; justify-content: space-between; gap: 12px; font-size: 13px; padding: 8px 10px; border: 1px solid var(--border); border-radius: var(--radius-sm); }
  .audit em { font-style: normal; font-weight: 700; }
  .ok { color: var(--accent); }
  .bad { color: #b00020; }
  .toggle { font-size: 13px; padding: 8px 12px; min-height: 40px; }
  .note { color: var(--muted); font-size: 12px; margin-top: 24px; }
  @media (max-width: 720px) { .hero { grid-template-columns: 1fr; } }
  @media (prefers-reduced-motion: reduce) { * { transition-duration: 0.01ms !important; } }
</style>
</head>
<body>
<div class="wrap">
  <header class="topbar">
    <div class="brand">${theme.name}</div>
    <nav class="nav" aria-label="Preview navigation">
      <a href="#palette">Palet</a>
      <a href="#components">Komponen</a>
      <a href="#contrast">Kontras</a>
    </nav>
    <button class="toggle" type="button" id="theme-toggle" aria-pressed="false">Dark mode</button>
  </header>

  <section class="hero">
    <div>
      <h1>${theme.tagline.id}</h1>
      <p class="lead">${theme.philosophy.id}</p>
      <div class="actions">
        <button class="primary" type="button">Aksi utama</button>
        <button type="button">Aksi sekunder</button>
      </div>
    </div>
    <div class="panel">
      <h2>${theme.name}</h2>
      <p>${localized.useWhen[0]}</p>
      <p style="margin-top:10px">Radius ${theme.radius.md} · border ${theme.borderWidth}</p>
    </div>
  </section>

  <h2 class="section" id="palette">Palet</h2>
  <div class="swatches">
    ${Object.entries(light)
      .filter(([, value]) => typeof value === "string")
      .map(
        ([key, value]) =>
          `<div class="swatch"><div class="chip" style="background:${value}"></div><div class="meta"><span>${key}</span><code>${value}</code></div></div>`,
      )
      .join("\n    ")}
  </div>

  <h2 class="section" id="components">Komponen</h2>
  <div class="grid">
    <section class="panel">
      <h2>Form</h2>
      <p style="margin-bottom:12px">Label selalu terlihat.</p>
      <label for="email">Email</label>
      <input id="email" type="email" placeholder="nama@contoh.id" autocomplete="email">
      <div class="alert" style="margin-top:12px">Email belum terdaftar. Periksa ejaan atau daftar.</div>
    </section>
    <section class="panel">
      <h2>Card</h2>
      <p>Permukaan memakai satu mekanisme kedalaman: ${theme.depthRule.id}</p>
      <div style="margin-top:14px"><button type="button">Lihat detail</button></div>
    </section>
    <section class="panel">
      <h2>Tabel</h2>
      <table>
        <thead><tr><th>Status</th><th>Nilai</th></tr></thead>
        <tbody>
          <tr><td>Aktif</td><td>128</td></tr>
          <tr><td>Tertunda</td><td>12</td></tr>
        </tbody>
      </table>
    </section>
  </div>

  <h2 class="section" id="contrast">Kontras (light mode)</h2>
  <ul class="audit">${audit}</ul>

  <p class="note">Preview mandiri tanpa dependensi eksternal. Token dihasilkan dari data/themes.mjs.
  Dokumen lengkap: docs/themes/${theme.slug}.md. Bukan nasihat hukum.</p>
</div>
<script>
  const button = document.getElementById("theme-toggle");
  const root = document.documentElement;
  button.addEventListener("click", () => {
    const dark = root.dataset.mode !== "dark";
    root.dataset.mode = dark ? "dark" : "light";
    button.setAttribute("aria-pressed", String(dark));
    button.textContent = dark ? "Light mode" : "Dark mode";
  });
</script>
</body>
</html>
`;
}

function themesCss() {
  return `/* Generated from data/themes.mjs by scripts/build-theme-docs.mjs. */
/* All text/background pairs are verified for WCAG AA. See docs/themes/. */

${themes.map((theme) => `/* ${theme.name} */\n${cssBlock(theme)}`).join("\n\n")}
`;
}

function referenceMarkdown() {
  const lines = [
    "# Theme tokens (generated)",
    "",
    "Dihasilkan dari `data/themes.mjs`. Jangan edit manual; ubah data lalu jalankan",
    "`npm run build:themes`.",
    "",
    "| Theme | Mode | Ground | Text | Muted | Accent | Accent text | Border |",
    "|---|---|---|---|---|---|---|---|",
  ];
  for (const theme of themes) {
    for (const mode of ["light", "dark"]) {
      const p = theme[mode];
      lines.push(
        `| ${theme.name} | ${mode} | \`${p.bg}\` | \`${p.text}\` | \`${p.muted}\` | \`${p.accent}\` | \`${p.accentText}\` | \`${p.border}\` |`,
      );
    }
  }
  lines.push("", "## Contrast audit", "", "| Theme | Mode | Pair | Ratio | Status |", "|---|---|---|---|---|");
  for (const theme of themes) {
    for (const row of auditTheme(theme)) {
      lines.push(
        `| ${theme.name} | ${row.mode} | ${row.label} | ${row.ratio}:1 | ${row.pass ? "AA" : "**FAIL**"} |`,
      );
    }
  }
  lines.push("", "## Depth rules", "");
  for (const theme of themes) {
    lines.push(`### ${theme.name}`, "", theme.depthRule.en, "", theme.depthRule.id, "");
  }
  return lines.join("\n");
}

function indexMarkdown() {
  return `# Katalog Tema

Semua tema di bawah ini punya halaman dokumentasi lengkap dan preview HTML mandiri.
Kontras teks diverifikasi secara otomatis terhadap WCAG AA.

| Tema | Untuk | Preview | Dokumentasi |
|---|---|---|---|
${themes
  .map(
    (theme) =>
      `| ${theme.name}${theme.primary ? " (utama)" : ""} | ${(themeTranslations[theme.slug]?.useWhen ?? theme.useWhen)[0]} | [preview](./previews/${theme.slug}.html) | [dokumen](./${theme.slug}.md) |`,
  )
  .join("\n")}

## Cara memakai

1. Pilih tema berdasarkan pekerjaan, bukan suasana hati.
2. Salin blok token dari \`skills/theme-recipes/assets/themes.css\`.
3. Jangan mencampur dua mekanisme kedalaman.
4. Verifikasi ulang kontras jika mengubah nilai.

Dokumen ini dihasilkan otomatis. Jangan edit manual.
`;
}

const failures = themes.flatMap((theme) => auditTheme(theme).filter((row) => !row.pass));

await mkdir(docsDir, { recursive: true });
await mkdir(previewDir, { recursive: true });
await mkdir(join(skillDir, "references"), { recursive: true });
await mkdir(join(skillDir, "assets"), { recursive: true });
await mkdir(sitePreviewDir, { recursive: true });

for (const theme of themes) {
  await writeFile(join(docsDir, `${theme.slug}.md`), markdownFor(theme), "utf8");
  await writeFile(join(previewDir, `${theme.slug}.html`), previewFor(theme), "utf8");
  await writeFile(join(sitePreviewDir, `${theme.slug}.html`), previewFor(theme), "utf8");
}
await writeFile(join(docsDir, "README.md"), indexMarkdown(), "utf8");
await writeFile(join(skillDir, "references", "themes.md"), referenceMarkdown(), "utf8");
await writeFile(join(skillDir, "assets", "themes.css"), themesCss(), "utf8");

if (failures.length > 0) {
  console.error(`Contrast failures: ${failures.length}`);
  for (const row of failures) {
    console.error(`- ${row.mode} ${row.label}: ${row.ratio}:1 (needs ${row.required}:1)`);
  }
  process.exitCode = 1;
} else {
  console.log(`Generated ${themes.length} themes, ${themes.length * 8} contrast checks passed.`);
}
