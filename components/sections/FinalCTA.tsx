import Button from "../ui/Button";

interface FinalCTAT {
  headline: string;
  text: string;
  cta: string;
  ctaSub: string;
}

interface FinalCTAProps {
  t: FinalCTAT;
  checkoutHref: string;
}

export default function FinalCTA({ t, checkoutHref }: FinalCTAProps) {
  return (
    <section className="py-32 px-6 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-bone tracking-tight">{t.headline}</h2>
        <p className="mt-6 text-base sm:text-lg text-bone/60 leading-relaxed">{t.text}</p>

        <div className="mt-12 flex flex-col items-center gap-3">
          <Button href={checkoutHref}>{t.cta}</Button>
          <p className="text-xs text-bone/30">{t.ctaSub}</p>
        </div>
      </div>
    </section>
  );
}
