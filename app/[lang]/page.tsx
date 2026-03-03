import Section from "../../components/Section";
import Pricing from "../../components/Pricing";
import Button from "../../components/Button";
import { copy, site, type Locale } from "../../lib/site";

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return (
    <main>

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          MA:S
        </h1>
        <p className="mt-6 text-xl text-black/70 dark:text-white/70">
          <strong>Decision Architecture for traders.</strong>
        </p>
        <p className="mt-4 text-base text-black/60 dark:text-white/60">
          Improve performance by understanding your decisions.
          <br />
          Built across stocks, crypto, forex and futures.
        </p>

        <div className="mt-10">
          <Button href={site.appUrl} variant="primary">
            Start MA:S
          </Button>
        </div>

        <p className="mt-4 text-sm text-black/50 dark:text-white/50">
          14 days or 30 trades. Cancel anytime.
        </p>
      </section>

      {/* DIFFERENTIATION */}
      <Section
        title="Most traders track results. Few measure decision quality."
        lead="MA:S connects performance data with behavioral structure. Not another journal. A system."
      />

      {/* OUTCOME */}
      <Section
        title="After 10–15 trades you will see:"
      >
        <ul className="space-y-3 text-base text-black/75 dark:text-white/75">
          <li>• Which setup actually makes you money</li>
          <li>• Where discipline breaks</li>
          <li>• Which session reduces performance</li>
          <li>• One AI-based behavioral insight</li>
        </ul>

        <p className="mt-6 text-sm text-black/50 dark:text-white/50">
          No signals. No community. No noise.
        </p>
      </Section>

      {/* SYSTEM */}
      <Section title="The System">
        <div className="grid gap-8 md:grid-cols-3 text-left">
          <div>
            <h3 className="font-semibold mb-2">Capture</h3>
            <p className="text-black/70 dark:text-white/70">
              Log trades, context, session and setup.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Structure</h3>
            <p className="text-black/70 dark:text-white/70">
              Analyze patterns, time windows and behavioral drift.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Improve</h3>
            <p className="text-black/70 dark:text-white/70">
              Refine decisions through structured feedback.
            </p>
          </div>
        </div>
      </Section>

      {/* TRIAL */}
      <Section title="Start with full Structure access.">
        <p className="text-black/70 dark:text-white/70">
          14 days or 30 trades.<br />
          One AI decision analysis included.<br />
          No charge until trial ends.
        </p>

        <div className="mt-8">
          <Button href={site.appUrl} variant="primary">
            Start MA:S
          </Button>
        </div>
      </Section>

      {/* PRICING */}
      <Section
        id="pricing"
        title="Pricing"
        lead="Monthly or annual access. Annual includes the book and saves 30%."
      >
        <Pricing lang={lang} />
      </Section>

      {/* BOOK */}
      <Section title="The thinking behind MA:S">
        <p className="text-black/70 dark:text-white/70">
          “Der Markt als Spiegel” explains the conceptual foundation of the system.
        </p>

        <div className="mt-8">
          <Button href={site.bookAmazonUrl} variant="secondary">
            View the book
          </Button>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-2xl font-semibold">
          Build decisions like architecture. Not impulse.
        </h2>

        <div className="mt-8">
          <Button href={site.appUrl} variant="primary">
            Start MA:S
          </Button>
        </div>
      </section>

    </main>
  );
}
