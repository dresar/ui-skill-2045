"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { CopyButton } from "./CopyButton";

const commands = ["npm run build:skills", "npm run validate", "npm test"];

export function ContributeView() {
  const { t } = useLanguage();
  return (
    <div className="shell" style={{ paddingTop: 36, paddingBottom: 40 }}>
      <span className="eyebrow">2045 · contribution</span>
      <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>{t("contribute.title")}</h1>
      <p className="lead">{t("contribute.lead")}</p>

      <div className="split" style={{ marginTop: 28 }}>
        <ol className="steps">
          <li>
            <strong>{t("contribute.step1")}</strong>
            <p>{t("contribute.step1Body")}</p>
          </li>
          <li>
            <strong>{t("contribute.step2")}</strong>
            <p>{t("contribute.step2Body")}</p>
          </li>
          <li>
            <strong>{t("contribute.step3")}</strong>
            <p>{t("contribute.step3Body")}</p>
          </li>
          <li>
            <strong>{t("contribute.step4")}</strong>
            <p>{t("contribute.step4Body")}</p>
          </li>
        </ol>

        <div className="panel">
          <h2>{t("contribute.commands")}</h2>
          {commands.map((command) => (
            <div className="install-box" key={command} style={{ marginBottom: 10 }}>
              <code>{command}</code>
              <CopyButton value={command} />
            </div>
          ))}
          <h2 style={{ marginTop: 20 }}>SKILL.md</h2>
          <p className="small muted">
            Frontmatter wajib: <code>name</code>, <code>description</code>, <code>version</code>,{" "}
            <code>license</code>, <code>author</code>, <code>themes</code>, <code>tags</code>,{" "}
            <code>source</code>, <code>original_license</code>. Untuk turunan:{" "}
            <code>LICENSE-UPSTREAM</code>, <code>MODIFICATIONS.md</code>, dan{" "}
            <code>upstream_commit</code>.
          </p>
          <p className="small muted">
            Lihat <Link href="/sources">sumber</Link> dan{" "}
            <Link href="/skills/theme-recipes">theme-recipes</Link> untuk contoh lengkap.
          </p>
        </div>
      </div>

      <div className="section" style={{ paddingBottom: 0 }}>
        <h2>Yang tidak boleh dilanggar</h2>
        <div className="table-wrap">
          <table className="data">
            <tbody>
              <tr>
                <td>Lisensi</td>
                <td>Hanya MIT, Apache-2.0, BSD, ISC, CC0. Tanpa lisensi = tidak disalin.</td>
              </tr>
              <tr>
                <td>Atribusi</td>
                <td>Copyright dan teks lisensi asli dipertahankan, tidak diganti nama repo ini.</td>
              </tr>
              <tr>
                <td>Fakta</td>
                <td>URL, versi, commit, dan lisensi diverifikasi langsung di GitHub.</td>
              </tr>
              <tr>
                <td>Rahasia</td>
                <td>Tidak ada token, kredensial, atau data pribadi.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
