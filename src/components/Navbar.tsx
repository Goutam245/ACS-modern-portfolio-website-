import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.mission', href: '#mission' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.projects', href: '#stats' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <>
      <nav
        className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass py-2 md:py-3 shadow-lg shadow-background/20'
            : 'bg-transparent py-3 md:py-6'
        }`}
      >
        <div className="container-premium flex items-center justify-between">
          {/* Logo + Trust Badge */}
          <div className="navbar-left flex items-center gap-2 md:gap-4">
            <a href="#home" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="Alpha Core Solutions"
                className="h-8 md:h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            
            {/* Trust Badge - Hidden on tablet and below */}
            <div className="ksa-badge hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary whitespace-nowrap">
                {language === 'en' ? 'KSA Trusted Partner' : 'شريك موثوق في المملكة'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-menu hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="relative text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium text-sm xl:text-base group whitespace-nowrap"
              >
                {t(link.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-4 py-1.5 md:py-2 rounded-full glass hover:bg-primary/10 transition-all duration-300 group"
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 md:w-4 h-3.5 md:h-4 text-primary transition-transform duration-300 group-hover:rotate-180" />
              <span className="text-xs md:text-sm font-semibold">
                {language === 'en' ? 'عربي' : 'EN'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hamburger lg:hidden p-1.5 md:p-2 rounded-lg glass hover:bg-primary/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 md:w-6 md:h-6" />
              ) : (
                <Menu className="w-5 h-5 md:w-6 md:h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-0 right-0 p-6 transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-10'
          }`}
        >
          <div className="glass-card p-8 space-y-6">
            {navLinks.map((link, index) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-xl font-semibold text-foreground hover:text-primary transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {t(link.key)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
