import Link from "next/link";
import { ArrowRight, MessageCircle, Clock3, HandHeart } from "lucide-react";
import { landingPages } from "@/lib/landing-pages";

const ServicesTeaser = () => {
  return (
    <section className="bg-earth-beige-50 py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-earth-sage-600">
            Oferta
          </span>
          <h2 className="mb-4 text-3xl font-bold text-earth-brown-900 sm:text-4xl">
            Z czym możesz przyjść?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-earth-brown-700">
            Możesz zgłosić się zarówno z konkretną trudnością, jak i wtedy, gdy
            trudno Ci jeszcze nazwać to, co się z Tobą dzieje. Wspólnie
            będziemy przyglądać się Twojemu doświadczeniu, potrzebom, relacjom i
            temu, co jest dla Ciebie ważne.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {landingPages.map((page) => {
            const Icon = page.icon;
            return (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="group rounded-2xl border border-earth-beige-200 bg-white p-6 transition-all hover:border-earth-sage-300 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-earth-sage-100 text-earth-sage-600 transition-colors group-hover:bg-earth-sage-600 group-hover:text-earth-beige-50">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 font-bold text-earth-brown-900">{page.title}</h3>
                <p className="text-sm leading-relaxed text-earth-brown-700 line-clamp-3">
                  {page.description}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/oferta"
            className="inline-flex items-center gap-2 font-bold text-earth-sage-600 transition-colors hover:text-earth-sage-700"
          >
            Pełna oferta i informacje organizacyjne
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-12 rounded-3xl border border-earth-sage-200 bg-earth-sage-50/50 p-6 sm:p-8">
          <h3 className="text-center text-xl font-bold text-earth-brown-900">
            Jak wygląda pierwsza konsultacja?
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-5">
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-earth-brown-900">
                <MessageCircle size={16} className="text-earth-sage-600" />
                Kontakt
              </p>
              <p className="text-sm text-earth-brown-700">
                Napisz lub zadzwoń. Odpowiadam i proponuję możliwe terminy.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-5">
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-earth-brown-900">
                <Clock3 size={16} className="text-earth-sage-600" />
                Ustalenie formy
              </p>
              <p className="text-sm text-earth-brown-700">
                Wspólnie wybieramy: Gdańsk, Chojnice albo spotkanie online.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-5">
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-earth-brown-900">
                <HandHeart size={16} className="text-earth-sage-600" />
                Pierwsze spotkanie
              </p>
              <p className="text-sm text-earth-brown-700">
                Omawiamy z czym przychodzisz, zasady współpracy i sprawdzamy, czy ta forma pracy odpowiada Twoim potrzebom.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTeaser;
