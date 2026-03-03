import type { Metadata } from "next";
import "../../styles/globals.css";
import { site, type Locale } from "../../lib/site";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: `${site.brand} — ${site.product}`,
  description:
    "A decision architecture system that measures decision quality under risk. Book + App. Calm, professional, structured.",
  robots: { index: true, follow: true }
};

export default async function LangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body>
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
