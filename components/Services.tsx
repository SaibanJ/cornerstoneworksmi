import { Home, CloudLightning, Shield, Layers, FileCheck, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Roof Replacement",
    description:
      "Full roof replacements using premium materials built to last Michigan winters and storms. Every project completed with precision and care.",
  },
  {
    icon: Wrench,
    title: "Roof Repair",
    description:
      "Fast, reliable repairs for leaks, missing shingles, or visible wear and tear. We diagnose the problem and fix it right the first time.",
  },
  {
    icon: CloudLightning,
    title: "Storm Damage Restoration",
    description:
      "Hail, wind, and storm damage experts. When storms strike, we respond fast to restore your home safely and thoroughly.",
  },
  {
    icon: Layers,
    title: "Siding & Exteriors",
    description:
      "Complete exterior restoration including siding, fascia, soffit, and gutters. We protect your entire home, not just the roof.",
  },
  {
    icon: FileCheck,
    title: "Insurance Claim Assistance",
    description:
      "We work for you, not the insurance company. We'll guide you through the claims process and make sure you get what you're owed.",
  },
  {
    icon: Shield,
    title: "Free Estimates",
    description:
      "No pressure, no commitment. We'll come out, assess your roof, and give you an honest estimate — completely free of charge.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#C9A227] text-sm font-medium tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            What We Do
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold uppercase text-white"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Our Services
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-hover bg-[#111111] border border-[#2a2a2a] p-8 flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center">
                  <Icon size={22} className="text-[#C9A227]" />
                </div>
                <h3
                  className="text-xl font-bold uppercase text-white"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#F0C040] text-black font-bold px-10 py-4 text-lg uppercase tracking-wider transition-colors"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Get Your Free Estimate Today
          </a>
        </div>
      </div>
    </section>
  );
}
