import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { displayPhone } from "@/lib/seo";
import type { LandingPage } from "@/lib/landing-pages";

type ServiceLandingProps = {
  page: LandingPage;
};

const ServiceLanding = ({ page }: ServiceLandingProps) => {
  const Icon = page.icon;

  return (
    <main className="bg-earth-beige-50 pt-32">
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_420px] lg:items-start">
          <div>
            <Link
              href="/"
              className="mb-10 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-earth-sage-600 transition-colors hover:text-earth-sage-700"
            >
              Powrót do strony głównej
            </Link>
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-earth-sage-100 text-earth-sage-600">
              <Icon size={30} />
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-earth-brown-900 md:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-earth-brown-700">
              {page.lead}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-earth-sage-600 px-8 py-4 font-bold text-earth-beige-50 shadow-lg transition-colors hover:bg-earth-sage-700"
              >
                Umów konsultację
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:889470294"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-earth-brown-200 px-8 py-4 font-bold text-earth-brown-800 transition-colors hover:border-earth-sage-600 hover:text-earth-sage-600"
              >
                <Phone size={18} />
                {displayPhone}
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-earth-beige-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-earth-brown-900">
              Kontakt i forma spotkań
            </h2>
            <div className="mt-6 space-y-5 text-earth-brown-700">
              <p className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 flex-shrink-0 text-earth-sage-600" size={20} />
                Konsultacje stacjonarne w Gdańsku i spotkania online.
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 flex-shrink-0 text-earth-sage-600" size={20} />
                Poufność, jasne zasady współpracy i regularna superwizja.
              </p>
              <p className="flex items-start gap-3">
                <Mail className="mt-1 flex-shrink-0 text-earth-sage-600" size={20} />
                <a href="mailto:kamila@helta.pl" className="hover:text-earth-sage-600">
                  kamila@helta.pl
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {page.sections.map((section) => (
              <article
                key={section}
                className="rounded-3xl border border-earth-beige-200 bg-earth-beige-50 p-8"
              >
                <p className="text-lg leading-relaxed text-earth-brown-700">
                  {section}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-earth-brown-900">
              Najczęstsze pytania
            </h2>
            <div className="mt-8 space-y-4">
              {page.faq.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-earth-beige-200 bg-white p-6"
                >
                  <summary className="cursor-pointer list-none text-lg font-bold text-earth-brown-900">
                    {item.question}
                  </summary>
                  <p className="mt-4 leading-relaxed text-earth-brown-700">
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
