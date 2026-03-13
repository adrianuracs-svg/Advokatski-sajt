
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

import { useParams, Link } from 'react-router-dom';

export const Practice = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">{t.practice.title}</h1>
            <p className="text-stone-600 text-lg leading-relaxed">
              {t.practice.description} Naša kancelarija je specijalizovana za prekogranične pravne izazove, 
              pružajući sigurnost klijentima iz celog sveta koji posluju ili borave u Srbiji i Crnoj Gori.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.practice.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="h-12 w-12 bg-stone-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                <Briefcase className="h-6 w-6" />
              </div>
              <Link to={`/practice/${idx}`}>
                <h3 className="text-2xl font-bold text-stone-900 mb-4 hover:text-stone-600 transition-colors cursor-pointer">{item.title}</h3>
              </Link>
              <p className="text-stone-600 leading-relaxed mb-6">
                {item.desc}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-stone-500">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-stone-400" />
                  Stručno savetovanje i analiza slučaja
                </li>
                <li className="flex items-center text-sm text-stone-500">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-stone-400" />
                  Zastupanje pred nadležnim organima
                </li>
                <li className="flex items-center text-sm text-stone-500">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-stone-400" />
                  Izrada pravne dokumentacije na više jezika
                </li>
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Extra SEO Text */}
        <div className="mt-24 bg-stone-900 rounded-[3rem] p-12 md:p-20 text-white">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Zašto odabrati našu kancelariju za međunarodno pravo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-stone-300">Lokalna ekspertiza, globalni standardi</h4>
                <p className="text-stone-400 leading-relaxed">
                  Poznajemo srpsko i crnogorsko pravo do detalja, ali razmišljamo globalno. Naši advokati su školovani 
                  na prestižnim evropskim univerzitetima i redovno prate promene u EU regulativi.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-stone-300">Višejezična komunikacija</h4>
                <p className="text-stone-400 leading-relaxed">
                  Komunikacija je ključ uspeha. Pružamo usluge na srpskom, engleskom, mađarskom, francuskom, španskom i italijanskom jeziku, 
                  što eliminiše barijere i nesporazume u kompleksnim pravnim stvarima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
