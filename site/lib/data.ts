import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { renderMarkdown } from "./markdown";

export type Skill = {
  name: string;
  description: string;
  description_id: string;
  version: string;
  license: string;
  author: string;
  category: string;
  themes: string[];
  tags: string[];
  source: string;
  additional_sources: string[];
  original_author: string;
  original_license: string;
  upstream_commit: string;
  path: string;
  preview: string;
};

export type Registry = {
  schemaVersion: number;
  name: string;
  description: string;
  license: string;
  count: number;
  themes: Array<{ slug: string; name: string; primary: boolean; preview: string; doc: string }>;
  skills: Skill[];
};

export type Theme = {
  slug: string;
  name: string;
  tagline: { id: string; en: string };
  philosophy: { id: string; en: string };
  primary: boolean;
  useWhen: string[];
  avoidWhen: string[];
  antiPatterns: string[];
  useWhenId: string[];
  avoidWhenId: string[];
  antiPatternsId: string[];
  radius: { sm: string; md: string; lg: string };
  borderWidth: string;
  fontDisplay: string;
  fontBody: string;
  light: Record<string, string>;
  dark: Record<string, string>;
  depthRule: { id: string; en: string };
  motion: { id: string; en: string };
};

const repoRoot = resolve(process.cwd(), "..");

export function getRegistry(): Registry {
  return JSON.parse(readFileSync(join(repoRoot, "skills.json"), "utf8")) as Registry;
}

export function getThemes(): Theme[] {
  return JSON.parse(
    readFileSync(join(process.cwd(), "generated", "themes.json"), "utf8"),
  ) as Theme[];
}

export function getSkill(name: string): Skill | undefined {
  return getRegistry().skills.find((skill) => skill.name === name);
}

export function getSkillHtml(name: string): string {
  const path = join(repoRoot, "skills", name, "SKILL.md");
  return renderMarkdown(readFileSync(path, "utf8"));
}

export function getSkillLicenses(name: string): string[] {
  const dir = join(repoRoot, "skills", name);
  return readdirSync(dir)
    .filter((file) => file.startsWith("LICENSE-UPSTREAM") || file === "NOTICE-UPSTREAM.md")
    .sort();
}

export function getTheme(slug: string): Theme | undefined {
  return getThemes().find((theme) => theme.slug === slug);
}

export function getSourcesHtml(): string {
  const files = ["sources.md", "rejected-sources.md"];
  return files
    .map((file) => renderMarkdown(readFileSync(join(repoRoot, "docs", file), "utf8")))
    .join("\n<hr>\n");
}
