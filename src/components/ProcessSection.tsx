import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
const ProcessSection = () => {
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById('checkout');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="bg-gray-50 section-padding">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Como funciona a consultoria
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-fitness-green"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-fitness-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-xl">Etapa 1</h3>
            </div>
            <p className="text-gray-700">
              Preencha um questionário completo sobre seus hábitos, objetivos, alimentação e rotina.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-fitness-blue"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-fitness-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-xl">Etapa 2</h3>
            </div>
            <p className="text-gray-700">
              Filipe Linares analisa pessoalmente suas respostas e cria seu plano do zero.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-fitness-orange"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-fitness-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-xl">Etapa 3</h3>
            </div>
            <p className="text-gray-700">
              Em até 7 dias úteis, você recebe seu plano alimentar personalizado com todas as orientações.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-fitness-green/20 max-w-3xl mx-auto">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <span className="text-2xl">🎁</span> O que você recebe:
          </h3>
          
          <ul className="space-y-3 mb-6">
            {["Plano alimentar personalizado", "Macros e calorias calculadas para seu corpo", "Recomendações práticas para seu dia a dia", "Lista de compras personalizada", "Substituições saudáveis para suas preferências"].map((item, index) => <li key={index} className="flex items-start gap-2">
                <div className="bg-fitness-green rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>{item}</span>
              </li>)}
          </ul>
          
          <div className="border-t border-gray-200 pt-4 mt-4">
            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">🎯</span> BÔNUS INCLUSO:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="bg-fitness-blue rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>Suporte direto no WhatsApp com o time para dúvidas</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-fitness-blue rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>Dicas e ajustes conforme sua evolução</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <div className="mb-4">
            <p className="text-sm text-gray-500">Tudo isso por apenas</p>
            <p className="text-3xl font-bold text-fitness-green">R$297</p>
          </div>
          
          <Button onClick={scrollToCheckout} size="lg" className="bg-fitness-green hover:bg-fitness-darkgreen text-white text-lg px-8 py-6 h-auto">🔒 Quero meu plano personalizado</Button>
        </div>
      </div>
    </section>;
};
export default ProcessSection;