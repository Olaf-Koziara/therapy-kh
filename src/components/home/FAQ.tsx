const faqs = [
  {
    question: "Jak wygląda pierwsza konsultacja psychoterapeutyczna?",
    answer:
      "Pierwsze spotkanie służy poznaniu sytuacji, potrzeb i oczekiwań. To także czas na pytania o zasady współpracy, poufność, częstotliwość sesji i możliwe kierunki dalszej pracy.",
  },
  {
    question: "Czy prowadzisz psychoterapię online?",
    answer:
      "Tak. Sesje online są dostępne dla osób z całej Polski. Ta forma sprawdza się szczególnie wtedy, gdy mieszkasz poza Gdańskiem, często podróżujesz lub potrzebujesz większej elastyczności.",
  },
  {
    question: "Dla kogo jest psychoterapia Gestalt?",
    answer:
      "Psychoterapia Gestalt może wspierać osoby doświadczające kryzysu, lęku, obniżonego nastroju, trudności w relacjach, napięcia, wypalenia, objawów psychosomatycznych lub potrzeby lepszego kontaktu ze sobą.",
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
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-earth-sage-600">
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
              className="group rounded-2xl border border-earth-beige-200 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-lg font-bold text-earth-brown-900">
                {faq.question}
              </summary>
              <p className="mt-4 leading-relaxed text-earth-brown-700">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
