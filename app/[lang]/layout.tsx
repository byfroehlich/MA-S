import type { Metadata } from "next";
import "../../styles/globals.css";
import { site, type Locale } from "../../lib/site";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { de } from "../../lib/i18n/de";
import { en } from "../../lib/i18n/en";

export const metadata: Metadata = {
  title: `${site.brand} — ${site.product}`,
  description:
    "A decision architecture system that measures decision quality under risk. Book + App. Calm, professional, structured.",
  robots: { index: true, follow: true },
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = lang === "de" ? de : en;
  const checkoutHref = `/${lang}/checkout?plan=structure&billing=monthly`;

  return (
    <html lang={lang}>
      <body>
        <Navbar lang={lang} t={t.nav} checkoutHref={checkoutHref} />
        {children}
        <Footer lang={lang} t={t.footer} />
      </body>
    </html>
  );
}
