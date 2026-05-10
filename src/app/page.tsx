import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Gestalt from '@/components/home/Gestalt';
import OnlineTherapy from '@/components/home/OnlineTherapy';
import Contact from '@/components/home/Contact';
import FAQ from '@/components/home/FAQ';
import JsonLd from '@/components/seo/JsonLd';
import { professionalServiceJsonLd } from '@/lib/seo';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={professionalServiceJsonLd()} />
      <Hero />
      <About />
      <Services />
      <Gestalt />
      <OnlineTherapy />
      <FAQ />
      <Contact />
    </div>
  );
}
