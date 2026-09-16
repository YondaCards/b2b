import type { SiteContent } from "@/lib/content/types";
import { Container } from "./Container";

export function Process5({ content }: { content: SiteContent }) {
  return (
    <section id="process" className="bg-paper py-20 sm:py-28">
      <Container>
        <h2 className="max-w-lg font-display text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
          {content.process5.heading}
        </h2>

        <ol className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-5">
          {content.process5.steps.map((step, i) => (
            <li key={step.title} className="relative pl-0">
              <div className="flex items-center gap-3 sm:block">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-rust font-display text-sm font-bold text-rust">
                  {i + 1}
                </span>
                <h3 className="font-display text-[17px] font-bold text-ink sm:mt-4">{step.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:mt-3">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
