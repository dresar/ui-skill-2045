import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SkillDetail } from "@/components/SkillDetail";
import { getRegistry, getSkill, getSkillHtml, getSkillLicenses, getThemes } from "@/lib/data";

export function generateStaticParams() {
  return getRegistry().skills.map((skill) => ({ slug: skill.name }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) return { title: "Skill not found" };
  return {
    title: skill.name,
    description: `${skill.description} ${skill.description_id}`,
    openGraph: {
      title: `${skill.name} · ui-skill-2045`,
      description: skill.description,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) notFound();

  return (
    <SkillDetail
      skill={skill}
      html={getSkillHtml(slug)}
      licenses={getSkillLicenses(slug)}
      themes={getThemes()}
    />
  );
}
