"use client";

import { useEffect, useMemo, useState } from "react";
import type { Skill, Theme } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { SkillCard } from "./SkillCard";

const PAGE_SIZE = 20;

export function Gallery({ skills, themes }: { skills: Skill[]; themes: Theme[] }) {
  const { t, lang } = useLanguage();
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const initial = new URLSearchParams(window.location.search).get("q");
    if (initial) setQuery(initial);
  }, []);

  const categories = useMemo(
    () => [...new Set(skills.map((skill) => skill.category))].sort(),
    [skills],
  );
  const tags = useMemo(() => [...new Set(skills.flatMap((skill) => skill.tags))].sort(), [skills]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return skills.filter((skill) => {
      if (theme && !skill.themes.includes(theme)) return false;
      if (category && skill.category !== category) return false;
      if (tag && !skill.tags.includes(tag)) return false;
      if (!needle) return true;
      const haystack = [skill.name, skill.description, skill.description_id, ...skill.tags, ...skill.themes]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [skills, query, theme, category, tag]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [query, theme, category, tag]);

  const reset = () => {
    setQuery("");
    setTheme("");
    setCategory("");
    setTag("");
  };

  return (
    <>
      <section className="shell" style={{ paddingTop: 36 }}>
        <span className="eyebrow">2045 · {skills.length} skills</span>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>{t("skills.title")}</h1>
        <p className="lead" style={{ marginBottom: 24 }}>
          {t("skills.lead")}
        </p>

        <div className="filters">
          <div className="field">
            <label htmlFor="filter-q">{t("skills.search")}</label>
            <input
              id="filter-q"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("skills.searchPlaceholder")}
            />
          </div>
          <div className="field">
            <label htmlFor="filter-theme">{t("skills.filterTheme")}</label>
            <select id="filter-theme" value={theme} onChange={(event) => setTheme(event.target.value)}>
              <option value="">{t("common.all")}</option>
              {themes.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="filter-category">{t("skills.filterCategory")}</label>
            <select
              id="filter-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="">{t("common.all")}</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="filter-tag">{t("skills.filterTag")}</label>
            <select id="filter-tag" value={tag} onChange={(event) => setTag(event.target.value)}>
              <option value="">{t("common.all")}</option>
              {tags.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-actions">
            <span className="results-count" role="status">
              {filtered.length} {t("skills.results")}
            </span>
            <button type="button" className="btn btn-small btn-ghost" onClick={reset}>
              {t("common.reset")}
            </button>
          </div>
        </div>

        {visible.length === 0 ? (
          <div className="panel" style={{ textAlign: "center", padding: 40 }}>
            <p style={{ marginBottom: 16 }}>{t("skills.empty")}</p>
            <button type="button" className="btn btn-primary" onClick={reset}>
              {t("common.reset")}
            </button>
          </div>
        ) : (
          <div className="skill-grid">
            {visible.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        )}

        {pages > 1 ? (
          <nav className="pagination" aria-label={t("skills.page")}>
            <button type="button" onClick={() => setPage(current - 1)} disabled={current === 1}>
              {t("skills.prev")}
            </button>
            {Array.from({ length: pages }, (_, index) => index + 1).map((number) => (
              <button
                key={number}
                type="button"
                aria-current={number === current ? "page" : undefined}
                onClick={() => setPage(number)}
              >
                {number}
              </button>
            ))}
            <button type="button" onClick={() => setPage(current + 1)} disabled={current === pages}>
              {t("skills.next")}
            </button>
          </nav>
        ) : null}

        <div className="notice" style={{ marginTop: 28 }}>
          {lang === "id"
            ? "Pagination 20 item per halaman. Grid dua kolom di mobile dan empat kolom di desktop."
            : "Pagination is 20 items per page. Two columns on mobile and four on desktop."}
        </div>
      </section>
    </>
  );
}
