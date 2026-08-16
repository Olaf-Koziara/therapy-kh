import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Jak wygląda pierwsza konsultacja psychoterapeutyczna?",
    answer:
      "Pierwsze spotkanie jest okazją do poznania tego, z czym przychodzisz, omówienia zasad współpracy oraz sprawdzenia, czy ta forma pracy odpowiada Twoim potrzebom. Wspólnie podejmiemy decyzję dotyczącą dalszych spotkań.",
  },
  {
    question: "Czy podczas pierwszego spotkania muszę zdecydować się na terapię?",
    answer:
      "Nie. Pierwsza konsultacja jest również okazją do tego, żeby sprawdzić, jak jest Ci w kontakcie ze mną, zadać pytania i wspólnie zastanowić się, czy ta forma pracy odpowiada Twoim potrzebom.",
  },
  {
    question: "Dla kogo jest psychoterapia Gestalt?",
    answer:
      "Psychoterapia Gestalt może być odpowiednia zarówno dla osób doświadczających kryzysu, lęku, obniżonego nastroju, napięcia czy trudności w relacjach, jak i dla tych, które chcą lepiej poznawać siebie. W terapii ważne są aktualne doświadczenie, relacja terapeutyczna, emocje, ciało, potrzeby i sposób tworzenia kontaktu z innymi.",
  },
  {
    question: "Czy prowadzisz psychoterapię online?",
    answer:
      "Tak. Sesje online są dostępne dla osób z całej Polski. Ta forma sprawdza się szczególnie wtedy, gdy mieszkasz z dala od naszych gabinetów w Gdańsku czy Chojnicach, często podróżujesz lub potrzebujesz większej elastyczności.",
  },
  {
    question: "Czy terapia jest poufna?",
    answer:
      "Tak. Proces terapeutyczny opiera się na poufności, szacunku i bezpieczeństwie. Zasady współpracy oraz wyjątki wynikające z prawa omawiane są podczas konsultacji.",
  },
  {
    question: "Jak umówić termin?",
    answer:
      "Najprościej skorzystać z formularza kontaktowego, zadzwonić pod numer 889 470 294 albo napisać na adres kamila@helta.pl. W odpowiedzi ustalany jest dogodny termin konsultacji.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-earth-beige-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-earth-sage-600">
            Najczęstsze pytania
          </span>
          <h2 className="text-4xl font-bold text-earth-brown-900 md:text-5xl">
            Zanim umówisz pierwszą konsultację
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-earth-beige-200 bg-white shadow-sm transition-all duration-300 hover:border-earth-beige-300 hover:bg-earth-beige-100/50 hover:shadow-md"
            >
              <summary className="flex w-full cursor-pointer list-none items-center justify-between p-6 text-lg font-bold text-earth-brown-900 outline-none">
                <span className="pr-4">{faq.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-earth-brown-500 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6">
                <p className="leading-relaxed text-earth-brown-700">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
