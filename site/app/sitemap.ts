import type { MetadataRoute } from "next";
import { getRegistry, getThemes } from "@/lib/data";
import { BASE_PATH } from "@/lib/site";

const origin = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://dresar.github.io";
const lastModified = new Date("2026-11-04");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const registry = getRegistry();
  const themes = getThemes();
  const url = (path: string) => `${origin}${BASE_PATH}${path}`;

  return [
    { url: url("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: url("/skills/"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...registry.skills.map((skill) => ({
      url: url(`/skills/${skill.name}/`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: url("/themes/"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...themes.map((theme) => ({
      url: url(`/themes/${theme.slug}/`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: url("/install/"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/contribute/"), lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: url("/sources/"), lastModified, changeFrequency: "yearly", priority: 0.4 },
  ];
}
