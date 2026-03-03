export const site = {
  brand: "MA:S",
  product: "Decision Architecture",
  // Set after you buy the domain (e.g. mas-app.de)
  domain: "mas-system.com",
  // Set after your app URL is ready
  appUrl: "https://app.mas-system.de",
  // Set the Amazon link to your book listing (ASIN URL)
  bookAmazonUrl: "https://www.amazon.de/dp/B0GL84P1KV",
  contactEmail: "hello@example.com"
};

export const pricing = [
  {
    key: "core",
    name: "MA:S Core",
    accent: "silver",
    tagline: "Equity + Decision Structure",
    bullets: [
      "Equity & basic performance",
      "Sessions, tags, structured journaling",
      "Fast onboarding, clean workflow",
      "Export-ready basics"
    ],
    cta: "Start Core"
  },
  {
    key: "structure",
    name: "MA:S Structure",
    accent: "bronze",
    tagline: "Full Analysis Layer",
    bullets: [
      "Everything in Core",
      "Advanced insights by session/setup/pattern",
      "Comparability & structure reports",
      "Deeper decision diagnostics (non-AI)"
    ],
    cta: "Choose Structure"
  },
  {
    key: "intelligence",
    name: "MA:S Intelligence",
    accent: "gold",
    tagline: "AI Decision Architecture",
    bullets: [
      "Everything in Structure",
      "Integrated AI analysis (usage regulated)",
      "Pattern diagnostics + feedback loop",
      "Decision-quality focus beyond PnL"
    ],
    cta: "Go Intelligence"
  }
] as const;

export type Locale = "de" | "en";

export const copy: Record<Locale, any> = {
  de: {
    nav: { system: "System", book: "Buch", plans: "Pläne" },
    hero: {
      h1: "MA:S — Decision Architecture",
      lead: "Ein System, das Entscheidungsqualität unter Risiko sichtbar macht — unabhängig vom Ergebnis. App + Buch. Ruhig. Professionell. Strukturiert.",
      ctaPrimary: "MA:S starten",
      ctaPlans: "Pläne ansehen",
      ctaBook: "Jetzt bei Amazon ansehen",
      micro: "Web • Desktop • Mobile · Light/Dark · In wenigen Minuten startklar"
    },
    cards: [
      { t: "Decision ≠ Outcome", p: "Gewinne können schlechte Entscheidungen verstecken. Verluste können gute Entscheidungen entwerten." },
      { t: "Structure over impulse", p: "MA:S macht Plan‑Treue, Muster und Abweichungen messbar — ohne Show." },
      { t: "Book + System", p: "Das Buch liefert das Denken. Die App liefert die tägliche Anwendung." }
    ],
    system: {
      eyebrow: "System",
      title: "Ein Decision Architecture System für professionelle Trader",
      lead: "Nicht noch ein Journal. MA:S verbindet Performance‑Daten mit Entscheidungsstruktur und wiederholbaren Feedback‑Loops.",
      blocks: [
        { k: "Capture", p: "Trades, Sessions, Tags, Context. Schnell. Clean. Ohne Overhead." },
        { k: "Structure", p: "Setups, Regeln, Plan‑Treue, Muster. Architektur statt Interpretation." },
        { k: "Improve", p: "Feedback‑Loops — optional KI‑gestützt in Intelligence (reguliert)." }
      ],
      screenshots: "UI‑Screenshots: Dashboard / Trade / Session / Equity / Insights / AI (hier als Grid einfügen)"
    },
    book: {
      eyebrow: "Buch + App",
      title: "Das Buch erklärt die Methode. MA:S macht sie täglich anwendbar.",
      lead: "„Der Markt als Spiegel“ liefert das Framework. MA:S operationalisiert es in Struktur, Tags, Auswertung und Entwicklung.",
      leftTitle: "Der Markt als Spiegel",
      leftText: "Kein Coaching. Keine Floskeln. Ein klares Framework, das Verhalten im Markt sichtbar macht — und damit Entscheidungen verbessert.",
      rightTitle: "Bundle‑Logik",
      rightText: "Buch = Denkmodell. App = System. Wenn beides zusammenkommt, entsteht Routine: Struktur, Wiederholung, Korrektur.",
      ctaAmazon: "Jetzt bei Amazon ansehen",
      ctaCombine: "Mit App kombinieren"
    },
    pricing: {
      eyebrow: "Pläne",
      title: "Wähle deine Ebene",
      lead: "Core, Structure, Intelligence — klar getrennte Ebenen. Ruhig, professionell, skalierbar."
    },
    final: {
      title: "Bau Entscheidungen wie Architektur. Nicht wie Impuls.",
      lead: "MA:S ist nicht für „schnell reich“. Es ist für Trader, die Struktur wollen — und Entscheidungen messen möchten."
    },
    legal: {
      impressum: { title: "Impressum", body: "Platzhalter. Trage hier dein Impressum ein (AT/DE je nach Anbieter/Unternehmen)." },
      datenschutz: { title: "Datenschutzerklärung", body: "Platzhalter. Trage hier deine Datenschutzerklärung ein (Cookies/Tracking/Formulare etc.)." }
    }
  },
  en: {
    nav: { system: "System", book: "Book", plans: "Plans" },
    hero: {
      h1: "MA:S — Decision Architecture",
      lead: "A system that measures decision quality under risk — independent of outcome. App + book. Calm. Professional. Structured.",
      ctaPrimary: "Start MA:S",
      ctaPlans: "See plans",
      ctaBook: "View on Amazon",
      micro: "Web • Desktop • Mobile · Light/Dark · Ready in minutes"
    },
    cards: [
      { t: "Decision ≠ Outcome", p: "Wins can hide bad decisions. Losses can devalue good ones." },
      { t: "Structure over impulse", p: "MA:S makes plan integrity, patterns and deviations measurable — without noise." },
      { t: "Book + System", p: "The book delivers the thinking. The app delivers daily application." }
    ],
    system: {
      eyebrow: "System",
      title: "A Decision Architecture System for professional traders",
      lead: "Not just another journal. MA:S combines performance data with decision structure and repeatable feedback loops.",
      blocks: [
        { k: "Capture", p: "Trades, sessions, tags, context. Fast. Clean. No overhead." },
        { k: "Structure", p: "Setups, rules, plan integrity, patterns. Architecture over interpretation." },
        { k: "Improve", p: "Feedback loops — optionally AI‑assisted in Intelligence (regulated)." }
      ],
      screenshots: "UI screenshots: Dashboard / Trade / Session / Equity / Insights / AI (add a grid here)"
    },
    book: {
      eyebrow: "Book + App",
      title: "The book explains the method. MA:S makes it daily.",
      lead: "“The market as a mirror” provides the framework. MA:S operationalizes it through structure, tags, analysis and progression.",
      leftTitle: "The Market as a Mirror",
      leftText: "No coaching talk. No clichés. A clear framework that reveals behavior in markets — and improves decisions.",
      rightTitle: "Bundle logic",
      rightText: "Book = mental model. App = system. Together it becomes routine: structure, repetition, correction.",
      ctaAmazon: "View on Amazon",
      ctaCombine: "Combine with the app"
    },
    pricing: {
      eyebrow: "Plans",
      title: "Choose your layer",
      lead: "Core, Structure, Intelligence — clearly separated layers. Calm, professional, scalable."
    },
    final: {
      title: "Build decisions like architecture. Not impulse.",
      lead: "MA:S isn’t for “get rich quick”. It’s for traders who want structure — and want to measure decisions."
    },
    legal: {
      impressum: { title: "Legal Notice", body: "Placeholder. Add your legal notice depending on your jurisdiction." },
      datenschutz: { title: "Privacy Policy", body: "Placeholder. Add your privacy policy (cookies, tracking, forms, etc.)." }
    }
  }
};
