
import React from 'react';
import { Button } from "@/components/ui/button";

const GuaranteeSection = () => {
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById('checkout');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gray-50 section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 flex-shrink-0 rounded-full bg-fitness-green/10 flex items-center justify-center">
              <span className="text-5xl">🛡️</span>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Garantia incondicional de 7 dias
              </h2>
              
              <p className="text-gray-600 mb-4">
                Teste a consultoria. Veja o plano. Aplique no seu dia a dia.
                Se não se sentir satisfeito, peça o reembolso completo.
                Sem letras miúdas. Sem julgamentos.
              </p>
              
              <Button
                onClick={scrollToCheckout}
                className="bg-fitness-green hover:bg-fitness-darkgreen text-white"
              >
                Garantir minha vaga agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
