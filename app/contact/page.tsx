import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Contact } from "@/components/Contact";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, webpageJsonLd } from "@/lib/schema";

const title = "Contact SoftClinch Chennai | Book a Free Consultation";
const description =
  "Visit our Ashok Nagar, Chennai office or call +91 94456 79878 for SAP consulting, AMS support & software engineering. Get a response in 24 hrs.";

export const metadata = buildMetadata({
  title,
  description,
  ogTitle: "Contact SoftClinch | Ashok Nagar, Chennai Office",
  ogDescription:
    "Reach our technology and SAP consulting directors for project inquiries, SLA support agreements, or platform demos. Send a message.",
  twitterTitle: title,
  twitterDescription:
    "Contact SoftClinch in Ashok Nagar, Chennai for SAP consulting, AMS support, and custom software.",
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
