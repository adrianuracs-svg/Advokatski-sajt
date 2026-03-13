
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Team = () => {
  const { t } = useLanguage();

  const teamImages = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800'
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">{t.nav.team}</h1>
          <p className="text-stone-600 text-lg">
            Naš tim ne čine samo advokati i advokatski pripravnici, već i čitava mreža saradnika sa višegodišnjim iskustvom rada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {t.team.members.map((member: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-8 relative">
                <img 
                  src={teamImages[idx]} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a href="#" className="p-3 bg-white rounded-full text-stone-900 hover:bg-stone-100 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-3 bg-white rounded-full text-stone-900 hover:bg-stone-100 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-1">{member.name}</h3>
              <p className="text-stone-500 font-semibold text-sm uppercase tracking-wider mb-4">{member.role}</p>
              <p className="text-stone-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-stone-50 rounded-[3rem] border border-stone-100 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Pridružite se našem timu</h2>
            <p className="text-stone-600">
              Uvek smo u potrazi za talentovanim pravnicima koji dele našu strast prema međunarodnom pravu 
              i izvrsnosti u pružanju pravnih usluga.
            </p>
          </div>
          <Link to="/contact" className="px-10 py-4 bg-stone-900 text-white font-bold rounded-full hover:bg-stone-800 transition-all">
            Pošaljite CV
          </Link>
        </div>
      </div>
    </div>
  );
};
