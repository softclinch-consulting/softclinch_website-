import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, getSiteUrl } from "./site";

function buildCanonicalUrl(canonicalPathOrUrl: string, siteUrl: string) {
  const url = new URL(canonicalPathOrUrl, siteUrl);
  url.search = "";
  url.hash = "";
  if (url.pathname !== "/" && !url.pathname.endsWith("/")) {
    url.pathname = `${url.pathname}/`;
  }
  return url.toString();
}

export function buildMetadata({
  title,
  description,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
  canonicalPath,
  keywords,
  image,
  noIndex,
  robots,
}: {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  canonicalPath: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  robots?: Metadata["robots"];
}): Metadata {
  const siteUrl = getSiteUrl();
  const pageTitle = title ?? DEFAULT_TITLE;
  const pageDescription = description ?? DEFAULT_DESCRIPTION;
  const canonicalUrl = buildCanonicalUrl(canonicalPath, siteUrl);
  const defaultOgImage = new URL(image || "/logo.png", siteUrl).toString();

  const resolvedOgTitle = ogTitle || pageTitle;
  const resolvedOgDesc = ogDescription || `${pageDescription} Connect with SoftClinch specialists in Chennai.`;
  const resolvedTwitterTitle = twitterTitle || pageTitle;
  const resolvedTwitterDesc = twitterDescription || pageDescription;

  return {
    metadataBase: new URL(siteUrl),
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: canonicalUrl },
    robots: robots ?? (noIndex ? { index: false, follow: false } : { index: true, follow: true }),
    openGraph: {
      title: resolvedOgTitle,
      description: resolvedOgDesc,
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
      title: resolvedTwitterTitle,
      description: resolvedTwitterDesc,
      images: [defaultOgImage],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
  };
}
