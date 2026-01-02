import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: December 2024',
      intro: 'Alpha Core Solutions respects your privacy. This policy outlines how we collect, use, and protect your personal information.',
      sections: [
        {
          title: 'Information Collection',
          content: 'We collect information you provide through contact forms, including name, email, phone number, and company details.'
        },
        {
          title: 'Information Use',
          content: 'Your information is used solely to respond to inquiries and provide our services. We do not sell or share your data with third parties.'
        },
        {
          title: 'Data Security',
          content: 'We implement industry-standard security measures to protect your information.'
        },
        {
          title: 'Contact',
          content: 'For privacy concerns: info@alphacs.sa'
        }
      ],
      back: 'Back to Home'
    },
    ar: {
      title: 'سياسة الخصوصية',
      lastUpdated: 'آخر تحديث: ديسمبر 2024',
      intro: 'تحترم ألفا كور سوليوشنز خصوصيتك. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية.',
      sections: [
        {
          title: 'جمع المعلومات',
          content: 'نجمع المعلومات التي تقدمها من خلال نماذج الاتصال، بما في ذلك الاسم والبريد الإلكتروني ورقم الهاتف وتفاصيل الشركة.'
        },
        {
          title: 'استخدام المعلومات',
          content: 'تُستخدم معلوماتك فقط للرد على الاستفسارات وتقديم خدماتنا. نحن لا نبيع أو نشارك بياناتك مع أطراف ثالثة.'
        },
        {
          title: 'أمان البيانات',
          content: 'نطبق تدابير أمنية معيارية في الصناعة لحماية معلوماتك.'
        },
        {
          title: 'اتصل بنا',
          content: 'لمخاوف الخصوصية: info@alphacs.sa'
        }
      ],
      back: 'العودة للرئيسية'
    }
  };

  const t = content[language];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Alpha Core Solutions</title>
        <meta name="description" content="Privacy Policy for Alpha Core Solutions - Learn how we collect, use, and protect your personal information." />
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

export default PrivacyPolicy;