"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function Header({ skillCount, themeCount }: { skillCount: number; themeCount: number }) {
  const { lang, setLang, t } = useLanguage();
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMode(document.documentElement.dataset.mode === "dark" ? "dark" : "light");
  }, []);

  const toggleMode = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.dataset.mode = next;
    window.localStorage.setItem("ui-skill-mode", next);
  };

  return (
    <header className="topbar shell">
      <Link className="brand" href="/" aria-label="ui-skill-2045 home">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 3.2 20 7.6 12 12 4 7.6l8-4.4Z" />
            <path d="M4 12l8 4.4 8-4.4" />
            <path d="M4 16.4 12 21l8-4.6" />
          </svg>
        </span>
        <span className="brand-text">
          ui-skill<span>.2045</span>
        </span>
      </Link>

      <div className="top-actions">
        <span className="status-pill">
          <span className="status-dot" aria-hidden="true" />
          {skillCount} skill · {themeCount} tema
        </span>

        <div className="lang-switch" role="group" aria-label={t("common.language")}>
          <button
            type="button"
            aria-pressed={lang === "id"}
            onClick={() => setLang("id")}
            aria-label="Bahasa Indonesia"
          >
            ID
          </button>
          <button
            type="button"
            aria-pressed={lang === "en"}
            onClick={() => setLang("en")}
            aria-label="English"
          >
            EN
          </button>
        </div>

        <button
          type="button"
          className="round-btn"
          onClick={toggleMode}
          aria-label={mode === "dark" ? t("common.light") : t("common.dark")}
          title={mode === "dark" ? t("common.light") : t("common.dark")}
        >
          {mode === "dark" ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7Z" />
            </svg>
          )}
        </button>

        <a
          className="round-btn github-btn"
          href="https://github.com/dresar/ui-skill-2045"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub repository"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 19c-4 1.2-4-2.2-6-2.7M15 21v-3.4a3 3 0 0 0-.8-2.3c2.6-.3 5.3-1.3 5.3-5.9a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0C6.5 2.7 5.5 3 5.5 3a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.4c0 4.6 2.7 5.6 5.3 5.9a3 3 0 0 0-.8 2.3V21" />
          </svg>
        </a>
      </div>
    </header>
  );
}
