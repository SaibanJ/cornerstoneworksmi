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

export const metadata: Metadata = {
  title: "Cornerstone Roofing & Restoration LLC | Michigan Center, MI",
  description:
    "Faith Built. Storm Tested. Cornerstone Roofing & Restoration LLC serves Michigan Center and surrounding areas with roof replacement, roof repair, storm damage restoration, siding & exteriors, and insurance claim assistance. Licensed & Insured. Free Estimates.",
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
      <body className="min-h-screen antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
