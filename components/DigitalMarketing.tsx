import { motion } from 'motion/react';
import { Globe, Search, Megaphone, Share2, FileText, CheckCircle2 } from 'lucide-react';

export const DigitalMarketing = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-navy/10 text-brand-navy text-sm font-semibold mb-6">
            Performance Marketing
          </span>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6">Digital Marketing, SEO & GEO Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            SoftClinch provides advanced digital marketing solutions that go beyond traditional SEO. We optimize for the future of search, including Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {[
            {
              title: "Technical SEO & Authority",
              icon: Search,
              desc: "We build the technical foundation for search success. From schema markup to site speed and crawlability, we ensure search engines understand your value.",
              features: ["Schema.org Integration", "Core Web Vitals", "Semantic Content Audit", "Authority Link Building"]
            },
            {
              title: "GEO (Generative Engine Optimization)",
              icon: Globe,
              desc: "Optimizing your brand for AI search engines like Perplexity, Gemini, and Search Generative Experience (SGE). We focus on entity recognition and factual authority.",
              features: ["Entity Optimization", "Citation Management", "LLM Visibility", "Knowledge Graph Entry"]
            },
            {
              title: "AEO (Answer Engine Optimization)",
              icon: FileText,
              desc: "Structuring your content to be the definitive answer for voice assistants and AI chat interfaces. We focus on direct, authoritative responses.",
              features: ["FAQ Schema", "Conversational Keywords", "Direct Answer Snippets", "Voice Search Prep"]
            },
            {
              title: "Performance PPC & Analytics",
              icon: Megaphone,
              desc: "High-intent ad campaigns focused on measurable ROI. We use advanced tracking to ensure every marketing dollar contributes to your bottom line.",
              features: ["Conversion Tracking", "Multi-channel Attribution", "High-intent Keyword Targeting", "Landing Page A/B Testing"]
            }
          ].map((service, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 hover:border-brand-navy/30 transition-all shadow-sm">
              <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center mb-8 text-white">
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-brand-terracotta" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-brand-navy rounded-[3rem] p-12 lg:p-20 text-white text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">Ready to boost your digital performance?</h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Our team of experts is ready to design a custom marketing strategy that delivers real business results.
          </p>
          <button className="bg-brand-terracotta text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-terracotta/90 transition-all">
            Get a Free Audit
          </button>
        </div>
      </div>
    </div>
  );
};
