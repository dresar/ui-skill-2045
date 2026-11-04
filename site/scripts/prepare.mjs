import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const siteRoot = resolve(here, "..");
const repoRoot = resolve(siteRoot, "..");
const publicDir = join(siteRoot, "public");
const generatedDir = join(siteRoot, "generated");

await mkdir(join(publicDir, "previews"), { recursive: true });
await mkdir(join(publicDir, "theme-previews"), { recursive: true });
await mkdir(generatedDir, { recursive: true });

const skillsRoot = join(repoRoot, "skills");
const skillDirs = await readdir(skillsRoot, { withFileTypes: true });
for (const entry of skillDirs) {
  if (!entry.isDirectory()) continue;
  const source = join(skillsRoot, entry.name, "preview", "index.html");
  try {
    await cp(source, join(publicDir, "previews", `${entry.name}.html`));
  } catch {
    console.warn(`No preview for ${entry.name}`);
  }
}

const themeDocs = join(repoRoot, "docs", "themes", "previews");
const themeFiles = await readdir(themeDocs).catch(() => []);
for (const file of themeFiles) {
  if (!file.endsWith(".html")) continue;
  await cp(join(themeDocs, file), join(publicDir, "theme-previews", file));
}

const { themes } = await import("../../data/themes.mjs");
const { themeTranslations } = await import("../../data/theme-translations.mjs");
const themeData = themes.map((theme) => ({
  slug: theme.slug,
  name: theme.name,
  tagline: theme.tagline,
  philosophy: theme.philosophy,
  primary: Boolean(theme.primary),
  useWhen: theme.useWhen,
  avoidWhen: theme.avoidWhen,
  antiPatterns: theme.antiPatterns,
  useWhenId: themeTranslations[theme.slug]?.useWhen ?? theme.useWhen,
  avoidWhenId: themeTranslations[theme.slug]?.avoidWhen ?? theme.avoidWhen,
  antiPatternsId: themeTranslations[theme.slug]?.antiPatterns ?? theme.antiPatterns,
  radius: theme.radius,
  borderWidth: theme.borderWidth,
  fontDisplay: theme.fontDisplay,
  fontBody: theme.fontBody,
  light: theme.light,
  dark: theme.dark,
  depthRule: theme.depthRule,
  motion: theme.motion,
}));
await writeFile(join(generatedDir, "themes.json"), `${JSON.stringify(themeData, null, 2)}\n`, "utf8");
await cp(join(repoRoot, "skills.json"), join(generatedDir, "skills.json"));
await cp(join(repoRoot, "docs", "assets", "banner.svg"), join(publicDir, "og.svg"));
await writeFile(join(publicDir, ".nojekyll"), "", "utf8");

console.log(`Prepared ${skillDirs.filter((entry) => entry.isDirectory()).length} skill previews and ${themeData.length} themes.`);
