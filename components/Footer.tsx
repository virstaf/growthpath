import Image from "next/image";
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
    <footer className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-paper p-1.5">
                <Image
                  src="/logo-mark.png"
                  alt="Growth Pathway"
                  width={176}
                  height={127}
                  className="h-full w-auto"
                />
              </span>
              <span className="font-serif text-lg font-medium text-paper">
                Growth Pathway
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-paper/70">
              Grow with purpose. Succeed with confidence.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-clay">
              Pathways
            </p>
            <ul className="mt-3 space-y-2 text-sm text-paper/70">
              {pathwayLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-paper">
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
            <ul className="mt-3 space-y-2 text-sm text-paper/70">
              {siteLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-paper/15 pt-6 text-xs text-paper/50">
          © {new Date().getFullYear()} Growth Pathway. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
