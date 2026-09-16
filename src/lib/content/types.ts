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

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    cases: string;
    process: string;
    contact: string;
    cta: string;
  };
  hero: {
    kicker: string;
    headline: string;
    highlight: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
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
    quote: string;
    quoteAttribution: string;
    philosophy: string;
  };
  process3: {
    heading: string;
    steps: { number: string; title: string; body: string }[];
  };
  services: {
    heading: string;
    items: { title: string; body: string }[];
  };
  servicesExtra: {
    heading: string;
    items: string[];
  };
  casesSection: {
    heading: string;
    body: string;
    viewCase: string;
    viewAll: string;
  };
  cases: CaseStudy[];
  process5: {
    heading: string;
    steps: { title: string; body: string }[];
  };
  testimonialsSection: {
    heading: string;
  };
  finalCta: {
    heading: string;
    body: string;
    offer: string;
    ctaTelegram: string;
    ctaInstagram: string;
  };
  footer: {
    tagline: string;
    instagramLabel: string;
    telegramLabel: string;
    rights: string;
  };
  caseDetail: {
    back: string;
    task: string;
    wantSame: string;
    wantSameBody: string;
    ctaButton: string;
  };
};
