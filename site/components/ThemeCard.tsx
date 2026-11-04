"use client";

import Link from "next/link";
import type { Theme } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function ThemeCard({ theme }: { theme: Theme }) {
  const { lang, t } = useLanguage();
  const colors = [theme.light.bg, theme.light.surfaceAlt, theme.light.accent, theme.light.text, theme.light.border];
  return (
    <Link className="theme-card" href={`/themes/${theme.slug}`}>
      <div className="swatch-row" aria-hidden="true">
        {colors.map((color) => (
          <span className="swatch-dot" key={color} style={{ background: color }} />
        ))}
      </div>
      <div className="card-top">
        <h3>{theme.name}</h3>
        {theme.primary ? <span className="tag accent">{t("themes.primary")}</span> : null}
      </div>
      <p>{theme.tagline[lang]}</p>
      <span className="small muted">
        {theme.useWhen[0]} · {theme.radius.md}
      </span>
    </Link>
  );
}
