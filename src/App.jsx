import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import logo from './assets/Aioon_logo-01.png';
import logoWhite from './assets/white logo aioon.png';
import robotImg from './assets/ROBOT.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(false);
  const [navbarSolid, setNavbarSolid] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setNavbarSolid(latest > 80);
  });

  const translations = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      heroTitle: "Where Technology Meets Business Vision",
      heroDesc:
        "Aioon Technologies delivers smart, scalable, and fully customized digital ecosystems. As Saudi Arabia’s exclusive ENZAPPS support partner, we ensure seamless integration and reliable, future-ready solutions.",
      explore: "Let's Explore",
    },
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      contact: "اتصل بنا",
      heroTitle: "حيث تلتقي التكنولوجيا برؤية الأعمال",
      heroDesc:
        "تقدم تقنيات أيون أنظمة رقمية ذكية وقابلة للتطوير ومخصصة بالكامل. كشريك دعم حصري لـ ENZAPPS في المملكة العربية السعودية، نضمن التكامل السلس والحلول الموثوقة الجاهزة للمستقبل.",
      explore: "لنستكشف",
    },
  };

  const lang = isArabic ? 'ar' : 'en';
  const t = translations[lang];
  const dir = isArabic ? 'rtl' : 'ltr';

  return (
    <div
      dir={dir}
      className={`min-h-screen bg-black text-gray-100 font-sans antialiased ${isArabic ? 'font-arabic' : ''}`}
    >
      {/* Language Toggle */}
      <button
        onClick={() => setIsArabic(!isArabic)}
        className="fixed top-6 right-8 z-50 bg-gray-800/80 text-white px-5 py-2.5 rounded-full border border-gray-600 hover:bg-gray-700 transition backdrop-blur-sm"
      >
        {isArabic ? 'EN' : 'عربي'}
      </button>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          navbarSolid
            ? 'bg-black shadow-xl border-b border-gray-800'
            : 'bg-white border-b border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          {/* Logo - switches to white when scrolled */}
          <a href="/" className="flex items-center">
            <img
              src={navbarSolid ? logoWhite : logo}
              alt="AIOON"
              className="h-9 md:h-11 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-lg font-medium">
            <li
              className={`cursor-pointer transition-colors ${
                navbarSolid ? 'text-gray-300 hover:text-white' : 'text-gray-900 hover:text-black'
              }`}
            >
              {t.home}
            </li>
            <li
              className={`cursor-pointer transition-colors ${
                navbarSolid ? 'text-gray-300 hover:text-white' : 'text-gray-900 hover:text-black'
              }`}
            >
              {t.about}
            </li>
            <li
              className={`cursor-pointer transition-colors ${
                navbarSolid ? 'text-gray-300 hover:text-white' : 'text-gray-900 hover:text-black'
              }`}
            >
              {t.services}
            </li>
            <li
              className={`cursor-pointer transition-colors ${
                navbarSolid ? 'text-gray-300 hover:text-white' : 'text-gray-900 hover:text-black'
              }`}
            >
              {t.contact}
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden text-3xl focus:outline-none ${
              navbarSolid ? 'text-white' : 'text-black'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black py-8 border-t border-gray-800">
            <ul className="flex flex-col items-center gap-8 text-lg font-medium text-gray-200">
              <li className="hover:text-white transition" onClick={() => setIsMenuOpen(false)}>
                {t.home}
              </li>
              <li className="hover:text-white transition" onClick={() => setIsMenuOpen(false)}>
                {t.about}
              </li>
              <li className="hover:text-white transition" onClick={() => setIsMenuOpen(false)}>
                {t.services}
              </li>
              <li className="hover:text-white transition" onClick={() => setIsMenuOpen(false)}>
                {t.contact}
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16" />

      {/* Hero Section - with greyish-black gradient for seamless look */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Unified grey-black minimal gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left - Text (reduced size) */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white"
            >
              {t.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-10"
            >
              {t.heroDesc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-gray-200 to-white text-black font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] border border-gray-300"
              >
                {t.explore} →
              </a>
            </motion.div>
          </div>

          {/* Right - Silver AI Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="hidden md:flex justify-center"
          >
            <img
              src={robotImg}
              alt="Silver AI Robot"
              className="w-80 md:w-96 lg:w-[500px] object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Placeholder for other sections */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-12">Aioon Technologies</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Aioon Technologies, a dedicated technology partner for enterprises in the Kingdom of Saudi Arabia...
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 text-center text-gray-400">
        <p>© {new Date().getFullYear()} AIOON Technologies. All rights reserved.</p>
        <p className="mt-2">Proudly supporting Saudi Vision 2030 through innovation and excellence.</p>
      </footer>
    </div>
  );
}

export default App;