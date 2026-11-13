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
  const cleanPath = path.replace(/^\/+|\/+$/g, "");
  const normalizedPath = cleanPath === "" ? "/" : `/${cleanPath}/`;
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

const routeLastModifiedMap: Record<string, string> = {
  "/": "2026-04-10",
  "/about": "2026-04-05",
  "/contact": "2026-04-08",
  "/services": "2026-04-05",
  "/website-development": "2026-04-10",
  "/sap-ams-support": "2026-04-11",
  "/services/sap-consulting": "2026-04-05",
  "/custom-application-development": "2026-04-02",
  "/services/ai-powered-business-systems": "2026-04-02",
  "/services/enterprise-software": "2026-04-02",
  "/digital-marketing": "2026-04-06",
  "/inaiwazhi-whatsapp-automation": "2026-04-09",
  "/custom-commerce-development": "2026-03-28",
  "/commerce-enablement": "2026-03-28",
  "/softclinch-ai": "2026-03-20",
  "/case-studies": "2026-03-25",
  "/blog": "2026-04-10",
  "/privacy-policy": "2026-01-15",
  "/terms-of-use": "2026-01-15",
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();

  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/website-development",
    "/sap-ams-support",
    "/services/sap-consulting",
    "/custom-application-development",
    "/services/ai-powered-business-systems",
    "/services/enterprise-software",
    "/digital-marketing",
    "/inaiwazhi-whatsapp-automation",
    "/custom-commerce-development",
    "/commerce-enablement",
    "/softclinch-ai",
    "/case-studies",
    "/blog",
    "/privacy-policy",
    "/terms-of-use",
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
    let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly";
    let priority = 0.8;

    if (route === "/") {
      changeFrequency = "weekly";
      priority = 1.0;
    } else if (
      route === "/sap-ams-support" ||
      route === "/website-development" ||
      route === "/custom-application-development" ||
      route === "/digital-marketing" ||
      route === "/inaiwazhi-whatsapp-automation" ||
      route === "/contact"
    ) {
      changeFrequency = "weekly";
      priority = 0.95;
    } else if (route.startsWith("/services")) {
      changeFrequency = "weekly";
      priority = 0.9;
    } else if (route === "/blog" || route === "/case-studies") {
      changeFrequency = "daily";
      priority = 0.85;
    } else if (route === "/privacy-policy" || route === "/terms-of-use") {
      changeFrequency = "yearly";
      priority = 0.3;
    }

    const stableDateStr = routeLastModifiedMap[route] || "2026-04-01";
    const lastModified = new Date(stableDateStr);

    addEntry(route, lastModified, changeFrequency, priority);
  });

  const blogEntries = await getPublishedBlogPosts();
  blogEntries.forEach((post) => {
    if (!post.slug || post.isDraft || post.isPrivate) {
      return;
    }

    addEntry(
      `/blog/${post.slug}`,
      post.publishedAt ? new Date(post.publishedAt) : new Date("2026-04-01"),
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
      caseStudy.publishedAt ? new Date(caseStudy.publishedAt) : new Date("2026-04-01"),
      "monthly",
      0.75,
    );
  });

  return entries;
}
