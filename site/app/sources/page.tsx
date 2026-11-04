import type { Metadata } from "next";
import { getSourcesHtml } from "@/lib/data";
import { SourcesNote } from "@/components/SourcesNote";

export const metadata: Metadata = {
  title: "Sources and attribution",
  description:
    "Verified sources, licenses, commit hashes, and rejected sources for ui-skill-2045. Every license and commit was checked on GitHub.",
};

export default function Page() {
  return (
    <div className="shell" style={{ paddingTop: 36, paddingBottom: 40 }}>
      <SourcesNote />
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: getSourcesHtml() }}
      />
    </div>
  );
}
