import { CheckCircle2, CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24"
];

const basicFeatures = [
  "Atualizações regulamentares e melhorias contínuas",
  "Acesso aos membros da área de reclamações",
  "Acesso aos membros da Administração",
  "Envio de emails aos reclamantes (abertura e encerramento)",
  "Formação online do sistema",
  "Suporte técnico 8 h/dia",
  "Carregamento das Reclamações existente de 2025",
  "API para consulta das Reclamações no site da Instituição",
  "Relatórios mensais da IA da Gestrif",
  "Relatórios Semestrais quantitativo",
  "Envio de SMS e/ou Whatsapp aos reclamantes",
  "Carregamento da lista das direcções / gabinetes",
  "Carregamento da lista das agências / balcões",
  "Carregamento da lista de produtos / subprodutos",
  "Carregamento da lista dos motivos da Reclamação",
  "Recuperação de reclamação / reclamante eliminado",
  "Um acesso ao operador do Call Center da Instituição",
  "Acesso a outras direcções / gabinetes",
  "Acesso a outras agências / balcões",
  "Relatórios Semestrais quantitativo e qualitativo",
  "Consultoria para melhoria do Ranking BNA",
  "Consultoria para análise da qualidade dos relatórios semestrais",
  "Inserção das reclamações de anos anteriores (sem anexos)",
  "Implementação de funcionalidades adicionais do cliente"
];

const essentialFeatures = [
  "Atualizações regulamentares e melhorias contínuas",
  "Acesso aos membros da área de reclamações",
  "Acesso aos membros da Comissão Executiva",
  "Envio de emails aos reclamantes (abertura e encerramento)",
  "Formação online do sistema",
  "Suporte técnico 8 h/dia",
  "Carregamento das Reclamações existente de 2025",
  "API para consulta das Reclamações no site da Instituição",
  "Relatórios mensais da IA da Gestrif",
  "Relatórios Semestrais quantitativo",
  "Envio de mensagens SMS ou Whatsapp aos reclamantes",
  "Carregamento da lista das direcções / gabinetes",
  "Carregamento da lista das agências / balcões",
  "Carregamento da lista de produtos / subprodutos",
  "Carregamento da lista dos motivos da Reclamação",
  "Recuperação de reclamação / reclamante eliminado",
  "Acesso aos operadores do Call Center da Instituição",
  "Acesso a outras direcções / gabinetes (limite de 5)",
  "Acesso a outras agências / balcões (limite de 5)",
  "Relatórios Semestrais",
  "Consultoria para melhoria do Ranking BNA",
  "Consultoria para análise da qualidade dos relatórios semestrais",
  "Inserção das reclamações de anos anteriores (sem anexos)",
  "Implementação de funcionalidades adicionais do cliente"
];

const customFeatures = [
  "Atualizações regulamentares e melhorias contínuas",
  "Acesso aos membros da área de reclamações",
  "Acesso aos membros da Comissão Executiva",
  "Envio de emails aos reclamantes (abertura e encerramento)",
  "Formação online do sistema",
  "Suporte técnico offline / online",
  "Carregamento das Reclamações existente de 2025",
  "API para consulta das Reclamações no site da Instituição",
  "Relatórios semanais e mensais da IA da Gestrif",
  "Relatórios Semestrais quantitativo",
  "Envio de SMS e/ou Whatsapp aos reclamantes",
  "Carregamento da lista das direcções / gabinetes",
  "Carregamento da lista das agências / balcões",
  "Carregamento da lista de produtos / subprodutos",
  "Carregamento da lista dos motivos da Reclamação",
  "Recuperação de reclamação / reclamante eliminado",
  "Acesso aos operadores do Call Center da Instituição",
  "Acesso a outras direcções / gabinetes (limite de 5)",
  "Acesso a outras agências / balcões (limite de 5)",
  "Relatórios Semestrais",
  "Consultoria para melhoria do Ranking BNA",
  "Consultoria para análise da qualidade dos relatórios semestrais",
  "Inserção das reclamações de anos anteriores (sem anexos)",
  "Implementação de funcionalidades adicionais do cliente"
];

const featureIcons = {
  basico: features.map((_, index) => index < 7), // First 7 features available
  essencial: features.map((_, index) => index < 19), // First 12 features available
  completo: features.map(() => true), // All features available
};

const PricingCard = ({ title, subtitle, price, bgColor = "bg-white", textColor = "text-secondary", features, basicFeatures, essentialFeatures, customFeatures, availability }) => (
  <Card className={`relative flex flex-col w-full p-2.5 rounded-[24px] border border-secondary ${bgColor}`}>
    <div className="pb-5 pt-6 mt-[2px] text-center">
      <p className={`text-[18px] font-semibold ${textColor}`}>{title}</p>
    </div>

    <div className="mb-6 text-center">
      {/*
      <h4 className={`mb-3 text-[32px] ${bgColor === "bg-white" ? "text-[#000000]" : "text-white"} font-bold`}>
        Kz {price}<span className="text-[#9CA3AF]">/mês</span>
      </h4>
      <p className="mb-[2px] text-[18px] text-[#878B92] font-semibold leading-[21px]">
        Kz 1.000.000,00/anual
      </p>
      */}
      <span className={`leading-[24px] ${textColor}`}>{subtitle}</span>
    </div>

    <ul className="space-y-4 pb-6 flex-1">
      {features.map((features, index) => (
        <li key={index} className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-xl flex items-center justify-center flex-shrink-0">
            {availability[index] ? (
              <CheckCircle2 className="w-full text-[#039855]" />
            ) : (
              <CircleX className="w-full text-[#FF0000]" />
            )}
          </div>
          <span className={`${bgColor === "bg-white" ? "text-[#202020]" : "text-white"} text-[18px] font-medium`}>
            {features}
          </span>
        </li>
      ))}
    </ul>
    {/*
    <p className="pb-3 text-center text-sm text-[#A7A7A8] font-semibold leading-[21px]">
      Licença anual, pago nos anos subsequentes após a 1ª subscrição
    </p>
    */}
  </Card>
);

const Pricing = () => {
  return (
    <section id="planos" className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center py-6 px-4 lg:px-14">
        
        {/* Header Content */}
        <div className="pb-14 text-center max-w-4xl">
          <h4 className="text-[18px] font-semibold text-[#5B5B5B] mb-2">
            Plano e benefícios
          </h4>
          <h2 className="font-bold text-2xl sm:text-[38px] leading-[40px] md:leading-[56px] text-primary text-center w-full">
            Uma Parceria Estratégica Adaptada à sua Dimensão
          </h2>
          <p className="text-base sm:text-[22px] text-[#5B5B5B] leading-[32px] text-center max-w-[1126px]">
            Cada instituição financeira tem necessidades únicas. O GESTRIF oferece planos flexíveis e personalizados que se adaptam perfeitamente à sua dimensão e complexidade, desde instituições financeiras bancarias a sociedades de microcréditos.  A nossa abordagem não é vender 'planos', mas sim construir a solução exacta para os seus desafios.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1150px]">
          <PricingCard
            title="Plano Básico"
            subtitle="Licença anual + Instalação + Suporte & Funcionalidades"
            price="1.000.000,00"
            features={basicFeatures}
            availability={featureIcons.basico}
          />
          <PricingCard
            title="Essencial"
            subtitle="Licença anual + Instalação + Suporte & Funcionalidades"
            price="1.200.000,00"
            bgColor="bg-secondary"
            textColor="text-white"
            features={essentialFeatures}
            availability={featureIcons.essencial}
          />
          <PricingCard
            title="Completo"
            subtitle="Licença anual + Instalação + Suporte & Funcionalidades"
            price="1.400.000,00"
            features={customFeatures}
            availability={featureIcons.completo}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
