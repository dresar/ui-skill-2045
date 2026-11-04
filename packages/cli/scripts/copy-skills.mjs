import { cp, copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const cliRoot = join(here, "..");
const repoRoot = join(cliRoot, "..", "..");
const target = join(cliRoot, "skills");

await mkdir(target, { recursive: true });
await cp(join(repoRoot, "skills"), target, { recursive: true });
await copyFile(join(repoRoot, "skills.json"), join(cliRoot, "skills.json"));
console.log("Bundled skills and skills.json for npm pack.");
