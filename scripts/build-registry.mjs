import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { themes } from "../data/themes.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = join(root, "skills");

export function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { data: {}, error: "missing frontmatter" };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }
    data[key] = value;
  }
  return { data };
}

export async function readSkills() {
  const entries = await readdir(skillsDir, { withFileTypes: true });
  const skills = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const file = join(skillsDir, entry.name, "SKILL.md");
    let text;
    try {
      text = await readFile(file, "utf8");
    } catch {
      continue;
    }
    const { data } = parseFrontmatter(text);
    const files = await readdir(join(skillsDir, entry.name), { withFileTypes: true });
    skills.push({
      folder: entry.name,
      ...data,
      path: `skills/${entry.name}`,
      preview: `skills/${entry.name}/preview/index.html`,
      references: files
        .filter((item) => item.isDirectory() && item.name === "references")
        .map(() => `skills/${entry.name}/references`),
      themes: Array.isArray(data.themes) ? data.themes : [],
      tags: Array.isArray(data.tags) ? data.tags : [],
      description_id: data.description_id ?? "",
    });
  }
  return skills.sort((a, b) => a.name.localeCompare(b.name));
}

export async function buildRegistry() {
  const skills = await readSkills();
  return {
    schemaVersion: 1,
    name: "ui-skill-2045",
    description:
      "Curated, rewritten Agent Skills for accessible, intentional frontend and UI work. Bilingual (ID/EN).",
    license: "MIT",
    generatedBy: "scripts/build-registry.mjs",
    themes: themes.map((theme) => ({
      slug: theme.slug,
      name: theme.name,
      primary: Boolean(theme.primary),
      preview: `docs/themes/previews/${theme.slug}.html`,
      doc: `docs/themes/${theme.slug}.md`,
    })),
    count: skills.length,
    skills: skills.map((skill) => ({
      name: skill.name,
      description: skill.description,
      description_id: skill.description_id,
      version: skill.version,
      license: skill.license,
      author: skill.author,
      category: skill.category,
      themes: skill.themes,
      tags: skill.tags,
      source: skill.source,
      additional_sources: Array.isArray(skill.additional_sources) ? skill.additional_sources : [],
      original_author: skill.original_author,
      original_license: skill.original_license,
      upstream_commit: skill.upstream_commit,
      path: skill.path,
      preview: skill.preview,
    })),
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const registry = await buildRegistry();
  await writeFile(join(root, "skills.json"), `${JSON.stringify(registry, null, 2)}\n`, "utf8");
  console.log(`Wrote skills.json with ${registry.count} skills and ${registry.themes.length} themes.`);
}
