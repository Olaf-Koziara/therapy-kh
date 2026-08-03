import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Gestalt = () => {
  return (
    <section id="gestalt" className="bg-blue-600 py-24 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <div className="relative order-2 md:order-1">
          <div className="flex aspect-square items-center justify-center rounded-full border border-blue-400/30 bg-blue-700/50 p-12">
            <div className="text-center">
              <h3 className="mb-4 font-serif text-5xl italic text-white/60 md:text-6xl">
                &ldquo;Tu i teraz&rdquo;
              </h3>
              <p className="text-white/80">Klucz do świadomej obecności</p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="mb-8 text-4xl font-bold text-white">Nurt Gestalt</h2>
          <p className="mb-6 text-lg leading-relaxed text-white/90">
            Psychoterapia Gestalt to holistyczne podejście do człowieka.
            Postrzega nas jako niepodzielną całość, łącząc emocje, intelekt,
            ciało i wartości.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-white/90">
            W procesie terapeutycznym skupiamy się na poszerzaniu świadomości.
            Pomaga to zrozumieć, co dzieje się z nami w teraźniejszości i jak
            nasze wzorce z przeszłości wpływają na obecne relacje i wybory.
          </p>
          <blockquote className="mb-8 border-l-4 border-blue-200 pl-6 text-xl italic text-white/95">
            &ldquo;To spotkanie dwojga ludzi, oparte na otwartym, szczerym i
            autentycznym kontakcie.&rdquo;
          </blockquote>
          <Link
            href="/psychoterapia-gestalt"
            className="inline-flex items-center gap-2 font-bold text-white underline-offset-4 hover:underline"
          >
            Więcej o psychoterapii Gestalt
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gestalt;
