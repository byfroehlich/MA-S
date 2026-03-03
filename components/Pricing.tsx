import Button from "./Button";
import { pricing, site, type Locale } from "../lib/site";

function dotFill(accent: "silver" | "bronze" | "gold") {
  if (accent === "silver") return "#9AA3AD";
  if (accent === "bronze") return "#9C6B3D";
  return "#A8843A";
}

function accentText(accent: "silver" | "bronze" | "gold") {
  if (accent === "silver") return "text-silver";
  if (accent === "bronze") return "text-bronze";
  return "text-gold";
}

export default function Pricing({ lang }: { lang: Locale }) {
  const bookLabel = lang === "de" ? "Buch ansehen" : "View book";
  const note =
    lang === "de"
      ? "Core/Structure: ohne integrierte KI oder mit eigenem Key (je nach Setup). Intelligence: Key inkl., Nutzung reguliert."
      : "Core/Structure: no integrated AI or bring your own key (depending on setup). Intelligence: key included, usage regulated.";

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {pricing.map((p) => (
        <div
          key={p.key}
          className="rounded-3xl border border-black/10 bg-white/40 p-7 backdrop-blur dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex items-center justify-between">
            <div className="text-lg font-extrabold tracking-tight">{site.brand}</div>
            <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
              <circle cx="17" cy="12" r="3.5" fill={dotFill(p.accent)} />
              <circle cx="17" cy="22" r="3.5" fill={dotFill(p.accent)} />
            </svg>
          </div>

          <div className="mt-4">
            <div className={`text-sm font-semibold tracking-[0.16em] uppercase ${accentText(p.accent)}`}>
              {p.name.replace("MA:S ", "")}
            </div>
            <div className="mt-2 text-sm text-black/70 dark:text-white/70">
              {p.tagline}
            </div>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-black/75 dark:text-white/75">
            {p.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/40" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-3">
            <Button href={site.appUrl} variant="primary">{p.cta}</Button>
            <Button href={`/${lang}#book`} variant="secondary">{bookLabel}</Button>
          </div>

          <p className="mt-5 text-xs text-black/55 dark:text-white/55">{note}</p>
        </div>
      ))}
    </div>
  );
}
