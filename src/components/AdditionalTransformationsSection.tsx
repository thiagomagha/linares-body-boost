
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp } from "lucide-react";

const AdditionalTransformationsSection = () => {
  return (
    <section className="bg-slate-50 section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Mais Transformações Impressionantes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* First transformation card */}
            <Card className="w-full overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/fb28b337-6960-45b4-80bf-27e66f9f540b.png" 
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
            <Card className="w-full overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/c2fe3392-e492-47ab-b211-b721b8974960.png" 
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
            
            {/* Third transformation card */}
            <Card className="w-full overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/f01636c8-0760-4da9-94fc-3f37cc91a51b.png" 
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
            <p className="text-xl font-bold mb-2">🔥 Resultados reais, sem photoshop!</p>
            <p className="text-gray-700">Nossos clientes transformam suas vidas com planejamento personalizado e acompanhamento diário.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalTransformationsSection;
