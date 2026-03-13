'use client';

import { motion } from 'framer-motion';

const Gestalt = () => {
  return (
    <section id="gestalt" className="py-24 bg-earth-sage-600 text-earth-beige-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-2 md:order-1"
        >
          <div className="aspect-square bg-earth-sage-700/50 rounded-full flex items-center justify-center p-12 border border-earth-sage-400/30">
             <div className="text-center">
                <h4 className="text-6xl font-serif italic mb-4 text-white/60">"Tu i teraz"</h4>
                <p className="text-white/80">Klucz do świadomej obecności</p>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <h2 className="text-4xl font-bold mb-8 text-white">Nurt Gestalt</h2>
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            Psychoterapia Gestalt to holistyczne podejście do człowieka. Postrzega nas jako niepodzielną całość, łącząc emocje, intelekt, ciało i wartości.
          </p>
          <p className="text-lg text-white/90 leading-relaxed mb-8">
            W procesie terapeutycznym skupiamy się na poszerzaniu świadomości. Pomaga to zrozumieć, co dzieje się z nami w teraźniejszości i jak nasze wzorce z przeszłości wpływają na obecne relacje i wybory.
          </p>
          <blockquote className="border-l-4 border-earth-beige-300 pl-6 italic text-xl text-white/95 mb-8">
            "To spotkanie dwojga ludzi, oparte na otwartym, szczerym i autentycznym kontakcie."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Gestalt;
