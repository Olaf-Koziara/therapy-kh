import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MessageCircle,
  Clock3,
  HandHeart,
} from "lucide-react";
import { displayPhone } from "@/lib/seo";
import type { LandingPage } from "@/lib/landing-pages";

type ServiceLandingProps = {
  page: LandingPage;
};

const ServiceLanding = ({ page }: ServiceLandingProps) => {
  const Icon = page.icon;

  return (
    <main className="bg-[#fefcf9] pt-32">
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_420px] lg:items-start">
          <div>
            <Link
              href="/"
              className="mb-10 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 transition-colors hover:text-blue-700"
            >
              Powrót do strony głównej
            </Link>
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Icon size={30} />
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-600">
              {page.lead}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition-colors hover:bg-blue-700"
              >
                Umów konsultację
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:889470294"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 px-8 py-4 font-bold text-slate-800 transition-colors hover:border-blue-600 hover:text-blue-600"
              >
                <Phone size={18} />
                {displayPhone}
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Kontakt i forma spotkań
            </h2>
            <div className="mt-6 space-y-5 text-slate-600">
              <p className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-1 shrink-0 text-blue-600"
                  size={20}
                />
                Konsultacje stacjonarne (Gdańsk, Chojnice) i spotkania online.
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-1 shrink-0 text-blue-600"
                  size={20}
                />
                Poufność, jasne zasady współpracy i regularna superwizja.
              </p>
              <p className="flex items-start gap-3">
                <Mail className="mt-1 shrink-0 text-blue-600" size={20} />
                <a
                  href="mailto:kamila@helta.pl"
                  className="hover:text-blue-600"
                >
                  kamila@helta.pl
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#f9f4ec] px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#e7dcc9] bg-white p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Pierwsza konsultacja w 3 krokach
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                <MessageCircle size={16} className="text-blue-600" />
                Krok 1: Kontakt
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Napisz lub zadzwoń i krótko opisz swoją sytuację.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Clock3 size={16} className="text-blue-600" />
                Krok 2: Ustalenie terminu
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Wybieramy najdogodniejszą formę: gabinet lub online.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                <HandHeart size={16} className="text-blue-600" />
                Krok 3: Pierwsze spotkanie
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Omawiamy potrzeby i wspólnie ustalamy najlepszy kierunek pracy.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {page.sections.map((section) => (
              <article
                key={section}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
              >
                <p className="text-lg leading-relaxed text-slate-600">
                  {section}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Najczęstsze pytania
            </h2>
            <div className="mt-8 space-y-4">
              {page.faq.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <summary className="cursor-pointer list-none text-lg font-bold text-slate-900">
                    {item.question}
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceLanding;
