import { motion } from 'motion/react';
import { Shield, Cpu, Database, MessageSquare, CheckCircle2 } from 'lucide-react';

const MissionVision = () => (
  <section className="relative py-24 bg-brand-navy rounded-[3rem] mb-32 overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-brand-navy/30 blur-[100px] rounded-full pointer-events-none" />

    <div className="max-w-5xl mx-auto px-8 relative z-10">
      {/* Section label */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/60 text-xs font-bold uppercase tracking-widest">
          What Drives Us
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy to-[#1e3a5f] opacity-70 group-hover:opacity-100 transition-opacity" />
          {/* Decorative large number */}
          <div className="absolute -top-4 -right-2 text-[8rem] font-display font-black text-white/5 select-none leading-none">01</div>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-navy/40 border border-brand-navy/60 mb-6">
            <span className="text-white font-black font-display text-lg">M</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-4">Our Mission</h2>
          <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
            To empower enterprises through engineering excellence, providing robust digital systems that bridge the gap between complex business challenges and high-performance technology solutions.
          </p>
        </div>

        {/* Vision Card */}
        <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A23B2A] to-[#c0483a] opacity-70 group-hover:opacity-100 transition-opacity" />
          {/* Decorative large number */}
          <div className="absolute -top-4 -right-2 text-[8rem] font-display font-black text-white/5 select-none leading-none">02</div>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#A23B2A]/30 border border-[#A23B2A]/50 mb-6">
            <span className="text-white font-black font-display text-lg">V</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-4">Our Vision</h2>
          <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
            To be the global leader in enterprise technology consulting, recognized for our product-first mindset and our ability to architect the future of digital communication and system integration.
          </p>
        </div>
      </div>
    </div>
  </section>
);


const Values = () => (
  <section className="py-10 mb-32">
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
  <section className="py 10 border-t border-slate-100">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Image Visual */}
          <div className="relative">
            <div className="aspect-square bg-brand-navy rounded-[3rem] overflow-hidden">
              <img
                src="https://picsum.photos/seed/softclinch-about/800/800"
                alt="SoftClinch Engineering Team"
                className="w-full h-full object-cover opacity-50 grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden lg:block">
              <div className="text-brand-navy font-display font-bold text-4xl mb-1">10+</div>
              <div className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Years of Engineering</div>
            </div>
          </div>

          {/* Right: Heading + Description */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight">
              Engineering Digital Systems with Strategic Precision
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              SoftClinch Consulting Services is an engineering-led technology consulting firm. We don't just advise; we build. Our foundation is built on the belief that enterprise technology should be robust, scalable, and seamlessly integrated.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Headquartered in the heart of India's tech landscape, we serve global enterprises requiring high-performance digital infrastructure, specialized SAP consulting, and innovative automation platforms.
            </p>
          </div>
        </div>

        <MissionVision />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-32">
          {/* Left: Our Expertise */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-widest mb-3">What We Do Best</span>
              <h2 className="text-3xl font-display font-bold text-slate-900">Our Expertise</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: 'Enterprise Architecture', icon: Shield, desc: 'Scalable system design for global enterprises.', accent: 'from-brand-navy/10 to-brand-navy/5', iconColor: 'text-brand-navy' },
                { title: 'SAP Consulting', icon: Database, desc: 'S/4HANA implementation & AMS support.', accent: 'from-[#A23B2A]/10 to-[#A23B2A]/5', iconColor: 'text-[#A23B2A]' },
                { title: 'Custom Platforms', icon: Cpu, desc: 'Bespoke SaaS and web app development.', accent: 'from-brand-navy/10 to-brand-navy/5', iconColor: 'text-brand-navy' },
                { title: 'WhatsApp Tech', icon: MessageSquare, desc: 'Enterprise WhatsApp API automation.', accent: 'from-[#A23B2A]/10 to-[#A23B2A]/5', iconColor: 'text-[#A23B2A]' }
              ].map((item, i) => (
                <div key={i} className="group relative bg-white border border-slate-200 hover:border-brand-navy/30 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${item.accent.replace('/10', '').replace('/5', '/40')} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={item.iconColor} size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1 group-hover:text-brand-navy transition-colors">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Ownership — dark premium card */}
          <div className="relative bg-brand-navy rounded-[2.5rem] p-10 text-white overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-navy/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-[#A23B2A] animate-pulse" />
                Product Ownership
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">We Build & Own <span className="text-[#A23B2A]">Inaiwazhi</span></h3>
              <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                We don't just build for others — we design, develop, and own <strong className="text-white">Inaiwazhi</strong>, our proprietary WhatsApp automation platform. This product-first mindset means we understand the real challenges of scalability, integration, and performance.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Scalability-focused design', icon: Cpu },
                  { label: 'Deep system integration', icon: Database },
                  { label: 'Measurable digital performance', icon: Shield }
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 group/feat">
                    <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/feat:bg-[#A23B2A]/20 group-hover/feat:border-[#A23B2A]/30 transition-all duration-300">
                      <feat.icon className="text-[#A23B2A]" size={14} />
                    </div>
                    <span className="text-slate-300 text-sm group-hover/feat:text-white transition-colors">{feat.label}</span>
                  </div>
                ))}
              </div>
              <a href="/whatsapp-automation" className="inline-flex items-center gap-2 bg-[#A23B2A] hover:bg-[#c0483a] text-white font-bold text-sm px-6 py-3 rounded-full transition-colors">
                Explore Inaiwazhi →
              </a>
            </div>
          </div>
        </div>


        <Values />
        <Timeline />

        {/* The SoftClinch Way — manifesto split layout */}
        <div className="mt-24 border-t-2 border-brand-navy/10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — Label + Stat Cards */}
            <div className="space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A23B2A]">— The SoftClinch Way</span>
              <div className="space-y-4">
                {[
                  { value: '150+', label: 'Enterprise Clients Served', border: 'border-brand-navy' },
                  { value: '10+', label: 'Years of Engineering Excellence', border: 'border-[#A23B2A]' },
                  { value: '99.9%', label: 'Platform Uptime Guaranteed', border: 'border-brand-navy' },
                ].map((s, i) => (
                  <div key={i} className={`flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border-l-4 ${s.border} hover:bg-white hover:shadow-md transition-all duration-300`}>
                    <span className="font-display font-black text-4xl text-slate-900 w-24 flex-shrink-0">{s.value}</span>
                    <span className="text-slate-600 font-medium leading-snug">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Manifesto text */}
            <div className="lg:pl-10 border-l-0 lg:border-l border-slate-200">
              <div className="text-[7rem] leading-none font-display font-black text-slate-100 select-none mb-4">"</div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight -mt-10">
                Technology should be a <span className="text-[#A23B2A]">force multiplier</span> for enterprise growth — not a bottleneck.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Our focus is scalability, integration, and measurable digital performance. Every system we architect, every platform we build, is designed to make your business move faster and smarter.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 text-brand-navy font-bold text-lg group"
              >
                <span className="border-b-2 border-brand-navy/30 group-hover:border-brand-navy pb-0.5 transition-colors">Start a Conversation</span>
                <span className="w-8 h-8 rounded-full border-2 border-brand-navy/30 group-hover:border-brand-navy group-hover:bg-brand-navy group-hover:text-white flex items-center justify-center transition-all duration-300 text-sm">→</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
