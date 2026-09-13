import Link from "next/link";

const pathwayLinks = [
  { href: "/personal-growth", label: "Personal Growth" },
  { href: "/career-success", label: "Career Success" },
  { href: "/business-growth", label: "Business Growth" },
];

const siteLinks = [
  { href: "/assessments", label: "Assessments" },
  { href: "/programmes", label: "Programmes" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-medium text-ink">
              Growth Path
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-ink/70">
              Grow with purpose. Succeed with confidence.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-clay">
              Pathways
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink/70">
              {pathwayLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-clay">
              Site
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink/70">
              {siteLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-line pt-6 text-xs text-ink/50">
          © {new Date().getFullYear()} Growth Path. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
