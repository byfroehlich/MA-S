interface MirrorT {
  headline: string;
  text: string;
  highlight: string;
}

export default function Mirror({ t }: { t: MirrorT }) {
  const [line1, line2] = t.headline.split("\n");

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-bone leading-tight tracking-tight">
          {line1}
          <br />
          {line2}
        </h2>

        <p className="mt-8 text-base sm:text-lg text-bone/60 leading-relaxed">{t.text}</p>

        <p className="mt-6 text-bone font-medium">{t.highlight}</p>
      </div>
    </section>
  );
}
