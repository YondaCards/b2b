import type { SiteContent } from "@/lib/content/types";
import { Container } from "./Container";

export function Process3({ content }: { content: SiteContent }) {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <Container>
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {content.process3.heading}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
          {content.process3.steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-sm font-bold text-rust">{step.number}</span>
                <h3 className="font-display text-xl font-bold text-ink">{step.title}</h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{step.body}</p>
              {i < content.process3.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-[-1.1rem] top-2 hidden text-rust/40 sm:block"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
