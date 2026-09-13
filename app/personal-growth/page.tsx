import type { Metadata } from "next";
import PathwayTemplate from "@/components/PathwayTemplate";
import { pathways } from "@/lib/content/pathways";

const pathway = pathways["personal-growth"];

export const metadata: Metadata = {
  title: `${pathway.name} | Growth Path`,
  description: pathway.intro,
};

export default function PersonalGrowthPage() {
  return <PathwayTemplate pathway={pathway} />;
}
