import Hero from "@/components/home/Hero";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServicesTeaser from "@/components/home/ServicesTeaser";
import FAQTeaser from "@/components/home/FAQTeaser";
import HomeCTA from "@/components/home/HomeCTA";
import JsonLd from "@/components/seo/JsonLd";
import { professionalServiceJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={professionalServiceJsonLd()} />
      <Hero />
      <AboutTeaser />
      <ServicesTeaser />
      <FAQTeaser />
      <HomeCTA />
    </div>
  );
}
