"use client";

import Link from "next/link";
import type { Skill, Theme } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { CopyButton } from "./CopyButton";
import { PreviewFrame } from "./PreviewFrame";

export function SkillDetail({
  skill,
  html,
  licenses,
  themes,
}: {
  skill: Skill;
  html: string;
  licenses: string[];
  themes: Theme[];
}) {
  const { lang, t } = useLanguage();
  const description = lang === "id" ? skill.description_id : skill.description;
  const command = `npx ui-skill-2045 add ${skill.name}`;
  const supported = themes.filter((theme) => skill.themes.includes(theme.slug));
  const derived = skill.source.startsWith("https://github.com/");
  const sourceLabel = derived ? skill.source.replace("https://github.com/", "") : "original";

  return (
    <div className="shell">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/skills">{t("nav.skills")}</Link>
        <span aria-hidden="true">/</span>
        <span>{skill.name}</span>
      </nav>

      <header className="detail-head">
        <div>
          <span className="eyebrow">
            {skill.category} · v{skill.version} · {skill.license}
          </span>
          <h1>{skill.name}</h1>
          <p className="lead">{description}</p>
          <div className="card-foot" style={{ marginBottom: 18 }}>
            {skill.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="install-box">
            <code>{command}</code>
            <CopyButton value={command} />
          </div>
          <p className="warning" style={{ marginTop: 14 }}>
            <strong>{t("skill.reviewWarning")}</strong>
          </p>
        </div>

        <aside className="panel" aria-labelledby="meta-title">
          <h2 id="meta-title">{t("skill.metadata")}</h2>
          <ul className="meta-list">
            <li>
              <span className="k">{t("common.version")}</span>
              <span className="v">{skill.version}</span>
            </li>
            <li>
              <span className="k">{t("common.license")}</span>
              <span className="v">{skill.license}</span>
            </li>
            <li>
              <span className="k">{t("common.author")}</span>
              <span className="v">{skill.author}</span>
            </li>
            <li>
              <span className="k">{t("skill.originalLicense")}</span>
              <span className="v">{skill.original_license}</span>
            </li>
            <li>
              <span className="k">{t("common.source")}</span>
              <span className="v">
                {derived ? (
                  <a href={skill.source} target="_blank" rel="noopener noreferrer">
                    {sourceLabel}
                  </a>
                ) : (
                  "original"
                )}
              </span>
            </li>
            {skill.upstream_commit ? (
              <li>
                <span className="k">{t("skill.upstreamCommit")}</span>
                <span className="v">
                  <a
                    href={`${skill.source}/commit/${skill.upstream_commit}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <code>{skill.upstream_commit.slice(0, 7)}</code>
                  </a>
                </span>
              </li>
            ) : null}
            <li>
              <span className="k">{t("skill.upstreamLicenses")}</span>
              <span className="v">{licenses.length > 0 ? licenses.join(", ") : "—"}</span>
            </li>
          </ul>
          <p className="small muted" style={{ margin: "12px 0 0" }}>
            {derived ? t("skill.derived") : t("skill.original")}
          </p>
        </aside>
      </header>

      <PreviewFrame
        src={`/previews/${skill.name}.html`}
        title={`${skill.name} preview`}
        note={t("skill.previewNote")}
      />

      <div className="detail-body">
        <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />
        <aside className="side-panel">
          <section className="panel">
            <h2>{t("skill.themes")}</h2>
            <div className="card-foot">
              {supported.map((theme) => (
                <Link className="tag" href={`/themes/${theme.slug}`} key={theme.slug}>
                  {theme.name}
                </Link>
              ))}
            </div>
          </section>
          {derived ? (
            <section className="panel">
              <h2>{t("skill.attribution")}</h2>
              <p className="small muted">{t("skill.derived")}</p>
              <p className="small">
                {skill.original_author} · {skill.original_license}
              </p>
              {licenses.includes("NOTICE-UPSTREAM.md") ? (
                <p className="tag">{t("skill.notice")}</p>
              ) : null}
            </section>
          ) : null}
          <section className="panel">
            <h2>{t("skill.install")}</h2>
            <div className="install-box">
              <code>{command}</code>
              <CopyButton value={command} />
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
