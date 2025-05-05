
import React from 'react';
import HeroSection from '@/components/HeroSection';
import CelebritiesSection from '@/components/CelebritiesSection';
import ProblemSection from '@/components/ProblemSection';
import AdditionalTransformationsSection from '@/components/AdditionalTransformationsSection';
import ProcessSection from '@/components/ProcessSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import ValueSection from '@/components/ValueSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import ExtraTransformationsSection from '@/components/ExtraTransformationsSection';
import UrgencySection from '@/components/UrgencySection';
import FaqSection from '@/components/FaqSection';
import CheckoutSection from '@/components/CheckoutSection';
import FooterSection from '@/components/FooterSection';
import FixedCTA from '@/components/FixedCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed CTA that appears when scrolling */}
      <FixedCTA />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Celebrities Section */}
      <CelebritiesSection />
      
      {/* Problem Section */}
      <ProblemSection />
      
      {/* Additional Transformations Section */}
      <AdditionalTransformationsSection />
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* Before/After Section */}
      <BeforeAfterSection />
      
      {/* Value Section */}
      <ValueSection />
      
      {/* Guarantee Section */}
      <GuaranteeSection />
      
      {/* Extra Transformations Section */}
      <ExtraTransformationsSection />
      
      {/* Urgency Section */}
      <UrgencySection />
      
      {/* FAQ Section */}
      <FaqSection />
      
      {/* Checkout Section */}
      <CheckoutSection />
      
      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default Index;
