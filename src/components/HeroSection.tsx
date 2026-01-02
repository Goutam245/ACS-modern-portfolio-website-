import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.png';

const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="home" className="hero relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - Desktop Only */}
      <div className="absolute inset-0 z-0">
        {!isMobile ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              className={`hero-video absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              poster={heroBg}
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            {/* Poster fallback while video loads */}
            {!videoLoaded && (
              <img
                src={heroBg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </>
        ) : (
          /* Mobile: Static poster image only */
          <img
            src={heroBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        
        {/* Gradient Overlay - Reduced opacity for clearer video */}
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Floating Particles Effect - Desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="hero-content relative z-10 container-premium text-center px-4 sm:px-6">
        {/* Pre-headline */}
        <p className="hero-banner eyebrow opacity-0-initial animate-fade-in-up delay-100 mb-4 sm:mb-6">
          {t('hero.preheadline')}
        </p>

        {/* Main Headline */}
        <h1 className="hero-headline heading-display opacity-0-initial animate-fade-in-up delay-200 mb-4">
          <span className="block">{t('hero.headline1')}</span>
          <span className="hero-headline-highlight block gradient-text">{t('hero.headline2')}</span>
        </h1>

        {/* Subheadline */}
        <p className="hero-subheadline body-large text-muted-foreground max-w-3xl mx-auto opacity-0-initial animate-fade-in-up delay-300 mb-4">
          {t('hero.subheadline')}
        </p>

        {/* Description */}
        <p className="hero-description text-sm md:text-base text-muted-foreground max-w-2xl mx-auto opacity-0-initial animate-fade-in-up delay-400 mb-8 sm:mb-10">
          {t('hero.description')}
        </p>

        {/* CTA Buttons - NO layout flip, buttons stay in same positions */}
        <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0-initial animate-fade-in-up delay-500 mb-8 sm:mb-12">
          <a
            href="#services"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-primary font-semibold text-primary-foreground overflow-hidden transition-all duration-300 hover:shadow-glow-lg hover:scale-105 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {t('hero.cta.primary')}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
          <a
            href="#contact"
            className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-foreground/20 font-semibold hover:border-primary hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto text-center"
          >
            {t('hero.cta.secondary')}
          </a>
        </div>

        {/* Trust Badge */}
        <p className="hero-badge text-xs sm:text-sm text-muted-foreground opacity-0-initial animate-fade-in-up delay-600">
          <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full glass">
            ✓ {t('hero.trust')}
          </span>
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#trust"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronDown className="w-6 h-6 animate-scroll-indicator" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;