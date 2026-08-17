"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CreditCard,
  Users,
  CalendarCheck,
} from "lucide-react";
import { ZnanyLekarz } from "@/components/common/ZnanyLekarz";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    rodoConsent: false,
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setStatusMessage("");

    const name = formState.name.trim();
    const email = formState.email.trim();
    const message = formState.message.trim();
    const phone = formState.phone.trim();
    const website = formState.website.trim();

    if (website) {
      setSubmitted(true);
      setStatusMessage(
        "Dziękuję za wiadomość. Skontaktuję się z Tobą najszybciej, jak to możliwe.",
      );
      setIsSubmitting(false);
      return;
    }

    if (!name || !email || !message) {
      setErrorMessage("Uzupełnij imię, adres e-mail i treść wiadomości.");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Podaj poprawny adres e-mail.");
      setIsSubmitting(false);
      return;
    }

    if (!formState.rodoConsent) {
      setErrorMessage(
        "Zgoda na przetwarzanie danych jest wymagana do wysłania formularza.",
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/send-mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          rodoConsent: formState.rodoConsent,
          website,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setSubmitted(true);
        setStatusMessage(
          data.message ||
            "Dziękuję za wiadomość. Skontaktuję się z Tobą najszybciej, jak to możliwe.",
        );
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: "",
          rodoConsent: false,
          website: "",
        });
      } else {
        setErrorMessage(
          data?.message ||
            "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się pod adresem kamila@helta.pl.",
        );
      }
    } catch {
      setErrorMessage(
        "Nie udało się wysłać formularza. Sprawdź połączenie z internetem lub skontaktuj się bezpośrednio pod adresem kamila@helta.pl.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormState({
      ...formState,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  return (
    <section id="kontakt" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="mb-8 text-4xl font-bold text-earth-brown-900">
              Zapraszam do kontaktu
            </h2>
            <p className="mb-12 text-lg text-earth-brown-700">
              Jeśli masz pytania lub chcesz umówić się na pierwszą konsultację,
              napisz do mnie lub zadzwoń. Odpowiem najszybciej, jak to możliwe.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-earth-sage-100 text-earth-sage-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-earth-brown-800">
                    Telefon
                  </h4>
                  <a
                    href="tel:889470294"
                    className="text-xl text-earth-brown-700 transition-colors hover:text-earth-sage-600"
                  >
                    889 470 294
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-earth-sage-100 text-earth-sage-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-earth-brown-800">Email</h4>
                  <a
                    href="mailto:kamila@helta.pl"
                    className="text-xl text-earth-brown-700 transition-colors hover:text-earth-sage-600"
                  >
                    kamila@helta.pl
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-earth-sage-100 text-earth-sage-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-earth-brown-800">
                    Lokalizacja
                  </h4>
                  <p className="text-xl text-earth-brown-700">
                    Gdańsk, Chojnice (stacjonarnie) oraz psychoterapia online
                    dla osób z całej Polski
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-teal-200/90 bg-teal-50/70 p-5 shadow-xs transition-colors hover:border-teal-300">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                      Rezerwacja online
                    </span>
                  </div>
                  <h4 className="font-bold text-earth-brown-900 text-base">
                    Rezerwacja wizyt przez ZnanyLekarz.pl
                  </h4>
                  <p className="text-sm text-earth-brown-700">
                    Sprawdź grafik, wolne terminy i umów dogodną wizytę online.
                  </p>
                </div>
                <ZnanyLekarz
                  text="Umów wizytę"
                  variant="button"
                  showExternalIcon
                  iconSize={20}
                  className="w-full sm:w-auto shrink-0 py-2.5 px-5 text-sm"
                />
              </div>

              <div className="mt-12 rounded-3xl border border-earth-beige-200 bg-earth-beige-100/60 p-8">
                <h4 className="mb-6 text-xl font-bold text-earth-brown-900">
                  Ważne informacje organizacyjne
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-earth-brown-700">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-earth-sage-600" />
                    <span>
                      <strong>Czas trwania sesji:</strong> 50 minut
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-earth-brown-700">
                    <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-earth-sage-600" />
                    <span>
                      <strong>Koszt konsultacji:</strong> cena sesji podawana
                      przy kontakcie (płatność gotówką lub przelewem)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-earth-brown-700">
                    <Users className="mt-0.5 h-5 w-5 shrink-0 text-earth-sage-600" />
                    <span>
                      <strong>Forma pracy:</strong> Pracuję z osobami dorosłymi
                      w ramach terapii indywidualnej
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-earth-brown-700">
                    <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-earth-sage-600" />
                    <span>
                      <strong>Odwoływanie sesji:</strong> Odwołanie spotkania
                      jest bezpłatne do 24h przed terminem
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-earth-beige-200 bg-earth-beige-50 p-8 shadow-sm md:p-12">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-earth-sage-100 text-earth-sage-600">
                  <Send size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-earth-brown-900">
                  Wiadomość wysłana!
                </h3>
                <p className="mb-8 text-earth-brown-700">
                  {statusMessage ||
                    "Dziękuję za kontakt. Skontaktuję się z Tobą wkrótce."}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-semibold text-earth-sage-600 hover:underline"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-relaxed text-red-800"
                  >
                    {errorMessage}
                  </div>
                )}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Strona internetowa</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formState.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-earth-brown-800"
                  >
                    Imię i Nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-earth-beige-300 bg-white px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-earth-sage-500"
                    placeholder="Twoje imię..."
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-earth-brown-800"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="w-full rounded-xl border border-earth-beige-300 bg-white px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-earth-sage-500"
                      placeholder="email@przyklad.pl"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-earth-brown-800"
                    >
                      Telefon (opcjonalnie)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      className="w-full rounded-xl border border-earth-beige-300 bg-white px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-earth-sage-500"
                      placeholder="Numer telefonu..."
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-earth-brown-800"
                  >
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-earth-beige-300 bg-white px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-earth-sage-500"
                    placeholder="W czym mogę pomóc?"
                  />
                </div>
                <div className="flex items-start space-x-3 rounded-lg border border-earth-brown-200 bg-earth-brown-50 p-4">
                  <input
                    type="checkbox"
                    id="rodoConsent"
                    name="rodoConsent"
                    checked={formState.rodoConsent}
                    onChange={handleChange}
                    required
                    className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-earth-beige-300 text-earth-sage-600 focus:ring-earth-sage-500"
                  />
                  <label
                    htmlFor="rodoConsent"
                    className="cursor-pointer text-xs leading-relaxed text-earth-brown-700"
                  >
                    Wyrażam zgodę na przetwarzanie moich danych osobowych dla
                    potrzeb niezbędnych do realizacji procesu zapisu zgodnie z
                    Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
                    2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
                    fizycznych w związku z przetwarzaniem danych osobowych i w
                    sprawie swobodnego przepływu takich danych oraz uchylenia
                    dyrektywy 95/46/WE (RODO). Zapoznałam/zapoznałem się z{" "}
                    <Link
                      href="/polityka-prywatnosci"
                      className="font-semibold text-earth-sage-700 underline underline-offset-2 hover:text-earth-sage-600"
                    >
                      polityką prywatności
                    </Link>
                    .
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center space-x-2 rounded-xl bg-earth-sage-600 py-4 text-lg font-bold text-earth-beige-50 shadow-lg transition-all hover:bg-earth-sage-700 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="inline-block animate-pulse">
                      Wysyłanie...
                    </span>
                  ) : (
                    <>
                      <span>Wyślij wiadomość</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
