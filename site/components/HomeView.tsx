"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Registry, Theme } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { SkillCard } from "./SkillCard";
import { SkillGlyph } from "./SkillGlyph";
import { ThemeCard } from "./ThemeCard";

const featured = [
  "anti-slop-design",
  "design-system-tokens",
  "accessibility-wcag",
  "dashboard-admin",
  "nextjs-react-patterns",
  "theme-recipes",
];

export function HomeView({ registry, themes }: { registry: Registry; themes: Theme[] }) {
  const { t, lang } = useLanguage();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const skills = featured
    .map((name) => registry.skills.find((skill) => skill.name === name))
    .filter((skill): skill is NonNullable<typeof skill> => Boolean(skill));
  const quick = skills.slice(0, 3);

  return (
    <>
      <section className="shell hero">
        <section className="hero-main">
          <span className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            2045 · {lang === "id" ? "UI untuk agen" : "UI for agents"}
          </span>
          <h1>
            {t("home.title")}
            <span>{t("home.titleThin")}</span>
          </h1>
          <p className="intro">{t("home.lead")}</p>

          <div className="hero-actions">
            <Link className="btn btn-primary" href="/skills">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 12h12M11 7l5 5-5 5" />
                <path d="M16 5h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
              </svg>
              {t("home.primaryCta")}
            </Link>
            <Link className="btn btn-soft" href="/install">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3.5v11" />
                <path d="m7.5 10 4.5 4.5 4.5-4.5" />
                <path d="M4 16.5v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
              </svg>
              {t("home.secondaryCta")}
            </Link>
          </div>

          <form
            className="search"
            role="search"
            onSubmit={(event) => {
              event.preventDefault();
              router.push(`/skills/?q=${encodeURIComponent(query)}`);
            }}
          >
            <label className="sr-only" htmlFor="home-search">
              {t("home.searchLabel")}
            </label>
            <input
              id="home-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("home.searchPlaceholder")}
            />
            <button className="btn btn-primary btn-small" type="submit">
              {t("home.searchCta")}
            </button>
          </form>

          <div className="stats">
            <div className="stat">
              <strong>{registry.count}</strong>
              <span>{t("home.stats.skills")}</span>
            </div>
            <div className="stat">
              <strong>{themes.length}</strong>
              <span>{t("home.stats.themes")}</span>
            </div>
            <div className="stat">
              <strong>{themes.length * 8}</strong>
              <span>{t("home.stats.checks")}</span>
            </div>
          </div>
        </section>

        <aside className="hero-side">
          <section className="panel">
            <div className="panel-head">
              <h2>{t("home.quickstart")}</h2>
              <Link className="see-all" href="/skills">
                {t("common.viewAll")}
              </Link>
            </div>
            <div className="list-stack">
              {quick.map((skill) => (
                <Link className="list-row" href={`/skills/${skill.name}`} key={skill.name}>
                  <span className="icon-tile" aria-hidden="true">
                    <SkillGlyph category={skill.category} />
                  </span>
                  <span className="row-copy">
                    <strong>{skill.name}</strong>
                    <span>
                      {skill.category} · {skill.tags.slice(0, 2).join(" · ")}
                    </span>
                  </span>
                  <span className="arrow" aria-hidden="true">
                    ›
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="panel">
            <div className="progress-top">
              <strong>{t("home.quality")}</strong>
              <span>{themes.length * 8}/{themes.length * 8}</span>
            </div>
            <div className="track">
              <div className="fill" style={{ width: "100%" }} />
            </div>
            <p className="small muted" style={{ margin: "12px 0 0" }}>
              {t("home.qualityNote")}
            </p>
          </section>
        </aside>
      </section>

      <section className="shell section">
        <div className="section-head">
          <div>
            <h2>{t("home.skillPicks")}</h2>
            <p>{t("home.skillPicksLead")}</p>
          </div>
          <Link className="btn btn-soft btn-small" href="/skills">
            {t("common.viewAll")}
          </Link>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </section>

      <section className="shell section">
        <div className="section-head">
          <div>
            <h2>{t("home.themes")}</h2>
            <p>{t("home.themesLead")}</p>
          </div>
          <Link className="btn btn-soft btn-small" href="/themes">
            {t("common.viewAll")}
          </Link>
        </div>
        <div className="theme-grid">
          {themes.slice(0, 6).map((theme) => (
            <ThemeCard key={theme.slug} theme={theme} />
          ))}
        </div>
      </section>

      <section className="shell section">
        <div className="section-head">
          <div>
            <h2>{t("home.how")}</h2>
            <p>{t("home.howLead")}</p>
          </div>
        </div>
        <div className="split">
          <ol className="steps">
            <li>
              <strong>{t("home.step1.title")}</strong>
              <p>{t("home.step1.body")}</p>
            </li>
            <li>
              <strong>{t("home.step2.title")}</strong>
              <p>{t("home.step2.body")}</p>
            </li>
            <li>
              <strong>{t("home.step3.title")}</strong>
              <p>{t("home.step3.body")}</p>
            </li>
          </ol>
          <div className="panel">
            <h2>{t("home.ctaTitle")}</h2>
            <p className="muted">{t("home.ctaLead")}</p>
            <div className="hero-actions" style={{ marginBottom: 0 }}>
              <Link className="btn btn-primary" href="/skills/anti-slop-design">
                anti-slop-design
              </Link>
              <Link className="btn btn-soft" href="/install">
                {t("nav.install")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
