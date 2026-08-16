import Link from "next/link";
import { ArrowRight, ShieldCheck, CircleCheckBig, MapPin } from "lucide-react";

const AboutTeaser = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-earth-sage-600">
          O mnie
        </span>
        <h2 className="mb-6 text-3xl font-bold text-earth-brown-900 sm:text-4xl">
          Miejsce na spotkanie ze sobą
        </h2>
        <p className="mb-4 text-lg leading-relaxed text-earth-brown-700">
          Jestem certyfikowaną psychoterapeutką Gestalt oraz specjalistką
          psychoterapii uzależnień. Od 2009 roku towarzyszę osobom dorosłym w
          lepszym rozumieniu siebie, swoich doświadczeń i relacji z innymi.
        </p>
        <p className="mb-6 text-base leading-relaxed text-earth-brown-700">
          W pracy ważne są dla mnie autentyczny kontakt, uważność na to, co pojawia
          się tu i teraz, oraz poszanowanie Twojego tempa i granic.
        </p>
        <div className="mb-8 grid gap-3 text-left sm:grid-cols-2">
          <p className="inline-flex items-center gap-2 rounded-xl border border-earth-sage-100 bg-earth-sage-50/50 px-4 py-3 text-sm text-earth-brown-800">
            <ShieldCheck size={16} className="text-earth-sage-600" />
            Certyfikat EAGT · Superwizja · Kodeks etyczny
          </p>
          <p className="inline-flex items-center gap-2 rounded-xl border border-earth-sage-100 bg-earth-sage-50/50 px-4 py-3 text-sm text-earth-brown-800">
            <MapPin size={16} className="text-earth-sage-600" />
            Spotkania: Gdańsk · Chojnice · Online
          </p>
          <p className="inline-flex items-center gap-2 rounded-xl border border-earth-sage-100 bg-earth-sage-50/50 px-4 py-3 text-sm text-earth-brown-800 sm:col-span-2">
            <CircleCheckBig size={16} className="text-earth-sage-600" />
            Jasne zasady współpracy i bezpieczna przestrzeń od pierwszego spotkania.
          </p>
        </div>
        <Link
          href="/o-mnie"
          className="inline-flex items-center gap-2 font-bold text-earth-sage-600 transition-colors hover:text-earth-sage-700"
        >
          Poznaj mnie i moje kwalifikacje
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default AboutTeaser;
