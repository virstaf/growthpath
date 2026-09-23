const TIERS = [
  { min: 70, label: "Strong", bar: "bg-emerald-500", text: "text-emerald-700" },
  { min: 40, label: "Developing", bar: "bg-amber-400", text: "text-amber-700" },
  { min: 0, label: "Priority", bar: "bg-orange-500", text: "text-orange-700" },
];

export function scoreTier(percent: number) {
  return TIERS.find((tier) => percent >= tier.min)!;
}

export function ScoreLegend() {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-ink/60">
      {TIERS.map((tier, i) => (
        <li key={tier.label} className="flex items-center gap-1.5">
          <span className={`h-2.5 w-2.5 rounded-full ${tier.bar}`} />
          <span className="font-medium text-ink/75">{tier.label}</span>
          <span>
            {i === 0
              ? `${tier.min}%+`
              : `${tier.min}–${TIERS[i - 1].min - 1}%`}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function ScoreBar({
  percent,
  label,
}: {
  percent: number;
  label: string;
}) {
  const tier = scoreTier(percent);

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-3 w-full overflow-hidden rounded-full bg-line"
    >
      <div
        className={`h-full rounded-full ${tier.bar} transition-all duration-500`}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
