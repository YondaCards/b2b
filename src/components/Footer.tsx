import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import type { SiteContent } from "@/lib/content/types";
import { BrandStamp } from "./BrandStamp";

export function Footer({ locale, content }: { locale: Locale; content: SiteContent }) {
  return (
    <footer className="border-t border-line bg-rust text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <Link href={`/${locale}`} className="focus-ring font-display text-xl font-bold">
            Yonda<span className="text-cream/70">.</span>
          </Link>
          <p className="mt-3 text-[15px] leading-relaxed text-cream/80">{content.footer.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[15px]">
          <a
            href="https://instagram.com/yondacards"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring font-medium underline decoration-cream/40 underline-offset-4 hover:decoration-cream"
          >
            {content.footer.instagramLabel} — @yondacards
          </a>
          <a
            href="https://t.me/vnetta"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring font-medium underline decoration-cream/40 underline-offset-4 hover:decoration-cream"
          >
            {content.footer.telegramLabel} — +998 90 951 00 69
          </a>
        </div>

        <BrandStamp size={92} className="hidden shrink-0 opacity-90 md:block" />
      </div>
      <div className="border-t border-cream/15 px-5 py-4 text-center text-xs text-cream/60 sm:px-8">
        © {new Date().getFullYear()} {content.footer.rights}
      </div>
    </footer>
  );
}
