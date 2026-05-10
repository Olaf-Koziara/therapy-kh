import { Laptop, Globe, ShieldCheck } from "lucide-react";

const OnlineTherapy = () => {
  return (
    <section id="online" className="py-24 bg-earth-beige-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-video bg-white flex items-center justify-center border border-earth-beige-200">
              <Laptop size={120} className="text-earth-sage-400/50" />
              <div className="absolute inset-0 bg-gradient-to-tr from-earth-sage-50/50 to-transparent"></div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-earth-brown-900 mb-8">
              Psychoterapia On-line
            </h2>
            <p className="text-lg text-earth-brown-700 leading-relaxed mb-8">
              Współczesna terapia nie zna granic. Pracuję ze wszystkimi chętnymi
              z terenu Polski - niezależnie czy mieszkasz w Gdańsku, Bydgoszczy,
              czy w innym miejscu kraju. Również jeśli preferujesz komfort
              własnego domu lub często podróżujesz, zapraszam na sesje on-line.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Globe
                  className="text-earth-sage-600 mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h4 className="text-lg font-bold text-earth-brown-800">
                    Dostępność
                  </h4>
                  <p className="text-earth-brown-600">
                    Pracuję ze wszystkimi zainteresowanymi z całej Polski
                    (Gdańsk i okolice, Bydgoszcz i okolice) oraz możliwość
                    terapii online dla całego kraju.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ShieldCheck
                  className="text-earth-sage-600 mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h4 className="text-lg font-bold text-earth-brown-800">
                    Dyskrecja i Bezpieczeństwo
                  </h4>
                  <p className="text-earth-brown-600">
                    Korzystam z bezpiecznych i szyfrowanych połączeń, dbając o
                    pełną poufność sesji.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineTherapy;
