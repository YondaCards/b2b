import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { getContent } from "@/lib/content";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { Myths } from "@/components/Myths";
import { Reveal } from "@/components/Reveal";
import { Process3 } from "@/components/Process3";
import { Services } from "@/components/Services";
import { ServicesExtra } from "@/components/ServicesExtra";
import { CasesPreview } from "@/components/CasesPreview";
import { Process5 } from "@/components/Process5";
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
      <Myths content={content} />
      <Reveal content={content} />
      <Process3 content={content} />
      <Services content={content} />
      <ServicesExtra content={content} />
      <CasesPreview locale={locale} content={content} />
      <Process5 content={content} />
      <Testimonials content={content} />
      <FinalCta content={content} />
    </>
  );
}
