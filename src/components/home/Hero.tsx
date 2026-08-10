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
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-b from-[#f5f0e8]/65 via-[#fefcf9] to-white pt-28 pb-16">
      <div className="absolute right-0 top-0 hidden h-full w-1/3 bg-[#f1ebdf]/50 lg:block -z-10" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-700 shadow-sm">
            <MapPin size={14} className="text-blue-600 shrink-0" />
            <span>GABINET PSYCHOTERAPII W GDAŃSKU</span>
          </div>

          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
            <span className="sr-only">Gabinet Psychoterapii w Gdańsku - Kamila Helta</span>
            Zatrzymaj się. <br />
            <span className="text-blue-600">Bądź bliżej siebie.</span>
          </h1>

          <p className="mb-8 max-w-xl text-lg sm:text-xl leading-relaxed text-slate-600 font-normal">
            Jestem tu, by Ci towarzyszyć. W bezpiecznej i pełnej akceptacji
            przestrzeni możesz przyglądać się temu, czego doświadczasz, lepiej
            rozpoznawać swoje potrzeby i odkrywać, co jest dla Ciebie ważne.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-center font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <CalendarCheck size={20} />
              <span>Umów konsultację</span>
            </Link>
            
            <a
              href="tel:889470294"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-7 py-4 text-center font-bold text-slate-800 transition-all hover:border-blue-600 hover:text-blue-600 shadow-sm hover:shadow-md"
            >
              <Phone size={18} className="text-blue-600" />
              <span>Zadzwoń: 889 470 294</span>
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[#e9dfcf] bg-[#fdf8f0] p-4">
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                <MessageCircle size={16} className="text-blue-600" />
                Krok 1
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Kontakt telefoniczny lub formularz.
              </p>
            </div>
            <div className="rounded-xl border border-[#e9dfcf] bg-[#fdf8f0] p-4">
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                <Clock3 size={16} className="text-blue-600" />
                Krok 2
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Ustalamy termin i formę spotkania.
              </p>
            </div>
            <div className="rounded-xl border border-[#e9dfcf] bg-[#fdf8f0] p-4">
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                <HandHeart size={16} className="text-blue-600" />
                Krok 3
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Pierwsza konsultacja i sprawdzanie, czy ta forma pracy odpowiada Twoim potrzebom.
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs sm:text-sm text-slate-500 border-t border-slate-100 pt-6">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-blue-600 shrink-0" />
              <span>Certyfikat EAGT & Superwizja</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Doświadczenie od 2009 r.</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[2.5rem] border-2 border-blue-100/80 -z-10" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 shadow-2xl border border-slate-200/60">
            <Image
              src="/images/kamila-helta.jpeg"
              alt="Kamila Helta, psychoterapeutka Gestalt i specjalistka terapii uzależnień"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" aria-hidden="true" />
          </div>

          <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs rounded-2xl border border-blue-100 bg-white/95 backdrop-blur-md p-6 shadow-xl">
            <p className="font-medium italic leading-relaxed text-slate-800 text-sm">
              &ldquo;Psychoterapia to wyjątkowe spotkanie dwojga ludzi, oparte na autentycznym kontakcie, szacunku i uważności.&rdquo;
            </p>
            <p className="mt-2 text-xs font-bold text-blue-600">— Kamila Helta</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
