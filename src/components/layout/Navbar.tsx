'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, TreeDeciduous } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'O mnie', href: '#o-mnie' },
  { name: 'Oferta', href: '#oferta' },
  { name: 'Gestalt', href: '#gestalt' },
  { name: 'On-line', href: '#online' },
  { name: 'Kontakt', href: '#kontakt' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        scrolled ? 'bg-earth-beige-50/80 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <TreeDeciduous className="text-earth-sage-600 group-hover:rotate-12 transition-transform duration-300" size={28} />
          <div className="text-2xl font-semibold text-earth-brown-800 tracking-tight">
            Kamila <span className="font-light text-earth-sage-600">Helta</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-earth-brown-700 hover:text-earth-sage-600 transition-colors font-medium text-sm tracking-wide uppercase"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-earth-brown-800 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-earth-beige-100 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-earth-brown-800 text-lg font-medium border-b border-earth-beige-300 pb-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
