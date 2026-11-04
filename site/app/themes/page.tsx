import type { Metadata } from "next";
import { ThemeCard } from "@/components/ThemeCard";
import { getThemes } from "@/lib/data";
import { ThemeIntro } from "@/components/ThemeIntro";

export const metadata: Metadata = {
  title: "Theme catalogue",
  description:
    "11 visual themes with light and dark tokens, computed WCAG AA contrast, and standalone previews. 11 tema dengan token dan preview mandiri.",
};

export default function Page() {
  const themes = getThemes();
  return (
    <div className="shell" style={{ paddingTop: 36, paddingBottom: 40 }}>
      <ThemeIntro count={themes.length} />
      <div className="theme-grid">
        {themes.map((theme) => (
          <ThemeCard key={theme.slug} theme={theme} />
        ))}
      </div>
      <p className="notice" style={{ marginTop: 24 }}>
        {themes.length * 16} automatically measured contrast pairs. Generator fails the build when a
        pair falls below WCAG AA.
      </p>
    </div>
  );
}
