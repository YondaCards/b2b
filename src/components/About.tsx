import type { SiteContent } from "@/lib/content/types";
import { Container } from "./Container";

export function About({ content }: { content: SiteContent }) {
  return (
    <section id="about" className="bg-cream py-20 sm:py-28">
      <Container className="max-w-2xl">
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
          {content.about.heading}
        </h2>
        <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink-soft">
          {content.about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
