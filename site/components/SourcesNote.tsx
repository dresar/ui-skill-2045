"use client";

import { useLanguage } from "@/lib/i18n";

export function SourcesNote() {
  const { t } = useLanguage();
  return (
    <>
      <span className="eyebrow">2045 · verified 2026-11-04</span>
      <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>{t("sources.title")}</h1>
      <p className="lead">{t("sources.lead")}</p>
      <p className="warning" style={{ marginBottom: 24 }}>
        <strong>{t("sources.note")}</strong>
      </p>
    </>
  );
}
