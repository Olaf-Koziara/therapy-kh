import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContactCTA from "@/components/layout/FloatingContactCTA";
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
    default: "Psychoterapia, Terapia uzależnień, Konsultacje | Gdańsk, Chojnice, Online | Kamila Helta",
    template: "%s | Kamila Helta",
  },
  description:
    "Psychoterapia, terapia uzależnień i konsultacje online. Kamila Helta pomaga osobom w kryzysie, trudnościach emocjonalnych i relacyjnych stacjonarnie w Gdańsku i Chojnicach oraz online.",
  keywords: [
    "psychoterapia Gdańsk",
    "psychoterapia Chojnice",
    "psychoterapia online",
    "terapia uzależnień Gdańsk",
    "terapia uzależnień Chojnice",
    "konsultacje psychoterapeutyczne",
    "Kamila Helta",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Psychoterapia, Terapia uzależnień, Konsultacje | Gdańsk, Chojnice, Online",
    description:
      "Konsultacje psychoterapeutyczne i psychoterapia w Gdańsku, Chojnicach i online. Gestalt, terapia uzależnień, wsparcie w kryzysie, lęku, depresji i trudnościach relacyjnych.",
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/images/kamila-helta.jpeg",
        width: 368,
        height: 532,
        alt: "Kamila Helta, psychoterapeutka",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychoterapia, Terapia uzależnień, Konsultacje | Gdańsk, Chojnice, Online",
    description:
      "Kamila Helta - psychoterapia, terapia uzależnień i konsultacje online (Gdańsk, Chojnice).",
    images: ["/images/kamila-helta.jpeg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-100 selection:text-blue-900 font-sans min-h-screen flex flex-col bg-white text-slate-900`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <FloatingContactCTA />
        <Footer />
      </body>
    </html>
  );
}
