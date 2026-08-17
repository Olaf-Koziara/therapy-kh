import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  CalendarCheck,
  ShieldCheck,
  MapPin,
  MessageCircle,
  HandHeart,
  Clock3,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-b from-earth-beige-100/65 via-earth-beige-50 to-white pt-28 pb-16">
      <div className="absolute right-0 top-0 hidden h-full w-1/3 bg-earth-beige-100/50 lg:block -z-10" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-earth-sage-200 bg-earth-sage-100 px-4 py-1.5 text-xs sm:text-sm font-semibold text-earth-sage-700 shadow-sm">
            <MapPin size={14} className="text-earth-sage-600 shrink-0" />
            <span>GABINET PSYCHOTERAPII W GDAŃSKU</span>
          </div>

          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-earth-brown-900">
            <span className="sr-only">Gabinet Psychoterapii w Gdańsku - Kamila Helta</span>
            Zatrzymaj się. <br />
            <span className="text-earth-sage-600">Bądź bliżej siebie.</span>
          </h1>

          <p className="mb-8 max-w-xl text-lg sm:text-xl leading-relaxed text-earth-brown-700 font-normal">
            Jestem tu, by Ci towarzyszyć. W bezpiecznej i pełnej akceptacji
            przestrzeni możesz przyglądać się temu, czego doświadczasz, lepiej
            rozpoznawać swoje potrzeby i odkrywać, co jest dla Ciebie ważne.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-earth-sage-600 px-8 py-4 text-center font-bold text-earth-beige-50 shadow-lg shadow-earth-sage-600/25 transition-all hover:bg-earth-sage-700 hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <CalendarCheck size={20} />
              <span>Umów konsultację</span>
            </Link>
            
            <a
              href="tel:889470294"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-earth-brown-200 bg-white px-7 py-4 text-center font-bold text-earth-brown-800 transition-all hover:border-earth-sage-600 hover:text-earth-sage-600 shadow-sm hover:shadow-md"
            >
              <Phone size={18} className="text-earth-sage-600" />
              <span>Zadzwoń: 889 470 294</span>
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-earth-beige-300 bg-earth-beige-100/70 p-4">
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-earth-brown-800">
                <MessageCircle size={16} className="text-earth-sage-600" />
                Krok 1
              </p>
              <p className="text-sm leading-relaxed text-earth-brown-700">
                Kontakt telefoniczny lub formularz.
              </p>
            </div>
            <div className="rounded-xl border border-earth-beige-300 bg-earth-beige-100/70 p-4">
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-earth-brown-800">
                <Clock3 size={16} className="text-earth-sage-600" />
                Krok 2
              </p>
              <p className="text-sm leading-relaxed text-earth-brown-700">
                Ustalamy termin i formę spotkania.
              </p>
            </div>
            <div className="rounded-xl border border-earth-beige-300 bg-earth-beige-100/70 p-4">
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-earth-brown-800">
                <HandHeart size={16} className="text-earth-sage-600" />
                Krok 3
              </p>
              <p className="text-sm leading-relaxed text-earth-brown-700">
                Pierwsza konsultacja i sprawdzanie, czy ta forma pracy odpowiada Twoim potrzebom.
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs sm:text-sm text-earth-brown-600 border-t border-earth-beige-200 pt-6">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-earth-sage-600 shrink-0" />
              <span>Certyfikat EAGT & Superwizja</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-earth-sage-600" />
              <span>Doświadczenie od 2009 r.</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[2.5rem] border-2 border-earth-sage-200/80 -z-10" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-earth-beige-200 shadow-2xl border border-earth-beige-300/60">
            <Image
              src="/images/kamila-helta.webp"
              alt="Kamila Helta, psychoterapeutka Gestalt i specjalistka terapii uzależnień"
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 500px, (min-width: 640px) 70vw, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-brown-900/40 via-transparent to-transparent" aria-hidden="true" />
          </div>

          <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs rounded-2xl border border-earth-sage-200 bg-white/95 backdrop-blur-md p-6 shadow-xl">
            <p className="font-medium italic leading-relaxed text-earth-brown-800 text-sm">
              &ldquo;Psychoterapia to wyjątkowe spotkanie dwojga ludzi, oparte na autentycznym kontakcie, szacunku i uważności.&rdquo;
            </p>
            <p className="mt-2 text-xs font-bold text-earth-sage-600">— Kamila Helta</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
