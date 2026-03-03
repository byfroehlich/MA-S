import { copy, type Locale } from "../../../../lib/site";

export default async function Impressum({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = copy[lang].legal.impressum;
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">{t.title}</h1>
      <p className="mt-6 text-sm text-black/70 dark:text-white/70">{t.body}</p>
    </main>
  );
}
