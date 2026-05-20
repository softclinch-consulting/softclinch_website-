"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useEffect, useState } from "react";
import { CONTACT } from "@/lib/contact";
import {
  validateContactFormData,
  type ContactFormData,
  type ContactValidationErrors,
} from "@/lib/contact-form";

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

type ContactApiResponse = {
  success?: boolean;
  error?: string;
  fieldErrors?: ContactValidationErrors;
};

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<ContactValidationErrors>({});
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [website, setWebsite] = useState("");
  const [formStartedAt, setFormStartedAt] = useState<number>(Date.now());

  useEffect(() => {
    setFormStartedAt(Date.now());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setFieldErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validation = validateContactFormData(formData);
    if (!validation.isValid) {
      setFieldErrors(validation.errors);
      return;
    }

    if (!captchaToken) {
      setError("Please complete the reCAPTCHA checkbox before submitting.");
      return;
    }

    setIsSubmitting(true);
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...validation.data,
          captchaToken,
          website,
          formStartedAt,
        }),
      });

      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? ((await response.json()) as ContactApiResponse)
        : {
            error: `Unexpected server response (${response.status}).`,
          };

      if (!response.ok) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }

        throw new Error(data.error || "Unable to submit your request right now.");
      }

      setSubmitted(true);
      setFormData(INITIAL_FORM_DATA);
      setCaptchaToken("");
      setWebsite("");
      setFormStartedAt(Date.now());
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit your request right now."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName =
    "w-full rounded-2xl border px-4 py-3 text-slate-900 transition focus:outline-none focus:ring-2 focus:ring-white/70";

  const getInputStateClassName = (fieldError?: string) =>
    fieldError
      ? "border-red-300 bg-red-50/90 focus:border-red-400"
      : "border-white/15 bg-white focus:border-white/50";

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <h1 className="mb-8 text-5xl font-display font-bold text-slate-900 lg:text-6xl">
              Let&apos;s Build Your Next Digital Platform
            </h1>
            <p className="mb-12 text-xl leading-relaxed text-slate-600">
              Ready to scale your enterprise communication or modernize your
              digital infrastructure? Get in touch with our engineering team.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-900">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">{CONTACT.email}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-900">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Us</h4>
                  <p className="text-slate-600">{CONTACT.phone}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-900">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Visit Us</h4>
                  <p className="text-slate-600">{CONTACT.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 bg-brand-navy p-8 shadow-xl lg:p-12">
            {submitted ? (
              <div className="py-20 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Send size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-display font-bold text-white">
                  Request Received
                </h3>
                <p className="text-slate-200">
                  Thank you for contacting SoftClinch. Your details were sent
                  successfully, and a confirmation email should reach your inbox
                  shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-semibold text-white underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold text-white"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`${inputClassName} ${getInputStateClassName(fieldErrors.name)}`}
                      placeholder="John Doe"
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={
                        fieldErrors.name ? "contact-name-error" : undefined
                      }
                    />
                    {fieldErrors.name ? (
                      <p
                        id="contact-name-error"
                        className="mt-2 text-sm text-red-200"
                      >
                        {fieldErrors.name}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="mb-2 block text-sm font-semibold text-white"
                    >
                      Company
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className={`${inputClassName} ${getInputStateClassName(fieldErrors.company)}`}
                      placeholder="Enterprise Inc."
                      aria-invalid={Boolean(fieldErrors.company)}
                      aria-describedby={
                        fieldErrors.company ? "contact-company-error" : undefined
                      }
                    />
                    {fieldErrors.company ? (
                      <p
                        id="contact-company-error"
                        className="mt-2 text-sm text-red-200"
                      >
                        {fieldErrors.company}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold text-white"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`${inputClassName} ${getInputStateClassName(fieldErrors.email)}`}
                      placeholder="john@company.com"
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={
                        fieldErrors.email ? "contact-email-error" : undefined
                      }
                    />
                    {fieldErrors.email ? (
                      <p
                        id="contact-email-error"
                        className="mt-2 text-sm text-red-200"
                      >
                        {fieldErrors.email}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-sm font-semibold text-white"
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${inputClassName} ${getInputStateClassName(fieldErrors.phone)}`}
                      placeholder="+91 98765 43210"
                      aria-invalid={Boolean(fieldErrors.phone)}
                      aria-describedby={
                        fieldErrors.phone ? "contact-phone-error" : undefined
                      }
                    />
                    {fieldErrors.phone ? (
                      <p
                        id="contact-phone-error"
                        className="mt-2 text-sm text-red-200"
                      >
                        {fieldErrors.phone}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-service"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Service
                  </label>
                  <input
                    id="contact-service"
                    name="service"
                    type="text"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClassName} ${getInputStateClassName(fieldErrors.service)}`}
                    placeholder="SEO, SAP support, automation, custom app..."
                    aria-invalid={Boolean(fieldErrors.service)}
                    aria-describedby={
                      fieldErrors.service ? "contact-service-error" : undefined
                    }
                  />
                  {fieldErrors.service ? (
                    <p
                      id="contact-service-error"
                      className="mt-2 text-sm text-red-200"
                    >
                      {fieldErrors.service}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClassName} resize-y ${getInputStateClassName(fieldErrors.message)}`}
                    placeholder="Tell us about your project..."
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={
                      fieldErrors.message ? "contact-message-error" : undefined
                    }
                  />
                  {fieldErrors.message ? (
                    <p
                      id="contact-message-error"
                      className="mt-2 text-sm text-red-200"
                    >
                      {fieldErrors.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={(token) => setCaptchaToken(token || "")}
                  />
                </div>
                {error ? (
                  <div className="rounded-2xl border border-red-300/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                    {error}
                  </div>
                ) : null}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-4 text-lg font-bold text-brand-navy transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
