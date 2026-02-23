import { motion } from 'motion/react';
import Link from 'next/link';
import { Globe, Cpu, Database, ChevronRight } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, path }: any) => (
  <Link href={path} className="group">
    <div className="bg-white p-10 rounded-3xl border border-slate-200 hover:border-brand-navy/30 hover:shadow-xl transition-all h-full flex flex-col">
      <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:bg-brand-navy transition-colors">
        <Icon size={32} />
      </div>
      <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 group-hover:text-brand-navy transition-colors">{title}</h2>
      <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{description}</p>
      <div className="flex items-center gap-2 text-brand-terracotta font-bold group-hover:gap-3 transition-all">
        Learn More <ChevronRight size={20} />
      </div>
    </div>
  </Link>
);

export const Services = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6">Enterprise Consulting & Engineering Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            We provide specialized technology consulting and engineering services designed to scale with your business. Click on a service to explore our full capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Digital Marketing"
            description="Data-driven performance marketing focused on measurable ROI, SEO, GEO, and AEO strategies for modern search landscapes."
            icon={Globe}
            path="/services/digital-marketing"
          />
          <ServiceCard
            title="Custom App Development"
            description="Engineering robust, scalable software solutions including SaaS platforms, web apps, and mobile applications."
            icon={Cpu}
            path="/services/custom-app-dev"
          />
          <ServiceCard
            title="SAP Consulting & AMS"
            description="Expert guidance and operational support for SAP implementation, migration, and application management services."
            icon={Database}
            path="/services/sap-consulting"
          />
        </div>
      </div>
    </div>
  );
};

