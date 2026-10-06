import { CONTACT } from "./contact";
import { SITE_NAME, getSiteUrl } from "./site";

export function organizationJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: SITE_NAME,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${siteUrl}/logo.png`,
    email: CONTACT.email,
    telephone: CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressCountry: "IN",
    },
  };
}

export function websiteJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: SITE_NAME,
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function webpageJsonLd({
  canonicalPath,
  title,
  description,
  keywords,
  image,
}: {
  canonicalPath: string;
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
}) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}${canonicalPath}#webpage`,
    url: `${siteUrl}${canonicalPath}`,
    name: title,
    ...(description ? { description } : {}),
    ...(keywords && keywords.length > 0 ? { keywords: keywords.join(", ") } : {}),
    ...(image ? { primaryImageOfPage: image } : {}),
    inLanguage: "en-US",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
  };
}

export function serviceJsonLd({
  canonicalPath,
  name,
  description,
  serviceType,
  areaServed,
  offers,
  hasOfferCatalog,
}: {
  canonicalPath: string;
  name: string;
  description: string;
  serviceType?: string;
  areaServed?: string | string[] | Array<{ "@type": string; name: string }>;
  offers?: Record<string, unknown> | Array<Record<string, unknown>>;
  hasOfferCatalog?: Record<string, unknown>;
}) {
  const siteUrl = getSiteUrl();
  let areas: unknown = "IN";
  if (Array.isArray(areaServed)) {
    areas = areaServed.map((item) =>
      typeof item === "string" ? { "@type": "AdministrativeArea", name: item } : item
    );
  } else if (areaServed) {
    areas = areaServed;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${canonicalPath}#service`,
    name,
    description,
    provider: { "@id": `${siteUrl}/#organization` },
    ...(serviceType ? { serviceType } : {}),
    areaServed: areas,
    url: `${siteUrl}${canonicalPath}`,
    ...(offers ? { offers } : {}),
    ...(hasOfferCatalog ? { hasOfferCatalog } : {}),
  };
}

export function professionalServiceJsonLd({
  canonicalPath,
  name,
  description,
  priceRange = "₹₹",
  areaServed = [
    "Tamil Nadu",
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Salem",
    "Tiruppur",
    "Erode",
    "Hosur",
    "Vellore",
    "Tiruchirappalli",
  ],
}: {
  canonicalPath: string;
  name: string;
  description: string;
  priceRange?: string;
  areaServed?: string[];
}) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${siteUrl}${canonicalPath}#professionalservice`,
    name,
    description,
    url: `${siteUrl}${canonicalPath}`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange,
    image: `${siteUrl}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600083",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.0368",
      longitude: "80.2114",
    },
    areaServed: areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };
}

export function faqJsonLd(
  questions: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).toString(),
    })),
  };
}
