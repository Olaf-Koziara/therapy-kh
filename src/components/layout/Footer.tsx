import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, TreeDeciduous } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-earth-brown-900 text-earth-beige-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <TreeDeciduous className="text-earth-sage-400" size={24} />
            <h3 className="text-2xl font-semibold">Kamila Helta</h3>
          </div>
          <p className="text-earth-beige-300 leading-relaxed mb-6">
            Profesjonalna psychoterapia w nurcie Gestalt oraz terapia uzależnień.
            Pomagam odnaleźć drogę do świadomego i autentycznego życia.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-6 uppercase tracking-wider">Kontakt</h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-earth-sage-400" />
              <a href="mailto:kamila@helta.pl" className="hover:underline">kamila@helta.pl</a>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-earth-sage-400" />
              <a href="tel:889470294" className="hover:underline">889 470 294</a>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin size={18} className="text-earth-sage-400" />
              <span>Gdańsk / Online</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-6 uppercase tracking-wider">Nawigacja</h4>
          <ul className="grid grid-cols-2 gap-4">
            <li><Link href="/#o-mnie" className="hover:text-earth-sage-300">O mnie</Link></li>
            <li><Link href="/#oferta" className="hover:text-earth-sage-300">Oferta</Link></li>
            <li><Link href="/#gestalt" className="hover:text-earth-sage-300">Gestalt</Link></li>
            <li><Link href="/#online" className="hover:text-earth-sage-300">On-line</Link></li>
            <li><Link href="/#kontakt" className="hover:text-earth-sage-300">Kontakt</Link></li>
            <li><Link href="/psychoterapia-gdansk" className="hover:text-earth-sage-300">Psychoterapia Gdańsk</Link></li>
            <li><Link href="/psychoterapia-online" className="hover:text-earth-sage-300">Psychoterapia online</Link></li>
            <li><Link href="/terapia-uzaleznien-gdansk" className="hover:text-earth-sage-300">Terapia uzależnień</Link></li>
            <li><Link href="/psychoterapia-gestalt-gdansk" className="hover:text-earth-sage-300">Gestalt Gdańsk</Link></li>
            <li><Link href="/polityka-prywatnosci" className="hover:text-earth-sage-300">Polityka prywatności</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-earth-brown-800 text-center text-earth-brown-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Kamila Helta - Gabinet Psychoterapii. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;
