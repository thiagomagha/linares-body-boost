
import React from 'react';

const ProblemSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-fitness-red">📉</span> Dietas genéricas não falham por serem ruins.
          </h2>
          <p className="text-xl font-medium mb-8">
            Elas falham porque foram feitas pra qualquer um — e não pra você.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-3">📌</div>
              <h3 className="font-bold text-lg mb-2">PDFs de internet</h3>
              <p className="text-gray-600">Não respeitam o seu metabolismo único e suas necessidades específicas.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-3">📌</div>
              <h3 className="font-bold text-lg mb-2">Influencers fitness</h3>
              <p className="text-gray-600">Não conhecem sua rotina diária e seus horários disponíveis.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-3">📌</div>
              <h3 className="font-bold text-lg mb-2">Suplementos mágicos</h3>
              <p className="text-gray-600">Só drenam seu dinheiro e não resolvem a raiz do problema.</p>
            </div>
          </div>
          
          <p className="mt-10 text-lg font-bold">
            A culpa não é sua. É da estratégia errada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
