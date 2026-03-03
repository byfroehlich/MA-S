import Button from "../ui/Button";

interface TrialT {
  headline: string;
  text: string;
  included: string;
  notes: string[];
  cta: string;
  ctaSub: string;
}

interface TrialProps {
  t: TrialT;
  checkoutHref: string;
}

export default function Trial({ t, checkoutHref }: TrialProps) {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-bone tracking-tight">{t.headline}</h2>

        <p className="mt-6 text-base text-bone/60 leading-relaxed">{t.text}</p>
        <p className="mt-2 text-sm text-bone/40 italic">{t.included}</p>

        <ul className="mt-6 flex flex-col gap-1">
          {t.notes.map((note) => (
            <li key={note} className="text-sm text-bone/40">
              {note}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Button href={checkoutHref}>{t.cta}</Button>
          <p className="text-xs text-bone/30">{t.ctaSub}</p>
        </div>
      </div>
    </section>
  );
}
