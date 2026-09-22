import type { ReactNode } from "react";

export default function OptionsHint({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-sm leading-6 text-ink/55">{children}</p>;
}
