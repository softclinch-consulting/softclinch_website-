import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { blogPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const routes = [
    "/",
    "/about",
    "/services",
    "/services/ai-powered-business-systems",
    "/commerce-enablement",
    "/digital-marketing",
    "/custom-application-development",
    "/sap-ams-support",
    "/inaiwazhi-whatsapp-automation",
    "/contact",
    "/blog",
    "/privacy-policy",
    "/terms-of-use",
  ];

  const staticUrls = routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
  }));

  return [...staticUrls, ...blogUrls];
}
