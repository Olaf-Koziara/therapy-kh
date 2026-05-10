import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertCircle,
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
    value: "[IMIĘ I NAZWISKO / NAZWA GABINETU]",
  },
  {
    icon: Mail,
    label: "Kontakt w sprawie danych",
    value: "[ADRES E-MAIL DO SPRAW RODO]",
  },
  {
    icon: Clock,
    label: "Ostatnia aktualizacja",
    value: "[DATA AKTUALIZACJI]",
  },
];

const processingPurposes = [
  {
    purpose: "Obsługa zapytań przesłanych przez formularz kontaktowy, e-mail lub telefon.",
    data: "imię i nazwisko, adres e-mail, numer telefonu, treść wiadomości oraz inne dane podane dobrowolnie.",
    basis:
      "art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes administratora polegający na obsłudze korespondencji i udzieleniu odpowiedzi; w zakresie danych szczególnych kategorii podanych z inicjatywy osoby kontaktującej się - art. 9 ust. 2 lit. a RODO, jeśli wymagana jest wyraźna zgoda.",
    period:
      "przez czas potrzebny do udzielenia odpowiedzi, a następnie do [OKRES ARCHIWIZACJI KORESPONDENCJI, NP. 12 MIESIĘCY] lub do czasu skutecznego wniesienia sprzeciwu.",
  },
  {
    purpose: "Umówienie konsultacji, przygotowanie do świadczenia usług oraz bieżący kontakt organizacyjny.",
    data: "dane identyfikacyjne i kontaktowe, informacje dotyczące terminu spotkania oraz zakresu oczekiwanej pomocy.",
    basis:
      "art. 6 ust. 1 lit. b RODO - działania podejmowane przed zawarciem umowy lub wykonanie umowy; w uzasadnionych przypadkach art. 9 ust. 2 lit. h RODO lub inna właściwa podstawa po uzupełnieniu przez administratora.",
    period:
      "przez czas współpracy, a następnie przez okres wymagany przepisami prawa lub uzasadniony dochodzeniem albo obroną roszczeń: [OKRES].",
  },
  {
    purpose: "Realizacja obowiązków księgowych, podatkowych i rozliczeniowych.",
    data: "dane niezbędne do wystawienia rachunku lub faktury, dane płatności oraz informacje wymagane przepisami prawa.",
    basis:
      "art. 6 ust. 1 lit. c RODO - obowiązek prawny ciążący na administratorze.",
    period:
      "przez okres wymagany przepisami podatkowymi i rachunkowymi, co do zasady [OKRES, NP. 5 LAT OD KOŃCA ROKU PODATKOWEGO].",
  },
  {
    purpose: "Zapewnienie bezpieczeństwa strony internetowej i podstawowa administracja techniczna.",
    data: "adres IP, dane techniczne przeglądarki, informacje o błędach, logi serwera i podstawowe dane eksploatacyjne.",
    basis:
      "art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes administratora polegający na utrzymaniu bezpieczeństwa i prawidłowego działania strony.",
    period:
      "przez [OKRES PRZECHOWYWANIA LOGÓW, NP. 30 DNI], chyba że dłuższe przechowywanie jest konieczne do wyjaśnienia incydentu.",
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

const placeholders = [
  "[IMIĘ I NAZWISKO / NAZWA GABINETU]",
  "[ADRES SIEDZIBY / ADRES DO KORESPONDENCJI]",
  "[NIP / REGON, JEŚLI DOTYCZY]",
  "[ADRES E-MAIL DO SPRAW RODO]",
  "[NUMER TELEFONU]",
  "[NAZWA HOSTINGU / DOSTAWCY POCZTY / SYSTEMU FORMULARZA]",
  "[OKRESY PRZECHOWYWANIA DANYCH]",
  "[INFORMACJE O NARZĘDZIACH ANALITYCZNYCH LUB MARKETINGOWYCH, JEŚLI SĄ UŻYWANE]",
  "[DATA AKTUALIZACJI]",
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
    <section id={id} className="scroll-mt-28 border-t border-earth-beige-200 py-12">
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-earth-sage-50 text-earth-sage-600">
          <Icon size={24} />
        </div>
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-earth-sage-600">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-earth-brown-900">{title}</h2>
        </div>
      </div>
      <div className="mt-8 space-y-6 text-earth-brown-700">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-earth-beige-50 pt-32">
      <section className="px-6 pb-16 pt-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="mb-10 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-earth-sage-600 transition-colors hover:text-earth-sage-700"
          >
            Powrót do strony głównej
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-earth-sage-600">
                Dokument do uzupełnienia
              </p>
              <h1 className="text-4xl font-bold leading-tight text-earth-brown-900 md:text-6xl">
                Polityka prywatności
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-earth-brown-700">
                Poniższy dokument opisuje zasady przetwarzania danych osobowych
                osób korzystających ze strony internetowej oraz kontaktujących
                się z gabinetem. Miejsca oznaczone nawiasami kwadratowymi należy
                uzupełnić prawdziwymi danymi administratora i faktycznie
                używanymi narzędziami.
              </p>
            </div>

            <aside className="rounded-3xl border border-earth-beige-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-bold text-earth-brown-900">
                Najważniejsze informacje
              </h2>
              <div className="space-y-5">
                {quickFacts.map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="mt-1 text-earth-sage-600">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-earth-brown-800">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-earth-brown-600">
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
          <div className="rounded-3xl border border-earth-sage-200 bg-earth-sage-600/5 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="mt-1 flex-shrink-0 text-earth-sage-600" size={26} />
              <div>
                <h2 className="text-xl font-bold text-earth-brown-900">
                  Ważna uwaga przed publikacją
                </h2>
                <p className="mt-3 leading-relaxed text-earth-brown-700">
                  Ten tekst jest profesjonalnym szablonem do uzupełnienia.
                  Przed publikacją sprawdź, czy odpowiada faktycznemu sposobowi
                  działania gabinetu, formularza kontaktowego, hostingu, poczty,
                  narzędzi analitycznych oraz systemów rezerwacji lub płatności.
                </p>
              </div>
            </div>
          </div>

          <Section
            id="administrator"
            eyebrow="01"
            title="Administrator danych"
            icon={UserCheck}
          >
            <p className="leading-relaxed">
              Administratorem danych osobowych jest{" "}
              <strong>[IMIĘ I NAZWISKO / NAZWA GABINETU]</strong>, prowadząca/y
              działalność pod adresem{" "}
              <strong>[ADRES SIEDZIBY / ADRES DO KORESPONDENCJI]</strong>, NIP:
              <strong> [NIP, JEŚLI DOTYCZY]</strong>, REGON:
              <strong> [REGON, JEŚLI DOTYCZY]</strong>.
            </p>
            <p className="leading-relaxed">
              W sprawach dotyczących danych osobowych można skontaktować się pod
              adresem e-mail <strong>[ADRES E-MAIL DO SPRAW RODO]</strong> lub
              telefonicznie pod numerem <strong>[NUMER TELEFONU]</strong>.
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
                  className="rounded-2xl border border-earth-beige-200 bg-earth-beige-50 p-6"
                >
                  <h3 className="text-lg font-bold text-earth-brown-900">
                    {index + 1}. {item.purpose}
                  </h3>
                  <dl className="mt-5 space-y-4 text-sm leading-relaxed md:text-base">
                    <div>
                      <dt className="font-semibold text-earth-brown-800">
                        Kategorie danych
                      </dt>
                      <dd className="mt-1 text-earth-brown-700">{item.data}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-earth-brown-800">
                        Podstawa prawna
                      </dt>
                      <dd className="mt-1 text-earth-brown-700">{item.basis}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-earth-brown-800">
                        Okres przechowywania
                      </dt>
                      <dd className="mt-1 text-earth-brown-700">{item.period}</dd>
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
              w prowadzeniu strony i obsłudze kontaktu, takim jak dostawca
              hostingu, poczty elektronicznej, formularza kontaktowego, systemu
              rezerwacji, księgowości, obsługi IT lub podmioty świadczące pomoc
              prawną. Lista podmiotów do uzupełnienia:{" "}
              <strong>[NAZWY DOSTAWCÓW / KATEGORIE ODBIORCÓW]</strong>.
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
              Co do zasady administrator nie zamierza przekazywać danych
              osobowych poza Europejski Obszar Gospodarczy. Jeśli używane
              narzędzia techniczne powodują taki transfer, należy wskazać je w
              tym miejscu wraz z mechanizmem zabezpieczeń, np. standardowymi
              klauzulami umownymi:{" "}
              <strong>[INFORMACJE O TRANSFERZE POZA EOG, JEŚLI DOTYCZY]</strong>.
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
                    className="mt-1 flex-shrink-0 text-earth-sage-600"
                    size={18}
                  />
                  <span>{right}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed">
              Wniosek dotyczący realizacji praw można wysłać na adres{" "}
              <strong>[ADRES E-MAIL DO SPRAW RODO]</strong>. Administrator może
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
              Strona może korzystać z plików cookies niezbędnych do jej
              prawidłowego działania, bezpieczeństwa oraz zapamiętywania
              podstawowych ustawień użytkownika. Użytkownik może zarządzać
              cookies z poziomu ustawień swojej przeglądarki.
            </p>
            <p className="leading-relaxed">
              Jeśli na stronie wykorzystywane są narzędzia analityczne,
              marketingowe, mapy, wtyczki społecznościowe lub zewnętrzne
              formularze, należy wskazać je poniżej wraz z ich celem:
              <strong> [LISTA NARZĘDZI, NP. GOOGLE ANALYTICS, META PIXEL, MAPY, SYSTEM REZERWACJI]</strong>.
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
              utratą, zmianą lub ujawnieniem. Zakres zabezpieczeń powinien być
              dostosowany do charakteru przetwarzanych danych, w tym do danych
              związanych ze zdrowiem i korzystaniem z pomocy terapeutycznej.
            </p>
            <p className="leading-relaxed">
              Przykładowe zabezpieczenia do potwierdzenia lub uzupełnienia:
              <strong> [SZYFROWANIE POCZTY / SSL / KONTROLA DOSTĘPU / HASŁA / KOPIE ZAPASOWE / PROCEDURY]</strong>.
            </p>
          </Section>

          <Section
            id="zmiany"
            eyebrow="09"
            title="Zmiany polityki prywatności"
            icon={FileText}
          >
            <p className="leading-relaxed">
              Polityka prywatności może być aktualizowana, w szczególności w
              razie zmian w sposobie działania strony, używanych narzędziach,
              zakresie świadczonych usług lub obowiązujących przepisach. Aktualna
              wersja dokumentu jest dostępna na tej stronie.
            </p>
          </Section>

          <section className="border-t border-earth-beige-200 py-12">
            <h2 className="text-2xl font-bold text-earth-brown-900">
              Lista placeholderów do uzupełnienia
            </h2>
            <div className="mt-6 rounded-3xl border border-earth-beige-200 bg-earth-beige-50 p-6">
              <ul className="grid grid-cols-1 gap-3 text-sm text-earth-brown-700 md:grid-cols-2">
                {placeholders.map((placeholder) => (
                  <li key={placeholder} className="font-mono">
                    {placeholder}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
