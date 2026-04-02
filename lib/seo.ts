import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, getSiteUrl } from "./site";

export function buildMetadata({
  title,
  description,
  canonicalPath,
  noIndex,
}: {
  title?: string;
  description?: string;
  canonicalPath: string;
  noIndex?: boolean;
}): Metadata {
  const siteUrl = getSiteUrl();
  const pageTitle = title ?? DEFAULT_TITLE;
  const pageDescription = description ?? DEFAULT_DESCRIPTION;

  return {
    metadataBase: new URL(siteUrl),
    title: pageTitle,
    description: pageDescription,
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
    },
  };
}
