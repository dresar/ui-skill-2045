"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="shell empty-page">
      <span className="eyebrow">404</span>
      <h1>{t("notFound.title")}</h1>
      <p className="lead" style={{ margin: "0 auto 24px" }}>
        {t("notFound.lead")}
      </p>
      <div className="hero-actions" style={{ justifyContent: "center" }}>
        <Link className="btn btn-primary" href="/">
          {t("notFound.cta")}
        </Link>
        <Link className="btn" href="/skills">
          {t("home.primaryCta")}
        </Link>
      </div>
    </div>
  );
}
