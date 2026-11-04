import type { Metadata } from "next";
import { ContributeView } from "@/components/ContributeView";

export const metadata: Metadata = {
  title: "Contribute",
  description:
    "How to contribute a skill or theme to ui-skill-2045: verify the license, rewrite, preserve attribution, and pass the build gates.",
};

export default function Page() {
  return <ContributeView />;
}
