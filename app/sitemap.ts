import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const routes = [
    "/",
    "/about",
    "/services",
    "/services/ai-powered-business-systems",
    "/digital-marketing",
    "/custom-application-development",
    "/sap-ams-support",
    "/inaiwazhi-whatsapp-automation",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
  }));
}
