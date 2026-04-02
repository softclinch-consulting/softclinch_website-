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
<<<<<<< HEAD
    "/services/digital-marketing",
    "/services/sap-consulting",
    "/services/custom-development",
    "/whatsapp-automation",
=======
    "/digital-marketing",
    "/custom-application-development",
    "/sap-ams-support",
    "/inaiwazhi-whatsapp-automation",
>>>>>>> f8a5688 (SEO: canonical URLs + SEO-friendly slugs)
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
  }));
}
