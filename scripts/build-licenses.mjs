import { readdir, readFile, writeFile, copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = join(root, "skills");
const licenseDir = join(root, "docs", "upstream-licenses");

const licenses = {
  anthropic: {
    file: "anthropic-apache-2.0.txt",
    label: "Apache License 2.0 — Anthropic, PBC",
    repo: "anthropics/skills",
    path: "skills/frontend-design",
    commit: "ca45fc496a3436251f191354091d557da31c15b5",
    apache: true,
  },
  paulbakaus: {
    file: "paulbakaus-apache-2.0.txt",
    label: "Apache License 2.0 — Copyright 2025 Paul Bakaus",
    repo: "pbakaus/impeccable",
    path: "skill/",
    commit: "695cea5c6d1cbd420fc331375c7ef126a774e5f7",
    apache: true,
  },
  nextlevelbuilder: {
    file: "nextlevelbuilder-mit.txt",
    label: "MIT — Copyright (c) 2024 Next Level Builder",
    repo: "nextlevelbuilder/ui-ux-pro-max-skill",
    path: "src/",
    commit: "ccce51cba388476d4f403091ddb91636d5cd9fed",
  },
  leonxlnx: {
    file: "leonxlnx-mit.txt",
    label: "MIT — Copyright (c) 2026 Leonxlnx",
    repo: "Leonxlnx/taste-skill",
    path: "skills/taste-skill",
    commit: "12af471f627f866411b4bd785b19646d3672784c",
  },
  mengto: {
    file: "mengto-mit.txt",
    label: "MIT — Copyright (c) 2026 Meng To",
    repo: "MengTo/Skills",
    path: "agent-skills/web-design",
    commit: "1de14e21b2ba8937c0f7f6ddca581cf7cd9d94af",
  },
  ibelick: {
    file: "ibelick-mit.txt",
    label: "MIT — Copyright (c) 2026 Julien Thibeaut",
    repo: "ibelick/ui-skills",
    path: "skills/",
    commit: "73fb128d046d1f0d74c2909cd26eb616e3415567",
  },
  palamut62: {
    file: "palamut62-mit.txt",
    label: "MIT — Copyright (c) 2026 palamut62",
    repo: "umutc6230/ui-design-skills-pack",
    path: "repository root",
    commit: "4ffc9d638e32f1332fc7ac74e3060e6278743d4b",
  },
};

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
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
  return data;
}

function licenseKeyFor(url) {
  if (url.includes("anthropics/skills")) return "anthropic";
  if (url.includes("pbakaus/impeccable")) return "paulbakaus";
  if (url.includes("nextlevelbuilder/ui-ux-pro-max-skill")) return "nextlevelbuilder";
  if (url.includes("Leonxlnx/taste-skill")) return "leonxlnx";
  if (url.includes("MengTo/Skills")) return "mengto";
  if (url.includes("ibelick/ui-skills")) return "ibelick";
  if (url.includes("palamut62") || url.includes("umutc6230")) return "palamut62";
  return null;
}

function modificationsMarkdown(skill, keys) {
  const sources = keys
    .map((key) => {
      const info = licenses[key];
      return `- ${info.label} — https://github.com/${info.repo}, folder \`${info.path}\`, commit \`${info.commit}\``;
    })
    .join("\n");
  return `# Modifications / Perubahan

This directory contains a **modified, rewritten work**, not an upstream copy.

## Sources

${sources}

## Files and changes

| File | Status | Change |
|---|---|---|
| \`SKILL.md\` | Modified | Rewritten and restructured on 2026-11-04; condensed; new workflow, defaults, anti-patterns, checklist, bilingual section, and examples written for this repository. |
| \`preview/index.html\` | New | Original standalone preview generated for ui-skill-2045. No upstream markup or asset copied. |
| \`references/*\` | New | Original reference notes written for this repository. |
| \`LICENSE-UPSTREAM*\` | Copied verbatim | Upstream license text, preserved in full. |
| \`NOTICE-UPSTREAM.md\` | Copied verbatim | Present only for works derived from Apache-2.0 sources that ship a NOTICE. |

Upstream copyright notices are retained in the license files and are not replaced with the name
of this repository.

## Date

2026-11-04.
`;
}

const entries = await readdir(skillsDir, { withFileTypes: true });
const registry = [];
const usages = [];

for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  const skillPath = join(skillsDir, entry.name, "SKILL.md");
  let text;
  try {
    text = await readFile(skillPath, "utf8");
  } catch {
    continue;
  }
  const skill = parseFrontmatter(text);
  const urls = [skill.source, ...(Array.isArray(skill.additional_sources) ? skill.additional_sources : [])]
    .filter(Boolean)
    .filter((url) => url.startsWith("https://github.com/"));
  const keys = [...new Set(urls.map(licenseKeyFor).filter(Boolean))];

  if (keys.length === 0) {
    registry.push({ name: entry.name, keys, source: skill.source ?? null });
    continue;
  }

  const dir = join(skillsDir, entry.name);
  for (const [index, key] of keys.entries()) {
    const filename = index === 0 ? "LICENSE-UPSTREAM" : `LICENSE-UPSTREAM-${key}.txt`;
    await copyFile(join(licenseDir, licenses[key].file), join(dir, filename));
    usages.push({ skill: entry.name, key, filename });
  }

  if (keys.includes("paulbakaus")) {
    await copyFile(
      join(licenseDir, "impeccable-NOTICE.md"),
      join(dir, "NOTICE-UPSTREAM.md"),
    );
  }

  await writeFile(join(dir, "MODIFICATIONS.md"), modificationsMarkdown(skill, keys), "utf8");
  registry.push({ name: entry.name, keys, source: skill.source ?? null, frontmatter: skill });
}

await mkdir(licenseDir, { recursive: true });

const usedKeys = new Set(usages.map((usage) => usage.key));
const usageLines = (key) =>
  usages
    .filter((usage) => usage.key === key)
    .map((usage) => `\`skills/${usage.skill}/${usage.filename}\``)
    .join(", ");

const notice = `# Third-Party Notices

This repository contains original work plus **rewritten derivative works** of permissively
licensed Agent Skills. Upstream copyright notices and license texts are preserved. They are
**not** replaced with the name of this repository.

Verified on **4 November 2026** against the repositories below. See \`docs/sources.md\` for the
full research log and \`docs/rejected-sources.md\` for what was rejected and why.

## Sources used

${Object.entries(licenses)
  .filter(([key]) => usedKeys.has(key))
  .map(
    ([key, info]) => `### ${info.label}

- Repository: https://github.com/${info.repo}
- Path read: \`${info.path}\`
- Commit: \`${info.commit}\`
- License file: \`docs/upstream-licenses/${info.file}\`
- Used by: ${usageLines(key)}
${info.apache ? `- Apache NOTICE: ${info.repo === "pbakaus/impeccable" ? "`docs/upstream-licenses/impeccable-NOTICE.md`, copied as `NOTICE-UPSTREAM.md`" : "upstream ships no separate NOTICE file"}` : ""}
`,
  )
  .join("\n")}

## Skills and their upstream basis

| Skill | Upstream license(s) | Changes |
|---|---|---|
${registry
  .filter((item) => item.keys.length > 0)
  .map(
    (item) =>
      `| \`${item.name}\` | ${item.keys.map((key) => licenses[key].label).join("<br>")} | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See \`skills/${item.name}/MODIFICATIONS.md\`. |`,
  )
  .join("\n")}

## Apache-2.0 NOTICE

The following notice is reproduced verbatim from \`pbakaus/impeccable\`, as required by
Apache License 2.0, section 4(d):

\`\`\`text
${(await readFile(join(licenseDir, "impeccable-NOTICE.md"), "utf8")).trim()}
\`\`\`

## Full license texts

- Apache License 2.0 (Anthropic, PBC): \`docs/upstream-licenses/anthropic-apache-2.0.txt\`
- Apache License 2.0 (Copyright 2025 Paul Bakaus): \`docs/upstream-licenses/paulbakaus-apache-2.0.txt\`
- MIT (Next Level Builder): \`docs/upstream-licenses/nextlevelbuilder-mit.txt\`
- MIT (Leonxlnx): \`docs/upstream-licenses/leonxlnx-mit.txt\`
- MIT (Meng To): \`docs/upstream-licenses/mengto-mit.txt\`
- MIT (Julien Thibeaut): \`docs/upstream-licenses/ibelick-mit.txt\`

Verified but **not currently used by any skill**: \`palamut62/ui-design-skills-pack\`
(\`docs/upstream-licenses/palamut62-mit.txt\`). It is recorded in \`docs/sources.md\` as an accepted
candidate; no text from it is included.

## Works referenced but not copied

\`vercel-labs/agent-skills\` (https://github.com/vercel-labs/agent-skills, commit
\`1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62\`) has **no license file**. It is referenced for
further reading only. No text, code, or file structure from it was copied. The same applies to
the rejected sources listed in \`docs/rejected-sources.md\`.

## No affiliation

This repository is not affiliated with, sponsored by, or endorsed by Anthropic, Paul Bakaus,
Next Level Builder, Leonxlnx, Meng To, Julien Thibeaut, palamut62, or Vercel Labs.

## Not legal advice

This document records engineering practice, not legal advice. Review it with qualified counsel
before relying on it commercially.
`;
await writeFile(join(root, "THIRD_PARTY_NOTICES.md"), notice, "utf8");

console.log(`Licenses copied for ${registry.filter((item) => item.keys.length > 0).length} skills.`);
console.log(`Third-party notices written.`);
