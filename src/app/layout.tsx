import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kamila Helta | Psychoterapia Gestalt i Terapia Uzależnień Gdańsk",
  description: "Zapraszam na profesjonalną psychoterapię w Gdańsku oraz on-line. Specjalizuję się w nurcie Gestalt oraz terapii uzależnień. Odzyskaj spokój i świadomość w bezpiecznej atmosferze.",
  keywords: ["psychoterapia Gdańsk", "psychoterapeuta Gestalt", "terapia uzależnień Gdańsk", "psychoterapia online", "Kamila Helta", "leczenie uzależnień", "pomoc psychologiczna Gdańsk"],
  openGraph: {
    title: "Kamila Helta | Psychoterapia Gestalt i Terapia Uzależnień",
    description: "Profesjonalna pomoc psychoterapeutyczna w Gdańsku i online.",
    url: "https://kamilahelta.pl",
    siteName: "Kamila Helta Psychoterapia",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
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
