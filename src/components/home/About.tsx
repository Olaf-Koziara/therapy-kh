'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Award, BookOpen, Clock, Heart, Target } from 'lucide-react';

const About = () => {
  const credentials = [
    { text: "Certyfikat Psychoterapeutki Gestalt EAGT", icon: Award },
    { text: "Certyfikat specjalisty terapii uzależnień", icon: Award },
    { text: "Studia magisterskie - Pedagogika i Psychologia", icon: BookOpen },
    { text: "Doświadczenie zawodowe od 2009 roku", icon: Clock }
  ];

  return (
    <section id="o-mnie" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <span className="text-earth-sage-600 font-medium tracking-widest uppercase text-sm mb-4 block">O mnie</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-earth-brown-900 leading-tight">Zrozumienie i Akceptacja</h2>
            <p className="text-lg text-earth-brown-700 leading-relaxed mb-6">
              Jestem certyfikowanym psychoterapeutą Gestalt oraz specjalistą psychoterapii uzależnień. Od kilkunastu lat wspieram moich Klientów w procesie poznawania siebie, budzenia świadomości i brania odpowiedzialności za własne życie.
            </p>
            <p className="text-lg text-earth-brown-700 leading-relaxed mb-10">
              Moja praca to przede wszystkim spotkanie dwojga ludzi oparte na autentyczności i szacunku. Stale podnoszę swoje kompetencje, biorąc udział w licznych szkoleniach, a moją pracę poddaję regularnej superwizji u certyfikowanych specjalistów.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="mt-1 bg-earth-sage-50 p-2 rounded-lg text-earth-sage-600">
                    <item.icon size={18} />
                  </div>
                  <span className="text-earth-brown-800 font-medium text-sm leading-snug">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="aspect-square bg-earth-sage-50 rounded-[2rem] overflow-hidden flex items-center justify-center p-8 border border-earth-sage-100 group">
                   <img
                    src="/images/tree-logo.svg"
                    className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    alt="symbol drzewa"
                   />
                </div>
                <div className="aspect-[3/4] bg-earth-beige-100 rounded-[2rem] shadow-inner flex items-center justify-center">
                  <Heart className="text-earth-beige-300" size={48} />
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-[3/4] bg-earth-brown-50 rounded-[2rem] shadow-sm border border-earth-brown-100 flex items-center justify-center">
                   <Target className="text-earth-brown-200" size={48} />
                </div>
                <div className="aspect-square bg-earth-sage-100 rounded-[2rem] shadow-sm flex items-center justify-center">
                   <BookOpen className="text-earth-sage-200" size={48} />
                </div>
              </div>
            </div>
            {/* Background design element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-earth-beige-50/50 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
