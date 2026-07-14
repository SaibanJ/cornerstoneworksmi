import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">

        {/* Branded about image — full width, prominent */}
        <div className="relative w-full rounded-none overflow-hidden border border-[#C9A227]/20 mb-16">
          <Image
            src="/about-cornerstone.jpg"
            alt="About Cornerstone Roofing & Restoration - Faith Built, Storm Tested"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Supporting text + badges below the image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
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
            <div className="grid grid-cols-2 gap-4">
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
        </div>
      </div>
    </section>
  );
}
