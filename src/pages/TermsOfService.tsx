import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'Terms of Service',
      effectiveDate: 'Effective Date: December 2024',
      intro: 'By using Alpha Core Solutions website, you agree to these terms.',
      sections: [
        {
          title: 'Services',
          content: 'Information provided is for general purposes. Actual services subject to formal agreements.'
        },
        {
          title: 'Use of Website',
          content: 'You agree to use this website lawfully and not to misuse any information.'
        },
        {
          title: 'Intellectual Property',
          content: 'All content is property of Alpha Core Solutions.'
        },
        {
          title: 'Contact',
          content: 'Questions: info@alphacs.sa'
        }
      ],
      back: 'Back to Home'
    },
    ar: {
      title: 'شروط الخدمة',
      effectiveDate: 'تاريخ السريان: ديسمبر 2024',
      intro: 'باستخدام موقع ألفا كور سوليوشنز، فإنك توافق على هذه الشروط.',
      sections: [
        {
          title: 'الخدمات',
          content: 'المعلومات المقدمة هي لأغراض عامة. الخدمات الفعلية تخضع لاتفاقيات رسمية.'
        },
        {
          title: 'استخدام الموقع',
          content: 'أنت توافق على استخدام هذا الموقع بشكل قانوني وعدم إساءة استخدام أي معلومات.'
        },
        {
          title: 'الملكية الفكرية',
          content: 'جميع المحتويات هي ملك لشركة ألفا كور سوليوشنز.'
        },
        {
          title: 'اتصل بنا',
          content: 'للأسئلة: info@alphacs.sa'
        }
      ],
      back: 'العودة للرئيسية'
    }
  };

  const t = content[language];

  return (
    <>
      <Helmet>
        <title>Terms of Service | Alpha Core Solutions</title>
        <meta name="description" content="Terms of Service for Alpha Core Solutions - Read our terms and conditions for using our website and services." />
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
            <p className="text-muted-foreground mb-8">{t.effectiveDate}</p>
            
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

export default TermsOfService;