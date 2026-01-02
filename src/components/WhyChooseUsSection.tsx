import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

const WhyChooseUsSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const reasons = [
    {
      icon: '🏆',
      title: isRTL ? 'أكثر من 15 عاماً من التميز' : '15+ Years of Excellence',
      description: isRTL 
        ? 'أكثر من عقد من حماية أهم المنشآت في السعودية بدون حوادث كبرى.'
        : "Over a decade protecting Saudi Arabia's most critical facilities with zero major incidents.",
    },
    {
      icon: '🌍',
      title: isRTL ? 'معايير دولية، خبرة محلية' : 'International Standards, Local Expertise',
      description: isRTL 
        ? 'تقنية عالمية المستوى مع فهم عميق للأنظمة والثقافة السعودية.'
        : 'World-class technology combined with deep understanding of Saudi regulations and culture.',
    },
    {
      icon: '🔧',
      title: isRTL ? 'حلول شاملة من البداية للنهاية' : 'Complete End-to-End Solutions',
      description: isRTL 
        ? 'من الاستشارة إلى الدعم على مدار الساعة، ندير كل جانب من جوانب بنيتك الأمنية.'
        : 'From consultation to 24/7 support, we manage every aspect of your security infrastructure.',
    },
    {
      icon: '🎓',
      title: isRTL ? 'محترفون معتمدون' : 'Certified Professionals',
      description: isRTL 
        ? 'فريقنا يحمل شهادات دولية ويخضع لتدريب مستمر.'
        : 'Our team holds international certifications and undergoes continuous training.',
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-card/30 to-background">
      <div ref={ref} className="container-premium">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className={`relative ${isInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop"
                alt="Alpha Core Solutions Office"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 md:right-6 glass-card p-6 rounded-xl shadow-elevated">
              <div className="text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">
                {t('why.satisfaction')}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className={`heading-section mb-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {t('why.headline')}
            </h2>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`why-card ${isInView ? 'animate-fade-in-up' : 'opacity-0'} ${isRTL ? 'flex-row-reverse' : ''}`}
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <span className="why-icon">{reason.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
