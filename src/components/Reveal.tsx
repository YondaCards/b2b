import { Marck_Script } from "next/font/google";
import type { SiteContent } from "@/lib/content/types";
import { Container } from "./Container";

const script = Marck_Script({
  weight: "400",
  subsets: ["latin", "cyrillic"],
  variable: "--font-script",
});

export function Reveal({ content }: { content: SiteContent }) {
  return (
    <section id="services" className="bg-rust py-20 text-cream sm:py-28">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {content.reveal.heading}
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-cream/85">{content.reveal.body}</p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-cream/70">{content.reveal.philosophy}</p>
        </div>

        <div className={script.className}>
          <div
            className="relative mx-auto max-w-sm rounded-[42%_58%_54%_46%/48%_42%_58%_52%] bg-cream/95 px-8 py-9 text-ink shadow-[0_20px_40px_-16px_rgba(0,0,0,0.35)]"
          >
            <p className="text-[26px] leading-snug">{content.reveal.quote}</p>
          </div>
          <p className="mt-4 text-center text-sm font-body text-cream/70">{content.reveal.quoteAttribution}</p>
        </div>
      </Container>
    </section>
  );
}
