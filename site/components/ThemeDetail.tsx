"use client";

import Link from "next/link";
import type { Theme } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { PreviewFrame } from "./PreviewFrame";

type AuditRow = {
  mode: string;
  label: string;
  foreground: string;
  background: string;
  ratio: number;
  required: number;
  pass: boolean;
};

function Swatches({ palette, label }: { palette: Record<string, string>; label: string }) {
  return (
    <div>
      <h3 className="small muted" style={{ marginBottom: 8 }}>
        {label}
      </h3>
      <div className="swatch-grid">
        {Object.entries(palette)
          .filter(([, value]) => typeof value === "string")
          .map(([key, value]) => (
            <div className="swatch" key={key}>
              <div className="chip-color" style={{ background: value }} />
              <div className="chip-meta">
                <span>{key}</span>
                <code>{value}</code>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export function ThemeDetail({ theme, audit }: { theme: Theme; audit: AuditRow[] }) {
  const { lang, t } = useLanguage();
  const useWhen = lang === "id" ? theme.useWhenId : theme.useWhen;
  const avoidWhen = lang === "id" ? theme.avoidWhenId : theme.avoidWhen;
  const antiPatterns = lang === "id" ? theme.antiPatternsId : theme.antiPatterns;

  return (
    <div className="shell">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/themes">{t("nav.themes")}</Link>
        <span aria-hidden="true">/</span>
        <span>{theme.name}</span>
      </nav>

      <header className="detail-head">
        <div className="detail-copy">
          <span className="eyebrow">
            {theme.primary ? `${t("themes.primary")} · ` : ""}
            {theme.radius.md} · {theme.borderWidth}
          </span>
          <h1>{theme.name}</h1>
          <p className="lead">{theme.tagline[lang]}</p>
          <p>{theme.philosophy[lang]}</p>
          <div className="card-foot">
            <span className="tag accent">{theme.radius.sm}</span>
            <span className="tag">{theme.radius.md}</span>
            <span className="tag">{theme.radius.lg}</span>
            <span className="tag">{theme.borderWidth} border</span>
          </div>
        </div>
        <aside className="panel">
          <h2>{t("themes.depth")}</h2>
          <p className="small muted">{theme.depthRule[lang]}</p>
          <h2 style={{ marginTop: 14 }}>{t("themes.preview")}</h2>
          <div className="swatch-row" aria-hidden="true">
            {[theme.light.bg, theme.light.surfaceAlt, theme.light.accent, theme.light.text, theme.light.border].map(
              (color) => (
                <span className="swatch-dot" key={color} style={{ background: color }} />
              ),
            )}
          </div>
        </aside>
      </header>

      <PreviewFrame
        src={`/theme-previews/${theme.slug}.html`}
        title={`${theme.name} preview`}
        heading={t("themes.preview")}
        tall
        note={t("skill.previewNote")}
      />

      <section className="section">
        <div className="section-head">
          <h2>{t("themes.palette")}</h2>
        </div>
        <div className="split">
          <div className="panel">
            <Swatches palette={theme.light} label={t("themes.light")} />
          </div>
          <div className="panel">
            <Swatches palette={theme.dark} label={t("themes.dark")} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <h2>{t("themes.contrast")}</h2>
            <p>{t("themes.chooseNote")}</p>
          </div>
        </div>
        <div className="table-wrap">
          <table className="data">
            <thead>
              <tr>
                <th>{t("themes.mode")}</th>
                <th>{t("themes.pair")}</th>
                <th>{t("themes.ratio")}</th>
                <th>{t("themes.status")}</th>
              </tr>
            </thead>
            <tbody>
              {audit.map((row) => (
                <tr key={`${row.mode}-${row.label}`}>
                  <td>{row.mode}</td>
                  <td>
                    {row.label}
                    <br />
                    <code className="small">
                      {row.foreground} / {row.background}
                    </code>
                  </td>
                  <td>
                    {row.ratio}:1 <span className="muted small">(≥ {row.required}:1)</span>
                  </td>
                  <td>
                    <span className={`ratio ${row.pass ? "pass" : "fail"}`}>
                      {row.pass ? t("themes.pass") : t("themes.fail")}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="split">
          <div className="panel">
            <h2>{t("themes.useWhen")}</h2>
            <ul>
              {useWhen.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 style={{ marginTop: 18 }}>{t("themes.avoidWhen")}</h2>
            <ul>
              {avoidWhen.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <h2>{t("themes.antiPatterns")}</h2>
            <ul>
              {antiPatterns.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 style={{ marginTop: 18 }}>{t("themes.radius")}</h2>
            <div className="card-foot">
              <span className="tag">{theme.radius.sm}</span>
              <span className="tag">{theme.radius.md}</span>
              <span className="tag">{theme.radius.lg}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
