import { HomeView } from "@/components/HomeView";
import { getRegistry, getThemes } from "@/lib/data";

export default function Page() {
  return <HomeView registry={getRegistry()} themes={getThemes()} />;
}
