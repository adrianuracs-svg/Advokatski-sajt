
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { Team } from './pages/Team';
import { Practice } from './pages/Practice';
import { PracticeDetail } from './pages/PracticeDetail';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { useEffect } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-stone-900 selection:text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/practice/:id" element={<PracticeDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
