import React from 'react';
import { Shield, Camera, Scan, Fingerprint, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

const ServicesSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: Shield,
      titleKey: 'services.metal.title',
      descKey: 'services.metal.desc',
      features: isRTL 
        ? ['كشف متعدد المناطق (6-33 منطقة)', 'تحليل وتعريف التهديدات بالذكاء الاصطناعي', 'تنبيهات وتقارير فورية', 'تصميم مقاوم للطقس']
        : ['Multi-zone Detection (6-33 zones)', 'AI Analysis & Threat Identification', 'Real-time Alerts & Reporting', 'Weather-Resistant Design'],
      tags: ['Multi-zone', 'AI Analysis', 'Real-time'],
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=500&fit=crop',
      ctaPrimaryKey: 'services.metal.cta',
      ctaSecondaryKey: 'services.requestQuote',
    },
    {
      icon: Camera,
      titleKey: 'services.cctv.title',
      descKey: 'services.cctv.desc',
      features: isRTL 
        ? ['دقة 4K+ فائقة الوضوح', 'تعرف على الوجوه بالذكاء الاصطناعي', 'رؤية ليلية وتصوير حراري', 'تخزين سحابي + محلي']
        : ['4K+ Ultra HD Resolution', 'Facial Recognition AI', 'Night Vision & Thermal Imaging', 'Cloud + Local Storage'],
      tags: ['4K+', 'Facial AI', 'Cloud'],
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&h=500&fit=crop',
      ctaPrimaryKey: 'services.cctv.cta',
      ctaSecondaryKey: 'services.requestDemo',
    },
    {
      icon: Scan,
      titleKey: 'services.xray.title',
      descKey: 'services.xray.desc',
      features: isRTL 
        ? ['تقنية المسح ثنائي الطاقة', 'كشف المتفجرات والممنوعات', 'تصنيف عضوي/غير عضوي', 'متوافق مع ICAO/TSA']
        : ['Dual-Energy Scanning Technology', 'Explosive & Contraband Detection', 'Organic/Inorganic Classification', 'ICAO/TSA Compliant'],
      tags: ['Dual-energy', 'Explosive Detection', 'Network'],
      image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&h=500&fit=crop',
      ctaPrimaryKey: 'services.xray.cta',
      ctaSecondaryKey: 'services.getPricing',
    },
    {
      icon: Fingerprint,
      titleKey: 'services.access.title',
      descKey: 'services.access.desc',
      features: isRTL 
        ? ['بصمة الإصبع والوجه البيومترية', 'بطاقات RFID و NFC الذكية', 'بيانات اعتماد تطبيق الهاتف', 'مكافحة التمرير وإدارة الزوار']
        : ['Fingerprint & Facial Biometrics', 'RFID & NFC Smart Cards', 'Mobile App Credentials', 'Anti-Passback & Visitor Management'],
      tags: ['Biometric', 'RFID', 'Mobile'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
      ctaPrimaryKey: 'services.access.cta',
      ctaSecondaryKey: 'services.scheduleDemo',
    },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div ref={ref} className="relative container-premium">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`eyebrow mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {t('services.eyebrow')}
          </p>
          <h2 className={`heading-section mb-6 ${isInView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            {t('services.headline')}
          </h2>
          <p className={`body-large text-muted-foreground ${isInView ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            {t('services.subheadline')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-detailed-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-detailed-card group ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  className="w-full h-full object-cover"
                />
                <div className="service-icon-overlay">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="service-detailed-content">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t(service.titleKey)}
                </h3>
                <p className="service-description">
                  {t(service.descKey)}
                </p>

                {/* Features */}
                <div className="service-features">
                  {service.features.map((feature, i) => (
                    <div key={i} className={`feature-item ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="feature-icon">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="service-tech-badges">
                  {service.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className={`service-actions ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <a href="#contact" className={`btn-primary-small ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {t(service.ctaPrimaryKey)}
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </a>
                  <a href="#contact" className="btn-secondary-small">
                    {t(service.ctaSecondaryKey)}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
