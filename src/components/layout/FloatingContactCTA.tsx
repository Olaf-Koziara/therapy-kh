import React from 'react';
import Link from 'next/link';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { ZnanyLekarz } from '@/components/common/ZnanyLekarz';

const FloatingContactCTA = () => {
  return (
    <>
      {/* Floating CTA pill for desktop & tablet */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md p-2 pl-4 rounded-full shadow-xl border border-earth-sage-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5">
        <a
          href="tel:889470294"
          className="flex items-center gap-2 text-earth-brown-700 hover:text-earth-sage-600 font-medium text-sm pr-2 border-r border-earth-beige-300"
        >
          <div className="w-8 h-8 rounded-full bg-earth-sage-100 text-earth-sage-600 flex items-center justify-center">
            <Phone size={16} />
          </div>
          <span>889 470 294</span>
        </a>

        <ZnanyLekarz
          text="ZnanyLekarz"
          iconSize={18}
          showExternalIcon
          className="px-3.5 py-2 text-xs"
        />

        <Link
          href="/kontakt"
          className="flex items-center gap-2 bg-earth-sage-600 hover:bg-earth-sage-700 text-earth-beige-50 px-5 py-2.5 rounded-full font-semibold text-sm shadow-md transition-all group"
        >
          <Calendar size={16} />
          <span>Pierwsza konsultacja</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Sticky Bottom Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-earth-beige-50/95 backdrop-blur-lg border-t border-earth-beige-200 px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2">
        <a
          href="tel:889470294"
          className="flex-1 flex items-center justify-center gap-1.5 bg-earth-beige-200 text-earth-brown-800 py-3 rounded-xl font-semibold text-xs active:scale-[0.98] transition-transform"
        >
          <Phone size={15} className="text-earth-sage-600 shrink-0" />
          <span>Zadzwoń</span>
        </a>

        <ZnanyLekarz
          text="ZnanyLekarz"
          iconSize={16}
          className="flex-1 justify-center py-3 px-2 text-xs rounded-xl active:scale-[0.98]"
        />

        <Link
          href="/kontakt"
          className="flex-1 flex items-center justify-center gap-1.5 bg-earth-sage-600 text-earth-beige-50 py-3 rounded-xl font-semibold text-xs shadow-md active:scale-[0.98] transition-transform"
        >
          <Calendar size={15} className="shrink-0" />
          <span>Konsultacja</span>
        </Link>
      </div>
    </>
  );
};

export default FloatingContactCTA;
