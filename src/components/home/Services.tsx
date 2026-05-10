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
      "Wsparcie w leczeniu zaburzeń psychosomatycznych, zaburzeń odżywiania oraz zwią­zanych z nimi trudności emocjonalnych.",
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
    <section id="oferta" className="py-24 bg-earth-beige-100">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="text-earth-sage-600 font-medium tracking-widest uppercase text-sm mb-4 block">
          Obszary wsparcia
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-earth-brown-900 mb-6">
          W czym mogę Ci pomóc?
        </h2>
        <p className="text-lg text-earth-brown-700 max-w-2xl mx-auto leading-relaxed">
          Oferuję psychoterapię indywidualną i konsultacje dla osób borykających
          się z wyzwaniami emocjonalnymi i życiowymi. Moim zadaniem jest
          towarzyszyć Ci w drodze do zrozumienia ich przyczyn i odnalezienia
          wewnętrznej równowagi.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <article
            key={service.title}
            className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-all border border-earth-beige-200 group"
          >
            <div className="w-14 h-14 bg-earth-sage-50 text-earth-sage-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-earth-sage-600 group-hover:text-white transition-colors duration-500">
              <service.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-earth-brown-800 mb-4">
              {service.title}
            </h3>
            <p className="text-earth-brown-600 leading-relaxed">
              {service.description}
            </p>
          </article>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
        <div className="bg-earth-sage-600/5 rounded-3xl p-8 md:p-12 border border-earth-sage-200">
          <p className="text-earth-brown-800 text-lg mb-6 italic">
            &ldquo;Psychoterapia to nie tylko leczenie zaburzeń, to przede wszystkim
            proces odzyskiwania kontaktu z samym sobą.&rdquo;
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center space-x-2 text-earth-sage-600 font-bold hover:text-earth-sage-700 transition-colors"
          >
            <span>Zarezerwuj termin konsultacji</span>
            <Target size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
