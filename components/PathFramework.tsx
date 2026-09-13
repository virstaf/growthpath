const steps = [
  {
    letter: "P",
    title: "Purpose and Clarity",
    description:
      "Define what matters, where you are going and why it matters now.",
  },
  {
    letter: "A",
    title: "Awareness and Mindset",
    description:
      "Understand the patterns, beliefs and strengths shaping your progress.",
  },
  {
    letter: "T",
    title: "Targeted Action",
    description: "Turn priorities into practical steps that build momentum.",
  },
  {
    letter: "H",
    title: "Habits and Accountability",
    description:
      "Create the rhythm and support that make progress sustainable.",
  },
];

export default function PathFramework() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <div
          key={step.letter}
          className="rounded-2xl border border-line bg-white p-6"
        >
          <span className="font-serif text-3xl text-ochre">
            {step.letter}
          </span>
          <h3 className="mt-3 font-serif text-lg text-ink">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-ink/70">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
