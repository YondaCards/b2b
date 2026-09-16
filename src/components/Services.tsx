import type { SiteContent } from "@/lib/content/types";
import { Container } from "./Container";

const spans = [
  "sm:col-span-3 sm:row-span-1",
  "sm:col-span-3 sm:row-span-1",
  "sm:col-span-2",
  "sm:col-span-4",
];

export function Services({ content }: { content: SiteContent }) {
  return (
    <section className="bg-paper pb-20 sm:pb-28">
      <Container>
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {content.services.heading}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-6">
          {content.services.items.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-3xl border border-line bg-cream/70 p-7 ${spans[i] ?? "sm:col-span-3"}`}
            >
              <h3 className="font-display text-lg font-bold text-rust">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
