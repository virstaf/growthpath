import type { Metadata } from "next";
import PathwayTemplate from "@/components/PathwayTemplate";
import { pathways } from "@/lib/content/pathways";

const pathway = pathways["business-growth"];

export const metadata: Metadata = {
  title: `${pathway.name} | Growth Path`,
  description: pathway.intro,
};

export default function BusinessGrowthPage() {
  return <PathwayTemplate pathway={pathway} />;
}
