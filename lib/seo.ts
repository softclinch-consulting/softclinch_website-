import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, getSiteUrl } from "./site";

function buildCanonicalUrl(canonicalPathOrUrl: string, siteUrl: string) {
  const url = new URL(canonicalPathOrUrl, siteUrl);
  url.search = "";
  url.hash = "";
  return url.toString();
}

export function buildMetadata({
  title,
  description,
  canonicalPath,
  keywords,
  noIndex,
}: {
  title?: string;
  description?: string;
  canonicalPath: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const siteUrl = getSiteUrl();
  const pageTitle = title ?? DEFAULT_TITLE;
  const pageDescription = description ?? DEFAULT_DESCRIPTION;
  const canonicalUrl = buildCanonicalUrl(canonicalPath, siteUrl);
  const defaultOgImage = new URL("/logo.png", siteUrl).toString();

  return {
    metadataBase: new URL(siteUrl),
    title: pageTitle,
    description: pageDescription,
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
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
  };
}
