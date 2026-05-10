import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-earth-beige-50 pt-20">
      <div className="absolute right-0 top-0 hidden h-full w-1/3 bg-earth-sage-50/50 md:block" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 lg:py-20">
        <div>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-earth-sage-600">
            Gabinet psychoterapii Gestalt w Gdańsku
          </span>
          <h1 className="mb-8 text-4xl font-bold leading-[1.08] text-earth-brown-900 sm:text-5xl lg:text-7xl">
            Psychoterapia Gestalt i terapia uzależnień w Gdańsku oraz online
          </h1>
          <p className="mb-8 max-w-xl text-xl leading-relaxed text-earth-brown-700">
            Nazywam się Kamila Helta. Pomagam osobom w kryzysie, w trudnościach
            emocjonalnych, relacyjnych i związanych z uzależnieniami odzyskać
            spokój, kontakt ze sobą i większą świadomość.
          </p>
          <div className="mb-8 grid gap-3 text-sm text-earth-brown-700 sm:grid-cols-3">
            <div className="rounded-2xl border border-earth-beige-200 bg-white/70 p-4">
              <strong className="block text-earth-brown-900">Od 2009 roku</strong>
              doświadczenia w pomocy psychologicznej
            </div>
            <div className="rounded-2xl border border-earth-beige-200 bg-white/70 p-4">
              <strong className="block text-earth-brown-900">Certyfikaty</strong>
              Gestalt EAGT i terapia uzależnień
            </div>
            <div className="rounded-2xl border border-earth-beige-200 bg-white/70 p-4">
              <strong className="block text-earth-brown-900">Gdańsk i online</strong>
              konsultacje dla osób z całej Polski
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#kontakt"
              className="rounded-full bg-earth-sage-600 px-8 py-4 text-center font-bold text-earth-beige-50 shadow-lg transition-all hover:bg-earth-sage-700 hover:shadow-xl"
            >
              Umów spotkanie
            </a>
            <a
              href="tel:889470294"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-earth-brown-200 px-8 py-4 text-center font-bold text-earth-brown-800 transition-all hover:border-earth-sage-600 hover:text-earth-sage-600"
            >
              <Phone size={18} />
              Zadzwoń
            </a>
            <a
              href="mailto:kamila@helta.pl"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-earth-brown-200 px-8 py-4 text-center font-bold text-earth-brown-800 transition-all hover:border-earth-sage-600 hover:text-earth-sage-600"
            >
              <Mail size={18} />
              Napisz
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 rounded-[2rem] border border-earth-sage-200 sm:-inset-4 sm:rounded-[2.5rem]" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-earth-brown-100 shadow-2xl">
            <Image
              src="/images/kamila-helta.jpg"
              alt="Kamila Helta, psychoterapeutka Gestalt i specjalistka terapii uzależnień"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-earth-brown-900/10 mix-blend-multiply" aria-hidden="true" />
          </div>

          <div className="absolute -bottom-8 left-4 hidden max-w-xs rounded-2xl border border-earth-beige-100 bg-white p-8 shadow-xl lg:block">
            <p className="font-medium italic leading-relaxed text-earth-brown-800">
              &ldquo;Psychoterapia to wyjątkowe spotkanie dwojga ludzi, oparte na
              autentycznym kontakcie.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
