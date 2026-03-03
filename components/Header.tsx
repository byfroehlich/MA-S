import { copy, site, type Locale } from "../lib/site";

export default function Header({ lang }: { lang: Locale }) {
  const t = copy[lang];
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-bgLight/80 backdrop-blur dark:border-white/10 dark:bg-bgDark/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-baseline gap-3">
          <span className="text-lg font-extrabold tracking-tight">{site.brand}</span>
          <span className="text-sm text-black/60 dark:text-white/60">
            {site.product}
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white" href={`/${lang}#system`}>
            {t.nav.system}
          </a>
          <a className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white" href={`/${lang}#book`}>
            {t.nav.book}
          </a>
          <a className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white" href={`/${lang}#pricing`}>
            {t.nav.plans}
          </a>
          <a className="text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white" href={lang === "de" ? "/en" : "/de"}>
            {lang === "de" ? "EN" : "DE"}
          </a>
        </nav>
      </div>
    </header>
  );
}
