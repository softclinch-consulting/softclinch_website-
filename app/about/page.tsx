import { SeoJsonLd } from "@/components/SeoJsonLd";
import { About } from "@/components/About";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

const title = "About SoftClinch | Enterprise SAP & Tech Consulting";
const description =
  "Learn how SoftClinch delivers SAP consulting, custom software & automation from Ashok Nagar, Chennai. Meet our experienced leadership team.";

export const metadata = buildMetadata({
  title,
  description,
  ogTitle: "About SoftClinch Consulting Services | Chennai, India",
  ogDescription:
    "Delivering dependable enterprise technology, SAP implementations and digital growth systems since 2016. Learn more about our story.",
  twitterTitle: title,
  twitterDescription:
    "Delivering enterprise technology, SAP consulting, and custom software engineering from Chennai.",
  keywords: [
    "about softclinch consulting",
    "technology consulting company chennai",
    "software engineering partner india",
    "enterprise digital transformation experts",
    "custom software company profile",
  ],
  canonicalPath: "/about",
});

export default function AboutPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath: "/about",
            title,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ]),
        ]}
      />
      <About />
    </>
  );
}
