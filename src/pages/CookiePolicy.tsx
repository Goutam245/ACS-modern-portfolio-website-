import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'Cookie Policy',
      lastUpdated: 'Last Updated: December 2024',
      intro: 'This website uses cookies to improve user experience.',
      sections: [
        {
          title: 'What Are Cookies',
          content: 'Small text files stored on your device.'
        },
        {
          title: 'How We Use Cookies',
          content: 'Essential cookies for website functionality. Analytics cookies to understand visitor behavior.'
        },
        {
          title: 'Managing Cookies',
          content: 'You can disable cookies in your browser settings.'
        },
        {
          title: 'Contact',
          content: 'Cookie questions: info@alphacs.sa'
        }
      ],
      back: 'Back to Home'
    },
    ar: {
      title: 'سياسة ملفات تعريف الارتباط',
      lastUpdated: 'آخر تحديث: ديسمبر 2024',
      intro: 'يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين تجربة المستخدم.',
      sections: [
        {
          title: 'ما هي ملفات تعريف الارتباط',
          content: 'ملفات نصية صغيرة تُخزن على جهازك.'
        },
        {
          title: 'كيف نستخدم ملفات تعريف الارتباط',
          content: 'ملفات تعريف الارتباط الأساسية لوظائف الموقع. ملفات تعريف الارتباط التحليلية لفهم سلوك الزوار.'
        },
        {
          title: 'إدارة ملفات تعريف الارتباط',
          content: 'يمكنك تعطيل ملفات تعريف الارتباط في إعدادات المتصفح الخاص بك.'
        },
        {
          title: 'اتصل بنا',
          content: 'أسئلة حول ملفات تعريف الارتباط: info@alphacs.sa'
        }
      ],
      back: 'العودة للرئيسية'
    }
  };

  const t = content[language];

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Alpha Core Solutions</title>
        <meta name="description" content="Cookie Policy for Alpha Core Solutions - Learn how we use cookies on our website." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="container-premium max-w-4xl">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              {t.back}
            </Link>

            <h1 className="heading-section mb-4">{t.title}</h1>
            <p className="text-muted-foreground mb-8">{t.lastUpdated}</p>
            
            <p className="body-large text-muted-foreground mb-12">{t.intro}</p>

            <div className="space-y-8">
              {t.sections.map((section, index) => (
                <div key={index} className="glass-card p-6">
                  <h2 className="heading-card text-primary mb-4">{section.title}</h2>
                  <p className="text-foreground/80">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CookiePolicy;