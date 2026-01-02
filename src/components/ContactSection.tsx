import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';
import { toast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Success!',
      description: t('contact.success'),
    });

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: t('contact.info.email'), value: 'info@alphacs.sa' },
    { icon: Phone, label: t('contact.info.phone'), value: '+966 X XXXX XXXX' },
    { icon: MapPin, label: t('contact.info.address'), value: t('contact.info.address.value') },
    { icon: Clock, label: t('contact.info.hours'), value: t('contact.info.hours.value') },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div ref={ref} className="relative container-premium">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`eyebrow mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {t('contact.eyebrow')}
          </p>
          <h2 className={`heading-section ${isInView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            {t('contact.headline')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div
            className={`lg:col-span-3 ${isInView ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`peer w-full px-4 py-4 bg-secondary/50 border border-border/50 rounded-xl text-foreground placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all ${isRTL ? 'text-right' : ''}`}
                    placeholder={t('contact.name')}
                  />
                  <label className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-muted-foreground transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:bg-card peer-focus:px-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-2`}>
                    {t('contact.name')}
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`peer w-full px-4 py-4 bg-secondary/50 border border-border/50 rounded-xl text-foreground placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all ${isRTL ? 'text-right' : ''}`}
                    placeholder={t('contact.email')}
                  />
                  <label className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-muted-foreground transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:bg-card peer-focus:px-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-2`}>
                    {t('contact.email')}
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`peer w-full px-4 py-4 bg-secondary/50 border border-border/50 rounded-xl text-foreground placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all ${isRTL ? 'text-right' : ''}`}
                    placeholder={t('contact.phone')}
                  />
                  <label className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-muted-foreground transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:bg-card peer-focus:px-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-2`}>
                    {t('contact.phone')}
                  </label>
                </div>

                {/* Company */}
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`peer w-full px-4 py-4 bg-secondary/50 border border-border/50 rounded-xl text-foreground placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all ${isRTL ? 'text-right' : ''}`}
                    placeholder={t('contact.company')}
                  />
                  <label className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-muted-foreground transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:bg-card peer-focus:px-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-2`}>
                    {t('contact.company')}
                  </label>
                </div>
              </div>

              {/* Service Select */}
              <div className="relative mb-6">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-4 bg-secondary/50 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer ${isRTL ? 'text-right' : ''}`}
                >
                  <option value="">{t('contact.service.placeholder')}</option>
                  <option value="metal">{t('contact.service.metal')}</option>
                  <option value="cctv">{t('contact.service.cctv')}</option>
                  <option value="xray">{t('contact.service.xray')}</option>
                  <option value="access">{t('contact.service.access')}</option>
                  <option value="complete">{t('contact.service.complete')}</option>
                  <option value="consultation">{t('contact.service.consultation')}</option>
                </select>
              </div>

              {/* Message */}
              <div className="relative mb-8">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`peer w-full px-4 py-4 bg-secondary/50 border border-border/50 rounded-xl text-foreground placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none ${isRTL ? 'text-right' : ''}`}
                  placeholder={t('contact.message')}
                />
                <label className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-4 text-muted-foreground transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-card peer-focus:px-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-2`}>
                  {t('contact.message')}
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full py-4 px-8 rounded-xl bg-gradient-primary font-semibold text-primary-foreground flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-glow-lg hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    {t('contact.success')}
                  </>
                ) : isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    {t('contact.submit')}
                    <Send className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`lg:col-span-2 ${isInView ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}
          >
            <div className="glass-card p-8 md:p-10 h-full">
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Support */}
              <div className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <p className="text-sm font-medium text-primary">
                  {t('contact.info.emergency')}
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden h-48 bg-secondary/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463876.99825775713!2d46.54240735!3d24.725376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1702000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
