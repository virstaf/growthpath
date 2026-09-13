import Cta from "@/components/Cta";
import PathFramework from "@/components/PathFramework";
import Section from "@/components/Section";
import { pathways } from "@/lib/content/pathways";

const journeySteps = [
  { title: "Know where you are", detail: "Clarity before movement" },
  { title: "Choose where to grow", detail: "A path built around you" },
  { title: "Move with intention", detail: "Action, support and rhythm" },
  { title: "See measurable progress", detail: "Success you can recognise" },
];

const workTogether = [
  {
    title: "Assess",
    description:
      "Discover your priorities, strengths and most valuable next step.",
  },
  {
    title: "Develop",
    description:
      "Build the mindset, skills and habits that support lasting growth.",
  },
  {
    title: "Accelerate",
    description:
      "Use focused coaching and strategy to move an important goal forward.",
  },
];

export default function Home() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <p className="text-sm font-medium text-clay">
          Personal development with direction
        </p>
        <h1 className="mt-3 max-w-2xl font-serif text-5xl font-medium leading-tight text-ink sm:text-6xl">
          A clearer path to your next level.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-7 text-ink/70">
          Growth Path helps individuals, professionals and business owners
          turn ambition into focused action — and focused action into
          meaningful progress.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Cta href="/contact">Start your growth journey</Cta>
          <Cta href="#pathways" variant="secondary">
            Explore the three paths
          </Cta>
        </div>
        <p className="mt-8 text-sm font-medium text-ink/60">
          Practical development &nbsp;|&nbsp; Clear next steps &nbsp;|&nbsp;
          Meaningful progress
        </p>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step, index) => (
            <li key={step.title}>
              <span className="font-serif text-2xl text-ochre">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-serif text-lg text-ink">{step.title}</p>
              <p className="mt-1 text-sm text-ink/70">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="sand">
        <h2 className="max-w-2xl font-serif text-3xl text-ink sm:text-4xl">
          You already have potential. What you need is a path.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-ink/75">
          Growth can feel overwhelming when everything seems important. We
          help you identify what matters most, build the capability to move
          forward and stay accountable to the future you want. Whether the
          goal is personal confidence, career momentum or sustainable business
          growth, the work begins with clarity.
        </p>
      </Section>

      <Section id="pathways">
        <h2 className="font-serif text-3xl text-ink">
          Different ambitions. One purposeful approach.
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ink/70">
          Start with the area that matters most right now. Every pathway is
          practical, personalised and designed to create lasting change.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {Object.values(pathways).map((pathway) => (
            <a
              key={pathway.slug}
              href={`/${pathway.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-ochre"
            >
              <h3 className="font-serif text-xl text-ink">{pathway.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-ink/70">
                {pathway.intro}
              </p>
              <span className="mt-5 text-sm font-semibold text-clay group-hover:underline">
                Explore this pathway →
              </span>
            </a>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <h2 className="font-serif text-3xl text-ink">
          A simple structure for meaningful change.
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ink/70">
          Our four-part framework keeps development focused and turns insight
          into consistent movement.
        </p>
        <div className="mt-10">
          <PathFramework />
        </div>
        <Cta href="/programmes" variant="secondary" className="mt-10">
          How Growth Path works
        </Cta>
      </Section>

      <Section>
        <h2 className="font-serif text-3xl text-ink">
          Meet yourself where you are.
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ink/70">
          Begin with insight, build capability or accelerate an important
          goal. Each experience connects reflection with real-world action.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {workTogether.map((item) => (
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

      <Section tone="sand">
        <p className="text-sm font-medium text-clay">
          Not sure where to begin?
        </p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl text-ink">
          Start with a clear picture of where you are.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75">
          A focused assessment gives you language for what is working, what
          is getting in the way and which path deserves your energy next.
        </p>
        <Cta href="/assessments" className="mt-8">
          Find your starting point
        </Cta>
      </Section>

      <Section className="text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl text-ink sm:text-4xl">
          Your next chapter needs more than good intentions.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink/70">
          Take the first purposeful step towards personal confidence, career
          success or business growth.
        </p>
        <Cta href="/contact" className="mt-8">
          Start a conversation
        </Cta>
      </Section>
    </>
  );
}
