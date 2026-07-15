import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Cornerstone Roofing & Restoration LLC",
  url: "https://cornerstoneworksmi.com",
  logo: "https://cornerstoneworksmi.com/icon.png",
  image: "https://cornerstoneworksmi.com/hero-bg.jpg",
  description:
    "Faith Built. Storm Tested. Cornerstone Roofing & Restoration LLC serves Michigan Center and surrounding areas with roof replacement, roof repair, storm damage restoration, siding, and insurance claim assistance.",
  telephone: "+15173923496",
  email: "Cody@Cornerstoneworksmi.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Michigan Center",
    addressRegion: "MI",
    postalCode: "49254",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.1167,
    longitude: -84.3272,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  areaServed: [
    "Michigan Center, MI",
    "Jackson, MI",
    "Spring Arbor, MI",
    "Vandercook Lake, MI",
    "Grass Lake, MI",
    "Brooklyn, MI",
  ],
  sameAs: [
    "https://www.facebook.com/people/Cornerstone-Roofing-Restoration-LLC/61590137027445/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Replacement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Storm Damage Restoration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Siding & Exteriors" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Insurance Claim Assistance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free Estimates" } },
    ],
  },
};

export const metadata: Metadata = {
  title: "Cornerstone Roofing & Restoration LLC | Michigan Center, MI",
  description:
    "Michigan Center roofing contractor — roof replacement, repair, storm damage restoration, siding, and insurance claims. Licensed and insured. Free estimates. Call 517-392-3496.",
  keywords:
    "roofing Michigan Center MI, roof repair Michigan, storm damage restoration, roof replacement, siding exteriors, insurance claim roofing, Cornerstone Roofing",
  openGraph: {
    title: "Cornerstone Roofing & Restoration LLC",
    description:
      "Faith Built. Storm Tested. Quality roofing & restoration in Michigan Center, MI. Free estimates. Licensed & Insured.",
    url: "https://cornerstoneworksmi.com",
    siteName: "Cornerstone Roofing & Restoration LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
