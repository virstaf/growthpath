export type PathDimensionKey = "purpose" | "awareness" | "action" | "habits";

export type DiagnosticRecommendation = {
  interpretation: string;
  nextMove: string;
};

export type DiagnosticPathway = {
  slug: string;
  name: string;
  pickerDescription: string;
  /** Exactly 10 statements, in the fixed order consumed by DIMENSION_BY_INDEX. */
  questions: string[];
  recommendations: Record<PathDimensionKey, DiagnosticRecommendation>;
};

export const PATH_DIMENSIONS: { key: PathDimensionKey; label: string }[] = [
  { key: "purpose", label: "Purpose and Clarity" },
  { key: "awareness", label: "Awareness and Mindset" },
  { key: "action", label: "Targeted Action" },
  { key: "habits", label: "Habits and Accountability" },
];

/** Every pathway's 10 statements follow the same 3-2-2-3 PATH grouping. */
export const DIMENSION_BY_INDEX: PathDimensionKey[] = [
  "purpose",
  "purpose",
  "purpose",
  "awareness",
  "awareness",
  "action",
  "action",
  "habits",
  "habits",
  "habits",
];

export const RESPONSE_SCALE = [
  { value: 1, label: "Strongly disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Not sure" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly agree" },
];

export const READINESS_BANDS = [
  { max: 44, label: "Building foundations" },
  { max: 69, label: "Creating momentum" },
  { max: 100, label: "Ready to accelerate" },
];

export const THIRTY_DAY_PLAN = [
  {
    week: "Week 1",
    title: "Clarify",
    detail:
      "Read your report again. Complete the action under Priority 1 and define what visible progress would look like.",
  },
  {
    week: "Week 2",
    title: "Act",
    detail:
      "Take one meaningful step before you feel fully ready. Keep it specific, scheduled and within your control.",
  },
  {
    week: "Week 3",
    title: "Strengthen",
    detail:
      "Complete the action under Priority 2 and use your strongest PATH dimension to support it.",
  },
  {
    week: "Week 4",
    title: "Review",
    detail:
      "Record what changed, what you learned and the one habit or commitment you will carry forward.",
  },
];

export const diagnosticPathways: Record<string, DiagnosticPathway> = {
  "personal-growth": {
    slug: "personal-growth",
    name: "Personal Growth",
    pickerDescription: "Confidence, mindset, habits and intentional living",
    questions: [
      "I have a clear picture of the person I want to become.",
      "My current priorities reflect what matters most to me.",
      "I can describe the change I most need to make right now.",
      "I understand the beliefs and patterns that influence my choices.",
      "I trust myself to make decisions, even when the outcome is uncertain.",
      "I turn important personal goals into specific next steps.",
      "I take action before I feel completely ready.",
      "I protect time and energy for my own development.",
      "My daily habits support the future I want to create.",
      "I have people or structures that keep me accountable.",
    ],
    recommendations: {
      purpose: {
        interpretation:
          "Your next step needs a clearer destination. Competing priorities may be making progress feel scattered.",
        nextMove:
          "Write a one-page picture of the person you want to become and choose one change that matters most now.",
      },
      awareness: {
        interpretation:
          "Greater self-understanding will help you make more confident choices and interrupt unhelpful patterns.",
        nextMove:
          "Keep a seven-day decision journal: note the choice, emotion, belief and result behind important moments.",
      },
      action: {
        interpretation:
          "You may know what matters but need to convert intention into smaller, visible moves.",
        nextMove:
          "Choose one meaningful goal and schedule three specific actions you can complete within the next seven days.",
      },
      habits: {
        interpretation:
          "Progress needs a more reliable rhythm and clearer support around it.",
        nextMove:
          "Create one daily habit, one weekly review and one person who will hold you accountable.",
      },
    },
  },
  "career-success": {
    slug: "career-success",
    name: "Career Success",
    pickerDescription: "Direction, professional value and career momentum",
    questions: [
      "I know the direction I want my career to take over the next two years.",
      "I can clearly explain the value I bring to an organisation.",
      "My career choices reflect my strengths, values and ambitions.",
      "I understand what is currently limiting my professional progress.",
      "I am confident communicating my ideas, achievements and aspirations.",
      "I have a focused development plan for the role or opportunity I want.",
      "I actively create relationships and opportunities rather than waiting for them.",
      "I regularly seek and apply useful feedback.",
      "I consistently invest time in the skills my next level requires.",
      "I review my career progress and adjust my plan regularly.",
    ],
    recommendations: {
      purpose: {
        interpretation:
          "Your professional energy may be spread across opportunities without a sufficiently clear career direction.",
        nextMove:
          "Define your ideal next role using five criteria: contribution, strengths, environment, growth and reward.",
      },
      awareness: {
        interpretation:
          "Stronger insight into your value, patterns and blind spots will improve confidence and positioning.",
        nextMove:
          "Ask three trusted people which strengths they rely on you for and where they believe you are underusing your potential.",
      },
      action: {
        interpretation:
          "Career ambition needs a sharper plan and more proactive opportunity-building.",
        nextMove:
          "Select one 90-day career goal and identify five conversations or actions that could move it forward.",
      },
      habits: {
        interpretation:
          "Your development may be happening reactively instead of through a consistent professional growth rhythm.",
        nextMove:
          "Block one hour each week for skill development, relationship-building and a short progress review.",
      },
    },
  },
  "business-growth": {
    slug: "business-growth",
    name: "Business Growth",
    pickerDescription: "Strategy, leadership, people and execution",
    questions: [
      "Our business has a clear and shared direction for the next 12 months.",
      "We know which customers, offers and opportunities deserve greatest focus.",
      "Our priorities are understood across the people responsible for delivery.",
      "I understand the leadership changes the next stage of growth requires from me.",
      "We can name the few constraints currently limiting business growth.",
      "Our strategy is translated into clear, owned and time-bound actions.",
      "We make decisions quickly enough to maintain momentum.",
      "Our people have the capability and authority to deliver without overreliance on me.",
      "We use a consistent rhythm to review priorities and performance.",
      "Accountability is clear, constructive and followed through.",
    ],
    recommendations: {
      purpose: {
        interpretation:
          "The business may need fewer priorities and a clearer definition of what winning looks like.",
        nextMove:
          "Agree the three outcomes that matter most in the next 90 days and explicitly pause work that does not support them.",
      },
      awareness: {
        interpretation:
          "Growth will improve when leadership blind spots and the true constraints are discussed more honestly.",
        nextMove:
          "Ask your team: What should we start, stop and strengthen to reach our next stage? Compare the patterns.",
      },
      action: {
        interpretation:
          "The strategy may not yet be translated into enough ownership, pace and disciplined execution.",
        nextMove:
          "Turn each 90-day priority into one owner, one measure, one deadline and the next action due this week.",
      },
      habits: {
        interpretation:
          "Sustainable growth needs a stronger operating rhythm for review, learning and accountability.",
        nextMove:
          "Introduce a weekly 30-minute growth meeting focused only on priorities, measures, obstacles and commitments.",
      },
    },
  },
};

export type DiagnosticReport = {
  overallScore: number;
  band: string;
  dimensionScores: Record<PathDimensionKey, number>;
  strongest: PathDimensionKey;
  priority1: PathDimensionKey;
  priority2: PathDimensionKey;
};

export function computeDiagnosticReport(answers: number[]): DiagnosticReport {
  const dimensionScores = {} as Record<PathDimensionKey, number>;

  for (const dimension of PATH_DIMENSIONS) {
    const indices = DIMENSION_BY_INDEX.reduce<number[]>((acc, dim, i) => {
      if (dim === dimension.key) acc.push(i);
      return acc;
    }, []);
    const sum = indices.reduce((total, i) => total + answers[i], 0);
    const min = indices.length * 1;
    const max = indices.length * 5;
    dimensionScores[dimension.key] = Math.round(
      ((sum - min) / (max - min)) * 100,
    );
  }

  const overallSum = answers.reduce((total, value) => total + value, 0);
  const overallScore = Math.round(((overallSum - 10) / (50 - 10)) * 100);
  const band = READINESS_BANDS.find((b) => overallScore <= b.max)!.label;

  const rankedDimensions = [...PATH_DIMENSIONS].sort(
    (a, b) => dimensionScores[a.key] - dimensionScores[b.key],
  );

  return {
    overallScore,
    band,
    dimensionScores,
    priority1: rankedDimensions[0].key,
    priority2: rankedDimensions[1].key,
    strongest: rankedDimensions[rankedDimensions.length - 1].key,
  };
}
