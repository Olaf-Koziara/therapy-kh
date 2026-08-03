import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

const HomeCTA = () => {
  return (
    <section className="bg-gradient-to-b from-[#f7f1e8] to-white py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Możesz zacząć od jednego spokojnego kroku.
        </h2>
        <p className="mb-8 text-lg text-slate-600">
          Napisz lub zadzwoń. Wspólnie ustalimy dogodny termin konsultacji w
          Gdańsku, Chojnicach albo online i omówimy, czego teraz najbardziej
          potrzebujesz.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700"
          >
            <CalendarCheck size={18} />
            Umów konsultację
          </Link>
          <a
            href="tel:889470294"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-7 py-4 font-bold text-slate-800 transition-all hover:border-blue-600 hover:text-blue-600"
          >
            <Phone size={18} className="text-blue-600" />
            889 470 294
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
