import type { SiteContent } from "@/lib/content/types";
import { Container } from "./Container";

export function Myths({ content }: { content: SiteContent }) {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              {content.myths.heading}
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink-soft">{content.myths.intro}</p>
          </div>

          <div>
            <ul className="space-y-3">
              {content.myths.items.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-line bg-cream/60 px-5 py-4 text-[15px] text-ink-soft"
                >
                  <span className="mr-2 text-rust">✕</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-line pt-8">
              <p className="font-display text-xl font-semibold text-ink sm:text-2xl">{content.myths.standout}</p>
              <p className="mt-2 font-display text-xl font-bold text-rust sm:text-2xl">{content.myths.reveal}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
