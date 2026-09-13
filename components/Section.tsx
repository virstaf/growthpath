import type { ReactNode } from "react";

export default function Section({
  children,
  className = "",
  tone = "paper",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "sand";
  id?: string;
}) {
  const bg = tone === "sand" ? "bg-sand/40" : "bg-paper";

  return (
    <section id={id} className={bg}>
      <div className={`mx-auto max-w-6xl px-6 py-16 sm:py-20 ${className}`}>
        {children}
      </div>
    </section>
  );
}
