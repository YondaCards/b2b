"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";
import type { SiteContent } from "@/lib/content/types";
import { Container } from "./Container";
import { FOLDER_CANVAS, MYTH_FOLDERS } from "./mythFolders";

const LIFT = 26;
const TEXT_TOP_OFFSET = 14;

export function Myths({ content }: { content: SiteContent }) {
  const [active, setActive] = useState(0);
  const items = content.myths.items;
  const folders = MYTH_FOLDERS.slice(0, items.length);
  const { w, h } = FOLDER_CANVAS;

  const onKeyDown = (event: KeyboardEvent<SVGGElement>, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActive(index);
    }
  };

  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            {content.myths.heading}
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink-soft">{content.myths.intro}</p>
        </div>

        <div className="mt-12">
          <div className="relative [container-type:inline-size]" style={{ aspectRatio: `${w} / ${h}` }}>
            <svg
              viewBox={`0 0 ${w} ${h}`}
              role="tablist"
              aria-label={content.myths.heading}
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              {folders.map((folder, i) => {
                const isActive = active === i;
                return (
                  <g
                    key={items[i]}
                    id={`myth-tab-${i}`}
                    role="tab"
                    tabIndex={0}
                    aria-selected={isActive}
                    aria-controls="myth-panel"
                    aria-label={items[i]}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    onKeyDown={(event) => onKeyDown(event, i)}
                    className={`cursor-pointer outline-none transition-transform duration-200 motion-reduce:transition-none ${isActive ? "drop-shadow-[0_-6px_10px_rgba(58,36,28,0.16)]" : ""} [&:focus-visible>path]:stroke-ink [&:focus-visible>path]:stroke-[6]`}
                    style={{ transform: `translate(${folder.x}px, ${folder.y - (isActive ? LIFT : 0)}px)` }}
                  >
                    <path
                      d={folder.d}
                      className="transition-[fill] duration-200 motion-reduce:transition-none"
                      style={{ fill: isActive ? "var(--blush)" : folder.fill }}
                    />
                  </g>
                );
              })}
            </svg>

            {folders.map((folder, i) => {
              const isActive = active === i;
              return (
                <p
                  key={items[i]}
                  aria-hidden="true"
                  className={`pointer-events-none absolute hidden font-body text-[1.55cqw] font-semibold leading-[1.25] transition-[top,color] duration-200 motion-reduce:transition-none sm:block ${
                    isActive ? "text-ink" : "text-cream"
                  }`}
                  style={{
                    left: `${(folder.textX / w) * 100}%`,
                    width: `${(folder.textW / w) * 100}%`,
                    top: `${((folder.y + TEXT_TOP_OFFSET - (isActive ? LIFT : 0)) / h) * 100}%`,
                  }}
                >
                  {items[i]}
                </p>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="myth-panel"
            aria-labelledby={`myth-tab-${active}`}
            className="mt-6 rounded-2xl border border-line bg-cream px-6 py-5 sm:sr-only"
          >
            <p className="text-[17px] leading-relaxed text-ink">
              <span className="mr-2 text-rust">✕</span>
              {items[active]}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <p className="font-display text-xl font-semibold text-ink sm:text-2xl">{content.myths.standout}</p>
          <p className="mt-2 font-display text-xl font-bold text-rust sm:text-2xl">{content.myths.reveal}</p>
        </div>
      </Container>
    </section>
  );
}
