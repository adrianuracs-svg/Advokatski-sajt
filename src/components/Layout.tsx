
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { languages } from '../translations';
import { Building2, Users, Briefcase, BookOpen, Mail, Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: t.nav.home, path: '/', icon: Building2 },
    { name: t.nav.team, path: '/team', icon: Users },
    { name: t.nav.practice, path: '/practice', icon: Briefcase },
    { name: t.nav.blog, path: '/blog', icon: BookOpen },
    { name: t.nav.contact, path: '/contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <Building2 className="h-8 w-8 text-stone-800 group-hover:text-stone-600 transition-colors" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-stone-900 leading-none uppercase">URACS LAW</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-semibold">International & EU Law</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-6 border-r border-stone-200 pr-6 mr-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-stone-900 ${
                    location.pathname === item.path ? 'text-stone-900' : 'text-stone-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`text-[10px] font-bold px-2 py-1 rounded transition-all ${
                    language === lang.code 
                      ? 'bg-stone-900 text-white shadow-sm' 
                      : 'text-stone-400 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                  title={lang.label}
                >
                  {lang.code}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-500 hover:text-stone-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 grid grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`flex flex-col items-center p-2 rounded-md ${
                      language === lang.code ? 'bg-stone-100' : 'hover:bg-stone-50'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-xs mt-1">{lang.code}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Building2 className="h-8 w-8 text-white" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none uppercase">URACS LAW</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-semibold">International & EU Law</span>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">{t.nav.practice}</h4>
            <ul className="space-y-4 text-sm">
              {t.practice.items.slice(0, 5).map((item, idx) => (
                <li key={idx}>
                  <Link to="/practice" className="hover:text-white transition-colors">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">{t.nav.contact}</h4>
            <ul className="space-y-4 text-sm">
              <li>{t.contact.address}</li>
              <li>{t.contact.phone}</li>
              <li>{t.contact.email}</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} URACS LAW. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Legal Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
