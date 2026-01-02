import React from 'react';
import { Linkedin, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.jpg';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.mission', href: '#mission' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.projects', href: '#stats' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const services = [
    { key: 'services.metal.title', href: '#services' },
    { key: 'services.cctv.title', href: '#services' },
    { key: 'services.xray.title', href: '#services' },
    { key: 'services.access.title', href: '#services' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-card/50" />

      <div className="relative container-premium">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Alpha Core Solutions"
              className="h-12 w-auto mb-6"
            />
            <p className="gradient-text font-semibold text-lg mb-4">
              {t('footer.tagline')}
            </p>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
              {t('footer.description')}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('footer.quicklinks')}</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('footer.services')}</h4>
            <ul className="space-y-4">
              {services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 inline-block text-sm"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:info@alphacs.sa"
                  className="hover:text-foreground transition-colors"
                >
                  info@alphacs.sa
                </a>
              </li>
              <li>
                <a
                  href="tel:+966000000000"
                  className="hover:text-foreground transition-colors"
                >
                  +966 X XXXX XXXX
                </a>
              </li>
              <li>{t('contact.info.address.value')}</li>
              <li className="text-primary font-medium">
                {t('contact.info.emergency')}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              {t('footer.copyright')}
            </p>

            <div className="flex items-center gap-4 md:gap-6 text-sm flex-wrap justify-center">
              <Link
                to="/privacy-policy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                to="/terms-of-service"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('footer.terms')}
              </Link>
              <Link
                to="/cookie-policy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('footer.cookies')}
              </Link>
            </div>

            <p className="text-sm text-accent font-medium">
              {t('footer.saudi')}
            </p>
          </div>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-glow hover:shadow-glow-lg hover:scale-110 transition-all duration-300 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
