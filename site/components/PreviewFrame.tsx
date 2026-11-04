"use client";

import { assetPath } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

export function PreviewFrame({
  src,
  title,
  tall = false,
  note,
  heading,
}: {
  src: string;
  title: string;
  tall?: boolean;
  note?: string;
  heading?: string;
}) {
  const { t } = useLanguage();
  return (
    <section className="preview-panel" aria-labelledby="preview-title">
      <div className="preview-head">
        <div>
          <h2 id="preview-title">{heading ?? t("skill.preview")}</h2>
          {note ? <p className="small muted" style={{ margin: "4px 0 0" }}>{note}</p> : null}
        </div>
        <a
          className="btn btn-small btn-ghost"
          href={assetPath(src)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("common.openNewTab")}
        </a>
      </div>
      <iframe
        className={`preview-frame${tall ? " tall" : ""}`}
        src={assetPath(src)}
        title={title}
        loading="lazy"
        sandbox="allow-scripts"
      />
    </section>
  );
}
