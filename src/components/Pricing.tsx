import { CheckCircle2, CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  "Acesso a recursos adicionais Gestrif",
  "Actualizações regulamentares",
  "Acesso aos membros da comis. executiva",
  "Envio de email aos reclamantes",
  "Formação online do sistema",
  "Suporte técnico offline",
  "Carregamento das reclamações em análise e pendente de 2023",
  "Recuperação de reclamações",
  "Carregamento em massa das agências ",
  "Acesso a outras direcções/gabinetes",
  "Acesso a outras agências/balcões",
  "Carregamento em massa da lista das direcções/gabinetes",
  "Carregamento em massa da lista de produtos/subprodutos",
  "Carregamento da lista dos motivos da reclamação",
  "Inserção da base de dados de reclamações de 2022",
  "Inserção da base de dados de reclamações de 2023"
];

const planFeatures = {
  basico: features.map((_, index) => index < 7), // First 7 features available
  essencial: features.map((_, index) => index < 12), // First 12 features available
  completo: features.map(() => true), // All features available
};

const PricingCard = ({ title, price, bgColor = "bg-white", textColor = "text-secondary", features, availability }) => (
  <Card className={`relative flex flex-col w-full p-2.5 rounded-[24px] border border-secondary ${bgColor}`}>
    <div className="pb-5 pt-6 mt-[2px] text-center">
      <p className={`text-[18px] font-semibold ${textColor}`}>{title}</p>
    </div>

    <div className="mb-6 text-center">
      <h4 className={`mb-3 text-[32px] ${bgColor === "bg-white" ? "text-[#000000]" : "text-white"} font-bold`}>
        Kz {price}<span className="text-[#9CA3AF]">/mês</span>
      </h4>
      <p className="mb-[2px] text-[18px] text-[#878B92] font-semibold leading-[21px]">
        Kz 1.000.000,00/anual
      </p>
      <span className="text-sm text-[#039855] font-semibold leading-[21px]">Instalação + subscrição anual</span>
    </div>

    <ul className="space-y-4 pb-6 flex-1">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-xl flex items-center justify-center flex-shrink-0">
            {availability[index] ? (
              <CheckCircle2 className="w-full text-[#039855]" />
            ) : (
              <CircleX className="w-full text-[#FF0000]" />
            )}
          </div>
          <span className={`${bgColor === "bg-white" ? "text-[#202020]" : "text-white"} text-[18px] font-medium`}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
    <p className="pb-3 text-center text-sm text-[#A7A7A8] font-semibold leading-[21px]">
      Licença anual, pago nos anos subsequentes após a 1ª subscrição
    </p>
  </Card>
);

const Pricing = () => {
  return (
    <section id="preco" className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center py-6 px-4 lg:px-14">
        <div className="pb-14 text-center max-w-4xl">
          <h2 className="text-[32px] font-bold text-primary">
            Plano e benefícios
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1150px]">
          <PricingCard
            title="Básico"
            price="1.000.000,00"
            features={features}
            availability={planFeatures.basico}
          />
          <PricingCard
            title="Essencial"
            price="1.200.000,00"
            bgColor="bg-secondary"
            textColor="text-white"
            features={features}
            availability={planFeatures.essencial}
          />
          <PricingCard
            title="Completo"
            price="1.400.000,00"
            features={features}
            availability={planFeatures.completo}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
