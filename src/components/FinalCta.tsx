import type { SiteContent } from "@/lib/content/types";
import { Container } from "./Container";
import { BrandStamp } from "./BrandStamp";

export function FinalCta({ content }: { content: SiteContent }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-20 text-cream sm:py-28">
      <BrandStamp
        size={220}
        className="pointer-events-none absolute -bottom-16 -right-16 text-rust-light opacity-25"
      />
      <Container className="relative max-w-2xl">
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {content.finalCta.heading}
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-cream/80">{content.finalCta.body}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://t.me/vnetta"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full bg-rust px-6 py-3.5 text-[15px] font-semibold text-cream transition-transform hover:-translate-y-0.5 hover:bg-rust-dark"
          >
            {content.finalCta.ctaTelegram}
          </a>
        </div>
      </Container>
    </section>
  );
}
