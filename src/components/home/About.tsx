"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, BookOpen, CheckCircle2, Clock, Heart, ShieldCheck, Target, ChevronDown, ChevronUp, GraduationCap, Briefcase, CalendarCheck } from 'lucide-react';

const About = () => {
  const [showFullQualifications, setShowFullQualifications] = useState(false);

  const credentials = [
    { text: "Certyfikat Psychoterapeutki Gestalt EAGT", icon: Award },
    { text: "Certyfikat Specjalistki Psychoterapii Uzależnień", icon: Award },
    { text: "Studia magisterskie z pedagogiki i psychologii (specjalność: resocjalizacja)", icon: BookOpen },
    { text: "4-letnia Szkoła Psychoterapii Gestalt w Warszawie (zgodna z EAGT i EAP)", icon: GraduationCap },
    { text: "Doświadczenie w pracy terapeutycznej od 2009 roku", icon: Clock },
    { text: "Praca pod stałą superwizją oraz zgodnie z Kodeksem Etycznym EAGT", icon: ShieldCheck },
  ];

  return (
    <section id="o-mnie" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          
          {/* Main Text & Qualifications Column (Comes First on Mobile) */}
          <div className="w-full lg:w-7/12 order-1">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
              O mnie i Kwalifikacje
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              Spotkanie, relacja, doświadczenie
            </h2>
            
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-5">
              Jestem certyfikowaną psychoterapeutką Gestalt, certyfikowaną specjalistką psychoterapii uzależnień oraz pedagogiem ze specjalnością resocjalizacja.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-5">
              Profesjonalną pomocą i psychoterapią zajmuję się od 2009 roku. Doświadczenie kliniczne zdobywałam m.in. w stacjonarnych krótko- i długoterminowych ośrodkach leczenia uzależnień, punktach konsultacyjnych oraz w pracy gabinetowej.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-5">
              W terapii ważne jest dla mnie tworzenie relacji, w której możesz zatrzymać się przy swoim doświadczeniu i przyglądać się temu, co dzieje się w Tobie — w kontakcie ze mną, z innymi oraz ze sobą.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-5">
              Pracuję z uważnością na emocje, ciało, potrzeby i granice. Nie proponuję gotowych odpowiedzi. Wspólnie możemy odkrywać, jak funkcjonujesz, czego potrzebujesz i jakie możliwości wyboru stają się dla Ciebie dostępne.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              Podstawą naszej pracy są autentyczny kontakt, poufność, szacunek oraz poszanowanie Twojego tempa i granic.
            </p>

            {/* Quick credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-blue-50/60 p-3.5 rounded-xl border border-blue-100/80 hover:bg-blue-50 transition-colors"
                >
                  <div className="mt-0.5 bg-blue-600 text-white p-1.5 rounded-lg shrink-0">
                    <item.icon size={16} />
                  </div>
                  <span className="text-slate-800 font-medium text-sm leading-snug">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Toggle Button for Detailed Qualifications */}
            <div className="mb-6">
              <button
                onClick={() => setShowFullQualifications(!showFullQualifications)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-blue-600 font-bold hover:text-blue-700 transition-all py-3.5 px-6 rounded-2xl border-2 border-blue-200 bg-blue-50/50 hover:bg-blue-50 shadow-sm text-sm sm:text-base"
                aria-expanded={showFullQualifications}
              >
                <span>{showFullQualifications ? "Ukryj szczegółowe kwalifikacje" : "Zobacz szczegółowe wykształcenie i kursy"}</span>
                {showFullQualifications ? <ChevronUp size={20} className="text-blue-600" /> : <ChevronDown size={20} className="text-blue-600" />}
              </button>
            </div>

            {/* Detailed Qualifications - Placed DIRECTLY below the button */}
            {showFullQualifications && (
              <div className="mt-6 mb-8 p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-200 transition-all animate-fadeIn">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 border-b border-slate-200 pb-4">
                  <GraduationCap className="text-blue-600 shrink-0" size={26} />
                  <span>Szczegółowe wykształcenie i dorobek zawodowy</span>
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <BookOpen className="text-blue-600 shrink-0" size={18} />
                      Wykształcenie i Szkoły Psychoterapii
                    </h4>
                    <ul className="space-y-3 text-slate-700 text-sm leading-relaxed pl-1">
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        <span><strong>Uniwersytet Kazimierza Wielkiego w Bydgoszczy</strong> – Wydział Pedagogiki i Psychologii, studia magisterskie (specjalność: resocjalizacja).</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        <span><strong>Szkoła Psychoterapii Gestalt w Warszawie</strong> – 4-letni całościowy program szkoleniowy przygotowujący do wykonywania zawodu psychoterapeuty (zgodny z wymogami EAGT oraz EAP).</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        <span><strong>Studium Terapii Uzależnień</strong> (PFST w Gdańsku).</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        <span><strong>Kujawsko-Pomorska Szkoła Wyższa w Bydgoszczy</strong> – studia licencjackie.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 border-t border-slate-200 pt-6">
                      <Briefcase className="text-blue-600 shrink-0" size={18} />
                      Warsztaty i szkolenia specjalistyczne
                    </h4>
                    <ul className="space-y-3 text-slate-700 text-sm leading-relaxed pl-1">
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        <span>Wilanowska Pracownia Psychoterapii & Instytut Psychoterapii Gestalt Kairos (Włochy) – cykl zaawansowanych szkoleń: <em>Praca z Traumą, Zaburzenia Lękowe, Depresja, Zaburzenie Borderline, Zaburzenie Histrioniczne</em>.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        <span>Warsztaty Gestalt: <em>Trauma – rozpoznanie i interwencja</em>.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        <span>Centrum Terapii Dialog: <em>Diagnoza psychoterapeutyczna w klasyfikacji ICD-11</em>.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        <span>Dom Psychoterapii Gestalt: <em>Diagnoza Gestalt w praktyce</em>.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        <span>Dialog Motywujący, Psychoterapia Poznawczo-Behawioralna (CBT) oraz Terapia Skoncentrowana na Rozwiązaniach (TSR).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Direct CTA button to contact */}
            <div className="pt-2">
              <Link
                href="/kontakt"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-3.5 px-7 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <CalendarCheck size={18} />
                <span>Umów konsultację ze mną</span>
              </Link>
            </div>
          </div>

          {/* Media / Decorative Image Column (Placed UNDERNEATH / Bottom on mobile) */}
          <div className="w-full lg:w-5/12 order-2 mt-4 lg:mt-0">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-10">
                <div className="aspect-square bg-blue-50 rounded-3xl overflow-hidden flex items-center justify-center p-6 border border-blue-100 group shadow-sm">
                   <Image
                    src="/images/tree-logo.svg"
                    className="w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-500"
                    alt="Symbol wzrostu i rozwoju"
                    width={180}
                    height={180}
                   />
                </div>
                <div className="aspect-[3/4] bg-slate-900 rounded-3xl shadow-md flex flex-col items-center justify-center p-6 text-white text-center">
                  <Heart className="text-blue-400 mb-3" size={40} />
                  <p className="text-xs sm:text-sm font-medium text-slate-300">Empatia i autentyczny kontakt</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-md flex flex-col items-center justify-center p-6 text-white text-center">
                   <Target className="text-blue-200 mb-3" size={40} />
                   <p className="text-xs sm:text-sm font-medium text-blue-100">Świadomość własnych potrzeb</p>
                </div>
                <div className="aspect-square bg-blue-100/70 rounded-3xl shadow-sm border border-blue-200 flex flex-col items-center justify-center p-6 text-center">
                   <BookOpen className="text-blue-700 mb-2" size={36} />
                   <p className="text-xs font-semibold text-slate-800">Doświadczenie od 2009 r.</p>
                </div>
              </div>
            </div>

            {/* Trust highlights card below images */}
            <div className="mt-6 grid gap-4 rounded-3xl border border-blue-100 bg-blue-50/60 p-6 sm:grid-cols-2 shadow-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 shrink-0 text-blue-600" size={20} />
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                  Praca w poufnej relacji, regularna superwizja u certyfikowanych superwizorów.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={20} />
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                  Kodeks Etyczny EAGT (Europejskiego Stowarzyszenia Terapii Gestalt).
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
