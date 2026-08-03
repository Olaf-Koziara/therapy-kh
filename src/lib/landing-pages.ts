import { Brain, HeartHandshake, Laptop, Leaf } from "lucide-react";

export const landingPages = [
  {
    slug: "psychoterapia",
    icon: HeartHandshake,
    title: "Psychoterapia",
    description:
      "Psychoterapia indywidualna stacjonarnie w Gdańsku i Chojnicach oraz online. Wsparcie dla osób w kryzysie, zmagających się z lękiem, depresją, stresem i trudnościami relacyjnymi.",
    h1: "Psychoterapia (Gdańsk / Chojnice / Online)",
    lead:
      "Jeśli przechodzisz przez trudny moment, czujesz napięcie, smutek, lęk albo potrzebujesz uporządkować ważne doświadczenia, psychoterapia stacjonarna w Gdańsku lub Chojnicach oraz sesje online mogą pomóc Ci odzyskać większą świadomość i sprawczość.",
    sections: [
      "Pracuję z osobami dorosłymi doświadczającymi kryzysu życiowego, przeciążenia emocjonalnego, problemów w relacjach, wypalenia, obniżonego nastroju i objawów psychosomatycznych.",
      "Pierwsze spotkanie pozwala spokojnie omówić sytuację i sprawdzić, jaka forma pomocy (stacjonarnie w Gdańsku lub Chojnicach czy online) będzie najbardziej adekwatna.",
    ],
    faq: [
      {
        question: "Gdzie odbywają się sesje stacjonarne?",
        answer:
          "Sesje stacjonarne odbywają się w gabinetach w Gdańsku oraz Chojnicach. Dostępna jest również psychoterapia online dla osób z całej Polski i z zagranicy.",
      },
      {
        question: "Kiedy warto zgłosić się na psychoterapię?",
        answer:
          "Warto zgłosić się wtedy, gdy trudności zaczynają wpływać na codzienne funkcjonowanie, relacje, pracę, sen, ciało lub poczucie sensu.",
      },
      {
        question: "Czy pierwsza konsultacja zobowiązuje do terapii?",
        answer:
          "Nie. To spotkanie służy poznaniu potrzeb, zasad współpracy i wspólnemu ustaleniu możliwego kierunku dalszej pracy.",
      },
    ],
  },
  {
    slug: "psychoterapia-online",
    icon: Laptop,
    title: "Psychoterapia online",
    description:
      "Psychoterapia online dla osób z całej Polski. Bezpieczne konsultacje psychoterapeutyczne w nurcie Gestalt bez konieczności dojazdu do gabinetu.",
    h1: "Psychoterapia online dla osób z całej Polski",
    lead:
      "Sesje online dają możliwość regularnej pracy terapeutycznej, gdy mieszkasz poza Gdańskiem czy Chojnicami, często podróżujesz albo potrzebujesz większej elastyczności.",
    sections: [
      "Psychoterapia online może być dobrym rozwiązaniem dla osób, które chcą zadbać o ciągłość procesu terapeutycznego niezależnie od miejsca pobytu.",
      "Podczas konsultacji dbamy o poufność, stabilne warunki rozmowy i jasne zasady kontaktu.",
    ],
    faq: [
      {
        question: "Czy psychoterapia online jest skuteczna?",
        answer:
          "Dla wielu osób jest wartościową formą pracy, szczególnie gdy możliwe jest zapewnienie spokojnego, prywatnego miejsca i regularności spotkań.",
      },
      {
        question: "Czego potrzebuję do sesji online?",
        answer:
          "Potrzebujesz prywatnego miejsca, stabilnego połączenia internetowego oraz urządzenia z kamerą i mikrofonem.",
      },
    ],
  },
  {
    slug: "terapia-uzaleznien",
    icon: Brain,
    title: "Psychoterapia uzależnień",
    description:
      "Terapia uzależnień stacjonarnie w Gdańsku i Chojnicach oraz online. Wsparcie dla osób mierzących się z uzależnieniem, utratą kontroli i nawrotami.",
    h1: "Psychoterapia uzależnień (Gdańsk / Chojnice / Online)",
    lead:
      "Uzależnienie często dotyka wielu obszarów życia: relacji, pracy, zdrowia, poczucia własnej wartości i codziennych decyzji. W terapii stacjonarnej lub online można przyjrzeć się mechanizmom nałogu i odzyskiwać wpływ na swoje życie.",
    sections: [
      "Wspieram osoby, które chcą lepiej zrozumieć swoje zachowania, utrzymać abstynencję, poradzić sobie z nawrotami lub rozpocząć zmianę.",
      "Praca terapeutyczna uwzględnia zarówno aktualne trudności, jak i emocje, relacje oraz wzorce, które utrwalają problem.",
    ],
    faq: [
      {
        question: "Czy muszę być zdecydowana/y na abstynencję?",
        answer:
          "Pierwsza konsultacja może służyć także rozpoznaniu gotowości do zmiany i omówieniu możliwych form wsparcia.",
      },
      {
        question: "Czy prowadzisz terapię uzależnień online?",
        answer:
          "Tak, konsultacje online są możliwe, jeśli ta forma jest adekwatna do sytuacji i zapewnia bezpieczne warunki pracy. Spotkania stacjonarne odbywają się w Gdańsku i Chojnicach.",
      },
    ],
  },
  {
    slug: "psychoterapia-gestalt",
    icon: Leaf,
    title: "Psychoterapia Gestalt",
    description:
      "Psychoterapia Gestalt stacjonarnie w Gdańsku i Chojnicach oraz online. Praca nad świadomością, emocjami, relacjami, granicami i kontaktem ze sobą.",
    h1: "Psychoterapia Gestalt (Gdańsk / Chojnice / Online)",
    lead:
      "Gestalt to podejście, które pomaga lepiej rozumieć siebie w relacji z innymi, rozpoznawać emocje, potrzeby i utrwalone sposoby reagowania.",
    sections: [
      "W pracy terapeutycznej ważne są doświadczenie tu i teraz, kontakt, ciało, emocje, myśli oraz osobista odpowiedzialność za wybory.",
      "Ten nurt może być pomocny przy trudnościach relacyjnych, napięciu, lęku, obniżonym nastroju, kryzysie oraz potrzebie głębszego poznania siebie.",
    ],
    faq: [
      {
        question: "Czym różni się Gestalt od innych nurtów?",
        answer:
          "Gestalt kładzie nacisk na świadomość aktualnego doświadczenia, kontakt terapeutyczny i rozumienie człowieka jako całości.",
      },
      {
        question: "Czy Gestalt jest tylko dla osób w kryzysie?",
        answer:
          "Nie. Psychoterapia Gestalt może wspierać także osoby, które chcą lepiej rozumieć siebie, swoje relacje i powtarzające się wzorce.",
      },
    ],
  },
];

export type LandingPage = (typeof landingPages)[number];
