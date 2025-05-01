
import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-8">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold text-white text-lg mb-3">Filipe Linares</h3>
              <p className="text-sm max-w-xs">
                Nutricionista especializado em transformação corporal e planos alimentares personalizados.
              </p>
            </div>
            
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold text-white text-lg mb-3">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#checkout" className="hover:text-white transition-colors">Garantir Vaga</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white text-lg mb-3">Contato</h3>
              <p className="text-sm">contato@filipelinares.com</p>
              <p className="text-sm">Atendimento em horário comercial</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
            <p>&copy; 2025 Filipe Linares. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-3 md:mt-0">
              <a href="#" className="hover:text-white">Termos de Uso</a>
              <a href="#" className="hover:text-white">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
