export default function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-line">
      <div
        className="h-full rounded-full bg-ochre transition-all duration-300"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
