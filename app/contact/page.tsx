import { SeoJsonLd } from "@/components/SeoJsonLd";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Contact } from "@/components/Contact";
import { buildMetadata } from "@/lib/seo";
import { webpageJsonLd } from "@/lib/schema";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact SoftClinch | Get in Touch for Business Solutions",
  description: "Contact SoftClinch for digital marketing, software development and automation services.",
  keywords: [
    "contact SoftClinch",
    "digital marketing consultation",
    "software development company contact",
  ],
  canonicalPath: "/contact",
});

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function ContactPage() {
  const siteKey = RECAPTCHA_SITE_KEY?.trim();

  return (
    <>
      <SeoJsonLd
        data={webpageJsonLd({
          canonicalPath: "/contact",
          title: `Contact | ${SITE_NAME}`,
        })}
      />
      {siteKey ? (
        <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
          <Contact />
        </GoogleReCaptchaProvider>
      ) : (
        <div className="mx-auto max-w-4xl px-4 py-24 text-slate-900 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold">Contact form unavailable</h1>
          <p className="mb-2 text-lg text-slate-600">
            The contact form cannot load because the Google reCAPTCHA site key is missing.
          </p>
          <p className="text-base text-slate-500">
            Please set `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` in your deployment environment and redeploy.
          </p>
        </div>
      )}
    </>
  );
}
