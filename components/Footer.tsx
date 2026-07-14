import { Phone, Mail } from "lucide-react";

function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#C9A227]/20">
      {/* Gold bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3
              className="text-2xl font-bold uppercase text-white"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Cornerstone
              <br />
              <span className="gold-text">Roofing & Restoration</span>
            </h3>
            <p
              className="text-[#C9A227] text-sm tracking-widest uppercase"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Faith Built. &#x271D;&#xFE0E; Storm Tested.
            </p>
            <p
              className="text-gray-500 text-xs mt-2"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Michigan Center, MI · Licensed & Insured
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center gap-3">
            <h4
              className="text-sm font-bold uppercase tracking-widest text-[#C9A227] mb-2"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Quick Links
            </h4>
            {[
              ["Services", "#services"],
              ["About", "#about"],
              ["Gallery", "#gallery"],
              ["FAQ", "#faq"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-gray-400 hover:text-[#C9A227] text-sm transition-colors uppercase tracking-wider"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4
              className="text-sm font-bold uppercase tracking-widest text-[#C9A227] mb-2"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Contact Us
            </h4>
            <a
              href="tel:+15173923496"
              className="flex items-center gap-2 text-gray-400 hover:text-[#C9A227] transition-colors text-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <Phone size={14} className="text-[#C9A227]" />
              517-392-3496
            </a>
            <a
              href="mailto:Cody@Cornerstoneworksmi.com"
              className="flex items-center gap-2 text-gray-400 hover:text-[#C9A227] transition-colors text-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <Mail size={14} className="text-[#C9A227]" />
              Cody@Cornerstoneworksmi.com
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61590137027445"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-[#C9A227] transition-colors text-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <FacebookIcon size={14} />
              Find Us on Facebook
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-divider mt-10 mb-6" />
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-600 text-xs"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <p>
            © {new Date().getFullYear()} Cornerstone Roofing & Restoration LLC.
            All rights reserved.
          </p>
          <p>
            Michigan Center, MI · Local. Licensed. Insured.
          </p>
        </div>
      </div>
    </footer>
  );
}
