import Link from "next/link";
import { ArrowRight, ShieldCheck, CircleCheckBig, MapPin } from "lucide-react";

const AboutTeaser = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-blue-600">
          O mnie
        </span>
        <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">
          Twoje bezpieczne miejsce na drodze do siebie
        </h2>
        <p className="mb-4 text-lg leading-relaxed text-slate-600">
          Jestem certyfikowaną psychoterapeutką Gestalt oraz specjalistką
          psychoterapii uzależnień. Od 2009 roku towarzyszę osobom dorosłym w
          odzyskiwaniu równowagi – w Gdańsku, Chojnicach i online.
        </p>
        <div className="mb-8 grid gap-3 text-left sm:grid-cols-2">
          <p className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-sm text-slate-700">
            <ShieldCheck size={16} className="text-blue-600" />
            Certyfikat EAGT · Superwizja · Kodeks etyczny
          </p>
          <p className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-sm text-slate-700">
            <MapPin size={16} className="text-blue-600" />
            Spotkania: Gdańsk · Chojnice · Online
          </p>
          <p className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-sm text-slate-700 sm:col-span-2">
            <CircleCheckBig size={16} className="text-blue-600" />
            Jasne zasady współpracy i bezpieczna przestrzeń od pierwszego spotkania.
          </p>
        </div>
        <Link
          href="/o-mnie"
          className="inline-flex items-center gap-2 font-bold text-blue-600 transition-colors hover:text-blue-700"
        >
          Poznaj mnie i moje kwalifikacje
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default AboutTeaser;
