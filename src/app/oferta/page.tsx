import type { Metadata } from "next";
import Link from "next/link";
import Services from "@/components/home/Services";
import { landingPages } from "@/lib/landing-pages";
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  CreditCard,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Oferta | Kamila Helta – psychoterapia i konsultacje",
  description:
    "Oferta psychoterapii indywidualnej, Gestalt, terapii uzależnień i sesji online. Gdańsk, Chojnice oraz psychoterapia online.",
  alternates: {
    canonical: "/oferta",
  },
};

export default function OfertaPage() {
  return (
    <main className="pt-24">
      <Services />

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-blue-600">
              Formy pomocy
            </span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Wybierz obszar, który Cię interesuje
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {landingPages.map((page) => {
              const Icon = page.icon;
              return (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="group flex flex-col rounded-3xl border border-slate-200 bg-slate-50/60 p-8 transition-all hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-md"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {page.title}
                  </h3>
                  <p className="mb-6 flex-1 text-slate-600 leading-relaxed">
                    {page.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                    Dowiedz się więcej
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Informacje organizacyjne
          </h2>
          <ul className="mb-10 space-y-5 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
            <li className="flex items-start gap-3 text-slate-700">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <span>
                <strong>Czas trwania sesji:</strong> 50 minut
              </span>
            </li>
            <li className="flex items-start gap-3 text-slate-700">
              <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <span>
                <strong>Koszt konsultacji:</strong> cena sesji podawana przy
                kontakcie (płatność gotówką lub przelewem)
              </span>
            </li>
            <li className="flex items-start gap-3 text-slate-700">
              <Users className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <span>
                <strong>Forma pracy:</strong> terapia indywidualna dla osób
                dorosłych – stacjonarnie (Gdańsk, Chojnice) lub online
              </span>
            </li>
            <li className="flex items-start gap-3 text-slate-700">
              <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <span>
                <strong>Odwoływanie sesji:</strong> bezpłatne do 24h przed
                terminem
              </span>
            </li>
          </ul>
          <div className="text-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white shadow-md transition-all hover:bg-blue-700"
            >
              <CalendarCheck size={18} />
              Umów konsultację
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
