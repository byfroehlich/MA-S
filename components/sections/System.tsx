interface SystemT {
  headline: string;
  text: string;
  items: string[];
  closing: string;
}

export default function System({ t }: { t: SystemT }) {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-bone tracking-tight">{t.headline}</h2>

        <p className="mt-6 text-base text-bone/60 leading-relaxed">{t.text}</p>

        <ul className="mt-6 flex flex-col gap-2">
          {t.items.map((item) => (
            <li key={item} className="flex gap-3 text-bone/70 text-sm">
              <span className="text-bone/30 select-none mt-0.5">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-base text-bone/60 leading-relaxed">{t.closing}</p>
      </div>
    </section>
  );
}
