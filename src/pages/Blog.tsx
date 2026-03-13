
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const Blog = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">{t.blog.title}</h1>
          <p className="text-stone-600 text-lg">
            Pratite najnovije pravne trendove, analize zakona i savete naših stručnjaka za međunarodno i EU pravo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.blog.posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/law${idx}/800/600`} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-xs text-stone-400 mb-4 uppercase tracking-widest font-bold">
                  <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> 12. Mart 2024.</span>
                  <span className="flex items-center"><User className="h-3 w-3 mr-1" /> Pravni Tim</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-stone-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <button className="text-stone-900 font-bold text-sm inline-flex items-center group-hover:translate-x-1 transition-transform">
                  Pročitaj više <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* SEO Newsletter Section */}
        <div className="mt-24 bg-stone-50 rounded-3xl p-12 text-center border border-stone-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Budite u toku sa pravnim promenama</h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Prijavite se na naš newsletter i primajte mesečne analize o međunarodnom pravu, 
            investicijama u Srbiji i pravima stranaca direktno u vaš inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Vaša email adresa" 
              className="flex-grow px-6 py-3 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900"
            />
            <button className="px-8 py-3 bg-stone-900 text-white font-bold rounded-full hover:bg-stone-800 transition-all">
              Prijavi se
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
