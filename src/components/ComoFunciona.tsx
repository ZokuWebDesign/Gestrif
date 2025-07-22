import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";

interface ItemProps {
  title: string;
  description: string;
}

const items: ItemProps[] = [
  {
    title: "Colaboração difícil",
    description: "O registo de reclamações no Excel dificulta a colaboração em tempo real, pois as actualizações precisam ser compartilhadas manualmente, levando a conflitos de versões"
  },
  {
    title: "Falta de Automação",
    description: "A gestão manual é demorada e propensa a erros, enquanto a automação poderia liberar tempo para atividades mais estratégicas"
  },
  {
    title: "Histórico confuso",
    description: "O Excel não organiza bem o histórico de reclamações, dificultando o acompanhamento e a identificação de padrões."
  },
  {
    title: "Relatórios complicados",
    description: "Gerar relatórios no Excel é demorado e exige habilidades avançadas, tornando difícil a extração de insights valiosos para tomada de decisão."
  },
  {
    title: "Segurança e privacidade",
    description: "O Excel carece de recursos avançados de segurança, o que pode comprometer a proteção de dados sensíveis dos clientes."
  }
];

const ComoFunciona = () => {
  return (
    <section className="bg-white py-[80px] px-4 sm:px-6 lg:px-[72px]">
      <div className="w-full max-w-[1136px] mx-auto">
        <div className="flex flex-col items-center gap-9">
          {/* Header Content */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl sm:text-[38px] sm:leading-[40px] font-bold text-[#555555]">
              Nós entendemos porque as <span className="text-[#D92D20]">reclamações</span> continuam sendo <span className="text-[#D92D20]">um desafio para você!</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col gap-[2px]">
                <h3 className="text-xl font-semibold text-[#D92D20]">{item.title}</h3>
                <p className="text-[#555555] text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
