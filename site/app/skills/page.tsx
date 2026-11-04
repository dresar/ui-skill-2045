import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { getRegistry, getThemes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skill gallery",
  description:
    "Filter 18 Agent Skills by theme, category, and tag. Setiap skill punya preview mandiri, instruksi lengkap, dan atribusi.",
};

export default function Page() {
  const registry = getRegistry();
  return <Gallery skills={registry.skills} themes={getThemes()} />;
}
