'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Calendar, ArrowRight } from 'lucide-react';

const FloatingContactCTA = () => {
  return (
    <>
      {/* Floating CTA pill for desktop & tablet */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md p-2 pl-4 rounded-full shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5">
        <a
          href="tel:889470294"
          className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium text-sm pr-2 border-r border-slate-200"
        >
          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <Phone size={16} />
          </div>
          <span>889 470 294</span>
        </a>

        <Link
          href="/kontakt"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md transition-all group"
        >
          <Calendar size={16} />
          <span>Pierwsza konsultacja</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Sticky Bottom Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200 px-4 py-3 shadow-2xl flex items-center justify-between gap-3">
        <a
          href="tel:889470294"
          className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-800 py-3 rounded-xl font-semibold text-sm active:scale-[0.98] transition-transform"
        >
          <Phone size={16} className="text-blue-600" />
          <span>Zadzwoń</span>
        </a>

        <Link
          href="/kontakt"
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold text-sm shadow-md active:scale-[0.98] transition-transform"
        >
          <Calendar size={16} />
          <span>Konsultacja</span>
        </Link>
      </div>
    </>
  );
};

export default FloatingContactCTA;
