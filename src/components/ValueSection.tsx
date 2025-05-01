
import React from 'react';

interface PriceComparisonItem {
  item: string;
  realValue: string;
  discountValue: string;
}

const priceItems: PriceComparisonItem[] = [
  {
    item: "Consulta com especialista",
    realValue: "R$1.000",
    discountValue: "Incluído"
  },
  {
    item: "Plano alimentar personalizado",
    realValue: "R$700",
    discountValue: "Incluído"
  },
  {
    item: "Suporte via WhatsApp",
    realValue: "R$300",
    discountValue: "Incluído"
  }
];

const ValueSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="text-fitness-green">💰</span> O que custaria mais de R$2.000 no consultório, você leva hoje por R$297.
          </h2>
          
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 font-medium text-gray-900">Item</th>
                  <th className="p-4 font-medium text-gray-900 text-center">Valor Real</th>
                  <th className="p-4 font-medium text-gray-900 text-center">Hoje por você</th>
                </tr>
              </thead>
              
              <tbody>
                {priceItems.map((item, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="p-4 text-gray-700">{item.item}</td>
                    <td className="p-4 text-center text-gray-700">{item.realValue}</td>
                    <td className="p-4 text-center text-fitness-green font-medium">{item.discountValue}</td>
                  </tr>
                ))}
                
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-4 font-bold">TOTAL REAL</td>
                  <td className="p-4 text-center font-bold">R$2.000+</td>
                  <td className="p-4 text-center text-fitness-green font-bold text-xl">R$297</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-center mt-6 text-lg font-medium">
            Mesmo cuidado. Mesmo resultado. Zero complicação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
