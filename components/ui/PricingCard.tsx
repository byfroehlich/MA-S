interface PricingTier {
  name: string;
  tagline: string;
  priceMonthly: string;
  priceAnnual: string;
  priceMonthlyLabel: string;
  priceAnnualLabel: string;
  priceAnnualSub: string;
  features: string[];
}

interface PricingCardProps {
  tier: PricingTier;
  featured?: boolean;
  recommended?: string;
  billingPeriod: "monthly" | "annual";
  trialNote?: string;
  ctaHref: string;
  ctaLabel: string;
}

export default function PricingCard({
  tier,
  featured = false,
  recommended,
  billingPeriod,
  trialNote,
  ctaHref,
  ctaLabel,
}: PricingCardProps) {
  const price = billingPeriod === "monthly" ? tier.priceMonthlyLabel : tier.priceAnnualLabel;

  return (
    <div
      className={`bg-steel rounded p-8 flex flex-col gap-6 relative ${
        featured ? "ring-1 ring-sapphire md:scale-[1.02]" : ""
      }`}
    >
      {recommended && (
        <span className="absolute top-4 right-4 text-xs font-semibold tracking-widest text-sapphire">
          {recommended}
        </span>
      )}

      <div>
        <p className="text-xs font-semibold tracking-widest text-bone/40 mb-1">{tier.name}</p>
        <p className="text-bone/70 text-sm">{tier.tagline}</p>
      </div>

      <div>
        <p className="text-2xl font-semibold text-bone">{price}</p>
        {billingPeriod === "annual" && (
          <p className="text-xs text-bone/40 mt-0.5">{tier.priceAnnualSub}</p>
        )}
      </div>

      <ul className="flex flex-col gap-2 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="text-sm text-bone/70 flex gap-2">
            <span className="text-bone/30 select-none">—</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {trialNote && (
        <p className="text-xs text-sapphire">{trialNote}</p>
      )}

      <a
        href={ctaHref}
        className="inline-block rounded px-5 py-3 text-sm font-medium transition-colors text-center bg-bone text-obsidian hover:bg-bone/90"
      >
        {ctaLabel}
      </a>
    </div>
  );
}
