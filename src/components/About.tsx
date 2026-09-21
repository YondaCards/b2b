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
        <a
          href={content.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-8 inline-block rounded-full bg-rust px-6 py-3.5 text-[15px] font-semibold text-cream shadow-[0_10px_24px_-8px_rgba(198,81,46,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-rust-dark"
        >
          {content.about.instagramCta}
        </a>
      </Container>
    </section>
  );
}
