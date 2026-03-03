"use client";

interface PricingToggleProps {
  value: "monthly" | "annual";
  onChange: (v: "monthly" | "annual") => void;
  labels: { monthly: string; annual: string };
}

export default function PricingToggle({ value, onChange, labels }: PricingToggleProps) {
  return (
    <div className="inline-flex rounded bg-steel p-1 gap-1">
      <button
        onClick={() => onChange("monthly")}
        className={`rounded px-4 py-1.5 text-sm font-medium transition-colors ${
          value === "monthly" ? "bg-bone text-obsidian" : "text-bone/50 hover:text-bone/80"
        }`}
      >
        {labels.monthly}
      </button>
      <button
        onClick={() => onChange("annual")}
        className={`rounded px-4 py-1.5 text-sm font-medium transition-colors ${
          value === "annual" ? "bg-bone text-obsidian" : "text-bone/50 hover:text-bone/80"
        }`}
      >
        {labels.annual}
      </button>
    </div>
  );
}
