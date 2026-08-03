import Link from "next/link";
import { Heart, Brain, Users, CloudRain, Sparkles, Target } from "lucide-react";

const services = [
  {
    title: "Zaburzenia nastroju i depresja",
    description:
      "Wsparcie w przezwyciężaniu depresji, smutku i zaburzeń nastroju. Praca nad przywróceniem równowagi emocjonalnej.",
    icon: Heart,
  },
  {
    title: "Zaburzenia i stany lękowe",
    description:
      "Leczenie lęku, paniki i niepokoju. Nauczenie praktyk radzenia sobie z objawami i przywrócenie poczucia bezpieczeństwa.",
    icon: CloudRain,
  },
  {
    title: "Nadmierny stres i wypalenie",
    description:
      "Praca nad zarządzaniem stresem, wypaleniem zawodowym i napięciem emocjonalnym.",
    icon: Target,
  },
  {
    title: "Zaburzenia psychosomatyczne i odżywiania",
    description:
      "Wsparcie w leczeniu zaburzeń psychosomatycznych, zaburzeń odżywiania oraz związanych z nimi trudności emocjonalnych.",
    icon: Brain,
  },
  {
    title: "Problemy relacyjne",
    description:
      "Trudności w bliskich relacjach z partnerem, rodziną, przyjaciółmi i w środowisku pracy. Praca nad komunikacją i więziami.",
    icon: Users,
  },
  {
    title: "Kryzys życiowy i trauma",
    description:
      "Wsparcie w trudnych momentach: rozstania, żałoba, doświadczenia przemocy, traumy czy nagłe wypadki losowe.",
    icon: Sparkles,
  },
];

const Services = () => {
  return (
    <section id="oferta" className="bg-slate-50 py-24">
      <div className="mx-auto mb-16 max-w-7xl px-6 text-center">
        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-blue-600">
          Obszary wsparcia
        </span>
        <h2 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
          W czym mogę Ci pomóc?
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
          Rozumiem, z czym się zmagasz. Zapewniam profesjonalne wsparcie w
          odnalezieniu Twojej wewnętrznej siły i spokoju.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all hover:shadow-md"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-500 group-hover:bg-blue-600 group-hover:text-white">
              <service.icon size={28} />
            </div>
            <h3 className="mb-4 text-xl font-bold text-slate-800">
              {service.title}
            </h3>
            <p className="leading-relaxed text-slate-600">
              {service.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 text-center">
        <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-8 md:p-12">
          <p className="mb-6 text-lg italic text-slate-800">
            &ldquo;Psychoterapia to nie tylko leczenie zaburzeń, to przede
            wszystkim proces odzyskiwania kontaktu z samym sobą.&rdquo;
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center space-x-2 font-bold text-blue-600 transition-colors hover:text-blue-700"
          >
            <span>Zarezerwuj termin konsultacji</span>
            <Target size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
