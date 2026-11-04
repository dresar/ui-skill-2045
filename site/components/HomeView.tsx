"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Registry, Theme } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { SkillCard } from "./SkillCard";
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
  const { t } = useLanguage();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const skills = featured
    .map((name) => registry.skills.find((skill) => skill.name === name))
    .filter((skill): skill is NonNullable<typeof skill> => Boolean(skill));

  return (
    <>
      <section className="shell hero">
        <div>
          <span className="eyebrow">{t("home.eyebrow")}</span>
          <h1>
            {t("home.title")}
            <span className="thin">{t("home.titleThin")}</span>
          </h1>
          <p className="lead">{t("home.lead")}</p>
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
            <button className="btn btn-primary" type="submit">
              {t("home.searchCta")}
            </button>
          </form>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/skills">
              {t("home.primaryCta")}
            </Link>
            <Link className="btn" href="/install">
              {t("home.secondaryCta")}
            </Link>
          </div>
        </div>
        <aside className="hero-panel" aria-label="2045">
          <div className="big">
            2045
            <span>{t("home.panelLabel")}</span>
          </div>
          <div className="hero-chips">
            <span className="tag accent">18 skills</span>
            <span className="tag">11 themes</span>
            <span className="tag">ID / EN</span>
            <span className="tag">WCAG AA</span>
            <span className="tag">MIT</span>
          </div>
          <p className="hero-note">{t("home.panelNote")}</p>
        </aside>
      </section>

      <section className="shell" aria-label="Statistics">
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
          <div className="stat">
            <strong>2</strong>
            <span>{t("home.stats.languages")}</span>
          </div>
        </div>
      </section>

      <section className="shell section">
        <div className="section-head">
          <div>
            <h2>{t("home.featured")}</h2>
            <p>{t("home.featuredLead")}</p>
          </div>
          <Link className="btn btn-small" href="/skills">
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
          <Link className="btn btn-small" href="/themes">
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
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/skills/anti-slop-design">
                anti-slop-design
              </Link>
              <Link className="btn" href="/install">
                {t("nav.install")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
