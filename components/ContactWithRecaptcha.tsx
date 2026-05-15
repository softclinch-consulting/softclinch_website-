"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Contact } from "@/components/Contact";

type ContactWithRecaptchaProps = {
  siteKey?: string;
};

export function ContactWithRecaptcha({ siteKey }: ContactWithRecaptchaProps) {
  if (!siteKey) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-24 text-slate-900 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold">Contact form unavailable</h1>
        <p className="mb-2 text-lg text-slate-600">
          The contact form cannot load because the Google reCAPTCHA site key is missing.
        </p>
        <p className="text-base text-slate-500">
          Please set <code>NEXT_PUBLIC_RECAPTCHA_SITE_KEY</code> in your deployment environment and redeploy.
        </p>
      </div>
    );
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      <Contact />
    </GoogleReCaptchaProvider>
  );
}
