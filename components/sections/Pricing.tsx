"use client";

import { useState } from "react";
import PricingCard from "../ui/PricingCard";
import PricingToggle from "../ui/PricingToggle";

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

interface PricingT {
  toggle: { monthly: string; annual: string };
  annualNote: string;
  paperback: string;
  recommended: string;
  trialNote: string;
  tiers: PricingTier[];
}

interface PricingProps {
  t: PricingT;
  lang: "de" | "en";
  ctaLabel: string;
}

const TIER_KEYS = ["core", "structure", "intelligence"] as const;

export default function Pricing({ t, lang, ctaLabel }: PricingProps) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 mb-12">
          <PricingToggle value={billing} onChange={setBilling} labels={t.toggle} />
          {billing === "annual" && (
            <div className="text-center">
              <p className="text-sm text-bone/60">{t.annualNote}</p>
              <p className="text-xs text-bone/40 mt-0.5">{t.paperback}</p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {t.tiers.map((tier, i) => {
            const tierKey = TIER_KEYS[i];
            const isFeatured = tierKey === "structure";
            const checkoutHref = `/${lang}/checkout?plan=${tierKey}&billing=${billing}`;

            return (
              <PricingCard
                key={tier.name}
                tier={tier}
                featured={isFeatured}
                recommended={isFeatured ? t.recommended : undefined}
                billingPeriod={billing}
                trialNote={isFeatured ? t.trialNote : undefined}
                ctaHref={checkoutHref}
                ctaLabel={ctaLabel}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
