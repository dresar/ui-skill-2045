import { access, cp, mkdir, readFile, readdir, rm, stat } from "node:fs/promises";
import { constants } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const packageRoot = resolve(here, "..");

export const AGENTS = {
  claude: ".claude/skills",
  agents: ".agents/skills",
  codex: ".codex/skills",
  cursor: ".cursor/skills",
  github: ".github/skills",
  copilot: ".github/skills",
  gemini: ".gemini/skills",
  windsurf: ".windsurf/skills",
  antigravity: ".agent/skills",
};

export async function resolveSkillsRoot() {
  const candidates = [
    process.env.UI_SKILL_2045_SKILLS,
    join(packageRoot, "skills"),
    join(packageRoot, "..", "..", "skills"),
    join(packageRoot, "..", "..", "..", "skills"),
  ].filter(Boolean);
  for (const candidate of candidates) {
    try {
      await access(join(candidate, "design-system-tokens", "SKILL.md"), constants.R_OK);
      return resolve(candidate);
    } catch {
      // try next candidate
    }
  }
  throw new Error(
    "Could not find the bundled skills directory. Reinstall the package or set UI_SKILL_2045_SKILLS.",
  );
}

export function parseArgs(argv) {
  const options = { _: [], force: false, all: false, json: false, help: false, version: false };
  const takesValue = new Set(["skill", "theme", "agent", "dir"]);
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith("--")) {
      options._.push(token);
      continue;
    }
    const [rawKey, inlineValue] = token.slice(2).split("=");
    const key = rawKey.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    if (key === "force" || key === "all" || key === "json" || key === "help" || key === "version") {
      options[key] = true;
      continue;
    }
    if (takesValue.has(key)) {
      const value = inlineValue ?? argv[index + 1];
      if (!value || (inlineValue === undefined && value.startsWith("--"))) {
        throw new Error(`--${rawKey} requires a value.`);
      }
      if (inlineValue === undefined) index += 1;
      options[key] = value;
      continue;
    }
    throw new Error(`Unknown option: --${rawKey}`);
  }
  return options;
}

export async function loadRegistry(skillsRoot) {
  const registryPath = join(skillsRoot, "..", "skills.json");
  try {
    return JSON.parse(await readFile(registryPath, "utf8"));
  } catch {
    const entries = await readdir(skillsRoot, { withFileTypes: true });
    const skills = [];
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const file = join(skillsRoot, entry.name, "SKILL.md");
      try {
        const text = await readFile(file, "utf8");
        const name = text.match(/^name:\s*(.+)$/m)?.[1]?.trim() ?? entry.name;
        const version = text.match(/^version:\s*(.+)$/m)?.[1]?.trim() ?? "0.0.0";
        const category = text.match(/^category:\s*(.+)$/m)?.[1]?.trim() ?? "ui";
        const themesRaw = text.match(/^themes:\s*\[(.*)\]$/m)?.[1] ?? "";
        const themes = themesRaw.split(",").map((item) => item.trim()).filter(Boolean);
        skills.push({ name, version, category, themes, folder: entry.name });
      } catch {
        // ignore folders without SKILL.md
      }
    }
    return { count: skills.length, skills };
  }
}

export async function detectAgent(cwd = process.cwd()) {
  for (const [agent, relative] of Object.entries(AGENTS)) {
    try {
      const info = await stat(join(cwd, relative));
      if (info.isDirectory()) return agent;
    } catch {
      // not present
    }
  }
  return "agents";
}

export function resolveTargetDir(options, cwd = process.cwd(), agentOverride = null) {
  if (options.dir) return resolve(cwd, options.dir);
  const agent = agentOverride ?? options.agent ?? "agents";
  const relative = AGENTS[agent];
  if (!relative) {
    throw new Error(
      `Unknown agent "${agent}". Use one of: ${Object.keys(AGENTS).join(", ")}, or pass --dir <path>.`,
    );
  }
  return join(resolve(cwd), relative);
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function copyDirectory(source, target, { force }) {
  if (await exists(target)) {
    if (!force) {
      let same = true;
      try {
        const sourceFiles = await readdir(source, { recursive: true });
        for (const relative of sourceFiles) {
          const sourceFile = join(source, relative);
          const info = await stat(sourceFile);
          if (!info.isFile()) continue;
          const targetFile = join(target, relative);
          const [a, b] = await Promise.all([readFile(sourceFile), readFile(targetFile)]);
          if (!a.equals(b)) same = false;
        }
      } catch {
        same = false;
      }
      if (same) return { status: "unchanged", target };
      return { status: "skipped", target, reason: "exists with different content; rerun with --force" };
    }
    await rm(target, { recursive: true, force: true });
  }
  await mkdir(dirname(target), { recursive: true });
  await cp(source, target, { recursive: true });
  return { status: "installed", target };
}

export async function installSkills(names, { skillsRoot, targetDir, force, remove = false }) {
  const results = [];
  for (const name of names) {
    const source = join(skillsRoot, name);
    if (!(await exists(join(source, "SKILL.md")))) {
      results.push({ name, status: "missing", target: join(targetDir, name) });
      continue;
    }
    const target = join(targetDir, name);
    if (remove) {
      if (!(await exists(target))) {
        results.push({ name, status: "not-installed", target });
        continue;
      }
      const installedSkill = join(target, "SKILL.md");
      if (!(await exists(installedSkill))) {
        results.push({ name, status: "refused", target, reason: "target is not a skill directory" });
        continue;
      }
      await rm(target, { recursive: true, force: true });
      results.push({ name, status: "removed", target });
      continue;
    }
    results.push({ name, ...(await copyDirectory(source, target, { force })) });
  }
  return results;
}

export function selectSkills(registry, options) {
  const names = new Set(registry.skills.map((skill) => skill.name));
  if (options.all) return [...names].sort();
  if (options.theme) {
    const selected = registry.skills
      .filter((skill) => Array.isArray(skill.themes) && skill.themes.includes(options.theme))
      .map((skill) => skill.name)
      .sort();
    if (selected.length === 0) {
      throw new Error(`No skills use theme "${options.theme}". Run "ui-skill-2045 list" to see themes.`);
    }
    return selected;
  }
  const requested = options.skill ?? options._[1];
  if (!requested) {
    throw new Error(
      "Specify a skill name, or use --all / --theme <theme>. Example: npx ui-skill-2045 add anti-slop-design",
    );
  }
  if (!names.has(requested)) {
    throw new Error(`Unknown skill "${requested}". Run "ui-skill-2045 list" to see available skills.`);
  }
  return [requested];
}

export function helpText() {
  return `ui-skill-2045 — install accessible, intentional UI skills

Usage
  npx ui-skill-2045 list [--json]
  npx ui-skill-2045 add <skill> [--agent <agent>] [--dir <path>] [--force]
  npx ui-skill-2045 add --all [--agent <agent>] [--dir <path>] [--force]
  npx ui-skill-2045 add --theme <theme> [--agent <agent>] [--dir <path>] [--force]
  npx ui-skill-2045 remove <skill> [--agent <agent>] [--dir <path>]
  npx ui-skill-2045 update [--agent <agent>] [--dir <path>] [--force]

Options
  --skill <name>   Alias for "add <name>" (compatibility with other skill CLIs)
  --agent <name>   ${Object.keys(AGENTS).join(", ")}
  --dir <path>     Explicit destination directory (overrides --agent)
  --force          Overwrite existing skill directories
  --json           Machine-readable output for "list"
  --help           Show this help
  --version        Show the version

Agents
${Object.entries(AGENTS)
  .map(([agent, relative]) => `  ${agent.padEnd(12)} ${relative}`)
  .join("\n")}

Safety
  Existing directories are never overwritten without --force. "update" reports outdated
  skills and requires --force to replace them. Review skills before installing them.
`;
}

export async function main(argv) {
  const options = parseArgs(argv);
  const command = options._[0] ?? "help";

  if (options.help || command === "help") {
    console.log(helpText());
    return;
  }
  if (options.version || command === "version") {
    const pkg = JSON.parse(await readFile(join(packageRoot, "package.json"), "utf8"));
    console.log(pkg.version);
    return;
  }

  const skillsRoot = await resolveSkillsRoot();
  const registry = await loadRegistry(skillsRoot);

  if (command === "list") {
    if (options.json) {
      console.log(JSON.stringify(registry.skills, null, 2));
      return;
    }
    console.log(`\n${registry.count} skills · ${registry.themes?.length ?? 0} themes\n`);
    const rows = registry.skills.map((skill) => ({
      name: skill.name,
      category: skill.category ?? "ui",
      version: skill.version,
      themes: String(skill.themes?.length ?? 0),
    }));
    const widths = {
      name: Math.max(4, ...rows.map((row) => row.name.length)),
      category: Math.max(8, ...rows.map((row) => row.category.length)),
    };
    console.log(
      `${"NAME".padEnd(widths.name)}  ${"CATEGORY".padEnd(widths.category)}  VERSION  THEMES`,
    );
    for (const row of rows) {
      console.log(
        `${row.name.padEnd(widths.name)}  ${row.category.padEnd(widths.category)}  ${row.version.padEnd(7)}  ${row.themes}`,
      );
    }
    console.log(`\nInstall one: npx ui-skill-2045 add <name>`);
    return;
  }

  if (command === "add" || command === "install") {
    const names = selectSkills(registry, options);
    const targetDir = resolveTargetDir(
      options,
      process.cwd(),
      options.agent || options.dir ? null : await detectAgent(),
    );
    const results = await installSkills(names, { skillsRoot, targetDir, force: options.force });
    for (const result of results) {
      if (result.status === "installed") console.log(`installed  ${result.name} -> ${result.target}`);
      else if (result.status === "unchanged") console.log(`unchanged  ${result.name} (already identical)`);
      else if (result.status === "skipped") console.log(`skipped    ${result.name}: ${result.reason}`);
      else if (result.status === "missing") console.error(`missing    ${result.name} (not in the bundle)`);
      else console.log(`${result.status}  ${result.name} -> ${result.target}`);
    }
    if (results.some((result) => result.status === "missing")) process.exitCode = 1;
    if (results.some((result) => result.status === "skipped") && !options.force) {
      console.log("\nTip: pass --force to replace skills that already exist with different content.");
    }
    return;
  }

  if (command === "remove" || command === "rm") {
    const name = options._[1] ?? options.skill;
    if (!name) throw new Error("Specify the skill to remove. Example: ui-skill-2045 remove anti-slop-design");
    if (!registry.skills.some((skill) => skill.name === name)) {
      throw new Error(`Unknown skill "${name}".`);
    }
    const targetDir = resolveTargetDir(options);
    const results = await installSkills([name], { skillsRoot, targetDir, remove: true });
    for (const result of results) {
      if (result.status === "removed") console.log(`removed    ${result.name} from ${result.target}`);
      else if (result.status === "not-installed") console.log(`not found  ${result.name} in ${result.target}`);
      else console.error(`refused    ${result.name}: ${result.reason ?? "unknown reason"}`);
    }
    return;
  }

  if (command === "update") {
    const targetDir = resolveTargetDir(
      options,
      process.cwd(),
      options.agent || options.dir ? null : await detectAgent(),
    );
    const checked = [];
    for (const name of registry.skills.map((skill) => skill.name)) {
      if (await exists(join(targetDir, name))) checked.push(name);
    }
    if (checked.length === 0) {
      console.log(`No installed skills found in ${targetDir}.`);
      return;
    }
    const results = await installSkills(checked, { skillsRoot, targetDir, force: options.force });
    let outdated = 0;
    for (const result of results) {
      if (result.status === "unchanged") console.log(`up to date  ${result.name}`);
      else if (result.status === "installed") console.log(`updated     ${result.name}`);
      else if (result.status === "skipped") {
        outdated += 1;
        console.log(`outdated    ${result.name} (rerun with --force to replace)`);
      }
    }
    if (outdated > 0) console.log(`\n${outdated} skill(s) need --force to be replaced.`);
    return;
  }

  throw new Error(`Unknown command "${command}". Run "ui-skill-2045 help".`);
}
