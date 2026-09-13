import type { Metadata } from "next";
import Cta from "@/components/Cta";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Resources | Growth Path",
  description:
    "Ideas, prompts and tools to help you reflect more clearly, decide more intentionally and make progress that lasts.",
};

const resources = [
  {
    title: "Guides",
    tagline: "Make a clearer next move.",
    description:
      "Short, practical guides for personal direction, career momentum and business growth.",
  },
  {
    title: "Tools",
    tagline: "Turn insight into action.",
    description:
      "Simple frameworks and worksheets designed to help you organise thinking and sustain progress.",
  },
  {
    title: "Ideas",
    tagline: "See growth differently.",
    description:
      "Thoughtful perspectives on confidence, leadership, habits and the choices that shape success.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <h1 className="max-w-2xl font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
          Practical thinking for purposeful growth.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-7 text-ink/70">
          Ideas, prompts and tools to help you reflect more clearly, decide
          more intentionally and make progress that lasts.
        </p>
      </Section>

      <Section tone="sand">
        <div className="grid gap-6 sm:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <h3 className="font-serif text-lg text-ink">
                {resource.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-clay">
                {resource.tagline}
              </p>
              <p className="mt-2 text-sm leading-6 text-ink/70">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm italic text-ink/50">
          The resource library is growing. New guides and tools will be added
          as Growth Path develops.
        </p>
        <Cta href="/contact" variant="secondary" className="mt-6">
          Tell us what would help
        </Cta>
      </Section>

      <Section className="text-center">
        <h2 className="mx-auto max-w-xl font-serif text-3xl text-ink">
          Need support tailored to your situation?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink/70">
          A focused conversation can turn a broad challenge into a practical
          next step.
        </p>
        <Cta href="/contact" className="mt-8">
          Start a conversation
        </Cta>
      </Section>
    </>
  );
}
