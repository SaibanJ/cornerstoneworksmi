import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Cornerstone Roofing & Restoration LLC",
  description:
    "See our work in action. Real roofing jobs, roof replacements, storm damage restoration, siding, and exterior work by Cornerstone Roofing & Restoration LLC in Michigan Center, MI.",
};

const photos = [
  { src: "/gallery/job-1.jpg", alt: "Roof underlayment installation" },
  { src: "/gallery/job-2.jpg", alt: "Crew shingling a residential roof" },
  { src: "/gallery/job-3.jpg", alt: "Large roof replacement in progress" },
  { src: "/gallery/job-4.jpg", alt: "Completed shingle roof installation" },
  { src: "/gallery/job-5.jpg", alt: "Exterior siding restoration" },
  { src: "/gallery/job-6.jpg", alt: "Full exterior with siding, gutters and roofing" },
  { src: "/gallery/job-7.jpg", alt: "Metal roof and siding installation" },
  { src: "/gallery/job-8.jpg", alt: "Shingle installation with equipment" },
  { src: "/gallery/job-9.jpg", alt: "Completed shingle roof close-up" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p
              className="text-[#C9A227] text-sm font-medium tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our Portfolio
            </p>
            <h1
              className="text-4xl sm:text-6xl font-bold uppercase text-white"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Our Work in Action
            </h1>
            <div className="bg-gradient-to-r from-transparent via-[#C9A227] to-transparent h-px max-w-xs mx-auto mt-6" />
            <p
              className="text-gray-400 mt-6 max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Real jobs. Real craftsmanship. From roof replacements to full exterior restorations — this is what we do.
            </p>
          </div>

          <GalleryClient photos={photos} />

          {/* CTA */}
          <div className="text-center mt-16 border border-[#C9A227]/20 p-10 bg-[#111111]">
            <p
              className="text-[#C9A227] text-sm tracking-widest uppercase mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Ready to get started?
            </p>
            <h2
              className="text-3xl font-bold uppercase text-white mb-6"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Get a Free Estimate Today
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15173923496"
                className="bg-[#C9A227] hover:bg-[#F0C040] text-black font-bold px-10 py-4 text-base uppercase tracking-wider transition-colors"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Call 517-392-3496
              </a>
              <a
                href="/#contact"
                className="border-2 border-white hover:border-[#C9A227] hover:text-[#C9A227] text-white font-bold px-10 py-4 text-base uppercase tracking-wider transition-colors"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Send Us a Message
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
