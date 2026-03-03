"use client";

import { useEffect, useState } from "react";

interface NavbarProps {
  lang: "de" | "en";
  t: { brand: string; startCta: string };
  checkoutHref: string;
}

export default function Navbar({ lang, t, checkoutHref }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const otherLang = lang === "de" ? "en" : "de";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "backdrop-blur-sm bg-obsidian/80 border-b border-steel/30" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href={`/${lang}`} className="text-bone font-bold text-lg tracking-tight">
          {t.brand}
        </a>

        <div className="flex items-center gap-6">
          {/* Language switcher */}
          <div className="flex items-center gap-1 text-sm">
            <span className={lang === "de" ? "text-bone font-medium" : "text-bone/40"}>DE</span>
            <span className="text-bone/20 select-none mx-1">|</span>
            <a
              href={`/${otherLang}`}
              className={lang === "en" ? "text-bone font-medium" : "text-bone/40 hover:text-bone/70 transition-colors"}
            >
              EN
            </a>
          </div>

          {/* CTA */}
          <a
            href={checkoutHref}
            className="rounded border border-bone/30 px-4 py-1.5 text-sm text-bone hover:border-bone/60 transition-colors"
          >
            {t.startCta}
          </a>
        </div>
      </div>
    </nav>
  );
}
