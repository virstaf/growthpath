import Image from "next/image";
import Link from "next/link";

const pathways = [
  { href: "/personal-growth", label: "Personal Growth" },
  { href: "/career-success", label: "Career Success" },
  { href: "/business-growth", label: "Business Growth" },
];

const navLinks = [
  { href: "/assessments", label: "Assessments" },
  { href: "/programmes", label: "Programmes" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="relative border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-mark.png"
            alt="Growth Path"
            width={176}
            height={127}
            priority
            className="h-9 w-auto"
          />
          <span className="font-serif text-xl font-medium tracking-tight text-ink">
            Growth Path
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <details className="group relative">
            <summary className="cursor-pointer list-none text-ink/80 hover:text-ink [&::-webkit-details-marker]:hidden">
              Pathways
            </summary>
            <div className="absolute left-0 top-full z-10 mt-3 w-56 rounded-xl border border-line bg-white p-2 shadow-lg">
              {pathways.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-ink/80 hover:bg-sand/60 hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink/80 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-[#0e211d] md:inline-flex"
        >
          Start a conversation
        </Link>

        <details className="md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-line px-3 py-2 text-sm font-medium text-ink [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute inset-x-0 top-full z-10 border-b border-line bg-paper px-6 py-4">
            <nav className="flex flex-col gap-3 text-sm font-medium text-ink/80">
              <Link href="/">Home</Link>
              {pathways.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="font-semibold text-clay">
                Start a conversation
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
