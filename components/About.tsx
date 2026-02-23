import { motion } from 'motion/react';
import { Shield, Cpu, Database, MessageSquare, CheckCircle2 } from 'lucide-react';

const MissionVision = () => (
  <section className="py-24 bg-slate-50 rounded-[3rem] mb-32">
    <div className="max-w-5xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed">
            To empower enterprises through engineering excellence, providing robust digital systems that bridge the gap between complex business challenges and high-performance technology solutions.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our Vision</h2>
          <p className="text-slate-600 leading-relaxed">
            To be the global leader in enterprise technology consulting, recognized for our product-first mindset and our ability to architect the future of digital communication and system integration.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Values = () => (
  <section className="py-24 mb-32">
    <div className="text-center mb-20">
      <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">Our Core Values</h2>
      <p className="text-slate-600">The principles that guide every line of code we write and every strategy we design.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: 'Engineering Excellence', desc: 'We prioritize robust, production-grade code over quick fixes.' },
        { title: 'Client-Centricity', desc: 'Your business goals are the primary driver of our technical decisions.' },
        { title: 'Security-First', desc: 'Data integrity and security are baked into the core of every system.' },
        { title: 'Continuous Innovation', desc: 'We stay ahead of the curve in AI, automation, and enterprise tech.' }
      ].map((value, i) => (
        <div key={i} className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-brand-navy transition-all shadow-sm">
          <div className="w-12 h-12 bg-brand-navy/10 text-brand-navy rounded-xl flex items-center justify-center mb-6 font-bold">
            0{i + 1}
          </div>
          <h4 className="font-bold text-slate-900 mb-3">{value.title}</h4>
          <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Timeline = () => (
  <section className="py-24 border-t border-slate-100">
    <div className="text-center mb-20">
      <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">A Journey of Innovation</h2>
      <p className="text-slate-600">How SoftClinch evolved into an enterprise technology powerhouse.</p>
    </div>
    <div className="space-y-12 max-w-4xl mx-auto">
      {[
        { year: '2015', title: 'The Foundation', desc: 'SoftClinch was founded as a specialized SAP consulting boutique in Bangalore.' },
        { year: '2018', title: 'Custom Engineering', desc: 'Expanded into custom SaaS and web application development for global clients.' },
        { year: '2021', title: 'Inaiwazhi Launch', desc: 'Developed and launched our proprietary WhatsApp automation platform.' },
        { year: '2024', title: 'Enterprise Scale', desc: 'Serving over 150+ enterprise clients with a team of 45+ expert engineers.' }
      ].map((item, i) => (
        <div key={i} className="flex gap-12 items-start">
          <div className="text-2xl font-display font-bold text-brand-terracotta flex-shrink-0 w-24">{item.year}</div>
          <div className="pb-12 border-l border-slate-200 pl-12 relative">
            <div className="w-4 h-4 bg-brand-navy rounded-full absolute -left-2 top-2" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const About = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight">
            Engineering Digital Systems with Strategic Precision
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            SoftClinch Consulting Services is an engineering-led technology consulting firm. We don't just advise; we build. Our foundation is built on the belief that enterprise technology should be robust, scalable, and seamlessly integrated.
          </p>
          <p className="text-lg text-slate-500 leading-relaxed">
            Headquartered in the heart of India's tech landscape, we serve global enterprises requiring high-performance digital infrastructure, specialized SAP consulting, and innovative automation platforms.
          </p>
        </div>

        <MissionVision />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-slate-900">Our Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Enterprise Architecture', icon: Shield },
                { title: 'SAP Consulting', icon: Database },
                { title: 'Custom Platforms', icon: Cpu },
                { title: 'WhatsApp Tech', icon: MessageSquare }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <item.icon className="text-slate-900 mb-4" size={24} />
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-navy rounded-[2.5rem] p-12 text-white">
            <h3 className="text-2xl font-display font-bold mb-6">Product Ownership</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We don't just build for others; we design, develop, and own <strong>Inaiwazhi</strong> — our proprietary WhatsApp automation platform. This product-first mindset ensures we understand the real-world challenges of scalability, integration, and performance.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-terracotta" size={20} />
                <span>Scalability-focused design</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-terracotta" size={20} />
                <span>Deep system integration</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-terracotta" size={20} />
                <span>Measurable digital performance</span>
              </div>
            </div>
          </div>
        </div>

        <Values />
        <Timeline />

        <div className="text-center max-w-3xl mx-auto mt-32">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">The SoftClinch Way</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our focus is scalability, integration, and measurable digital performance. We believe that technology should be a force multiplier for enterprise growth, not a bottleneck.
          </p>
        </div>
      </div>
    </div>
  );
};
