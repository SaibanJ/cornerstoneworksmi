"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Photo = { src: string; alt: string };

export default function GalleryClient({ photos }: { photos: Photo[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () =>
    setLightbox((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null));
  const next = () =>
    setLightbox((i) => (i !== null ? (i + 1) % photos.length : null));

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="relative overflow-hidden aspect-video border border-[#2a2a2a] hover:border-[#C9A227]/60 transition-colors group cursor-pointer"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/30 transition-colors flex items-center justify-center">
              <span
                className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs uppercase tracking-widest border border-white px-3 py-1"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                View
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white hover:text-[#C9A227] transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 text-white hover:text-[#C9A227] transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 text-white hover:text-[#C9A227] transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={40} />
          </button>

          {/* Counter */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 text-sm tracking-widest"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            {lightbox + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
