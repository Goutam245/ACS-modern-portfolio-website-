import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import MissionSection from '@/components/MissionSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import StatsSection from '@/components/StatsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import PartnersSection from '@/components/PartnersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Alpha Core Solutions | Advanced Physical Security | Saudi Arabia</title>
        <meta
          name="description"
          content="Leading provider of cutting-edge security solutions in Saudi Arabia. Metal detectors, CCTV systems, X-ray screening, and access control for government and critical infrastructure."
        />
        <meta
          name="keywords"
          content="physical security saudi arabia, metal detectors riyadh, cctv surveillance, x-ray screening, access control, government security, airport security"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alphacs.sa/" />
        <meta
          property="og:title"
          content="Alpha Core Solutions | Advanced Physical Security"
        />
        <meta
          property="og:description"
          content="15+ years securing Saudi Arabia's critical infrastructure with world-class technology."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ar_SA" />
        <link rel="canonical" href="https://www.alphacs.sa/" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <TrustBar />
          <MissionSection />
          <ServicesSection />
          <ProjectsSection />
          <StatsSection />
          <WhyChooseUsSection />
          <PartnersSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;