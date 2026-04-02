import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, getSiteUrl } from "./site";

<<<<<<< HEAD
=======
function buildCanonicalUrl(canonicalPathOrUrl: string, siteUrl: string) {
  const url = new URL(canonicalPathOrUrl, siteUrl);
  url.search = "";
  url.hash = "";
  return url.toString();
}

>>>>>>> f8a5688 (SEO: canonical URLs + SEO-friendly slugs)
export function buildMetadata({
  title,
  description,
  canonicalPath,
<<<<<<< HEAD
=======
  keywords,
>>>>>>> f8a5688 (SEO: canonical URLs + SEO-friendly slugs)
  noIndex,
}: {
  title?: string;
  description?: string;
  canonicalPath: string;
<<<<<<< HEAD
=======
  keywords?: string[];
>>>>>>> f8a5688 (SEO: canonical URLs + SEO-friendly slugs)
  noIndex?: boolean;
}): Metadata {
  const siteUrl = getSiteUrl();
  const pageTitle = title ?? DEFAULT_TITLE;
  const pageDescription = description ?? DEFAULT_DESCRIPTION;
<<<<<<< HEAD
=======
  const canonicalUrl = buildCanonicalUrl(canonicalPath, siteUrl);
  const defaultOgImage = new URL("/softclinch.jpeg", siteUrl).toString();
>>>>>>> f8a5688 (SEO: canonical URLs + SEO-friendly slugs)

  return {
    metadataBase: new URL(siteUrl),
    title: pageTitle,
    description: pageDescription,
<<<<<<< HEAD
    alternates: { canonical: canonicalPath },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: `${pageTitle} | ${SITE_NAME}`,
      description: pageDescription,
      url: canonicalPath,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | ${SITE_NAME}`,
      description: pageDescription,
=======
    keywords,
    alternates: { canonical: canonicalUrl },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: defaultOgImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [defaultOgImage],
>>>>>>> f8a5688 (SEO: canonical URLs + SEO-friendly slugs)
    },
  };
}
