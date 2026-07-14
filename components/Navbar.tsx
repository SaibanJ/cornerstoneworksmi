"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-sm shadow-lg shadow-black/50 border-b border-[#C9A227]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <a href="/#home" className="flex flex-col leading-tight">
            <span
              className="text-[#C9A227] font-bold tracking-widest uppercase text-xs"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Faith Built. Storm Tested.
            </span>
            <span
              className="text-white font-bold text-lg uppercase tracking-wide"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Cornerstone Roofing & Restoration
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#C9A227] transition-colors text-sm font-medium uppercase tracking-wider"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+15173923496"
              className="flex items-center gap-2 bg-[#C9A227] text-black px-4 py-2 font-bold text-sm uppercase tracking-wider hover:bg-[#F0C040] transition-colors"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              <Phone size={14} />
              517-392-3496
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 border-t border-[#C9A227]/20">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-[#C9A227] transition-colors text-lg font-medium uppercase tracking-wider"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+15173923496"
              className="flex items-center gap-2 bg-[#C9A227] text-black px-4 py-3 font-bold text-base uppercase tracking-wider hover:bg-[#F0C040] transition-colors justify-center mt-2"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              <Phone size={16} />
              517-392-3496
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
