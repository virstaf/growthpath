import type { Metadata } from "next";
import GrowthPathDiagnostic from "@/components/GrowthPathDiagnostic";
import { diagnosticPathways } from "@/lib/content/diagnostic";

export const metadata: Metadata = {
  title: "Growth Path Diagnostic | Growth Path",
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

  return <GrowthPathDiagnostic initialPathwaySlug={initialPathwaySlug} />;
}
