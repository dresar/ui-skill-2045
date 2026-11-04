import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ThemeDetail } from "@/components/ThemeDetail";
import { auditTheme } from "@/lib/contrast";
import { getTheme, getThemes } from "@/lib/data";

export function generateStaticParams() {
  return getThemes().map((theme) => ({ slug: theme.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const theme = getTheme(slug);
  if (!theme) return { title: "Theme not found" };
  return {
    title: `${theme.name} theme`,
    description: `${theme.tagline.id} ${theme.tagline.en}`,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const theme = getTheme(slug);
  if (!theme) notFound();
  return <ThemeDetail theme={theme} audit={auditTheme(theme)} />;
}
