import { motion } from 'motion/react';
import { Cpu, Server, Smartphone, Layers, Code2, CheckCircle2 } from 'lucide-react';

export const CustomAppDev = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-terracotta/10 text-brand-terracotta text-sm font-semibold mb-6">
            Engineering Excellence
          </span>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6">Custom Application Development</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            We build scalable, high-performance software solutions tailored to your unique business requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "SaaS Platforms",
              icon: Server,
              desc: "Multi-tenant cloud applications designed for high availability and global scale.",
              features: ["Microservices", "Cloud Native", "Auto-scaling", "Secure Auth"]
            },
            {
              title: "Web Applications",
              icon: Code2,
              desc: "Rich, interactive web experiences built with React, Node.js, and modern stacks.",
              features: ["Real-time Sync", "Responsive Design", "PWA Support", "High Performance"]
            },
            {
              title: "Mobile Apps",
              icon: Smartphone,
              desc: "Native and cross-platform mobile solutions for iOS and Android devices.",
              features: ["React Native", "Offline Support", "Push Notifications", "App Store Management"]
            }
          ].map((service, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 text-white">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-brand-navy text-white p-12 rounded-[2.5rem]">
            <h2 className="text-3xl font-display font-bold mb-6">Our Tech Stack</h2>
            <p className="text-slate-400 mb-8">We use modern, battle-tested technologies to ensure your application is fast, secure, and maintainable.</p>
            <div className="grid grid-cols-2 gap-4">
              {['React / Next.js', 'Node.js / Express', 'TypeScript', 'PostgreSQL', 'AWS / Azure', 'Docker / K8s'].map((tech) => (
                <div key={tech} className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div className="p-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Workflow Automation</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Beyond standalone apps, we specialize in API-driven workflow automation that connects your disparate systems into a cohesive digital ecosystem.
            </p>
            <button className="bg-brand-terracotta text-white px-8 py-4 rounded-full font-bold hover:bg-brand-terracotta/90 transition-all">
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
