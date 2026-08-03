import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/home/FAQ";
import { CalendarCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | Kamila Helta – pytania o psychoterapię",
  description:
    "Odpowiedzi na najczęstsze pytania o pierwszą konsultację, psychoterapię online, nurt Gestalt i umawianie wizyt w Gdańsku, Chojnicach oraz online.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <main className="pt-24">
      <FAQ />
      <section className="bg-white pb-24 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white shadow-md transition-all hover:bg-blue-700"
          >
            <CalendarCheck size={18} />
            Umów konsultację
          </Link>
        </div>
      </section>
    </main>
  );
}
