
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Team = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: 'Adrian Uracs',
      role: 'Osnivač i vodeći advokat',
      specialty: 'Međunarodno i EU pravo',
      bio: 'Ekspert sa preko 15 godina iskustva u prekograničnim sporovima i savetovanju multinacionalnih korporacija.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Elena Marković',
      role: 'Partner',
      specialty: 'Privredno pravo i arbitraža',
      bio: 'Specijalizovana za međunarodnu trgovinsku arbitražu i zaštitu stranih investicija u regionu.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Marko Nikolić',
      role: 'Viši saradnik',
      specialty: 'Pravo stranaca i imigracija',
      bio: 'Vodeći stručnjak za pitanja boravka, radnih dozvola i državljanstva za strane državljane u Srbiji.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">{t.nav.team}</h1>
          <p className="text-stone-600 text-lg">
            Naš tim čine vrhunski stručnjaci posvećeni pružanju najkvalitetnije pravne pomoći. 
            Govorimo vaš jezik i razumemo vaše potrebe u međunarodnom okruženju.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-8 relative">
                <img 
                  src={member.image} 
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
