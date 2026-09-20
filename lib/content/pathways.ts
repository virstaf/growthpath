export type Pathway = {
  slug: string;
  name: string;
  headline: string;
  intro: string;
  whyBody: string;
  fitPoints: string[];
  offers: { title: string; description: string }[];
  changes: string[];
  signatureThought: string;
  imageQuery: string;
};

export const pathways: Record<string, Pathway> = {
  "personal-growth": {
    slug: "personal-growth",
    name: "Personal Growth",
    imageQuery: "person journaling reflection notebook window light",
    headline: "Become more intentional about the person you are becoming.",
    intro:
      "Build the self-awareness, confidence and everyday habits that help you move through life with greater clarity and purpose.",
    whyBody:
      "Real growth begins when you understand yourself clearly enough to make different choices. This pathway creates space to examine what matters, recognise the patterns shaping your life and build a practical plan for change.",
    fitPoints: [
      "You feel ready for change but unclear about the first step",
      "You want greater confidence in your decisions",
      "Old habits or beliefs keep limiting your progress",
      "You want your daily life to reflect your values and ambitions",
    ],
    offers: [
      {
        title: "Clarity Session",
        description:
          "A focused conversation to identify your priorities and most valuable next step.",
      },
      {
        title: "Personal Growth Accelerator",
        description:
          "A structured development experience that turns insight into confident action.",
      },
      {
        title: "One-to-One Growth Coaching",
        description:
          "Personalised support, challenge and accountability built around your goals.",
      },
      {
        title: "Workshops and Masterminds",
        description:
          "Shared learning experiences for perspective, connection and momentum.",
      },
    ],
    changes: [
      "A stronger sense of direction",
      "Greater self-trust and confidence",
      "More intentional habits and decisions",
      "A practical plan you can sustain",
    ],
    signatureThought: "Clarity changes the quality of every step that follows.",
  },
  "career-success": {
    slug: "career-success",
    name: "Career Success",
    imageQuery: "confident businesswoman office professional portrait",
    headline: "Build a career that reflects your potential and purpose.",
    intro:
      "Move beyond uncertainty and create a career strategy grounded in your strengths, values and ambition.",
    whyBody:
      "Career progress is rarely about working harder alone. It requires clarity about your value, confidence in how you communicate it and a focused strategy for the opportunities you want to create.",
    fitPoints: [
      "You are considering a career change or important next move",
      "You feel capable but overlooked or underused",
      "You want to step into leadership with greater confidence",
      "You need a plan that connects your strengths with market opportunity",
    ],
    offers: [
      {
        title: "Career Direction Assessment",
        description:
          "Clarify your strengths, values, ambitions and best-fit direction.",
      },
      {
        title: "Career Strategy Session",
        description:
          "Turn a career question into a focused plan with practical next steps.",
      },
      {
        title: "Career Success Accelerator",
        description:
          "Build positioning, confidence and momentum across your career journey.",
      },
      {
        title: "Emerging Leaders Programme",
        description:
          "Develop the presence, judgement and people skills needed to lead well.",
      },
    ],
    changes: [
      "Clearer career direction",
      "A compelling professional story",
      "Greater confidence and visibility",
      "A realistic strategy for progression",
    ],
    signatureThought: "Your career should be shaped by intention, not left to chance.",
  },
  "business-growth": {
    slug: "business-growth",
    name: "Business Growth",
    imageQuery: "business team strategy meeting collaboration office",
    headline: "Build the clarity and capability your business needs to grow.",
    intro:
      "Strengthen your strategy, leadership and execution so the next stage of your business is both ambitious and sustainable.",
    whyBody:
      "As a business grows, the founder and team must grow with it. This pathway helps you step back from daily pressure, identify the real constraints and focus people and resources on the moves that matter most.",
    fitPoints: [
      "Growth has stalled or become harder than it should be",
      "You have opportunities but need clearer priorities",
      "The business depends too heavily on the founder",
      "Your team needs stronger alignment, ownership or capability",
    ],
    offers: [
      {
        title: "Business Growth Diagnostic",
        description:
          "Identify the strategic, leadership and execution gaps limiting growth.",
      },
      {
        title: "Growth Strategy Intensive",
        description:
          "Build a focused roadmap around your most important commercial priorities.",
      },
      {
        title: "Founder Coaching",
        description:
          "Develop the clarity, capability and leadership rhythm your role now requires.",
      },
      {
        title: "Team Development",
        description:
          "Align people, improve performance and build a culture that supports growth.",
      },
    ],
    changes: [
      "Sharper strategic priorities",
      "More confident leadership",
      "Stronger team alignment and ownership",
      "A focused roadmap for sustainable growth",
    ],
    signatureThought:
      "The next level of the business begins with the next level of leadership.",
  },
};
