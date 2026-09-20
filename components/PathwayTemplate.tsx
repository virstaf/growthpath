import Cta from "@/components/Cta";
import Section from "@/components/Section";
import SectionImage from "@/components/SectionImage";
import type { Pathway } from "@/lib/content/pathways";

export default function PathwayTemplate({ pathway }: { pathway: Pathway }) {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="uppercase tracking-wide text-sm font-medium text-clay">{pathway.name}</p>
            <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
              {pathway.headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-ink/70">
              {pathway.intro}
            </p>
            <Cta href="/contact" className="mt-8">
              Explore this pathway
            </Cta>
          </div>

          <SectionImage
            query={pathway.imageQuery}
            orientation="portrait"
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/5] w-full lg:aspect-[3/4]"
          />
        </div>
      </Section>

      <Section tone="sand">
        <p className="uppercase tracking-wide text-sm font-medium text-clay">Why this path</p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl text-ink">
          Growth begins with an honest starting point.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75">
          {pathway.whyBody}
        </p>
      </Section>

      <Section>
        <h2 className="font-serif text-2xl text-ink">
          This pathway may be right for you
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {pathway.fitPoints.map((point) => (
            <li
              key={point}
              className="rounded-xl border border-line bg-white p-5 text-sm leading-6 text-ink/80"
            >
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sand">
        <p className="uppercase tracking-wide text-sm font-medium text-clay">How we can help</p>
        <h2 className="mt-3 font-serif text-2xl text-ink">
          Support designed around purposeful progress.
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-ink/70">
          Choose a focused starting point or a deeper development experience.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {pathway.offers.map((offer) => (
            <div
              key={offer.title}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <h3 className="font-serif text-lg text-ink">{offer.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-serif text-2xl text-ink">
          Progress you can recognise and use.
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {pathway.changes.map((change) => (
            <li
              key={change}
              className="flex items-start gap-3 text-sm leading-6 text-ink/80"
            >
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-ochre" />
              {change}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-xl font-serif text-xl italic text-ink/80">
          &ldquo;{pathway.signatureThought}&rdquo;
        </p>
      </Section>

      <Section tone="sand" className="text-center">
        <h2 className="font-serif text-3xl text-ink">
          Ready to move forward with greater clarity?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">
          Tell us where you are, what you want to change and what success
          would look like.
        </p>
        <Cta href="/contact" className="mt-8">
          Start a conversation
        </Cta>
      </Section>
    </>
  );
}
