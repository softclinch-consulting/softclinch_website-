import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Home } from "@/components/Home";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "SoftClinch | Digital Marketing, Custom Software & SAP AMS Services",
  description:
    "SoftClinch provides digital marketing, custom application development, SAP AMS support and AI-powered WhatsApp automation solutions to help businesses scale faster.",
  keywords: [
    "digital marketing company",
    "custom software development",
    "SAP AMS services",
    "WhatsApp automation software",
    "enterprise technology solutions",
  ],
  canonicalPath: "/",
});

export default function Page() {
  return (
    <>
      <SeoJsonLd
        data={webpageJsonLd({
          canonicalPath: "/",
          title: "SoftClinch | Digital Marketing, Custom Software & SAP AMS Services",
        })}
      />
      <Home />
    </>
  );
}
