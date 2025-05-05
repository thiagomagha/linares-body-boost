
import React from 'react';
import { Button } from "@/components/ui/button";

const UrgencySection = () => {
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById('checkout');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-slate-900 text-white section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4 text-amber-400 text-4xl">⚠️</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Filipe só aceita 20 novos planos por semana.
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Isso porque cada plano é feito à mão, com análise individual.
            <br />Se o botão abaixo ainda estiver ativo, ainda temos vagas abertas.
          </p>
          
          <div className="mb-6 bg-slate-800 p-4 rounded-lg inline-block">
            <div className="text-amber-400 font-medium">Vagas restantes esta semana:</div>
            <div className="text-3xl font-bold text-white">3</div>
          </div>
          
          <div className="mb-8">
            <Button onClick={scrollToCheckout} size="lg" className="bg-fitness-green hover:bg-fitness-darkgreen text-white text-lg px-8 py-6 h-auto animate-pulse-custom">👉 Sim, garantir uma vaga</Button>
          </div>
          
          <p className="mt-4 text-sm text-gray-400">
            Vagas limitadas - Análise feita pessoalmente por Filipe Linares
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
