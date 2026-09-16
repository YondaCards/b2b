import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import type { SiteContent } from "@/lib/content/types";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ locale, content }: { locale: Locale; content: SiteContent }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href={`/${locale}`} className="focus-ring flex items-center gap-2">
          <Image src="/images/brand/logo-mark.png" alt="Yonda" width={28} height={28} className="rounded-full" />
          <span className="font-display text-lg font-bold tracking-tight">
            Yonda<span className="text-rust">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[15px] font-medium text-ink-soft md:flex">
          <span className="flex items-center gap-2">
            <Link className="focus-ring transition-colors hover:text-ink" href={`/${locale}#about`}>
              {content.nav.about}
            </Link>
            <a
              href={content.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="focus-ring text-ink-soft/70 transition-colors hover:text-rust"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </span>
          <Link className="focus-ring transition-colors hover:text-ink" href={`/${locale}#think`}>
            {content.nav.services}
          </Link>
          <Link className="focus-ring transition-colors hover:text-ink" href={`/${locale}#cases`}>
            {content.nav.cases}
          </Link>
          <Link className="focus-ring transition-colors hover:text-ink" href={`/${locale}#contact`}>
            {content.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher locale={locale} />
          <Link
            href={`/${locale}#contact`}
            className="focus-ring inline-block rounded-full bg-rust px-3.5 py-2 text-sm font-semibold text-cream transition-colors hover:bg-rust-dark sm:px-4"
          >
            {content.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
