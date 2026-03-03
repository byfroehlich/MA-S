import { site, type Locale } from "../lib/site";

export default function Footer({ lang }: { lang: Locale }) {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-black/60 dark:text-white/60">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.brand}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a className="hover:underline" href={`/${lang}/legal/impressum`}>Impressum</a>
            <a className="hover:underline" href={`/${lang}/legal/datenschutz`}>Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
