"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { sendContactForm } from "@/app/actions";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    rodoConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    try {
      const result = await sendContactForm(formData);
      if (result.success) {
        setSubmitted(true);
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: "",
          rodoConsent: false,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-earth-brown-900 mb-8">
              Zapraszam do kontaktu
            </h2>
            <p className="text-lg text-earth-brown-700 mb-12">
              Jeśli masz pytania lub chcesz umówić się na pierwszą konsultację,
              napisz do mnie lub zadzwoń. Odpowiem najszybciej, jak to możliwe.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-earth-beige-100 rounded-xl flex items-center justify-center text-earth-sage-600 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-earth-brown-800 font-bold mb-1">
                    Telefon
                  </h4>
                  <a
                    href="tel:889470294"
                    className="text-xl text-earth-brown-700 hover:text-earth-sage-600 transition-colors"
                  >
                    889 470 294
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-earth-beige-100 rounded-xl flex items-center justify-center text-earth-sage-600 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-earth-brown-800 font-bold mb-1">Email</h4>
                  <a
                    href="mailto:kamila@helta.pl"
                    className="text-xl text-earth-brown-700 hover:text-earth-sage-600 transition-colors"
                  >
                    kamila@helta.pl
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-earth-beige-100 rounded-xl flex items-center justify-center text-earth-sage-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-earth-brown-800 font-bold mb-1">
                    Lokalizacja
                  </h4>
                  <p className="text-xl text-earth-brown-700">
                    Gdańsk i okolice, Bydgoszcz i okolice, psychoterapia on-line
                    dla całego kraju
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-earth-beige-50 p-8 md:p-12 rounded-3xl border border-earth-beige-200 shadow-sm"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-earth-sage-100 text-earth-sage-600 rounded-full flex items-center justify-center mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-earth-brown-900 mb-4">
                  Wiadomość wysłana!
                </h3>
                <p className="text-earth-brown-700 mb-8">
                  Dziękuję za kontakt. Skontaktuję się z Tobą wkrótce.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-earth-sage-600 font-semibold hover:underline"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-earth-brown-800 mb-2"
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
                    className="w-full px-4 py-3 rounded-xl border border-earth-beige-300 focus:outline-none focus:ring-2 focus:ring-earth-sage-500 bg-white transition-all"
                    placeholder="Twoje imię..."
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-earth-brown-800 mb-2"
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
                      className="w-full px-4 py-3 rounded-xl border border-earth-beige-300 focus:outline-none focus:ring-2 focus:ring-earth-sage-500 bg-white transition-all"
                      placeholder="email@przyklad.pl"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-earth-brown-800 mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-earth-beige-300 focus:outline-none focus:ring-2 focus:ring-earth-sage-500 bg-white transition-all"
                      placeholder="Numer telefonu..."
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-earth-brown-800 mb-2"
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
                    className="w-full px-4 py-3 rounded-xl border border-earth-beige-300 focus:outline-none focus:ring-2 focus:ring-earth-sage-500 bg-white transition-all resize-none"
                    placeholder="W czym mogę pomóc?"
                  />
                </div>
                <div className="flex items-start space-x-3 bg-earth-brown-50 p-4 rounded-lg border border-earth-brown-200">
                  <input
                    type="checkbox"
                    id="rodoConsent"
                    name="rodoConsent"
                    checked={formState.rodoConsent}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 mt-1 flex-shrink-0 cursor-pointer rounded border-earth-beige-300 text-earth-sage-600 focus:ring-earth-sage-500"
                  />
                  <label
                    htmlFor="rodoConsent"
                    className="text-xs text-earth-brown-700 leading-relaxed cursor-pointer"
                  >
                    Wyrażam zgodę na przetwarzanie moich danych osobowych dla
                    potrzeb niezbędnych do realizacji procesu zapisu zgodnie z
                    Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
                    2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
                    fizycznych w związku z przetwarzaniem danych osobowych i w
                    sprawie swobodnego przepływu takich danych oraz uchylenia
                    dyrektywy 95/46/WE (RODO).
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-earth-sage-600 text-earth-beige-50 rounded-xl hover:bg-earth-sage-700 transition-all font-bold text-lg shadow-lg disabled:opacity-70 flex items-center justify-center space-x-2"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
