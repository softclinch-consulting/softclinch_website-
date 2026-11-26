import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";

type Props = {
  params: Promise<{ slug: string }>;
};

const METADATA_CONFIGS: Record<string, { title: string; description: string }> = {
  "sap-ams-support": {
    title: "SAP AMS Support Services in Chennai & India | SoftClinch",
    description: "Enterprise SAP Application Management Services with 24/7 proactive monitoring, guaranteed SLAs, and dedicated technical consultants.",
  },
  "sap-s4hana-migration": {
    title: "SAP S/4HANA Migration & Implementation Services | SoftClinch",
    description: "End-to-end S/4HANA migration with zero downtime cutover, custom ABAP remediation, and certified SAP architects.",
  },
};

export function generateStaticParams() {
  return [
    { slug: "sap-ams-support" },
    { slug: "sap-s4hana-migration" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const config = METADATA_CONFIGS[slug] || {
    title: "Enterprise SAP Consulting & Support | SoftClinch",
    description: "Enterprise SAP consulting and support services in Chennai.",
  };

  return {
    title: config.title,
    description: config.description,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <LandingPageTemplate slug={slug} />;
}
