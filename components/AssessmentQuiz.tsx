"use client";

import { useState } from "react";
import OptionsHint from "@/components/OptionsHint";
import ProgressBar from "@/components/ProgressBar";
import type { QuizConfig } from "@/lib/content/quizzes";

type Screen = "landing" | "quiz" | "gate" | "result";

type ResultSummary = {
  topKey: string;
  topScore: number;
  secondKey: string;
  mode: "pure" | "blend" | "situational";
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildScores(
  config: QuizConfig,
  answers: (number | undefined)[],
): Record<string, number> {
  const scores: Record<string, number> = {};
  answers.forEach((optionIndex) => {
    if (optionIndex === undefined) return;
    const key = config.profileKeys[optionIndex];
    scores[key] = (scores[key] ?? 0) + 1;
  });
  return scores;
}

function computeResult(
  config: QuizConfig,
  scores: Record<string, number>,
): ResultSummary {
  const entries = config.profileKeys
    .map((key) => [key, scores[key] ?? 0] as const)
    .sort((a, b) => b[1] - a[1]);
  const [topKey, topScore] = entries[0];
  const [secondKey, secondScore] = entries[1];
  const gap = topScore - secondScore;
  const mode = gap >= 5 ? "pure" : gap >= 2 ? "blend" : "situational";

  return { topKey, topScore, secondKey, mode };
}

export default function AssessmentQuiz({ config }: { config: QuizConfig }) {
  const [screen, setScreen] = useState<Screen>("landing");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | undefined)[]>([]);
  const [result, setResult] = useState<ResultSummary | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const total = config.questions.length;
  const progress = screen === "quiz" ? (current / total) * 100 : 100;

  function startQuiz() {
    setCurrent(0);
    setAnswers([]);
    setScreen("quiz");
  }

  function selectAnswer(optionIndex: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = optionIndex;
      return next;
    });
  }

  function goNext() {
    if (answers[current] === undefined) return;

    if (current + 1 < total) {
      setCurrent(current + 1);
    } else {
      setResult(computeResult(config, buildScores(config, answers)));
      setScreen("gate");
    }
  }

  function goBack() {
    if (current === 0) return;
    setCurrent(current - 1);
  }

  function submitGate() {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !emailPattern.test(trimmedEmail)) {
      setShowError(true);
      return;
    }
    setShowError(false);
    setSubmitting(true);

    const profile = result ? config.profiles[result.topKey] : undefined;

    fetch(config.formspreeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: trimmedName,
        email: trimmedEmail,
        quiz: config.quizName,
        result: profile?.name,
        score: result ? `${result.topScore}/${total}` : undefined,
        mode: result?.mode,
      }),
    })
      .catch((err) => {
        console.warn("Formspree submission error:", err);
      })
      .finally(() => {
        setSubmitting(false);
        setScreen("result");
      });
  }

  function restart() {
    setScreen("landing");
    setCurrent(0);
    setAnswers([]);
    setResult(null);
    setName("");
    setEmail("");
    setShowError(false);
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-6 py-16 sm:py-20">
      {screen === "landing" && (
        <div>
          <p className="uppercase tracking-wide text-sm font-medium text-clay">{config.eyebrow}</p>
          <h1 className="mt-2 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            {config.title}
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-ink/70">
            {config.hook}
          </p>
          <button
            type="button"
            onClick={startQuiz}
            className="mt-8 w-full rounded-xl bg-ink px-5 py-4 text-base font-semibold text-paper transition-colors hover:bg-[#0a2038] sm:w-auto sm:px-8"
          >
            Start the assessment
          </button>
        </div>
      )}

      {screen === "quiz" && (
        <div>
          <div className="mb-7">
            <ProgressBar percent={progress} />
          </div>
          <p className="mb-2 text-sm text-ink/55">
            Question {current + 1} of {total}
          </p>
          <h2
            key={current}
            className="fade-in mb-4 font-serif text-2xl leading-snug text-ink sm:text-3xl"
          >
            {config.questions[current].text}
          </h2>
          <OptionsHint>
            Pick the option that feels closest to how you&rsquo;d typically
            respond — go with your first instinct rather than overthinking
            it.
          </OptionsHint>
          <div className="space-y-2.5">
            {config.questions[current].options.map((option, i) => {
              const selected = answers[current] === i;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => selectAnswer(i)}
                  aria-pressed={selected}
                  className={`block w-full rounded-xl border px-5 py-4 text-left text-[15px] leading-snug text-ink transition-colors ${
                    selected
                      ? "border-ochre bg-[#fffbf3]"
                      : "border-line bg-white hover:border-ochre hover:bg-[#fffbf3]"
                  }`}
                >
                  {option}
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
              onClick={goNext}
              disabled={answers[current] === undefined}
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-[#0a2038] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {current + 1 === total ? "See my result" : "Next"} →
            </button>
          </div>
        </div>
      )}

      {screen === "gate" && (
        <div>
          <p className="uppercase tracking-wide text-sm font-medium text-clay">
            Your result is ready
          </p>
          <h1 className="mt-2 font-serif text-3xl font-medium text-ink">
            One last step
          </h1>
          <div className="mt-6 rounded-2xl border border-line bg-white p-6 sm:p-7">
            <p className="mb-5 text-[15px] leading-relaxed text-ink/80">
              {config.gatePrompt}
            </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
              aria-label="First name"
              className="mb-3 w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-[15px] text-ink focus:border-ochre focus:outline-none focus:ring-2 focus:ring-ochre/40"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              aria-label="Email address"
              className="mb-3 w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-[15px] text-ink focus:border-ochre focus:outline-none focus:ring-2 focus:ring-ochre/40"
            />
            {showError && (
              <p className="-mt-1 mb-3 text-sm text-clay">
                Please enter your name and a valid email.
              </p>
            )}
            <button
              type="button"
              onClick={submitGate}
              disabled={submitting}
              className="w-full rounded-xl bg-ink px-5 py-4 text-base font-semibold text-paper transition-colors hover:bg-[#0a2038] disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Show my result"}
            </button>
          </div>
        </div>
      )}

      {screen === "result" &&
        result &&
        (() => {
          const profile = config.profiles[result.topKey];
          const secondProfile = config.profiles[result.secondKey];

          let nameText = profile.name;
          let openingText = profile.opening;

          if (result.mode === "blend") {
            openingText = `${profile.opening} ${config.blendNote.replace(
              "{second}",
              secondProfile.name.replace("The ", ""),
            )}`;
          } else if (result.mode === "situational") {
            nameText = `${profile.name} (Situational)`;
            openingText = `Your answers were fairly spread out — a sign ${config.situationalNote}. Your strongest lean was toward ${profile.name}. ${profile.opening}`;
          }

          return (
            <div>
              <p className="uppercase tracking-wide text-sm font-medium text-clay">
                {config.resultEyebrow}
              </p>
              <p className="mt-3 inline-block rounded-full border border-clay px-3.5 py-1 font-serif text-sm text-clay">
                Scored {result.topScore}/{total}
              </p>
              <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
                {nameText}
              </h1>
              <p className="mt-5 text-lg leading-7 text-ink/85">
                {openingText}
              </p>

              <div className="mt-6">
                <p className="mb-1.5 text-xs font-semibold text-clay">
                  YOUR STRENGTH
                </p>
                <p className="text-[15.5px] leading-relaxed text-ink/85">
                  {profile.strength}
                </p>
              </div>
              <div className="mt-5">
                <p className="mb-1.5 text-xs font-semibold text-clay">
                  YOUR GROWTH EDGE
                </p>
                <p className="text-[15.5px] leading-relaxed text-ink/85">
                  {profile.edge}
                </p>
              </div>

              <div className="my-6 h-px bg-line" />

              <p className="text-[15.5px] italic leading-relaxed text-ink/85">
                {profile.bridge}
              </p>

              <a
                href={config.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 block w-full rounded-xl bg-ink px-5 py-4 text-center text-base font-semibold text-paper transition-colors hover:bg-[#0a2038]"
              >
                {profile.cta}
              </a>
              <button
                type="button"
                onClick={restart}
                className="mt-5 text-sm text-ink/50 underline"
              >
                Retake the assessment
              </button>
            </div>
          );
        })()}
    </div>
  );
}
