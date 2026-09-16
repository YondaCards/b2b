"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/locales";

const labels: Record<Locale, string> = { ru: "RU", uz: "UZ" };

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  function hrefFor(target: Locale) {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/") || "/";
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-ink/15 p-1 text-sm">
      {locales.map((l) => (
        <Link
          key={l}
          href={hrefFor(l)}
          className={`focus-ring rounded-full px-2.5 py-1 font-medium transition-colors ${
            l === locale ? "bg-rust text-cream" : "text-ink-soft hover:text-ink"
          }`}
          aria-current={l === locale ? "true" : undefined}
        >
          {labels[l]}
        </Link>
      ))}
    </div>
  );
}
