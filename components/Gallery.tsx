import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featured = [
  { src: "/gallery/job-3.jpg", alt: "Large roof replacement in progress" },
  { src: "/gallery/job-4.jpg", alt: "Completed shingle roof installation" },
  { src: "/gallery/job-6.jpg", alt: "Full exterior restoration with siding and gutters" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#C9A227] text-sm font-medium tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Our Work
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold uppercase text-white"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Our Work in Action
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-6" />
        </div>

        {/* 3-photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {featured.map((photo, i) => (
            <div
              key={i}
              className="relative overflow-hidden aspect-video border border-[#2a2a2a] hover:border-[#C9A227]/50 transition-colors group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* CTA to gallery page */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 border-2 border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-black font-bold px-10 py-4 text-base uppercase tracking-wider transition-colors"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            See All Our Work
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
