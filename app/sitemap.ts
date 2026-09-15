import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = 3600;

interface SitemapContentItem {
  slug: string;
  publishedAt?: string | Date;
  isDraft?: boolean;
  isPrivate?: boolean;
}

function toCanonicalUrl(path: string, baseUrl: string): string {
  const normalizedBase = baseUrl.replace(/\/+$/, "");
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${normalizedBase}${normalizedPath}`;
}

function isIndexablePath(path: string): boolean {
  const normalizedPath = path.replace(/\/+$/, "") || "/";
  const forbiddenPrefixes = [
    "/admin",
    "/dashboard",
    "/api",
    "/login",
    "/register",
    "/preview",
    "/draft",
  ];
  const forbiddenPaths = ["/404", "/500", "/_next", "/_static"];

  if (forbiddenPaths.includes(normalizedPath)) {
    return false;
  }

  return !forbiddenPrefixes.some((prefix) => normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`));
}

function buildEntry(
  path: string,
  baseUrl: string,
  lastModified: Date,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: toCanonicalUrl(path, baseUrl),
    lastModified,
    changeFrequency,
    priority,
  };
}

async function getPublishedBlogPosts(): Promise<SitemapContentItem[]> {
  // TODO: Replace this placeholder with a real CMS or database query.
  return blogPosts
    .filter((post) => Boolean(post.publishedDate))
    .map((post) => ({
      slug: post.slug,
      publishedAt: post.publishedDate,
      isDraft: false,
      isPrivate: false,
    }));
}

async function getPublishedCaseStudies(): Promise<SitemapContentItem[]> {
  // TODO: Replace this placeholder with a real CMS or database query.
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticRoutes = [
    "/",
    "/about-us",
    "/services",
    "/contact-us",
    "/portfolio",
    "/case-studies",
    "/careers",
    "/faqs",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
    "/web-development",
    "/wordpress-development",
    "/shopify-development",
    "/ecommerce-development",
    "/commerce-enablement",
    "/business-communication",
    "/mobile-app-development",
    "/ui-ux-design",
    "/digital-marketing",
    "/seo-services",
    "/google-ads-management",
    "/meta-ads-management",
    "/social-media-marketing",
    "/branding",
    "/custom-software-development",
    "/whatsapp-business-api",
    "/whatsapp-automation",
    "/crm-integration",
    "/ai-automation",
    "/industries/ecommerce",
    "/industries/retail",
    "/industries/education",
    "/industries/healthcare",
    "/industries/manufacturing",
    "/industries/real-estate",
    "/industries/logistics",
    "/industries/finance",
  ];

  const entries: MetadataRoute.Sitemap = [];
  const seenUrls = new Set<string>();

  const addEntry = (path: string, lastModified: Date, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"], priority: number) => {
    if (!isIndexablePath(path)) {
      return;
    }

    const url = toCanonicalUrl(path, siteUrl);
    if (seenUrls.has(url)) {
      return;
    }

    seenUrls.add(url);
    entries.push(buildEntry(path, siteUrl, lastModified, changeFrequency, priority));
  };

  staticRoutes.forEach((route) => {
    let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly";
    let priority = 0.7;

    if (route === "/") {
      changeFrequency = "weekly";
      priority = 1;
    } else if (route.startsWith("/services") || route.startsWith("/industries")) {
      changeFrequency = "monthly";
      priority = 0.8;
    } else if (route.startsWith("/blog") || route === "/case-studies") {
      changeFrequency = "weekly";
      priority = 0.8;
    }

    addEntry(route, now, changeFrequency, priority);
  });

  const blogEntries = await getPublishedBlogPosts();
  blogEntries.forEach((post) => {
    if (!post.slug || post.isDraft || post.isPrivate) {
      return;
    }

    addEntry(
      `/blog/${post.slug}`,
      post.publishedAt ? new Date(post.publishedAt) : now,
      "weekly",
      0.7,
    );
  });

  const caseStudyEntries = await getPublishedCaseStudies();
  caseStudyEntries.forEach((caseStudy) => {
    if (!caseStudy.slug || caseStudy.isDraft || caseStudy.isPrivate) {
      return;
    }

    addEntry(
      `/case-studies/${caseStudy.slug}`,
      caseStudy.publishedAt ? new Date(caseStudy.publishedAt) : now,
      "monthly",
      0.75,
    );
  });

  return entries;
}
