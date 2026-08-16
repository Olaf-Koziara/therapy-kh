import Link from "next/link";
import { Laptop, Globe, ShieldCheck, ArrowRight } from "lucide-react";

const OnlineTherapy = () => {
  return (
    <section id="online" className="overflow-hidden bg-earth-beige-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="relative z-10 flex aspect-video items-center justify-center overflow-hidden rounded-3xl border border-earth-beige-200 bg-white shadow-2xl">
              <Laptop size={120} className="text-earth-sage-400/50" />
              <div className="absolute inset-0 bg-gradient-to-tr from-earth-sage-50/50 to-transparent" />
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-4xl font-bold text-earth-brown-900">
              Psychoterapia online
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-earth-brown-700">
              Współczesna terapia nie zna granic. Pracuję ze wszystkimi chętnymi
              z terenu Polski – niezależnie czy mieszkasz w Gdańsku, Chojnicach,
              czy w innym miejscu kraju. Również jeśli preferujesz komfort
              własnego domu lub często podróżujesz, zapraszam na sesje online.
            </p>

            <div className="mb-8 space-y-6">
              <div className="flex items-start space-x-4">
                <Globe className="mt-1 shrink-0 text-earth-sage-600" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-earth-brown-800">
                    Dostępność
                  </h4>
                  <p className="text-earth-brown-700">
                    Gabinety stacjonarne w Gdańsku i Chojnicach oraz możliwość
                    psychoterapii online dla mieszkańców całej Polski.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ShieldCheck
                  className="mt-1 shrink-0 text-earth-sage-600"
                  size={24}
                />
                <div>
                  <h4 className="text-lg font-bold text-earth-brown-800">
                    Dyskrecja i bezpieczeństwo
                  </h4>
                  <p className="text-earth-brown-700">
                    Korzystam z bezpiecznych i szyfrowanych połączeń, dbając o
                    pełną poufność sesji.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/psychoterapia-online"
              className="inline-flex items-center gap-2 font-bold text-earth-sage-600 transition-colors hover:text-earth-sage-700"
            >
              Więcej o terapii online
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineTherapy;
