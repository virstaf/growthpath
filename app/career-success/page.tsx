import type { Metadata } from "next";
import PathwayTemplate from "@/components/PathwayTemplate";
import { pathways } from "@/lib/content/pathways";

const pathway = pathways["career-success"];

export const metadata: Metadata = {
  title: `${pathway.name} | Growth Pathway`,
  description: pathway.intro,
};

export default function CareerSuccessPage() {
  return <PathwayTemplate pathway={pathway} />;
}
