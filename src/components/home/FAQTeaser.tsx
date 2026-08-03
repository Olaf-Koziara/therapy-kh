import Link from "next/link";
import { ArrowRight } from "lucide-react";

const previewFaqs = [
  {
    question: "Jak wygląda pierwsza konsultacja?",
    answer:
      "Pierwsze spotkanie służy poznaniu sytuacji, potrzeb i oczekiwań oraz omówieniu zasad współpracy.",
  },
  {
    question: "Czy prowadzisz psychoterapię online?",
    answer:
      "Tak. Sesje online są dostępne dla osób z całej Polski – obok gabinetów w Gdańsku i Chojnicach.",
  },
];

const FAQTeaser = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-blue-600">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Najczęstsze pytania
          </h2>
        </div>

        <div className="mb-8 space-y-4">
          {previewFaqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6"
            >
              <h3 className="mb-2 font-bold text-slate-900">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 font-bold text-blue-600 transition-colors hover:text-blue-700"
          >
            Wszystkie pytania
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQTeaser;
