import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

const PartnersSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  // Using placeholder partner logos with company names
  const partners = [
    { name: 'Smiths Detection', initial: 'SD' },
    { name: 'Hikvision', initial: 'HK' },
    { name: 'Bosch Security', initial: 'BS' },
    { name: 'Axis Communications', initial: 'AC' },
    { name: 'Honeywell', initial: 'HW' },
    { name: 'ZKTeco', initial: 'ZK' },
    { name: 'IDIS', initial: 'ID' },
    { name: 'Pelco', initial: 'PL' },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-card/30">
      <div ref={ref} className="container-premium">
        {/* Header */}
        <div className="text-center mb-12">
          <p className={`eyebrow mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {t('partners.eyebrow')}
          </p>
          <h2 className={`text-2xl md:text-3xl font-bold text-foreground ${isInView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            {t('partners.headline')}
          </h2>
        </div>

        {/* Partners Grid */}
        <div className={`partners-grid ${isInView ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-secondary/20 border border-border/20 hover:border-primary/30 hover:bg-secondary/40 transition-all duration-300 group"
              style={{ animationDelay: `${100 * index}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <span className="text-xl font-bold text-primary">{partner.initial}</span>
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
