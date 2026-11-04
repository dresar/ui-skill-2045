"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BASE_PATH } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

const links = [
  { href: "/skills", key: "nav.skills" },
  { href: "/themes", key: "nav.themes" },
  { href: "/install", key: "nav.install" },
  { href: "/contribute", key: "nav.contribute" },
  { href: "/sources", key: "nav.sources" },
];

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [path, setPath] = useState("/");

  useEffect(() => {
    setMode(document.documentElement.dataset.mode === "dark" ? "dark" : "light");
    setPath(window.location.pathname.replace(BASE_PATH, "") || "/");
  }, []);

  const toggleMode = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.dataset.mode = next;
    window.localStorage.setItem("ui-skill-mode", next);
  };

  return (
    <header className="site-header">
      <div className="shell bar">
        <Link className="brand" href="/" aria-label="ui-skill-2045 home">
          <span className="mark" aria-hidden="true">
            45
          </span>
          <span>
            ui-skill-2045
            <small>{t("brand.tagline")}</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Main">
          {links.map((link) => {
            const active = path === link.href || path.startsWith(`${link.href}/`);
            return (
              <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined}>
                {t(link.key)}
              </Link>
            );
          })}
        </nav>

        <div className="header-tools">
          <button
            type="button"
            className="lang-btn"
            aria-pressed={lang === "id"}
            onClick={() => setLang("id")}
            aria-label="Bahasa Indonesia"
          >
            ID
          </button>
          <button
            type="button"
            className="lang-btn"
            aria-pressed={lang === "en"}
            onClick={() => setLang("en")}
            aria-label="English"
          >
            EN
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={toggleMode}
            aria-label={mode === "dark" ? t("common.light") : t("common.dark")}
            title={mode === "dark" ? t("common.light") : t("common.dark")}
          >
            {mode === "dark" ? t("common.lightShort") : t("common.darkShort")}
          </button>
        </div>
      </div>
    </header>
  );
}
