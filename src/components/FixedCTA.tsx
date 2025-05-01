
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const FixedCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById('checkout');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="hidden md:block">
          <p className="text-sm font-medium">O mesmo plano dos famosos - 100% adaptado para você</p>
          <p className="text-xs text-gray-600">Com análise pessoal do Filipe Linares</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right mr-4 hidden md:block">
            <p className="text-sm font-medium">Por apenas</p>
            <p className="text-lg font-bold text-fitness-green">R$297</p>
          </div>
          <Button 
            onClick={scrollToCheckout}
            className="bg-fitness-green hover:bg-fitness-darkgreen text-white flex items-center gap-2 animate-pulse-custom"
          >
            <Check size={18} />
            <span>Quero meu plano personalizado</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FixedCTA;
