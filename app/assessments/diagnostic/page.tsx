import type { Metadata } from "next";
import GrowthPathwayDiagnostic from "@/components/GrowthPathwayDiagnostic";
import { diagnosticPathways } from "@/lib/content/diagnostic";

export const metadata: Metadata = {
  title: "Growth Pathway Diagnostic | Growth Pathway",
  description:
    "Choose a pathway, respond to 10 statements, and get a personalised report showing your PATH profile, priority growth areas and a 30-day plan.",
};

export default async function DiagnosticPage({
  searchParams,
}: {
  searchParams: Promise<{ pathway?: string }>;
}) {
  const { pathway } = await searchParams;
  const initialPathwaySlug = pathway && diagnosticPathways[pathway] ? pathway : null;

  return <GrowthPathwayDiagnostic initialPathwaySlug={initialPathwaySlug} />;
}
