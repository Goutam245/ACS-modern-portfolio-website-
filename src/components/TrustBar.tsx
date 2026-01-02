import React from 'react';
import { Trophy, Shield, MapPin, Star, Clock, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TrustBar: React.FC = () => {
  const { t } = useLanguage();

  const trustItems = [
    { icon: Trophy, value: '15+', label: t('trust.years') },
    { icon: Shield, value: 'ISO', label: t('trust.certified') },
    { icon: MapPin, value: '100+', label: t('trust.projects') },
    { icon: Star, value: '98%', label: t('trust.satisfaction') },
    { icon: Clock, value: '24/7', label: t('trust.support') },
    { icon: Building2, value: '✓', label: t('trust.approved') },
  ];

  return (
    <section id="trust" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-card to-secondary/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative container-premium">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="group text-center p-4 rounded-xl transition-all duration-300 hover:bg-primary/5"
            >
              <item.icon className="w-8 h-8 mx-auto mb-3 text-accent group-hover:text-primary transition-colors duration-300" />
              <p className="font-display text-2xl md:text-3xl font-bold gradient-text mb-1">
                {item.value}
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
