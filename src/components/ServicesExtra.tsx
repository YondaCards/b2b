import type { SiteContent } from "@/lib/content/types";
import { Container } from "./Container";

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1", "rotate-1"];

export function ServicesExtra({ content }: { content: SiteContent }) {
  return (
    <section className="bg-rust py-16 text-cream sm:py-20">
      <Container>
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {content.servicesExtra.heading}
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {content.servicesExtra.items.map((item, i) => (
            <span
              key={item}
              className={`inline-block rounded-md border-2 border-dashed border-cream/40 bg-rust-dark/40 px-4 py-2.5 text-[15px] font-medium ${rotations[i % rotations.length]}`}
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
