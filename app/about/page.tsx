import type { Metadata } from "next";
import Cta from "@/components/Cta";
import PathFramework from "@/components/PathFramework";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About | Growth Path",
  description:
    "Growth Path exists to make personal, professional and business development clearer, more practical and easier to sustain.",
};

const promise = [
  {
    title: "Clear, not complicated.",
    description: "We make the next move understandable.",
  },
  {
    title: "Personal, not prescriptive.",
    description: "The work responds to your reality.",
  },
  {
    title: "Practical, not performative.",
    description: "Insight always connects to action.",
  },
  {
    title: "Progress, not perfection.",
    description: "Sustainable momentum is the measure.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <p className="text-sm font-medium text-clay">About Growth Path</p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
          Development that turns intention into progress.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-7 text-ink/70">
          Growth Path exists to make personal, professional and business
          development clearer, more practical and easier to sustain.
        </p>
      </Section>

      <Section tone="sand">
        <p className="text-sm font-medium text-clay">Our belief</p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl text-ink">
          Potential grows when it has direction.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75">
          Most people do not lack ambition. They lack the clarity, structure
          and support to translate ambition into consistent action. We create
          space to think honestly, decide deliberately and move forward with
          confidence. The result is not a temporary burst of motivation, but
          meaningful progress you can see and sustain.
        </p>
      </Section>

      <Section>
        <p className="text-sm font-medium text-clay">How we work</p>
        <h2 className="mt-3 font-serif text-3xl text-ink">
          The PATH framework.
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ink/70">
          One memorable approach, adapted to the person, career or business in
          front of us.
        </p>
        <div className="mt-10">
          <PathFramework />
        </div>
      </Section>

      <Section tone="sand">
        <p className="text-sm font-medium text-clay">Our promise</p>
        <h2 className="mt-3 font-serif text-3xl text-ink">
          A clear path. Practical support. Measurable progress.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {promise.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <h3 className="font-serif text-lg text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl text-ink sm:text-4xl">
          Find the path that fits your ambition.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink/70">
          Start with a conversation about where you are and where you want to
          go.
        </p>
        <Cta href="/contact" className="mt-8">
          Start a conversation
        </Cta>
      </Section>
    </>
  );
}
