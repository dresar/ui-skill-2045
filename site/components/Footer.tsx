"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 10 }}>
              <span className="mark" aria-hidden="true">
                45
              </span>
              <span>ui-skill-2045</span>
            </div>
            <p className="small muted" style={{ maxWidth: "38ch" }}>
              {t("footer.aboutBody")}
            </p>
          </div>
          <div>
            <h3>{t("footer.resources")}</h3>
            <ul>
              <li>
                <Link href="/skills">{t("nav.skills")}</Link>
              </li>
              <li>
                <Link href="/themes">{t("nav.themes")}</Link>
              </li>
              <li>
                <Link href="/install">{t("nav.install")}</Link>
              </li>
              <li>
                <Link href="/sources">{t("nav.sources")}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>{t("footer.legal")}</h3>
            <ul>
              <li>
                <Link href="/sources">Third-party notices</Link>
              </li>
              <li>
                <Link href="/contribute">Contributing</Link>
              </li>
              <li>
                <a href="https://github.com" rel="noopener noreferrer" target="_blank">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>2045</h3>
            <ul>
              <li>{t("footer.built")}</li>
              <li>MIT · Apache-2.0 upstream</li>
              <li>{t("footer.notLegal")}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ui-skill-2045 contributors</span>
          <span>{t("sources.note")}</span>
        </div>
      </div>
    </footer>
  );
}
