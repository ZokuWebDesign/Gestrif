import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é o sistema e para quem ele é indicado?",
    answer: "O Gestrif é um sistema de gestão de preços e margens desenvolvido especialmente para o comércio eletrônico. É indicado para empreendedores, lojistas e empresas de todos os tamanhos que vendem online, desde pequenos vendedores individuais até grandes empresas com presença em múltiplos marketplaces."
  },
  {
    question: "O ssitema é exclusivo para instituições financeiras?",
    answer: "Não, o Gestrif não é exclusivo para instituições financeiras. Nossa plataforma é voltada para qualquer empresa ou pessoa que venda produtos online, seja através de marketplaces ou e-commerce próprio. Atendemos desde pequenos empreendedores até grandes varejistas."
  },
  {
    question: "Como o sistema ajuda no gerenciamento de reclamações?",
    answer: "O sistema oferece um módulo completo de gestão de reclamações que permite monitorar, categorizar e responder rapidamente às reclamações dos clientes. Você pode acompanhar métricas de satisfação, tempo de resposta e resolução, além de gerar relatórios detalhados para melhorar continuamente o atendimento."
  },
  {
    question: "Posso criar perfis com permissões personalizadas?",
    answer: "Sim, o sistema permite criar diferentes perfis de usuários com permissões personalizadas. Você pode definir exatamente quais funcionalidades e dados cada usuário ou grupo terá acesso, garantindo a segurança e organização da sua operação."
  },
  {
    question: "Como funcionam os relatórios de reclamações?",
    answer: "Os relatórios de reclamações são personalizáveis e fornecem análises detalhadas sobre todos os aspectos das reclamações recebidas. Você pode visualizar dados por período, categoria, status de resolução, tempo médio de resposta, satisfação do cliente e muito mais, auxiliando na tomada de decisões estratégicas."
  },
  {
    question: "O sistema permite integração com outros sistemas?",
    answer: "Sim, o Gestrif oferece integração com diversos sistemas e plataformas, incluindo os principais marketplaces do Brasil (como Mercado Livre, Amazon, Shopee) e diferentes sistemas ERP. Nossas APIs e conectores facilitam a sincronização de dados e automatização de processos."
  },
  {
    question: "Como a segurança dos dados dos meus clientes é garantida?",
    answer: "Utilizamos tecnologias avançadas de criptografia e conformidade com regulamentações locais e internacionais para proteger todas as informações armazenadas no app."
  },
  {
    question: "Posso transferir meu plano da conta agência para uma conta cliente?",
    answer: "Sim, oferecemos a possibilidade de transferência de planos entre contas agência e cliente. Entre em contato com nossa equipe de suporte para realizar a transferência de forma segura, mantendo todos os seus dados e configurações."
  },
  {
    question: "Qual a diferença entre conta agência e conta cliente?",
    answer: "A conta agência é projetada para empresas que gerenciam múltiplos clientes, oferecendo recursos de gestão em lote e relatórios consolidados. Já a conta cliente é ideal para empresas que gerenciam apenas seu próprio negócio, com funcionalidades focadas em uma única operação."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-white px-4 sm:px-14 lg:px-[72px] pb-[60px]">
      <div className="w-full max-w-[1136px] mx-auto">
        <div className="text-center pb-14">
          <h2 className="text-[32px] font-bold text-primary">
            Perguntas frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl px-0 py-0"
            >
              <AccordionTrigger className="flex w-full items-center gap-6 px-2 py-5 hover:no-underline">
                <span className="flex-1 text-left text-xl font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pr-2 text-[#5B5B5B]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
};

export default FAQ;
