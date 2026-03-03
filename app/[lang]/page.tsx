import { type Locale } from "../../lib/site";
import { de } from "../../lib/i18n/de";
import { en } from "../../lib/i18n/en";

import Hero from "../../components/sections/Hero";
import Mirror from "../../components/sections/Mirror";
import DQS from "../../components/sections/DQS";
import System from "../../components/sections/System";
import Trial from "../../components/sections/Trial";
import Pricing from "../../components/sections/Pricing";
import Book from "../../components/sections/Book";
import FinalCTA from "../../components/sections/FinalCTA";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = lang === "de" ? de : en;
  const checkoutHref = `/${lang}/checkout?plan=structure&billing=monthly`;

  return (
    <main>
      <Hero t={t.hero} checkoutHref={checkoutHref} />
      <Mirror t={t.mirror} />
      <DQS t={t.dqs} />
      <System t={t.system} />
      <Trial t={t.trial} checkoutHref={checkoutHref} />
      <Pricing t={t.pricing} lang={lang} ctaLabel={t.trial.cta} />
      <Book t={t.book} />
      <FinalCTA t={t.finalCta} checkoutHref={checkoutHref} />
    </main>
  );
}
