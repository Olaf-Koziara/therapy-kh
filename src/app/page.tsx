'use client';

import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Gestalt from '@/components/home/Gestalt';
import OnlineTherapy from '@/components/home/OnlineTherapy';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Services />
      <Gestalt />
      <OnlineTherapy />
      <Contact />
    </div>
  );
}
