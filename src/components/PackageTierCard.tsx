import type { PackageTier } from "@/lib/content/types";

export function PackageTierCard({ tier }: { tier: PackageTier }) {
  return (
    <div className="flex flex-col rounded-3xl border border-line bg-paper p-6">
      <h3 className="font-display text-lg font-bold text-rust">{tier.name}</h3>
      <p className="mt-1 text-sm font-medium text-ink-soft">{tier.subtitle}</p>
      {tier.description && (
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">{tier.description}</p>
      )}
      <p className="mt-5 font-display text-base font-bold text-ink">
        {tier.priceFrom}
        {tier.note ? ` ${tier.note}` : ""}
      </p>
    </div>
  );
}
