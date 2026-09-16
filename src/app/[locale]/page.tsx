import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { getContent } from "@/lib/content";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Myths } from "@/components/Myths";
import { Reveal } from "@/components/Reveal";
import { PackageSection } from "@/components/PackageSection";
import { CasesPreview } from "@/components/CasesPreview";
import { Testimonials } from "@/components/Testimonials";
import { FinalCta } from "@/components/FinalCta";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const content = getContent(locale);

  return (
    <>
      <Hero locale={locale} content={content} />
      <About content={content} />
      <Myths content={content} />
      <Reveal content={content} />
      <PackageSection id="think" pkg={content.packages.think} />
      <PackageSection id="design" pkg={content.packages.design} />
      <PackageSection id="make" pkg={content.packages.make} />
      <CasesPreview locale={locale} content={content} />
      <Testimonials content={content} />
      <FinalCta content={content} />
    </>
  );
}
