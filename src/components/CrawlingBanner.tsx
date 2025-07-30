import React from 'react';

const text = [
  {
    divisor: '●',
    first: 'Transforme Dados em Inteligência Estratégica',
    second: 'Segurança de Nível Bancário com a AWS',
    third: 'Conformidade Regulamentar Garantida',
    one: 'Relatórios para o BNA com um Clique',
    two: 'Automatize Tarefas, Liberte a sua Equipa',
    three: 'Trilha de Auditoria Completa e Inviolável',
    four: 'Eleve a Confiança do Cliente e do Supervisor'
  }
];

const [{ divisor, first, second, third, one, two, three, four }] = text;

export const CrawlingBanner: React.FC = () => (
  <div className="relative w-full h-16">
    {/* dark-blue background layer */}
    <div className="absolute transform rotate-[-2.85deg] inset-0 bg-[#15157D]" />

    {/* skewed peach banner */}
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ pointerEvents: 'none' }}
    >
    </div>

    {/* scrolling text on top */}
    <div className="absolute transform rotate-[-2.85deg] inset-0 flex items-center overflow-hidden">
      <div
        className="inline-flex whitespace-nowrap animate-marquee text-white font-bold text-lg"
        style={{ willChange: 'transform' }}
      >
        {/* first copy */}
        <span className="px-2">{first}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{second}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{third}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{one}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{two}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{three}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{four}</span>
        <span className="px-2">{divisor}</span>
        {/* second copy */}
        <span className="px-2">{first}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{second}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{third}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{one}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{two}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{three}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{four}</span>
        <span className="px-2">{divisor}</span>
      </div>
    </div>


    {/* dark-blue background layer */}
    <div className="absolute transform rotate-[2.85deg] inset-0 bg-[#EFBC73]" />

    {/* skewed peach banner */}
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ pointerEvents: 'none' }}
    >
    </div>

    {/* scrolling text on top */}
    <div className="absolute transform rotate-[2.85deg] inset-0 flex items-center overflow-hidden">
      <div
        className="inline-flex whitespace-nowrap animate-marquee text-white font-bold text-lg"
        style={{ willChange: 'transform' }}
      >
        {/* first copy */}
        <span className="px-2">{one}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{two}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{three}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{four}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{first}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{second}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{third}</span>
        <span className="px-2">{divisor}</span>
        {/* second copy */}
        <span className="px-2">{one}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{two}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{three}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{four}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{first}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{second}</span>
        <span className="px-2">{divisor}</span>
        <span className="px-2">{third}</span>
        <span className="px-2">{divisor}</span>
      </div>
    </div>
  </div>
);

export default CrawlingBanner;
