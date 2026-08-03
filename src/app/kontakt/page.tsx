import type { Metadata } from "next";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "Kontakt | Kamila Helta – umów konsultację",
  description:
    "Umów konsultację psychoterapeutyczną w Gdańsku, Chojnicach lub online. Telefon 889 470 294, e-mail kamila@helta.pl.",
  alternates: {
    canonical: "/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <main className="pt-24">
      <Contact />
    </main>
  );
}
