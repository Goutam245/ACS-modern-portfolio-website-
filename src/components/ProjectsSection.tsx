import React from 'react';
import { ArrowRight, Building2, Plane, Factory, Hospital } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

const ProjectsSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=800&fit=crop',
      category: isRTL ? 'الطيران' : 'Aviation',
      title: isRTL ? 'مطار الملك خالد الدولي' : 'King Khalid International Airport',
      description: isRTL 
        ? 'تحديث شامل للبنية التحتية الأمنية لأحد أكثر مراكز الطيران ازدحاماً في المملكة. تم دمج أكثر من 200 نقطة كشف و500 كاميرا مراقبة ومركز قيادة موحد.'
        : "Complete security infrastructure modernization for one of Saudi Arabia's busiest aviation hubs. Integrated 200+ detection points, 500 CCTV cameras, and unified command center.",
      metrics: [
        { number: '200+', label: isRTL ? 'نقطة كشف' : 'Detection Points' },
        { number: '500', label: isRTL ? 'كاميرا مراقبة' : 'CCTV Cameras' },
        { number: '85%', label: isRTL ? 'زيادة الكفاءة' : 'Efficiency Increase' },
      ],
      tags: isRTL 
        ? ['كشف المعادن', 'فحص الأشعة السينية', 'التعرف على الوجوه', 'مراقبة 24/7']
        : ['Metal Detection', 'X-Ray Screening', 'Facial Recognition', '24/7 Monitoring'],
      featured: true,
      icon: Plane,
    },
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      category: isRTL ? 'حكومي' : 'Government',
      title: isRTL ? 'حماية المجمع الوزاري' : 'Ministry Complex Protection',
      description: isRTL 
        ? 'نظام أمني متكامل متعدد الطبقات لمنشأة حكومية حساسة مع أكثر من 50 نقطة وصول وصفر حوادث منذ التشغيل.'
        : 'Multi-layer integrated security system for sensitive government facility with 50+ access points and zero incidents since deployment.',
      features: isRTL 
        ? ['وصول بيومتري', 'حماية محيطية', 'صفر حوادث']
        : ['Biometric Access', 'Perimeter Protection', 'Zero Incidents'],
      icon: Building2,
    },
    {
      image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&h=600&fit=crop',
      category: isRTL ? 'الطاقة' : 'Energy',
      title: isRTL ? 'أمن موقع البتروكيماويات' : 'Petrochemical Site Security',
      description: isRTL 
        ? 'حماية محيط البنية التحتية الحيوية مع كشف تسلل متقدم لمحيط منشأة بطول 10 كم وتحقيق الامتثال لمعايير ISO.'
        : 'Critical infrastructure perimeter protection with advanced intrusion detection for 10km facility perimeter and ISO compliance achieved.',
      features: isRTL 
        ? ['محيط 10 كم', 'كشف متقدم', 'متوافق مع ISO']
        : ['10km Perimeter', 'Advanced Detection', 'ISO Compliant'],
      icon: Factory,
    },
    {
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop',
      category: isRTL ? 'الرعاية الصحية' : 'Healthcare',
      title: isRTL ? 'سلامة حرم المستشفى' : 'Hospital Campus Safety',
      description: isRTL 
        ? 'نظام شامل لحماية المرضى والأصول عبر 5 مباني مع تكامل الاستجابة للطوارئ وإدارة الزوار.'
        : 'Comprehensive patient and asset protection system across 5 buildings with emergency response integration and visitor management.',
      features: isRTL 
        ? ['5 مباني', 'سلامة المرضى', 'استجابة طوارئ']
        : ['5 Buildings', 'Patient Safety', 'Emergency Response'],
      icon: Hospital,
    },
  ];

  const featuredProject = projects[0];
  const regularProjects = projects.slice(1);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div ref={ref} className="relative container-premium">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`eyebrow mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {t('projects.eyebrow')}
          </p>
          <h2 className={`heading-section mb-6 ${isInView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            {t('projects.headline')}
          </h2>
          <p className={`body-large text-muted-foreground ${isInView ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            {t('projects.subheadline')}
          </p>
        </div>

        {/* Featured Project */}
        <div className={`project-featured mb-12 ${isInView ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          <div className="project-featured-image">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
          </div>
          <div className="project-featured-content">
            <span className="project-badge">
              <featuredProject.icon className="w-4 h-4 inline-block mr-2" />
              {featuredProject.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{featuredProject.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{featuredProject.description}</p>
            
            {/* Metrics */}
            <div className="project-metrics">
              {featuredProject.metrics?.map((metric, i) => (
                <div key={i} className="metric-item">
                  <span className="metric-number">{metric.number}</span>
                  <span className="metric-label">{metric.label}</span>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="project-tech">
              {featuredProject.tags?.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>

            <a
              href="#contact"
              className={`inline-flex items-center gap-2 text-primary font-semibold mt-6 group/link ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('projects.viewFullCaseStudy')}
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1 ${isRTL ? 'rotate-180 group-hover/link:-translate-x-1' : ''}`} />
            </a>
          </div>
        </div>

        {/* Regular Projects Grid */}
        <div className="projects-grid-regular">
          {regularProjects.map((project, index) => (
            <div
              key={index}
              className={`project-regular-card group ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="project-regular-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="project-icon-badge">
                  <project.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="project-regular-content">
                <span className="project-category-small">{project.category}</span>
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-4">
                  {project.features?.map((feature, i) => (
                    <div key={i} className={`flex items-center gap-2 text-sm text-foreground/80 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="text-primary">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-primary font-semibold text-sm group/link ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('projects.viewCaseStudy')}
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 ${isRTL ? 'rotate-180 group-hover/link:-translate-x-1' : ''}`} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className={`text-center mt-12 ${isInView ? 'animate-fade-in-up delay-700' : 'opacity-0'}`}>
          <a
            href="#contact"
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-secondary/50 border border-border/30 text-foreground font-semibold transition-all duration-300 hover:bg-secondary hover:border-primary/30 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t('projects.viewAll')}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
