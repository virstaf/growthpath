"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const isPathwaysActive = pathways.some((item) => isActive(item.href));

  return (
    <header className="relative border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-mark.png"
            alt="Growth Pathway"
            width={176}
            height={127}
            priority
            className="h-9 w-auto"
          />
          <span className="font-serif text-xl font-medium tracking-tight text-ink">
            Growth Pathway
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <div className="group relative">
            <button
              type="button"
              className={`cursor-pointer ${
                isPathwaysActive
                  ? "font-semibold text-ink"
                  : "text-ink/80 hover:text-ink"
              }`}
            >
              Pathways
            </button>
            <div className="absolute left-0 top-full z-10 hidden pt-3 group-hover:block group-focus-within:block">
              <div className="w-56 rounded-xl border border-line bg-white p-2 shadow-lg">
                {pathways.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 hover:bg-sand/60 hover:text-ink ${
                      isActive(item.href)
                        ? "bg-sand/60 font-semibold text-ink"
                        : "text-ink/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive(item.href)
                  ? "font-semibold text-ink"
                  : "text-ink/80 hover:text-ink"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-[#0a2038] md:inline-flex"
        >
          Start a conversation
        </Link>

        <details className="md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-line px-3 py-2 text-sm font-medium text-ink [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute inset-x-0 top-full z-10 border-b border-line bg-paper px-6 py-4">
            <nav className="flex flex-col gap-3 text-sm font-medium text-ink/80">
              <Link
                href="/"
                className={pathname === "/" ? "font-semibold text-ink" : ""}
              >
                Home
              </Link>
              {pathways.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive(item.href) ? "font-semibold text-ink" : ""}
                >
                  {item.label}
                </Link>
              ))}
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive(item.href) ? "font-semibold text-ink" : ""}
                >
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
