import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import type { SiteContent } from "@/lib/content/types";
import { Container } from "./Container";
import { BrandStamp } from "./BrandStamp";

export function Hero({ locale, content }: { locale: Locale; content: SiteContent }) {
  return (
    <section className="relative overflow-hidden bg-blush pb-20 pt-14 sm:pb-28 sm:pt-20">
      <Container className="relative grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-display text-sm font-semibold tracking-wide text-rust">{content.hero.kicker}</p>

          <h1 className="mt-5 max-w-xl font-display text-[2.35rem] font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl">
            {content.hero.headline}{" "}
            <span className="text-rust">{content.hero.highlight}</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">{content.hero.body}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href={`/${locale}#contact`}
              className="focus-ring rounded-full bg-rust px-6 py-3.5 text-[15px] font-semibold text-cream shadow-[0_10px_24px_-8px_rgba(198,81,46,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-rust-dark"
            >
              {content.hero.ctaPrimary}
            </Link>
            <Link
              href={`/${locale}#think`}
              className="focus-ring rounded-full border border-ink/20 px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink/40"
            >
              {content.hero.ctaSecondary}
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {content.hero.stages.map((stage) => (
              <Link
                key={stage.href}
                href={`/${locale}${stage.href}`}
                className="focus-ring rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-rust hover:text-rust"
              >
                <span className="font-display font-bold text-rust">{stage.number}</span> {stage.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative mx-auto hidden h-[420px] w-full max-w-md sm:block">
          <BrandStamp
            size={100}
            className="absolute -right-10 -top-[4.5rem] z-10 text-rust opacity-90"
          />

          <PhotoCard
            src="/images/cases/marakanda-necklace.png"
            alt="Открытка Marakanda"
            className="left-2 top-6 h-56 w-44 -rotate-6"
          />
          <PhotoCard
            src="/images/cases/bika-card.png"
            alt="Открытка Bika Bakery"
            className="left-40 top-0 h-52 w-44 rotate-3"
          />
          <PhotoCard
            src="/images/cases/pipls-portraits.png"
            alt="Кампания PIPLS"
            className="left-16 top-52 h-48 w-60 rotate-2"
            objectPosition="left"
          />
          <PhotoCard
            src="/images/cases/qanot-sharq-cards.png"
            alt="Открытка Qanot Sharq"
            className="-right-2 top-64 h-40 w-48 -rotate-3"
          />
        </div>
      </Container>
    </section>
  );
}

function PhotoCard({
  src,
  alt,
  className,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  className: string;
  objectPosition?: string;
}) {
  return (
    <div
      className={`absolute overflow-hidden rounded-2xl border-4 border-paper bg-paper shadow-[0_18px_38px_-14px_rgba(58,36,28,0.35)] ${className}`}
    >
      <Image src={src} alt={alt} fill sizes="240px" style={{ objectFit: "cover", objectPosition }} />
    </div>
  );
}
