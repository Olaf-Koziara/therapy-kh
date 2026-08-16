import Link from "next/link";
import { Heart, Brain, Users, CloudRain, Sparkles, Target } from "lucide-react";

const services = [
  {
    title: "Obniżony nastrój i depresja",
    description:
      "Przyglądanie się doświadczeniu smutku, pustki, wycofania, utraty energii lub sensu oraz temu, jak przeżywasz siebie i swoje relacje.",
    icon: Heart,
  },
  {
    title: "Lęk, niepokój i napięcie",
    description:
      "Wspólne poznawanie tego, jak doświadczasz lęku — w emocjach, myślach i ciele. Przyglądanie się temu, kiedy się pojawia i czego możesz wówczas potrzebować.",
    icon: CloudRain,
  },
  {
    title: "Przeciążenie i wypalenie",
    description:
      "Zatrzymanie się przy doświadczeniu zmęczenia, napięcia i przeciążenia. Rozpoznawanie własnych potrzeb i granic oraz sposobu, w jaki pozostajesz w kontakcie ze sobą.",
    icon: Target,
  },
  {
    title: "Ciało i trudności psychosomatyczne",
    description:
      "Przyglądanie się temu, jak przeżywane doświadczenia znajdują wyraz w ciele oraz co pojawiające się sygnały mogą mówić o Twoim aktualnym sposobie funkcjonowania.",
    icon: Brain,
  },
  {
    title: "Trudności w relacjach",
    description:
      "Przyglądanie się temu, jak tworzysz kontakt z innymi, czego potrzebujesz w relacjach, jak doświadczasz bliskości i dystansu oraz w jaki sposób rozpoznajesz i stawiasz własne granice.",
    icon: Users,
  },
  {
    title: "Kryzys, strata i trudne doświadczenia",
    description:
      "Towarzyszenie w doświadczeniu rozstania, żałoby, przemocy, nagłych zmian i innych trudnych sytuacji — z uważnością na to, co przeżywasz i czego potrzebujesz.",
    icon: Sparkles,
  },
];

const Services = () => {
  return (
    <section id="oferta" className="bg-earth-beige-50 py-24">
      <div className="mx-auto mb-16 max-w-7xl px-6 text-center">
        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-earth-sage-600">
          Obszary wsparcia
        </span>
        <h2 className="mb-6 text-4xl font-bold text-earth-brown-900 md:text-5xl">
          Z czym możesz przyjść?
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-earth-brown-700">
          Do psychoterapii możesz przyjść zarówno wtedy, gdy doświadczasz
          konkretnej trudności, jak i wtedy, gdy trudno Ci jeszcze nazwać to,
          co się z Tobą dzieje. Wspólnie będziemy przyglądać się Twojemu
          doświadczeniu, relacjom oraz temu, czego potrzebujesz.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group rounded-3xl border border-earth-beige-200 bg-white p-10 shadow-sm transition-all hover:shadow-md"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-earth-sage-100 text-earth-sage-600 transition-colors duration-500 group-hover:bg-earth-sage-600 group-hover:text-earth-beige-50">
              <service.icon size={28} />
            </div>
            <h3 className="mb-4 text-xl font-bold text-earth-brown-800">
              {service.title}
            </h3>
            <p className="leading-relaxed text-earth-brown-700">
              {service.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 text-center">
        <div className="rounded-3xl border border-earth-sage-200 bg-earth-sage-50/60 p-8 md:p-12">
          <p className="mb-6 text-lg italic text-earth-brown-800">
            &ldquo;Psychoterapia to nie tylko leczenie zaburzeń, to przede
            wszystkim proces odzyskiwania kontaktu z samym sobą.&rdquo;
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center space-x-2 font-bold text-earth-sage-600 transition-colors hover:text-earth-sage-700"
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
