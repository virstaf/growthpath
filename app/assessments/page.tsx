import type { Metadata } from "next";
import Cta from "@/components/Cta";
import Section from "@/components/Section";
import SectionImage from "@/components/SectionImage";
import { quizzes } from "@/lib/content/quizzes";

export const metadata: Metadata = {
  title: "Assessments | Growth Pathway",
  description:
    "A focused assessment helps you understand where you are, what is getting in the way and where your energy can create the greatest progress.",
};

const options = [
  {
    title: "Personal Clarity Check",
    pathwaySlug: "personal-growth",
    description:
      "Understand what matters most, what feels out of alignment and where personal growth could create the biggest shift.",
  },
  {
    title: "Career Direction Assessment",
    pathwaySlug: "career-success",
    description:
      "Explore your strengths, values and ambitions to identify a clearer, more compelling professional direction.",
  },
  {
    title: "Business Growth Diagnostic",
    pathwaySlug: "business-growth",
    description:
      "Reveal the strategic, leadership and execution constraints currently limiting sustainable growth.",
  },
];

const expect = [
  {
    step: "1. Reflect",
    detail: "Complete 10 focused questions.",
  },
  {
    step: "2. Interpret",
    detail: "See your PATH profile and priorities.",
  },
  {
    step: "3. Act",
    detail: "Leave with a personal 30-day plan.",
  },
];

export default function AssessmentsPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="max-w-2xl font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
              Clarity is the most valuable place to begin.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-ink/70">
              A focused assessment helps you understand where you are, what
              is getting in the way and where your energy can create the
              greatest progress.
            </p>
            <Cta href="/assessments/diagnostic" className="mt-8">
              Take the Growth Pathway Diagnostic
            </Cta>
          </div>

          <SectionImage
            query="person reflecting journal clarity thinking"
            orientation="landscape"
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[16/10] w-full"
          />
        </div>
      </Section>

      <Section tone="sand">
        <h2 className="font-serif text-2xl text-ink">Assessment options</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {options.map((option) => (
            <a
              key={option.title}
              href={`/assessments/diagnostic?pathway=${option.pathwaySlug}`}
              className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-ochre"
            >
              <h3 className="font-serif text-lg text-ink">{option.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-ink/70">
                {option.description}
              </p>
              <span className="mt-4 text-sm font-semibold text-clay group-hover:underline">
                Start this assessment →
              </span>
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <p className="uppercase tracking-wide text-sm font-medium text-clay">Something shorter?</p>
        <h2 className="mt-3 font-serif text-3xl text-ink">
          Two quick quizzes, ready today.
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ink/70">
          These 2-minute quizzes give you an immediate, personalised read on
          where you stand — a lighter alternative to the full diagnostic
          above.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {Object.values(quizzes).map((quiz) => (
            <a
              key={quiz.slug}
              href={`/assessments/${quiz.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-ochre"
            >
              <h3 className="font-serif text-lg text-ink">{quiz.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-ink/70">
                {quiz.hook}
              </p>
              <span className="mt-4 text-sm font-semibold text-clay group-hover:underline">
                Start the assessment →
              </span>
            </a>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <h2 className="font-serif text-3xl text-ink">
          A useful result, not just a score.
        </h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-3">
          {expect.map((item) => (
            <li key={item.step}>
              <p className="font-serif text-xl text-ochre">{item.step}</p>
              <p className="mt-2 text-sm leading-6 text-ink/70">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="text-center">
        <h2 className="mx-auto max-w-xl font-serif text-3xl text-ink">
          Want help interpreting your results?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink/70">
          A focused conversation can turn your report into a clear development
          plan.
        </p>
        <Cta href="/assessments/diagnostic" className="mt-8">
          Begin the assessment
        </Cta>
      </Section>
    </>
  );
}
