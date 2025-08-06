import React, { useState } from 'react';
import icon from "@/assets/icons/arrow-narrow-right.svg";

interface ComplaintData {
  problem: string;
  solution: string
}

const ComplaintsTable: React.Component = () => {
  const [complaints] = useState<ComplaintData[]>([
    {
      problem: 'Colaboração Fragmentada: Uma "guerra" de e-mails, versões de ficheiros duplicadas e a incerteza constante sobre quem tem a informação mais recente.',
      solution: 'Plataforma Centralizada e Unificada: Uma única fonte de verdade onde todas as áreas colaboram em tempo real, com total rastreabilidade.'
    },
    {
      problem: 'Prazos Descontrolados e Risco de Multa: A gestão manual de prazos legais é uma receita para o esquecimento e para multas pesadas do BNA.',
      solution: 'Workflow com Alertas Inteligentes: O sistema gere os prazos por si. Alertas automáticos e escalonamento garantem que nenhuma reclamação fica para trás.'
    },
    {
      problem: 'Segurança e Privacidade Vulneráveis: Dados confidenciais de clientes armazenados em folhas de cálculo, expostos a acessos indevidos e fugas de informação.',
      solution: 'Segurança de Nível Bancário (AWS): Encriptação de ponta a ponta e controlo de acessos rigoroso. A proteção dos seus dados é a nossa prioridade.'
    },
    {
      problem: 'Histórico Confuso e Não Auditável: Um emaranhado de ficheiros e e-mails que torna impossível reconstruir um processo ou responder a uma auditoria de forma rápida e segura.',
      solution: 'Trilha de Auditoria Completa e Inviolável: Cada acção, cada documento, cada interação fica registada num histórico cronológico, à prova de qualquer auditoria.'
    },
    {
      problem: 'Relatórios Manuais e Lentos: Horas ou dias gastos a compilar dados manualmente para criar relatórios que, muitas vezes, já estão desactualizados quando ficam prontos.',
      solution: 'Relatórios Estratégicos com um Clique: Gere os relatórios exigidos pelo BNA e obtenha insights valiosos sobre as causas-raiz das reclamações em segundos, não em dias.'
    },
    {
      problem: 'Gestão Reativa: A equipa passa a maior parte do tempo a reagir a problemas e a perseguir informação, com pouco tempo para análise.',
      solution: 'Gestão Proativa e Orientada por Dados: Transforme a sua área de um centro de custo numa fonte de inteligência estratégica que ajuda a empresa a melhorar.'
    }
  ]);

  const tableHeaders = [
    { key: 'problem', label: 'Realidade com Excel & E-mail (O Risco)'},
    { key: 'icon', label: ''},
    { key: 'solution', label: 'A Solução com GESTRIF (O Controlo)'}
  ];

  return (
    <section id="livro" className="bg-white relative w-full">
      <div className="flex flex-col items-center">
        <div className="box-border flex flex-col items-center justify-start px-4 sm:px-14 py-0 sm:py-[70px] w-full">
          <div className="flex flex-col gap-8 items-center justify-start max-w-[820px] w-full">
            {/* Header Content */}
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <h2 className="font-bold text-2xl sm:text-[38px] leading-[56px] text-primary text-center w-full">
                Substitua o risco operacional pelo controlo estratégico
              </h2>
              <p className="text-base sm:text-[22px] text-[#5B5B5B] leading-[32px] text-center max-w-[1126px]">
                Ferramentas de produtividade geral como o Excel e o E-mail não possuem a robustez e a segurança necessárias para a gestão de processos críticos e regulamentados. A sua equipa merece uma plataforma especializada. A sua equipa necessita de uma solução desenhada para a complexidade da nova exigência de gestão de reclamações, de modo a  minimizar o risco e maximizar a eficiência.
              </p>
            </div>

            {/* Table */}
            <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full table-fixed divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {tableHeaders.map((header, index) => (
                      <th
                        key={header.key}
                        className={`
                          px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider
                          ${index === 0 ? 'w-[calc(50%-2rem)]' : ''}
                          ${index === 1 ? 'w-16' : ''}
                          ${index === 2 ? 'w-[calc(50%-2rem)]' : ''}
                        `}
                      >
                        <div className="flex items-center space-x-1">
                          <span>{header.label}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {complaints.map((complaint, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="w-[calc(50%-2rem)] px-6 py-3">
                        <div className="text-xs text-gray-900 opacity-80 leading-[160%] break-words">
                          {complaint.problem}
                        </div>
                      </td>
                      <td className="p-3">
                        <div className='flex items-center justify-center h-full'>
                          <img src={icon} alt="check" className="w-6 h-6" />
                        </div>
                      </td>
                      <td className="w-[calc(50%-2rem)] px-6 py-3">
                        <div className="text-xs text-gray-900 opacity-80 leading-[160%] break-words">
                          {complaint.solution}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            <div/>
        </div>

            <p className="text-center">
              A sua equipa pode ser excelente, mas as ferramentas erradas transformam tarefas simples numa batalha constante. <span className="font-bold text-primary">O GESTRIF foi desenhado para eliminar, um por um, cada um destes obstáculos.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplaintsTable;
