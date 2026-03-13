'use client';

import { motion } from 'framer-motion';
import { Heart, Brain, Users, CloudRain, LifeBuoy, Sparkles, UserMinus, Target } from 'lucide-react';

const services = [
  {
    title: "Kryzys życiowy",
    description: "Wsparcie w trudnych momentach: rozstania, żałoba, nagłe wypadki losowe czy poczucie zagubienia.",
    icon: CloudRain,
  },
  {
    title: "Emocje i Stres",
    description: "Praca nad lękiem, wybuchami złości, przedłużającym się smutkiem i wypaleniem zawodowym.",
    icon: Heart,
  },
  {
    title: "Uzależnienia",
    description: "Specjalistyczna terapia uzależnień od substancji oraz behawioralnych (gry, internet, zakupy).",
    icon: Brain,
  },
  {
    title: "Relacje",
    description: "Trudności w budowaniu bliskich więzi, problemy w relacjach z partnerem lub rodziną.",
    icon: Users,
  },
  {
    title: "Poczucie wartości",
    description: "Praca nad niską samooceną, brakiem wiary w siebie i akceptacją własnej przeszłości.",
    icon: Target,
  },
  {
    title: "Rozwój osobisty",
    description: "Dążenie do lepszego zrozumienia siebie, swoich potrzeb i świadomego podejmowania decyzji.",
    icon: Sparkles,
  }
];

const Services = () => {
  return (
    <section id="oferta" className="py-24 bg-earth-beige-100">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-earth-sage-600 font-medium tracking-widest uppercase text-sm mb-4 block"
        >
          Obszary wsparcia
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-earth-brown-900 mb-6"
        >
          W czym mogę Ci pomóc?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-earth-brown-700 max-w-2xl mx-auto leading-relaxed"
        >
          Każdy z nas przechodzi przez trudne chwile. Moim zadaniem jest towarzyszyć Ci w drodze do zrozumienia ich przyczyn i odnalezienia wewnętrznej równowagi.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-all border border-earth-beige-200 group"
          >
            <div className="w-14 h-14 bg-earth-sage-50 text-earth-sage-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-earth-sage-600 group-hover:text-white transition-colors duration-500">
              <service.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-earth-brown-800 mb-4">{service.title}</h3>
            <p className="text-earth-brown-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
        <div className="bg-earth-sage-600/5 rounded-3xl p-8 md:p-12 border border-earth-sage-200">
          <p className="text-earth-brown-800 text-lg mb-6 italic">
            "Psychoterapia to nie tylko leczenie zaburzeń, to przede wszystkim proces odzyskiwania kontaktu z samym sobą."
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
