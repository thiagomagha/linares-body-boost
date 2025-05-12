
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
          🔬 Como funciona a Consultoria Personalizada com o Filipe Linares
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-fitness-green"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-fitness-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-xl">Etapa 1 – Diagnóstico Profundo</h3>
            </div>
            <p className="text-gray-700 mb-3">
              <span className="inline-block mb-1">📋 Você preenche um questionário completo com:</span>
            </p>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li className="flex items-start gap-2">
                <div className="bg-fitness-green rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>Saúde, exames (se tiver), rotina</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-fitness-green rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>Histórico alimentar e de treino</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-fitness-green rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>Objetivos, preferências alimentares</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-fitness-green rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>Medidas corporais e fotos (opcional)</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-fitness-blue"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-fitness-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-xl">Etapa 2 – Prescrição Técnica</h3>
            </div>
            <p className="text-gray-700 mb-3">
              <span className="inline-block mb-1">🧠 Filipe analisa pessoalmente tudo e cria:</span>
            </p>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li className="flex items-start gap-2">
                <div className="bg-fitness-blue rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>Um plano alimentar calculado com base em metabolismo, macros e micronutrientes</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-fitness-blue rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>Uma periodização de treino personalizada, com base em seu objetivo e nível (tensional, metabólico, etc.)</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-fitness-orange"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-fitness-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-xl">Etapa 3 – Entrega e Acompanhamento Mensal</h3>
            </div>
            <p className="text-gray-700 mb-3">
              <span className="inline-block mb-1">📦 Em até 7 dias úteis você recebe:</span>
            </p>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li className="flex items-start gap-2">
                <div className="bg-fitness-orange rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>Dieta + treino completos</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-fitness-orange rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>Suporte via WhatsApp</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-fitness-orange rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>Feedbacks semanais</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-fitness-green/20 max-w-3xl mx-auto">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <span className="text-2xl">🎁</span> O que você recebe:
          </h3>
          
          <ul className="space-y-3 mb-6">
            {[
              "Plano alimentar personalizado calculado para seu corpo",
              "Treino personalizado para seu objetivo e nível",
              "Recomendações práticas para seu dia a dia",
              "Lista de compras personalizada",
              "Substituições saudáveis para suas preferências"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="bg-fitness-green rounded-full p-1 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>{item}</span>
              </li>
            ))}
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
