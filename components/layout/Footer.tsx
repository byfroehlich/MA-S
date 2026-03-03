interface FooterT {
  tagline: string;
  impressum: string;
  datenschutz: string;
  kontakt: string;
  copyright: string;
}

interface FooterProps {
  lang: "de" | "en";
  t: FooterT;
}

export default function Footer({ lang, t }: FooterProps) {
  return (
    <footer className="border-t border-steel/50 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-bone/60 text-sm font-medium">
            MA:S <span className="text-bone/30">—</span> {t.tagline}
          </p>
          <p className="text-bone/30 text-xs mt-1">{t.copyright}</p>
        </div>

        <div className="flex items-center gap-4 text-sm text-bone/40">
          <a href={`/${lang}/legal/impressum`} className="hover:text-bone/70 transition-colors">
            {t.impressum}
          </a>
          <span className="text-bone/20">·</span>
          <a href={`/${lang}/legal/datenschutz`} className="hover:text-bone/70 transition-colors">
            {t.datenschutz}
          </a>
          <span className="text-bone/20">·</span>
          <a href="mailto:hello@mas-system.com" className="hover:text-bone/70 transition-colors">
            {t.kontakt}
          </a>
        </div>
      </div>
    </footer>
  );
}
