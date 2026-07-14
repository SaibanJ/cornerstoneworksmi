import Image from "next/image";

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
              Our Story
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold uppercase text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Built on Faith.
              <br />
              <span className="gold-text">Focused on You.</span>
            </h2>

            <div className="gold-divider max-w-[80px] mb-8" />

            <div
              className="text-gray-300 leading-relaxed space-y-4 text-base mb-8"
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
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
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

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { label: "Faith Driven", desc: "Christian values in every job" },
                { label: "Integrity First", desc: "Honest from estimate to cleanup" },
                { label: "Quality Craftsmanship", desc: "Built to last Michigan weather" },
                { label: "Community Focused", desc: "Serving Michigan Center & beyond" },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-[#111111] border border-[#2a2a2a] p-4">
                  <p
                    className="text-[#C9A227] font-bold uppercase text-sm mb-1"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-gray-500 text-xs"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#C9A227] hover:bg-[#F0C040] text-black font-bold px-8 py-4 text-base uppercase tracking-wider transition-colors"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Get a Free Estimate
            </a>
          </div>

          {/* Right — stone/cross photo */}
          <div className="relative">
            <div className="relative overflow-hidden border border-[#C9A227]/20">
              <Image
                src="/about-photo.jpg"
                alt="Jesus Christ The Chief Cornerstone - Ephesians 2:20"
                width={815}
                height={1024}
                className="w-full h-auto"
              />
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
