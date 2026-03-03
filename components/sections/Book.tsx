import Button from "../ui/Button";

interface BookT {
  label: string;
  headline: string;
  text: string;
  trialNote: string;
  paperback: string;
  cta: string;
  coverTitle: string;
}

export default function Book({ t }: { t: BookT }) {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-bone/40 uppercase mb-4">{t.label}</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-bone tracking-tight">{t.headline}</h2>
            <p className="mt-6 text-base text-bone/60 leading-relaxed">{t.text}</p>
            <p className="mt-4 text-sm text-bone/50">{t.trialNote}</p>
            <p className="mt-1 text-sm text-bone/40">{t.paperback}</p>
            <div className="mt-8">
              <Button href="#" variant="secondary">{t.cta}</Button>
            </div>
          </div>

          {/* Cover placeholder */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-steel rounded w-48 h-64 sm:w-56 sm:h-72 flex items-center justify-center p-6 text-center">
              <span className="text-bone/30 text-sm leading-snug">{t.coverTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
