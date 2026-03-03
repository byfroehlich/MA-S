import Stripe from "stripe";

export type Plan = "core" | "structure" | "intelligence";
export type Billing = "monthly" | "annual";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY is not set");
    }
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-02-25.clover",
    });
  }
  return _stripe;
}

const PRICE_MAP: Record<Plan, Record<Billing, string>> = {
  core: {
    monthly: process.env.STRIPE_PRICE_CORE_MONTHLY ?? "",
    annual: process.env.STRIPE_PRICE_CORE_ANNUAL ?? "",
  },
  structure: {
    monthly: process.env.STRIPE_PRICE_STRUCTURE_MONTHLY ?? "",
    annual: process.env.STRIPE_PRICE_STRUCTURE_ANNUAL ?? "",
  },
  intelligence: {
    monthly: process.env.STRIPE_PRICE_INTELLIGENCE_MONTHLY ?? "",
    annual: process.env.STRIPE_PRICE_INTELLIGENCE_ANNUAL ?? "",
  },
};

export function getPriceId(plan: Plan, billing: Billing): string {
  return PRICE_MAP[plan][billing];
}
