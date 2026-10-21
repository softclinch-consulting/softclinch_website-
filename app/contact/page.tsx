import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Contact } from "@/components/Contact";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, localBusinessJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

const title = "Contact SoftClinch | Book a Free Tech Consultation";
const description =
  "Have a project requirement? Contact our technology consultants in Chennai for custom software, SAP consulting, WhatsApp automation & marketing solutions.";

export const metadata = buildMetadata({
  title,
  description,
  keywords: [
    "contact softclinch consulting",
    "hire software development company chennai",
    "schedule sap consulting call",
    "request custom software quote",
    "whatsapp automation consultation",
    "digital marketing consultation",
  ],
  canonicalPath: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath: "/contact",
            title,
          }),
          localBusinessJsonLd("/contact"),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <Contact />
    </>
  );
}
