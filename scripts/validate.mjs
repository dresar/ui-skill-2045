import { access, readdir, readFile, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { themes } from "../data/themes.mjs";
import { auditTheme } from "./lib/contrast.mjs";
import { buildRegistry, readSkills } from "./build-registry.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const warnings = [];
const allowedLicenses = new Set(["MIT", "Apache-2.0", "BSD-2-Clause", "BSD-3-Clause", "ISC", "CC0-1.0"]);
const themeSlugs = new Set(themes.map((theme) => theme.slug));
const requiredRootFiles = [
  "README.md",
  "LICENSE",
  "THIRD_PARTY_NOTICES.md",
  "CONTRIBUTING.md",
  "CODE_OF_CONDUCT.md",
  "SECURITY.md",
  "CHANGELOG.md",
  "skills.json",
];
const requiredFrontmatter = [
  "name",
  "description",
  "description_id",
  "version",
  "license",
  "author",
  "themes",
  "tags",
  "source",
  "original_license",
];
const upstreamLicenses = new Set([
  "anthropic.txt",
  "paulbakaus.txt",
  "nextlevelbuilder.txt",
  "leonxlnx.txt",
  "mengto.txt",
  "ibelick.txt",
  "palamut62.txt",
  "LICENSE-UPSTREAM",
  "LICENSE-UPSTREAM-anthropic.txt",
  "LICENSE-UPSTREAM-paulbakaus.txt",
  "LICENSE-UPSTREAM-nextlevelbuilder.txt",
  "LICENSE-UPSTREAM-leonxlnx.txt",
  "LICENSE-UPSTREAM-mengto.txt",
  "LICENSE-UPSTREAM-ibelick.txt",
  "LICENSE-UPSTREAM-palamut62.txt",
  "NOTICE-UPSTREAM.md",
]);

function fail(message) {
  errors.push(message);
}
function warn(message) {
  warnings.push(message);
}
async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

for (const file of requiredRootFiles) {
  if (!(await exists(join(root, file)))) fail(`Missing required root file: ${file}`);
}

const licenseText = await readFile(join(root, "LICENSE"), "utf8");
if (!licenseText.includes("Copyright (c) 2026")) fail("LICENSE is missing the 2026 copyright line.");
if (!licenseText.includes("THIRD-PARTY COMPONENTS")) fail("LICENSE is missing the third-party clause.");
if (!licenseText.includes("THIRD_PARTY_NOTICES.md")) fail("LICENSE must point to THIRD_PARTY_NOTICES.md.");

const skills = await readSkills();
if (skills.length === 0) fail("No skills found.");

for (const skill of skills) {
  const prefix = `skills/${skill.folder}`;
  for (const key of requiredFrontmatter) {
    if (!skill[key] || (Array.isArray(skill[key]) && skill[key].length === 0)) {
      fail(`${prefix}: frontmatter field "${key}" is missing or empty.`);
    }
  }
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(skill.name ?? "")) {
    fail(`${prefix}: name must be lowercase kebab-case.`);
  }
  if (skill.name !== skill.folder) {
    fail(`${prefix}: frontmatter name "${skill.name}" does not match folder name.`);
  }
  if (!/^\d+\.\d+\.\d+$/.test(skill.version ?? "")) fail(`${prefix}: version must be semver.`);
  if (!allowedLicenses.has(skill.license)) fail(`${prefix}: license "${skill.license}" is not permitted.`);
  if (!allowedLicenses.has(skill.original_license)) {
    fail(`${prefix}: original_license "${skill.original_license}" is not a permitted license.`);
  }
  if (!/(use when|gunakan saat|when building|when a|saat )/i.test(skill.description ?? "")) {
    warn(`${prefix}: description should state when the skill is used.`);
  }
  if (!skill.description_id || !/(gunakan|saat|ketika)/i.test(skill.description_id)) {
    warn(`${prefix}: description_id should state when the skill is used in Indonesian.`);
  }
  if (!Array.isArray(skill.themes) || skill.themes.length === 0) {
    fail(`${prefix}: themes must be a non-empty list.`);
  } else {
    for (const theme of skill.themes) {
      if (!themeSlugs.has(theme)) fail(`${prefix}: unknown theme "${theme}".`);
    }
  }
  if (!Array.isArray(skill.tags) || skill.tags.length < 2) fail(`${prefix}: at least two tags required.`);

  const skillPath = join(root, prefix, "SKILL.md");
  const content = await readFile(skillPath, "utf8");
  const lines = content.split(/\r?\n/).length;
  if (lines > 500) fail(`${prefix}: SKILL.md has ${lines} lines (limit 500).`);
  if (!/^##\s+/m.test(content)) fail(`${prefix}: SKILL.md has no level-2 sections.`);
  for (const section of ["When to use", "Anti-patterns", "checklist", "Example prompt", "Bahasa Indonesia"]) {
    if (!content.toLowerCase().includes(section.toLowerCase())) {
      fail(`${prefix}: SKILL.md is missing the "${section}" section.`);
    }
  }
  if (!/source:|Sumber|Attribution/i.test(content)) fail(`${prefix}: attribution section missing.`);

  const previewPath = join(root, prefix, "preview", "index.html");
  if (!(await exists(previewPath))) {
    fail(`${prefix}: preview/index.html is missing.`);
  } else {
    const preview = await readFile(previewPath, "utf8");
    const size = (await stat(previewPath)).size;
    if (size < 1500) fail(`${prefix}: preview/index.html is suspiciously small (${size} bytes).`);
    if (size > 400_000) fail(`${prefix}: preview/index.html exceeds 400KB.`);
    if (!preview.includes("<!doctype html")) fail(`${prefix}: preview must be a full HTML document.`);
    if (!/lang="id"/.test(preview)) fail(`${prefix}: preview must declare Indonesian as a language.`);
    if (!/data-set-lang/.test(preview)) fail(`${prefix}: preview must offer an ID/EN switch.`);
    if (/<link[^>]+href="https?:/i.test(preview)) fail(`${prefix}: preview loads an external stylesheet.`);
    if (/<script[^>]+src="https?:/i.test(preview)) fail(`${prefix}: preview loads an external script.`);
    if (/<img[^>]+src="https?:/i.test(preview)) fail(`${prefix}: preview loads an external image.`);
    if (/@import\s+url\(["']?https?:/i.test(preview)) fail(`${prefix}: preview imports an external stylesheet.`);
    if (!/@media\s*\(prefers-reduced-motion/.test(preview)) fail(`${prefix}: preview must respect reduced motion.`);
    if (!/viewport/.test(preview)) fail(`${prefix}: preview needs a viewport meta tag.`);
  }

  const dirFiles = await readdir(join(root, prefix));
  for (const file of dirFiles) {
    if (file.startsWith("LICENSE-UPSTREAM") || file === "NOTICE-UPSTREAM.md") {
      if (!upstreamLicenses.has(file)) warn(`${prefix}: unexpected license filename ${file}.`);
      const text = await readFile(join(root, prefix, file), "utf8");
      if (!/MIT License|Apache License|Third-Party Notices/i.test(text)) {
        fail(`${prefix}/${file}: does not look like a license text.`);
      }
    }
  }

  const derived = skill.source?.startsWith("https://github.com/");
  if (derived) {
    if (!(await exists(join(root, prefix, "LICENSE-UPSTREAM")))) {
      fail(`${prefix}: derived skill must contain LICENSE-UPSTREAM.`);
    }
    if (!/^[0-9a-f]{40}$/.test(skill.upstream_commit ?? "")) {
      fail(`${prefix}: derived skill needs a 40-character upstream_commit.`);
    }
    if (!skill.original_author) fail(`${prefix}: derived skill needs original_author.`);
    if (!(await exists(join(root, prefix, "MODIFICATIONS.md")))) {
      fail(`${prefix}: derived skill must document changes in MODIFICATIONS.md.`);
    }
  }

  const evalPath = join(root, "evals", `${skill.name}.md`);
  if (!(await exists(evalPath))) {
    fail(`${prefix}: evals/${skill.name}.md is missing.`);
  } else {
    const evalText = await readFile(evalPath, "utf8");
    const promptCount = (evalText.match(/^### Prompt/gm) ?? []).length;
    if (promptCount < 3) fail(`${prefix}: evals must contain at least 3 prompts (found ${promptCount}).`);
  }
}

for (const theme of themes) {
  for (const row of auditTheme(theme)) {
    if (!row.pass) fail(`Theme ${theme.slug}: ${row.mode} ${row.label} is ${row.ratio}:1 (needs ${row.required}:1).`);
  }
  for (const file of [`docs/themes/${theme.slug}.md`, `docs/themes/previews/${theme.slug}.html`]) {
    if (!(await exists(join(root, file)))) fail(`Theme ${theme.slug}: missing ${file}.`);
  }
}
const themePreview = await readFile(join(root, `docs/themes/previews/${themes[0].slug}.html`), "utf8");
if (/<script[^>]+src="https?:/i.test(themePreview)) fail("Theme preview loads an external script.");
if (!/prefers-reduced-motion/.test(themePreview)) fail("Theme preview must respect reduced motion.");

const expected = await buildRegistry();
let actual = null;
try {
  actual = JSON.parse(await readFile(join(root, "skills.json"), "utf8"));
} catch {
  fail("skills.json is missing or invalid JSON.");
}
if (actual) {
  const ordered = JSON.stringify(expected, null, 2);
  const current = JSON.stringify(actual, null, 2);
  if (ordered !== current) fail("skills.json is out of date. Run npm run registry.");
  if (actual.count !== skills.length) fail(`skills.json count ${actual.count} does not match ${skills.length}.`);
}

const markdownFiles = [];
async function walk(dir, depth = 0) {
  if (depth > 4) return;
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (["node_modules", ".git", ".next", "out", "coverage"].includes(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, depth + 1);
    else if (entry.name.endsWith(".md")) markdownFiles.push(full);
  }
}
await walk(root);
for (const file of markdownFiles) {
  const text = await readFile(file, "utf8");
  const links = [...text.matchAll(/\]\(([^)\s]+)\)/g)].map((match) => match[1]);
  for (const link of links) {
    if (/^(https?:|mailto:|#)/.test(link)) continue;
    if (link.startsWith("<")) continue;
    const clean = link.split("#")[0];
    if (!clean) continue;
    const target = resolve(dirname(file), clean);
    const targetExists = await exists(target);
    const isDirectory = targetExists && (await stat(target)).isDirectory();
    if (targetExists && isDirectory) continue;
    const candidates = [target];
    let ok = false;
    for (const candidate of candidates) {
      if (await exists(candidate)) ok = true;
    }
    if (!ok) fail(`Broken relative link in ${file.replace(root + "\\", "").replace(root + "/", "")}: ${link}`);
  }
}

const total = (await readdir(join(root, "skills"), { withFileTypes: true })).filter((entry) => entry.isDirectory()).length;
console.log(`Validated ${total} skills, ${themes.length} themes, ${markdownFiles.length} markdown files.`);
if (warnings.length > 0) {
  console.log(`\nWarnings (${warnings.length}):`);
  for (const message of warnings) console.log(`  ! ${message}`);
}
if (errors.length > 0) {
  console.error(`\nErrors (${errors.length}):`);
  for (const message of errors) console.error(`  x ${message}`);
  process.exit(1);
}
console.log("\nAll validation checks passed.");
