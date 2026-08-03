import type { Metadata } from "next";
import About from "@/components/home/About";

export const metadata: Metadata = {
  title: "O mnie | Kamila Helta – psychoterapeutka Gestalt",
  description:
    "Certyfikowana psychoterapeutka Gestalt EAGT i specjalistka psychoterapii uzależnień. Doświadczenie od 2009 roku – Gdańsk, Chojnice i online.",
  alternates: {
    canonical: "/o-mnie",
  },
};

export default function OMniePage() {
  return (
    <main className="pt-24">
      <About />
    </main>
  );
}
