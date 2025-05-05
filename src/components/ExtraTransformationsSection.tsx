
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp } from "lucide-react";

const ExtraTransformationsSection = () => {
  return (
    <section className="bg-gray-100 section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Mais Resultados Impressionantes</h2>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* First transformation card */}
            <Card className="w-full md:w-1/2 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/5ef53831-b754-4364-b65b-fdf292126d21.png" 
                    alt="Transformação corporal antes e depois" 
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 w-1/2 bg-black bg-opacity-70 text-white p-3 flex items-center justify-center">
                    <ArrowUp className="mr-2 h-4 w-4" />
                    <span className="text-xl font-medium">Antes</span>
                  </div>
                  <div className="absolute bottom-0 right-0 w-1/2 bg-fitness-green text-white p-3 flex items-center justify-center">
                    <span className="text-xl font-medium">Depois</span>
                    <ArrowUp className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Second transformation card */}
            <Card className="w-full md:w-1/2 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/d1c9ca86-a026-4e65-8ff8-f88816df477a.png" 
                    alt="Transformação corporal antes e depois" 
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 w-1/2 bg-black bg-opacity-70 text-white p-3 flex items-center justify-center">
                    <ArrowUp className="mr-2 h-4 w-4" />
                    <span className="text-xl font-medium">Antes</span>
                  </div>
                  <div className="absolute bottom-0 right-0 w-1/2 bg-fitness-green text-white p-3 flex items-center justify-center">
                    <span className="text-xl font-medium">Depois</span>
                    <ArrowUp className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center p-6 border-2 border-fitness-green rounded-lg bg-green-50 mb-8">
            <p className="text-xl font-bold mb-2">💪 Conquiste seu melhor corpo com o método certo!</p>
            <p className="text-gray-700">Sem dietas radicais, sem horas excessivas de treino. Planejamento inteligente que respeita sua individualidade.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraTransformationsSection;
