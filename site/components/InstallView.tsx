"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { CopyButton } from "./CopyButton";

const agents = [
  ["Claude Code", ".claude/skills", "--agent claude"],
  ["Codex", ".codex/skills", "--agent codex"],
  ["Agent Skills", ".agents/skills", "--agent agents"],
  ["GitHub Copilot", ".github/skills", "--agent github"],
  ["Cursor", ".cursor/skills", "--agent cursor"],
  ["Gemini CLI", ".gemini/skills", "--agent gemini"],
  ["Windsurf", ".windsurf/skills", "--agent windsurf"],
  ["Antigravity", ".agent/skills", "--agent antigravity"],
];

function Command({ value }: { value: string }) {
  return (
    <div className="install-box">
      <code>{value}</code>
      <CopyButton value={value} />
    </div>
  );
}

export function InstallView() {
  const { t } = useLanguage();
  return (
    <div className="shell" style={{ paddingTop: 36, paddingBottom: 40 }}>
      <span className="eyebrow">2045 · three paths</span>
      <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>{t("install.title")}</h1>
      <p className="lead">{t("install.lead")}</p>

      <p className="warning" style={{ margin: "20px 0 28px" }}>
        <strong>{t("skill.reviewWarning")}</strong>
        {t("install.warning")}
      </p>

      <div className="section" style={{ paddingTop: 0 }}>
        <h2>{t("install.path1")}</h2>
        <p className="muted">{t("install.path1Body")}</p>
        <Command value="npx skills add dresar/ui-skill-2045" />
        <div style={{ height: 10 }} />
        <Command value="npx skills add dresar/ui-skill-2045 --skill anti-slop-design" />
      </div>

      <div className="section">
        <h2>{t("install.path2")}</h2>
        <p className="muted">{t("install.path2Body")}</p>
        <Command value="npx ui-skill-2045 list" />
        <div style={{ height: 10 }} />
        <Command value="npx ui-skill-2045 add anti-slop-design" />
        <div style={{ height: 10 }} />
        <Command value="npx ui-skill-2045 add --all --agent cursor" />
        <div style={{ height: 10 }} />
        <Command value="npx ui-skill-2045 add --theme soft-blue-neumorphism --dir .claude/skills" />
        <div style={{ height: 10 }} />
        <Command value="npx ui-skill-2045 update" />
        <p className="notice" style={{ marginTop: 14 }}>
          {t("install.publishNote")}
        </p>
      </div>

      <div className="section">
        <h2>{t("install.path3")}</h2>
        <p className="muted">{t("install.path3Body")}</p>
        <Command value="git clone https://github.com/dresar/ui-skill-2045.git" />
        <div style={{ height: 10 }} />
        <Command value="cp -r ui-skill-2045/skills/dark-mode .agents/skills/" />
      </div>

      <div className="section">
        <h2>{t("install.agents")}</h2>
        <div className="table-wrap">
          <table className="data">
            <thead>
              <tr>
                <th>Agent</th>
                <th>Folder</th>
                <th>Flag</th>
              </tr>
            </thead>
            <tbody>
              {agents.map(([name, folder, flag]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>
                    <code>{folder}</code>
                  </td>
                  <td>
                    <code>{flag}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section" style={{ paddingBottom: 0 }}>
        <div className="panel">
          <h2>Safety</h2>
          <p className="muted">
            {t("install.path2Body")} <code>remove</code> refuses to delete a directory without a
            <code> SKILL.md</code>.
          </p>
          <Link className="btn btn-primary" href="/skills">
            {t("home.primaryCta")}
          </Link>
        </div>
      </div>
    </div>
  );
}
