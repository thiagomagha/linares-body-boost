
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp } from "lucide-react";

const BeforeAfterSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Transformações Reais</h2>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* First transformation card */}
            <Card className="w-full md:w-1/2 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/f4d17eb5-21ff-4254-a548-2ee7a437b163.png" 
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
                    src="/lovable-uploads/7b4ce13c-cf10-42cc-8311-aa1eb1557088.png" 
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
          
          <div className="text-center p-6 border-2 border-fitness-red rounded-lg bg-red-50 mb-8">
            <p className="text-xl font-bold mb-2">⚠️ Filipe só aceita 20 novos planos por semana.</p>
            <p className="text-gray-700">Cada plano é personalizado e analisado individualmente, por isso as vagas são limitadas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
