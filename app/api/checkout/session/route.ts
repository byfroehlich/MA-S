import { NextRequest, NextResponse } from "next/server";
import { getStripe, getPriceId, type Plan, type Billing } from "../../../../lib/stripe";

const VALID_PLANS: Plan[] = ["core", "structure", "intelligence"];
const VALID_BILLING: Billing[] = ["monthly", "annual"];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { plan, billing, email, lang } = body as {
      plan: Plan;
      billing: Billing;
      email?: string;
      lang?: "de" | "en";
    };

    if (!VALID_PLANS.includes(plan) || !VALID_BILLING.includes(billing)) {
      return NextResponse.json({ error: "Invalid plan or billing" }, { status: 400 });
    }

    const priceId = getPriceId(plan, billing);
    if (!priceId) {
      return NextResponse.json({ error: "Price not configured" }, { status: 500 });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mas-system.com";
    const appUrl = process.env.APP_URL ?? "https://app.mas-system.de";
    const locale = lang === "de" ? "de" : "auto";

    const session = await getStripe().checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: email || undefined,
      locale,
      subscription_data: {
        metadata: { plan, billing },
        trial_period_days: 14,
      },
      success_url: `${appUrl}/register?plan=${plan}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/${lang ?? "de"}/checkout?plan=${plan}&billing=${billing}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
