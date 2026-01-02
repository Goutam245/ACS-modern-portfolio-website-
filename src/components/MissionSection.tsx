import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

const MissionSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const values = [
    {
      icon: '🎯',
      title: t('mission.value1.title'),
      desc: t('mission.value1.desc'),
    },
    {
      icon: '🤝',
      title: t('mission.value2.title'),
      desc: t('mission.value2.desc'),
    },
    {
      icon: '🇸🇦',
      title: t('mission.value3.title'),
      desc: t('mission.value3.desc'),
    },
  ];

  const floatingStats = [
    { icon: '🏆', text: t('stats.projects') + ' 150+' },
    { icon: '✓', text: t('stats.satisfaction') + ' 98%' },
  ];

  return (
    <section id="mission" className="mission-section-enhanced relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div ref={ref} className="relative container-premium">
        <div className="mission-grid">
          {/* Image Side */}
          <div className={`mission-image-side ${isInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="mission-image-main">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=900&fit=crop"
                alt="Security Operations Center"
                className="w-full h-full object-cover"
              />
              {/* Overlay Badge */}
              <div className="mission-overlay-badge">
                <span className="badge-number">15+</span>
                <span className="badge-label">{t('trust.years')}</span>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="mission-stats-floating">
              {floatingStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="floating-stat"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <span className="stat-icon">{stat.icon}</span>
                  <span className="stat-text">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div className={`mission-content-side ${isInView ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
            <p className="eyebrow mb-4">{t('mission.eyebrow')}</p>
            
            <h2 className="mission-title">
              {t('mission.headline1')}
              <span className="highlight block">{t('mission.headline2')}</span>
            </h2>

            <div className="mission-text">
              <p className="lead-paragraph">
                {t('mission.body')}
              </p>
              <p>
                {t('mission.body2')}
              </p>
            </div>

            {/* Values Grid */}
            <div className="mission-values">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <span className="value-icon">{value.icon}</span>
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className={`mission-cta flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a 
                href="#contact" 
                className={`btn-primary-small inline-flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('mission.learnMore')}
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </a>
              <a 
                href="#contact" 
                className="btn-secondary-small"
              >
                {t('mission.partner')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
