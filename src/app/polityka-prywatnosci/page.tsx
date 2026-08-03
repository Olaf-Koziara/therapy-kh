import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Database,
  FileText,
  Lock,
  Mail,
  Scale,
  Shield,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Polityka prywatności | Kamila Helta",
  description:
    "Polityka prywatności gabinetu psychoterapii. Informacje o administratorze danych, celach przetwarzania, prawach osób oraz plikach cookies.",
  robots: {
    index: false,
    follow: true,
  },
};

const quickFacts = [
  {
    icon: Shield,
    label: "Administrator",
    value: "Gabinet Psychoterapii Kamila Helta",
  },
  {
    icon: Mail,
    label: "Kontakt w sprawie danych",
    value: "kamila@helta.pl",
  },
  {
    icon: Clock,
    label: "Ostatnia aktualizacja",
    value: "27.07.2026 r.",
  },
];

const processingPurposes = [
  {
    purpose: "Obsługa zapytań przesłanych przez formularz kontaktowy, e-mail lub telefon.",
    data: "imię i nazwisko, adres e-mail, numer telefonu, treść wiadomości oraz inne dane podane dobrowolnie.",
    basis:
      "art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes administratora polegający na obsłudze korespondencji i udzieleniu odpowiedzi; w zakresie danych szczególnych kategorii podanych z inicjatywy osoby kontaktującej się - art. 9 ust. 2 lit. a RODO, jeśli wymagana jest wyraźna zgoda.",
    period:
      "przez czas potrzebny do udzielenia odpowiedzi, a następnie przez okres archiwizacji korespondencji (do 12 miesięcy) lub do czasu skutecznego wniesienia sprzeciwu.",
  },
  {
    purpose: "Umówienie konsultacji, przygotowanie do świadczenia usług oraz bieżący kontakt organizacyjny.",
    data: "dane identyfikacyjne i kontaktowe, informacje dotyczące terminu spotkania oraz zakresu oczekiwanej pomocy.",
    basis:
      "art. 6 ust. 1 lit. b RODO - działania podejmowane przed zawarciem umowy lub wykonanie umowy; w zakresie danych dotyczących zdrowia - art. 9 ust. 2 lit. h RODO.",
    period:
      "przez czas współpracy, a następnie przez okres wymagany przepisami prawa lub uzasadniony dochodzeniem albo obroną roszczeń.",
  },
  {
    purpose: "Realizacja obowiązków księgowych, podatkowych i rozliczeniowych.",
    data: "dane niezbędne do wystawienia rachunku lub faktury, dane płatności oraz informacje wymagane przepisami prawa.",
    basis:
      "art. 6 ust. 1 lit. c RODO - obowiązek prawny ciążący na administratorze.",
    period:
      "przez okres wymagany przepisami podatkowymi i rachunkowymi (co do zasady 5 lat od końca roku podatkowego).",
  },
  {
    purpose: "Zapewnienie bezpieczeństwa strony internetowej i podstawowa administracja techniczna.",
    data: "adres IP, dane techniczne przeglądarki, informacje o błędach, logi serwera i podstawowe dane eksploatacyjne.",
    basis:
      "art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes administratora polegający na utrzymaniu bezpieczeństwa i prawidłowego działania strony.",
    period:
      "przez okres przechowywania logów (do 30 dni), chyba że dłuższe przechowywanie jest konieczne do wyjaśnienia incydentu.",
  },
];

const rights = [
  "prawo dostępu do danych oraz otrzymania ich kopii,",
  "prawo sprostowania nieprawidłowych lub niekompletnych danych,",
  "prawo żądania usunięcia danych, gdy pozwalają na to przepisy,",
  "prawo ograniczenia przetwarzania,",
  "prawo przenoszenia danych, jeśli przetwarzanie odbywa się na podstawie zgody lub umowy i w sposób zautomatyzowany,",
  "prawo wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,",
  "prawo cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej cofnięciem,",
  "prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.",
];

function Section({
  id,
  eyebrow,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-slate-200 py-12">
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <Icon size={24} />
        </div>
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        </div>
      </div>
      <div className="mt-8 space-y-6 text-slate-700">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50 pt-32">
      <section className="px-6 pb-16 pt-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="mb-10 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 transition-colors hover:text-blue-700"
          >
            Powrót do strony głównej
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-blue-600">
                Informacje o ochronie danych
              </p>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
                Polityka prywatności
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-700">
                Poniższy dokument opisuje zasady przetwarzania danych osobowych
                osób korzystających ze strony internetowej oraz kontaktujących
                się z gabinetem psychoterapeutycznym.
              </p>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-bold text-slate-900">
                Najważniejsze informacje
              </h2>
              <div className="space-y-5">
                {quickFacts.map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="mt-1 text-blue-600">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <Section
            id="administrator"
            eyebrow="01"
            title="Administrator danych"
            icon={UserCheck}
          >
            <p className="leading-relaxed">
              Administratorem danych osobowych jest{" "}
              <strong>Gabinet Psychoterapii Kamila Helta</strong>, NIP:{" "}
              <strong>5551943823</strong>, REGON:{" "}
              <strong>362477753</strong>.
            </p>
            <p className="leading-relaxed">
              W sprawach dotyczących danych osobowych można skontaktować się pod
              adresem e-mail <strong>kamila@helta.pl</strong> lub
              telefonicznie pod numerem <strong>889 470 294</strong>.
            </p>
          </Section>

          <Section
            id="zakres"
            eyebrow="02"
            title="Zakres i źródło danych"
            icon={Database}
          >
            <p className="leading-relaxed">
              Dane osobowe są zbierane przede wszystkim bezpośrednio od osób,
              które korzystają z formularza kontaktowego, wysyłają wiadomość
              e-mail, kontaktują się telefonicznie lub umawiają konsultację.
              Podanie danych jest dobrowolne, ale może być konieczne do
              udzielenia odpowiedzi, umówienia spotkania lub realizacji usługi.
            </p>
            <p className="leading-relaxed">
              W przypadku przekazania informacji dotyczących zdrowia, sytuacji
              życiowej lub innych danych szczególnych kategorii, dane te będą
              wykorzystywane wyłącznie w zakresie niezbędnym do celu kontaktu,
              konsultacji lub świadczenia usługi, zgodnie z właściwą podstawą
              prawną.
            </p>
          </Section>

          <Section
            id="cele"
            eyebrow="03"
            title="Cele, podstawy i okresy przetwarzania"
            icon={Scale}
          >
            <div className="space-y-5">
              {processingPurposes.map((item, index) => (
                <article
                  key={item.purpose}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {index + 1}. {item.purpose}
                  </h3>
                  <dl className="mt-5 space-y-4 text-sm leading-relaxed md:text-base">
                    <div>
                      <dt className="font-semibold text-slate-800">
                        Kategorie danych
                      </dt>
                      <dd className="mt-1 text-slate-700">{item.data}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-800">
                        Podstawa prawna
                      </dt>
                      <dd className="mt-1 text-slate-700">{item.basis}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-800">
                        Okres przechowywania
                      </dt>
                      <dd className="mt-1 text-slate-700">{item.period}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </Section>

          <Section
            id="odbiorcy"
            eyebrow="04"
            title="Odbiorcy danych"
            icon={Lock}
          >
            <p className="leading-relaxed">
              Dane mogą być przekazywane podmiotom wspierającym administratora
              w prowadzeniu strony i obsłudze kontaktu, takim jak dostawcy
              hostingu, poczty elektronicznej, obsługi IT oraz podmioty świadczące
              usługi księgowe lub prawne.
            </p>
            <p className="leading-relaxed">
              Dane nie będą sprzedawane ani udostępniane komercyjnie osobom
              trzecim. Dane mogą zostać udostępnione organom publicznym tylko
              wtedy, gdy wymagają tego obowiązujące przepisy prawa.
            </p>
          </Section>

          <Section
            id="transfer"
            eyebrow="05"
            title="Przekazywanie danych poza EOG"
            icon={FileText}
          >
            <p className="leading-relaxed">
              Administrator nie przekazuje danych osobowych poza Europejski Obszar Gospodarczy (EOG).
            </p>
          </Section>

          <Section
            id="prawa"
            eyebrow="06"
            title="Prawa osób, których dane dotyczą"
            icon={CheckCircle2}
          >
            <p className="leading-relaxed">
              Osobie, której dane dotyczą, przysługują prawa wynikające z RODO,
              w szczególności:
            </p>
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {rights.map((right) => (
                <li key={right} className="flex gap-3 leading-relaxed">
                  <CheckCircle2
                    className="mt-1 flex-shrink-0 text-blue-600"
                    size={18}
                  />
                  <span>{right}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed">
              Wniosek dotyczący realizacji praw można wysłać na adres{" "}
              <strong>kamila@helta.pl</strong>. Administrator może
              poprosić o dodatkowe informacje, jeśli będzie to konieczne do
              potwierdzenia tożsamości osoby składającej wniosek.
            </p>
          </Section>

          <Section
            id="cookies"
            eyebrow="07"
            title="Pliki cookies i technologie podobne"
            icon={Database}
          >
            <p className="leading-relaxed">
              Strona korzysta wyłącznie z technicznych i niezbędnych plików cookies zapewniających jej prawidłowe działanie, bezpieczeństwo oraz zapamiętywanie podstawowych ustawień. Użytkownik może zarządzać cookies z poziomu ustawień swojej przeglądarki.
            </p>
          </Section>

          <Section
            id="bezpieczenstwo"
            eyebrow="08"
            title="Bezpieczeństwo danych"
            icon={Shield}
          >
            <p className="leading-relaxed">
              Administrator stosuje środki organizacyjne i techniczne mające na
              celu ochronę danych osobowych przed nieuprawnionym dostępem,
              utratą, zmianą lub ujawnieniem, w tym szyfrowanie połączenia SSL/HTTPS oraz bezpieczną konfigurację skrzynki pocztowej.
            </p>
          </Section>

          <Section
            id="zmiany"
            eyebrow="09"
            title="Zmiany polityki prywatności"
            icon={FileText}
          >
            <p className="leading-relaxed">
              Polityka prywatności może być aktualizowana w razie zmian sposobu działania strony lub przepisów prawa. Aktualna wersja dokumentu jest zawsze dostępna na tej stronie.
            </p>
          </Section>
        </div>
      </section>
    </main>
  );
}
