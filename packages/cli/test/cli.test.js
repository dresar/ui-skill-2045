import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, writeFile, rm, access } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { parseArgs, selectSkills, loadRegistry, resolveSkillsRoot } from "../lib/cli.js";

const here = dirname(fileURLToPath(import.meta.url));
const bin = join(here, "..", "bin", "ui-skill-2045.js");

function run(args, cwd) {
  const result = spawnSync(process.execPath, [bin, ...args], { cwd, encoding: "utf8" });
  return { code: result.status, out: result.stdout, err: result.stderr };
}

async function tempProject() {
  const dir = await mkdtemp(join(tmpdir(), "ui-skill-"));
  return dir;
}

test("parseArgs separates positionals and flags", () => {
  const options = parseArgs(["add", "anti-slop-design", "--agent", "cursor", "--force"]);
  assert.deepEqual(options._, ["add", "anti-slop-design"]);
  assert.equal(options.agent, "cursor");
  assert.equal(options.force, true);
});

test("parseArgs supports --key=value and rejects unknown flags", () => {
  const options = parseArgs(["add", "--theme=cyber-neon"]);
  assert.equal(options.theme, "cyber-neon");
  assert.throws(() => parseArgs(["--nope"]), /Unknown option/);
  assert.throws(() => parseArgs(["--agent"]), /requires a value/);
});

test("selectSkills returns all, by theme, and by name", async () => {
  const registry = await loadRegistry(await resolveSkillsRoot());
  assert.equal(registry.count, 18);
  assert.ok(selectSkills(registry, { all: true }).length === 18);
  const darkSkills = selectSkills(registry, { theme: "cyber-neon" });
  assert.ok(darkSkills.includes("theme-recipes"));
  assert.deepEqual(selectSkills(registry, { _: ["add", "ui-components"] }), ["ui-components"]);
  assert.throws(() => selectSkills(registry, { _: ["add", "not-a-skill"] }), /Unknown skill/);
});

test("list prints every skill", async () => {
  const cwd = await tempProject();
  const { code, out } = run(["list"], cwd);
  assert.equal(code, 0);
  assert.match(out, /18 skills/);
  assert.match(out, /anti-slop-design/);
  assert.match(out, /theme-recipes/);
});

test("add installs one skill into the requested agent directory", async () => {
  const cwd = await tempProject();
  const { code } = run(["add", "ui-components", "--agent", "cursor"], cwd);
  assert.equal(code, 0);
  const installed = join(cwd, ".cursor", "skills", "ui-components", "SKILL.md");
  const content = await readFile(installed, "utf8");
  assert.match(content, /name: ui-components/);
  assert.match(content, /Bahasa Indonesia/);
});

test("add --theme installs every matching skill", async () => {
  const cwd = await tempProject();
  const { code } = run(["add", "--theme", "cyber-neon", "--dir", "custom"], cwd);
  assert.equal(code, 0);
  const content = await readFile(join(cwd, "custom", "theme-recipes", "SKILL.md"), "utf8");
  assert.match(content, /cyber-neon/);
});

test("existing files are never overwritten without --force", async () => {
  const cwd = await tempProject();
  run(["add", "color-contrast", "--dir", "skills"], cwd);
  const skillFile = join(cwd, "skills", "color-contrast", "SKILL.md");
  await writeFile(skillFile, "LOCAL EDIT", "utf8");
  const second = run(["add", "color-contrast", "--dir", "skills"], cwd);
  assert.match(second.out, /skipped/);
  assert.equal(await readFile(skillFile, "utf8"), "LOCAL EDIT");
  const forced = run(["add", "color-contrast", "--dir", "skills", "--force"], cwd);
  assert.equal(forced.code, 0);
  assert.match(await readFile(skillFile, "utf8"), /name: color-contrast/);
});

test("update reports outdated skills and requires --force", async () => {
  const cwd = await tempProject();
  run(["add", "typography-system", "--dir", "skills"], cwd);
  const file = join(cwd, "skills", "typography-system", "SKILL.md");
  await writeFile(file, "OLD", "utf8");
  const update = run(["update", "--dir", "skills"], cwd);
  assert.match(update.out, /outdated/);
  assert.equal(await readFile(file, "utf8"), "OLD");
  const forced = run(["update", "--dir", "skills", "--force"], cwd);
  assert.equal(forced.code, 0);
  assert.match(await readFile(file, "utf8"), /name: typography-system/);
});

test("remove deletes only the installed skill directory", async () => {
  const cwd = await tempProject();
  run(["add", "dark-mode", "--dir", "skills"], cwd);
  await mkdir(join(cwd, "other"), { recursive: true });
  await writeFile(join(cwd, "other", "keep.txt"), "keep", "utf8");
  const { code, out } = run(["remove", "dark-mode", "--dir", "skills"], cwd);
  assert.equal(code, 0);
  assert.match(out, /removed/);
  await assert.rejects(access(join(cwd, "skills", "dark-mode")));
  assert.equal(await readFile(join(cwd, "other", "keep.txt"), "utf8"), "keep");
});

test("remove refuses a non-skill directory", async () => {
  const cwd = await tempProject();
  await mkdir(join(cwd, "skills", "dark-mode"), { recursive: true });
  await writeFile(join(cwd, "skills", "dark-mode", "important.txt"), "data", "utf8");
  const { out, err } = run(["remove", "dark-mode", "--dir", "skills"], cwd);
  assert.match(`${out}${err}`, /refused/);
  assert.equal(await readFile(join(cwd, "skills", "dark-mode", "important.txt"), "utf8"), "data");
});

test("clear error for unknown skill and unknown agent", async () => {
  const cwd = await tempProject();
  const missing = run(["add", "does-not-exist", "--dir", "skills"], cwd);
  assert.equal(missing.code, 1);
  assert.match(missing.err, /Unknown skill "does-not-exist"/);
  const agent = run(["add", "dark-mode", "--agent", "nope"], cwd);
  assert.equal(agent.code, 1);
  assert.match(agent.err, /Unknown agent "nope"/);
});

test("cleanup temporary directories", async () => {
  await rm(join(tmpdir(), "ui-skill-"), { recursive: true, force: true });
  assert.ok(true);
});
