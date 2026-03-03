import React from "react";

export default function Section({
  id,
  eyebrow,
  title,
  lead,
  children
}: React.PropsWithChildren<{
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
}>) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-black/45 dark:text-white/45">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/70 dark:text-white/70">
          {lead}
        </p>
      ) : null}
      <div className="mt-10">{children}</div>
    </section>
  );
}
