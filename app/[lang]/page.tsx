import Section from "../../components/Section";
import Pricing from "../../components/Pricing";
import Button from "../../components/Button";
import { copy, site, type Locale } from "../../lib/site";

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = copy[lang];

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">{t.hero.h1}</h1>
          <p className="mt-6 text-lg leading-relaxed text-black/75 dark:text-white/75">
            {t.hero.lead}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.appUrl} variant="primary">{t.hero.ctaPrimary}</Button>
            <Button href={`/${lang}#pricing`} variant="secondary">{t.hero.ctaPlans}</Button>
            <Button href={site.bookAmazonUrl} variant="secondary">{t.hero.ctaBook}</Button>
          </div>

          <p className="mt-6 text-sm text-black/55 dark:text-white/55">{t.hero.micro}</p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {t.cards.map((c: any) => (
            <div key={c.t} className="rounded-3xl border border-black/10 bg-white/40 p-6 dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      <Section id="system" eyebrow={t.system.eyebrow} title={t.system.title} lead={t.system.lead}>
        <div className="grid gap-6 md:grid-cols-3">
          {t.system.blocks.map((b: any) => (
            <div key={b.k} className="rounded-3xl border border-black/10 bg-white/40 p-7 dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-semibold tracking-[0.12em] uppercase text-black/60 dark:text-white/60">{b.k}</div>
              <p className="mt-3 text-sm text-black/75 dark:text-white/75">{b.p}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-black/10 bg-white/30 p-8 text-sm text-black/60 dark:border-white/10 dark:bg-white/5 dark:text-white/60">
          {t.system.screenshots}
        </div>
      </Section>

      <Section id="book" eyebrow={t.book.eyebrow} title={t.book.title} lead={t.book.lead}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white/40 p-7 dark:border-white/10 dark:bg-white/5">
            <div className="text-sm font-semibold">{t.book.leftTitle}</div>
            <p className="mt-3 text-sm text-black/75 dark:text-white/75">{t.book.leftText}</p>
            <div className="mt-6 flex gap-3">
              <Button href={site.bookAmazonUrl} variant="primary">{t.book.ctaAmazon}</Button>
              <Button href={`/${lang}#pricing`} variant="secondary">{t.book.ctaCombine}</Button>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/40 p-7 dark:border-white/10 dark:bg-white/5">
            <div className="text-sm font-semibold">{t.book.rightTitle}</div>
            <p className="mt-3 text-sm text-black/75 dark:text-white/75">{t.book.rightText}</p>
            <div className="mt-6 flex gap-3">
              <Button href={site.appUrl} variant="primary">{t.hero.ctaPrimary}</Button>
              <Button href={site.bookAmazonUrl} variant="secondary">{t.book.ctaAmazon}</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section id="pricing" eyebrow={t.pricing.eyebrow} title={t.pricing.title} lead={t.pricing.lead}>
        <Pricing lang={lang} />
      </Section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-black/10 bg-white/40 p-10 dark:border-white/10 dark:bg-white/5">
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{t.final.title}</h3>
          <p className="mt-4 max-w-2xl text-sm text-black/70 dark:text-white/70">{t.final.lead}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={site.appUrl} variant="primary">{t.hero.ctaPrimary}</Button>
            <Button href={site.bookAmazonUrl} variant="secondary">{t.book.ctaAmazon}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
