import type { SiteContent } from "@/lib/content/types";
import { Container } from "./Container";

export function Reveal({ content }: { content: SiteContent }) {
  return (
    <section className="bg-rust py-20 text-cream sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {content.reveal.heading}
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-cream/85">{content.reveal.body}</p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-cream/70">{content.reveal.philosophy}</p>
        </div>
      </Container>
    </section>
  );
}
