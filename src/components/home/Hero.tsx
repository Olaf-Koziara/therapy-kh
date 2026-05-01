"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-earth-beige-50">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-earth-sage-50/50 -z-10 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="inline-block text-earth-sage-600 font-medium tracking-[0.2em] uppercase mb-4 text-sm"
          >
            Gabinet Psychoterapii Gestalt
          </motion.span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-earth-brown-900 leading-[1.1] mb-8">
            Odzyskaj <br />
            <span className="text-earth-sage-600">spokój</span> i <br />
            świadomość
          </h1>
          <p className="text-xl text-earth-brown-700 leading-relaxed max-w-lg mb-10">
            Nazywam się Kamila Helta. Towarzyszę osobom w kryzysie, zmagającym
            się z emocjami oraz uzależnieniami odnaleźć drogę do autentycznego
            życia.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#kontakt"
              className="px-10 py-5 bg-earth-sage-600 text-earth-beige-50 rounded-full hover:bg-earth-sage-700 transition-all shadow-lg hover:shadow-xl font-bold text-center"
            >
              Umów spotkanie
            </a>
            <a
              href="#oferta"
              className="px-10 py-5 border-2 border-earth-brown-200 text-earth-brown-800 rounded-full hover:border-earth-sage-600 hover:text-earth-sage-600 transition-all font-bold text-center"
            >
              Poznaj ofertę
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Decorative frame */}
          <div className="absolute -inset-4 border border-earth-sage-200 rounded-[2.5rem] -z-10" />

          <div className="aspect-[4/5] bg-earth-brown-100 rounded-3xl overflow-hidden shadow-2xl relative">
            <img
              src="/images/kamila-helta.jpg"
              alt="Kamila Helta"
              className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-1000"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-earth-brown-900/10 mix-blend-multiply" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-earth-beige-100 hidden lg:block max-w-xs"
          >
            <p className="text-earth-brown-800 font-medium italic leading-relaxed">
              "Psychoterapia to wyjątkowe spotkanie dwojga ludzi, oparte na
              autentycznym kontakcie."
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-earth-brown-300 hidden md:block"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
