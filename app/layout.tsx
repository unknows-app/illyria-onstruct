import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Illyria Construct - Interior Design Studio in Lviv",
    template: "%s | Illyria Construct"
  },
  description: "Award-winning interior design studio in Lviv, Ukraine, creating bespoke residential and commercial spaces that reflect your vision and lifestyle. 15+ years of excellence.",
  keywords: ["interior design", "Lviv", "Ukraine", "residential design", "commercial design", "renovation", "interior architecture"],
  authors: [{ name: "Illyria Construct" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://illyriaconstruct.com",
    title: "Illyria Construct - Interior Design Studio in Lviv",
    description: "Award-winning interior design studio creating bespoke residential and commercial spaces in Lviv, Ukraine.",
    siteName: "Illyria Construct",
  },
  twitter: {
    card: "summary_large_image",
    title: "Illyria Construct - Interior Design Studio",
    description: "Creating timeless interiors that reflect your vision and lifestyle.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
