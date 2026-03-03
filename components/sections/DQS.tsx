import PillarCard from "../ui/PillarCard";

interface Pillar {
  title: string;
  text: string;
}

interface DQST {
  label: string;
  headline: string;
  text: string;
  pillars: Pillar[];
}

function IconAlignment() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <line x1="9" y1="9" x2="15" y2="9" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="15" x2="12" y2="15" />
    </svg>
  );
}

function IconStability() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3,14 7,10 11,13 15,8 21,12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function IconBody() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="2" />
      <path d="M8 14 Q12 10 16 14" />
      <line x1="12" y1="14" x2="12" y2="20" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  );
}

const icons = [<IconAlignment key="a" />, <IconStability key="s" />, <IconBody key="b" />];

export default function DQS({ t }: { t: DQST }) {
  const [line1, line2] = t.headline.split("\n");

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-widest text-sapphire uppercase mb-4">{t.label}</p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-bone leading-tight tracking-tight max-w-3xl">
          {line1}
          <br />
          {line2}
        </h2>

        <p className="mt-6 text-base text-bone/60 max-w-2xl leading-relaxed">{t.text}</p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {t.pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} icon={icons[i]} title={pillar.title} text={pillar.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
