import React, { useState, useEffect } from 'react';
import { Trophy, Server, ThumbsUp, FolderKanban, Clock, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  isInView: boolean;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = '', duration = 2000, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const stats = [
    { icon: Trophy, value: 15, suffix: '+', label: t('stats.years') },
    { icon: Server, value: 100000, suffix: '+', label: t('stats.devices') },
    { icon: ThumbsUp, value: 98, suffix: '%', label: t('stats.satisfaction') },
    { icon: FolderKanban, value: 150, suffix: '+', label: t('stats.projects') },
    { icon: Clock, value: 24, suffix: '/7', label: t('stats.support') },
    { icon: Award, value: 9001, suffix: '', label: t('stats.certified'), isISO: true },
  ];

  return (
    <section id="stats" className="stats-section py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Animated gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-primary/5 blur-3xl animate-pulse" />

      <div ref={ref} className="relative container-premium px-4 md:px-6 lg:px-12">
        {/* Header */}
        <div className="stats-title text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <p className={`stats-title-small text-xs md:text-sm font-semibold uppercase tracking-widest text-primary mb-3 md:mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {t('stats.eyebrow')}
          </p>
          <h2 className={`stats-title-main text-2xl md:text-4xl lg:text-5xl font-bold text-foreground ${isInView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            {t('stats.headline')}
          </h2>
        </div>

        {/* Stats Grid - Responsive */}
        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-item group text-center p-4 md:p-6 lg:p-8 rounded-2xl bg-secondary/30 border border-primary/10 backdrop-blur-sm transition-all duration-500 hover:bg-secondary/50 hover:border-primary/30 hover:-translate-y-1 hover:shadow-glow ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="stat-icon w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-5 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-accent group-hover:text-primary transition-colors" />
              </div>
              
              <p className="stat-number text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2 md:mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {stat.isISO ? (
                  <span>ISO</span>
                ) : (
                  <Counter end={stat.value} suffix={stat.suffix} isInView={isInView} />
                )}
              </p>
              
              <p className="stat-label text-xs md:text-sm text-muted-foreground font-medium leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
