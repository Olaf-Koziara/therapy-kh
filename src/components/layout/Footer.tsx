import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, TreeDeciduous, CalendarCheck, ShieldCheck } from 'lucide-react';
import { ZnanyLekarz } from '@/components/common/ZnanyLekarz';

const Footer = () => {
  return (
    <footer className="bg-earth-brown-900 text-earth-beige-100 pt-16 pb-24 sm:pb-16 px-6 border-t border-earth-brown-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center space-x-2.5 mb-5">
            <div className="w-9 h-9 rounded-full bg-earth-sage-600/20 text-earth-sage-400 flex items-center justify-center border border-earth-sage-500/30">
              <TreeDeciduous size={20} />
            </div>
            <h3 className="text-xl font-bold text-white">Kamila Helta</h3>
          </div>
          <p className="text-earth-brown-300 text-sm leading-relaxed mb-6">
            Certyfikowana psychoterapeutka Gestalt oraz specjalistka terapii uzależnień.
            Profesjonalne wsparcie w Gdańsku, Chojnicach oraz online.
          </p>
          <div className="inline-flex items-center gap-2 text-xs text-earth-sage-300 bg-earth-brown-950/60 px-3 py-1.5 rounded-lg border border-earth-brown-800">
            <ShieldCheck size={14} />
            <span>Superwizja & Kodeks Etyczny EAGT</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-earth-beige-200 mb-5 border-b border-earth-brown-800 pb-2">
            Nawigacja
          </h4>
          <ul className="space-y-2.5 text-sm text-earth-brown-300">
            <li>
              <Link href="/" className="hover:text-earth-sage-300 transition-colors">Strona główna</Link>
            </li>
            <li>
              <Link href="/o-mnie" className="hover:text-earth-sage-300 transition-colors">O mnie i Kwalifikacje</Link>
            </li>
            <li>
              <Link href="/oferta" className="hover:text-earth-sage-300 transition-colors">Oferta i Cennik</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-earth-sage-300 transition-colors">Najczęściej Zadawane Pytania (FAQ)</Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-earth-sage-300 transition-colors font-semibold text-earth-sage-400">Kontakt i Rezerwacja</Link>
            </li>
            <li>
              <ZnanyLekarz
                text="Profil ZnanyLekarz.pl"
                variant="subtle"
                showExternalIcon
                iconSize={16}
                className="text-teal-400 hover:text-teal-300 pt-1"
              />
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-earth-beige-200 mb-5 border-b border-earth-brown-800 pb-2">
            Obszary Pomocy
          </h4>
          <ul className="space-y-2.5 text-sm text-earth-brown-300">
            <li>
              <Link href="/psychoterapia" className="hover:text-earth-sage-300 transition-colors">Psychoterapia Indywidualna</Link>
            </li>
            <li>
              <Link href="/psychoterapia-gestalt" className="hover:text-earth-sage-300 transition-colors">Psychoterapia Gestalt</Link>
            </li>
            <li>
              <Link href="/terapia-uzaleznien" className="hover:text-earth-sage-300 transition-colors">Psychoterapia Uzależnień</Link>
            </li>
            <li>
              <Link href="/psychoterapia-online" className="hover:text-earth-sage-300 transition-colors">Psychoterapia Online</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-earth-beige-200 mb-5 border-b border-earth-brown-800 pb-2">
            Kontakt i Lokacje
          </h4>
          <ul className="space-y-3.5 text-sm text-earth-brown-300 mb-6">
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-earth-sage-400 shrink-0" />
              <a href="tel:889470294" className="hover:text-white transition-colors font-medium">889 470 294</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-earth-sage-400 shrink-0" />
              <a href="mailto:kamila@helta.pl" className="hover:text-white transition-colors">kamila@helta.pl</a>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="text-earth-sage-400 shrink-0 mt-1" />
              <span className="text-earth-brown-300">Gdańsk • Chojnice • Online</span>
            </li>
          </ul>

          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 w-full bg-earth-sage-600 hover:bg-earth-sage-500 text-earth-beige-50 font-bold text-sm py-2.5 px-4 rounded-xl shadow-md transition-all"
          >
            <CalendarCheck size={16} />
            <span>Szybki kontakt</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-earth-brown-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-earth-brown-400 text-xs">
        <p>&copy; {new Date().getFullYear()} Kamila Helta - Gabinet Psychoterapii. Wszelkie prawa zastrzeżone.</p>
        <div className="flex space-x-6">
          <Link href="/polityka-prywatnosci" className="hover:text-earth-brown-300 transition-colors">
            Polityka Prywatności
          </Link>
          <Link href="/sitemap.xml" className="hover:text-earth-brown-300 transition-colors">
            Mapa Strony (Sitemap)
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
