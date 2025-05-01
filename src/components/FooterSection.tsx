
import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-8 px-4">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content - Improved mobile layout with better spacing and alignment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-3">
              <h3 className="font-bold text-white text-lg mb-3">Filipe Linares</h3>
              <p className="text-sm max-w-xs">
                Nutricionista especializado em transformação corporal e planos alimentares personalizados.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="mailto:contato@filipelinares.com" className="hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+5500000000000" className="hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-bold text-white text-lg mb-3">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#checkout" className="hover:text-white transition-colors">Garantir Vaga</a></li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-bold text-white text-lg mb-3">Contato</h3>
              <p className="text-sm">contato@filipelinares.com</p>
              <p className="text-sm">Atendimento em horário comercial</p>
            </div>
          </div>
          
          {/* Footer Bottom - Improved mobile stacking */}
          <div className="border-t border-gray-800 pt-6 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-center md:text-left">&copy; 2025 Filipe Linares. Todos os direitos reservados.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
