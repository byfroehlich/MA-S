import { ReactNode } from "react";

interface PillarCardProps {
  icon: ReactNode;
  title: string;
  text: string;
}

export default function PillarCard({ icon, title, text }: PillarCardProps) {
  return (
    <div className="bg-steel rounded p-6">
      <div className="mb-4 text-bone/60">{icon}</div>
      <h3 className="mb-2 text-base font-semibold text-bone">{title}</h3>
      <p className="text-sm text-bone/60 leading-relaxed">{text}</p>
    </div>
  );
}
