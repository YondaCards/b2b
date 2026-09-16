import type { Metadata } from "next";
import { Unbounded, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { getContent } from "@/lib/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const display = Unbounded({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getContent(locale);
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const content = getContent(locale);

  return (
    <html lang={locale} className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        <Header locale={locale} content={content} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} content={content} />
      </body>
    </html>
  );
}
