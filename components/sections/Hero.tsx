import Button from "../ui/Button";

interface HeroT {
  headline: string;
  subline: string;
  tier: string;
  cta: string;
  ctaSub: string;
}

interface HeroProps {
  t: HeroT;
  checkoutHref: string;
}

export default function Hero({ t, checkoutHref }: HeroProps) {
  const [line1, line2] = t.headline.split("\n");

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-bone leading-[1.1] tracking-tight">
          {line1}
          <br />
          <span className="text-bone/60">{line2}</span>
        </h1>

        <p className="mt-8 text-base sm:text-lg text-bone/60 max-w-xl mx-auto leading-relaxed">
          {t.subline}
        </p>

        <div className="mt-12 flex flex-col items-center gap-3">
          <p className="text-xs font-semibold tracking-widest text-bone/30 uppercase">{t.tier}</p>
          <Button href={checkoutHref}>{t.cta}</Button>
          <p className="text-xs text-bone/30">{t.ctaSub}</p>
        </div>
      </div>
    </section>
  );
}
