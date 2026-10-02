import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import type { SiteContent, CaseStudy } from "@/lib/content/types";
import { Container } from "./Container";
import { withBasePath } from "@/lib/basePath";

const sizeClasses: Record<CaseStudy["size"], string> = {
  wide: "aspect-[16/10] sm:aspect-auto sm:col-span-4 sm:h-full",
  tall: "aspect-[4/6] sm:aspect-auto sm:col-span-2 sm:row-span-2 sm:h-full",
  square: "aspect-[4/5] sm:aspect-auto sm:col-span-2 sm:h-full",
};

export function CasesPreview({ locale, content }: { locale: Locale; content: SiteContent }) {
  return (
    <section id="cases" className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {content.casesSection.heading}
            </h2>
            <p className="mt-3 max-w-md text-[15px] text-ink-soft">{content.casesSection.body}</p>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:auto-rows-[190px] sm:grid-cols-6 sm:[grid-auto-flow:dense]">
          {content.cases.map((c) => (
            <Link
              key={c.slug}
              href={`/${locale}/cases/${c.slug}`}
              className={`focus-ring group relative block overflow-hidden rounded-3xl bg-ink ${sizeClasses[c.size]}`}
            >
              <Image
                src={withBasePath(c.heroImage.src)}
                alt={c.heroImage.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-sm font-semibold text-cream/80">{c.client}</p>
                <p className="mt-1 text-[15px] font-medium leading-snug text-cream">{c.oneLiner}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cream underline decoration-cream/40 underline-offset-4 group-hover:decoration-cream">
                  {content.casesSection.viewCase}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
