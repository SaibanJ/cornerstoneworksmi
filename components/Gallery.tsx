const photos = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    alt: "Roof replacement project - before and after",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    alt: "Storm damage restoration in progress",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    alt: "Completed roof repair - Michigan home",
  },
  {
    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
    alt: "New shingle installation",
  },
  {
    src: "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?auto=format&fit=crop&w=800&q=80",
    alt: "Exterior siding and restoration work",
  },
  {
    src: "https://images.unsplash.com/photo-1519500528352-2d1460418d41?auto=format&fit=crop&w=800&q=80",
    alt: "Roof inspection and assessment",
  },
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

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative overflow-hidden aspect-video group border border-[#2a2a2a] hover:border-[#C9A227]/50 transition-colors"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/40 transition-colors" />
            </div>
          ))}
        </div>

        <p
          className="text-center text-gray-500 text-sm mt-8"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          More photos available on our{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61590137027445"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A227] hover:underline"
          >
            Facebook page
          </a>
        </p>
      </div>
    </section>
  );
}
