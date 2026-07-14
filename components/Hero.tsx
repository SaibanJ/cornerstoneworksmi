import { Phone, ClipboardCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundPosition: "center top",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0a0a0a]/75" />

      {/* Gold bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#C9A227]/50 px-4 py-1.5 mb-8 text-[#C9A227] text-sm font-medium tracking-widest uppercase"
          style={{ fontFamily: "var(--font-inter)" }}>
          <span>✝</span>
          <span>Licensed & Insured · Michigan Center, MI</span>
          <span>✝</span>
        </div>

        {/* Main headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tight leading-none mb-4"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          <span className="text-white">Protect What</span>
          <br />
          <span className="gold-text">Matters Most.</span>
        </h1>

        <p
          className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mt-6 mb-4 leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Quality roofing & restoration you can count on. From storm damage to
          full replacements — we handle it all with integrity, honesty, and
          craftsmanship you can trust.
        </p>

        {/* Tagline */}
        <p
          className="text-[#C9A227] text-base sm:text-lg tracking-[0.3em] uppercase font-medium mb-10"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Faith Built. ✝ Storm Tested.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[#C9A227] hover:bg-[#F0C040] text-black font-bold px-8 py-4 text-lg uppercase tracking-wider transition-colors w-full sm:w-auto justify-center"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            <ClipboardCheck size={20} />
            Get a Free Estimate
          </a>
          <a
            href="tel:+15173923496"
            className="flex items-center gap-2 border-2 border-white hover:border-[#C9A227] hover:text-[#C9A227] text-white font-bold px-8 py-4 text-lg uppercase tracking-wider transition-colors w-full sm:w-auto justify-center"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            <Phone size={20} />
            Call 517-392-3496
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-400"
          style={{ fontFamily: "var(--font-inter)" }}>
          {["Faith Built", "Storm Tested", "Honest & Reliable", "Quality You Can Trust"].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <span className="text-[#C9A227]">✓</span>
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
