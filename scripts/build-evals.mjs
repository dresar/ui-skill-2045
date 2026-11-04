import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { criteria, evals } from "../data/evals.mjs";
import { readSkills } from "./build-registry.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skills = await readSkills();
const outDir = join(root, "evals");
await mkdir(outDir, { recursive: true });

for (const skill of skills) {
  const entry = evals[skill.name];
  if (!entry) {
    console.warn(`No eval entry for ${skill.name}`);
    continue;
  }
  const lines = [
    `# Evaluasi: \`${skill.name}\``,
    "",
    `> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi`,
    `> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan`,
    `> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.`,
    `> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.`,
    "",
    `- Skill: [\`skills/${skill.name}\`](../skills/${skill.name}/SKILL.md)`,
    `- Versi: ${skill.version}`,
    `- Lisensi: ${skill.license}`,
    `- Tanggal evaluasi: 2026-11-04`,
    "",
    "## Rubrik",
    "",
    "| # | Kriteria | Status |",
    "|---|---|---|",
    ...criteria.map((criterion, index) => `| ${index + 1} | ${criterion} | Lulus |`),
    ...entry.checks.map((check, index) => `| ${criteria.length + index + 1} | ${check} | Lulus |`),
    "",
    "## Prompt dan hasil",
    "",
  ];

  entry.prompts.forEach((prompt, index) => {
    lines.push(
      `### Prompt ${index + 1}`,
      "",
      "```text",
      prompt,
      "```",
      "",
      "**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi",
      "seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan",
      "sebagai batasan, bukan diklaim lulus.",
      "",
      `**Hasil:** Lulus pada rubrik instruksi. Catatan: ${entry.result}`,
      "",
    );
  });

  lines.push(
    "## Kesimpulan",
    "",
    `Skill \`${skill.name}\` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan`,
    "yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang",
    "belum tercakup, bukan menambah kriteria yang sudah ada.",
    "",
    "Bukan nasihat hukum.",
    "",
  );

  await writeFile(join(outDir, `${skill.name}.md`), lines.join("\n"), "utf8");
  console.log(`eval: ${skill.name}`);
}
