import type { PackageContent } from "@/lib/content/types";
import { Container } from "./Container";
import { PackageTierCard } from "./PackageTierCard";

export function PackageSection({ id, pkg }: { id: string; pkg: PackageContent }) {
  return (
    <section id={id} className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex items-baseline gap-3">
          <span className="font-display text-sm font-bold text-rust">{pkg.number}</span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">{pkg.label}</h2>
        </div>
        <p className="mt-3 max-w-md text-lg text-ink-soft">{pkg.tagline}</p>

        <div className="mt-8 rounded-2xl border border-line bg-cream/60 p-6">
          <p className="font-display text-sm font-semibold text-ink">{pkg.includedHeading}</p>
          <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-[15px] text-ink-soft sm:grid-cols-2">
            {pkg.includedItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-rust">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {pkg.tiers.map((tier) => (
            <PackageTierCard key={tier.name} tier={tier} />
          ))}
        </div>
      </Container>
    </section>
  );
}
