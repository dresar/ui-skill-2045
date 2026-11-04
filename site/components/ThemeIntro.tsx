"use client";

import { useLanguage } from "@/lib/i18n";

export function ThemeIntro({ count }: { count: number }) {
  const { t } = useLanguage();
  return (
    <>
      <span className="eyebrow">2045 · {count} themes</span>
      <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>{t("themes.title")}</h1>
      <p className="lead" style={{ marginBottom: 28 }}>
        {t("themes.lead")}
      </p>
    </>
  );
}
