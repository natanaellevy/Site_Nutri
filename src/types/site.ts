export interface SeoMetadata {
  title: string;
  description: string;
  siteUrl: string;
  locale: string;
  ogImage: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  highlights: string[];
  format: string;
}

export interface CredentialItem {
  title: string;
  value: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  context: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  brandName: string;
  professionalName: string;
  role: string;
  city: string;
  state: string;
  primaryAudience: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroBadges: string[];
  heroHighlights: BenefitItem[];
  process: ProcessStep[];
  services: ServiceItem[];
  credentials: CredentialItem[];
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
  freeResource: {
    title: string;
    description: string;
    buttonLabel: string;
  };
  finalCta: {
    title: string;
    description: string;
    buttonLabel: string;
  };
  businessNote: string;
  hours: string[];
  socialLinks: SocialLink[];
  whatsapp: {
    number: string;
    display: string;
    defaultMessage: string;
  };
  seo: SeoMetadata;
}

