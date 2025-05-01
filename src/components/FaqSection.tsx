
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "É realmente personalizado?",
    answer: "Sim. O plano é feito com base nas suas respostas, preferências, horários, restrições e metabolismo. Filipe Linares analisa caso a caso para criar um plano que se adapte perfeitamente à sua realidade."
  },
  {
    question: "Preciso de exames?",
    answer: "Não. Filipe consegue montar um plano completo com base no questionário detalhado que você preencherá. No entanto, se você tiver exames recentes, pode anexá-los ao formulário para uma análise ainda mais precisa."
  },
  {
    question: "Quanto tempo para receber?",
    answer: "Até 7 dias úteis após o envio completo do formulário. Nosso compromisso é entregar seu plano o mais rápido possível sem comprometer a qualidade e personalização."
  },
  {
    question: "Tenho suporte?",
    answer: "Sim. Você pode tirar dúvidas pelo WhatsApp com o time de nutricionistas liderado por Filipe. O suporte está disponível em horário comercial para auxiliar em qualquer questão sobre seu plano alimentar."
  },
  {
    question: "E se eu não gostar?",
    answer: "Você tem 7 dias de garantia para solicitar reembolso. Se não estiver satisfeito com o plano por qualquer motivo, basta entrar em contato conosco e devolveremos seu investimento integralmente, sem questionamentos."
  }
];

const FaqSection = () => {
  return (
    <section className="bg-white section-padding" id="faq">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
