"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface PricingTier {
  name: string;
  tagline: string;
  priceMonthlyLabel: string;
  priceAnnualLabel: string;
  features: string[];
}

interface CheckoutT {
  emailLabel: string;
  emailPlaceholder: string;
  ctaLabel: string;
  monthly: string;
  annual: string;
  perMonth: string;
  perYear: string;
  backLink: string;
  errorGeneric: string;
  secureNote: string;
}

interface CheckoutFormProps {
  plan: string;
  billing: string;
  tier: PricingTier;
  t: CheckoutT;
  lang: "de" | "en";
}

export default function CheckoutForm({ plan, billing, tier, t, lang }: CheckoutFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const priceLabel = billing === "annual" ? tier.priceAnnualLabel : tier.priceMonthlyLabel;
  const periodLabel = billing === "annual" ? t.perYear : t.perMonth;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, billing, email: email || undefined, lang }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        setError(t.errorGeneric);
        setLoading(false);
        return;
      }

      router.push(data.url);
    } catch {
      setError(t.errorGeneric);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="w-full max-w-md">
        <a
          href={`/${lang}`}
          className="text-bone/40 text-sm hover:text-bone/70 transition-colors mb-10 inline-block"
        >
          {t.backLink}
        </a>

        {/* Plan summary */}
        <div className="bg-steel rounded p-6 mb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest text-bone/40 uppercase mb-1">
                {tier.name}
              </p>
              <p className="text-bone/70 text-sm">{tier.tagline}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-lg font-semibold text-bone">{priceLabel}</p>
              <p className="text-xs text-bone/40">{periodLabel}</p>
            </div>
          </div>

          <ul className="mt-4 flex flex-col gap-1.5 border-t border-bone/10 pt-4">
            {tier.features.map((f) => (
              <li key={f} className="flex gap-2 text-xs text-bone/60">
                <span className="text-bone/30">—</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm text-bone/60 mb-1.5">
              {t.emailLabel}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              className="w-full bg-steel rounded px-4 py-3 text-sm text-bone placeholder-bone/30 border border-bone/10 focus:border-bone/30 focus:outline-none transition-colors"
            />
          </div>

          {error && <p className="text-sm text-oxide">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-bone text-obsidian px-6 py-3 text-sm font-medium hover:bg-bone/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "..." : `${t.ctaLabel} — ${priceLabel}`}
          </button>

          <p className="text-xs text-bone/30 text-center">{t.secureNote}</p>
        </form>
      </div>
    </div>
  );
}
