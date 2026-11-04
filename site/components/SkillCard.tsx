"use client";

import Link from "next/link";
import type { Skill } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function SkillCard({ skill }: { skill: Skill }) {
  const { lang } = useLanguage();
  const description = lang === "id" ? skill.description_id : skill.description;
  return (
    <Link className="skill-card" href={`/skills/${skill.name}`}>
      <div className="card-top">
        <span className="tag accent">{skill.category}</span>
        <span className="tag">v{skill.version}</span>
      </div>
      <h3>{skill.name}</h3>
      <p>{description}</p>
      <div className="card-foot">
        {skill.tags.slice(0, 3).map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
