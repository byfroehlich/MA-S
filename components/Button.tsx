import React from "react";

type Props = React.PropsWithChildren<{
  href: string;
  variant?: "primary" | "secondary";
}>;

export default function Button({ href, variant = "primary", children }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition";
  const primary =
    "bg-ink text-bgLight hover:opacity-90 dark:bg-bone dark:text-bgDark";
  const secondary =
    "border border-black/15 text-ink hover:bg-black/5 dark:border-white/15 dark:text-bone dark:hover:bg-white/5";

  return (
    <a className={`${base} ${variant === "primary" ? primary : secondary}`} href={href}>
      {children}
    </a>
  );
}
