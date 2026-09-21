import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import type { SiteContent } from "@/lib/content/types";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { LogoHorizontal } from "./LogoHorizontal";

export function Header({ locale, content }: { locale: Locale; content: SiteContent }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href={`/${locale}`} aria-label="Yonda" className="focus-ring flex items-center text-ink">
          <LogoHorizontal className="h-5 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 text-[15px] font-medium text-ink-soft md:flex">
          <Link className="focus-ring transition-colors hover:text-ink" href={`/${locale}#about`}>
            {content.nav.about}
          </Link>
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
