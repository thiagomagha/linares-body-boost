
import React from 'react';
import { Check } from "lucide-react";

interface Celebrity {
  name: string;
  image: string;
  description: string;
}

const celebrities: Celebrity[] = [
  {
    name: "PK Lipe",
    image: "/lovable-uploads/10b7c465-d699-46da-a45d-e78dab93907b.png",
    description: "Influencer"
  }, 
  {
    name: "Pablo Marçal",
    image: "/lovable-uploads/582ab90b-7466-414c-a7c4-06fb45307447.png",
    description: "Empresário"
  }, 
  {
    name: "Tirullipa",
    image: "/lovable-uploads/873d3c64-3d79-4bd1-81b3-46f8dd0246ff.png",
    description: "Humorista"
  }, 
  {
    name: "Peixe",
    image: "/lovable-uploads/d9dcaed5-098c-4cf6-8021-901846180cb9.png",
    description: "YouTuber"
  }, 
  {
    name: "Ramon Dino",
    image: "/lovable-uploads/1b80c166-4028-4054-aa0d-6c6436e8c3e7.png",
    description: "Fisiculturista"
  }
];

const CelebritiesSection = () => {
  return <section className="bg-slate-900 text-white section-padding">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-fitness-green">🧠</span> Se esses nomes confiam no trabalho dele pra performar no mais alto nível físico e mental...
          </h2>
          <p className="text-xl md:text-2xl font-medium">Por que você ainda tá tentando dieta de internet?</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {celebrities.map(celebrity => <div key={celebrity.name} className="relative group">
              <div className="overflow-hidden rounded-lg aspect-[3/4] relative">
                <img src={celebrity.image} alt={celebrity.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-bold text-lg">{celebrity.name}</h3>
                <p className="text-sm text-gray-300">{celebrity.description}</p>
              </div>
              
              <div className="absolute top-3 right-3">
                
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};

export default CelebritiesSection;
