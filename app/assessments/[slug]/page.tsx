import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AssessmentQuiz from "@/components/AssessmentQuiz";
import { quizzes } from "@/lib/content/quizzes";

export function generateStaticParams() {
  return Object.keys(quizzes).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const quiz = quizzes[slug];
  if (!quiz) return {};

  return {
    title: `${quiz.title} | Growth Path`,
    description: quiz.hook,
  };
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const quiz = quizzes[slug];
  if (!quiz) notFound();

  return <AssessmentQuiz config={quiz} />;
}
