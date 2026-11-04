"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer-note">
      <div className="shell">
        <p>
          © 2026 ui-skill-2045 · MIT ·{" "}
          <Link href="/sources">{t("nav.sources")}</Link> ·{" "}
          <Link href="/contribute">{t("nav.contribute")}</Link>
        </p>
        <p className="footer-fine">{t("sources.note")}</p>
      </div>
    </footer>
  );
}
