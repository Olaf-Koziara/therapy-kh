'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, TreeDeciduous, CalendarCheck, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Start', href: '/' },
  { name: 'O mnie', href: '/o-mnie' },
  { name: 'Obszary pomocy', href: '/oferta' },
  { name: 'Nurt Gestalt', href: '/psychoterapia-gestalt' },
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
        scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-blue-50' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2.5 group">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 transition-colors duration-300">
            <TreeDeciduous className="text-blue-600 group-hover:text-white transition-colors duration-300" size={22} />
          </div>
          <div className="text-xl font-bold text-slate-900 tracking-tight">
            Kamila <span className="font-semibold text-blue-600">Helta</span>
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
                    ? 'text-blue-600 border-blue-600'
                    : 'text-slate-700 hover:text-blue-600 border-transparent'
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Quick Access CTA Button */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="tel:889470294"
            className="hidden xl:flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            <Phone size={16} className="text-blue-600" />
            <span>889 470 294</span>
          </a>
          <Link
            href="/kontakt"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-2.5 px-5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <CalendarCheck size={16} />
            <span>Pierwsza konsultacja</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <Link
            href="/kontakt"
            className="sm:hidden bg-blue-600 text-white text-xs font-bold py-2 px-3.5 rounded-full shadow-sm"
          >
            Kontakt
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-800 p-2 focus:outline-none rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 mt-3 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-3 px-6 py-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-base font-semibold py-2 border-b border-slate-100 transition-colors flex justify-between items-center',
                      isActive ? 'text-blue-600 font-bold' : 'text-slate-800 hover:text-blue-600'
                    )}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                  </Link>
                );
              })}
              <div className="pt-2 flex flex-col gap-3">
                <Link
                  href="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-blue-600 text-white font-bold py-3 rounded-xl shadow-md"
                >
                  Pierwsza konsultacja
                </Link>
                <a
                  href="tel:889470294"
                  className="w-full text-center border border-slate-300 text-slate-800 font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2"
                >
                  <Phone size={16} className="text-blue-600" />
                  <span>Zadzwoń: 889 470 294</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
