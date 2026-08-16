import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

const HomeCTA = () => {
  return (
    <section className="bg-gradient-to-b from-earth-beige-100 to-white py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-earth-brown-900 sm:text-4xl">
          Jeśli chcesz, możemy zacząć od spotkania.
        </h2>
        <p className="mb-8 text-lg text-earth-brown-700">
          Pierwsza konsultacja jest przestrzenią, w której możesz opowiedzieć o
          tym, z czym przychodzisz, zadać pytania i sprawdzić, czy ten sposób
          pracy jest dla Ciebie odpowiedni.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-2xl bg-earth-sage-600 px-8 py-4 font-bold text-earth-beige-50 shadow-lg shadow-earth-sage-600/20 transition-all hover:bg-earth-sage-700"
          >
            <CalendarCheck size={18} />
            Umów konsultację
          </Link>
          <a
            href="tel:889470294"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-earth-brown-200 bg-white px-7 py-4 font-bold text-earth-brown-800 transition-all hover:border-earth-sage-600 hover:text-earth-sage-600"
          >
            <Phone size={18} className="text-earth-sage-600" />
            889 470 294
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
