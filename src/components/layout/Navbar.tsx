'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, TreeDeciduous, CalendarCheck, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ZnanyLekarz } from '@/components/common/ZnanyLekarz';

const navItems = [
  { name: 'Start', href: '/' },
  { name: 'O mnie', href: '/o-mnie' },
  { name: 'Obszary pomocy', href: '/oferta' },
  { name: 'Online', href: '/psychoterapia-online' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Kontakt', href: '/kontakt' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-earth-beige-200' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2.5 group">
          <div className="w-10 h-10 rounded-full bg-earth-sage-100 flex items-center justify-center border border-earth-sage-200 group-hover:bg-earth-sage-600 transition-colors duration-300">
            <TreeDeciduous className="text-earth-sage-600 group-hover:text-earth-beige-50 transition-colors duration-300" size={22} />
          </div>
          <div className="text-xl font-bold text-earth-brown-900 tracking-tight">
            Kamila <span className="font-semibold text-earth-sage-600">Helta</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-7">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-semibold transition-colors tracking-wide py-1 border-b-2',
                  isActive
                    ? 'text-earth-sage-600 border-earth-sage-600'
                    : 'text-earth-brown-700 hover:text-earth-sage-600 border-transparent'
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Quick Access CTA Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <ZnanyLekarz
            text={<span className="hidden md:inline">ZnanyLekarz</span>}
            showExternalIcon
            iconSize={18}
          />
          <a
            href="tel:889470294"
            className="hidden xl:flex items-center gap-1.5 text-sm font-semibold text-earth-brown-700 hover:text-earth-sage-600 transition-colors"
          >
            <Phone size={16} className="text-earth-sage-600" />
            <span>889 470 294</span>
          </a>
          <Link
            href="/kontakt"
            className="inline-flex items-center space-x-2 bg-earth-sage-600 hover:bg-earth-sage-700 text-earth-beige-50 font-bold text-sm py-2.5 px-5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <CalendarCheck size={16} />
            <span>Pierwsza konsultacja</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2.5">
          <ZnanyLekarz
            text={null}
            iconSize={16}
            aria-label="Profil ZnanyLekarz"
            className="sm:hidden px-2.5 py-1.5"
          />
          <Link
            href="/kontakt"
            className="sm:hidden bg-earth-sage-600 text-earth-beige-50 text-xs font-bold py-2 px-3 rounded-full shadow-sm"
          >
            Kontakt
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-earth-brown-800 p-2 focus:outline-none rounded-lg hover:bg-earth-beige-100 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-earth-beige-200 mt-3 rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
          <div className="flex flex-col space-y-3 px-6 py-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-base font-semibold py-2 border-b border-earth-beige-100 transition-colors flex justify-between items-center',
                    isActive ? 'text-earth-sage-600 font-bold' : 'text-earth-brown-800 hover:text-earth-sage-600'
                  )}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-earth-sage-600" />}
                </Link>
              );
            })}
            <div className="pt-2 flex flex-col gap-3">
              <ZnanyLekarz
                text="Profil na ZnanyLekarz.pl"
                variant="outline"
                showExternalIcon
                iconSize={20}
                onClick={() => setIsOpen(false)}
                className="w-full"
              />
              <Link
                href="/kontakt"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-earth-sage-600 text-earth-beige-50 font-bold py-3 rounded-xl shadow-md"
              >
                Pierwsza konsultacja
              </Link>
              <a
                href="tel:889470294"
                className="w-full text-center border border-earth-beige-300 text-earth-brown-800 font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2"
              >
                <Phone size={16} className="text-earth-sage-600" />
                <span>Zadzwoń: 889 470 294</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
