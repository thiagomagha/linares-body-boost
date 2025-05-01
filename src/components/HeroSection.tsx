import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
const HeroSection = () => {
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById('checkout');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
      <div className="section-container flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-gradient">O mesmo plano alimentar</span> que transformou o corpo do PK Lipe, Pablo Marçal, Tirullipa, Peixe e Ramon Dino
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 font-medium">
            — agora 100% adaptado ao seu corpo, rotina e objetivos.
          </p>
          
          <div className="space-y-3 mb-8">
            {["Sem sair de casa", "Sem academia obrigatória", "Sem suplemento caro"].map((item, index) => <div key={index} className="flex items-center gap-2">
                <div className="bg-fitness-green rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg">{item}</span>
              </div>)}
          </div>
          
          <p className="text-lg mb-6">
            Finalmente, um plano alimentar feito pra <span className="font-bold">VOCÊ</span> — com análise pessoal do Filipe Linares e acompanhamento via WhatsApp.
          </p>
          
          <div className="mb-6">
            <div className="text-sm text-gray-500 mb-1">Por apenas</div>
            <div className="text-3xl font-bold text-fitness-green">R$297</div>
          </div>
          
          <Button onClick={scrollToCheckout} size="lg" className="bg-fitness-green hover:bg-fitness-darkgreen text-white text-lg px-8 py-6 h-auto">🔒 Quero meu plano personalizado</Button>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-md">
              <img src="https://images.unsplash.com/photo-1606889464198-fcb18894cf50?auto=format&fit=crop&q=80&ixlib=rb-4.0.3" alt="Filipe Linares" className="rounded-lg object-cover w-full aspect-[4/3]" />
              <div className="absolute top-2 right-2 bg-fitness-red text-white text-xs font-bold px-2 py-1 rounded">
                ESPECIALISTA
              </div>
              <div className="mt-4 text-lg font-bold">Filipe Linares</div>
              <div className="text-sm text-gray-600">Nutricionista dos famosos</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;