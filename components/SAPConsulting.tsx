import { motion } from 'motion/react';
import { Database, Layers, Shield, Zap, BarChart3, CheckCircle2 } from 'lucide-react';

export const SAPConsulting = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-white text-sm font-semibold mb-6">
            Enterprise Excellence
          </span>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6">SAP Consulting & AMS</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Strategic guidance and operational support for the world's leading enterprise resource planning platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {[
            {
              title: "SAP Implementation",
              icon: Database,
              desc: "End-to-end implementation of SAP S/4HANA and legacy systems with a focus on business value.",
              features: ["S/4HANA Migration", "Greenfield Implementation", "Rollouts", "Customization"]
            },
            {
              title: "SAP AMS Support",
              icon: Zap,
              desc: "Application Management Services to ensure your SAP environment is stable, secure, and optimized.",
              features: ["24/7 Support", "Incident Management", "System Monitoring", "Performance Tuning"]
            },
            {
              title: "SAP System Integration",
              icon: Layers,
              desc: "Connecting SAP with third-party applications, custom platforms, and cloud services.",
              features: ["API Integration", "Middleware Setup", "Data Migration", "Hybrid Cloud"]
            },
            {
              title: "Enterprise Architecture",
              icon: Shield,
              desc: "Strategic design of your entire technology stack to align with business goals.",
              features: ["Roadmap Planning", "Tech Stack Audit", "Security Design", "Governance"]
            }
          ].map((service, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 hover:border-brand-terracotta/30 transition-all shadow-sm">
              <div className="w-14 h-14 bg-brand-terracotta rounded-2xl flex items-center justify-center mb-8 text-white">
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-brand-navy" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">Why Partner with SoftClinch for SAP?</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our consultants bring decades of combined experience in SAP environments across various industries including manufacturing, retail, and healthcare.
              </p>
              <div className="space-y-4">
                {[
                  "Certified SAP Professionals",
                  "Proven Migration Methodologies",
                  "Deep Industry Domain Knowledge",
                  "Cost-Effective AMS Models"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 font-semibold text-slate-900">
                    <CheckCircle2 className="text-brand-terracotta" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-navy rounded-3xl p-10 text-white">
              <BarChart3 size={48} className="mb-6 text-brand-terracotta" />
              <h3 className="text-2xl font-bold mb-4">Measurable Impact</h3>
              <p className="text-slate-400 mb-6">We focus on delivering tangible business outcomes, from reduced operational costs to improved system uptime.</p>
              <button className="w-full bg-white text-brand-navy py-4 rounded-xl font-bold hover:bg-slate-100 transition-all">
                Request SAP Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
