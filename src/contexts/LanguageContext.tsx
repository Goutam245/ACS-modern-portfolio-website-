import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.mission': 'Our Mission',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.preheadline': "Kingdom of Saudi Arabia's Trusted Security Partner",
    'hero.headline1': 'Securing Tomorrow,',
    'hero.headline2': 'Today',
    'hero.subheadline': 'Advanced Physical Security Solutions for Critical Infrastructure & Government Entities',
    'hero.description': 'Cutting-edge Metal Detection | AI-Powered CCTV | X-Ray Technology | Biometric Access Control',
    'hero.cta.primary': 'Explore Our Solutions',
    'hero.cta.secondary': 'Request Consultation',
    'hero.trust': '15+ Years Excellence | Saudi Government Approved',
    
    // Trust Bar
    'trust.years': 'Years Experience',
    'trust.certified': 'ISO 9001 Certified',
    'trust.projects': 'Saudi Projects',
    'trust.satisfaction': 'Client Satisfaction',
    'trust.support': '24/7 Security Support',
    'trust.approved': 'Government Approved',
    
    // Mission
    'mission.eyebrow': 'OUR MISSION',
    'mission.headline1': 'Protecting What Matters Most',
    'mission.headline2': 'Through Innovation & Excellence',
    'mission.body': "At Alpha Core Solutions, we don't just install security systems—we build comprehensive safety ecosystems. For over 15 years, we've been the trusted partner for Saudi Arabia's most critical facilities, from international airports to government ministries.",
    'mission.body2': 'Our mission is simple yet profound: to provide world-class physical security solutions that give our clients absolute peace of mind.',
    'mission.value1.title': 'Innovation First',
    'mission.value1.desc': 'Adopting latest security tech globally',
    'mission.value2.title': 'Client Trust',
    'mission.value2.desc': 'Building lasting partnerships',
    'mission.value3.title': 'Saudi Excellence',
    'mission.value3.desc': 'Proudly serving the Kingdom',
    'mission.learnMore': 'Learn Our Story',
    'mission.partner': 'Partner With Us',
    
    // Services
    'services.eyebrow': 'OUR SERVICES',
    'services.headline': 'Comprehensive Security Solutions',
    'services.subheadline': 'World-class protection for critical infrastructure',
    
    'services.metal.title': 'Advanced Metal Detection Systems',
    'services.metal.desc': 'State-of-the-art walk-through gates, handheld scanners, and under-vehicle inspection systems.',
    'services.metal.cta': 'View Technology',
    
    'services.cctv.title': 'AI-Powered CCTV Surveillance',
    'services.cctv.desc': 'Next-generation surveillance with facial recognition, behavior analysis, and predictive threat detection.',
    'services.cctv.cta': 'Explore Systems',
    
    'services.xray.title': 'X-Ray Screening Solutions',
    'services.xray.desc': 'High-resolution baggage and cargo screening for airports, seaports, and high-security checkpoints.',
    'services.xray.cta': 'See Capabilities',
    
    'services.access.title': 'Intelligent Access Control',
    'services.access.desc': 'Comprehensive access management with biometric authentication, smart cards, and mobile credentials.',
    'services.access.cta': 'Discover More',
    
    'services.requestQuote': 'Request Quote',
    'services.requestDemo': 'Request Demo',
    'services.getPricing': 'Get Pricing',
    'services.scheduleDemo': 'Schedule Demo',
    
    // Stats
    'stats.eyebrow': 'NUMBERS THAT SPEAK',
    'stats.headline': 'Proven Track Record',
    'stats.years': 'Years Leadership',
    'stats.devices': 'Devices Deployed',
    'stats.satisfaction': 'Client Satisfaction',
    'stats.projects': 'Projects Completed',
    'stats.support': 'Monitoring & Support',
    'stats.certified': 'Certified Excellence',
    
    // Projects
    'projects.eyebrow': 'SUCCESS STORIES',
    'projects.headline': "Protecting Saudi Arabia's Critical Infrastructure",
    'projects.subheadline': "Trusted by the Kingdom's most important facilities",
    'projects.viewCaseStudy': 'View Case Study',
    'projects.viewFullCaseStudy': 'View Full Case Study',
    'projects.viewAll': 'View All Projects',
    
    // Why Choose Us
    'why.headline': 'Why Saudi Arabia Trusts Alpha Core Solutions',
    'why.satisfaction': 'Client Satisfaction',
    
    // Partners
    'partners.eyebrow': 'Trusted Technology Partners',
    'partners.headline': 'Partnering with global leaders to deliver excellence',
    
    // Contact
    'contact.eyebrow': 'GET IN TOUCH',
    'contact.headline': "Let's Discuss Your Security Needs",
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.company': 'Company/Organization',
    'contact.service': 'Service Interest',
    'contact.service.placeholder': 'Select a service',
    'contact.service.metal': 'Metal Detection Systems',
    'contact.service.cctv': 'CCTV Surveillance',
    'contact.service.xray': 'X-Ray Screening',
    'contact.service.access': 'Access Control',
    'contact.service.complete': 'Complete Security Solution',
    'contact.service.consultation': 'Consultation Request',
    'contact.message': 'Project Details',
    'contact.message.placeholder': 'Tell us about your security requirements...',
    'contact.submit': 'Request Consultation',
    'contact.success': 'Thank you! Our team will contact you within 24 hours.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.address': 'Address',
    'contact.info.hours': 'Business Hours',
    'contact.info.address.value': 'Riyadh, Kingdom of Saudi Arabia',
    'contact.info.hours.value': 'Sun - Thu: 8:00 AM - 6:00 PM',
    'contact.info.emergency': 'Emergency Support: Available 24/7',
    
    // Footer
    'footer.tagline': 'Securing Tomorrow, Today',
    'footer.description': 'Leading provider of advanced physical security solutions in Saudi Arabia.',
    'footer.quicklinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 Alpha Core Solutions Est. All Rights Reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    'footer.saudi': 'Proudly Serving the Kingdom of Saudi Arabia',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.readMore': 'Read More',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.mission': 'مهمتنا',
    'nav.services': 'خدماتنا',
    'nav.projects': 'مشاريعنا',
    'nav.contact': 'اتصل بنا',
    
    // Hero - Official Client Translations
    'hero.preheadline': 'الشريك الأمني الموثوق للمملكة العربية السعودية',
    'hero.headline1': 'تأمين اليوم',
    'hero.headline2': 'والغد',
    'hero.subheadline': 'حلول الأمن المادي المتقدمة للبنية التحتية الحيوية والجهات الحكومية',
    'hero.description': 'أحدث تقنيات الكشف عن المعادن | كاميرات مراقبة مدعومة بالذكاء الاصطناعي | تقنيات الأشعة السينية | أنظمة التحكم في الدخول باستخدام القياسات الحيوية',
    'hero.cta.primary': 'استكشف حلولنا',
    'hero.cta.secondary': 'اطلب استشارة',
    'hero.trust': 'أكثر من 15 عاماً من التميز | معتمد من الحكومة السعودية',
    
    // Trust Bar
    'trust.years': 'سنوات خبرة',
    'trust.certified': 'شهادة ISO 9001',
    'trust.projects': 'مشاريع سعودية',
    'trust.satisfaction': 'رضا العملاء',
    'trust.support': 'دعم أمني على مدار الساعة',
    'trust.approved': 'مورد حكومي معتمد',
    
    // Mission - Official Client Translations
    'mission.eyebrow': 'مهمتنا',
    'mission.headline1': 'نحمي ما يهم أكثر',
    'mission.headline2': 'من خلال الابتكار والتميز',
    'mission.body': 'حيث نُقدم مجموعة واسعة من منتجات الأمن وتقنية المعلومات، ولطالما كنا الشريك الموثوق به للوزارات الحكومية في المملكة العربية السعودية.',
    'mission.body2': 'مهمتنا بسيطة في صياغتها، عميقة في جوهرها: حيث نقدم حلول أمن مادي عالمية المستوى تمنح عملاءنا راحة بال تامة. ومن خلال أحدث التقنيات والتنفيذ الاحترافي والدعم المتواصل على مدار الساعة، كما نضمن حماية كل فرد وممتلكات ومنشأة تقع ضمن نطاق مسؤوليتنا وفق لأعلى المعايير الدولية.',
    'mission.body3': 'نحن ملتزمون الابتكار، والموثوقية وتعزيز أمن وسلامة المملكة.',
    'mission.value1.title': 'الابتكار أولاً',
    'mission.value1.desc': 'نتبنى أحدث التقنيات الأمنية على مستوى العالم',
    'mission.value2.title': 'ثقة العملاء',
    'mission.value2.desc': 'بناء شراكات مستدامة وطويلة الأمد',
    'mission.value3.title': 'التميّز السعودي',
    'mission.value3.desc': 'خدمة المملكة العربية السعودية بكل فخر',
    'mission.learnMore': 'تعرف على قصتنا',
    'mission.partner': 'شاركنا',
    
    // Services - Official Client Translations
    'services.eyebrow': 'خدماتنا',
    'services.headline': 'حلول أمنية شاملة',
    'services.subheadline': 'حلول أمنية وتقنية معلومات متقدمة',
    
    'services.metal.title': 'أنظمة متقدمة للكشف عن المعادن',
    'services.metal.desc': 'بوابات مرور متطورة للمُشاة، وأجهزة مسح ضوئي محمولة وأنظمة فحص أسفل المركبات. موثوقة لدى المطارات الدولية والمنشآت الحكومية والبنية التحتية الحيوية في جميع أنحاء المملكة العربية السعودية.',
    'services.metal.feature1': 'متعددة المناطق',
    'services.metal.feature2': 'تحليل مدعوم بالذكاء الاصطناعي',
    'services.metal.feature3': 'تنبيهات فورية',
    'services.metal.cta': 'عرض التقنية',
    
    'services.cctv.title': 'كاميرات مراقبة مدعومة بالذكاء الاصطناعي',
    'services.cctv.desc': 'أنظمة مراقبة من الجيل الجديد مدعومة بالذكاء الاصطناعي والتعرف على الوجوه وتحليل السلوك والكشف المسبق عن التهديدات. مراقبة على مدار الساعة 24/7 مع تنبيهات فورية.',
    'services.cctv.feature1': 'دقة 4K+',
    'services.cctv.feature2': 'التعرف على الوجوه',
    'services.cctv.feature3': 'التخزين السحابي',
    'services.cctv.achievement': 'نشر أكثر من 500,000 كاميرا مُثبّتة',
    'services.cctv.cta': 'استكشف الأنظمة',
    
    'services.xray.title': 'حلول فحص بالأشعة السينية X-Ray',
    'services.xray.desc': 'فحص عالي الدقة للأمتعة والبضائع في المطارات والموانئ البحرية ونقاط التفتيش الأمنية المُشددة. كشف متقدم للتهديدات مع واجهات تشغيل سهلة الاستخدام.',
    'services.xray.feature1': 'ثنائية الطاقة Dual Energy',
    'services.xray.feature2': 'الكشف عن المتفجرات',
    'services.xray.feature3': 'جاهزية شبكة',
    'services.xray.feature4': 'متوافقة مع معايير الطيران الدولية',
    'services.xray.cta': 'شاهد القدرات',
    
    'services.access.title': 'أنظمة التحكم الذكية في الوصول',
    'services.access.desc': 'إدارة شاملة للدخول باستخدام المصادقة البيومترية، والبطاقات الذكية، وبيانات الاعتماد عبر الهاتف المحمول، وتكامل نظام الحضور والانصراف. وكذلك تحكّم بمن يدخل ومتى وأين.',
    'services.access.feature1': 'القياسات الحيوية بتقنية RFID / NFC',
    'services.access.feature2': 'بيانات اعتماد عبر الهاتف المحمول',
    'services.access.feature3': 'تكامل سلس مع الأنظمة الأخرى',
    'services.access.cta': 'اكتشف المزيد',
    
    'services.military.title': 'الملابس العسكرية والتكتيكية',
    'services.military.desc': 'أزياء عسكرية عالية الجودة ومعدات تكتيكية وملابس مخصصة لأفراد الأمن والوحدات العسكرية والجهات الأمنية. أزياء سميكة ومريحة ومتوافقة مع المعايير العسكرية السعودية.',
    'services.military.feature1': 'مُموهه',
    'services.military.feature2': 'سترات تكتيكية',
    'services.military.feature3': 'تطريز مخصص',
    'services.military.feature4': 'متوافقة مع المعايير العسكرية السعودية',
    'services.military.cta': 'عرض المنتجات',
    
    'services.servers.title': 'أنظمة الخوادم والحواسيب Servers & PC Systems',
    'services.servers.desc': 'خوادم ومحطات عمل وحواسيب شخصية بمستوى المؤسسات، مخصصة للاستخدام الحكومي والتجاري. أجهزة متطورة مع إعداد وتكوين كامل ودعم فني مستمر.',
    'services.servers.feature1': 'أنظمة Dell, HP, Lenovo',
    'services.servers.feature2': 'ذات التكوين المخصص',
    'services.servers.feature3': 'حلول مؤسسية',
    'services.servers.feature4': 'تكامل الشبكات',
    'services.servers.cta': 'عرض الأنظمة',
    
    'services.printers.title': 'الطابعات والملحقات',
    'services.printers.desc': 'حلول طباعة متكاملة تشمل الطابعات الليزرية والأجهزة متعددة الوظائف والماسحات الضوئية والمواد الاستهلاكية الأصلية. من الطابعات المكتبية الى أنظمة الإنتاج عالية الحجم لتلبية جميع احتياجات الأعمال.',
    'services.printers.feature1': 'HP, Canon, Xerox',
    'services.printers.feature2': 'صيانة أحبار',
    'services.printers.feature3': 'جميع المنتجات متوفرة',
    'services.printers.cta': 'عرض المنتجات',
    
    'services.requestQuote': 'طلب عرض سعر',
    'services.requestDemo': 'طلب عرض',
    'services.getPricing': 'احصل على التسعير',
    'services.scheduleDemo': 'جدولة عرض',
    
    // Stats - Official Client Translations
    'stats.eyebrow': 'الأرقام تتحدث عن نفسها',
    'stats.headline': 'سجل حافل بالنجاحات',
    'stats.years': 'رواد المجال لأكثر من 15 سنة في التصنيع',
    'stats.devices': 'أكثر من 100,000 جهاز أمني',
    'stats.satisfaction': 'معدل رضا العملاء 98%',
    'stats.projects': 'أكثر من 150 مشروع رئيسي مُنجز',
    'stats.support': 'مراقبة ودعم متواصل على مدار 24/7',
    'stats.certified': 'الموثوقية',
    
    // Projects/Clients - Official Client Translations
    'projects.eyebrow': 'نفخر بخدمة المملكة العربية السعودية',
    'projects.headline': 'موثوق بنا من قبل أبرز المؤسسات السعودية في القطاعات الحيوية',
    'projects.subheadline': 'أكثر من 100 منشأة مؤمنة',
    'projects.viewCaseStudy': 'عرض دراسة الحالة',
    'projects.viewFullCaseStudy': 'عرض دراسة الحالة الكاملة',
    'projects.viewAll': 'عرض جميع المشاريع',
    
    // Industries - Official Client Translations
    'projects.government.title': 'الجهات الحكومية والوزارات',
    'projects.government.desc': 'حماية المنشآت الحكومية الحساسة والأفراد',
    'projects.aviation.title': 'الطيران والمطارات',
    'projects.aviation.desc': 'تأمين مراكز الطيران الدولية والمحلية',
    'projects.healthcare.title': 'المراكز الصحية',
    'projects.healthcare.desc': 'حماية المستشفيات والمرافق الطبية',
    'projects.energy.title': 'الطاقة والبتروكيماويات',
    'projects.energy.desc': 'حماية البنية التحتية الوطنية الحيوية',
    'projects.education.title': 'التعليم والجامعات',
    'projects.education.desc': 'أمن الحرم الجامعي للمؤسسات الأكاديمية',
    'projects.hospitality.title': 'الضيافة والفعاليات',
    'projects.hospitality.desc': 'حماية الشخصيات المهمة وإدارة أمن الفعاليات',
    
    // Why Choose Us
    'why.headline': 'لماذا تثق السعودية بألفا كور سوليوشنز',
    'why.satisfaction': 'رضا العملاء',
    
    // Partners
    'partners.eyebrow': 'شركاء التكنولوجيا الموثوقين',
    'partners.headline': 'شراكات مع قادة عالميين لتقديم التميز',
    
    // Contact - Official Client Translations
    'contact.eyebrow': 'تواصل معنا',
    'contact.headline': 'تواصل معنا لنُناقش احتياجاتك الأمنية',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.company': 'الشركة/المؤسسة',
    'contact.service': 'الخدمة المطلوبة',
    'contact.service.placeholder': 'اختر خدمة',
    'contact.service.metal': 'أنظمة كشف المعادن',
    'contact.service.cctv': 'مراقبة CCTV',
    'contact.service.xray': 'فحص الأشعة السينية',
    'contact.service.access': 'التحكم بالوصول',
    'contact.service.complete': 'حل أمني شامل',
    'contact.service.consultation': 'طلب استشارة',
    'contact.message': 'تفاصيل المشروع',
    'contact.message.placeholder': 'أخبرنا عن متطلباتك الأمنية...',
    'contact.submit': 'طلب استشارة',
    'contact.success': 'شكراً لك! سيتواصل معك فريقنا خلال 24 ساعة.',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.info.phone': 'الهاتف',
    'contact.info.address': 'العنوان',
    'contact.info.hours': 'ساعات العمل',
    'contact.info.address.value': 'الرياض، المملكة العربية السعودية',
    'contact.info.hours.value': 'الأحد - الخميس: 8:00 ص - 6:00 م',
    'contact.info.emergency': 'دعم الطوارئ: متاح على مدار الساعة',
    
    // Footer
    'footer.tagline': 'تأمين اليوم والغد',
    'footer.description': 'المزود الرائد لحلول الأمن المادي المتقدمة في المملكة العربية السعودية.',
    'footer.quicklinks': 'روابط سريعة',
    'footer.services': 'الخدمات',
    'footer.contact': 'اتصل بنا',
    'footer.copyright': '© 2024 ألفا كور سوليوشنز. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.cookies': 'سياسة ملفات تعريف الارتباط',
    'footer.saudi': 'نفتخر بخدمة المملكة العربية السعودية',
    
    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.readMore': 'اقرأ المزيد',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // ONLY set lang attribute and rtl-text class for text alignment
    // NEVER set dir="rtl" - this flips entire layout
    document.documentElement.lang = language;
    document.documentElement.removeAttribute('dir');
    
    // Add/remove rtl-text class for text alignment only
    if (language === 'ar') {
      document.body.classList.add('rtl-text');
    } else {
      document.body.classList.remove('rtl-text');
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
