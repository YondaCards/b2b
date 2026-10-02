import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { getContent } from "@/lib/content";
import { Container } from "@/components/Container";
import { withBasePath } from "@/lib/basePath";

export function generateStaticParams() {
  return locales.flatMap((locale) => {
    const content = getContent(locale);
    return content.cases.map((c) => ({ locale, slug: c.slug }));
  });
}

function resolve(rawLocale: string, slug: string) {
  if (!isLocale(rawLocale)) return null;
  const locale: Locale = rawLocale;
  const content = getContent(locale);
  const caseStudy = content.cases.find((c) => c.slug === slug);
  if (!caseStudy) return null;
  return { locale, content, caseStudy };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const resolved = resolve(locale, slug);
  if (!resolved) return {};
  return {
    title: `${resolved.caseStudy.client} — ${resolved.content.meta.title}`,
    description: resolved.caseStudy.oneLiner,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const resolved = resolve(rawLocale, slug);
  if (!resolved) notFound();
  const { locale, content, caseStudy } = resolved;

  return (
    <article>
      <section className="relative overflow-hidden bg-blush pb-14 pt-10 sm:pb-20 sm:pt-14">
        <Container>
          <Link
            href={`/${locale}#cases`}
            className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-rust"
          >
            ← {content.caseDetail.back}
          </Link>

          <p className="mt-6 font-display text-sm font-semibold tracking-wide text-rust">{caseStudy.client}</p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            {caseStudy.title}
          </h1>
          {caseStudy.stat && (
            <p className="mt-4 inline-block rounded-full bg-rust/10 px-4 py-1.5 text-sm font-semibold text-rust">
              {caseStudy.stat}
            </p>
          )}
        </Container>

        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
          <Image
            src={withBasePath(caseStudy.heroImage.src)}
            alt={caseStudy.heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20">
        <Container className="max-w-3xl">
          <div className="rounded-2xl border border-line bg-cream/60 p-6">
            <p className="font-display text-sm font-bold text-rust">{content.caseDetail.task}</p>
            <p className="mt-2 text-[17px] leading-relaxed text-ink">{caseStudy.task}</p>
          </div>

          <div className="mt-12 space-y-10">
            {caseStudy.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-xl font-bold text-ink">{s.heading}</h2>
                <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">{s.body}</p>
              </div>
            ))}
          </div>

          {caseStudy.gallery.length > 1 && (
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {caseStudy.gallery.map((img) => (
                <div key={img.src} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image src={withBasePath(img.src)} alt={img.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
              ))}
            </div>
          )}

          {caseStudy.testimonial && (
            <figure className="mt-12 rounded-2xl border border-line bg-cream p-7">
              <blockquote className="text-[17px] leading-relaxed text-ink-soft">
                “{caseStudy.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-display font-bold text-ink">{caseStudy.testimonial.name}</span>
                <span className="text-ink-soft">, {caseStudy.testimonial.role}</span>
              </figcaption>
            </figure>
          )}
        </Container>
      </section>

      <section className="bg-rust py-16 text-cream sm:py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{content.caseDetail.wantSame}</h2>
          <p className="mt-3 text-[15px] text-cream/80">{content.caseDetail.wantSameBody}</p>
          <Link
            href={`/${locale}#contact`}
            className="focus-ring mt-7 inline-block rounded-full bg-cream px-6 py-3.5 text-[15px] font-semibold text-rust transition-transform hover:-translate-y-0.5"
          >
            {content.caseDetail.ctaButton}
          </Link>
        </Container>
      </section>
    </article>
  );
}
