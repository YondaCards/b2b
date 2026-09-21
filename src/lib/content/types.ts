export type CaseImage = {
  src: string;
  alt: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  oneLiner: string;
  stat?: string;
  heroImage: CaseImage;
  size: "wide" | "tall" | "square";
  task: string;
  sections: { heading: string; body: string }[];
  gallery: CaseImage[];
  testimonial?: Testimonial;
};

export type PackageTier = {
  name: string;
  subtitle: string;
  description?: string;
  priceFrom: string;
  note?: string;
};

export type PackageContent = {
  number: string;
  label: string;
  tagline: string;
  includedHeading: string;
  includedItems: string[];
  tiers: PackageTier[];
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    services: string;
    cases: string;
    contact: string;
    cta: string;
  };
  instagramUrl: string;
  about: {
    heading: string;
    paragraphs: string[];
    instagramCta: string;
  };
  hero: {
    kicker: string;
    headline: string;
    highlight: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stages: { number: string; label: string; href: string }[];
  };
  myths: {
    heading: string;
    intro: string;
    items: string[];
    standout: string;
    reveal: string;
  };
  reveal: {
    heading: string;
    body: string;
    philosophy: string;
  };
  packages: {
    think: PackageContent;
    design: PackageContent;
    make: PackageContent;
  };
  casesSection: {
    heading: string;
    body: string;
    viewCase: string;
    viewAll: string;
  };
  cases: CaseStudy[];
  testimonialsSection: {
    heading: string;
  };
  finalCta: {
    heading: string;
    body: string;
    ctaTelegram: string;
  };
  footer: {
    tagline: string;
    instagramLabel: string;
    telegramLabel: string;
    rights: string;
    b2cLine: { text: string; linkLabel: string; href: string };
  };
  caseDetail: {
    back: string;
    task: string;
    wantSame: string;
    wantSameBody: string;
    ctaButton: string;
  };
};
