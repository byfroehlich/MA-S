import type { Translations } from "./de";

export const en: Translations = {
  nav: {
    brand: "MA:S",
    startCta: "Get started →",
  },

  hero: {
    headline: "Not a trading journal.\nA decision architecture system.",
    subline:
      "You know your strategy. You've broken it a hundred times. MA:S shows you why — and makes discipline measurable.",
    tier: "Structure Tier",
    cta: "Start 14-day free trial",
    ctaSub: "No payment during trial · Cancel anytime",
  },

  mirror: {
    headline: "You know what you should do.\nYou do the opposite anyway.",
    text: "Not because your strategy is wrong. Not because the market is against you. But because something happens between the plan and the click — that no journal has measured before.",
    highlight: "MA:S makes that moment visible.",
  },

  dqs: {
    label: "DECISION QUALITY SCORE",
    headline: "Not whether you won.\nWhether you decided correctly.",
    text: "The DQS is a value between 0 and 100. It is calculated from what you did — not from what the market did. No P&L feeds in. No outcome. No luck.",
    pillars: [
      {
        title: "Plan Alignment",
        text: "Did you trade according to your own rules?",
      },
      {
        title: "Behavioral Stability",
        text: "Were you calm — or did an inner impulse decide?",
      },
      {
        title: "Body Context",
        text: "What was your state before the trade?",
      },
    ],
  },

  system: {
    headline: "Decision architecture. Not journaling.",
    text: "Standard journals measure what happened. MA:S measures how it came to be. Every trade is evaluated by:",
    items: [
      "Plan adherence (independent of outcome)",
      "Inner attitude at entry",
      "Physical state",
      "Conscious pause before the click",
    ],
    closing:
      "The result: A structured picture of your decision patterns. Across time. Across instruments. Across states.",
  },

  trial: {
    headline: "14 days or 30 trades.",
    text: "You start directly on Structure — the complete system.",
    included: "Included: 1 AI analysis of your decision patterns.",
    notes: [
      "No payment during the trial.",
      "No automatic renewal without confirmation.",
      "Card is only charged after the trial.",
    ],
    cta: "Start free trial",
    ctaSub: "Credit card required · Cancel anytime",
  },

  pricing: {
    toggle: {
      monthly: "Monthly",
      annual: "Annual",
    },
    annualNote: "Annual: 30% cheaper than monthly. Annual members get the e-book for free.",
    paperback: "Paperback optionally available for €9.",
    recommended: "RECOMMENDED",
    trialNote: "Trial starts here.",
    tiers: [
      {
        name: "CORE",
        tagline: "Performance overview",
        priceMonthly: "€19",
        priceAnnual: "€159",
        priceMonthlyLabel: "€19/month",
        priceAnnualLabel: "€159/year",
        priceAnnualSub: "instead of €228",
        features: [
          "CSV import",
          "Equity curve & metrics",
          "Setup analysis",
          "Structural decision tagging",
          "Simplified DQS (behavioral pillar)",
        ],
      },
      {
        name: "STRUCTURE",
        tagline: "Complete decision analysis",
        priceMonthly: "€39",
        priceAnnual: "€327",
        priceMonthlyLabel: "€39/month",
        priceAnnualLabel: "€327/year",
        priceAnnualSub: "instead of €468",
        features: [
          "Everything in Core",
          "Full DQS (all 3 pillars)",
          "Pattern recognition",
          "Behavioral clustering",
          "Pause-effect analysis",
          "Session & setup analysis",
          "Weekly reflection",
        ],
      },
      {
        name: "INTELLIGENCE",
        tagline: "AI-powered architecture",
        priceMonthly: "€69",
        priceAnnual: "€579",
        priceMonthlyLabel: "€69/month",
        priceAnnualLabel: "€579/year",
        priceAnnualSub: "instead of €828",
        features: [
          "Everything in Structure",
          "Integrated AI (no API key needed)",
          "AI coach after every trade",
          "Bias detection",
          "Monthly development report",
        ],
      },
    ],
  },

  book: {
    label: "THE FOUNDATION",
    headline: "The market as a mirror.",
    text: "MA:S is based on a mental model: The market does not show you what you deserve — it shows you who you are when it counts. The book describes the concepts behind the system: inner advisors, the pause, plan adherence independent of outcome. It is not a bonus. It is the foundation.",
    trialNote: "Annual members receive the e-book immediately after the trial.",
    paperback: "The paperback is available for €9.",
    cta: "→ Learn more about the book",
    coverTitle: "MA:S — The Market as a Mirror",
  },

  finalCta: {
    headline: "Start.",
    text: "14 days. 30 trades. No risk. You will see what you have not seen before.",
    cta: "Start free trial",
    ctaSub: "Structure Tier · Credit card required · Cancel anytime",
  },

  footer: {
    tagline: "Decision Architecture System",
    impressum: "Legal Notice",
    datenschutz: "Privacy Policy",
    kontakt: "Contact",
    copyright: "© 2025 MA:S. All rights reserved.",
  },

  checkout: {
    title: "Choose your plan",
    emailLabel: "Email address",
    emailPlaceholder: "your@email.com",
    ctaLabel: "Pay now",
    monthly: "/ month",
    annual: "/ year",
    perMonth: "Monthly",
    perYear: "Annual",
    backLink: "← Back",
    errorGeneric: "Something went wrong. Please try again.",
    secureNote: "Secure payment via Stripe · Cancel anytime",
  },
};
