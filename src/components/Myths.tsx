"use client";

import { useState } from "react";
import type { SiteContent } from "@/lib/content/types";
import { Container } from "./Container";

export function Myths({ content }: { content: SiteContent }) {
  const [active, setActive] = useState(0);

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
            <div role="tablist" className="flex flex-wrap gap-1.5">
              {content.myths.items.map((item, i) => (
                <button
                  key={item}
                  type="button"
                  id={`myth-tab-${i}`}
                  role="tab"
                  aria-selected={active === i}
                  aria-controls="myth-panel"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`focus-ring rounded-t-xl border border-b-0 px-4 py-2.5 text-sm font-medium transition-colors ${
                    active === i
                      ? "border-line bg-cream text-ink"
                      : "border-transparent bg-cream/40 text-ink-soft hover:bg-cream/70"
                  }`}
                >
                  {`0${i + 1}`}
                </button>
              ))}
            </div>

            <div
              role="tabpanel"
              id="myth-panel"
              aria-labelledby={`myth-tab-${active}`}
              className="rounded-b-2xl rounded-tr-2xl border border-line bg-cream px-6 py-6"
            >
              <p className="text-[17px] leading-relaxed text-ink">
                <span className="mr-2 text-rust">✕</span>
                {content.myths.items[active]}
              </p>
            </div>

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
