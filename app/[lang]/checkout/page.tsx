import { type Locale } from "../../../lib/site";
import { de } from "../../../lib/i18n/de";
import { en } from "../../../lib/i18n/en";
import CheckoutForm from "./CheckoutForm";
import { redirect } from "next/navigation";

type Plan = "core" | "structure" | "intelligence";
type Billing = "monthly" | "annual";

const VALID_PLANS: Plan[] = ["core", "structure", "intelligence"];
const VALID_BILLING: Billing[] = ["monthly", "annual"];

export default async function CheckoutPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: Locale }>;
  searchParams: Promise<{ plan?: string; billing?: string }>;
}) {
  const { lang } = await params;
  const { plan: rawPlan, billing: rawBilling } = await searchParams;

  const t = lang === "de" ? de : en;

  const plan: Plan = VALID_PLANS.includes(rawPlan as Plan) ? (rawPlan as Plan) : "structure";
  const billing: Billing = VALID_BILLING.includes(rawBilling as Billing)
    ? (rawBilling as Billing)
    : "monthly";

  const tierIndex = VALID_PLANS.indexOf(plan);
  const tier = t.pricing.tiers[tierIndex];

  if (!tier) redirect(`/${lang}`);

  return (
    <CheckoutForm
      plan={plan}
      billing={billing}
      tier={tier}
      t={t.checkout}
      lang={lang}
    />
  );
}
