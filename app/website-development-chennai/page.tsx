import { SeoJsonLd } from "@/components/SeoJsonLd";
import { WebsiteDevelopmentChennai } from "@/components/WebsiteDevelopmentChennai";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webpageJsonLd,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { chennaiWebsiteFaq } from "@/lib/faqs";

const canonicalPath = "/website-development-chennai/";
const title = "Website Development Company in Chennai | SoftClinch";
const description =
  "Top website development company in Chennai. We craft fast, SEO-ready business websites & WooCommerce ecommerce stores for growing businesses across India.";

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
});

export default function WebsiteDevelopmentChennaiPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath,
            title,
            description,
          }),
          serviceJsonLd({
            canonicalPath,
            name: "Website Development Company in Chennai",
            description,
            serviceType:
              "Website Development, WooCommerce Development, Ecommerce Web Design, Landing Page Design, Website Redesign",
            areaServed: [
              "Chennai",
              "Tamil Nadu",
              "Coimbatore",
              "Madurai",
              "Bangalore",
              "India",
            ],
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Website Development Chennai", path: canonicalPath },
          ]),
          faqJsonLd(chennaiWebsiteFaq),
        ]}
      />
      <WebsiteDevelopmentChennai />
    </>
  );
}
