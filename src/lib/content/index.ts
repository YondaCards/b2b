import type { Locale } from "@/lib/i18n/locales";
import type { SiteContent } from "./types";
import { ru } from "./ru";
import { uz } from "./uz";

const dictionaries: Record<Locale, SiteContent> = { ru, uz };

export function getContent(locale: Locale): SiteContent {
  return dictionaries[locale];
}

export type { SiteContent, CaseStudy } from "./types";
