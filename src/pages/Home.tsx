
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Globe2, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-stone-50">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-stone-900/20 z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1555354511-09678e789f36?auto=format&fit=crop&q=80&w=2000" 
            alt="Novi Sad - Petrovaradin Fortress" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=2000";
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-10 leading-relaxed font-light">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-bold rounded-full hover:bg-stone-100 transition-all group"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/practice"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all"
              >
                {t.nav.practice}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="flex items-center justify-center space-x-2">
              <ShieldCheck className="h-6 w-6" />
              <span className="font-bold tracking-widest text-xs uppercase">Certified Legal</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Globe2 className="h-6 w-6" />
              <span className="font-bold tracking-widest text-xs uppercase">Global Network</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Building2 className="h-6 w-6" />
              <span className="font-bold tracking-widest text-xs uppercase">EU Law Experts</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle2 className="h-6 w-6" />
              <span className="font-bold tracking-widest text-xs uppercase">Proven Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Rich Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8 leading-tight">
                Vodeća advokatska kancelarija za međunarodno pravo u Srbiji i Crnoj Gori
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                <p>
                  Naša kancelarija je prepoznata kao lider u oblasti <strong>međunarodnog privatnog prava</strong> i 
                  <strong>prava Evropske unije</strong>. Sa decenijskim iskustvom u zastupanju stranih klijenata, 
                  pružamo sigurnost u kompleksnom pravnom okruženju Balkana.
                </p>
                <p>
                  Bilo da ste investitor koji traži <strong>pravni savet za ulaganje u Srbiji</strong>, ili pojedinac 
                  kojem je potreban <strong>advokat za pravo stranaca</strong>, naš tim nudi personalizovan pristup 
                  na šest svetskih jezika. Razumemo specifičnosti prekograničnih sporova i važnost usklađenosti sa 
                  EU regulativama.
                </p>
                <p>
                  Specijalizovani smo za <strong>međunarodnu privredu</strong>, arbitražu, i zaštitu ljudskih prava. 
                  Naša misija je da budemo most između vaših poslovnih ciljeva i lokalnog zakonodavstva, osiguravajući 
                  maksimalnu pravnu zaštitu.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Stručnost u EU integracijama',
                  'Višejezična podrška (6 jezika)',
                  'Zastupanje u Crnoj Gori',
                  'Eksperti za arbitražu',
                  'Poreska optimizacija',
                  'Pravo nepokretnosti'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-stone-800" />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000" 
                  alt="Law Library" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-stone-900 text-white p-8 rounded-2xl hidden md:block max-w-xs shadow-xl">
                <p className="text-2xl font-bold mb-2">15+ Godina</p>
                <p className="text-stone-400 text-sm uppercase tracking-wider font-semibold">Iskustva u međunarodnim pravnim poslovima</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">{t.practice.title}</h2>
            <p className="text-stone-600 text-lg">{t.practice.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.practice.items.slice(0, 6).map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all"
              >
                <Link to={`/practice/${idx}`}>
                  <h3 className="text-xl font-bold text-stone-900 mb-4 hover:text-stone-600 transition-colors cursor-pointer">{item.title}</h3>
                </Link>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                <Link to={`/practice/${idx}`} className="text-stone-900 font-bold text-sm inline-flex items-center hover:underline">
                  Saznajte više <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/practice"
              className="inline-flex items-center justify-center px-10 py-4 bg-stone-900 text-white font-bold rounded-full hover:bg-stone-800 transition-all"
            >
              Pogledajte sve delatnosti
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
