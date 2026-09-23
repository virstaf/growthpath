"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import OptionsHint from "@/components/OptionsHint";
import ProgressBar from "@/components/ProgressBar";
import ScoreBar, { ScoreLegend, scoreTier } from "@/components/ScoreBar";
import {
  PATH_DIMENSIONS,
  RESPONSE_SCALE,
  THIRTY_DAY_PLAN,
  computeDiagnosticReport,
  diagnosticPathways,
  type DiagnosticReport,
} from "@/lib/content/diagnostic";

type Screen = "intro" | "quiz" | "report";

const pathwayList = Object.values(diagnosticPathways);

export default function GrowthPathwayDiagnostic({
  initialPathwaySlug,
}: {
  initialPathwaySlug: string | null;
}) {
  const [screen, setScreen] = useState<Screen>("intro");
  const [pathwaySlug, setPathwaySlug] = useState<string | null>(
    initialPathwaySlug,
  );
  const [firstName, setFirstName] = useState("");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | undefined)[]>([]);
  const [report, setReport] = useState<DiagnosticReport | null>(null);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathway = pathwaySlug ? diagnosticPathways[pathwaySlug] : null;
  const total = pathway?.questions.length ?? 10;

  function beginAssessment() {
    if (!pathway) return;
    setCurrent(0);
    setAnswers([]);
    setScreen("quiz");
  }

  function advance(nextAnswers: (number | undefined)[]) {
    if (nextAnswers[current] === undefined) return;

    if (current + 1 < total) {
      setCurrent(current + 1);
    } else {
      setReport(computeDiagnosticReport(nextAnswers as number[]));
      setScreen("report");
    }
  }

  function selectAnswer(value: number) {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    const nextAnswers = [...answers];
    nextAnswers[current] = value;
    setAnswers(nextAnswers);
    // Brief pause so the selected option visibly highlights before moving on.
    advanceTimer.current = setTimeout(() => advance(nextAnswers), 250);
  }

  function goBack() {
    if (current === 0) return;
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    setCurrent(current - 1);
  }

  function restart() {
    setScreen("intro");
    setPathwaySlug(null);
    setFirstName("");
    setCurrent(0);
    setAnswers([]);
    setReport(null);
  }

  const progress = screen === "quiz" ? (current / total) * 100 : 100;

  return (
    <div className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center px-6 py-16 sm:py-20">
      {screen === "intro" && (
        <div>
          <p className="uppercase tracking-wide text-sm font-medium text-clay">
            Growth Pathway Diagnostic
          </p>
          <h1 className="mt-2 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Find the growth area that deserves your focus.
          </h1>
          <p className="mt-5 text-base leading-7 text-ink/70">
            Choose a pathway, then respond to 10 statements. Your
            personalised report will show your strengths, priority areas and
            practical next steps.
          </p>
          <p className="mt-4 text-sm font-medium text-ink/60">
            About four minutes &nbsp;|&nbsp; Personalised report
            &nbsp;|&nbsp; No right or wrong answers
          </p>

          <h2 className="mt-10 font-serif text-xl text-ink">
            Which path best describes your goal?
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {pathwayList.map((p) => {
              const selected = p.slug === pathwaySlug;
              return (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => setPathwaySlug(p.slug)}
                  aria-pressed={selected}
                  className={`rounded-2xl border p-5 text-left transition-colors ${
                    selected
                      ? "border-ochre bg-[#fffbf3]"
                      : "border-line bg-white hover:border-ochre"
                  }`}
                >
                  <p className="font-serif text-lg text-ink">{p.name}</p>
                  <p className="mt-1.5 text-sm leading-6 text-ink/70">
                    {p.pickerDescription}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-7">
            <label
              htmlFor="diagnostic-first-name"
              className="mb-2 block text-sm font-medium text-ink/70"
            >
              Your first name — for your personalised report (optional)
            </label>
            <input
              id="diagnostic-first-name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              className="w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-[15px] text-ink focus:border-ochre focus:outline-none focus:ring-2 focus:ring-ochre/40"
            />
            <button
              type="button"
              onClick={beginAssessment}
              disabled={!pathway}
              className="mt-5 w-full rounded-xl bg-ink px-5 py-4 text-base font-semibold text-paper transition-colors hover:bg-[#0a2038] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Begin assessment
            </button>
            <p className="mt-4 text-xs text-ink/50">
              Your answers remain in this browser and are not stored.
            </p>
          </div>
        </div>
      )}

      {screen === "quiz" && pathway && (
        <div>
          <div className="mb-7">
            <ProgressBar percent={progress} />
          </div>
          <p className="mb-2 text-sm text-ink/55">
            Statement {current + 1} of {total}
          </p>
          <h2
            key={current}
            className="fade-in mb-4 font-serif text-2xl leading-snug text-ink sm:text-3xl"
          >
            {pathway.questions[current]}
          </h2>
          <OptionsHint>
            Choose the response that feels most true for you right now.
            There are no right or wrong answers — respond with your honest,
            current experience.
          </OptionsHint>
          <div className="space-y-2.5">
            {RESPONSE_SCALE.map((option) => {
              const selected = answers[current] === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectAnswer(option.value)}
                  aria-pressed={selected}
                  className={`block w-full rounded-xl border px-5 py-4 text-left text-[15px] leading-snug text-ink transition-colors ${
                    selected
                      ? "border-ochre bg-[#fffbf3]"
                      : "border-line bg-white hover:border-ochre hover:bg-[#fffbf3]"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          <div className="mt-7 flex items-center justify-between">
            <button
              type="button"
              onClick={goBack}
              className={`rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink/5 ${
                current === 0 ? "invisible" : ""
              }`}
            >
              ← Previous
            </button>
            <button
              type="button"
              onClick={() => advance(answers)}
              disabled={answers[current] === undefined}
              className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink/5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {current + 1 === total ? "See my report" : "Next"} →
            </button>
          </div>
        </div>
      )}

      {screen === "report" && pathway && report && (
        <div>
          <p className="uppercase tracking-wide text-sm font-medium text-clay">
            {pathway.name} Diagnostic
          </p>
          <h1 className="mt-2 font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl">
            {firstName.trim()
              ? `${firstName.trim()}, here is your growth starting point.`
              : "Here is your growth starting point."}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink/70">
            This report turns your responses into a focused picture of where
            you are strong and where your attention can create the greatest
            progress.
          </p>

          <div className="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-clay">
              Overall readiness
            </p>
            <p className="mt-2 font-serif text-4xl text-ink">
              {report.overallScore}
              <span className="text-xl text-ink/40">/100</span>
            </p>
            <p className="mt-1 text-sm font-medium text-ochre">
              {report.band}
            </p>
            <p className="mt-3 text-sm leading-6 text-ink/60">
              Your score is a snapshot, not a judgement. Use it to decide
              where focused attention, support and accountability will make
              the greatest difference.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="font-serif text-xl text-ink">Your PATH profile</h2>
            <div className="mt-3">
              <ScoreLegend />
            </div>
            <div className="mt-5 space-y-5">
              {PATH_DIMENSIONS.map((dimension) => (
                <div key={dimension.key}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium text-ink">
                      {dimension.label}
                      {dimension.key === report.strongest && (
                        <span className="ml-2 rounded-full border border-ochre px-2 py-0.5 text-xs font-semibold text-ochre">
                          Strongest
                        </span>
                      )}
                    </span>
                    <span
                      className={`font-semibold tabular-nums ${scoreTier(report.dimensionScores[dimension.key]).text}`}
                    >
                      {report.dimensionScores[dimension.key]}%
                    </span>
                  </div>
                  <ScoreBar
                    percent={report.dimensionScores[dimension.key]}
                    label={`${dimension.label} score`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-serif text-xl text-ink">
              Priority growth areas
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {[report.priority1, report.priority2].map((dimKey, i) => {
                const dimension = PATH_DIMENSIONS.find(
                  (d) => d.key === dimKey,
                )!;
                const recommendation = pathway.recommendations[dimKey];
                return (
                  <div
                    key={dimKey}
                    className="rounded-2xl border border-line bg-white p-6"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-clay">
                      Priority {i + 1}
                    </p>
                    <h3 className="mt-1.5 font-serif text-lg text-ink">
                      {dimension.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink/70">
                      {recommendation.interpretation}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-ink/85">
                      <span className="font-semibold text-ink">
                        Your next move:{" "}
                      </span>
                      {recommendation.nextMove}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-serif text-xl text-ink">
              Your 30-day growth plan
            </h2>
            <ol className="mt-5 grid gap-4 sm:grid-cols-2">
              {THIRTY_DAY_PLAN.map((item) => (
                <li
                  key={item.week}
                  className="rounded-2xl border border-line bg-white p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-clay">
                    {item.week} — {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/70">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 rounded-2xl border border-line bg-sand/40 p-6 sm:p-7">
            <p className="uppercase tracking-wide text-sm font-medium text-clay">Your next step</p>
            <h2 className="mt-2 font-serif text-2xl text-ink">
              Turn this insight into a clear development plan.
            </h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              A Growth Pathway conversation will help you interpret the results,
              sharpen your priorities and choose the support that fits your
              goal.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-[#0a2038]"
            >
              Book a growth conversation
            </Link>
          </div>

          <div className="no-print mt-6 flex items-center gap-6">
            <button
              type="button"
              onClick={() => window.print()}
              className="text-sm font-semibold text-ink underline"
            >
              Print or save PDF
            </button>
            <button
              type="button"
              onClick={restart}
              className="text-sm text-ink/50 underline"
            >
              Retake
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
