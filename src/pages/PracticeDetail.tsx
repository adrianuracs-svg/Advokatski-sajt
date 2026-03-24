
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Globe2, ShieldCheck, Building2 } from 'lucide-react';

export const PracticeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  
  const practiceIndex = parseInt(id || '0');
  const practice = t.practice.items[practiceIndex];

  if (!practice) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-2xl font-bold">Practice area not found.</h1>
        <Link to="/practice" className="text-stone-600 hover:underline mt-4 inline-block">Back to Practice Areas</Link>
      </div>
    );
  }

  // Image mapping for each practice area
  const practiceImages: Record<number, string> = {
    0: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200", // Privreda
    1: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200", // Sporovi
    2: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1200", // Stranci
    3: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200", // Inostranstvo
    4: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1200", // EU
    5: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200", // Nekretnine
    6: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200", // Porezi
    7: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1200", // Intelektualna svojina
    8: "https://images.unsplash.com/photo-1591115765373-520b7a217157?auto=format&fit=crop&q=80&w=1200", // Porodica
    9: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200", // Krivično
    10: "https://images.unsplash.com/photo-1523805081446-ed9a7bb8997a?auto=format&fit=crop&q=80&w=1200", // Afričko
    11: "https://images.unsplash.com/photo-1512757776233-bc3748177fef?auto=format&fit=crop&q=80&w=1200", // Južnoameričko
  };
  const currentImage = practiceImages[practiceIndex] || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200";

  const sentences = practice.details || [
    `${practice.title} represents a key pillar of our legal practice with a focus on international standards.`,
    "Our approach involves an in-depth analysis of each individual case and the identification of all legal risks.",
    "We provide advisory services that are aligned with the latest trends in global legislation.",
    "We represent clients before all relevant state bodies and institutions in Serbia.",
    "Our office ensures that all your interests are protected through precisely defined contracts.",
    "We help bridge the gaps between different legal systems and business cultures.",
    "We advise on the application of international conventions and bilateral agreements ratified by Serbia.",
    "We provide support in negotiations with third parties to achieve the most favorable outcomes.",
    "Our team continuously monitors changes in legislation to provide you with up-to-date information.",
    "We specialize in solving complex situations that require a multidisciplinary approach.",
    "We ensure confidentiality and integrity at every step of the legal process.",
    "We provide services in several world languages to facilitate communication with clients.",
    "Our network of partners abroad allows us to provide support beyond the borders of Serbia.",
    "We are focused on efficiency and achieving results in the shortest possible time.",
    "We advise on preventive measures that can prevent future legal disputes.",
    "We provide education to clients about their rights and obligations in specific areas.",
    "We represent the interests of both individuals and large corporate systems.",
    "Our reputation is built on trust and successfully resolved international cases.",
    "We believe in transparency and regular reporting to clients on the progress of their cases.",
    "We analyze the impact of global economic trends on your legal position.",
    "We provide support regarding digital assets and modern technologies.",
    "We advise on ethical standards and compliance with international codes of conduct.",
    "We help in obtaining all necessary certificates for international business.",
    "We represent clients in proceedings before independent regulatory bodies.",
    "We advise on the legal aspects of sustainable development and the green agenda.",
    "We provide support regarding the protection of personal data in a cross-border context.",
    "We advise on consumer rights in international trade.",
    "We help in structuring complex financial transactions.",
    "Our mission is to be your voice in the legal system of Serbia and beyond.",
    "Your legal security in the international environment is our mission and obligation."
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/practice" className="inline-flex items-center text-stone-500 hover:text-stone-900 mb-8 font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t.practice.practiceDetail?.backToPractice || t.nav.practice}
          </Link>
          
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-4 bg-stone-100 rounded-2xl text-stone-900">
              <Building2 className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900">{practice.title}</h1>
          </div>

          {/* New Image Section */}
          <div className="mb-12 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video relative">
            <img 
              src={currentImage} 
              alt={practice.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
          </div>

          <div className="prose prose-stone prose-lg max-w-none">
            <div className="bg-stone-50 p-8 md:p-16 rounded-[3rem] border border-stone-100 shadow-sm mb-12">
              <p className="text-2xl text-stone-800 font-semibold leading-relaxed italic mb-12 border-l-8 border-stone-900 pl-8">
                {practice.desc}
              </p>
              
              <div className="space-y-6">
                {sentences.map((sentence, i) => (
                  <p key={i} className="text-stone-600 leading-relaxed text-justify">
                    {sentence}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
              <ShieldCheck className="h-8 w-8 text-stone-800 mb-4" />
              <h4 className="font-bold text-stone-900 mb-2">{t.practice.practiceDetail?.legalSecurity || 'Legal Security'}</h4>
              <p className="text-xs text-stone-500 uppercase tracking-wider">{t.practice.practiceDetail?.legalSecurityDesc || 'Maximum protection of your interests'}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
              <Globe2 className="h-8 w-8 text-stone-800 mb-4" />
              <h4 className="font-bold text-stone-900 mb-2">{t.practice.practiceDetail?.globalReach || 'Global Reach'}</h4>
              <p className="text-xs text-stone-500 uppercase tracking-wider">{t.practice.practiceDetail?.globalReachDesc || 'Support in Serbia and abroad'}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
              <CheckCircle2 className="h-8 w-8 text-stone-800 mb-4" />
              <h4 className="font-bold text-stone-900 mb-2">{t.practice.practiceDetail?.expertise || 'Expertise'}</h4>
              <p className="text-xs text-stone-500 uppercase tracking-wider">{t.practice.practiceDetail?.expertiseDesc || 'Specialized team of experts'}</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-stone-900 text-white font-bold rounded-full hover:bg-stone-800 transition-all shadow-lg">
              {t.practice.practiceDetail?.bookConsultation || 'Book a consultation for this area'}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
