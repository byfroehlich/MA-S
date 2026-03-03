import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
}

export default function Button({ href, variant = "primary", children, className = "" }: ButtonProps) {
  const base = "inline-block rounded px-6 py-3 text-sm font-medium transition-colors";
  const styles = {
    primary: "bg-bone text-obsidian hover:bg-bone/90",
    secondary: "border border-bone/30 text-bone hover:border-bone/60",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </a>
  );
}
