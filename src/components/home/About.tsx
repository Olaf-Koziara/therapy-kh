import Image from 'next/image';
import { Award, BookOpen, CheckCircle2, Clock, Heart, ShieldCheck, Target } from 'lucide-react';

const About = () => {
  const credentials = [
    { text: "Certyfikat Psychoterapeutki Gestalt EAGT", icon: Award },
    { text: "Certyfikat specjalisty terapii uzależnień", icon: Award },
    { text: "Studia magisterskie - Pedagogika i Psychologia", icon: BookOpen },
    { text: "Doświadczenie zawodowe od 2009 roku", icon: Clock }
  ];

  return (
    <section id="o-mnie" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2">
            <span className="text-earth-sage-600 font-medium tracking-widest uppercase text-sm mb-4 block">O mnie</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-earth-brown-900 leading-tight">Psychoterapia oparta na zrozumieniu i akceptacji</h2>
            <p className="text-lg text-earth-brown-700 leading-relaxed mb-6">
              Jestem certyfikowanym psychoterapeutą Gestalt oraz specjalistą psychoterapii uzależnień. Od kilkunastu lat wspieram moich Klientów w procesie poznawania siebie, budzenia świadomości i brania odpowiedzialności za własne życie.
            </p>
            <p className="text-lg text-earth-brown-700 leading-relaxed mb-10">
              Moja praca to przede wszystkim spotkanie dwojga ludzi oparte na autentyczności i szacunku. Stale podnoszę swoje kompetencje, biorąc udział w licznych szkoleniach, a moją pracę poddaję regularnej superwizji u certyfikowanych specjalistów.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3"
                >
                  <div className="mt-1 bg-earth-sage-50 p-2 rounded-lg text-earth-sage-600">
                    <item.icon size={18} />
                  </div>
                  <span className="text-earth-brown-800 font-medium text-sm leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="aspect-square bg-earth-sage-50 rounded-[2rem] overflow-hidden flex items-center justify-center p-8 border border-earth-sage-100 group">
                   <Image
                    src="/images/tree-logo.svg"
                    className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    alt="symbol drzewa"
                    width={180}
                    height={180}
                   />
                </div>
                <div className="aspect-[3/4] bg-earth-beige-100 rounded-[2rem] shadow-inner flex items-center justify-center">
                  <Heart className="text-earth-beige-300" size={48} />
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-[3/4] bg-earth-brown-50 rounded-[2rem] shadow-sm border border-earth-brown-100 flex items-center justify-center">
                   <Target className="text-earth-brown-200" size={48} />
                </div>
                <div className="aspect-square bg-earth-sage-100 rounded-[2rem] shadow-sm flex items-center justify-center">
                   <BookOpen className="text-earth-sage-200" size={48} />
                </div>
              </div>
            </div>
            <div className="mt-8 grid gap-4 rounded-3xl border border-earth-beige-200 bg-earth-beige-50 p-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 flex-shrink-0 text-earth-sage-600" size={20} />
                <p className="text-sm leading-relaxed text-earth-brown-700">
                  Praca terapeutyczna odbywa się w poufnej, bezpiecznej relacji i podlega regularnej superwizji.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 flex-shrink-0 text-earth-sage-600" size={20} />
                <p className="text-sm leading-relaxed text-earth-brown-700">
                  Pierwsza konsultacja pomaga rozpoznać potrzeby i dobrać najlepszą formę dalszej pracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
