import type { Metadata } from "next";
import Cta from "@/components/Cta";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Programmes | Growth Path",
  description:
    "Growth Path programmes combine reflection, expert guidance, applied tools and accountability, so learning creates visible change.",
};

const programmes = [
  {
    title: "Personal Growth Accelerator",
    description:
      "A structured journey to build clarity, confidence and habits that support a more intentional life.",
  },
  {
    title: "Career Success Accelerator",
    description:
      "A practical programme for professionals ready to strengthen direction, positioning and momentum.",
  },
  {
    title: "Emerging Leaders Programme",
    description:
      "A development experience for people stepping into greater influence, responsibility and leadership.",
  },
  {
    title: "Business Growth Accelerator",
    description:
      "Focused support for founders and teams ready to strengthen strategy, capability and execution.",
  },
];

export default function ProgrammesPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <h1 className="max-w-2xl font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
          Structured development. Practical momentum.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-7 text-ink/70">
          Growth Path programmes combine reflection, expert guidance, applied
          tools and accountability — so learning creates visible change.
        </p>
      </Section>

      <Section tone="sand">
        <div className="grid gap-6 sm:grid-cols-2">
          {programmes.map((programme) => (
            <div
              key={programme.title}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <h3 className="font-serif text-lg text-ink">
                {programme.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">
                {programme.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="max-w-2xl font-serif text-3xl text-ink">
          Insight is only useful when it changes what you do.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75">
          Each programme balances focused learning with action between
          sessions. You will work on live goals, test new approaches and build
          a rhythm that lasts beyond the programme.
        </p>
        <Cta href="/contact" variant="secondary" className="mt-8">
          Discuss the right programme
        </Cta>
      </Section>

      <Section tone="sand" className="text-center">
        <h2 className="mx-auto max-w-xl font-serif text-3xl text-ink">
          Ready for a more focused season of growth?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink/70">
          Let&rsquo;s identify the programme that best matches your goal,
          context and pace.
        </p>
        <Cta href="/contact" className="mt-8">
          Start a conversation
        </Cta>
      </Section>
    </>
  );
}
