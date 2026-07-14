import { Heart, Shield, Home, Users } from "lucide-react";

const values = [
  { icon: Heart, label: "Faith Driven" },
  { icon: Shield, label: "Integrity First" },
  { icon: Home, label: "Quality Craftsmanship" },
  { icon: Users, label: "Community Focused" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <p
              className="text-[#C9A227] text-sm font-medium tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              About Cornerstone
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold uppercase text-white leading-tight mb-2"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Built on Faith.
              <br />
              <span className="gold-text">Focused on You.</span>
            </h2>

            <div className="gold-divider max-w-[80px] mt-4 mb-8" />

            <div
              className="text-gray-300 leading-relaxed space-y-4 text-base"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <p>
                Cornerstone Roofing & Restoration was built on faith, integrity,
                and a commitment to doing what&apos;s right. We believe your home is
                more than just a roof over your head — it&apos;s where life happens,
                memories are made, and your story unfolds. That&apos;s why we treat
                every home like our own.
              </p>
              <p>
                As a Christian-owned company, we&apos;re called to serve with
                honesty, humility, and excellence. From the first inspection to
                the final cleanup, you can count on us to deliver quality
                craftsmanship and a trustworthy experience from start to finish.
              </p>
              <p className="text-[#C9A227] font-medium italic">
                &ldquo;Jesus Christ The Chief Cornerstone&rdquo; — Ephesians 2:20
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["Local", "Licensed", "Insured", "Free Estimates"].map((badge) => (
                <span
                  key={badge}
                  className="border border-[#C9A227]/50 text-[#C9A227] px-4 py-1.5 text-sm font-medium uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {values.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 border border-[#C9A227]/40 flex items-center justify-center">
                    <Icon size={20} className="text-[#C9A227]" />
                  </div>
                  <span
                    className="text-gray-300 text-xs uppercase tracking-wider leading-tight"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — decorative block */}
          <div className="relative">
            <div className="border border-[#C9A227]/30 p-8 bg-[#111111]">
              {/* Cross accent */}
              <div className="text-center mb-6">
                <span className="text-[#C9A227] text-5xl">✝</span>
              </div>
              <div
                className="text-center space-y-4"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                <p className="text-gray-400 text-sm uppercase tracking-widest">
                  About
                </p>
                <h3 className="text-4xl font-bold uppercase text-white">
                  Cornerstone
                </h3>
                <div className="gold-divider max-w-[120px] mx-auto" />
                <blockquote className="text-[#C9A227] text-xl font-medium italic leading-relaxed">
                  &ldquo;Jesus Christ<br />The Chief<br />Cornerstone&rdquo;
                </blockquote>
                <p className="text-gray-500 text-sm tracking-widest uppercase">
                  Ephesians 2:20
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#2a2a2a] grid grid-cols-2 gap-4 text-center">
                <div>
                  <p
                    className="text-3xl font-bold text-[#C9A227]"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    100%
                  </p>
                  <p
                    className="text-gray-400 text-xs uppercase tracking-wider mt-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Satisfaction Focused
                  </p>
                </div>
                <div>
                  <p
                    className="text-3xl font-bold text-[#C9A227]"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    FREE
                  </p>
                  <p
                    className="text-gray-400 text-xs uppercase tracking-wider mt-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Estimates Always
                  </p>
                </div>
              </div>
            </div>

            {/* Gold corner accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#C9A227]" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#C9A227]" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#C9A227]" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#C9A227]" />
          </div>
        </div>
      </div>
    </section>
  );
}
