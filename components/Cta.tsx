import Link from "next/link";
import type { ComponentProps } from "react";

type CtaProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export default function Cta({
  variant = "primary",
  className = "",
  ...props
}: CtaProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-[#0a2038]"
      : "border border-ink/15 text-ink hover:bg-ink/5";

  return <Link className={`${base} ${styles} ${className}`} {...props} />;
}
