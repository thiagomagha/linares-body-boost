
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CheckoutSection = () => {
  return <section className="bg-gray-50 section-padding" id="checkout">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient">🤔 Quanto vale recuperar sua autoestima, sua energia e seu corpo?</span>
          </h2>
          
          <p className="text-lg mb-8">
            R$297/mês pode parecer um valor pequeno…<br />
            Mas pode ser o maior ponto de virada da sua saúde até hoje.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-fitness-green/10 flex items-center justify-center">
                <span className="text-4xl">🔒</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
              <span className="text-2xl">🎁</span> O que está incluso por R$297/mês:
            </h3>
            
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <div className="bg-fitness-green rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>Plano alimentar 100% personalizado</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-fitness-green rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>Periodização de treino específica pro seu objetivo</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-fitness-green rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>Suporte direto via WhatsApp</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-fitness-green rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>Feedbacks semanais e ajustes mensais</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-fitness-blue rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>Garantia incondicional de 7 dias</span>
              </li>
            </ul>
            
            <div className="mb-6">
              <p className="text-gray-500 text-sm mb-1">Investimento mensal de:</p>
              <p className="text-3xl font-bold text-fitness-green">R$297/mês</p>
            </div>
            
            <Button size="lg" className="bg-fitness-green hover:bg-fitness-darkgreen text-white text-lg px-8 py-6 h-auto w-full">Plano 100% personalizado</Button>
            
            <div className="mt-4 flex justify-center gap-2">
              
              
              
            </div>
            
            <p className="mt-3 text-xs text-gray-500">
              Pagamento 100% seguro • Ambiente criptografado • Garantia de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>;
};

export default CheckoutSection;
