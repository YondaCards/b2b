import type { SiteContent } from "@/lib/content/types";
import { Container } from "./Container";

const rotations = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1"];

export function Testimonials({ content }: { content: SiteContent }) {
  const items = content.cases.filter((c) => c.testimonial);

  return (
    <section className="bg-blush py-20 sm:py-28">
      <Container>
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {content.testimonialsSection.heading}
        </h2>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {items.map((c, i) => (
            <figure
              key={c.slug}
              className={`rounded-2xl border border-line bg-cream p-6 shadow-[0_10px_24px_-16px_rgba(58,36,28,0.35)] ${rotations[i % rotations.length]}`}
            >
              <blockquote className="text-[15px] leading-relaxed text-ink-soft">
                “{c.testimonial!.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-display font-bold text-ink">{c.testimonial!.name}</span>
                <span className="text-ink-soft">, {c.testimonial!.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
