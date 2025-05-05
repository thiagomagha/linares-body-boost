
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BeforeAfterSection = () => {
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById('checkout');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-white section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Transformações Reais</h2>
          <p className="text-xl text-center text-gray-700 mb-8">Confira os resultados obtidos por quem confiou no método Filipe Linares</p>
          
          <div className="grid grid-cols-1 gap-8 mb-12">
            {/* First transformation card */}
            <Card className="w-full overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 relative">
                      <img 
                        src="/lovable-uploads/db5b6666-7ad2-47e7-9882-96e09091c206.png" 
                        alt="Transformação corporal antes" 
                        className="w-full h-auto"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3 flex items-center justify-center">
                        <ArrowUp className="mr-2 h-4 w-4" />
                        <span className="text-xl font-medium">Antes</span>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                      <img 
                        src="/lovable-uploads/db5b6666-7ad2-47e7-9882-96e09091c206.png" 
                        alt="Transformação corporal depois" 
                        className="w-full h-auto"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-fitness-green text-white p-3 flex items-center justify-center">
                        <span className="text-xl font-medium">Depois</span>
                        <ArrowUp className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Second transformation card */}
            <Card className="w-full overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 relative">
                      <img 
                        src="/lovable-uploads/88bc6a78-d5ed-452a-9a62-c87a72415d15.png" 
                        alt="Transformação corporal antes" 
                        className="w-full h-auto"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3 flex items-center justify-center">
                        <ArrowUp className="mr-2 h-4 w-4" />
                        <span className="text-xl font-medium">Antes</span>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                      <img 
                        src="/lovable-uploads/88bc6a78-d5ed-452a-9a62-c87a72415d15.png" 
                        alt="Transformação corporal depois" 
                        className="w-full h-auto"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-fitness-green text-white p-3 flex items-center justify-center">
                        <span className="text-xl font-medium">Depois</span>
                        <ArrowUp className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Third transformation card */}
            <Card className="w-full overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 relative">
                      <img 
                        src="/lovable-uploads/63cc3328-7f94-499a-bafd-c76502102a95.png" 
                        alt="Transformação corporal antes" 
                        className="w-full h-auto"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3 flex items-center justify-center">
                        <ArrowUp className="mr-2 h-4 w-4" />
                        <span className="text-xl font-medium">Antes</span>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                      <img 
                        src="/lovable-uploads/63cc3328-7f94-499a-bafd-c76502102a95.png" 
                        alt="Transformação corporal depois" 
                        className="w-full h-auto"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-fitness-green text-white p-3 flex items-center justify-center">
                        <span className="text-xl font-medium">Depois</span>
                        <ArrowUp className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center p-6 border-2 border-fitness-red rounded-lg bg-red-50 mb-8">
            <p className="text-xl font-bold mb-2">⚠️ Filipe só aceita 20 novos planos por semana.</p>
            <p className="text-gray-700">Cada plano é personalizado e analisado individualmente, por isso as vagas são limitadas.</p>
          </div>
          
          <div className="mt-10 text-center">
            <Button onClick={scrollToCheckout} size="lg" className="bg-fitness-green hover:bg-fitness-darkgreen text-white text-lg px-8 py-6 h-auto">🔒 Quero transformar meu corpo agora</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
