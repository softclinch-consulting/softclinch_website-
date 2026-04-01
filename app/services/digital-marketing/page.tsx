import { DigitalMarketing } from '@/components/DigitalMarketing';
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

const canonicalPath = "/services/digital-marketing";
const title = "Digital Marketing Services";
const description =
  "Data-driven digital marketing for predictable growth: SEO, PPC, content, analytics, funnels, and automation.";

export const metadata = buildMetadata({
  title,
  description,
  canonicalPath,
});

const faq = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "Most sites see measurable improvements within 8–12 weeks, with compounding gains over 3–6 months based on competition and content velocity.",
  },
  {
    question: "Do you manage paid ads (Google/Meta)?",
    answer:
      "Yes. We manage campaign setup, creative testing, conversion tracking, landing page optimization, and ongoing budget allocation.",
  },
  {
    question: "What reporting do you provide?",
    answer:
      "We provide KPI dashboards and monthly reports covering leads, CAC/ROAS, rankings, traffic quality, and conversion performance.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath,
            title: `${title} | ${SITE_NAME}`,
          }),
          serviceJsonLd({ canonicalPath, name: title, description }),
          faqJsonLd(faq),
        ]}
      />
      <DigitalMarketing />
    </>
  );
}
