
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">{t.contact.title}</h1>
          <p className="text-stone-600 text-lg">
            Naš tim vam stoji na raspolaganju za sva pitanja. Kontaktirajte nas putem telefona, emaila ili posetite našu kancelariju u srcu Beograda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-stone-100 rounded-xl text-stone-900">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Lokacija</h4>
                  <p className="text-stone-600 text-sm">{t.contact.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-stone-100 rounded-xl text-stone-900">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Telefon</h4>
                  <p className="text-stone-600 text-sm">{t.contact.phone}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-stone-100 rounded-xl text-stone-900">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Email</h4>
                  <p className="text-stone-600 text-sm">{t.contact.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-stone-100 rounded-xl text-stone-900">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Radno vreme</h4>
                  <p className="text-stone-600 text-sm">Pon - Pet: 09:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="bg-white p-10 md:p-12 rounded-[3rem] border border-stone-100 shadow-xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700 ml-1">Ime i prezime</label>
                  <input 
                    type="text" 
                    placeholder="Vaše ime" 
                    className="w-full px-6 py-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-stone-900 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700 ml-1">Email adresa</label>
                  <input 
                    type="email" 
                    placeholder="vaš@email.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-stone-900 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700 ml-1">Predmet</label>
                <input 
                  type="text" 
                  placeholder="O čemu se radi?" 
                  className="w-full px-6 py-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-stone-900 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700 ml-1">Poruka</label>
                <textarea 
                  rows={6}
                  placeholder="Opišite vaš pravni problem..." 
                  className="w-full px-6 py-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-stone-900 transition-all resize-none"
                />
              </div>
              <button className="w-full py-5 bg-stone-900 text-white font-bold rounded-2xl hover:bg-stone-800 transition-all flex items-center justify-center space-x-2">
                <span>Pošaljite poruku</span>
                <Send className="h-5 w-5" />
              </button>
              <p className="text-center text-xs text-stone-400 mt-4">
                Slanjem ove poruke potvrđujete da ste pročitali našu politiku privatnosti.
              </p>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 h-[400px] bg-stone-200 rounded-[3rem] overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-stone-400 mx-auto mb-4" />
              <p className="text-stone-500 font-bold uppercase tracking-widest">Google Maps Integration</p>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
            alt="Map" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};
