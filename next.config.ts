import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about/",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact/",
        permanent: true,
      },
      {
        source: "/custom-software-development",
        destination: "/custom-application-development/",
        permanent: true,
      },
      {
        source: "/whatsapp-business-api",
        destination: "/inaiwazhi-whatsapp-automation/",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy/",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-of-use/",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/terms-of-use/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
