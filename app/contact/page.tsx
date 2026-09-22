import type { Metadata } from "next";
import Cta from "@/components/Cta";
import Section from "@/components/Section";
import SectionImage from "@/components/SectionImage";
import { pathways } from "@/lib/content/pathways";

export const metadata: Metadata = {
  title: "Contact | Growth Pathway",
  description:
    "Whether your focus is personal, professional or commercial, the first step is a clear conversation about what matters now.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="max-w-2xl font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
              Tell us where you want to grow.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-ink/70">
              Whether your focus is personal, professional or commercial, the
              first step is a clear conversation about what matters now.
            </p>
          </div>

          <SectionImage
            query="phone call conversation office welcoming"
            orientation="landscape"
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[16/10] w-full"
          />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-6">
            <h2 className="font-serif text-lg text-ink">
              Book a discovery call
            </h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              Your booking link and confirmed contact details will be
              connected before public launch.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6">
            <h2 className="font-serif text-lg text-ink">
              Begin with an assessment
            </h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              Start by identifying your priorities and the path most likely
              to move you forward.
            </p>
            <Cta
              href="/assessments/diagnostic"
              variant="secondary"
              className="mt-4"
            >
              Take the diagnostic
            </Cta>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <h2 className="font-serif text-2xl text-ink">
          Which path best describes your goal?
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {Object.values(pathways).map((pathway) => (
            <a
              key={pathway.slug}
              href={`/${pathway.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-ochre"
            >
              <h3 className="font-serif text-lg text-ink">{pathway.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-ink/70">
                {pathway.intro}
              </p>
              <span className="mt-4 text-sm font-semibold text-clay group-hover:underline">
                Explore this pathway →
              </span>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
