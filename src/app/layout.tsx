import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteName, siteUrl } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Psychoterapia Gestalt i terapia uzależnień Gdańsk | Kamila Helta",
    template: "%s | Kamila Helta",
  },
  description:
    "Psychoterapia Gestalt, terapia uzależnień i konsultacje online. Kamila Helta pomaga osobom w kryzysie, trudnościach emocjonalnych i relacyjnych w Gdańsku oraz online.",
  keywords: [
    "psychoterapia Gdańsk",
    "psychoterapeuta Gestalt Gdańsk",
    "terapia uzależnień Gdańsk",
    "psychoterapia online",
    "Kamila Helta",
    "pomoc psychologiczna Gdańsk",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Psychoterapia Gestalt i terapia uzależnień w Gdańsku",
    description:
      "Konsultacje psychoterapeutyczne w Gdańsku i online. Gestalt, terapia uzależnień, wsparcie w kryzysie, lęku, depresji i trudnościach relacyjnych.",
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/images/kamila-helta.jpg",
        width: 368,
        height: 532,
        alt: "Kamila Helta, psychoterapeutka Gestalt",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychoterapia Gestalt i terapia uzależnień Gdańsk",
    description:
      "Kamila Helta - psychoterapia Gestalt, terapia uzależnień i konsultacje online.",
    images: ["/images/kamila-helta.jpg"],
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
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-earth-sage-200 selection:text-earth-brown-900 font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
