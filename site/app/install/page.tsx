import type { Metadata } from "next";
import { InstallView } from "@/components/InstallView";

export const metadata: Metadata = {
  title: "Install",
  description:
    "Install ui-skill-2045 with the general skills CLI, the npm package, or a manual copy. Includes agent folders for Claude, Cursor, Codex, Copilot, Gemini, Windsurf, and Antigravity.",
};

export default function Page() {
  return <InstallView />;
}
