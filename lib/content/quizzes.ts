export type QuizProfile = {
  name: string;
  opening: string;
  strength: string;
  edge: string;
  bridge: string;
  cta: string;
};

export type QuizQuestion = {
  text: string;
  /** Each option maps by index to `profileKeys[index]`. */
  options: string[];
};

export type QuizConfig = {
  slug: string;
  title: string;
  eyebrow: string;
  hook: string;
  resultEyebrow: string;
  gatePrompt: string;
  quizName: string;
  formspreeUrl: string;
  calendlyUrl: string;
  /** Filler sentence appended to the opening when two profiles are close. Use `{second}` for the runner-up profile name. */
  blendNote: string;
  /** Clause describing why the result varies situationally, inserted after "a sign ...". */
  situationalNote: string;
  profileKeys: string[];
  profiles: Record<string, QuizProfile>;
  questions: QuizQuestion[];
};

export const quizzes: Record<string, QuizConfig> = {
  "growing-or-busy": {
    slug: "growing-or-busy",
    title: "Are You Growing — Or Just Staying Busy?",
    eyebrow: "2-MINUTE ASSESSMENT",
    hook: "Plateaus rarely feel like plateaus. They feel like a full calendar, a stable routine, and a nagging sense that something's missing. Answer 12 quick questions to find out whether you're actually moving forward, or quietly running in place.",
    resultEyebrow: "YOUR CURRENT STAGE",
    gatePrompt:
      "Enter your email to see whether you're growing, coasting, stuck, or stretched thin — and what to do about it.",
    quizName: "Growing vs. Plateauing Assessment",
    formspreeUrl: "https://formspree.io/f/meaqdbjp",
    calendlyUrl: "https://calendly.com/benanyan",
    blendNote:
      "You also show some {second} patterns, especially when things get overwhelming.",
    situationalNote:
      "your stage shifts a lot depending on what's going on in your life right now",
    profileKeys: ["grower", "cruiser", "plateau", "treadmill"],
    profiles: {
      grower: {
        name: "The Active Grower",
        opening:
          "You're not coasting — you're in a genuine season of stretch, and it shows.",
        strength:
          "You seek out discomfort on purpose, which is the actual mechanism of growth most people avoid.",
        edge: 'Momentum like this is easy to run on autopilot, until it burns out or drifts without direction. The cost: growth without a clear "toward what" eventually feels like just more motion.',
        bridge:
          "Coaching at this stage isn't about getting unstuck — it's about aiming the momentum you already have so it compounds instead of scatters.",
        cta: "Book a free clarity call",
      },
      cruiser: {
        name: "The Comfortable Cruiser",
        opening:
          "Life feels stable, manageable, and honestly — pretty good. That's not nothing.",
        strength:
          "You've built something steady, and you're not chasing growth for its own sake.",
        edge: 'Comfort and stagnation can look identical from the inside. The cost: years can pass this way, and the gap between "fine" and "fulfilled" only becomes visible in hindsight.',
        bridge:
          "Coaching here isn't about blowing up what's working — it's a space to check whether \"comfortable\" is actually a choice, or just where you stopped looking.",
        cta: "Get your personalized growth plan",
      },
      plateau: {
        name: "The Aware Plateau",
        opening:
          "You already know. That quiet dread when you imagine three more years like this one — that's the most honest data point in this whole quiz.",
        strength:
          "Self-awareness. You're not in denial, which is further than most people get.",
        edge: "Awareness without action just becomes low-grade discomfort you carry around. The cost: staying aware but stuck long enough starts to feel like identity (\"I'm just someone who doesn't follow through\").",
        bridge:
          "Coaching closes exactly this gap — between knowing something needs to change and actually building the structure to change it.",
        cta: "Book a free clarity call",
      },
      treadmill: {
        name: "The Busy Treadmill",
        opening:
          "You're moving constantly — the problem is, motion and growth aren't the same thing, and some part of you already suspects that.",
        strength: "Real capacity for output and follow-through under pressure.",
        edge: "When everything is urgent, nothing gets to be deliberate. The cost: depletion now, and looking back later at a lot of effort with surprisingly little to show for direction.",
        bridge:
          "Coaching here starts with subtraction, not addition — figuring out what to stop carrying so the effort you're already putting in starts compounding instead of just spending you.",
        cta: "Get your personalized growth plan",
      },
    },
    questions: [
      {
        text: "Compared to a year ago, your day-to-day looks...",
        options: [
          "Noticeably different — new challenges, new skills",
          "Pretty similar, and that's fine by you",
          "Similar, and it bothers you more than you let on",
          "Busier, but hard to say what's actually changed",
        ],
      },
      {
        text: "When something new and hard is put in front of you, you feel...",
        options: [
          "A pull toward it, even if it's uncomfortable",
          "No urge to opt in unless you have to",
          "Interested, but you talk yourself out of it",
          "Overwhelmed — there's already too much on your plate",
        ],
      },
      {
        text: "The last time you learned a genuinely new skill was...",
        options: [
          "Recently — you're always working on something",
          "Honestly, you can't remember",
          "A while ago, and you miss that feeling",
          'You\'re "learning" constantly but nothing sticks',
        ],
      },
      {
        text: "Your current goals are...",
        options: [
          "Clear, and you review progress regularly",
          "Vague, but you're not stressed about that",
          "Clear in your head, but you haven't touched them in months",
          "Numerous, shifting, and hard to pin down",
        ],
      },
      {
        text: "When you imagine yourself in 3 years, doing the same role/life as now, you feel...",
        options: [
          "Fine — as long as you're still developing within it",
          "Perfectly content",
          "A quiet dread",
          "Exhausted just thinking about the pace continuing",
        ],
      },
      {
        text: "Feedback or criticism lately makes you...",
        options: [
          "Curious — you look for what to do with it",
          "Indifferent — you don't get much anymore, and don't seek it",
          "Defensive at first, though you know it might have a point",
          "Anxious — one more thing to fix among many",
        ],
      },
      {
        text: "Your relationship with failure right now is...",
        options: [
          "You're failing at new things regularly, which means you're stretching",
          "You mostly avoid situations where you might fail",
          "You avoid it more than you used to, and you notice that",
          "You're not failing, but you're not sure you're succeeding either — just moving",
        ],
      },
      {
        text: "When you look at your calendar, most of it is...",
        options: [
          "A mix of core work and things that stretch you",
          "Predictable and steady, week to week",
          "Full of routine tasks you could do in your sleep",
          "Packed, back-to-back, with little room to think",
        ],
      },
      {
        text: "The people you spend the most time with...",
        options: [
          "Challenge you and push your thinking",
          "Are comfortable, familiar, and undemanding",
          "Used to challenge you more than they do now",
          "Are mostly people who also seem stretched thin",
        ],
      },
      {
        text: "When you achieve something, you...",
        options: [
          "Feel it, then start looking at what's next",
          "Enjoy it and settle back into your routine",
          "Feel a flicker of satisfaction that fades fast",
          "Barely register it before moving to the next task",
        ],
      },
      {
        text: "If you're honest, the last real risk you took was...",
        options: [
          'Recent, and it paid off in growth even if it didn\'t "work"',
          "A long time ago — you've built a life you don't need to risk",
          "Something you keep almost doing, but don't",
          "Hard to define — everything feels like a risk when you're this stretched",
        ],
      },
      {
        text: "The feeling that best describes your current stage is...",
        options: ["Momentum", "Comfort", "Stuck", "Depletion"],
      },
    ],
  },
  "communication-blind-spot": {
    slug: "communication-blind-spot",
    title: "What's Your Communication Blind Spot?",
    eyebrow: "2-MINUTE ASSESSMENT",
    hook: "Most people think they communicate clearly — until a conversation goes sideways and they can't figure out why. Answer 12 quick questions to find the pattern that's quietly shaping how others hear you.",
    resultEyebrow: "YOUR COMMUNICATION STYLE",
    gatePrompt:
      "Enter your email to see your Communication Style profile — plus your specific growth edge and what to do about it.",
    quizName: "Communication Style Assessment",
    formspreeUrl: "https://formspree.io/f/mbgjbeqd",
    calendlyUrl: "https://calendly.com/benanyan",
    blendNote:
      "You also show some {second} tendencies, especially under pressure.",
    situationalNote:
      "your communication style shifts a lot depending on the room you're in",
    profileKeys: ["driver", "avoider", "connector", "overthinker"],
    profiles: {
      driver: {
        name: "The Direct Driver",
        opening:
          "You don't waste words — and most people respect that about you, even when they don't say it.",
        strength: "Clarity. People never have to guess what you mean.",
        edge: "Your directness can shut down input before it starts. The cost: you may be making decisions with less information than you think, because people stopped offering it.",
        bridge:
          "Coaching can help you keep your clarity while building the pause that invites real dialogue — so people bring you the truth, not just agreement.",
        cta: "Book a free clarity call",
      },
      avoider: {
        name: "The Quiet Avoider",
        opening: "You keep things smooth — often at a cost only you can see.",
        strength: "You're safe to be around; people relax with you.",
        edge: "What you don't say doesn't disappear — it accumulates. The cost is slow-building distance in your closest relationships and work you resent but never named.",
        bridge:
          "Coaching can help you find your voice in the moments that matter most, without becoming someone you're not.",
        cta: "Get your personalized growth plan",
      },
      connector: {
        name: "The Grounded Connector",
        opening:
          "You've already built real communication skill — this is about refinement, not repair.",
        strength:
          "People trust you with hard conversations because you stay steady.",
        edge: 'You may still carry more of the emotional load in conversations than you need to. The cost: quiet burnout that\'s easy to miss because you\'re "good at this."',
        bridge:
          "Coaching at this stage is about sustainable leadership — protecting your own energy while staying this present for others.",
        cta: "Book a free clarity call",
      },
      overthinker: {
        name: "The Anxious Overthinker",
        opening:
          "You care deeply about getting it right — sometimes so much that it gets in the way of just saying it.",
        strength: "Real empathy and attentiveness to others.",
        edge: "Overthinking softens your message and costs you energy before the conversation even starts. Over time, it can look like a lack of confidence, even when the insight underneath is sharp.",
        bridge:
          "Coaching can help you trust your voice enough to say the clear version the first time — no rehearsal required.",
        cta: "Get your personalized growth plan",
      },
    },
    questions: [
      {
        text: "When someone disagrees with you in a meeting, you usually...",
        options: [
          "Restate your point more firmly so they understand",
          "Go quiet and let it go, even if you still disagree",
          "Ask questions to understand where they're coming from",
          "Feel put on the spot and get defensive inside",
        ],
      },
      {
        text: "A colleague seems upset but hasn't said anything. You...",
        options: [
          "Wait for them to bring it up — not your place to assume",
          "Ask them directly what's going on",
          "Try to lighten the mood and move past it",
          "Quietly worry you did something wrong",
        ],
      },
      {
        text: "When giving feedback, your instinct is to...",
        options: [
          "Say it straight — people can handle the truth",
          "Soften it so much the point sometimes gets lost",
          "Frame it around what's working before what isn't",
          "Delay it, hoping the issue resolves itself",
        ],
      },
      {
        text: "In a group discussion, you tend to...",
        options: [
          "Speak first and set the direction",
          "Wait until you're fairly sure before speaking",
          "Draw quieter people into the conversation",
          "Talk a lot, then wonder if you said too much",
        ],
      },
      {
        text: "When you're frustrated with someone, you...",
        options: [
          "Tell them directly, sooner rather than later",
          "Bottle it up until it eventually leaks out",
          "Try to name the frustration calmly and explain why",
          "Vent to someone else first to process it",
        ],
      },
      {
        text: "Your team would probably describe your communication as...",
        options: [
          "Direct and efficient",
          "Easy to talk to, but hard to read",
          "Thoughtful and clear",
          "Warm, but sometimes scattered",
        ],
      },
      {
        text: "When a conversation gets tense, you...",
        options: [
          "Push through to resolve it now",
          "Withdraw until things cool down",
          "Slow the pace and name what's happening",
          "Try to smooth things over quickly, even if unresolved",
        ],
      },
      {
        text: "Asking for help or admitting you don't know something feels...",
        options: [
          "Fine, as long as it's efficient",
          "Uncomfortable — you'd rather figure it out alone",
          "Natural, part of being honest",
          "Anxiety-inducing — you worry how it'll be perceived",
        ],
      },
      {
        text: "When you receive critical feedback, your first internal reaction is...",
        options: [
          '"Okay, what do I do with this"',
          '"I probably deserved that" (even if you didn\'t)',
          "Curiosity about the other person's perspective",
          "A flash of hurt before you can respond calmly",
        ],
      },
      {
        text: "In written messages (email/Slack), you tend to...",
        options: [
          "Get straight to the point",
          "Over-explain or add extra caveats",
          "Write clearly but check tone before sending",
          "Rewrite the message several times, worried how it lands",
        ],
      },
      {
        text: "When someone is venting to you, you mostly...",
        options: [
          "Jump to solving the problem",
          "Listen but feel unsure what to say",
          "Reflect back what you're hearing",
          "Absorb their emotion more than you'd like to",
        ],
      },
      {
        text: "If you had to change one thing about how you communicate, it'd be...",
        options: [
          "Softening how things come across",
          "Speaking up more, sooner",
          "Nothing major — mostly refining",
          "Feeling less anxious before hard conversations",
        ],
      },
    ],
  },
};
