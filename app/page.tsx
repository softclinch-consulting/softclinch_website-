import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Home } from "@/components/Home";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webpageJsonLd } from "@/lib/schema";

const homeTitle = "SAP Consulting & AMS in Chennai | S/4HANA Experts - SoftClinch";
const homeDescription =
  "Streamline enterprise operations with SAP consulting, S/4HANA rollouts & 24x7 AMS in Chennai. Get SLA-backed support. Request a free assessment.";

export const metadata = buildMetadata({
  title: homeTitle,
  description: homeDescription,
  ogTitle: "SAP Consulting & 24x7 AMS Support in Chennai | SoftClinch",
  ogDescription:
    "Partner with SoftClinch for SAP S/4HANA implementation, AMS support, workflow automation & enterprise tech in Chennai. Book your consultation.",
  twitterTitle: homeTitle,
  twitterDescription:
    "Enterprise SAP S/4HANA consulting, SLA-driven AMS support & custom software systems in Chennai from SoftClinch.",
  canonicalPath: "/",
});

const homepageFaqs = [
  {
    question: "Do you provide SAP AMS support in Chennai?",
    answer:
      "Yes. SoftClinch provides SLA-driven SAP AMS support, S/4HANA migrations, ECC rollouts, and functional consulting across Chennai, India, and global locations with 24x7 coverage.",
  },
  {
    question: "What core technology services does SoftClinch offer?",
    answer:
      "We specialize in SAP consulting and AMS support, custom web and mobile application engineering, high-performance website development, custom eCommerce, and performance digital marketing.",
  },
  {
    question: "What is Inaiwazhi WhatsApp automation?",
    answer:
      "Inaiwazhi is SoftClinch's enterprise communication platform powered by the official Meta Cloud API, enabling broadcast campaigns, CRM webhook integrations, and automated customer support workflows.",
  },
  {
    question: "Can SoftClinch integrate custom applications with enterprise SAP systems?",
    answer:
      "Yes. Our engineering practice specializes in connecting custom web applications, customer portals, and WhatsApp messaging pipelines with SAP S/4HANA, ECC, and relational databases.",
  },
  {
    question: "What are your support SLAs and response times?",
    answer:
      "We deliver structured SLA frameworks with defined response windows (L1 to L4 support tiers) tailored to enterprise business criticality.",
  },
  {
    question: "Where is SoftClinch located, and how can we schedule an assessment?",
    answer:
      "Our corporate office is located at 30, 53rd St, Ashok Nagar, Chennai 600083. You can call +91 94456 79878 or submit our consultation form to book an assessment.",
  },
];

export default function Page() {
  return (
    <>
      <SeoJsonLd
        data={[
          webpageJsonLd({
            canonicalPath: "/",
            title: homeTitle,
            description: homeDescription,
          }),
          serviceJsonLd({
            canonicalPath: "/",
            name: "SAP Consulting, AMS Support & Enterprise Software Services",
            description: homeDescription,
            serviceType: "SAP S/4HANA Implementation, SAP AMS Support, Custom Software Development, Digital Marketing",
          }),
          breadcrumbJsonLd([{ name: "Home", path: "/" }]),
          faqJsonLd(homepageFaqs),
        ]}
      />
      <Home />
    </>
  );
}
