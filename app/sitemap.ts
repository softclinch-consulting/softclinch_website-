import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const routes = [
    "/",
    "/about",
    "/services",
    "/services/digital-marketing",
    "/services/sap-consulting",
    "/services/custom-development",
    "/whatsapp-automation",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
  }));
}

