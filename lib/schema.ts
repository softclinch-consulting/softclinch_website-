import { CONTACT } from "./contact";
import { SITE_NAME, getSiteUrl } from "./site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://softclinch.com/#organization",
    name: "SoftClinch Consulting Services Pvt. Ltd.",
    alternateName: "SoftClinch",
    url: "https://softclinch.com/",
    logo: "https://softclinch.com/logo.png",
    image: "https://softclinch.com/logo.png",
    email: "info@softclinch.com",
    telephone: "+91 94456 79878",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No: 30, 53rd St, opposite to Anjaneyar Temple, Ashok Nagar",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600083",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 13.0338042, longitude: 80.215171 },
    hasMap: "https://maps.google.com/?cid=7661002000908063696",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: [
      "https://www.linkedin.com/company/softclinch",
      "https://www.facebook.com/profile.php?id=61585112649434",
      "https://www.instagram.com/softclinch",
      "https://www.threads.com/@softclinch",
      "https://www.crunchbase.com/organization/softclinch-consulting-services",
    ],
  };
}

export function localBusinessJsonLd(_canonicalPath = "/contact/") {
  // Merged into single sitewide #organization entity per Schema standardization
  return organizationJsonLd();
}

export function websiteJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: SITE_NAME,
    alternateName: ["SoftClinch", "SoftClinch Consulting", "SoftClinch IT Services"],
    inLanguage: "en-IN",
    publisher: { "@id": "https://softclinch.com/#organization" },
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
    inLanguage: "en-IN",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": "https://softclinch.com/#organization" },
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
  let areas: unknown = [
    { "@type": "City", name: "Chennai" },
    { "@type": "AdministrativeArea", name: "Tamil Nadu" },
    { "@type": "Country", name: "India" },
  ];
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
    provider: { "@id": "https://softclinch.com/#organization" },
    ...(serviceType ? { serviceType } : {}),
    areaServed: areas,
    url: `${siteUrl}${canonicalPath}`,
    ...(offers ? { offers } : {}),
    ...(hasOfferCatalog ? { hasOfferCatalog } : {}),
  };
}

export function sitewideProfessionalServiceJsonLd() {
  // Merged into single sitewide #organization entity per Schema standardization
  return organizationJsonLd();
}

export function professionalServiceJsonLd({
  canonicalPath: _canonicalPath,
  name: _name,
  description: _description,
  priceRange: _priceRange = "₹₹",
  areaServed: _areaServed,
}: {
  canonicalPath?: string;
  name?: string;
  description?: string;
  priceRange?: string;
  areaServed?: string[];
} = {}) {
  // Merged into single sitewide #organization entity per Schema standardization
  return organizationJsonLd();
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

export function blogCollectionJsonLd(
  posts: Array<{ title: string; slug: string; publishedDate: string }>
) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/blog#collection`,
    url: `${siteUrl}/blog`,
    name: "SoftClinch Engineering & Technology Insights",
    description: "In-depth insights, case studies, and engineering guides on SAP, AI agents, custom software development, and digital marketing.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: `${siteUrl}/blog/${post.slug}`,
      })),
    },
  };
}

